
<!-- @todo UNUSED: Cannot get the associated api endpoint working to find datasets 
	in the static data folder -->
<script context="module">
    
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

	<p><a href="/explore/{dataset.path}">{dataset.path}</a></p>

{/each}


