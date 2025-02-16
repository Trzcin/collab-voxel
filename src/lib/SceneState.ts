import { Scene, type Vector3 } from 'three';
import { BoundingBox } from './BoundingBox';

export class SceneState {
    public scene = new Scene();
    private boundingBox: BoundingBox;

    constructor(
        public cameraPos: Vector3,
        private sceneSize: number,
    ) {
        this.boundingBox = new BoundingBox(this.sceneSize);
        this.scene.add(this.boundingBox.object);
    }

    /** Call this function when the scene is about to be rerendered due to camera movement.
     *  It will update elements dependent on the camera position.
     */
    public cameraUpdate() {
        this.boundingBox.update(this.cameraPos);
    }
}
