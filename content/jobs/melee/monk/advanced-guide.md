---
title: Advanced Guide
card_header_image: /img/jobs/mnk/advanced.png
authors:
  - nyanpyon
patch: "7.4"
lastmod: 2025-12-26T23:47:26.662Z
changelog:
  - date: 2024-11-26T03:37:01.717Z
    message: Added first part of advanced guide
  - date: 2025-01-16T01:14:18.751Z
    message: Corrected math (nothing else changed) and formatting.
---
# **Advanced Monk - Out of the Ballpit**

- - -

You have made it out of the ballpit and you know about the standard Monk rotation, as well as its Openers and Burst Windows. In the following section we will introduce knowledge that will help answer some questions about why the standard rotation is standard, and in more advanced fashion, why other considerations are not standard. As well as basic understanding of game mechanics, spreadsheet territory targeting single digit gains and in traditional fashion, cursed knowledge.

# Busting Your Balls

In the following section we will recap the standard rotation, breaking out of common Nadi pathing, discuss fundamental mechanics and why we are allowed a certain degree of flexibility, basic guidelines to optimizing Monk and the thought process of optimizing Monk for a specific fight.

## Recapping Standard Monk

The standard Monk rotation follows the following guidelines:

* Outside of Perfect Balance, Opo-opo is followed by Raptor, Raptor is followed by Coeurl, Coeurl is followed by Opo-opo.
* We use the Filler GCDs if we do not have balls, and we use the Spender GCDs if we have balls. Live by the balls, die by the balls.
* Elixir Burst and the resulting Lunar Nadi consist of a 3x Opo-opo PB sequence. Similarly Phantom Rush is also made using the Lunar sequence.
* Rising Phoenix and the resulting Solar Nadi consist of a Opo-opo, Raptor and Coeurl PB sequence.
* Brotherhood, Riddle of Fire and Riddle of Wind are used on cooldown.
* Perfect Balance and Fire’s Reply are always used after Opo-opo GCDs.
* Formless Fist is always spent on Opo-opo GCDs.
* We use 2 Masterful Blitz, Fire’s Reply and Wind’s Reply (where applicable) in BH+RoF every even minute window.
* We use 1 Masterful Blitz, Fire’s Reply and Wind’s Reply (where applicable) in RoF every odd minute window.

If we do the Solar Lunar Opener, we arrive at the standard Monk rotation, we will never waste resources and we will never lose a Phantom Rush. The Double Lunar and Triple Lunar openers overcaps the Lunar Nadis, overcapping Nadis in the opener is considered as standard, but overcapping otherwise is not technically considered as standard as it will immediately lead to guaranteed Phantom Rush losses.

## Introducing Nadi Notation

For the following sections, we will introduce the standard Nadi rotation to help readability.

* S - **S**olar sequence, Rising Phoenix
* L - **L**unar sequence, Elixir Burst
* (L), (S), (C) - Phantom Rush executed using a **L**unar sequence (usually 3x Opo-opo), **S**olar sequence (Opo-opo, Raptor, Coeurl) or an arbitrary “**C**elestial Revolution” sequence.

As an example, the Solar Lunar path throughout a 6:30 fight will have the following sequence of Nadis.

> SL (L) SL (L) SL (L) SL

Similarly, Double Lunar and Triple Lunar followed by standard rotation.

> LL S (L)L S (L)L S (L)L

Introducing this notation will help us to quickly understand the progression through the Nadis throughout a fight, analyze the overcaps and overall uses of Phantom Rush, Elixir Burst and Rising Phoenix.

## The (in)flexibility of Phantom Rush

Elixir Burst, Rising Phoenix, Phantom Rush. To execute a Phantom Rush, we need 2 Masterful Blitz to acquire the Lunar and Solar Nadi each. This means we need 3 Perfect Balance uses to execute a single Phantom Rush. In standard Solar Lunar opener fashion, we use 2 PBs in our opener, the 3rd PB will be available for use at around 41 seconds into combat. If used, the earliest possible time the PR can be executed is at around 50 seconds, and then every 120 seconds after. Usually we would delay this use of this PB such that the Phantom Rush will hit into the 1 minute Riddle of Fire.

