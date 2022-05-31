<script>
	export let instance;

	import { onDestroy } from 'svelte';
	import { domain, protocoll, api } from '$lib/api';
	import { goto } from '$app/navigation';

	let events = [];
	let connected = false;
	let task = null;
	let progress = 0;

	const eventSource = new EventSource(`${protocoll}://${domain}/instances/${instance.id}/events`);

	eventSource.onopen = (e) => {
		console.log('eventSource.onopen', e);
		connected = true;
	};
	eventSource.onerror = (e) => {
		console.log('eventSource.onerror', e);
		connected = false;
	};
	eventSource.onmessage = (event) => {
		const data = JSON.parse(event.data);
		console.log(data);
	};

	onDestroy(() => {
		console.log("It's destroyed");
		eventSource.close();
		// socket.close();
	});

	$: console.log(instance);
	// $: console.log(socketEvents);

	const crawlManifest = async () => {
		const response = await api('GET', `instances/${instance.id}/crawlCollection`);
		const data = await response.json();
		console.log(data);
	};

	const crawlImages = async () => {
		const response = await api('GET', `instances/${instance.id}/crawlImages`);
		const data = await response.json();
		console.log(data);
	};

	const deleteIntance = async () => {
		eventSource.close();

		const response = await api('DELETE', `instances/${instance.id}`);
		const data = await response.json();
		// console.log(data);
		if (response.ok) {
			goto('/');
		}
	};
</script>

<div class="relative ">
	<h1>
		{instance.label}
		<span
			class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
		>
			{instance.status}
		</span>
	</h1>
</div>

<div class="flex shadow-xl rounded-xl p-8 bg-white flex-col mt-7">
	<!-- <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
		{instance.iiif_url}
	</p> -->
	<!-- <div class="flex items-end space-x-2 my-6">
		<p class="text-5xl text-black dark:text-white font-bold">
			{instance.id}
		</p>
	</div> -->
	<div class="dark:text-white">
		<div
			class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
		>
			<p>Manifest URL</p>
			<div class="flex items-end text-xs">{instance.iiif_url}</div>
		</div>
	</div>
	<div class="dark:text-white">
		<div
			class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
		>
			<p>Id</p>
			<div class="flex items-end text-xs">{instance.id}</div>
		</div>
	</div>
	<div class="dark:text-white">
		<div
			class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
		>
			<p>Created</p>
			<div class="flex items-end text-xs">{new Date(instance.created * 1000)}</div>
		</div>
	</div>
	<div class="dark:text-white">
		<div
			class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
		>
			<p>Status</p>
			<div class="flex items-end text-xs">
				<span
					class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
				>
					{instance.status}
				</span>
			</div>
		</div>
	</div>
	<div class="dark:text-white">
		<div
			class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
		>
			<p>Socket</p>
			<div class="flex items-end text-xs">
				<span
					class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {connected
						? 'bg-green-100'
						: 'bg-red-100'} text-{connected ? 'green-800' : 'red-800'}"
				>
					{connected ? 'Connected' : 'Disconnected'}
				</span>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-row space-x-4  shadow-xl rounded-xl p-8 bg-white  mt-7">
	<button
		on:click={crawlManifest}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Crawl Collection</button
	>
	<button
		on:click={crawlImages}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Crawl Images</button
	>
	<button
		on:click={deleteIntance}
		class="py-2 px-3 w-32 bg-red-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"
		>Delete</button
	>
</div>

{#if task && task.startsWith('crawling')}
	<div class="relative mt-8">
		<div class="flex mb-2 items-center justify-between">
			<div>
				<span
					class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
				>
					{task}
				</span>
			</div>
			<div class="text-right">
				<span class="text-xs font-semibold inline-block text-green-600"> queue {progress} </span>
			</div>
		</div>
		<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
			<div
				style="width:20%"
				class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
			/>
		</div>
	</div>
{/if}
