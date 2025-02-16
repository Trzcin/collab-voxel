<script lang="ts">
    import { onMount } from 'svelte';
    import { PerspectiveCamera, Vector3, WebGLRenderer } from 'three';
    import { OrbitControls } from 'three/examples/jsm/Addons.js';
    import { SceneState } from '../lib/SceneState';

    let root: HTMLDivElement;
    let rootSize = $state({ width: 0, height: 0 });

    const renderer = new WebGLRenderer();
    const camera = new PerspectiveCamera(45, 1, 1, 10000);
    const controls = new OrbitControls(camera, renderer.domElement);
    const sceneState = new SceneState(camera.position, new Vector3(10, 10, 10));
    camera.position.set(20, 20, 20);
    controls.update();

    onMount(() => {
        root.appendChild(renderer.domElement);
        renderer.setAnimationLoop(animate);
    });

    $effect(() => {
        renderer.setSize(rootSize.width, rootSize.height);
        camera.aspect = rootSize.width / rootSize.height;
        camera.updateProjectionMatrix();
    });

    /** Main rendering loop */
    function animate() {
        sceneState.update();
        controls.update();
        renderer.render(sceneState.scene, camera);
    }
</script>

<div
    bind:this={root}
    bind:clientWidth={rootSize.width}
    bind:clientHeight={rootSize.height}
></div>

<style>
    div {
        width: 100vw;
        height: 100vh;
    }
</style>
