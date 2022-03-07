---
title: The Crisis in Ukraine
date: 2022-03-07
summary: Laying out the historical events leading to the current invasion of Ukraine by Russia and what we should do next
image: /images/joel-in-t-veld-KC8SKA9rUDA-unsplash-thumb.jpg
imageCredit: Photo by <a href="https://unsplash.com/@photographer_in_wheelchair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joël in 't Veld</a> on <a href="https://unsplash.com/s/photos/war?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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

As we watch the horrific events in Ukraine I am reminded again that my grasp of  history is lacking, hence this post which lays out the key events in the development of Ukraine. I have relied heavily on Wikipedia which is not always the most reliable source of information. I am happy to be corrected in the comments below and will try to update this post to address any factual errors or omission of important events.

## Timeline and map of Europe

The following timeline from 900AD through to today clearly shows the extent of conflict in the region with multiple peoples taking control up to the point at which it became an autonomous state in 1991 after the collapse of the Berlin Wall in 1989. As usual with these charts you can select the events to view a summary or click the **Explore** button to analyse in more detail.

<Timeline 
    data={history}
    settings={{
        readonly:true
    }}
/>

If you look at the map of Europe it's easy to understand why this region has struggled to gain an independent identity, being the major territory buffering Russia from the West.

<Figure 
    type="googlemap"
    source="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11031962.477847895!2d14.214590048002387!3d47.54151224677918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1646056947312!5m2!1sen!2suk"
    caption="Map of Europe, courtesy Google Maps"/>

## Geopolitical context

I completely disagree with the action that Putin has taken. There can be no excuse for invading a sovereign nation, destroying property, killing soldiers, civilians (including children) and driving a mass exodus.

That said we must look at the historical context to understand whether the West could have done something different to anticipate and avoid this crisis. Saying "Putin is Hitler" gets us nowhere. This doesn't mean that we have a lot of time for navel gazing just now, but assuming we do emerge from this crisis there needs to be a profound reassessment to avoid this happening again. This will require a degree of introspection and honesty from our elected leaders and mainstream media which has been notably absent so far.

I'll start by relaying some feedback from a friend of mine who was a member of the UK Territorial Army in the late 70's and 80's.

> Our role was in support of NATO in case we faced the Soviet Union. We had quite a few briefings on Soviet tactics and thinking. What was their motivation? What are their objectives? Why do they act as they do? etc. The opening question to the class was to the effect "When were the British Isles last invaded by an enemy which brutalised the entire country?" Hands went up - 1066? The next question was the same but for the Russia and other countries in the region. 1940s, 1812 were the only two answers. The lecturer then reeled off a list from 100s going back to Genghis Khan. How many British soldiers were killed during WW2 in all areas? ~450,000 in 6 years. The Soviets lost that many in the last 6 weeks of the war. Similar story for civilian deaths. The lecturer's point was that Soviet thinking is moulded by more than 1000 years of being brutalised by foreign invaders.  And that does not include the home grown leaders who could be just as brutal. Russian experience of being invaded and brutalised on mega scales is still in living memory. The very much more extreme and recent experiences have created perceptions of threat and motivations that are very different to those in the west.

And what about when we _defeated_ the Soviet Union?

> The Soviet Union collapsed financially because Reagan outspent them militarily. What did NATO do? Perhaps arrange a treaty with Russia to agree that all ex-Soviet satellites were independent states and that neither side would meddle in their internal affairs? We did the opposite. We effectively gave Russia a kicking when it was down. We and the US took over the eastern block countries militarily and politically. We moved the Russian safety zone from what was then known as the IGB Inner German Border eastwards to the Black Sea. The only eastern block country we did not take over in fairly short order was the Ukraine - we have been trying to ever since.

There is a lot of information online providing more detail and I'll mention a couple I came across during my research. 

