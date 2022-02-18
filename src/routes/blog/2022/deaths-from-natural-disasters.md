---
title: Deaths from natural disasters
date: 2022-02-13
summary: Natural disasters kill on average 60,000 people per year and are responsible for 0.1% of global deaths but it's not all bad news.
image: /images/chandler-cruttenden-oa_63VHgdiA-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@chanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chandler Cruttenden</a> on <a href="https://unsplash.com/s/photos/tornado?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - disasters
  - climate
---

<script context="module">
    import Utils from "$lib/Utils.js"
    export const load = async ({ fetch }) => {
        return {
            props: {
                deaths: await Utils.fetchDataset( fetch, 'deaths-from-natural-disasters'), 
            }
        }
    }
</script>

<script>
    import Timeline from '$lib/components/Timeline.svelte'
    export let deaths
</script>


## Summary

In this post we will look at why there is room for optimism by taking a detailed look at some long term natural disaster data collated by Hannah Ritchie and Max Roser at Our World In Data <sup>[1](#references)</sup>. You may be surprised at the results.

## Data analysis

The following graph summarises the total number of deaths due to all types of natural disaster since 1896. 

<Timeline
    data={deaths}
    settings={{
        readonly: true,
        totalise: true,
        subCats: ['total'],
        title: 'Total deaths from natural disasters'
    }}/>

You can see that deaths due to natural disasters are very lumpy but display a generally declining trend since the 1930's. This does not mean that natural disasters themselves have decreased (the data does not address that question) but it does show that deaths have reduced dramatically and the main factor identified by the authors is increasing prosperity.

Looking at this in more detail we can break the data down into categories such as climate related and meteorological. Incidentally, the source data is also broken down by country, but we have not analysed the distribution here. 

Try clicking on each category in the legend below the graph to highlight data in each series. You should see that the main contributors to death are climate related.

<Timeline
    data={deaths}
    settings={{
        readonly: true,
        totalise: true,
        title: 'Total deaths from natural disasters (by category)'
    }}/>

Finally, let's look at the individual contributions from all sources, colour-coded according to category as shown in the graph above. Try clicking on the series buttons in the legend to find the biggest contributors.

<Timeline
    data={deaths}
    settings={{
        readonly: true,
        title: "Deaths from natural disasters (all types)"
    }}/>

You should find that the main causes of death are floods and drought, the two best known extremes in climate impacts. As we found earlier, the effect of these events is now relatively insignificant by comparison with events earlier in the century.

## Conclusion

We understand in an intuitive way that as nations develop they will be better able to withstand the impact of natural disasters, for example by investing in better housing, flood defences and early warning systems. Therefore, the clear lesson is that whether the underlying events are increasing or not, what each nation needs to do is to invest in such measures, particularly developing nations. 

Unfortunately, this goes against the current zeitgeist of the climate emergency. There are good reasons to invest in alternative energy sources such as wind and solar, but reducing deaths from climate related natural disasters is not one of them. Worse, investing trillions globally on renewables means we are neglecting practical measures that can save lives at a fraction of the cost.

## References

1. Hannah Ritchie and Max Roser (2014) - "Natural Disasters". Published online at OurWorldInData.org. Retrieved from: (https://ourworldindata.org/natural-disasters) [Online Resource]
