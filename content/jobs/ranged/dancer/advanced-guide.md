---
title: Advanced Guide
card_header_image: /img/jobs/dnc/advanced.png
authors:
  - Tomcat1408
  - Balance-DNC-Staff
patch: "7.40"
lastmod: 2025-12-16T20:27:42.326Z
changelog:
  - date: 2021-11-15T21:14:20.824Z
    message: Added page
  - date: 2022-02-04T00:03:10.192Z
    message: Updated with Io's guide.
  - date: 2022-04-02T23:53:33.130Z
    message: Updated for Endwalker
  - date: 2022-09-26T03:18:35.564Z
    message: Updated for 6.21
  - date: 2023-01-20T15:16:39.276Z
    message: Updated for 6.3
  - date: 2025-04-01T04:57:19.268Z
    message: Updated for 7.2
  - date: 2025-12-16T20:27:44.837Z
    message: Updated for 7.40
tags:
  - Dancer
  - DNC
  - FFXIV
  - Guide
  - Advanced
---
by Tomcat Frost (Faerie)

# FOREWORD

One of the biggest requests I have had is a more concise document on what people “need to know” before jumping into more difficult content. This is not meant to be a replacement for a general guide to Dancer; please see Ringabel’s extensive write-up instead, which will be linked at the end of the document in the appendix. 

This guide will be broken down into three sections: Basics, Intermediate, and Advanced. I am hopeful that even some of the more experienced players may learn something new from this document.

Let’s get to it!

* Tomcat

# Basics

This section will focus on elements that **should be understood** prior to jumping into more difficult content. 

## Weaving

