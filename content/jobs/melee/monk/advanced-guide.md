---
title: Monk Advanced Guide
card_header_image: /img/jobs/mnk/advanced.png
authors:
  - nyanpyon
patch: "6.3"
lastmod: 2023-03-06T14:29:47.038Z
changelog:
  - date: 2021-11-15T21:07:56.881Z
    message: Added page
  - date: 2022-04-23T16:13:41.661Z
    message: Moved everything from the Basic guide that needs to be here.
  - date: 2023-03-06T14:29:48.655Z
    message: Added Macromania.
  - date: 2023-06-11T15:12:35.402Z
    message: Updated Macromania section. Added The Nuclear Option and adjusted
      Mouseover Macroed GCDs section.
---
# Advanced Monk - Out of the Ballpit

- - -

You have made it out of the ballpit and you know about the standard Monk rotation, as well as its Openers and Burst Windows. In the following section we will introduce knowledge that will help answer some questions about why the standard rotation is standard, and in more advanced fashion, why other considerations are not standard. As well as basic understanding of game mechanics, spreadsheet territory targeting single digit gains and in traditional fashion, cursed knowledge.

## Busting Your Balls

Breaking out of common Nadi pathing In the following section we will recap the standard rotation, discuss fundamental mechanics and why we are allowed a certain degree of flexibility, basic guidelines to optimizing Monk and the thought process of optimizing Monk for a specific fight.

### Recapping Standard Monk

The standard Monk rotation follows the following guidelines:

* Outside of Perfect Balance, Opo-opo is followed by Raptor, Raptor is followed by Coeurl, Coeurl is followed by Opo-opo.
* We use the Filler GCDs if we do not have balls, and we use the Spender GCDs if we have balls. Live by the balls, die by the balls.
* Elixir Burst and the resulting Lunar Nadi consist of a 3x Opo-opo PB sequence. Similarly Phantom Rush is also made using the Lunar sequence.
* Rising Phoenix and the resulting Solar Nadi consist of a Opo-opo, Raptor and Coeurl PB sequence.
* Brotherhood, Riddle of Fire and Riddle of Wind are used on cooldown.
* Perfect Balance and Fire’s Reply are always used after Opo-opo GCDs.
* Formless Fist is always spent on Opo-opo GCDs.
* We use 2 Masterful Blitz, Fire’s Reply and Wind’s Reply (where applicable) in BH+RoF every even  minute window.
* We use 1 Masterful Blitz, Fire’s Reply and Wind’s Reply (where applicable) in RoF every odd minute window.

If we do the Solar Lunar Opener, we arrive at the standard Monk rotation, we will never waste resources and we will never lose a Phantom Rush. The Double Lunar and Triple Lunar openers overcaps the Lunar Nadis, overcapping Nadis in the opener is considered as standard, but overcapping otherwise is not technically considered as standard as it will immediately lead to guaranteed Phantom Rush losses.

### Introducing Nadi Notation

For the following sections, we will introduce the standard Nadi rotation to help readability.

* S - **S**olar sequence, Rising Phoenix
* L - **L**unar sequence, Elixir Burst
* (L), (S), (C) - Phantom Rush executed using a **L**unar sequence (usually 3x Opo-opo), **S**olar sequence (Opo-opo, Raptor, Coeurl) or an arbitrary “**C**elestial Revolution” sequence.

As an example, the Solar Lunar path throughout a 6:30 fight will have the following sequence of Nadis.

> SL (L) SL (L) SL (L) SL

Similarly, Double Lunar and Triple Lunar followed by standard rotation.

> LL S (L)L S (L)L S (L)L

Introducing this notation will help us to quickly understand the progression through the Nadis throughout a fight, analyze the overcaps and overall uses of Phantom Rush, Elixir Burst and Rising Phoenix.

### The (in)flexibility of Phantom Rush
Elixir Burst, Rising Phoenix, Phantom Rush. To execute a Phantom Rush, we need 2 Masterful Blitz to acquire the Lunar and Solar Nadi each. This means we need 3 Perfect Balance uses to execute a single Phantom Rush. In standard Solar Lunar opener fashion, we use 2 PBs in our opener, the 3rd PB will be available for use at around 41 seconds into combat. If used, the earliest possible time the PR can be executed is at around 50 seconds, and then every 120 seconds after. Usually we would delay this use of this PB such that the Phantom Rush will hit into the 1 minute Riddle of Fire.

