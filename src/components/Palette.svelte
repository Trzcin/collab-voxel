<script lang="ts">
    let { open }: { open: boolean } = $props();
</script>

<aside class:open={open}>
    <h2>Color palette</h2>
    <h2>Custom colors</h2>
</aside>

<style>
    aside {
        height: 100%;
        background: #222;
        overflow: hidden;
        width: 0;
        --sidebar-width: 300px;
        transform: translateX(var(--sidebar-width));
        transition: all .2s ease-in-out;
    }
    
    .open {
        width: var(--sidebar-width);
        transform: translateX(0);
    }
</style>