There are already plenty of guides on *weaving*, and for good reason–a poor understanding of how and when to weave will likely yield a mediocre performance. A great resource is the commonly linked Balance weaving infographic, seen here: [click here](https://media.discordapp.net/attachments/598630005999796233/600432765250568262/GCD_v._3.png)

Make sure you understand which of your abilities are GCDs, and which are oGCDs. A full discussion looking at every ability in our toolkit is beyond the scope of this guide.

For Dancers, as we do not need to worry about cast bars, our GCDs will look something like this (assuming a minimum skill speed set):

![](/img/jobs/dnc/screenshot-2025-04-01-002827.png)

This means that after each GCD you use, after a forced animation lock of around \~0.7s, you will have the ability to weave two abilities before you can recast your next GCD. These will generally be Fans, but can include a large variety of other oGCD abilities. These will also, with some exceptions, usually have animation locks of \~0.7s.

Of note, initiating and finishing Dances (Standard Step, Standard Finish, Technical Step, Technical Finish) has a recast timer of 1.5s instead of 2.5s, meaning you will only have the ability to weave in one oGCD during any of these abilities without clipping.

Please make sure you understand this concept well before proceeding, as this is pivotal to the entire foundation of FFXIV’s battle system.

## Opener - Level 100

![](/img/jobs/dnc/dt_dnc_opener_full.png)

*Click [here](https://ibb.co/BP2YTk9) for a higher resolution version.*

Barring kill time shenanigans and some very niche cases, this opener is good for more or less all level 100 fights. 

A Technical first opener exists but is not worth using except in extremely niche cases. An example can be found in Ringabel’s guide linked at the end. Likewise, the use of Devilment before starting Technical Step is not recommended.

## Rotation Basics

The backbone of Dancer gameplay is conceptually fairly straightforward:

1. Technical window (discussed a few subsections below) every **two minutes**

   1. Devilment and Flourish used around the same time
2. Flourish every **one minute**
3. Outside of the above, every 30 seconds:

   2. **25 seconds** of GCDs (27.5 seconds when using Finishing Move after Flourish)
   3. **5 seconds** of Standard Step or **2.5 seconds** of Finishing Move

When the only thing available to do is press single target GCDs, use Reverse Cascade and Fountainfall procs immediately as they come up. 

## GCD Procs

GCD procs (Reverse Cascade, Fountainfall, and the AoE counterparts) last 30 seconds and generally should never be overwritten. For example, if you have a combo’d Fountain ready as well as Fountainfall ready, you would use the Fountainfall first to avoid the possibility that using Fountain might overwrite your pre-existing Fountainfall proc.

Last Dance procs from Standard Finish or Finishing Move last for 30s and need to be used before using Standard Step or Finishing Move again.

A combo’d Fountain will also last 30 seconds. Although an effort should be used not to lose it. It can be easy to drop this combo if your last GCD before Technical Step is Cascade.

## Priority System

The core of Dancer’s gameplay is based on RNG and dependent on GCD procs, Esprit generation, and Fans. As such, when multiple abilities are ready, understanding the priority system is important for optimizing damage.

**General Single Target Priority List:**

1. Last Dance if not using it would otherwise let that proc fall. Note: Procs last 30 seconds.
2. Fountainfall if not using it would otherwise let that proc fall. Note: Procs last 30 seconds.
3. Reverse Cascade if not using it would otherwise let that proc fall. Note: Procs last 30 seconds.
4. Saber Dance (if ≥ 85 esprit) - You’ll want to use Saber Dance if ≥ 85 esprit in case your Dance Partner would generate 10 esprit at the same time you could potentially be generating 5 or 10 esprit during a non-Saber Dance GCD resulting in overcapping of esprit gauge.
5. Standard Step/Finishing Move
6. Fountainfall (to allow for a combo’d Fountain to be used if it would otherwise be dropped without accidentally overriding a Silken Flow proc)
7. Combo’d Fountain if it would otherwise drop.
8. Saber Dance
9. Last Dance
10. Fountainfall
11. Reverse Cascade
12. Combo’d Fountain if you have no procs.
13. Cascade

An AoE priority list also exists, but as this is mostly irrelevant for Savage and Ultimate, it will be skipped in this guide.

## Drifting

The definition of “drifting” refers to having a cooldown up and ready to use but, for one reason or another, delaying its use. Unless intentional, this is generally frowned upon. For key abilities such as Technical Step and Devilment, forgetting to use them on cooldown every two minutes will tend to “drift” these abilities out of other players’ raid buffs and bursts–a big no-no.

## Technical Window

A Technical Window refers to the 20.5 seconds after Technical Finish is executed, during which Esprit generation is substantially increased for each other player affected by the Technical buff. This is your big damage window and where you should be dumping your resources.

The core of the burst rotation should start with Technical Step with Devilment weaved after the Technical Finish and then include the following:

*GCDs:*
Finishing Move, Tillana, Starfall Dance, Dance of the Dawn, Saber Dances, and Last Dances 

*oGCDs:*
Flourish, Fan Dance Is, Fan Dance IIIs, Fan Dance IV

Ideally this burst window should coincide with as many raid buffs as possible due to the high potency of these actions.

It is important to know how these actions interact with each other during the burst window. If you use Standard Step within the 20 seconds before using Technical Step, you can carry over the Last Dance proc that is generated from that Standard Step into the burst window provided you use it before using Finishing Move in the burst window (otherwise you’d override that Last Dance proc). Assuming you hold on to the Last Dance proc from the last Standard Step before starting Technical Step for the burst, you will only need 100 esprit either generated or brought into the burst window to reach this maximum GCD potency. Seeing as on average parties will generally generate about 115 esprit during the burst window, you can rather safely reach this capped potency even with minimal esprit carried into the burst. 

Please note: the range of Technical Finish is not global, and is limited to 30 yalms. This means that depending on the ongoing mechanics, your positioning needs to be precise enough in order to hit all seven other players.

Generally arenas for fights are not too large as to cause your buff to miss, but there are instances when mechanics require your party to be extremely spread out when you go to use tech. Ideally the party is conscious of these instances and come in a bit for buffs, but there could be instances where the party will delay their buffs for when everyone is back together.

## Pooling

“Pooling” refers to saving resources for Technical windows. This most commonly refers to saving 3-4 feathers so that they can be rapidly weaved in between GCDs while under the influence of Technical Step.

This is also where understanding weaving is important. Of the following two images, only one is executed correctly:

1.

![](/img/jobs/dnc/dncimage3.png)

2.

![](/img/jobs/dnc/screenshot-2025-04-01-002827.png)

Both are from real logs. **THE TOP IMAGE IS NOT WHAT WE MEAN BY POOLING AND IS NOT WHAT YOU SHOULD DO DUE TO INCORRECT WEAVING**. The bottom image is more correct, with pooled feathers slowly being dumped between GCDs.

## Potions/Gemdraughts

Couple of things to note about potions–as an item, they cannot be macroed. At high quality, they have a cooldown of 4 minutes 30 seconds. During the opener we pot at -1.5 seconds to catch our Standard Finish at -.5 that opens the fight. For all bursts outside of the opener you can use the potion either in the second weave window before starting Technical Step, or in between the 4th step of Technical Step and the Technical Finish. Note that potting between a step will cause your Devilment to drift by ~.5s

The general guidelines for potions are:

If a fight’s duration is <8:30 pot on the opener and 6 minute burst
If a fight’s duration is >8:30<10:30 pot on the 2 minute and 8 minute burst
If a fight’s duration is >10:30<12:00 pot on the opener, 4:45 Standard Step, and 10 minute burst
If a fight’s duration is >12:00 pot on the opener, 6 minute burst, and 12 minute burst

An example of the odd minute pot which weaves your pot between the second step in your Standard Step and the Standard Finish to catch Standard Finish, Finishing Move and 2 Last Dances:

![](/img/jobs/dnc/dnc-odd-minute-pot.png)

Dancers are a *dexterity* class, and thus they will look to use the highest grade dexterity potion/gemdraught available. The proper use of potions will net you just over 1% bonus damage in a fight. This may not seem like a lot, but it is not uncommon for parties to wipe on sub-1% enrages that would have been clearable if players had been using potions.

Recommendations for fight-specific potion timings will be in the respective encounter guide.

## Food/Materia

Using food while raiding and having melded materia in all guaranteed meld slots is more or less an expectation in fights of Savage difficulty and above. See our BiS lists for recommended food; most of the time, this will be the highest item level food that matches Dancer’s substat priorities.

# Intermediate

This section will focus on elements that you should likely know about but tend to have smaller impacts on your gameplay.

## Downtime

Downtime is a Dancer’s best friend. Where possible, try to prep Dances during downtime, as it is a gain of around 2 GCDs. More specific details on downtime preparation for a given fight will be in the fight’s encounter guide. This can also mean using a /statusoff macro for Finishing Move.

## Double-Weaving Fans

### FD1-FD1

Double-weaving two FD1s is doable at lower ping. This can be useful given the lack of weave slots in your Technical window. However, as FD1 has a cooldown of 1 second, the double weave is quite tight. Also, you need to be fast enough to recognize the lack of FD3 proc before pressing the second FD1.

As a result, this double weave may not be worth using if you cannot do it routinely without clipping.

### FD1-FD3

Double-weaving FD1 into FD3 is doable at low to intermediate ping. Your ping needs to be low enough for your game to receive information that the FD3 proc has occurred.

If you do not plan on routinely using double FD1 weaves and find yourself using this double-weave, consider button-mashing FD3 after using FD1. There is no harm if you do not gain the FD3 proc.

### FD3-FD1

This double weave is recommended for players with higher ping, but is obviously usable by lower ping players as well. As you do not need to wait for information re: whether or not FD1 has created an FD3 proc, it will reduce the potential for clipping at higher latencies.

## Partner Priority and Partner Swapping

A partner priority list will not be discussed in this guide as balance patches and updates will often change the ranking order. Please visit the Balance for the most up-to-date priority list, or use partnercalc to find the best partner for your specific logs. Top choice at time of writing this guide is SAM.

For higher end optimization, partner swapping refers to switching your dance partner mid-fight. The most common reason for this is a death of the currently partnered player, but for more optimized groups this may also be to catch a DPS player’s burst.

Partner swapping is generally executed over one to two GCDs, and comes at a cost if your partner has not died; once Closed Position has been dropped, your partner will immediately lose their Esprit generation and 5% damage buffs. Below is an image quantifying the total duration a player’s Standard Step buff is dropped if a partner swap is executed over a single GCD:

![](/img/jobs/dnc/dncimage5.png)

Much like FD1 double-weaves, a partner swap can be executed over a single GCD without clipping; however, as dropping Closed position has an intrinsic 1 second cooldown, it will once again be somewhat tight to execute for players with high ping. Swapping over two GCDs is a very small loss over one GCD and is advisable if it prevents you from clipping.

There are two ways of partner swapping:

1. Drop Closed Position and select your partner immediately after using a GCD
2. Drop Closed Position and partner a player by using a macro

The benefits of using a macro include not having to deselect the boss, which may or may not delay auto-attacks. However, the downside of using a macro is that it can be easy to clip your GCD, as macros cannot be queued. **The most important thing to avoid in a proper partner swap is clipping.**

An example of a Partner swap macro:

```
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/ac "Closed Position" <6>
/micon "Closed Position"
```

This will target the sixth player on your party list, change the number in order to target the other members of your party. The repeated entries are deliberate and are used as an attempt to imperfectly simulate queuing with the macro. Please note that this macro does not include a command for dropping closed position, and as such, you will need to do that manually first.

## Partnercalc

Made by Hint, one of the mentors and head admins of the Balance – can quantify player damage under a given Standard Step window. This tool is likely your best bet for objective data. You can find partnercalc [here](https://partnercalc.app/).

# Advanced

This last section is very niche, and is more for experienced players who are interested in small gains and theorycrafting. This guide will not be delving deeply into each topic. If you want to know more, stop by the Balance and feel free to ask in #dnc_questions.

## Damage Delay

The short summary of this is that there is a lag time between when you cast an ability, and when the damage actually registers. When reviewing a log on fflogs, this is seen as the difference between “Player Name prepares X” and “Player Name X”.

For Dancer, Standard Finish has a damage delay of approximately 0.65 seconds. However, popping Standard Finish within range of the boss will immediately start your auto-attacks, which have a damage delay of approximately 0.5-0.55 seconds.

**In short, you should actually be using Standard Finish at -0.5s on the countdown timer**.

![](/img/jobs/dnc/dnc-ss.png)

## Ghosting

Related to damage delay, ghosting refers to using an ability on a target which then becomes invulnerable or untargetable within ~0.5s. The ability will go off, any resources or procs used will be consumed, but the damage will not go through. You can read this on a log by finding a "Player Name prepares X" line that isn't followed by a "Player Name X" line. Care should be made to avoid burning resources such as Saber Dance if there is a chance that the damage might ghost.

![](/img/jobs/dnc/dnc-ghost.png)

# Final Words

That’s all! As always, please DM me at tommoo on Discord if there are any questions, suggestions, or feedback. Feel free to also stop by the Dancer channels in The Balance.

As always, I’d like to thank the other mentors and helpfuls at the Balance for their support, and for their help with this document and testing.

* Tomcat

# Useful Resources

See below regarding some helpful resources:

1. [The Balance Discord](https://discord.gg/thebalanceffxiv)

Guides, BiS lists, etc. can be found in #dnc_resources and #dnc_encounter.

Dancer specific questions and discussions can be asked in #dnc_questions or #dnc_encounter; just make sure to grab the Dancer role.

2. [Ringabel’s extensive DNC guide](https://bit.ly/DNCGuideDT)

For a more in depth look on the class, including details that were omitted in this guide for the sake of brevity.

3. [XIV Analysis](https://xivanalysis.com/)

A helpful site in which players can input their logs created via ACT and uploaded to FFLogs and have their gameplay analyzed in order to make adjustments and improvements. 

4. [Partnercalc](https://partnercalc.app/) 

A site by Hint which analyzes each Standard Step window in a given log and determines which players were best to partner. Damage breakdowns are included.
