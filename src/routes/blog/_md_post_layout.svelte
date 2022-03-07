<!-- _post.svelte Single post layout file for markdown files
     specified in svelte.config.js -->
<script>
    import { fade } from 'svelte/transition'
    
    import HeaderImage from '$lib/components/HeaderImage.svelte'
    import Comments from '$lib/components/Comments.svelte'
    import {windowWidth,containerWidth} from '$lib/stores'

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


    let container

    $: if ( $windowWidth && container ) {
        const paddingLeft = window.getComputedStyle(container).getPropertyValue('padding-left')
        const paddingRight = window.getComputedStyle(container).getPropertyValue('padding-right')
        const padding = parseInt(paddingLeft.slice(0,-2)) + parseInt(paddingRight.slice(0,-2))
        console.log('padding',padding)
        console.log('width',container.clientWidth)
        $containerWidth = container.clientWidth - padding
    }

</script>

<HeaderImage {title} description={summary} {image} {imageCredit}/>

<div class="page-container" transition:fade bind:this={container}>  

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

    <Comments />

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
    }

    blockquote{
        font-size: 1.2rem;
        line-height: 2rem;
        margin:2rem 0;
        padding: 1.6rem 1.6rem;
        background-color: var(--material-500-blue-grey);
        color:white;
    }
    blockquote:before {
        content: '';
    }

    :global(.original-figure) {
        display:none;
    }

</style>