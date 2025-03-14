import {
    BoxGeometry,
    Camera,
    Color,
    Mesh,
    MeshBasicMaterial,
    Scene,
    Vector2,
    Vector3,
} from 'three';
import { BoundingBox } from './BoundingBox';
import { SceneData } from './SceneData';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { ColorManager } from './ColorManager.svelte';
import { getContext, setContext } from 'svelte';

export class SceneState {
    public scene = new Scene();
    public data: SceneData;
    public selection: Vector3 | null = null;
    public camera?: Camera;
    public username = crypto.randomUUID().split('-')[0];
    public onChange?: () => void;
    public mode = $state<Mode>('attach');
    public wireframe = $state(false);
    public showGrid = $state(true);
    public colorManager = new ColorManager();
    private boundingBox?: BoundingBox;
    private voxelMesh: Mesh;
    private lastPointer?: Vector2;
    private provider: WebsocketProvider;
    private users = new Map<number, UserData>();
    private connected = $state(false);
    private synced = $state(false);
    public ready = $derived(this.connected && this.synced);
    private ydoc: Y.Doc;

    constructor(public sceneSize: number) {
        const local = import.meta.env.VITE_LOCAL !== 'false';
        this.ydoc = new Y.Doc();
        this.provider = new WebsocketProvider(
            import.meta.env.VITE_WS_URL ?? 'ws://localhost:1234',
            'voxel',
            this.ydoc,
            {
                connect: !local,
            },
        );
        if (local) {
            this.provider.connectBc();
            this.synced = true;
            this.connected = true;
        } else {
            this.provider.on('sync', (sync) => (this.synced = sync));
            this.provider.on(
                'status',
                ({ status }) => (this.connected = status == 'connected'),
            );
        }
        this.provider.awareness.on(
            'change',
            this.handleAwarenessUpdate.bind(this),
        );
        this.provider.awareness.setLocalStateField('username', this.username);

        // Setup scene
        this.data = new SceneData(this.ydoc.getMap('voxels'));
        this.data.onChange = () => this.onChange?.();
        this.voxelMesh = this.data.getVoxelMesh();
        this.scene.add(this.voxelMesh);

        $effect(() => {
            this.mode;
            if (this.lastPointer) this.updateSelection(this.lastPointer);
        });
        $effect(() => {
            (<MeshBasicMaterial>this.voxelMesh.material).wireframe =
                this.wireframe;
            this.onChange?.();
        });
        $effect(() => {
            const box = new BoundingBox(this.sceneSize, this.showGrid);
            this.boundingBox = box;
            this.scene.add(box.object);
            if (this.camera) this.boundingBox.update(this.camera.position);
            this.onChange?.();

            return () => {
                this.scene.remove(box.object);
            };
        });
    }

    /** Call this function when the scene is about to be rerendered due to camera movement.
     *  It will update elements dependent on the camera position.
     */
    public cameraUpdate() {
        if (!this.camera || !this.boundingBox) return;
        this.boundingBox.update(this.camera.position);
    }

    /** Call this when the pointer is moved on the canvas to update the current selection.
     *  @param pointer Pointer position on the canvas, both x and y axes values should range from -1 to 1.
     */
    public updateSelection(pointer: Vector2) {
        this.lastPointer = pointer;
        if (!this.camera) return;
        const rayStart = new Vector3().setFromMatrixPosition(
            this.camera.matrixWorld,
        );
        const rayEnd = new Vector3(pointer.x, pointer.y, 1).unproject(
            this.camera,
        );
        const intersection = this.intersectRay(rayStart, rayEnd);
        if (!intersection) {
            this.clearSelection();
            return;
        }

        const { position, normal } = intersection;
        const offset = new Vector3(0.5, 0.5, 0.5);
        const voxelPos = position.clone();
        if (this.mode === 'attach') {
            voxelPos.add(normal);
        }

        if (!this.isInBounds(voxelPos)) {
            this.clearSelection();
            return;
        }

        if (this.selection && voxelPos.equals(this.selection)) return;

        this.selection = voxelPos;
        const selectionMeshPos = voxelPos.clone().add(offset);
        this.provider.awareness.setLocalStateField(
            'selection',
            selectionMeshPos.toArray(),
        );
    }

