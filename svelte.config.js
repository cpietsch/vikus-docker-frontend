import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		prerender: { default: false, entries: [] },
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		adapter: adapter({
			fallback: 'index.html',
		}),
		paths: {
			base: dev ? "" : "/frontend",
		},
	}
};

export default config;
