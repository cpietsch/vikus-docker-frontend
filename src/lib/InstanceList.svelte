<script>
	import { base } from '$app/paths';
	import { instanceList } from '$lib/store';

	function toReadableTime(time) {
		const date = new Date(time * 1000);
		const hoursSinceDate = Math.floor((new Date() - date) / 3600000);
		return hoursSinceDate;
	}
</script>

<div class="container flex flex-col mx-auto w-full items-center justify-center mt-1">
	<ul class="flex flex-col w-full">
		{#each $instanceList as instance (instance.id)}
			<li class="flex flex-row mb-2">
				<a href={`${base}/instances/${instance.id}`} class="w-full">
					<div
						class="shadow border-gray-400 dark:border-slate-600 cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
					>
						<div class="flex-1 pl-1 ">
							<div class="font-medium dark:text-white">{instance.id}</div>
							<div class="text-gray-600 dark:text-gray-200 text-xs">{instance.absolutePath}</div>
						</div>
						<div class="text-gray-600 dark:text-gray-200 text-xs">
							{toReadableTime(instance.modified)}h
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
