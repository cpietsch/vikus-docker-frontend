<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const url = `http://localhost:5000/instances`;
		try {
			const response = await fetch(url);
			return {
				//status: response.status,
				props: {
					instances: response.ok && (await response.json())
				}
			};
		} catch (error) {}
		return {};
	}
</script>

<script>
	import '../app.css';

	import Header from '$lib/Header.svelte';
	import InstanceList from '$lib/InstanceList.svelte';
	// import InstanceList from 'src/routes/instances/index.svelte';

	export let instances = [];
</script>

<Header />

<div class="overflow-hidden">
	<div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
		<div
			class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
		>
			<nav id="nav" class="lg:text-sm lg:leading-6 relative">
				<div class="sticky top-0 -ml-0.5 pointer-events-none">
					<div class="h-10 " />
					<div class="relative flex text-center pointer-events-auto">
						<a
							href="/new"
							class="w-full py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none"
							>New Instance</a
						>
					</div>
				</div>
				<div class="h-8 bg-gradient-to-b from-white dark:from-slate-900">
					<InstanceList {instances} />
				</div>
			</nav>
		</div>
		<div class="lg:pl-[19.5rem]">
			<div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
				<main class="relative z-20 prose prose-slate dark:prose-dark pb-10">
					<slot />
				</main>
			</div>
		</div>
	</div>
</div>

<!-- <footer>VIKUS Viewer - IIIF Parser</footer> -->
<style>
</style>
