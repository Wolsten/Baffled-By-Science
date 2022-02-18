<!-- _post.svelte Single post layout file for markdown files
     specified in svelte.config.js -->
<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    
    import HeaderImage from '$lib/components/HeaderImage.svelte'

    // Pull in meta data from frontmatter in each markdown blog post
    export let title
    export let date
    export let updatedDate = ''
    export let summary
    export let image
    export let imageCredit
    export let categories = []

    // let banner = `/images/${image}`
    let created = new Date(date)
    let updated = updatedDate ? new Date(updatedDate) : ''

    // Add id's to all headings
    onMount(()=>{
        const headings = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
        // console.log('headings',headings)
        headings.forEach( heading => {
            if ( heading.id === '' ){
                const id = heading.innerHTML
                    .replaceAll(' ','-')
                    .replaceAll("'",'')
                    .replaceAll('"','')
                heading.id = id.toLocaleLowerCase()
            }
        })
    })
</script>

<HeaderImage {title} description={summary} {image} {imageCredit}/>

<div class="page-container" transition:fade>  

    <header>
        <h1>{title}</h1>
        <p class="dates">Published {created.toLocaleDateString()}

            {#if categories.length > 0}
                in {categories.join(', ')}
            {/if}

            {#if updatedDate && updatedDate != date }
                <br>Updated {updated.toLocaleDateString()}
            {/if}
        </p>
        <blockquote>{summary}</blockquote>
    </header>

    <div class="post">
        <slot />
    </div>

</div>





<!------------------------------------------------------------------------------
@section STYLES
-------------------------------------------------------------------------------->

<style>

    header {
        width:100%;
        overflow:hidden;
    }

    h1 {
        margin-bottom: 0;
        font-size: 2rem;
    }

    p.dates {
        margin-top:0;
        font-style: italic;
        /* font-weight: bold; */
    }

    blockquote{
        font-size: 1.2rem;
        line-height: 2rem;
    }
    blockquote:before {
        content: '';
    }

</style>