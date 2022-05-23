<script>
	export let instance;

	import { onDestroy } from 'svelte';

	const domain = 'localhost:5000';

	let socketEvents = [];
	let socketConnected = false;
	let task = null;
	let progress = 0;

	const socket = new WebSocket('ws://' + domain + '/instances/' + instance.id + '/ws');

	socket.addEventListener('open', function (event) {
		console.log("It's open");
		socketConnected = true;
	});

	socket.addEventListener('message', function (event) {
		const data = JSON.parse(event.data);
		if (data.task && data.task.startsWith('crawling')) {
			task = 'crawling';
			// progress = (data.completed / (data.queue + data.completed)) * 100;
			progress = data.queue;
			console.log(progress);
		}
		console.log(data);
		// socketEvents.push(JSON.parse(event.data));
	});

	socket.addEventListener('close', function (event) {
		console.log("It's closed");
		socketConnected = false;
	});

	onDestroy(() => {
		console.log("It's destroyed");
		socket.close();
	});

	$: console.log(instance);
	$: console.log(socketEvents);

	const crawlManifest = async () => {
		const response = await fetch('http://' + domain + '/instances/' + instance.id + '/crawl');
		const data = await response.json();
		console.log(data);
	};

	const crawlImages = async () => {
		const response = await fetch('http://' + domain + '/instances/' + instance.id + '/crawlImages');
		const data = await response.json();
		console.log(data);
	};

	const deleteIntance = async () => {
		socket.close();
		const response = await fetch('http://' + domain + '/instances/' + instance.id, {
			method: 'DELETE'
		});
		const data = await response.json();
		console.log(data);
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
					class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {socketConnected
						? 'bg-green-100'
						: 'bg-red-100'} text-{socketConnected ? 'green-800' : 'red-800'}"
				>
					{socketConnected ? 'Connected' : 'Disconnected'}
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
	<form action="/instances?_method=DELETE" method="post">
		<input type="hidden" name="id" value={instance.id} />
		<button
			class="py-2 px-3 w-32 bg-red-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"
			>Delete</button
		>
	</form>
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
