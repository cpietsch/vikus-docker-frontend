<script context="module">
	export const prerender = false;
</script>

<script>
	import Force from '$lib/Force.svelte';
	import Tree from '$lib/Tree.svelte';
	import InputRecursive from '$lib/InputRecursive.svelte';
	import Input from '$lib/Input.svelte';
	import List from '$lib/List.svelte';
	import Selection from '$lib/Selection.svelte';
</script>

<svelte:head>
	<title>VV IIIF</title>
</svelte:head>

<section>
	<!-- <InputRecursive /> -->
	<Input />
	<!-- <Test /> -->
	<!-- <Force /> -->
	<!-- <Tree /> -->
	<List />
	<Selection />
</section>

<style>
</style>