The amount of total Perfect Balance we gain in a fight is limited. In a more organized or optimized setting, a rough or even accurate kill time can be estimated, as such we also know the amount of PBs that we can get given a kill time. This knowledge is incredibly important, it allows us to plan our PBs and the Nadi we gain ahead of the fight. However, very often this flexibility comes with limitations and also some questions—can we deviate from the standard Solar Lunar path for a more optimal Nadi path which always puts Phantom Rush into buffs without losing a Phantom Rush? And at what point is it worth it to lose a Phantom Rush for the benefit of them always being in buffs? To answer both of these questions, we will first see an example of the effect of Nadi overcapping in a ~3:20 dummy example. In 3:20 we are allowed the use of 6 PBs, the standard path will look as follows.

> SL (L) SL (L)

We now use the Double Lunar opener to achieve a Lunar Nadi overcap in the opener and observe what happens to the Phantom Rush.

> LL S (L)L S

The Phantom Rush gets pushed back by 1 PB, this places PR in buffs, but also pushes the last PR past our kill time, resulting in a loss of one. Having observed this effect, without overcapping a nadi, the extra PR is always gained at around x:50, where x is an even number. The next blitz is gained 40 seconds later, this exact window from x:50 to around (x+1):28 is then the PR gaining window if we follow the standard Solar Lunar Opener path. Directly from this follows that the Solar Lunar opener is the **PR maximizing** path, as it always gains the maximum number of PRs.

The natural conclusion is that if we do not know the kill time, or we know the kill is within the PR gaining window (x:50 to (x+1):28 where x is even), then the PR maximizing opener (Solar Lunar) will always net us the maximum possible number of Phantom Rush. With a kill time in the PR gaining window, this will also net us the most personal DPS if buffs other than Brotherhood are disregarded.

If the kill time is not within the PR gaining window, then we are allowed to overcap our Nadi and push our Phantom Rush back and into 2 minutes. Our 2 minutes have the added benefit of our own personal buff Brotherhood, other party buffs and sometimes Gemdraughts. This means that our stronger Blitz Phantom Rush will receive the benefits of these damage increasing multipliers at the cost of a weaker Blitz. If this does not cost us a Phantom Rush use overall, then this is an increase to both personal and overall party DPS.

The question is now, at what point is the increase to personal or overall party DPS big enough to make up for the loss of a Phantom Rush overall. For personal DPS, this question will never depend on your party composition; the extra 5% buff from Brotherhood and occasional Gemdraught (\~8%) to Phantom Rush is a fairly small gain that will need to make up an entire extra Phantom Rush that we would lose. Ignoring all other variables, this happens at a very unrealistic kill time that is over 16 minutes long. If playing for party DPS, then putting Phantom Rush in buffs at the loss of one overall becomes a gain much sooner, although a clear answer to this does not exist, as it will depend on the amount of buffs your party brings. In a maximum buff comp (eg. AST, SCH, NIN, BRD, PCT), Double Lunar pulls ahead of Solar Lunar at \~7:28, even at a loss of a PR. With no party buffs, other than yourself, the gains are the same as just playing for personal DPS. Very often, playing Phantom Rush into buffs even if it comes at a slight personal loss will end up feeding buffs, which can be important for other jobs to parse successfully and will keep your party happy.

## The Monkey Gazes Upon the Lunatic Landscapes

If we are granted Formless Fist, we use it on Opo-opo. Our Elixir Burst is built using Opo-opo. Our Phantom Rush is built using Opo-opo. Our second Blitz in 2 minutes is always Lunar. Our Nadi overcapping method of choice is to overcap using Elixir Burst, which is built using Opo-opo. But why are we so obsessed with Opo-opo and why is Lunar our strongest sequence at level 100? In this Section we will talk about why Opo-opo is our strongest Form, why we will always aim to maximize the number of Lunar sequences as much as possible, and how the placement of Lunar sequences affects DPS. 

