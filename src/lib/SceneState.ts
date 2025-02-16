import { Color, Scene, Vector3 } from 'three';
import { BoundingBox } from './BoundingBox';
import { SceneData } from './SceneData';

export class SceneState {
    public scene = new Scene();
    public data = new SceneData();
    private boundingBox: BoundingBox;

    constructor(
        public cameraPos: Vector3,
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
        this.scene.add(this.data.getVoxelMesh());
    }

    /** Call this function when the scene is about to be rerendered due to camera movement.
     *  It will update elements dependent on the camera position.
     */
    public cameraUpdate() {
        this.boundingBox.update(this.cameraPos);
    }
}
