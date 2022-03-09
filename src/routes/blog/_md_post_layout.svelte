<!-- _post.svelte Single post layout file for markdown files
     specified in svelte.config.js -->
<script>

    import HeaderImage from '$lib/components/HeaderImage.svelte'
    import Comments from '$lib/components/Comments.svelte'
    import {windowWidth,containerWidth} from '$lib/stores'
    import { slide, fade } from 'svelte/transition'

    // Pull in meta data from frontmatter in each markdown blog post
    export let title
    // export let date
    // export let updatedDate = ''
    export let summary
    export let image
    export let imageCredit
    export let categories = []
    export let history = []

    // Version history
    let created = ''
    let updated = false
    let versions = []
    let showVersionHistory = false
    if ( history ){
        history.forEach( version => {
            const parts = version.split('§')
            if ( parts.length == 2 ){
                versions.push({
                    date:new Date(parts[0].trim()),
                    change: parts[1].trim()
                })
            }
        })
        if ( versions.length > 0 ){
            created = versions[0].date
        }
        if ( versions.length > 1 ){
            updated = versions[versions.length-1].date
        }
    }

    // console.table(history)
    // console.table(versions)
    // console.log({updated})

    let container

    $: if ( $windowWidth && container ) {
        const paddingLeft = window.getComputedStyle(container).getPropertyValue('padding-left')
        const paddingRight = window.getComputedStyle(container).getPropertyValue('padding-right')
        const padding = parseInt(paddingLeft.slice(0,-2)) + parseInt(paddingRight.slice(0,-2))
        // console.log('padding',padding)
        // console.log('width',container.clientWidth)
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

            {#if updated }
                <br>
                Last updated {updated.toLocaleDateString()}
                <span class="show-version" 
                      title="{showVersionHistory?'Hide version history':'Show version history'}"
                      transition:fade
                      on:click={()=>showVersionHistory=!showVersionHistory}>
                    {showVersionHistory?'-hide':'+show'} history
                </span>
                {#if showVersionHistory}
                    <dl transition:slide>
                        {#each versions as version}
                            <dt>{version.date.toLocaleDateString()}</dt>
                            <dd>{version.change}</dd>
                        {/each}
                    </dl>
                {/if}
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

    .show-version {
        font-style: normal;
        cursor: pointer;
        color: var(--colour-link);
    }

    dl {
        display: flex;
        flex-flow: row wrap;
        font-style: normal;
    }
    dt {
        flex-basis: 20%;
        padding: 0.2rem 1rem;
        text-align: center;
    }
    dd {
        flex-basis: 70%;
        flex-grow: 1;
        margin: 0;
        padding: 0.2rem 1rem;
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