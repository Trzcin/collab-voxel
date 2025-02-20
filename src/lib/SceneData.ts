import {
    BufferAttribute,
    BufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    Vector3,
} from 'three';

type VoxelData = {
    /** RGB voxel color, values range from 0.0 to 1.0 */
    color: { r: number; g: number; b: number };
};

/** This class stores data about all voxels in a scene.
 *  https://threejs.org/manual/#en/voxel-geometry
 */
export class SceneData {
    /** A string is used for the key since using Y.Map in the future requires keys to be strings. */
    private map = new Map<string, VoxelData>();
    private geometry?: BufferGeometry;

    constructor() {}

    public setVoxel(position: Vector3, color: Color) {
        this.map.set(this.vecToKey(position), {
            color: { r: color.r, g: color.g, b: color.b },
        });
        this.updateGeometry();
    }
    
    public hasVoxel(position: Vector3) {
        return this.map.has(this.vecToKey(position));
    }

    public getVoxelMesh(): Mesh {
        const material = new MeshBasicMaterial({ vertexColors: true });
        this.geometry = new BufferGeometry();
        this.updateGeometry();
        return new Mesh(this.geometry, material);
    }

    /** This function generates geometry data for all voxels in the scene. */
    private generateGeometry(): {
        positions: number[];
        normals: number[];
        indicies: number[];
        colors: number[];
    } {
        const positions: number[] = [];
        const normals: number[] = [];
        const indicies: number[] = [];
        const colors: number[] = [];

        for (const [key, data] of this.map.entries()) {
            const pos = this.keyToVec(key);
            for (const { dir, corners } of faces) {
                const neighbourPos = new Vector3(
                    pos.x + dir[0],
                    pos.y + dir[1],
                    pos.z + dir[2],
                );
                // We skip this face if there is a voxel connected to it.
                if (this.map.has(this.vecToKey(neighbourPos))) continue;
                const ndx = positions.length / 3;
                for (const c of corners) {
                    positions.push(pos.x + c[0], pos.y + c[1], pos.z + c[2]);
                    normals.push(...dir);
                    colors.push(data.color.r, data.color.g, data.color.b);
                }
                indicies.push(ndx, ndx + 1, ndx + 2, ndx + 2, ndx + 1, ndx + 3);
            }
        }

        return {
            positions,
            normals,
            indicies,
            colors,
        };
    }
    
    /** Call this when the voxel mesh geomtry buffer should be updated. */
    private updateGeometry() {
        if (!this.geometry) return;

        const { positions, normals, indicies, colors } =
            this.generateGeometry();
        this.geometry.setAttribute(
            'position',
            new BufferAttribute(new Float32Array(positions), 3),
        );
        this.geometry.setAttribute(
            'normal',
            new BufferAttribute(new Float32Array(normals), 3),
        );
        this.geometry.setAttribute(
            'color',
            new BufferAttribute(new Float32Array(colors), 3),
        );
        this.geometry.setIndex(indicies);
    }

    /** Converts a voxel position to a key for the map storage. */
    private vecToKey(vec: Vector3): string {
        return `${vec.x},${vec.y},${vec.z}`;
    }

    /** Converts a key used for map storage into a voxel position. */
    private keyToVec(key: string): Vector3 {
        const parts = key.split(',').map((p) => Number(p));
        return new Vector3(parts[0], parts[1], parts[2]);
    }
}

const faces = [
    {
        // left
        dir: [-1, 0, 0],
        corners: [
            [0, 1, 0],
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 1],
        ],
    },
    {
        // right
        dir: [1, 0, 0],
        corners: [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 0],
        ],
    },
    {
        // bottom
        dir: [0, -1, 0],
        corners: [
            [1, 0, 1],
            [0, 0, 1],
            [1, 0, 0],
            [0, 0, 0],
        ],
    },
    {
        // top
        dir: [0, 1, 0],
        corners: [
            [0, 1, 1],
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 0],
        ],
    },
    {
        // back
        dir: [0, 0, -1],
        corners: [
            [1, 0, 0],
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
    },
    {
        // front
        dir: [0, 0, 1],
        corners: [
            [0, 0, 1],
            [1, 0, 1],
            [0, 1, 1],
            [1, 1, 1],
        ],
    },
];
