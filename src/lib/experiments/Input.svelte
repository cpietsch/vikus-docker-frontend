<script>
	import { nodes, json, sleep, jsons, stratified } from './store';
	import * as d3 from 'd3';

	// let url = 'https://iiif.wellcomecollection.org/presentation/v3/collections/genres';
	let url;
	let urls = [
		'https://iiif.wellcomecollection.org/presentation/v3/collections/genres',
		'https://iiif.wellcomecollection.org/presentation/collections/genres/Academic_addresses',
		// "https://iiif.wellcomecollection.org/presentation/collections/genres/Academic_addresses",
		'https://iiif.wellcomecollection.org/presentation/b3041717x',
		// 'https://purl.stanford.edu/bn507hr4651/iiif/manifest',
		// 'https://iiif.bodleian.ox.ac.uk/iiif/collection/top',
		// 'https://iiif.sozialarchiv.ch/iiif/collection/demo',
		// 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b90061401/manifest.json'
		'https://iiif.wellcomecollection.org/presentation/v3/collections/genres',
		'https://iiif.wellcomecollection.or g/presentation/collections/genres/Broadsides',
		'https://iiif.wellcomecollection.org/presentation/collections/genres/Myths_and_legends',
		'https://iiif.wellcomecollection.org/presentation/collections/genres/Advertisements',
		'https://iiif.wellcomecollection.org/presentation/collections/genres/Stickers',
		'https://iiif.wellcomecollection.org/presentation/collections/genres/Watercolors',
		'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json'
	];
	let max = 100;
	let counter = 0;
	let fetches = 0;
	let queue = [];
	let map = new Map();
	let done = false;

	async function process(url, depth = 0) {
		let parentId = '';
		if (map.has(url)) {
			parentId = map.get(url).parentId;
			if (map.get(url).loaded) {
				console.warn('LOADED');
				return;
			}
			console.log('maps has', parentId);
		}

		const result = await json(url);
		const name = url.split('/').pop();
		const entry = { id: url, name, parentId, iiif: result, loaded: true };
		map.set(url, entry);
		console.warn(url, result.items);

		if (result.items && result.items.length) {
			for (const item of result.items) {
				const id = item.id;
				if (item.type === 'Collection') {
					queue.push([depth + 1, id]);
				}
				const name = item.id.split('/').pop();
				const entry = {
					id,
					name,
					parentId: url,
					iiif: item,
					loaded: false
				};
				// console.log("deep", id, entry);
				map.set(id, entry);
			}
		}
		// return true;
	}

	async function processQueue() {
		if (queue.length > 0 && fetches < max) {
			fetches++;
			const [depth, url] = queue.sort((a, b) => a[0] - b[0])[0];
			queue = queue.slice(1);
			// console.log(`processing ${url}`);
			await process(url, depth);
			// await sleep(100);
			await processQueue();
		} else {
			done = true;
		}
	}

	// async function makeStratify() {
	//   // stratified.set(null);

	//   // console.time("stratify");
	//   const entries = [...map.values()];
	//   if (entries.length === 0) {
	//     return;
	//   }
	//   console.log(entries);
	//   const s = d3.stratify()(entries);
	//   // console.timeEnd("stratify");
	//   stratified.set(s);
	//   await sleep(100);
	// }

	$: {
		if (done || fetches >= max || fetches % 10 === 0) {
			// makeStratify();
			nodes.set([...map.values()]);
		}
	}

	async function parse() {
		console.log('parse');
		counter = 0;
		fetches = 0;
		done = false;
		nodes.set([]);

		queue = [];
		map = new Map();
		// stratified.set(null);

		queue.push([0, url]);
		await processQueue();
	}

	// $: {
	//   if (queue.length > 0 && fetches < max) {
	//     fetches++;
	//     const url = queue.shift();
	//     console.log(`processing ${url}`);
	//     process(url);
	//   }
	// }
</script>

<div class="flex flex-col shadow-xl rounded-xl p-8">
	<div class="flex">
		<div class="flex flex-auto">
			<select class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300" bind:value={url}>
				{#each urls as url}
					<option value={url}>{url}</option>
				{/each}
			</select>
		</div>
		<!-- <input
    type="text"
    name="company-website"
    id="company-website"
    class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
    placeholder="https://iiif.wellcomecollection.org/presentation/v3/collections/genres"
  /> -->

		<button
			type="button"
			class="bg-indigo-600 w-32 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
			on:click={parse}>Load</button
		>
	</div>
	<div class="flex mt-2 space-x-2">
		<span
			class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
		>
			fetches: {fetches}
		</span>
		<span
			class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
		>
			queue: {queue.length}
		</span>
		<span
			class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
		>
			nodes: {$nodes.length}
		</span>
	</div>
</div>

<style>
</style>
