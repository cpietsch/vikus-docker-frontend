<script>
	import { api } from '$lib/api';

	let depth = 0;
	let worker = 4;
	let count = 0;

	let progress = { queue: 0, progress: 0, completed: 0, size: 0 };
	let loading = false;

	const crawl = async () => {
		loading = true;
		const response = await api('GET', `instances/${instance.id}/crawlManifests`, {
			worker,
			depth
		});
		const data = await response.json();
		console.log(data);
		loading = false;
	};
</script>

<h1 class="mt-6">Collection</h1>
<div
	class="flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-4  {loading &&
		'grayscale pointer-events-none'} "
>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Manifests</span>
		<span>{count}</span>
	</label>
	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Worker</span>
		<input
			type="number"
			min="1"
			max="1000"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			required
			bind:value={worker}
		/>
	</label>
	<label
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<span class="w-32">Crawl depth</span>
		<input
			type="number"
			min="0"
			max="1000"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			required
			bind:value={depth}
		/>
	</label>
	{#if progress}
		<div class="relative mt-2">
			<div class="flex mb-2 items-center justify-between">
				<div>
					<span
						class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
					>
						{progress.completed}/{progress.queue}
					</span>
					<!-- <span
					class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
				>
					Completed {completed}
				</span> -->
				</div>
				<div class="text-right">
					<span class="text-xs font-semibold inline-block text-green-600">
						{progress.progress}%
					</span>
				</div>
			</div>
			<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
				<div
					style="width: {parseInt(progress.progress * 100)}%"
					class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
				/>
			</div>
		</div>
	{/if}
	<button
		on:click={crawl}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Crawl Collection</button
	>
</div>
