<script lang="ts">
    import { MOUSE, PerspectiveCamera, Vector2, WebGLRenderer } from 'three';
    import { OrbitControls } from 'three/examples/jsm/Addons.js';
    import { SceneState } from '../lib/SceneState.svelte';

    let root: HTMLDivElement | undefined = $state();
    let rootSize = $state({ width: 0, height: 0 });

    const SCENE_SIZE = 7;
    const renderer = new WebGLRenderer();
    const camera = new PerspectiveCamera(45, 1, 1, 10000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.mouseButtons = {
        LEFT: null,
        RIGHT: MOUSE.ROTATE,
        MIDDLE: MOUSE.PAN,
    };
    camera.position.set(20, 20, 20);
    controls.target.set(SCENE_SIZE / 2, 0, SCENE_SIZE / 2);
    controls.update();
    controls.saveState();
    const sceneState = new SceneState(SCENE_SIZE);
    sceneState.camera = camera;

    $effect(() => {
        if (!root || !sceneState.ready) return;
        root.appendChild(renderer.domElement);
    });

    $effect(() => {
        renderer.setSize(rootSize.width, rootSize.height);
        camera.aspect = rootSize.width / rootSize.height;
        camera.updateProjectionMatrix();
        sceneState.cameraUpdate();
        requestRender();
    });

    let renderRequested = false;
    /** Schedules a render on demand.
     *  The `renderRequested` flag is used to prevent duplicate renders.
     */
    function requestRender() {
        if (!renderRequested) {
            renderRequested = true;
            requestAnimationFrame(() => {
                renderRequested = false;
                renderer.render(sceneState.scene, camera);
            });
        }
    }
    controls.addEventListener('change', () => {
        sceneState.cameraUpdate();
        requestRender();
    });
    sceneState.onChange = requestRender;

    function handleKey(ev: KeyboardEvent) {
        if (!sceneState.ready) return;

        if (ev.key === 'R') controls.reset();
        else if (ev.ctrlKey && ev.key === 'z') sceneState.data.undo();
        else if (ev.ctrlKey && ev.key === 'y') sceneState.data.redo();
        else if (ev.key === 'c') sceneState.data.clear();
        else if (ev.key === 'w') sceneState.wireframe = !sceneState.wireframe;
        else if (ev.key === 'a') sceneState.mode = 'attach';
        else if (ev.key === 'd') sceneState.mode = 'delete';
        else if (ev.key === 'r') sceneState.mode = 'replace';
    }

    function handlePointerMove(ev: PointerEvent) {
        sceneState.updateSelection(
            new Vector2(
                (ev.clientX / rootSize.width) * 2 - 1,
                (ev.clientY / rootSize.height) * -2 + 1,
            ),
        );
    }
</script>

<svelte:window onkeydown={handleKey} />

{#if sceneState.ready}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        bind:this={root}
        bind:clientWidth={rootSize.width}
        bind:clientHeight={rootSize.height}
        onpointermove={handlePointerMove}
        onpointerleave={() => sceneState.clearSelection()}
        onclick={() => sceneState.actOnSelection()}
    ></div>
{:else}
    <h2>Connecting to server</h2>
{/if}

<style>
    div {
        width: 100vw;
        height: 100vh;
    }
</style>