    public clearSelection() {
        if (!this.selection) return;
        this.selection = null;
        this.provider.awareness.setLocalStateField('selection', null);
    }

    /** Performs an action on the current selection depending on the mode:
     * - `attach` - places a voxel at the selection
     * - `delete` - deletes the selected voxel
     * - `replace` - replaces the selected voxel
     */
    public actOnSelection() {
        if (!this.selection) return;

        if (this.mode === 'attach' || this.mode === 'replace') {
            this.data.setVoxel(
                this.selection,
                new Color(this.colorManager.color),
            );
        } else if (this.mode === 'delete') {
            this.data.deleteVoxel(this.selection);
        }

        if (this.lastPointer) this.updateSelection(this.lastPointer);
    }

    public destroy() {
        this.provider.destroy();
        this.ydoc.destroy();
    }

    private intersectRay(
        start: Vector3,
        end: Vector3,
    ): { position: Vector3; normal: Vector3 } | null {
        const dir = end.clone().sub(start);
        const len = dir.length();
        dir.normalize();
        const intPos = start.clone().floor();
        const step = new Vector3(
            dir.x > 0 ? 1 : -1,
            dir.y > 0 ? 1 : -1,
            dir.z > 0 ? 1 : -1,
        );
        const tDelta = new Vector3(
            Math.abs(1 / dir.x),
            Math.abs(1 / dir.y),
            Math.abs(1 / dir.z),
        );
        const dist = new Vector3(
            step.x > 0 ? intPos.x + 1 - start.x : start.x - intPos.x,
            step.y > 0 ? intPos.y + 1 - start.y : start.y - intPos.y,
            step.z > 0 ? intPos.z + 1 - start.z : start.z - intPos.z,
        );
        // location of nearest voxel boundary, in units of t
        const tMax = new Vector3(
            tDelta.x < Infinity ? tDelta.x * dist.x : Infinity,
            tDelta.y < Infinity ? tDelta.y * dist.y : Infinity,
            tDelta.z < Infinity ? tDelta.z * dist.z : Infinity,
        );

        let steppedIndex = -1;
        let t = 0.0;
        let insideBounds: Vector3 | null = null;

        // main loop along raycast vector
        while (t <= len) {
            if (this.data.hasVoxel(intPos)) {
                return {
                    position: intPos,
                    normal: new Vector3(
                        steppedIndex === 0 ? -step.x : 0,
                        steppedIndex === 1 ? -step.y : 0,
                        steppedIndex === 2 ? -step.z : 0,
                    ),
                };
            }

            if (this.mode === 'attach') {
                const boundsNormal = this.intersectsBounds(intPos);
                if (boundsNormal) {
                    if (!insideBounds) {
                        insideBounds = boundsNormal;
                    } else if (
                        (insideBounds.x !== 0 &&
                            boundsNormal.x === -1 * insideBounds.x) ||
                        (insideBounds.x === 0 && boundsNormal.x !== 0) ||
                        (insideBounds.y !== 0 &&
                            boundsNormal.y === -1 * insideBounds.y) ||
                        (insideBounds.y === 0 && boundsNormal.y !== 0) ||
                        (insideBounds.z !== 0 &&
                            boundsNormal.z === -1 * insideBounds.z) ||
                        (insideBounds.z === 0 && boundsNormal.z !== 0)
                    ) {
                        const voxelPos = intPos.clone().add(boundsNormal);
                        if (this.data.hasVoxel(voxelPos)) return null;
                        return {
                            position: intPos,
                            normal: boundsNormal,
                        };
                    }
                }
            }

            // advance t to next nearest voxel boundary
            if (tMax.x < tMax.y) {
                if (tMax.x < tMax.z) {
                    intPos.x += step.x;
                    t = tMax.x;
                    tMax.x += tDelta.x;
                    steppedIndex = 0;
                } else {
                    intPos.z += step.z;
                    t = tMax.z;
                    tMax.z += tDelta.z;
                    steppedIndex = 2;
                }
            } else {
                if (tMax.y < tMax.z) {
                    intPos.y += step.y;
                    t = tMax.y;
                    tMax.y += tDelta.y;
                    steppedIndex = 1;
                } else {
                    intPos.z += step.z;
                    t = tMax.z;
                    tMax.z += tDelta.z;
                    steppedIndex = 2;
                }
            }
        }

        return null;
    }

