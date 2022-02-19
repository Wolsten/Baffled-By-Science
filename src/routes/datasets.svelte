<script context="module">
  import Utils from "$lib/Utils.js"
  export async function load({ fetch }) {
      const datasets = await Utils.fetchData( fetch, 'collections')
      // Return props to script
      return {
          props: {
            datasets
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


