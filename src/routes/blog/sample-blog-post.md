---
title: A sample post template
summary: A sample post demonstrating how to insert timelines and figures
image: /images/rephile-water-cuqp2Jzz_lY-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@revolution_in_filtration?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">RephiLe water</a> on <a href="https://unsplash.com/s/photos/laboratory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - draft
  - disasters
  - geologic
history:
  - 2022-01-16 § ***DRAFT***
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
    import Timeline from '$lib/Timeline/Timeline.svelte'
    import Figure from '$lib/components/Figure.svelte'

    export let dataDisasters
    export let dataGeoTime
    export let dataHumanEvo
</script>

## Header image

The header image should be min 600px wide and 450px high



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