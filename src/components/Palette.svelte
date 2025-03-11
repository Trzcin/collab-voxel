<script lang="ts">
    import { getSceneStateCtx } from '../lib/SceneState.svelte';
    import AddIcon from '../icons/add.svg';
    import ColorButton from './ColorButton.svelte';

    let { open }: { open: boolean } = $props();
    const sceneState = getSceneStateCtx();

    let colorInput: HTMLInputElement;
</script>

<aside class:open>
    <h3>Color palette</h3>
    <div class="colors">
        {#each sceneState.colorManager.palette as colorRow (colorRow)}
            {#each colorRow as color (color)}
                <ColorButton {color} />
            {/each}
        {/each}
    </div>
    <h3 id="custom-colors">Custom colors</h3>
    <div class="colors">
        {#each sceneState.colorManager.customColors as color (color)}
            <ColorButton
                {color}
                onmiddleclick={() =>
                    sceneState.colorManager.deleteCustomColor(color)}
                title={`${color} (Middle click to delete)`}
            />
        {/each}
        <button
            title="Add color"
            id="add-color"
            onclick={() => colorInput.click()}
        >
            <img src={AddIcon} alt="add color" />
            <input
                type="color"
                bind:this={colorInput}
                onchange={() => {
                    sceneState.colorManager.addCustomColor(colorInput.value);
                    sceneState.colorManager.color = colorInput.value;
                }}
            />
        </button>
    </div>
</aside>

<style>
    aside {
        height: 100%;
        background: #222;
        overflow-y: auto;
        width: 0;
        --sidebar-width: 350px;
        transform: translateX(var(--sidebar-width));
        transition: all 0.2s ease-in-out;
    }

    .open {
        width: var(--sidebar-width);
        transform: translateX(0);
        padding: 1rem;
    }

    .colors {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        gap: 4px;
    }

    button {
        width: 100%;
        aspect-ratio: 1;
        cursor: pointer;
        border-radius: 10%;
        border: none;
        background: transparent;
    }

    #add-color {
        display: grid;
        place-items: center;
        background-color: #444;
        transition: background-color 0.2s ease-in-out;
    }

    #add-color:hover {
        background-color: #666;
    }

    #custom-colors {
        margin-top: 2rem;
    }

    input {
        display: none;
    }
</style>
