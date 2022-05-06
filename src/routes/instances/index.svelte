<script>
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let instances;

	// $: console.log(instances);
</script>

<div class="container flex flex-col mx-auto w-full items-center justify-center mt-5">
	<ul class="flex flex-col w-full">
		{#each instances as instance (instance.id)}
			<li class="border-gray-400 flex flex-row mb-2">
				<div
					class="shadow border cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
				>
					<div class="flex-1 pl-1 ">
						<div class="font-medium dark:text-white">{instance.id}</div>
						<div class="text-gray-600 dark:text-gray-200 text-xs">{instance.absolutePath}</div>
					</div>
					<div class="text-gray-600 dark:text-gray-200 text-xs">4423</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
