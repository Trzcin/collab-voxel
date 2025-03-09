<script lang="ts">
    import SceneView from './components/SceneView.svelte';
    import Toolbar from './components/Toolbar.svelte';
    import { SceneState } from './lib/SceneState.svelte';

    const sceneState = new SceneState(10);
</script>

{#if sceneState.ready}
    <SceneView {sceneState} />
    <Toolbar {sceneState} />
{:else}
    <h2>Connecting to server</h2>
{/if}