[John Mearsheimer](https://www.mearsheimer.com) is the R. Wendell Harrison Distinguished Service Professor in the Political Science Department at the University of Chicago, where he has taught since 1982. In an article for the International New York Times in 2014 [Getting Ukraine Wrong](https://www.mearsheimer.com/wp-content/uploads/2019/06/Getting-Ukraine-Wrong.pdf) he began by saying:

> President Obama has decided to get tough with Russia by imposing sanctions and increasing support for Ukraine’s new government. This is a big mistake. This response is based on the same faulty logic that helped precipitate the crisis. Instead of resolving the dispute, it will lead to more trouble.

In a 2015 lecture on the Ukraine crisis at the University of Chicago’s Uncommon Core he discussed the background to the Ukraine crisis, the prevailing wisdom, and his views on what should have been done at that time:

<Figure 
    type="youtube"
    source="https://www.youtube.com/embed/JrMiSQAGOS4"
    caption="Why is Ukraine the West's Fault? Featuring John Mearsheimer"/>

Mearsheimer concludes that the West should have done everything it could since the fall of the Soviet Union to support Ukraine as a **neutral** state buffering Russia from NATO and Europe. 

Another friend sent me a link to a recent article by Tim Black [The Peace that Could have Been](https://www.spiked-online.com/2022/02/26/the-peace-that-could-have-been/). Tim is a columnist at [Spiked](https://www.spiked-online.com) and many other publications including the EU Observer, the Australian, the Independent and La Republica. In his article, which covers similar ground to that discussed earlier, he says:

> But, as it turned out, Western powers, especially the US, didn’t really care how this New World Order looked to Russia. Old members of the Soviet alliance, Hungary, Poland and the Czech Republic, joined NATO in 1997, with Clinton insisting simply, that ‘It is the right thing to do’. Under George W Bush, the US continued to use NATO to fashion a Europe almost directly defined against Russia. Putin’s half-baked appeals for Russia’s own membership were repeatedly met with blank looks, while the Baltic states Lithuania, Latvia and Estonia became NATO members in 2004. And in 2009, Croatia and Albania were also admitted. As Putin remarked in a famous speech in Munich in 2007, ‘We have the right to ask: against whom is this expansion intended?’. He knew the answer. And with each expansionist move, each shifting of a militarised border ever closer to Russia, so the ground for today’s conflict in Ukraine was being laid.

## The West's failed energy policy 

I have been arguing for many years that the West's drive to _carbon neutrality_, with the demonising of cheap fossil fuels in favour of unreliable renewable sources, was going to come at a major cost. This included significant geopolitical risk since our main competitors to the east have shown no indication that they would follow us down this route. Therefore the West has become ever more dependent on imported sources of energy whilst at the same time providing much needed foreign capital to the likes of Russia and China. Michael Shellenburger covered this recently in [The West’s Green Delusions Empowered Putin](https://bariweiss.substack.com/p/the-wests-green-delusions-empowered).

> Putin knows that Europe produces 3.6 million barrels of oil a day but uses 15 million barrels of oil a day. Putin knows that Europe produces 230 billion cubic meters of natural gas a year but uses 560 billion cubic meters. He knows that Europe uses 950 million tons of coal a year but produces half that.<br><br>The former KGB agent knows Russia produces 11 million barrels of oil per day but only uses 3.4 million. He knows Russia now produces over 700 billion cubic meters of gas a year but only uses around 400 billion. Russia mines 800 million tons of coal each year but uses 300.<br><br>That’s how Russia ends up supplying about 20 percent of Europe’s oil, 40 percent of its gas, and 20 percent of its coal.<br><br>The math is simple. A child could do it.

Indeed. Yet our elected politicians, supposedly the guardians of our future neglected these basic facts along with other inconvenient factors, such as the propensity of renewable energy to be expensive and intermittent. I.e. it is completely unsuited to providing the baseload power that modern economies rely upon. Now as energy prices rise precipitously, the poorest in society are having to decide between [eating or heating their homes](https://yougov.co.uk/topics/politics/articles-reports/2022/01/26/more-third-britons-cannot-afford-heat-their-home-c).

## The need for strong leadership

Putin is one of the one richest people in the world through his control of previously state-controlled monopolies, now run by his cronies who shelter his _take_ on his behalf. For many years governments around the world have chosen not to see what has been going on, preferring instead to develop business interests in Russia, including allowing money laundering via property investment in cities such as London. 

He is also a strong leader compared to his counterparts in Europe and the US. This is partly explained by the nature (lack) of democracy in the former Soviet Union and now completely entrenched by Putin's political manoeuverings over the last 20 plus years. However, not only doesn't he have to answer to his electorate (at least not so far) but he also has a clear idea of what makes Russia unique and important in the world. 

Contrast this with weak unpopular leaders in the West, mired in petty scandals, pushing policies that by design or accident, are handing strategic power to Russia. Energy policy is the main symptom of this malaise as a result of efforts to de-carbonise our economies at any cost. Whilst Russia has built up its military forces, the west (particularly Europe), has reduced military spending and gone on a crusade to improve sustainability, diversity and inclusion in what remains of our fighting forces.

## The end to the social justice war

Perhaps a small benefit of the crisis is that the social justice war will be seen for what it is - a dangerous distraction symptomatic of a decedent West that is ashamed of its own history and culture. It's long overdue that we pushed back against this nonsense and realised that in the real world more pronouns won't help on the battlefield.

Over the last 15 years or so I have found it increasingly difficult to follow the mainstream media which, in the UK and US at least, seems to have adopted what can be only be described as a left wing/liberal bias with less and less effort to provide an honest factual account of events. Worse still, when an organisation like the BBC wants to close off debate it simply does not cover an event, such as a large anti-mandate rally or pro-Brexit protest. Or if it does, it labels protestors as anti-vax, extreme right-wing and/or racist. It is therefore not surprising that traditional media is dying a slow death while alternative media is becoming the norm - we'll do our own fact checking thank you very much.

As Marc Sidwell discusses in [The Long March: How the left won the culture war and what to do about it](https://www.amazon.co.uk/Long-March-left-culture-about-ebook/dp/B08DJ7ZH92) it isn't just the media but the entirety of our public institutions including schools and universities that have succumbed to this bias. The implication is that it will take a generation to reverse this process even if we have the appetite to do so.

Speaking of alternative media, I have been following an excellent podcast called [Triggernometry](https://www.triggerpod.co.uk) since it began a few years ago. It is hosted by comedians Konstantin Kisin and Francis Foster who in their own words:

> ...create fun-but-serious conversations with fascinating guests, including former Presidential advisors and political experts, leading economists, psychologists, journalists, social and cultural commentators, YouTubers and others. We give our guests a chance to say what they think and explain why.

In a recent podcast they cover "The Truth About the War in Ukraine" which is informed by Kisin's deep knowledge of the Ukraine (many of his family still live there):

<Figure
    type="youtube"
    source="https://www.youtube.com/embed/dNnq8gMAE-8"
    caption="The Truth About the War in Ukraine" />

He begins by covering the historical context and makes reference to [Putin's recent speech](https://www.msn.com/en-in/news/world/full-text-of-vladimir-putins-speech-announcing-special-military-operation-in-ukraine/ar-AAUftE2) justifying his actions (I hope the link I found provides an accurate translation - please let me know if not). 

The _culture war_ and our distraction with _identity politics_ seem to be taking us in a direction where we are ashamed of our history and culture, whilst closing down free speech and debate. Kisin reiterates the point that we need to decide what sort of country we want and whether we are prepared to fight for our culture and way of life? The small possibility for optimism is that more people will have realised where our priorities should be, given this stark reminder of harsh geopolitical reality.

## Are strong leadership and pragmatic politics compatible?

I have presented what might appear to be contradictory viewpoints:

1. Adopting pragmatic attitudes to Russia recognising its troubled history and different political ideology
2. Developing and promoting our own culture, values and borders through strong leadership

Could the west (NATO and the European Union) have promoted western values (assuming we can agree what they are) whilst maintaining Ukraine and other eastern european countries as strong allies? Allies with whom we extend every cooperation apart from formal membership of NATO and the EU unless and until Russia joins the fold of democratic nations?

Likewise, could we staunchly defend our own borders and put in place clear and unambiguous contingencies in the event of a future crisis such as this? Could we achieve unanimous commitment within NATO to planning and action, supported by guaranteed minimum defense spending?

## Conclusions

I hope I have shown that there is a real need to understand and learn from the historical context to this crisis. In particular there is a need for much stronger leadership in the West.

In terms of what we can do in the short term:

1. The UK and other western governments should not be putting soldiers on the ground in Ukraine, that would only inflame the current situation. I certainly wouldn't want my children to die in a foreign field fighting a war that could and should have been avoided.
2. Sanctions need to be extended as quickly as possible to the maximum that the West is prepared to adopt (the recent move on SWIFT payments was a good step), sanctioning all Russian leaders personally and closing down money laundering opportunities around the world.
3. Diplomatic efforts should be directed towards supporting the Ukraine as an independent neutral territory, with NATO and EU membership ruled out subject to ongoing peaceful relations with Russia.

Longer term all western governments need to:

1. Ditch their infatuation with decarbonisation and commit to developing domestic energy supplies with no forms of energy being off the table in the short to medium term. 
2. In parallel, transition to nuclear for our future clean energy needs. Although this will take a number of years, setting the policy direction clearly and loudly now will alert Putin that the West is no longer prepared to be held hostage over energy. The Russian economy is not very strong with energy being its primary export.
3. Invest in critical industries and infrastructure, reducing reliance on foreign imports, particularly from dangerous regimes. Defense manufacturing, steel production, transport and utilities should be prioritised.
4. Invest in military capability, increasing the quantity and quality of equipment and troops.
5. Stop the promulgation of woke ideology in education, media and public bodies, i.e. push back against _the culture war_ and _identity politics_, guarant free speech and open debate. After all, if we want the west to succeed surely it is counter-productive to close down debate in the way that Russia and China do?

**The last of these may actually prove the hardest to deliver, but in the long term there will be no future for Western democracy at war with its own history and culture, retaining power by setting its population against each other.**

## References and further reading

1. Wikipedia History of Ukraine https://en.wikipedia.org/wiki/History_of_Ukraine
2. John Mearsheimer, Getting Ukraine Wrong, New York International New York Times, 2014, https://www.mearsheimer.com/wp-content/uploads/2019/06/Getting-Ukraine-Wrong.pdf
3. Tim Black, The Peace that Could have Been, Spiked, 28th Feb 2022, https://www.spiked-online.com/2022/02/26/the-peace-that-could-have-been/
4. Marc Sidwell, The Long March: How the left won the culture war and what to do about it, 22nd July 2020, https://www.amazon.co.uk/Long-March-left-culture-about-ebook/dp/B08DJ7ZH92
5. Konstantin Kisin and Francis Foster, The Triggernometry Podcast, https://www.triggerpod.co.uk
6. Michael Shellenburger, The West’s Green Delusions Empowered Putin, Common Sense, 1st March 2022, https://bariweiss.substack.com/p/the-wests-green-delusions-empowered
7. Isabelle Kirk, More than a third of Britons cannot afford to heat their home to a comfortable level, YouGov, 26th Jan 2022



