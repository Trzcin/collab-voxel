<script lang="ts">
    import { getSceneStateCtx } from '../lib/SceneState.svelte';

    let {
        color,
        onmiddleclick,
        title,
    }: {
        color: string;
        onmiddleclick?: () => void;
        title?: string;
    } = $props();
    const sceneState = getSceneStateCtx();
</script>

<button
    class="color"
    style={`background: ${color}`}
    aria-label="Select color"
    title={title ?? color}
    onclick={() => (sceneState.colorManager.color = color)}
    onauxclick={(ev) => ev.button === 1 && onmiddleclick?.()}
    class:active={color === sceneState.colorManager.color}
></button>

<style>
    button {
        width: 100%;
        aspect-ratio: 1;
        cursor: pointer;
        border-radius: 10%;
        border: none;
        background: transparent;
    }

    .color {
        transition: transform 0.2s ease-in-out;
    }

    .color:hover {
        transform: scale(90%);
    }

    .active {
        transform: scale(70%) !important;
    }
</style>
