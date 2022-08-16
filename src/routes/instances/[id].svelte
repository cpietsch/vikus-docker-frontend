<script context="module">
	import { api } from '$lib/api';
	const testInstance = {
		id: 'test',
		label: 'Disconnected Instance',
		iiif_url: 'http://localhost:5000/instances/test',
		status: 'ok'
	};
	export async function load({ params, fetch, session, stuff }) {
		try {
			const response = await api('get', `/instances/${params.id}`);

			return {
				status: response.status,
				props: {
					instance: response.ok && (await response.json())
				}
			};
		} catch (error) {
			return {
				status: error.status,
				props: {
					error: error.message,
					instance: testInstance
				}
			};
		}
	}
</script>

<script>
	export let instance;

	import { onDestroy } from 'svelte';
	import { domain, protocoll, port, portWeb } from '$lib/api';
	import { apiPaths, loadInstances } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	import Form from '$lib/form/Form.svelte';
	import Button from '$lib/form/Button.svelte';

	let connected = false;
	let loading = false;
	let progress = false;

	// const eventSource = new EventSource(`${protocoll}://${domain}/instances/${instance.id}/events`);
	let webSocket = null;

	function connectWebsocket() {
		console.log('connection to websocket');
		if (webSocket) {
			webSocket.close();
		}
		webSocket = new WebSocket(`ws://${domain}:${port}/instances/${instance.id}/ws`);
		webSocket.onopen = (e) => {
			console.log('eventSource.onopen', e);
			connected = true;
		};
		webSocket.onerror = (e) => {
			console.log('eventSource.onerror', e);
			connected = false;
		};
		webSocket.onclose = (e) => {
			console.log('eventSource.onclose', e);
			connected = false;
		};
		webSocket.onmessage = (event) => {
			const data = JSON.parse(event.data);

			if (data.type != 'ping') {
				console.log(data);
			}

			if (data.task) {
				progress = data;
			}
		};
	}

	const reconnectTimer = setInterval(() => {
		if (connected) {
			return;
		}
		connectWebsocket();
	}, 2000);

	onDestroy(() => {
		console.log("It's destroyed");
		connected = false;
		webSocket.close();
		clearInterval(reconnectTimer);
	});

	// $: console.log($apiPaths);
	$: {
		console.log(instance);
		progress = false;
		connected = false;
		connectWebsocket();
	}

	const runAll = async () => {
		loading = true;
		const response = await api('POST', `/instances/generate`, null, {
			instance_id: instance.id
		});
		const data = await response.json();
		console.log(data);
		loading = false;
	};

	const makeZip = async () => {
		loading = true;
		const response = await api('POST', `/instances/steps/zip`, null, {
			instance_id: instance.id
		});
		const data = await response.json();
		const zipUrl = `${protocoll}://${domain}:${portWeb}/data/${instance.id}/project.zip`;
		var a = document.createElement('a');
		a.href = zipUrl;
		a.setAttribute('download', 'project.zip');
		a.click();
	};

	const deleteIntance = async () => {
		webSocket.close();
		const response = await api('DELETE', `/instances/${instance.id}`);
		const data = await response.json();
		if (data.status == 'deleted') {
			loadInstances();
			goto(base ? base : '/');
		}
	};

	console.log('base', base);
</script>

<div class="relative ">
	<div class="absolute top-0 right-0">
		<button
			on:click={deleteIntance}
			class="p-1 pl-2 pr-2 bg-red-700 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"
			>Delete</button
		>
	</div>
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
	<div
		class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
	>
		<p>Vikus Viewer</p>
		<div class="flex items-end text-xs">
			<a
				target="_blank"
				class="font-semibold rounded-full px-2 bg-blue-100"
				href="{protocoll}://{domain}:{portWeb}/viewer/?config=../data/{instance.id}/config.json"
				>Open</a
			>
		</div>
	</div>

	<div class="flex justify-between mt-8">
		<Button {loading} on:click={runAll}>Generate Instance</Button>
		<Button {loading} on:click={makeZip}>Download ZIP</Button>
	</div>
</div>

<div class="sticky top-20 flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-3">
	{#if progress}
		<div class="flex mb-2 items-center justify-between">
			<div>
				<span
					class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
				>
					{progress.task}
				</span>
				<span
					class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
				>
					{progress.completed}/{progress.size}
				</span>
			</div>
			<div class="text-right">
				<span class="text-xs font-semibold inline-block text-green-600">
					{parseInt(progress.progress * 100)}%
				</span>
			</div>
		</div>
		<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
			<div
				style="width: {parseInt(progress.progress * 100)}%"
				class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
			/>
		</div>
	{/if}
</div>

{#each $apiPaths as path}
	<Form {instance} {path} />
{/each}