Leaping Opo is our strongest GCD as it always crits and Dragon Kick is our weakest GCD—Opo-opo Form being the strongest GCDs is not immediately obvious. The average of just the potencies alone disregarding the auto-crit on Leaping Opo makes Opo-opo GCDs the weakest and Coeurl GCDs the strongest on average. If we now include a 25% critical hit rate, which comes with 60% increased damage on crits, this will make Opo-opo GCDs equal to Raptor, with Coeurl being slightly stronger on average. Finally, the fact that makes Opo-opo stronger than Raptor on average is our trait Deep Meditation II, the trait that grants us a guaranteed Chakra on every critical hit we land with a Weaponskill. A Chakra is valued at 80 potency, with this value being obtained by dividing the total potency of a single Forbidden Chakra cast by the number of Chakra stacks needed to cast it. Below is a table showing the average potency in a comparable format: at raw potency, factoring in Leaping Opo auto-crit and lastly the chakra-adjusted average at 25% critical hit rate and 60% critical damage (3200 crit).

| Form    | Raw Pot. (avg) | Crit Adj. Pot. | Chakra per gcd | Chakra Adj. Pot. |
| ------- | -------------- | -------------- | -------------- | ---------------- |
| Opo-opo | 390            | 552            | **0.625**      | **602**          |
| Raptor  | 480            | 552            | 0.25           | 572              |
| Coeurl  | 486.7          | **559.7**      | 0.25           | 579.7            |

&nbsp;

Opo-opo Form GCDs are by far the strongest GCDs we have on average, and as such the goal is to maximize the amount of our strongest GCD: Leaping Opo. This means that any time we are allowed to choose the placement of a Perfect Balance or Fire’s Reply, it should always be after a Opo-opo GCD, and the resulting Formless Fist should always be spent on a Opo-opo GCD. This also makes the 3x Opo-opo Lunar sequence stronger than 3x Raptor or 3x Coeurl. With Lunar sequences being entirely Opo-opo, along with Elixir Burst and Rising Phoenix being the same potency, it follows that Lunar sequences are generally stronger than Solar sequences. Because of this, we default to using Lunar sequences for any Phantom Rush sequences.

Lunar is strong, what stops us from doing just Lunar over and over? This would mean losing out on Phantom Rush, which is still a bigger loss. However, this does not stop us from doing Lunar whenever we can. If the kill time allows us to push back Phantom Rush, then the overcap of choice will always be Lunar in the effort of maximizing the amount of Opo-opo GCDs. Even if we do decide to lose a PR in favor of putting them in buffs, we are making up some of the loss by exchanging some Solar sequences by Lunar sequences, see example Nadi paths below.

> SL (L) SL (L) SL (L) SL (L)
>
> LL S (L)L S (L)L S (L)L L

In the second path, we do not stand to gain another Phantom Rush, and we can make the choice to replace the Solar by a Lunar instead. This extra Lunar can be placed anywhere, but typically we place this early in our path. This path is also known as Triple Lunar.

> LL L S(L) L S(L) L S(L) L

Typically, a Lunar Lunar burst is very long and does not fit into a single Riddle of Fire (specifically the first Lunar will always be at least partially before the Riddle of Fire). By doing Triple Lunar, we have now turned our 2 minute windows into Solar Lunar windows, and our 1 minute windows into Lunar windows. This way we can fit all the full Lunar sequences into Riddle of Fire. Solar Lunar has the added benefit that we can choose to reorder the Solar sequence GCDs from weakest to strongest as we usually do in the 1 minute window, similarly giving us a small increase in potency. 

### Somehow Even Less Standard Nadi Pathing

One added benefit of Triple Lunar is that it allows us to choose if we want our 2 minute windows to be Lunar Lunar or Solar Lunar, this is done by choosing Solar or Lunar in the odd minute window preceding the 2 minute window. Being able to choose the 2 minute windows allows us some control over the GCDs we put into buff windows. It is worth to note that while Lunar Lunar is very strong, it is too long for Riddle of Fire, but the full sequence does fit into a Gemdraught window. The following Nadi path wins against Triple Lunar in 7 seconds buffs.

> \[LL] L S(L) L S(L) S \[L(L)]

The most important takeaway of being allowed to choose Lunar or Solar in 1 minute is that we can (sometimes) exchange weaker for stronger GCDs in 2 minutes. If the GCDs would be the same in both paths (usually happens in -2 and -3 windows), then it allows us to put a Lunar Lunar into Gemdraught for a definitive gain.

