import {
    BoxGeometry,
    Camera,
    Color,
    Mesh,
    MeshBasicMaterial,
    Raycaster,
    Scene,
    Vector2,
    Vector3,
} from 'three';
import { BoundingBox } from './BoundingBox';
import { SceneData } from './SceneData';

export class SceneState {
    public scene = new Scene();
    public data = new SceneData();
    public selection: Vector3 | null = null;
    public onChange?: () => void;
    private boundingBox: BoundingBox;
    private voxelMesh: Mesh;
    private selectionMesh: Mesh;
    private lastPointer?: Vector2;

    constructor(
        public camera: Camera,
        private sceneSize: number,
    ) {
        this.boundingBox = new BoundingBox(this.sceneSize);
        this.scene.add(this.boundingBox.object);

        this.data.setVoxel(new Vector3(3, 0, 3), new Color(Color.NAMES.red));
        this.data.setVoxel(new Vector3(2, 0, 3), new Color(Color.NAMES.blue));
        this.data.setVoxel(new Vector3(4, 0, 3), new Color(Color.NAMES.green));
        this.data.setVoxel(new Vector3(3, 0, 2), new Color(Color.NAMES.purple));
        this.data.setVoxel(new Vector3(3, 0, 4), new Color(Color.NAMES.aqua));
        this.data.setVoxel(new Vector3(3, 1, 3), new Color(Color.NAMES.lime));
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
            if ((this.selection = null)) return;
            this.selection = null;
            this.selectionMesh.visible = false;
            this.onChange?.();
            return;
        }

        const { position, normal } = intersection;
        const offset = new Vector3(
            normal.x === 0 ? 1 : normal.x,
            normal.y === 0 ? 1 : normal.y,
            normal.z === 0 ? 1 : normal.z,
        );
        offset.multiplyVectors(offset, new Vector3(0.5, 0.5, 0.5));
        const voxelPos = position.clone().add(normal);

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
        this.onChange?.();
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
                }
                else if (!boundsNormal.equals(insideBounds)) {
                    return {
                        position: intPos.sub(boundsNormal),
                        normal: boundsNormal
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
        if (!this.isInBounds(position)) return null;
        if (position.x === 0) return new Vector3(1, 0, 0);
        if (position.x === this.sceneSize - 1) return new Vector3(-1, 0, 0);
        if (position.y === 0) return new Vector3(0, 1, 0);
        if (position.y === this.sceneSize - 1) return new Vector3(0, -1, 0);
        if (position.z === 0) return new Vector3(0, 0, 1);
        if (position.z === this.sceneSize - 1) return new Vector3(0, 0, -1);
        return null;
    }
    
    private isInBounds(position: Vector3): boolean {
        return position.x >= 0 && position.x < this.sceneSize && position.y >= 0 && position.y < this.sceneSize && position.z >= 0 && position.z < this.sceneSize;
    }
}

/** This function acts like `Vector3.floor` however if the value is very close to the next integer value, it will be rounded up instead. */
function floorWithToleration(vec: Vector3, toleration: number): Vector3 {
    const ceiled = vec.clone().ceil();
    vec.x = ceiled.x - vec.x <= toleration ? ceiled.x : ceiled.x - 1;
    vec.y = ceiled.y - vec.y <= toleration ? ceiled.y : ceiled.y - 1;
    vec.z = ceiled.z - vec.z <= toleration ? ceiled.z : ceiled.z - 1;
    return vec;
}
