import { GridHelper, Group, Plane, Vector3 } from 'three';

type GridAxes = 'xy' | 'xz' | 'yx' | 'yz' | 'zx' | 'zy';

/** Draws a box around the scene.
 *  Only edges on faces viewed from inside the scene are visible to the camera.
 *  By default a grid is also drawn on each visible face.
 *  Currently it is limited to cube scene sizes due to the `GridHelper` class.
 * */
export class BoundingBox {
    public object = new Group();
    private faces: Record<GridAxes, { plane: Plane; grid: GridHelper }>;

    constructor(boxSize: number, showGrid = true) {
        const divisions = showGrid ? boxSize : 1;
        const color = '#fff';

        // Setup planes and grids for all box faces
        this.faces = {
            xy: {
                plane: new Plane(new Vector3(1, 0, 0), 0),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
            xz: {
                plane: new Plane(new Vector3(1, 0, 0), -boxSize),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
            yx: {
                plane: new Plane(new Vector3(0, 1, 0), 0),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
            yz: {
                plane: new Plane(new Vector3(0, 1, 0), -boxSize),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
            zx: {
                plane: new Plane(new Vector3(0, 0, 1), 0),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
            zy: {
                plane: new Plane(new Vector3(0, 0, 1), -boxSize),
                grid: new GridHelper(boxSize, divisions, color, color),
            },
        };

        // Position and rotate grids
        this.faces.xy.grid.position.x += 0;
        this.faces.xy.grid.position.y += boxSize / 2;
        this.faces.xy.grid.position.z += boxSize / 2;
        this.faces.xy.grid.rotateZ(Math.PI / 2);

        this.faces.xz.grid.position.x += boxSize;
        this.faces.xz.grid.position.y += boxSize / 2;
        this.faces.xz.grid.position.z += boxSize / 2;
        this.faces.xz.grid.rotateZ(Math.PI / 2);

        this.faces.yx.grid.position.x += boxSize / 2;
        this.faces.yx.grid.position.y += 0;
        this.faces.yx.grid.position.z += boxSize / 2;

        this.faces.yz.grid.position.x += boxSize / 2;
        this.faces.yz.grid.position.y += boxSize;
        this.faces.yz.grid.position.z += boxSize / 2;

        this.faces.zx.grid.position.x += boxSize / 2;
        this.faces.zx.grid.position.y += boxSize / 2;
        this.faces.zx.grid.position.z += 0;
        this.faces.zx.grid.rotateX(Math.PI / 2);

        this.faces.zy.grid.position.x += boxSize / 2;
        this.faces.zy.grid.position.y += boxSize / 2;
        this.faces.zy.grid.position.z += boxSize;
        this.faces.zy.grid.rotateX(Math.PI / 2);

        // Add all grids to the group
        Object.values(this.faces).forEach(({ grid }) => this.object.add(grid));
    }

    public update(cameraPos: Vector3) {
        this.faces.xy.grid.visible = this.isGridVisible(
            cameraPos,
            this.faces.xy.plane,
        );
        this.faces.xz.grid.visible = this.isInverseGridVisible(
            cameraPos,
            this.faces.xz.plane,
        );
        this.faces.yx.grid.visible = this.isGridVisible(
            cameraPos,
            this.faces.yx.plane,
        );
        this.faces.yz.grid.visible = this.isInverseGridVisible(
            cameraPos,
            this.faces.yz.plane,
        );
        this.faces.zx.grid.visible = this.isGridVisible(
            cameraPos,
            this.faces.zx.plane,
        );
        this.faces.zy.grid.visible = this.isInverseGridVisible(
            cameraPos,
            this.faces.zy.plane,
        );
    }

    private isGridVisible(cameraPos: Vector3, plane: Plane) {
        return plane.distanceToPoint(cameraPos) >= 0;
    }

    private isInverseGridVisible(cameraPos: Vector3, plane: Plane) {
        return plane.distanceToPoint(cameraPos) < 0;
    }
}