## Gemdraught Placement

For opener Gemdraught placements see the Opener section. 

The objective of all Gemdraught placements is to capture the most potency within it, usually across multiple Gemdraughts used over the course of a fight rather than just a single one. Following are the general guidelines to choose our general windows, which GCDs to capture and where to weave our potion. 

Maximizing the amount of Gemdraught uses possible within a fight is optimal, as long as the full 30 second duration can be used of each potion. If it is possible to move any of the Gemdraughts without losing a use overall, then the priority should be on using them on 2 minute windows with Riddle of Fire, Brotherhood and 2 Blitzes, with one of them ideally being Phantom Rush. A scenario commonly found is 8:30 minute fights, where the possible Gemdraught uses are the opener and the 6 minute window, or the 2 minute and 8 minute window. In such cases, potting the 2 minute and 8 minute windows is usually preferred if Phantom Rush has been moved to the buff windows. 

Now that we have identified which windows have a Gemdraught use available, we can decide on the exact timing. Generally, unless the Gemdraught becomes available during the Riddle of Fire, or has constraints to be used early to accommodate the next Gemdraught, then we will be using it to cover the entire Riddle of Fire duration. Riddle of Fire being 20 seconds and the potion being 30 seconds means that we have an extra 10 seconds of time to decide where to place it. The general rule of thumb is that it is ideal that we pot right before our Ball spenders, namely Leaping Opo, Rising Raptor and Pouncing Coeurl become available. More priority should be given to the higher potency spenders and the more spenders the better.

Lastly, having identified which GCDs we will use the Gemdraught for, we have the choice of the exact weaving placement. For 1.94 and 2.00, both early weaving or late weaving will capture the same amount of GCDs, we will usually prefer to late weave. The reason is that The Forbidden Chakra can become available on our last GCD by chance, which can be captured using a late-weave Gemdraught. The only exception to this rule and when we want to early weave our Gemdraught is when The Forbidden Chakra is available in the same weave space. Capturing a guaranteed FBC is still better than having merely the chance of capturing one.

### Gemdraught Double Weaves

In the unmodified game, (most) abilities are granted a 0.5 seconds buffer every time they are pressed, this means that the game will try to use the ability on every frame for the next 0.5 seconds. As a consequence of this, abilities can be pressed when the animation lock of the previous ability is still active, and they will be used as soon as the animation lock expires, usually this is referred to as queuing. Unlike abilities, the use of items cannot be queued. If we try to use an item during animation lock, it will simply fail, this is often very annoying if we try to double weave our Gemdraught, the window where it is possible to double weave without clipping is very small (under 100ms). 

A trick that can be used to accommodate for this inconvenience is to bind the Gemdraught to multiple keybinds that can be pressed in quick succession.

![](/img/jobs/mnk/2024-11-23_03-28-14_ffxiv_dx11_dbiwdkfp8x.png)

&nbsp;

Skipping the headache of the Gemdraught weave by installing a plugin that queues it for you is a definite option, but also consider the hilarity of trying to explain to someone why you have a full numpad's worth of pot binds.

## Perfect Balance as a Resource

The Masterful Blitzes are amongst our strongest hitters, and the amount of uses is directly bound to Perfect Balance. The amount of Perfect Balance gained during a fight is limited. We are granted with 2 stacks of Perfect Balance at the start of a fight and it is often **imperative** that we spend as little time capped at 2 stacks of Perfect Balance as possible if we want to maximize its uses; every second lost at 2 stacks is a second lost towards a new Perfect Balance. In full uptime, following the standard procedure of keeping our buffs on cooldown, we will rarely run into the issue of being overcapped for long. However as downtime is introduced, this can lead to delays of our buffs and cause Perfect Balance overcaps. One solution to keep our Perfect Balance cooldown rolling is to Downtime Blitz.

### Downtime Blitz

