<script>
    // export let name = "";
    import { beforeUpdate, afterUpdate } from "svelte";
    import { selected } from "./store";

    export let children = [];
    export let indent = 0;
    export let data = {};
    export let depth = 0;
    export let loaded = false;

    let checked = false;
    // $: filteredChildren = children.filter(
    //     (child) => child.data.iiif.type === "Collection"
    // );

    let open = children
        .map((child) => child.data.iiif.type === "Collection")
        .reduce((a, b) => a || b, false);

    function toggleOpen() {
        console.log(data, children);
        open = !open;
    }

    function toggleChecked() {
        console.log(data, children);
        checked = !checked;
    }

    $: {
        selected.update((selected) => {
            if (checked) {
                selected.push(data.id);
            } else {
                selected.splice(selected.indexOf(data.id), 1);
            }
            return selected;
        });
    }
</script>

<div style="padding-left: {indent}px" class="entry" class:loaded>
    <span class="toggle" on:click={toggleOpen}>
        {#if children.length > 0}
            {#if open}-{:else}+{/if}
        {/if}
    </span>
    {#if children.length > 0}
        <span class="checkbox">
            <input type="checkbox" bind:checked />
        </span>
    {/if}
    <span class="name" on:click={toggleChecked}>
        <span class={`type ${data.iiif.type.toLowerCase()}`}
            >{data.iiif.type[0]}</span
        >

        {data.name}
        {#if children.length > 0}
            (<span class="count">{children.length}</span>)
        {/if}
    </span>
</div>

{#if open}
    {#each children as child (Math.random() * loaded)}
        <svelte:self
            data={child.data}
            children={child.children}
            loaded={child.data.loaded}
            indent={indent + 24}
        />
    {/each}
{/if}

<style>
    .entry {
        cursor: pointer;
        user-select: none;
        margin-bottom: 2px;
        opacity: 0.6;
    }
    .loaded {
        opacity: 1;
    }
    .type {
        border: 1px solid black;
        padding: 1px;
        border-radius: 3px;
        /* text-transform: lowercase; */
        /* margin: 2px; */
    }
    .collection {
        background-color: rgb(230, 29, 139);
        color: rgba(255, 255, 255, 0.8);
    }
    .toggle {
        display: inline-block;
        width: 8px;
    }
</style>
