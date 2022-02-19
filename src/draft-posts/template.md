---
title: Title goes here
date: Date like this goes here: 2022-01-16
summary: Summary goes here - no quotes needed
image: Full path to image thumb version goes here /images/xxx-thumb.jpg
imageCredit: Photo credit goes here
categories: 
  - category-a
  - category-b
---

<!-- Optional sections when using timeline component -->

<script context="module">
    import Utils from "$lib/Utils.js"
    export const load = async ({ fetch }) => {
        return {
            props: {
                dataset1: await Utils.fetchDataset( fetch, 'dataset1'), 
                // etc as required
            }
        }
    }
</script>

<script>
    import Timeline from '$lib/components/Timeline.svelte'
    export let dataset1
    // etc as required
</script>

<!-- Start with level two headings -->
## Introduction

Markup as required

<Timeline
    data={dataset1}
    settings={{
        subCats: ['cat1','cat2','cat3'],
        readonly: true
    }}/>

etc...

## More reading

If you are not convinced please read my article on [Deaths from natural disasters](/blog/2022/deaths-from-natural-disasters) where I explore how the human species is more resilient than you might think.