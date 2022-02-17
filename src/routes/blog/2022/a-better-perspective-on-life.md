---
title: A better perspective on life
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
                dataGeoTime: await Utils.fetchDataset( fetch, 'geologic-timescale'), 
                dataHumanEvo: await Utils.fetchDataset( fetch, 'human-evolution') 
            }
        }
    }
</script>


<script>
    import Timeline from '$lib/components/Timeline.svelte'
    export let dataGeoTime
    export let dataHumanEvo
</script>


## Introduction

Like most of us I struggle to grasp the passing of time over longer periods in history and I suspect this is a problem which can blind us to  the wider perspective concerning events which unfold over thousands of years. It's all too easy to respond to the latest anecdotal evidence that "X has never been so bad" because "X" just hit us in the face or is being trumpeted across the media. Unless we look back at real data relating to "X" then it's really impossible to understand whether what we are seeing is really unusual in a relevant historical context.

For this reason I created this post which tries to encourage taking a longer term perspective by setting human evolution in the context of geologic timescales, i.e from present day to about 4.6 billion years ago. The following chart shows the conventional geologic timescale broken down into eons, eras and periods.

Click on each event to read about that event and find more information with a link to its page on Wikipedia.

<Timeline
    data={dataGeoTime}
    settings={{
        subCats: ['eon','era','period'],
        readonly: true
    }}/>

Now lets concentrate on the 4 main eons and superimpose the time-span relating to human evolution.

<Timeline
    data={dataGeoTime}
    settings={{
        subCats: ['eon','evolution'],
        readonly: true
    }}/>

It should be clear that we are a very recent addition to the planet. To put this in context, the world is approximately 4.6 billion years old and human evolution, starting with the earliest primates, began about 65 million years ago. This is about 1.4% of the history of the earth. If the total life of the earth was represented by a clock with midnight being the origin of the earth and 1am being today, life would have begun about 50 seconds ago! 

And remember this relates only to the appearance of the earliest primates. We can explore human evolution in more detail looking at the development of primates into the genus *homo*, culminating in ourselves *homo sapiens*.

<Timeline
    data={dataHumanEvo}
    settings={{
        readonly: true
    }}/>

We can see that the period *Before homo* is split into 3 periods: 

1. Early evolution of primates
2. Human divergence
2. Australopithecus

*Genus homo* corresponds to the appearance of the earliest representative *Homo Habilis*. We can focus the time-span on this event and the detailed events within it:

<Timeline
    data={dataHumanEvo}
    settings={{
        readonly: true,
        xRange: {
            start: -3200000,
            end: -200000
        }
    }}/>

This shows that *homo sapiens* appeared about 300,000 years ago, or in our clock analogy, about one fifth of a second before midnight! 

Does this help to put our every day lives into bigger context, providing a better perspective on our significance? Perhaps the next time you see an apocalyptic warning in the media ask yourself whether it is really likely that the earth is about to end given how long it has been around. Is it really that fragile?

## More reading

If you are not convinced please read my article on [Deaths from natural disasters](/blog/2022/deaths-from-natural-disasters) where I explore how the human species is more resilient than you might think.