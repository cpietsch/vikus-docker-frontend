<script>
    import { style } from "d3";
    import Node from "./Node.svelte";
    import { nodes } from "./store";
    import * as d3 from "d3";

    let stratified = null;

    $: {
        console.warn("new ", $nodes);
        if ($nodes.length > 0) {
            stratified = d3.stratify()($nodes);
            console.log(stratified);
        }
    }
</script>

{#if stratified}
    <div class="entries">
        <Node
            data={stratified.data}
            children={stratified.children}
            loaded={stratified.data.loaded}
            depth={stratified.depth}
        />
    </div>
{/if}

<style>
    .entries {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 400px;
        overflow-y: scroll;
    }
</style>
