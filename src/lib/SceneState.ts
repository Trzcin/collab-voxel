import { Scene, type Vector3 } from 'three';
import { BoundingBox } from './BoundingBox';

export class SceneState {
    public scene = new Scene();
    private boundingBox: BoundingBox;

    constructor(
        public cameraPos: Vector3,
        private sceneSize: Vector3,
    ) {
        this.boundingBox = new BoundingBox(this.sceneSize);
        this.scene.add(this.boundingBox.object);
    }

    public update() {
        this.boundingBox.update(this.cameraPos);
    }
}
