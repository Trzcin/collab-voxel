<script lang="ts">
    import type { SceneState } from '../lib/SceneState.svelte';
    import AttachIcon from '../icons/attach.svg';
    import DeleteIcon from '../icons/delete.svg';
    import ReplaceIcon from '../icons/replace.svg';
    import UndoIcon from '../icons/undo.svg';
    import RedoIcon from '../icons/redo.svg';
    import ClearIcon from '../icons/clear.svg';
    import WireframeIcon from '../icons/wireframe.svg';
    import ResetViewIcon from '../icons/resetView.svg';
    import GridIcon from '../icons/grid.svg';

    let {
        sceneState,
        onviewreset,
    }: { sceneState: SceneState; onviewreset?: () => void } = $props();

    function handleKey(ev: KeyboardEvent) {
        if (ev.key === 'R') onviewreset?.();
        else if (ev.ctrlKey && ev.key === 'z') sceneState.data.undo();
        else if (ev.ctrlKey && ev.key === 'y') sceneState.data.redo();
        else if (ev.key === 'c') sceneState.data.clear();
        else if (ev.key === 'w') sceneState.wireframe = !sceneState.wireframe;
        else if (ev.key === 'a') sceneState.mode = 'attach';
        else if (ev.key === 'd') sceneState.mode = 'delete';
        else if (ev.key === 'r') sceneState.mode = 'replace';
        else if (ev.key === 'g') sceneState.showGrid = !sceneState.showGrid;
    }
</script>

<svelte:window onkeydown={handleKey} />

<div id="toolbar">
    <section>
        <label title="Attach (a)">
            <input
                type="radio"
                name="mode"
                id="mode-attach"
                value="attach"
                bind:group={sceneState.mode}
            />
            <img src={AttachIcon} alt="attach" />
        </label>
        <label title="Delete (d)">
            <input
                type="radio"
                name="mode"
                id="mode-delete"
                value="delete"
                bind:group={sceneState.mode}
            />
            <img src={DeleteIcon} alt="delete" />
        </label>
        <label title="Replace (r)">
            <input
                type="radio"
                name="mode"
                id="mode-replace"
                value="replace"
                bind:group={sceneState.mode}
            />
            <img src={ReplaceIcon} alt="replace" />
        </label>
    </section>
    <span class="separator"></span>
    <section>
        <button title="Undo (C-z)" onclick={() => sceneState.data.undo()}
            ><img src={UndoIcon} alt="undo" /></button
        >
        <button title="Redo (C-y)" onclick={() => sceneState.data.redo()}
            ><img src={RedoIcon} alt="redo" /></button
        >
        <button title="Clear scene (c)" onclick={() => sceneState.data.clear()}
            ><img src={ClearIcon} alt="clear" /></button
        >
        <button title="Reset view (R)" onclick={() => onviewreset?.()}
            ><img src={ResetViewIcon} alt="reset" /></button
        >
    </section>
    <span class="separator"></span>
    <section>
        <label title="Toggle wireframe (w)">
            <input type="checkbox" bind:checked={sceneState.wireframe} />
            <img src={WireframeIcon} alt="wireframe" />
        </label>
        <label title="Toggle grid (g)">
            <input type="checkbox" bind:checked={sceneState.showGrid} />
            <img src={GridIcon} alt="grid" />
        </label>
    </section>
</div>

<style>
    #toolbar {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        background: #222;
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        height: 4.5rem;
    }

    section {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    input {
        display: none;
    }

    label,
    button {
        padding: 0.5rem;
        border-radius: 0.5rem;
        display: grid;
        place-items: center;
        cursor: pointer;
        border: none;
        background-color: transparent;
        transition: background-color 0.25s ease-in-out;
    }

    label:hover,
    button:hover {
        background-color: #444;
    }

    label img {
        transition: filter 0.25s ease-in-out;
    }

    label:has(input:checked) {
        background-color: white;
    }

    label:has(input:checked) img {
        filter: invert(1);
    }

    span.separator {
        width: 1px;
        height: 100%;
        background-color: #aaa;
        margin: 0 1rem;
    }
</style>
