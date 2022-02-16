<script context="module">
    import Utils from "$lib/Utils.js"
	export async function load({ fetch }) {
        const credits = await Utils.fetchData( fetch, 'credits')
        let categories = []
        // Recover link from paragraph and save categories
        const pattern = /<p>(<a.+\/a>)<\/p>/gmis
        credits.forEach ( credit => {
            credit.link = credit.link.replace( pattern, "$1" )
            credit.categories.forEach( cat => {
                if ( categories.includes(cat) === false ){
                    categories.push(cat)
                }
            })
        })
        // Return props to script
        return {
            props: {
                credits,
                categories
            }
        }
    }

</script>


<script>

    import {fade} from 'svelte/transition'

    import HeaderImage from '$lib/components/HeaderImage.svelte'
    import Select from '$lib/components/Inputs/Select.svelte'

    export let credits
    export let categories

    let category = 'Any'
    let filteredCredits = credits

    function handleCategoryFilter(){
        // console.log('filter',category)
        if ( category === 'Any' ){
            filteredCredits = credits
        } else {
            filteredCredits = credits.filter( credit => credit.categories.includes(category))
        }
    }

</script>

<HeaderImage title="Baffled by Science Credits" description="Sources of data, images and inspiration"/>

<div class="page-container">

    <h1>Credits</h1>

    <Select name="category" label="Filter by category" first="Any" options={categories} bind:value={category} on:changed={handleCategoryFilter}/>

    {#each filteredCredits as credit}

        <article transition:fade>

            <h2>{credit.name} </h2>

            <p class="categories">Filed under: {credit.categories.join(', ')}</p>

            {@html credit.summary}

            {@html credit.link}
            
        </article>

    {/each}

</div>


<style>

    article {
        margin: 2rem 0 3rem 0;
    }

    h2 {
        margin-bottom:0;
    }    
    .categories {
        padding:0;
        margin:0;
    }
</style>

