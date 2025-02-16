<script lang="ts">
    import { onMount } from 'svelte';
    import { MOUSE, PerspectiveCamera, WebGLRenderer } from 'three';
    import { OrbitControls } from 'three/examples/jsm/Addons.js';
    import { SceneState } from '../lib/SceneState';

    let root: HTMLDivElement;
    let rootSize = $state({ width: 0, height: 0 });

    const renderer = new WebGLRenderer();
    const camera = new PerspectiveCamera(45, 1, 1, 10000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.mouseButtons = {
        LEFT: null,
        RIGHT: MOUSE.ROTATE,
        MIDDLE: MOUSE.PAN,
    };
    camera.position.set(20, 20, 20);
    controls.update();
    controls.saveState();
    const sceneState = new SceneState(camera.position, 7);

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

    function handleKey(ev: KeyboardEvent) {
        if (ev.key === 'r') controls.reset();
    }
</script>

<svelte:window onkeydown={handleKey} />

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
