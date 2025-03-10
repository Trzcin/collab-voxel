<script lang="ts">
    import type { OrbitControls } from 'three/examples/jsm/Addons.js';
    import SceneView from './components/SceneView.svelte';
    import Toolbar from './components/Toolbar.svelte';
    import { SceneState } from './lib/SceneState.svelte';
    import Palette from './components/Palette.svelte';

    const sceneState = new SceneState(10);

    let controls = $state<OrbitControls>();
    let paletteOpen = $state(false);
</script>

<svelte:window onbeforeunload={() => sceneState.destroy()} />

{#if sceneState.ready}
    <main>
        <div>
            <SceneView {sceneState} bind:controls />
            <Toolbar {sceneState} onviewreset={() => controls && controls.reset()} bind:paletteOpen />
        </div>
        <Palette open={paletteOpen} />
    </main>
{:else}
    <h2>Connecting to server</h2>
{/if}

<style>
    main {
        display: flex;
        height: 100%;
        width: 100%;
    }

    div {
        position: relative;
        flex: 1;
    }
</style>