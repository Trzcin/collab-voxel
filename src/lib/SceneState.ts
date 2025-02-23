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

export class SceneState {
    public scene = new Scene();
    public data: SceneData;
    public selection: Vector3 | null = null;
    public onChange?: () => void;
    private boundingBox: BoundingBox;
    private voxelMesh: Mesh;
    private selectionMesh: Mesh;
    private lastPointer?: Vector2;
    private provider: WebsocketProvider;

    constructor(
        public camera: Camera,
        private sceneSize: number,
    ) {
        this.boundingBox = new BoundingBox(this.sceneSize);
        this.scene.add(this.boundingBox.object);

        const doc = new Y.Doc();
        this.provider = new WebsocketProvider(
            'ws://localhost:1234',
            'demo',
            doc,
        );

        this.data = new SceneData(doc.getMap('voxels'));
        this.data.onChange = () => this.onChange?.();
        this.voxelMesh = this.data.getVoxelMesh();
        this.scene.add(this.voxelMesh);

        const selectionGeometry = new BoxGeometry(1, 1, 1);
        const selectionMaterial = new MeshBasicMaterial({
            color: new Color(Color.NAMES.red),
            opacity: 0.5,
            transparent: true,
        });
        this.selectionMesh = new Mesh(selectionGeometry, selectionMaterial);
        this.selectionMesh.visible = false;
        this.scene.add(this.selectionMesh);
    }

    /** Call this function when the scene is about to be rerendered due to camera movement.
     *  It will update elements dependent on the camera position.
     */
    public cameraUpdate() {
        this.boundingBox.update(this.camera.position);
    }

    /** Call this when the pointer is moved on the canvas to update the current selection.
     *  @param pointer Pointer position on the canvas, both x and y axes values should range from -1 to 1.
     */
    public updateSelection(pointer: Vector2) {
        this.lastPointer = pointer;
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
        const voxelPos = position.clone().add(normal);

        if (!this.isInBounds(voxelPos)) {
            this.clearSelection();
            return;
        }

        if (this.selection && voxelPos.equals(this.selection)) return;

        this.selection = voxelPos;
        this.selectionMesh.position.copy(voxelPos.clone().add(offset));
        this.selectionMesh.visible = true;
        this.onChange?.();
    }

    /** Places a voxel at the current selection */
    public placeVoxel() {
        if (!this.selection) return;
        this.data.setVoxel(this.selection, new Color(Color.NAMES.white));
        if (this.lastPointer) this.updateSelection(this.lastPointer);
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

    private clearSelection() {
        if (!this.selection) return;
        this.selection = null;
        this.selectionMesh.visible = false;
        this.onChange?.();
    }
}
