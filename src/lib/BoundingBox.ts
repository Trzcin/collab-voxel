import { GridHelper, Group, Plane, Vector3, type Camera } from 'three';

type GridAxes = 'xy' | 'xz' | 'yx' | 'yz' | 'zx' | 'zy';

export class BoundingBox {
    public object = new Group();
    private faces: Record<GridAxes, { plane: Plane; grid: GridHelper }>;

    constructor(
        private boxSize: Vector3,
        private showGrid = true,
    ) {
        const boundsSize = 5;
        const divisions = showGrid ? boundsSize * 2 : 1;
        const color = '#fff';

        // Setup planes and grids for all box faces
        this.faces = {
            xy: {
                plane: new Plane(new Vector3(1, 0, 0), 0),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
            xz: {
                plane: new Plane(new Vector3(1, 0, 0), boundsSize * -2),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
            yx: {
                plane: new Plane(new Vector3(0, 1, 0), 0),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
            yz: {
                plane: new Plane(new Vector3(0, 1, 0), boundsSize * -2),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
            zx: {
                plane: new Plane(new Vector3(0, 0, 1), 0),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
            zy: {
                plane: new Plane(new Vector3(0, 0, 1), boundsSize * -2),
                grid: new GridHelper(boundsSize * 2, divisions, color, color),
            },
        };

        // Position and rotate grids
        this.faces.xy.grid.position.x += 0;
        this.faces.xy.grid.position.y += boundsSize;
        this.faces.xy.grid.position.z += boundsSize;
        this.faces.xy.grid.rotateZ(Math.PI / 2);

        this.faces.xz.grid.position.x += boundsSize * 2;
        this.faces.xz.grid.position.y += boundsSize;
        this.faces.xz.grid.position.z += boundsSize;
        this.faces.xz.grid.rotateZ(Math.PI / 2);

        this.faces.yx.grid.position.x += boundsSize;
        this.faces.yx.grid.position.y += 0;
        this.faces.yx.grid.position.z += boundsSize;

        this.faces.yz.grid.position.x += boundsSize;
        this.faces.yz.grid.position.y += boundsSize * 2;
        this.faces.yz.grid.position.z += boundsSize;

        this.faces.zx.grid.position.x += boundsSize;
        this.faces.zx.grid.position.y += boundsSize;
        this.faces.zx.grid.position.z += 0;
        this.faces.zx.grid.rotateX(Math.PI / 2);

        this.faces.zy.grid.position.x += boundsSize;
        this.faces.zy.grid.position.y += boundsSize;
        this.faces.zy.grid.position.z += boundsSize * 2;
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
