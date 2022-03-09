<script>
    import {onMount} from 'svelte'

    import Utils from "$lib/Utils.js"
    import Axes from '$lib/Timeline/Axes.svelte'
	import Events from '$lib/Timeline/Events.svelte'
    import Canvas from '$lib/Timeline/Canvas.svelte'
    import Legend from '$lib/Timeline/Legend.svelte'
	import Options from '$lib/Timeline/Options.svelte'
    import EventProperties from '$lib/Timeline/EventProperties.svelte'
    import CanvasProperties from '$lib/Timeline/CanvasProperties.svelte'
    import Caption from '$lib/Timeline/Caption.svelte'
    import XRange from '$lib/Timeline/XRange.svelte'
    // import DebugTimeline from "$lib/Timeline/DebugTimeline.svelte"
    import {windowWidth, touch} from '$lib/stores'

    export let data
    export let settings = {}

    // Copy the object values - spread retains references so cannot be used
    // This ensures that the data is not inadvertently shared across instances
    // of this component             
    data = JSON.parse(JSON.stringify(data))
    
    const options = {
        ...Utils.initSettings( settings, data.start, data.end, [...data.eventsSubCats, ...data.seriesSubCats]), 
        selectedEvent : false,
        selectedPoint : false,
        zoom: 1,
        series : []
    }
    
    // console.log('data',data, '\noptions', options)

    let viewport
    let viewportWidth = 0
    let scale = 0
    let paddingLeft = Utils.CANVAS_PADDING_LEFT
    let paddingRight = Utils.CANVAS_PADDING_RIGHT
    let drawingWidth = 0

    // Adjust start and end values where have "-" start or end dates
    let startValue
    let endValue

    // Events, series and groups filtered by date range (search and subCats)
    // Filtering by subCats done in canvas component)
    let filteredEvents = []
    let filteredSeries = []
    let filteredGroups = []

    // Wait for window to be mounted to test for touch devices
    onMount( ()=> {
        const msTouchEnabled = window.navigator.msMaxTouchPoints
        const generalTouchEnabled = "ontouchstart" in document.createElement("div")
        $touch = msTouchEnabled || generalTouchEnabled
    })

    //
    // Reactive stuff
    //
    
    $: if ( $windowWidth ) handleResize()

    //
    // Functions
    //


    function handleOptions(event){
        const detail = event.detail
        // console.log('Options changed',detail)
        switch( detail.name ){
            case 'selectedPoint' : 
                options.selectedPoint = detail.data
                break
            case 'selectedEvent' : 
                options.selectedEvent = detail.data
                break
            case 'symbols'  : options.symbols = detail.data; break
            case 'logScale' : options.logScale = detail.data; break
            case 'xRange': 
                // console.log('resetting xRange')
                options.xRange = detail.data
                options.selectedEvent = false
                options.selectedPoint = false
                scaleX()
                break
            case 'filter'   : 
                options.filter = detail.data
                options.selectedEvent = false
                options.selectedPoint = false
                break
            case 'categorise' : options.categorise = detail.data; break
            case 'totalise'   : options.totalise = detail.data; break
            case 'sort'       : options.sort = detail.data; break
            case 'search': 
                options.search = detail.data
                scaleX()
                break
        }
        if ( detail.name != 'search' && detail.name != 'category' ){
            options.search = ''
        }
    }

    $: clickable = options.selectedEvent !== false || options.selectedPoint !== false

    function handleClick(){
        // console.error('Handling timeline click in dataset',data.name)
        if ( options.selectedEvent !== false ){
            options.selectedEvent = false
        }
        if ( options.selectedPoint !== false ){
            options.selectedPoint = false
        }
    }


    const handleResize = Utils.debounce( event => {
        // console.log('Handling resize')
        if ( viewport && viewport.clientWidth != viewportWidth ){
            viewportWidth = viewport.clientWidth
            scaleX()
            // console.warn('Set new viewport width', viewportWidth)
            // Non-intuitive behaviour on touch devices
            if ( $touch == false ){
                if ( options.selectedEvent ){
                    setTimeout( scrollToSelected, 500 )
                }
            }
        }
        }, 500
    )


    function scaleX(){
        viewportWidth = viewport.clientWidth
        // console.error('scaleX: viewPortWidth',viewportWidth)
        drawingWidth = viewportWidth - paddingLeft - paddingRight
        // console.log('drawingWidth',drawingWidth)
        // scale in pixel / x-unit
        scale = drawingWidth / options.xRange.range
        // console.log('rescaling',scale)
        startValue = options.xRange.start - paddingLeft / scale
        endValue = options.xRange.end
        // console.warn('startValue',startValue,'endValue',endValue)
        filteredEvents = Utils.processEvents(data.events, 
                                             scale, startValue, endValue, drawingWidth, 
                                             data.eventsSubCats, options.subCats, 
                                             options.search)
        // console.log('series',series,'groups',groups,'scale',scale)
        if ( data.series.length > 0 ) filteredSeries = Utils.processSeries(data.series, scale, startValue, endValue)
        if ( data.groups.length > 0 ) filteredGroups = Utils.processSeries(data.groups, scale, startValue, endValue)

        // Label the axes
        data.xAxis = Utils.labelAxis(data.xAxis, paddingLeft, drawingWidth, options.xRange)
        // console.log('xAxis',xAxis)
    }


    function scrollToSelected(){
        if ( options.selectedEvent ){
            const selectedElement = viewport.querySelector('.selected')
            if ( selectedElement ){
                // console.log('scrolling into view')
                selectedElement.scrollIntoView({block:'start'})
                // console.log('scrolling into view')
            }
        }
    }

