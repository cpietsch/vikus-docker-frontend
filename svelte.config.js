import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		prerender: { default: false, entries: [], enabled: false },
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/vikus-viewer-frontend",
		},
	}
};

export default config;
