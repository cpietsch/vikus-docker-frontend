<script context="module">
</script>

<svelte:head>
	<title>VIKUS Docker</title>
</svelte:head>

<div class="content">
	<figure class="flex shadow-xl rounded-xl p-8">
		<input
			type="text"
			name="company-website"
			id="company-website"
			class="rounded-lg flex-auto p-2 mr-1 border-2 border-gray-300"
			placeholder="https://iiif.wellcomecollection.org/presentation/v3/collections/genres"
		/>

		<button
			type="button"
			class="bg-indigo-600 w-32 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
			>Load</button
		>
	</figure>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
