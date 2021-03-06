// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
	  sveltePreprocess(),
	  mdsvex({
		extensions: ['.md'],
		layout: {
			blog: 'src/routes/blog/_md_post_layout.svelte'
		},
	  })
	]
};

export default config;
