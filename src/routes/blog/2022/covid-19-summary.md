---
title: How deadly was COVID-19?
summary: Now that serious illness and death are falling off dramatically we can review just how bad things really got.
image: /images/rephile-water-cuqp2Jzz_lY-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@revolution_in_filtration?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">RephiLe water</a> on <a href="https://unsplash.com/s/photos/laboratory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: 
  - draft
  - covid-19
history:
  - 2022-03-09 § ***DRAFT***
---

<script context="module">
    import Utils from "$lib/Utils.js"
    export const load = async ({ fetch }) => {
        return {
            props: {
                covid19a: await Utils.fetchDataset( fetch, 'COVID-19a'), 
                covid19b: await Utils.fetchDataset( fetch, 'COVID-19b'), 
                covid19c: await Utils.fetchDataset( fetch, 'COVID-19c'),
                covid19policy: await Utils.fetchDataset( fetch, 'COVID-deaths-and-restrictions')
            }
        }
    }
</script>



<script>
    import Timeline from '$lib/Timeline/Timeline.svelte'
    import Figure from "$lib/components/Figure.svelte"
    import Table from "$lib/components/Table.svelte"

    export let covid19a
    export let covid19b
    export let covid19c
    export let covid19policy

    const excessDeathsTable = {
      rows : [
        [ 'Period',  'Age 0-64', 'Age 65+', 'Total'],
        [ '2020',    '1,549',    '7,851',   '9,400'],
        [ '2021 Q1', '1,560',    '4,923',   '6,483'],
        [ '2021 Q2', '153',      '193',     '346'],
        [ '2021 Q3', '512',    '630',     '1,142'],
        [ 'Totals',  '3,774',	   '13,597',  '17,371']   
      ],
      rowFormats : ['th', 'td', 'td', 'td','td','th'],
      colTextAligns : ['left', 'right', 'right', 'right']
    }
</script>


## Introduction

Now that the COVID-19 pandemic is over with the latest wave of the OMICRON variant it is time to review what happened in terms of its impacts and whether government policies to lock down the population were appropriate.

