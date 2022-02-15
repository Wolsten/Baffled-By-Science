---
title: Sample post
date: "2022-01-01"
categories: 
  - "disasters"
  - "geologic"
---

<script>
    import Utils from "$lib/Utils.js"
    import Timeline from '$lib/components/Timeline.svelte'

    import data0 from '$lib/data/deaths-from-natural-disasters.json'
    import data1 from '$lib/data/geologic-timescale.json'
    import data2 from '$lib/data/human-evolution.json'

    const dataDisasters = Utils.processDataset( data0 )
    const dataGeoTime = Utils.processDataset( data1 )
    const dataHumanEvo = Utils.processDataset( data2 )
  
</script>

## First timeline

<Timeline 
    data={dataDisasters}
    settings={{
        readonly:true
    }}
/>

## Second Timeline

<Timeline
    data={dataGeoTime}
    settings={{
        subCats: ['eon','era','period'],
        readonly: true
    }}/>

## Third Timeline

<Timeline
    data={dataGeoTime}
    settings={{
        subCats: ['eon','evolution'],
        readonly:true
    }}/>

## Fourth Timeline

<Timeline 
    data={dataHumanEvo}
    settings={{
        readonly: true
    }} />

## Fifth Timeline

<Timeline 
    data={dataHumanEvo}
    settings={{
        readonly: true,
        xRange: {
            start: -3200000,
            end: -200000
        }
    }}/>