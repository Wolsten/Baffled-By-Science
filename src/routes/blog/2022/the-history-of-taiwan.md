---
title: The history of Taiwan
date: 2022-02-16
summary: With geopolitical tensions arising around the world and the focus on the Ukraine, we should not forget that Taiwan is in a precarious position.
image: /images/tom-ritson-ehf8SFStOvM-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@ritsxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Ritson</a> on <a href="https://unsplash.com/s/photos/taiwan-culture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - taiwan
  - history
  - geopolitics
---


<script context="module">
    import Utils from "$lib/Utils.js"
    export const load = async ({ fetch }) => {
        return {
            props: {
                history: await Utils.fetchDataset( fetch, 'history-of-taiwan'), 
            }
        }
    }
</script>


<script>
    import Timeline from '$lib/Timeline/Timeline.svelte'
    export let history
</script>


## Introduction

As a schoolboy I loved history and in particular the way it was brought to life by one fantastic teacher - thank you Mr. Chisholm! Unfortunately, there came a point when I had to choose which subjects to concentrate on. With my main interests being math(s) and science there wasn't room in the timetable to keep up with every subject. 

This also meant dropping other interesting subjects including languages and geography but strangely enough there was time for something called *General Studies*. I can't remember a thing about it and in modern times I would strongly argue against compulsory subjects which crowd out more *useful* ones.

Anyway, getting back to today, the current [crisis in the Ukraine](/blog/2022/the-crisis-in-ukraine) is very worrying and exacerbated by weak governments around the world and disarray in  global institutions like NATO. Unfortunately, this means that Taiwan is in more danger from China than has been the case for many years. Thinking about this, I realised that I knew next to nothing about the history of Taiwan and that this needed to be rectified.

Therefore I have put together the following timeline which shows the birth and development of modern Taiwan using data taken from the Taiwan government's website and Wikipedia. Taiwan has been home to Malayo-Polynesian peoples for many millenniums. It is commonly believed that in the 1500's Portuguese sailors passing Taiwan recorded the island’s name as Ilha Formosa, or beautiful island, and I have begun our timeline in this period.

<Timeline 
    data={history}
    settings={{
        readonly:true
    }}
/>

After successive early invasions by the Dutch East India Company and the Spanish, the Dutch were finally ejected by the Ming loyalists under Zheng Cheng-gong (also known as Koxinga). Koxinga established Ming authority over the island and apart from a 50 year period of Japanese rule, the island was ruled successively by the Ming, the Qing and then the Republic of China (ROC).

We can look in more detail at the modern period for the ROC and the PRC.

<Timeline 
    data={history}
    settings={{
        readonly:true,
        xRange: {
            start: 1912,
            end: 2020
        }
    }}
/>

Between 1948 and 1949 a full-scale civil war raged in China between the Kuomintang-led ROC government and Chinese Communist Party (CPP). This culminated in the establishment of the People's Republic of China (PRC) and the relocation of the relocation of the ROC to the island of Taiwan in 1949 and marks the effective split of the two regimes.

From then on we see the emergence of a fully functioning democratic system in Taiwan with the formation of the Democratic Progressive Party in 1986 and changes in power over the years with the KMT. 

With the US Mutual Defense Treaty in 1954 we see the beginning of diplomatic and trade relationships developing with other countries though this has so far stopped short of full diplomatic recognition as a sovereign nation. China continues to lay claim to the island. At some point, the West, in particular, will have to decided whether encouraging favourable relations with China is outweighed by the rights of the Taiwanese to self determination.


## References and further reading

1. Official website https://taiwan.gov.tw/content_3.php
2. Wikipedia main page https://en.wikipedia.org/wiki/Taiwan
3. Wikipedia timeline of Taiwanese history https://en.wikipedia.org/wiki/Timeline_of_Taiwanese_history

