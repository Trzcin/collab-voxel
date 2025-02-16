<script lang="ts">
    import { onMount } from 'svelte';
    import { BoxGeometry, EdgesGeometry, LineSegments, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
    import { OrbitControls } from 'three/examples/jsm/Addons.js';

    let root: HTMLDivElement;
    let rootSize = $state({width: 0, height: 0});

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 1, 10000);
    const renderer = new WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);

    onMount(() => {
        const geometry = new BoxGeometry(1, 1, 1);
        const edges = new EdgesGeometry(geometry);
        const line = new LineSegments(edges);
        scene.add(line);
        
        camera.position.set(1, 2, 3);
        controls.update();

        root.appendChild(renderer.domElement);
        renderer.setAnimationLoop(animate);
    });
    
    $effect(() => {
        renderer.setSize(rootSize.width, rootSize.height);
        camera.aspect = rootSize.width / rootSize.height;
        camera.updateProjectionMatrix();
    })
    
    /** Main rendering loop */
    function animate() {
        controls.update();
        renderer.render(scene, camera);
    }
</script>

<div bind:this={root} bind:clientWidth={rootSize.width} bind:clientHeight={rootSize.height}></div>

<style>
    div {
        width: 100vw;
        height: 100vh;
    }
</style>