</script>






<!------------------------------------------------------------------------------
@section HTML
-------------------------------------------------------------------------------->

<!-- <DebugTimeline {data} {options} /> -->



<figure class="timeline">

    <div class="timeline-content">

        {#if options.readonly}

            <Caption {options} title={data.name} slug="/explore/{data.slug}"/>
        
        {:else}

            <Options {options} xAxis={data.xAxis}
                    seriesLength={data.series.length} eventsLength={data.events.length}
                    on:optionsChanged={handleOptions}/>
        {/if}

        <div class:clickable on:click|stopPropagation={handleClick}>

            <div class="viewport" bind:this={viewport}>

                {#if scale !== 0 }

                    {#if filteredEvents.length > 0 }
                        <Events events={filteredEvents} size={filteredEvents.length}
                                {viewportWidth} {options} 
                                on:optionsChanged={handleOptions}/>
                    {/if}

                    {#if filteredSeries.length > 0 }
                        <Canvas series={filteredSeries} groups={filteredGroups} 
                                {viewportWidth} {drawingWidth} {paddingLeft}
                                {options} on:optionsChanged={handleOptions}/>
                    {/if}

                    <Axes xAxis={data.xAxis} {viewportWidth} {paddingLeft} {drawingWidth}/>
                {/if}

            </div>

        </div>

        {#if scale !== 0 && options.readonly === false}
            <XRange xAxis={data.xAxis} {paddingLeft} {paddingRight} 
                    {options} on:optionsChanged={handleOptions}/>
        {/if}


        <!-- seriesSubCats={data.seriesSubCats}   -->
        <Legend eventsSubCats={data.eventsSubCats} {filteredEvents} 
                {options} on:optionsChanged={handleOptions}/>

        <EventProperties selectedEvent={options.selectedEvent} on:optionsChanged={handleOptions}/>

        <CanvasProperties {options} on:optionsChanged={handleOptions}/>

    </div>

    

</figure>


<style>

    figure {
        margin:3rem 0;
        width:100%;
        overflow:hidden;
    }

    .timeline-content {
        padding:1rem;
        background: var(--colour-chart-background);
        position:relative;
        width:100%;
        overflow:hidden;
    }

    .viewport {
        position:relative;
        width:100%;
        overflow:hidden;
        margin:0;
        padding:0;
    }

    .clickable {
        cursor:zoom-out;
    }

</style>