Perfect Balance has a duration of 20 seconds, and the Masterful Blitz we are granted has to be used within 20 seconds after we complete the Perfect Balance. One important fact about PB is that even without a target, our AoE abilities can progress it, this means that we can complete our PB and gain the ability to use a Masterful Blitz in downtime. If we use our PB less than 40 seconds before downtime ends, we have 20 seconds to use 3 AoE GCDs with the 3rd being used right before PB runs out, then we are able to hold the Blitz for 20 more seconds until the boss is targetable again. Below is an example of a Downtime Blitz, the Perfect Balance is used right before overcapping about 18 seconds before downtime ends.

![](/img/jobs/mnk/downtime-blitz-example.png)

&nbsp;

## Non-Standard RoF

The standard Riddle of Fire is always used on cooldown as much as possible, this helps keep buffs aligned, and leads to the usual alternating of 2 Blitz and 1 Blitz in RoF. In a full uptime fight, this also maximizes the amount of uses and uptime of Riddle of Fire. The following section attempts to explain some of the non-standard Riddle of Fire uses.

### RoF Holds

Encounters come in various flavors and kill times. There are two very common reasons to hold Riddle of Fire: delaying the use because of downtime, and delaying the use in uptime to enable a more optimal Riddle of Fire. 

Often a fight might force downtime of various lengths, usually with the boss not being targetable. If Riddle of Fire becomes available during this downtime, delaying RoF until the boss is targetable again should be considered. This often comes at the price of needing our party to realign party buffs with us and other jobs that have a similar 1 minute cooldown. The caveat is that this delay is not always lossless, it can lose us Riddle of Fire uptime, or worse, buff uptime somewhere else, usually at the end of the fight. Discuss and consider the fight length carefully. If the delay is lossless in terms of RoF uptime, then this can enable incredibly strong windows, see following sections.

Similarly, if the fight length grants it, we can hold Riddle of Fire and even buffs to capture more potency without losing uptime of either. The most common case of this type of RoF hold is delaying the very last Odd minute Riddle of Fire to not only capture more potency, but even allow us to Double Odd Blitz.

## Double Odd Blitzing

Let us consider a fairly common kill time between 7:30 and 8:00, a very common Nadi path would look like the following.

> LL S (L)L S (L)L S (L)L S (L)

We gain our last Perfect Balance at around 7:21 if we assume our first use was at the common 0:01 and we never overcap Perfect Balance at 2 stacks. Commonly with no RoF hold we would use this Perfect Balance as it comes up and send a naked Phantom Rush before the fight ends. Adding a delay to using Riddle of Fire and the Rising Phoenix here will make it immediately obvious that similarly to our Double Blitz even minute windows, we can also Double Blitz this odd minute window.

> LL S (L)L S (L)L S (L)L _S(L)

The underscore here signifies delaying the Solar, fitting it into a delayed Riddle of Fire together with Phantom Rush.

Double Odd Blitzing can additionally also occur if there is appropriately placed downtime of about 30-40 seconds, allowing us to Double Odd Blitz an earlier window while still Double Blitzing the even buff windows. If this Double Odd Blitz window occurs in the first odd minute, then this has a very important benefit of allowing us to naturally drift buffs to Phantom Rush, example below.

> SL _(L)L (downtime)  S(L) L S(L) S L(L)

Situations enabling very beneficial Double Odd Blitz windows are very common in Ultimates.

### Triple Even Blitzing

While Double Odd Blitz is possible, with appropriately placed downtime, it is also possible to Triple Even Blitz. Triple Even Blitz is enabled by the use of a Downtime Blitz, the Perfect Balance for this needs to be used around 26-30 seconds before downtime ends. If we run in this situation, we prefer to set up our Nadi path to prepare a Rising Phoenix in downtime to lose less Opo-opo GCDs in uptime. Compared to Endwalker, due to the loss of our DoT and Disciplined Fist, our triple blitzing has become very easy and flexible, with the only loss being the absence of almost any Formless Fist use in the window, depending on the availability of Wind’s Reply.

![](/img/jobs/mnk/triple-blitz-example.png)

&nbsp;

When a Triple Even Blitz is possible, very often a Double Odd Blitz is possible right before instead. If given the choice, generally the Double Odd Blitz option will win against the Triple Even Blitz, as it is the option that loses less Formless Fists.

## Further Topics

Many more Topics are still being discussed and added over time to this page as they are being tested and verified, please check the Monk channels in the Balance Discord Server for (earlier) updates.