<script>

    export let type
    export let caption
    export let source

</script>

<figure>

    {#if type === 'img' }
        
        <img src={source} alt={caption} />

    {:else if type === 'youtube' }

        <iframe class="youtube" src={source} title={caption} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>

    {/if}

    <figCaption>{caption}</figCaption>
</figure>   



<style>

    figure {
        display:block;
        max-width: 100%;
        text-align: center;
        margin: 3rem 0;
    }

    figure img {
        max-width: 100%;
        height:auto;
    }

    figcaption {
        font-style: italic;
        text-align:center;
        font-size:0.9rem;
        font-weight:bold;
    }

    iframe.youtube {
        display:block;
        width:600px;
        height:400px;
        max-width: 100%;
    }

</style>

