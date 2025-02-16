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
    private raycaster = new Raycaster();
    private voxelMesh: Mesh;
    private selectionMesh: Mesh;

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
        this.raycaster.setFromCamera(pointer, this.camera);
        const intersections = this.raycaster.intersectObject(this.voxelMesh);
        if (intersections.length === 0 || !intersections[0].normal) {
            if ((this.selection = null)) return;
            this.selection = null;
            this.selectionMesh.visible = false;
            this.onChange?.();
            return;
        }

        const normal = intersections[0].normal;
        const offset = new Vector3(
            normal.x === 0 ? 1 : normal.x,
            normal.y === 0 ? 1 : normal.y,
            normal.z === 0 ? 1 : normal.z,
        );
        offset.multiplyVectors(offset, new Vector3(0.5, 0.5, 0.5));
        const intersectionPos = floorWithToleration(
            intersections[0].point.clone(),
            0.001,
        ).add(offset);
        if (this.selection && intersectionPos.equals(this.selection)) return;

        this.selection = intersectionPos;
        this.selectionMesh.position.copy(this.selection);
        this.selectionMesh.visible = true;
        this.onChange?.();
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
