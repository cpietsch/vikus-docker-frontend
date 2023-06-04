<script>
	import { api } from '$lib/api';
	import Button from '$lib/form/Button.svelte';
	import { parameters } from '$lib/store';
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let instance;
	export let path;

	console.log(path);

	let loading = false;

	const onSubmit = async (e) => {
		loading = true;
		const formData = new FormData(e.target);
		const fields = {};
		for (let field of formData) {
			const [key, value] = field;
			fields[key] = value;
		}
		const response = await api(path.method, path.path, null, fields);
		const data = await response.json();
		const name = path.path.split('/').pop();
		dispatch('completed', {
			name
		})
		loading = false;
	};

	const value = (params) => {
		if (params.name === 'instance_id') {
			return instance.id;
		}
		return params.schema.default;
	};

	const type = (params) => {
		const type = params.schema.type;
		if (type === 'number' || type === 'integer') {
			return 'number';
		}
		if (type === 'boolean') {
			return 'checkbox';
		}
		return 'text';
	};
</script>

<div class="flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-4 ">
	<h1 class="mb-2">{path.name}</h1>
	<p class="text-sm mb-4">{path.description}</p>
	<form on:submit|preventDefault={onSubmit}>
		{#each path.parameters as params}
			<label
				class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"
				class:hidden={params.name === 'instance_id'}
				for={params.name}
			>
				<span class="flex-auto">{params.description}</span>
				{#if params.schema.type === 'boolean'}
					<input type="hidden" name={params.name} id={params.name} value="false" />
					<input
						type="checkbox"
						name={params.name}
						id={params.name}
						class="rounded-lg  p-2 mr-1 border-2 border-gray-300"
						value="true"
					/>
				{:else}
					<input
						name={params.name}
						id={params.name}
						class="rounded-lg  p-2 mr-1 border-2 border-gray-300"
						type={type(params)}
						value={value(params)}
						step="any"
					/>
				{/if}
			</label>
		{/each}

		<Button {loading}>Run</Button>
	</form>
</div>
