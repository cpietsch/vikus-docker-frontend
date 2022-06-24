<script>
	import { api } from '$lib/api';

	export let instance;

	let neighbours = 15;
	let minDistance = 0.2;
	let rasterFairy = false;
	let loading = false;

	const makeUmap = async () => {
		loading = true;
		const response = await api('POST', `instances/makeUmap`, null, {
			instance_id: instance.id,
			n_neighbors: neighbours,
			min_distance: minDistance,
			raster_fairy: rasterFairy
		});
		const data = await response.json();
		console.log(data);
		loading = false;
	};
</script>

<div
	class="flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-4  {loading &&
		'grayscale pointer-events-none'} "
>
	<h1 class="mb-4">UMAP</h1>
	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Neighbours</span>
		<input
			type="number"
			min="1"
			max="200"
			name="neighbours"
			id="neighbours"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			required
			bind:value={neighbours}
		/>
	</label>

	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Min Distance</span>
		<input
			type="number"
			min="0"
			max="1"
			step="0.01"
			name="neighbours"
			id="neighbours"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			required
			bind:value={minDistance}
		/>
	</label>

	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Raster Fairy</span>
		<input
			type="checkbox"
			name="rasterFairy"
			id="rasterFairy"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			bind:checked={rasterFairy}
		/>
	</label>

	<button
		on:click={makeUmap}
		class="py-2 px-3 w-40 self-end bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Run</button
	>
</div>
