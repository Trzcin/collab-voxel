<script lang="ts">
    let {
        color,
        active,
        onclick,
        onmiddleclick,
    }: {
        color: string;
        active: boolean;
        onclick?: () => void;
        onmiddleclick?: () => void;
    } = $props();
</script>

<button
    class="color"
    style={`background: ${color}`}
    aria-label="Select color"
    title={color}
    {onclick}
    onauxclick={(ev) => ev.button === 1 && onmiddleclick?.()}
    class:active
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
