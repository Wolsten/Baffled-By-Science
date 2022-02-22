---
title: A sample post
date: 2022-01-16
summary: A sample post demonstrating how to insert timelines and figures
image: images/garrett-butler-eo3cppZxxCA-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@glbutler17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Garrett Butler</a> on <a href="https://unsplash.com/collections/_Giamd8z4so/baffled-by-science/4aae626d376a8f46f5d4b78d1223a71c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - draft
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
    import Figure from '$lib/components/Figure.svelte'

    export let dataDisasters
    export let dataGeoTime
    export let dataHumanEvo
</script>

## Image

<Figure type="img" caption="Global map indicating the trend of LAI from 1981 to 2016" source="/images/41467_2019_12257_Fig1_HTML-1024w.png"/>

## YouTube video

<Figure type="youtube" caption="Rising CO2 levels greening earth" source="https://www.youtube.com/embed/zOwHT8yS1XI" />


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