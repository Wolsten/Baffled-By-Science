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
                credits: credits.sort( (a,b) => {
                    const A = a.name.toLowerCase()
                    const B = b.name.toLowerCase()
                    if ( A > B ) return 1
                    if ( A < B ) return -1
                    return 0
                }),
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

<HeaderImage 
    title="Baffled by Science Credits" 
    description="Sources of tool, data, knowledge, images and inspiration"
    image="/images/alexas_fotos-pnGjbJEmU3o-unsplash-thumb.jpg"
    imageCredit='Photo by <a href="https://unsplash.com/@alexas_fotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexas_Fotos</a> on <a href="https://unsplash.com/s/photos/thanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
/>

<div class="page-container">

    <h1>Credits</h1>

    <p>Many thanks to all those who freely provide fantastic tools, data, knowledge and media, helping bloggers like myself to build content-rich websites. Use the drop-down list below to highlight specific types of resource.</p>

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

