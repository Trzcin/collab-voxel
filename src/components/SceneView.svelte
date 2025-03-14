<script lang="ts">
    import { MOUSE, PerspectiveCamera, Vector2, WebGLRenderer } from 'three';
    import { OrbitControls } from 'three/examples/jsm/Addons.js';
    import { getSceneStateCtx } from '../lib/SceneState.svelte';

    let { controls = $bindable() }: { controls?: OrbitControls } = $props();
    const sceneState = getSceneStateCtx();

    let root: HTMLDivElement | undefined = $state();
    let rootSize = $state({ width: 0, height: 0 });
    let lastMouseCords: [number, number] | undefined;

    const renderer = new WebGLRenderer();
    const camera = new PerspectiveCamera(45, 1, 1, 10000);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.mouseButtons = {
        LEFT: null,
        RIGHT: MOUSE.ROTATE,
        MIDDLE: MOUSE.PAN,
    };
    camera.position.set(20, 25, 20);
    controls.target.set(sceneState.sceneSize / 2, 0, sceneState.sceneSize / 2);
    controls.update();
    controls.saveState();
    sceneState.camera = camera;

    function updateSelection(mouseCords: [number, number]) {
        sceneState.updateSelection(
            new Vector2(
                (mouseCords[0] / rootSize.width) * 2 - 1,
                (mouseCords[1] / rootSize.height) * -2 + 1,
            ),
        );
    }

    $effect(() => {
        if (!root || !sceneState.ready) return;
        root.appendChild(renderer.domElement);
    });

    $effect(() => {
        renderer.setSize(rootSize.width, rootSize.height);
        camera.aspect = rootSize.width / rootSize.height;
        camera.updateProjectionMatrix();
        sceneState.cameraUpdate();
        if (lastMouseCords) {
            updateSelection(lastMouseCords);
        }
        // Rerender immedietly to avoid flicker when resizing
        renderer.render(sceneState.scene, camera);
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
        setTimeout(() => {
            if (lastMouseCords) {
                // Update selection in the next event loop cycle
                updateSelection(lastMouseCords);
            }
        });
    });
    sceneState.onChange = requestRender;

    function handlePointerMove(ev: PointerEvent) {
        const mouseCoords = [ev.clientX, ev.clientY] as [number, number];
        updateSelection(mouseCoords);
        lastMouseCords = mouseCoords;
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    bind:this={root}
    bind:clientWidth={rootSize.width}
    bind:clientHeight={rootSize.height}
    onpointermove={handlePointerMove}
    onpointerleave={() => {
        sceneState.clearSelection();
        lastMouseCords = undefined;
    }}
    onclick={() => sceneState.actOnSelection()}
></div>

<style>
    div {
        height: 100%;
    }
</style>
