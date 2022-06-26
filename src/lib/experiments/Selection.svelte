<script>
    import { nodes, selected } from "./store";

    $: {
        console.log($selected);
    }

    function click() {
        console.log($selected);
        fetch("http://localhost:5000/thumbnails", {
            method: "POST",
            body: JSON.stringify({
                urls: $selected,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }
</script>

<div class="selected">
    {#if $selected.length}
        <div class="button thumbnails" on:click={click}>
            download thumbnails
        </div>
    {/if}
</div>

<style>
    .selected {
        margin-top: 3em;
    }

    .button {
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 0.5em;
        cursor: pointer;
    }
</style>
