<script context="module">
	import { api } from '$lib/api';
	const testInstance = {
		id: 'test',
		label: 'Test Instance',
		iiif_url: 'http://localhost:5000/instances/test',
		status: 'ok'
	};
	export async function load({ params, fetch, session, stuff }) {
		try {
			const response = await api('get', `instances/${params.id}`);

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
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	import CollectionForm from '$lib/form/CollectionForm.svelte';
	import ImageForm from '$lib/form/ImageForm.svelte';
	import UmapForm from '$lib/form/UmapForm.svelte';
	import FeatureForm from '$lib/form/FeatureForm.svelte';
	import SpritesheetForm from '$lib/form/SpritesheetForm.svelte';

	let connected = false;
	let loading = false;

	let collectionProgress = null;
	let imageProgress = null;

	// const eventSource = new EventSource(`${protocoll}://${domain}/instances/${instance.id}/events`);
	const eventSource = new WebSocket(`ws://${domain}:${port}/instances/${instance.id}/ws`);

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

		if (data.type != 'ping') {
			console.log(data);
		}

		if (data.task && data.task === 'crawlCollection') {
			collectionProgress = data;
		}
		if (data.task && data.task === 'crawlImages') {
			imageProgress = data;
		}
	};

	onDestroy(() => {
		console.log("It's destroyed");
		eventSource.close();
		// socket.close();
	});

	$: console.log(instance);

	const runAll = async () => {
		const data = await getApiFunction('run');
	};

	const makeZip = async () => {
		const data = await getApiFunction('makeZip');
		const zipUrl = `${protocoll}://${domain}:${portWeb}/data/${instance.id}/project.zip`;
		var a = document.createElement('a');
		a.href = zipUrl;
		a.setAttribute('download', 'project.zip');
		a.click();
	};

	const getApiFunction = async (func) => {
		loading = true;
		const response = await api('POST', `instances/${func}`, null, {
			instance_id: instance.id
		});
		const data = await response.json();
		console.log(data);
		loading = false;
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
</div>

<div class="disabled:opacity-75  shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 mt-7">
	<div class="grid gap-4 grid-cols-4 {loading && 'grayscale pointer-events-none'} ">
		<button
			on:click={runAll}
			class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
			>Run All</button
		>
		<button
			on:click={makeZip}
			class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
			>Download Zip</button
		>
		<button
			on:click={() => getApiFunction('makeMetadata')}
			class="py-2 px-3 w-40 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
			>Make Metadata</button
		>
		<button
			on:click={deleteIntance}
			class="py-2 px-3 w-32 bg-red-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"
			>Delete</button
		>
	</div>
</div>

<CollectionForm progress={collectionProgress} {instance} />
<ImageForm progress={imageProgress} {instance} />
<SpritesheetForm {instance} />
<FeatureForm {instance} />
<UmapForm {instance} />
