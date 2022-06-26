<script>
  import * as d3 from "d3";
  // import Treemap from '/src/views/treemap.svelte';
  import { nodes, json, sleep } from "./store";

  // let url = 'https://iiif.wellcomecollection.org/presentation/v3/collections/genres';
  let url;
  let urls = [
    "https://iiif.wellcomecollection.org/presentation/v3/collections/genres",
    "https://iiif.wellcomecollection.org/presentation/collections/genres/Academic_addresses",
    "https://iiif.wellcomecollection.org/presentation/b3041717x",
    // 'https://purl.stanford.edu/bn507hr4651/iiif/manifest',
    // 'https://iiif.bodleian.ox.ac.uk/iiif/collection/top',
    // 'https://iiif.sozialarchiv.ch/iiif/collection/demo',
    // 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b90061401/manifest.json'
  ];
  let max = 100;
  let counter = 0;
  let fetcher = 0;

  // $: hierarchy = d3.hierarchy(nodes);
  // $: stratify = nodes.length ? d3.stratify()(nodes) : null;
  $: {
    // console.log($nodes);
    // console.log(stratify);
  }

  async function* load(item, parentId = "", depth = 0) {
    // console.log("load", depth, item);
    counter += 1;
    if (fetcher > max) {
      return;
    }
    // await sleep(100);
    let data;
    if (depth === 0) {
      data = await json(url);
    } else {
      const type = item.type.toLowerCase();
      if (type === "collection" || type === "manifest") {
        const url = typeof item === "string" ? item : item.id;
        data = await json(url);
        fetcher += 1;
      } else if (type === "canvas") {
        data = item;
      } else {
        data = false;
      }
    }

    const id = counter;
    const node = { parentId, id, data };
    // yield node;
    if (data) yield node; //nodes.update((n) => [...n, node]);

    if (data && data.items) {
      for (let item of data?.items) {
        yield* await load(item, id, depth + 1);
      }
    }

    // return node;
  }

  async function parse() {
    console.log("parse");
    counter = 0;
    fetcher = 0;
    nodes.set([]);

    const results = [];
    let i = 0;

    console.time("parse");

    for await (const item of load(url)) {
      // console.log("loop", item);
      results.push(item);
      if (i++ % 10 === 0) {
        // console.log("update")
        nodes.set(results);
        // nodes.update((n) => [...results]);
        //results.length = 0;
      }
      //nodes.update((n) => [...n, item]);
    }
    nodes.set(results);

    console.timeEnd("parse");
  }
</script>

<div class="container">
  <div class="input">
    <select bind:value={url}>
      {#each urls as url}
        <option value={url}>{url}</option>
      {/each}
    </select>
    <button on:click={parse}> load </button>
  </div>
  <div>
    nodes size: {$nodes.length}
  </div>
  <div>
    fetches: {fetcher}
  </div>

  <!-- {#if nodes}
		<div class="nodes">
			{#each nodes?.items as node}
				<div class="node">
					{Object.values(node.label)}
				</div>
			{/each}
		</div>
	{/if} -->
</div>

<style>
  * {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .container {
    display: flex;
    flex-direction: column;
    /* align-items: center;
		justify-content: center; */
    /* height: 100vh; */
    margin: 1em;
  }
  .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1em;
    width: 100%;
  }
  input,
  select {
    width: 100%;
    margin: 1em;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  button {
    width: 100px;
    margin: 1em;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
</style>
