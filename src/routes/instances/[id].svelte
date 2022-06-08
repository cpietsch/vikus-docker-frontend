<script context="module">
	import { api } from '$lib/api';
	export async function load({ params, fetch, session, stuff }) {
		const response = await api('get', `instances/${params.id}`);

		return {
			status: response.status,
			props: {
				instance: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let instance;

	import { onDestroy } from 'svelte';
	import { domain, protocoll } from '$lib/api';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	let events = [];
	let connected = false;
	let progress = null;

	// const eventSource = new EventSource(`${protocoll}://${domain}/instances/${instance.id}/events`);
	const eventSource = new WebSocket(`ws://${domain}/instances/${instance.id}/ws`);

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

		if (data.task && data.task.startsWith('crawling')) {
			progress = data;
		}
	};

	onDestroy(() => {
		console.log("It's destroyed");
		eventSource.close();
		// socket.close();
	});

	$: console.log(instance);
	// $: console.log(socketEvents);

	const crawlCollection = async () => {
		const data = await getApiFunction('crawlCollection');
	};

	const crawlImages = async () => {
		const data = await getApiFunction('crawlImages');
	};

	const makeSpritesheets = async () => {
		const data = await getApiFunction('makeSpritesheets');
	};

	const makeMetadata = async () => {
		const data = await getApiFunction('makeMetadata');
	};

	const makeFeatures = async () => {
		const data = await getApiFunction('makeFeatures');
	};

	const makeUmap = async () => {
		const data = await getApiFunction('makeUmap');
	};

	const getApiFunction = async (func) => {
		const response = await api('GET', `instances/${instance.id}/${func}`);
		const data = await response.json();
		console.log(data);
		return data;
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

<div class="flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-7">
	<!-- <p class="text-sm w-max text-gray-700 dark:text-slate-400 font-semibold border-b border-gray-200">
		{instance.iiif_url}
	</p> -->
	<!-- <div class="flex items-end space-x-2 my-6">
		<p class="text-5xl text-black dark:text-slate-400 font-bold">
			{instance.id}
		</p>
	</div> -->
	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<p>Manifest URL</p>
		<div class="flex items-end text-xs">{instance.iiif_url}</div>
	</div>

	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<p>Id</p>
		<div class="flex items-end text-xs">{instance.id}</div>
	</div>
	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<p>Created</p>
		<div class="flex items-end text-xs">{new Date(instance.created * 1000)}</div>
	</div>
	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<p>Status</p>
		<div class="flex items-end text-xs">
			<span
				class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:border-slate-600"
			>
				{instance.status}
			</span>
		</div>
	</div>
	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
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
	{#if progress}
		<div class="relative mt-8">
			<div class="flex mb-2 items-center justify-between">
				<div>
					<span
						class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
					>
						{progress.task}
					</span>
				</div>
				<div class="text-right">
					<span class="text-xs font-semibold inline-block text-green-600">
						Queue: {progress.queue}, Completed {progress.completed}
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
</div>

<div class="flex flex-row space-x-4  shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 mt-7">
	<button
		on:click={crawlCollection}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Crawl Collection</button
	>
	<button
		on:click={crawlImages}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Crawl Images</button
	>
	<button
		on:click={makeSpritesheets}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Make Spritesheets</button
	>
	<button
		on:click={makeMetadata}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Make Metadata</button
	>
	<button
		on:click={makeFeatures}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Make Features</button
	>
	<button
		on:click={makeUmap}
		class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
		>Make Umap</button
	>
	<button
		on:click={deleteIntance}
		class="py-2 px-3 w-32 bg-red-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"
		>Delete</button
	>
</div>
