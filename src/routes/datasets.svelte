
<script context="module">

  // import collections from '../../../static/data/collections.json'
  // console.log('collections',collections)
    
	/**
     * Load the dataset collections catalogue
     *
	 * @type {('@sveltejs/kit').Load}
	 */
	 export const load = async ({ fetch }) => {
      const datasets = await fetch('/api/datasets.json')
      return {
        props: {
          datasets: await datasets.json()
        }
      }
    }

</script>


<script>

	export let datasets

</script>



{#each datasets as dataset}

	<p><a href="/explore/{dataset.slug}">{dataset.name}</a></p>

{/each}


