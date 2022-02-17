---
title: A sample post
date: 2022-02-16
summary: Gain a better perspective on life by looking at the evolution of life against  the geologic time scale going back over 4 billion years.
image: garrett-butler-eo3cppZxxCA-unsplash.jpg
imageCredit: Photo by <a href="https://unsplash.com/@glbutler17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Garrett Butler</a> on <a href="https://unsplash.com/collections/_Giamd8z4so/baffled-by-science/4aae626d376a8f46f5d4b78d1223a71c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - disasters
  - geologic
---

<script context="module">
    import Utils from "$lib/Utils.js"
    export const load = async ({ fetch }) => {
        return {
            props: {
                dataDisasters: await Utils.fetchDataset( fetch, 'deaths-from-natural-disasters'),
                dataGeoTime: await Utils.fetchDataset( fetch, 'geologic-timescale'), 
                dataHumanEvo: await Utils.fetchDataset( fetch, 'human-evolution') 
            }
        }
    }
</script>


<script>
    import Timeline from '$lib/components/Timeline.svelte'
    export let dataDisasters
    export let dataGeoTime
    export let dataHumanEvo
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
    }}
/>

## Third Timeline

<Timeline
    data={dataGeoTime}
    settings={{
        subCats: ['eon','evolution'],
        readonly:true
    }}
/>

## Fourth Timeline

<Timeline 
    data={dataHumanEvo}
    settings={{
        readonly: true
    }} 
/>

## Fifth Timeline

<Timeline 
    data={dataHumanEvo}
    settings={{
        readonly: true,
        xRange: {
            start: -3200000,
            end: -200000
        }
    }}
/>