<script>
	import { api } from '$lib/api';

	export let instance;
	let spriteSize = 128;
	let loading = false;

	const run = async () => {
		loading = true;
		const response = await api('POST', `instances/makeSpritesheets`, null, {
			instance_id: instance.id
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
	<h1 class="mb-6">Spritesheets</h1>
	<label
		class="grayscale pointer-events-none flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">spriteSize</span>
		<input
			type="number"
			min="1"
			max="512"
			name="spriteSize"
			id="spriteSize"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			required
			bind:value={spriteSize}
		/>
	</label>

	<button
		on:click={run}
		class="py-2 px-3 w-40 self-end bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Run</button
	>
</div>
