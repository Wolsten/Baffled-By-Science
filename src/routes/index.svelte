<!-- src/routes/blog/index.svelte -->
<script context="module">

	// Add about post as special post
	const aboutPost = {
		path : '../about',
		meta: {
			title:'About this blog',
			history: [ '2022-01-23 § Published.'],
			summary : 'The blog for those of us baffled by what we read or hear in the media about science, technology and policy making.',
			image : '/images/jr-korpa-fi5FPDZ6tns-unsplash-thumb.jpg',
			imageCredit: 'Photo by <a href="https://unsplash.com/@jrkorpa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jr Korpa</a> on <a href="https://unsplash.com/collections/_Giamd8z4so/baffled-by-science/4aae626d376a8f46f5d4b78d1223a71c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
		}
	}

    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
    
      return {
        props: {
          posts: [aboutPost, ...allPosts]
        }
      }
    }

</script>

<script>
	import {slide} from 'svelte/transition'
	import Post from '$lib/components/Post.svelte'
	import OpenGraph from '$lib/components/OpenGraph.svelte'

    export let posts
</script>

<OpenGraph />

<div class="grid" transition:slide>

    {#each posts as post, index}

		<!-- {#if index<=n} -->
        	<Post {post} />
		<!-- {/if} -->

    {/each}

</div>


<style>

    div.grid {
        display:flex;
		flex-wrap: wrap;
		justify-content: center;
        /* column-gap:3rem; */
        /* row-gap:3rem; */
		/* padding-top:3rem; */
    }

	@media ( max-width:600px ){
		div.grid {
			justify-content: space-between;
			padding-top:0;
			/* column-gap:0;
        	row-gap:1rem; */
		}
	}

</style>