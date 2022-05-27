<!-- <script context="module">
	console.log('module');
	export async function load({ params, fetch, session, stuff }) {
		console.log('module2');
		const url = `http://localhost:5000/instances`;
		const response = await fetch(url);

		return {
			//status: response.status,
			props: {
				instances: response.ok && (await response.json())
			}
		};
	}
</script> -->
<script>
	export let instances = [];

	// $: console.log(instances);

	// (async () => {
	// 	const url = `http://localhost:5000/instances`;
	// 	const response = await fetch(url);

	// 	instances = response.ok && (await response.json());
	// })();
</script>

<div class="container flex flex-col mx-auto w-full items-center justify-center mt-5">
	<ul class="flex flex-col w-full">
		{#each instances as instance (instance.id)}
			<li class="border-gray-400 flex flex-row mb-2">
				<a href={`/instances/${instance.id}`} class="w-full">
					<div
						class="shadow border cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
					>
						<div class="flex-1 pl-1 ">
							<div class="font-medium dark:text-white">{instance.id}</div>
							<div class="text-gray-600 dark:text-gray-200 text-xs">{instance.absolutePath}</div>
						</div>
						<div class="text-gray-600 dark:text-gray-200 text-xs">4423</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