I will use official UK government data from the [UK Office of National Statistics](https://www.ons.gov.uk/) throughout, concentrating on data for England and Wales.

## Total deaths in England and Wales

The following chart sourced from the [UK Office of National Statistics - Deaths Registered Weekly](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/deathsregisteredweeklyinenglandandwalesprovisional/weekending25february2022) shows the weekly registered deaths since the the start of the pandemic in 2020, including those involving and not involving COVID-19. The five-year average line is overlaid showing the excess deaths over what might be expected.

<Figure type="img" source="/images/ONS-deaths-25-Feb-2022.png" caption="Source: Office for National Statistics – Deaths registered weekly in England and Wales"/>

It is clear that weekly deaths greatly exceeded the 5-year average at the start of the pandemic and then agin in the second wave in 2021. However, since the second wave the number of excess deaths seems to be much more in line with the 5-year average, dropping significantly below in the most recent months.

For context lets look at [weekly deaths from 2018 till Feb 2022](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales):

<Timeline
    data={covid19a}
    settings={{
        readonly: true
    }}/>

We notice a number of things from this chart:

1. The impact of COVID stands out clearly (more later on this).
2. The peaks for the two large waves in 2020 and 2021 have a different characteristic, the former showing both COVID related and _normal_ deaths increasing, whilst the second peak shows COVID-related deaths _replacing_ deaths due to other causes. It is somewhat surprising that the COVID related deaths follow a similar trend and peak in both cases.
3. Over this longer time period it can be seen that prior to the pandemic the 5-year average death rate was a good predictor of future years, with small deviations in both directions.
4. Total deaths in January 2018 were higher than in January 2022, which is consistent with deaths now being lower than the 5-year average.

To make the last point clearer, the following chart shows the excess deaths over the same time period:

<Timeline
    data={covid19b}
    settings={{
        readonly: true
    }}/>

Now we will look at some very interesting data that came out of a [Freedom of Information request](https://www.ons.gov.uk/aboutus/transparencyandgovernance/freedomofinformationfoi/covid19alonewithnounderlininghealthissuesnovemeber2019todecember2021) in January 2022 where the question asked was:

> Please supply how many people have died from COVID-19 alone with no underlining health issues, from November 2019 to December 2021.

The answer to this request was the following data (broken down into two age categories):

<Table 
  caption="Deaths in England and Wales due to COVID with NO other underlying causes"
  data={excessDeathsTable} />

The data highlights how COVID predominantly targets older people and we know that the average age of death with COVID is over 80 years old (slightly lower for men and slightly higher for women). However, notice that the differential has much reduced by the summer of 2021. This might be explained by a number of factors:

1. Unfortunately many older, more susceptible, people passed away in the first wave, exacerbated by moving older patients out of hospitals into care homes.
2. @todo The impact of vaccination on older people who hadn't already acquired natural immunity and presumably the benefit of natural immunity for the rest.
3. Differences between the severity of the initial variant and the delta variant.

Displaying this data as a chart we see the following:

<Figure type="img" source="/images/ONS-FOI-chart.png" caption="Source: Office for National Statistics – Deaths with no other underlying causes"/>

If you aren't shocked by this data you should be. I calculated the cumulative total for deaths with COVID in the same period to be 146,365. Comparing this to the total of 17,371 without underlying causes we see that it is only 12%. The proportion is even smaller when comparing to the total number of deaths over the same period (1,051,085), coming to 1.65%.

To emphasise this point the following chart displays the number of deaths registered as with-COVID against the theoretical number of deaths that might have ocurred if we multiply these by the COVID-only percentage of 12% calculated above:

<Timeline
    data={covid19c}
    settings={{
        readonly: true,
        xRange: {
          start: 2020,
          end: 2022
        }
    }}/>


This means that for otherwise healthy people with no underlying health conditions such as obesity, diabetes, etc, the risk of dying due to COVID alone is extremely small. I find it hard to overstate the importance of this result since the ramifications for health policy should be obvious and I will go through them later. If you have seen a graph and discussion like this in the main stream media or presented by government advisors please let me know.

## Timeline of UK COVID restrictions

<Timeline
    data={covid19policy}
    settings={{
        readonly: true,
        xRange: {
          start: 2020,
          end: 2022
        }
    }}/>


## Impact of lockdowns


## Impact of vaccines


### Efficacy


## Alternative therapies


## Natural immunity


## The costs of lockdowns


## Conclusions


## References and further reading

1. UK Office of National Statistics, https://www.ons.gov.uk/
2. England and Wales Weekly Deaths, https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales
3. COVID-19 alone with no underlining health issues November 2019 to December 2021, ONS, 18th Jan 2022, https://www.ons.gov.uk/aboutus/transparencyandgovernance/freedomofinformationfoi/covid19alonewithnounderlininghealthissuesnovemeber2019todecember2021
4. Timeline of UK government coronavirus lockdowns and measures, March 2020 to December 2021, Institute for Government analysis, https://www.instituteforgovernment.org.uk/sites/default/files/timeline-coronavirus-lockdown-december-2021.pdf
5. COVID-19 pandemic in the United Kingdom, https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_United_Kingdom
6. Timeline of the COVID-19 pandemic in the United Kingdom (January–June 2020), https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_the_United_Kingdom_(January–June_2020)
7. Timeline of the COVID-19 pandemic in the United Kingdom (July–December 2020), https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_the_United_Kingdom_(July–December_2020)
8. Timeline of the COVID-19 pandemic in the United Kingdom (January–June 2021), https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_the_United_Kingdom_(January–June_2021)
9. Timeline of the COVID-19 pandemic in the United Kingdom (July–December 2021), https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_the_United_Kingdom_(July–December_2021)
10. Timeline of the COVID-19 pandemic in the United Kingdom (January–June 2022), https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_the_United_Kingdom_(January–June_2022)


https://phmpt.org/pfizers-documents/

https://news.sky.com/story/covid-19-expert-claims-he-was-told-to-correct-his-views-after-criticising-implausible-graph-shown-during-official-briefing-12555800

