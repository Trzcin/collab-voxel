<script lang="ts">
    import type { OrbitControls } from 'three/examples/jsm/Addons.js';
    import SceneView from './components/SceneView.svelte';
    import Toolbar from './components/Toolbar.svelte';
    import { SceneState } from './lib/SceneState.svelte';

    const sceneState = new SceneState(10);

    let controls = $state<OrbitControls>();
</script>

<svelte:window onbeforeunload={() => sceneState.destroy()} />

{#if sceneState.ready}
    <SceneView {sceneState} bind:controls />
    <Toolbar {sceneState} onviewreset={() => controls && controls.reset()} />
{:else}
    <h2>Connecting to server</h2>
{/if}
