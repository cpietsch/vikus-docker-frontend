<script context="module">
	export const prerender = false;
</script>

<script>
	import Force from '$lib/Force.svelte';
	import Tree from '$lib/Tree.svelte';
	import InputRecursive from '$lib/InputRecursive.svelte';
	import NewInstanceForm from '$lib/NewInstanceForm.svelte';
	import List from '$lib/List.svelte';
	import Selection from '$lib/Selection.svelte';
</script>

<svelte:head>
	<title>VV IIIF</title>
</svelte:head>

<section>
	<!-- <InputRecursive /> -->
	<NewInstanceForm />
	<!-- <Test /> -->
	<!-- <Force /> -->
	<!-- <Tree /> -->
	<List />
	<Selection />
</section>

<style>
</style>
