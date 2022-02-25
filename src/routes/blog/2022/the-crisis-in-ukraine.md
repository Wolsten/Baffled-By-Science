---
title: The history of Ukraine
date: 2022-02-25
summary: Laying out the historical events leading to the current invasion of Ukraine by Russia and what we can do now
image: /images/tom-ritson-ehf8SFStOvM-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@ritsxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Ritson</a> on <a href="https://unsplash.com/s/photos/taiwan-culture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - ukraine
  - history
  - geopolitics
---


<script context="module">
    import Utils from "$lib/Utils.js"
    import Figure from "$lib/components/Figure.svelte"
    export const load = async ({ fetch }) => {
        return {
            props: {
                history: await Utils.fetchDataset( fetch, 'history-of-ukraine'), 
            }
        }
    }
</script>


<script>
    import Timeline from '$lib/Timeline/Timeline.svelte'
    export let history
</script>


## Introduction

As we watch the horrific events in Ukraine I am reminded yet again that my grasp of modern history is seriously lacking, hence this post which aims to layout the key events in the development of modern Ukraine. I have relied heavily on Wikipedia and am very aware that it is not always the most reliable source of information. Therefore, I am very happy to be corrected in the comments below and will endeavour to update this post to address any factual errors or omission of important events.

<Timeline 
    data={history}
    settings={{
        readonly:true
    }}
/>

## Some thoughts

First the standard caveat. I completely disagree with the action that Russia has taken. Vladimir Putin is probably one of the one richest people in the world through his control of previously state-controlled monopolies, now run by his cronies who shelter his _take_ on his behalf. For many years governments around the world have chosen not to see what has been going on, preferring instead to develop business operations in Russia, including allowing money laundering investments in property in cities such as London. 

That said, it is difficult to argue that Putin is not a _strong_ leader compared to his counterparts in Europe and the US, mired in unpopularity and petty scandals, pushing policies that by design or accident, are handing strategic power to Russia. Energy policy policy is at the forefront due to efforts to de-carbonise our economies. Whilst Russia has built up its military forces, the west (particularly Europe) - has reduced military spending and gone on a crusade to improve diversity and inclusion in our fighting forces.

Perhaps a small benefit of the crisis is that the social justice war will be seen for what it is - a dangerous distraction symptomatic of a decedent and decaying western civilisation that is ashamed of its own history and culture. Undoubtedly I'll be accused of all sorts of 'isms but I don't care. It's long overdue that we pushed back against this nonsense and realised that in the real world more pronouns won't help on the physical battlefield. 

This point came up in a recent video discussion between Konstantin Kisin and Freddy Sayers on UnHerd:

<Figure
    type="youtube"
    source="https://www.youtube.com/embed/PN5Zmq9YTUs"
    caption="Konstantin Kisin: Has the media got Ukraine wrong?" />

@todo find a quote to replace this:
I was struck by Konstanin's comment that the west should not have been surprised by what happened given the west's phoney social justice war. 

[Putin's speech](https://www.msn.com/en-in/news/world/full-text-of-vladimir-putins-speech-announcing-special-military-operation-in-ukraine/ar-AAUftE2)

## I wouldn't start from here!

This is the infamous standard response to "how to I get to xxx" which seems to apply in spades to this depressing situation. Although I don't agree with all of the following talk by John Mearsheimer, there is a good case to believe that the West could and should have done things differently:

<Figure 
    type="youtube"
    source="https://www.youtube.com/embed/JrMiSQAGOS4"
    caption="Why is Ukraine the West's Fault? Featuring John Mearsheimer"/>

Mearsheimer concludes that the West should have done everything it could since the fall of the Soviet Union to support Ukraine as a **neutral** state buffering Russia from NATO and Europe. 

I suspect Kisin would disagree which much of this, preferring the development of a stronger leadership in the West. However, I would argue that we need to have stronger leaders _and_ recognise our historical failures in diplomacy. Otherwise it's difficult to see how any number of sanctions will have any effect since surely Putin has already factored these in?

## Conclusions and recommendations

In the short term:

1. The UK and other western governments should not be putting soldiers on the ground in Ukraine, that would only inflame the current situation. I certainly wouldn't want my children to die in a foreign field fighting a war that could and should have been avoided.
2. Sanctions need to be extended as quickly as possible to the maximum that the West is prepared to adopt, for example denying Russia access to the SWIFT payments system, sanctioning all Russian leaders personally and closing down money laundering opportunities around the world.
3. Diplomatic efforts should be directed towards supporting the Ukraine as an independent neutral territory, with NATO membership ruled out subject to ongoing peaceful relations with Russia.

Longer term all western governments need to:

1. Ditch their infatuation with decarbonisation and commit to developing domestic energy supplies with no forms of energy being off the table in the short to medium term. 
2. In parallel transition to nuclear for our future needs. Although this will take a number of years to initiate, setting the policy direction clearly and loudly now will alert Putin that the West is no longer prepared to be held hostage over energy. The Russian economy is not very strong with energy being its primary export.
3. Invest in critical industries and infrastructure reducing reliance on foreign imports, particularly from dangerous regimes. Defense manufacturing, steel production, transport and utilities should be prioritised.
4. Invest in military capability, increasing the quantity and quality of equipment and troops. It would be nice to think that we could reap the peace dividend following the end of the Cold War but recent events should have proven beyond doubt that such thinking was mistaken and dangerous. 
5. Stop the promulgation of woke ideology from education, media and public bodies.

The last of these may actually prove the hardest to deliver, but in the long term there will be no future for a Western civilisation at war with its own history and culture. 

@todo long march of the left














## References and further reading

1. Wikipedia History of Ukraine https://en.wikipedia.org/wiki/History_of_Ukraine