    /** Returns a normal vector if this voxel position is next to the bounds. */
    private intersectsBounds(position: Vector3): Vector3 | null {
        if (!this.isInBounds(position, 1)) return null;
        const normal = new Vector3(
            position.x === -1 ? 1 : position.x === this.sceneSize ? -1 : 0,
            position.y === -1 ? 1 : position.y === this.sceneSize ? -1 : 0,
            position.z === -1 ? 1 : position.z === this.sceneSize ? -1 : 0,
        );
        if (normal.equals(new Vector3())) {
            return null;
        } else {
            return normal;
        }
    }

    private isInBounds(position: Vector3, padding = 0): boolean {
        return (
            position.x >= 0 - padding &&
            position.x < this.sceneSize + padding &&
            position.y >= 0 - padding &&
            position.y < this.sceneSize + padding &&
            position.z >= 0 - padding &&
            position.z < this.sceneSize + padding
        );
    }

    private handleAwarenessUpdate({
        added,
        updated,
        removed,
    }: {
        added: number[];
        updated: number[];
        removed: number[];
    }) {
        const modified = [...added, ...updated];
        const states = this.provider.awareness.getStates();
        for (const id of modified) {
            const state = states.get(id);
            if (!state || !state.username) continue;
            let userData = this.users.get(id);
            if (!userData) {
                // Add selection mesh for this user
                const mesh = this.getSelectionMesh(state.username);
                if (state.selection) {
                    mesh.position.fromArray(state.selection);
                    mesh.visible = true;
                }
                this.scene.add(mesh);
                userData = { selectionMesh: mesh };
            } else {
                // Update selection mesh for this user
                if (state.selection) {
                    userData.selectionMesh.position.fromArray(state.selection);
                    userData.selectionMesh.visible = true;
                } else {
                    userData.selectionMesh.visible = false;
                }
            }
            this.users.set(id, userData);
        }

        for (const id of removed) {
            const data = this.users.get(id);
            if (!data) continue;
            this.scene.remove(data.selectionMesh);
            this.users.delete(id);
        }
        this.onChange?.();
    }

    private getSelectionMesh(username: string): Mesh {
        const selectionGeometry = new BoxGeometry(1, 1, 1);
        const selectionMaterial = new MeshBasicMaterial({
            color: stringToColor(username),
            opacity: 0.5,
            transparent: true,
            depthTest: false,
        });
        const mesh = new Mesh(selectionGeometry, selectionMaterial);
        mesh.visible = false;
        return mesh;
    }
}

const sceneStateKey = Symbol('sceneState');
export function setSceneStateCtx(sceneState: SceneState) {
    setContext(sceneStateKey, sceneState);
}
export function getSceneStateCtx(): SceneState {
    return getContext(sceneStateKey);
}

type UserData = { selectionMesh: Mesh };
type Mode = 'attach' | 'delete' | 'replace';

function stringToColor(str: string): Color {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = Math.max(hash % 360, 0);
    const s = 100;
    const l = 50;
    const colorHSL = `hsl(${h}, ${s}%, ${l}%)`;
    return new Color(colorHSL);
}
