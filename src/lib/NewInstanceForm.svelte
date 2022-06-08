<script>
	import { api } from '$lib/api';
	import { goto } from '$app/navigation';

	let url = 'https://iiif.wellcomecollection.org/presentation/collections/genres/Stickers';

	const onSubmit = async (e) => {
		e.preventDefault();

		const response = await api('POST', `instances?url=${url}`);
		const json = await response.json();

		if (response.ok) {
			goto(`/instances/${json.id}`);
		}
	};
</script>

<div class="flex-auto max-w-4xl">
	<h1 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
		Create a new VIKUS Viewer instance
	</h1>
	<p class="mt-4 mb-6 text-slate-700 dark:text-slate-400">
		Paste a IIIF V3 collection URL here and we will parse it and create a new instance for you.
	</p>
	<!-- <form class="new" action="/instances" method="post"> -->
	<figure class="flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800">
		<input
			type="url"
			name="url"
			id="url"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			placeholder="https://iiif.wellcomecollection.org/presentation/collections/genres/Stickers"
			required
			bind:value={url}
		/>

		<button
			type="submit"
			on:click={onSubmit}
			class="py-2 px-3 w-32 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
			>Create</button
		>
	</figure>
	<!-- </form> -->
</div>
