<script>

    import { createEventDispatcher } from 'svelte'      

    import Symbol from '$lib/components/Symbol.svelte'
    import Utils from '$lib/Utils'

    // export let seriesSubCats
    export let eventsSubCats
    export let options
    export let filteredEvents

    const dispatch = createEventDispatcher()

    // console.log('Event subCats',eventsSubCats)
    // console.log('options subCats',options.subCats)


    function handleClickEventCategory( cat ){
        // console.log('filteredSeries',index, options.series)
        if ( cat != options.filter ){
            options.filter = cat
        } else {
            options.filter = ''
        }
        // console.log('selected',options.selectedEvent)

        dispatch('optionsChanged',{name:'category', data:options.filter})
    }


    function handleClickSeries( filter ){
        console.log('handleClickSeries with filter',filter)
        if ( filter != options.filter ){
            options.filter = filter
        } else {
            options.filter = ''
        }
        // console.log('selected',options.selectedEvent)

        dispatch('optionsChanged',{name:'category', data:options.filter})
    }



    // function handleClickSeries( index ){
    //     // console.log('filteredSeries',index, options.series)
    //     options.selectedPoint = { 
    //         name: options.series[index].name,
    //         index, 
    //         i:-1,
    //         points: options.series[index],
    //         citations: options.series[index].citations
    //     }
    //     console.log('selected',options.selectedPoint)

    //     dispatch('optionsChanged',{name:'selectedPoint', data:options.selectedPoint})
    // }

    function active( optionsFilter, filter, sel, index ){
        return (optionsFilter==filter) || (sel && sel.index==index)
    }

    // console.error('options',options)

</script>


<!------------------------------------------------------------------------------
@section HTML
-------------------------------------------------------------------------------->

{#if (eventsSubCats.length > 0 && filteredEvents.length > 0) || options.series.length > 1}

    <aside>

        {#if eventsSubCats.length > 0 && filteredEvents.length > 0 }

            <div class="sub-categories">

                <span class="title">Event categories:</span>

                {#each eventsSubCats as cat, index}

                    {#if filteredEvents.find(e=>e.subCategory==cat)}

                        <span class="series" 
                            style:color={Utils.colour(index, index, options.categorise)}
                            class:active={options.filter==cat} 
                            title="Click to highlight this event category"
                            on:click|stopPropagation={()=>handleClickEventCategory(cat)} >

                            {cat}
                        </span>

                    {/if}

                {/each}

            </div>

        {/if}

        {#if options.series.length > 1 }

            <div class="series">

                <span class="title">{options.totalise ? 'Series categories' : 'Series'}:</span>

                {#each options.series as series, index}

                    {@const filter = options.totalise ? series.subCategory : series.name}
                
                    <span class="series" 
                        style:color={Utils.colour(index, series.colourIndex, options.categorise || options.totalise)}
                        class:active={active(options.filter, filter, options.selectedPoint,index)} 
                        on:click|stopPropagation={()=>handleClickSeries(filter)}
                        title="Click to highlight this series">

                        {#if options.symbols}

                            <span class="symbol">

                                <svg width="8" height="8">

                                    <g transform="translate(4,4)">

                                        <Symbol i={0} {index} 
                                                defaultColour={Utils.colour(index, series.colourIndex, options.totalise||options.categorise)}
                                                symbolIndex={series.symbolIndex} 
                                                symbols={options.symbols} 
                                                selectedPoint={false}/>
                                    </g>
                                </svg>

                            </span>

                        {/if}
                        
                        {series.name}

                    </span>

                {/each}
            </div>

        {/if}
        
    </aside>
{/if}

<!------------------------------------------------------------------------------
@section STYLES
-------------------------------------------------------------------------------->



<style>

    aside {
        margin-top:2rem;
        padding:0.5rem;
    }

    div.sub-categories,
    div.series {
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 0;
        justify-content: center;
        width:100%;
        font-size:0.8rem;
    }

    span.title {
        padding-right:0.5rem;
    }

    span.series {
        display:flex;
        align-items: center;
        column-gap: 0;
        padding: 0.5rem 0 0.2rem 0;
        margin: 0 0.4rem;
        border-bottom:4px solid transparent;
        cursor: pointer;
        transition: all ease-in 300ms;
        text-align: center;
    }

    span.symbol {
        margin-right:0.2rem;
    }

    span.series:hover {
        border-color: var(--colour-legend-highlight);
    }

    span.series.active {
        border-color: inherit;
    }


</style>