The amount of total Perfect Balance we gain in a fight is limited. In a more organized or optimized setting, a rough or even accurate kill time can be estimated, as such we also know the amount of PBs that we can get given a kill time. This knowledge is incredibly important, it allows us to plan our PBs and the Nadi we gain ahead of the fight. However, very often this flexibility comes with limitations and also some questions—can we deviate from the standard Solar Lunar path for a more optimal Nadi path which always puts Phantom Rush into buffs without losing a Phantom Rush? And at what point is it worth it to lose a Phantom Rush for the benefit of them always being in buffs? To answer both of these questions, we will first see an example of the effect of Nadi overcapping in a ~3:20 dummy example. In 3:20 we are allowed the use of 6 PBs, the standard path will look as follows.

> SL (L) SL (L)

We now use the Double Lunar opener to achieve a Lunar Nadi overcap in the opener and observe what happens to the Phantom Rush.

> LL S (L)L S

The Phantom Rush gets pushed back by 1 PB, this places PR in buffs, but also pushes the last PR past our kill time, resulting in a loss of one. Having observed this effect, the extra PR is always gained at around x:50, where x is an even number. The next blitz is gained 40 seconds later, this exact window from x:50 to around (x+1):28 is then the PR gaining window if we follow the standard Solar Lunar Opener path. Directly from this follows that the Solar Lunar opener is the **PR maximizing** path, as it always gains the maximum number of PRs.

The natural conclusion is that if we do not know the kill time, or we know the kill is within the PR gaining window (x:50 to (x+1):28 where x is odd), then the PR maximizing opener (Solar Lunar) will always net us the maximum possible number of Phantom Rush. With a kill time in the PR gaining window, this will also net us the most personal DPS if buffs other than Brotherhood are disregarded.

If the kill time is not within the PR gaining window, then we are allowed to overcap our Nadi and push our Phantom Rush back and into 2 minutes. Our 2 minutes have the added benefit of our own personal buff Brotherhood, other party buffs and sometimes Gemdraughts. This means that our stronger Blitz Phantom Rush will receive the benefits of these damage increasing multipliers at the cost of a weaker Blitz. If this does not cost us a Phantom Rush use overall, then this is an increase to both personal and overall party DPS.

The question is now, at what point is the increase to personal or overall party DPS big enough to make up for the loss of a Phantom Rush overall. For personal DPS, this question will never depend on your party composition; the extra 5% buff from Brotherhood and occasional Gemdraught (~8%) to Phantom Rush is a fairly small gain that will need to make up an entire extra Phantom Rush that we would lose. Ignoring all other variables, this happens at a very unrealistic kill time that is over 16 minutes long. If playing for party DPS, then putting Phantom Rush in buffs at the loss of one overall becomes a gain much sooner, although a clear answer to this does not exist, as it will depend on the amount of buffs your party brings. In a maximum buff comp (eg. AST, SCH, NIN, BRD, PCT), Double Lunar pulls ahead of Solar Lunar at ~7:28, even at a loss of a PR. With no party buffs, other than yourself, the gains are the same as just playing for personal DPS. Very often, playing Phantom Rush into buffs even if it comes at a slight personal loss will end up feeding buffs, which can be important for other jobs to parse successfully and will keep your party happy.


### The Monkey Gazes Upon the Lunatic Landscapes
If we are granted Formless Fist, we use it on Opo-opo. Our Elixir Burst is built using Opo-opo. Our Phantom Rush is built using Opo-opo. Our second Blitz in 2 minutes is always Lunar. Our Nadi overcapping method of choice is to overcap using Elixir Burst, which is built using Opo-opo. But why are we so obsessed with Opo-opo and why is Lunar our strongest sequence at level 100? In this Section we will talk about why Opo-opo is our strongest Form, why we will always aim to maximize the number of Lunar sequences as much as possible, and how the placement of Lunar sequences affects DPS. 

Leaping Opo is our strongest GCD as it always crits and Dragon Kick is our weakest GCD—Opo-opo Form being the strongest GCDs is not immediately obvious. The average of just the potencies alone disregarding the auto-crit on Leaping Opo makes Opo-opo GCDs the weakest and Coeurl GCDs the strongest on average. If we now include a 25% critical hit rate, which comes with 60% increased damage on crits, this will make Opo-opo GCDs equal to Raptor, with Coeurl being slightly stronger on average. Finally, the fact that makes Opo-opo stronger than Raptor on average is our trait Deep Meditation II, the trait that grants us a guaranteed Chakra on every critical hit we land with a Weaponskill. A Chakra is valued at 80 potency, with this value being obtained by dividing the total potency of a single Forbidden Chakra cast by the number of Chakra stacks needed to cast it. Below is a table showing the average potency in a comparable format: at raw potency, factoring in Leaping Opo auto-crit and lastly the chakra-adjusted average at 25% critical hit rate and 60% critical damage (3200 crit).


