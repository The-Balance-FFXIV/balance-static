---
title: Dancer Advanced Guide
card_header_image: /img/jobs/dnc/advanced.png
authors:
  - Balance-DNC-Staff
patch: "6.3"
lastmod: 2023-01-20T15:16:38.091Z
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
tags:
  - Dancer
  - DNC
  - FFXIV
  - Guide
  - Advanced
---
by Io Whitespirit (Faerie)

# FOREWORD

One of the biggest requests I have had is a more concise document on what people “need to know” before jumping into more difficult content. This is not meant to be a replacement for a general guide to Dancer; please see Ringabel’s extensive write-up instead, which will be linked at the end of the document in the appendix. 

This guide will be broken down into three sections: Basics, Intermediate, and Advanced. I am hopeful that even some of the more experienced players may learn something new from this document.

Let’s get to it!

* io

# Basics

This section will focus on elements that **should be understood** prior to jumping into more difficult content. 

## Weaving

There are already plenty of guides on *weaving*, and for good reason–a poor understanding of how and when to weave will likely yield a mediocre performance. A great resource is the commonly linked Balance weaving infographic, seen here: [click here](https://media.discordapp.net/attachments/598630005999796233/600432765250568262/GCD_v._3.png)

Make sure you understand which of your abilities are GCDs, and which are oGCDs. A full discussion looking at every ability in our toolkit is beyond the scope of this guide.

For Dancers, as we do not need to worry about cast bars, our GCDs will look something like this (assuming a minimum skill speed set):

![](/img/jobs/dnc/dncimage1.png)

This means that after each GCD you use, after a forced animation lock of around \~0.7s, you will have the ability to weave two abilities before you can recast your next GCD. These will generally be Fans, but can include a large variety of other oGCD abilities. These will also, with some exceptions, usually have animation locks of \~0.7s. The biggest exception to this rule are potions, which have a lock of ~1.2s.

Of note, initiating and finishing Dances (Standard Step, Standard Finish, Technical Step, Technical Finish, and now Tillana) has a recast timer of 1.5s instead of 2.5s, meaning you will only have the ability to weave in **one** oGCD during any of these abilities without clipping. This is more relevant for the Finishes and Tillana as most abilities are locked mid-dance.

Please make sure you understand this concept well before proceeding, as this is pivotal to the entire foundation of FFXIV’s battle system.

## Opener - Level 90

![](/img/jobs/dnc/dncimage2.png)

*Click [here](https://i.imgur.com/AvOuHDs.png) for a higher resolution version.*

Barring kill time shenanigans and some very niche cases, this opener is good for more or less all level 90 fights. Tillana and Starfall Dance can be interchanged.

A Technical first opener exists but is not worth using except in extremely niche cases. Likewise, the use of Devilment before starting Technical Step is not recommended.

## Rotation Basics

The backbone of Dancer gameplay is conceptually fairly straightforward:

1. Technical window (discussed a few subsections below) every **two minutes**

   1. Devilment and Flourish used around the same time
2. Flourish every **one minute**
3. Outside of the above, every 30-32 seconds:

   2. **25 seconds** of GCDs (or 27+ seconds if using a 2.47s set)
   3. **5 seconds** of Standard Step

When the only thing available to do is press single target GCDs, use Reverse Cascade and Fountainfall procs immediately as they come up. This is to avoid the possibility of having both Reverse Cascade and Fountainfall procs available when Flourish becomes ready.

## GCD Procs

GCD procs (Reverse Cascade, Fountainfall, and the AoE counterparts) last 30 seconds and generally should never be overwritten. For example, if you have a combo’d Fountain ready as well as Fountainfall ready, you would use the Fountainfall first to avoid the possibility that using Fountain might overwrite your pre-existing Fountainfall proc.

A combo’d Fountain will also last 30 seconds. Although an effort should be used not to lose it now that the duration has been increased from Shadowbringers, it is sometimes dropped during Technical Step if there are too many other abilities to be used.

## Priority System

The core of Dancer’s gameplay is based on RNG and dependent on GCD procs, Esprit generation, and Fans. As such, when multiple abilities are ready, understanding the priority system is important for optimizing damage.

**General Single Target Priority List:**

1. Starfall Dance if about to expire
2. Fountainfall if about to expire
3. Reverse Cascade if about to expire
4. Saber Dance if >= 85 Esprit
5. Fountainfall if Fountain combo ready
6. Fountain combo if about to expire
7. Tillana
8. Saber Dance if >= 50 Esprit and under Technical Finish
9. Standard Step
10. Fountainfall
11. Reverse Cascade
12. Fountain combo
13. Cascade

An AoE priority list also exists, but as this is mostly irrelevant for Savage and Ultimate, it will be skipped in this guide.

## Drifting

The definition of “drifting” refers to having a cooldown up and ready to use but, for one reason or another, delaying its use. Unless intentional, this is generally frowned upon. For key abilities such as Technical Step and Devilment, forgetting to use them on cooldown every two minutes will tend to “drift” these abilities out of other players’ raid buffs and bursts–a big no-no.

## Technical Window

A Technical Window refers to the 20.5 seconds after Technical Finish is executed, during which Esprit generation is substantially increased for each other player affected by the Technical buff. This is your big damage window and where you should be dumping your resources.

However, please note: the range of Technical Finish is not global, and is limited to 15 yalms. This means that depending on the ongoing mechanics, your positioning needs to be precise enough in order to hit all seven other players.

This also means that during fights in which Technical comes up but people are spread out, it may need to be intentionally drifted back a determined number of GCDs to a point where people are clustered enough to be affected by the raid buff.

## Pooling

“Pooling” refers to saving resources for Technical windows. This most commonly refers to saving 3-4 feathers so that they can be rapidly weaved in between GCDs while under the influence of Technical Step.

This is also where understanding weaving is important. Of the following two images, only one is executed correctly:

1.

![](/img/jobs/dnc/dncimage3.png)

2.

![](/img/jobs/dnc/advanced4.png)

Both are from real logs. **THE TOP IMAGE IS NOT WHAT WE MEAN BY POOLING AND IS NOT WHAT YOU SHOULD DO DUE TO INCORRECT WEAVING**. The bottom image is more correct, with pooled feathers slowly being dumped between GCDs.

## Potions/Tinctures

Couple of things to note about potions–as an item, they are unqueueable (the button to use a potion will **not** be processed if you press the button even slightly early, unlike your usual combat actions), have an animation lock of approximately 1.2s, and cannot be macroed. At high quality, they have a cooldown of 4 minutes 30 seconds. As such, its use will usually occupy the entirety of a double weave window. General recommendation for second potion usage outside of the opener is to delay its use until the next burst, and to use it the GCD before starting the next Technical Step (GCD → potion → start Technical Step) as this will cover the entirety of the Technical window.

Dancers are a *dexterity* class, and thus they will look to use the highest grade dexterity potion/tincture available. The proper use of potions will net you just over 1% bonus damage in a fight. This may not seem like a lot, but it is not uncommon for parties to wipe on sub-1% enrages that would have been clearable if players had been using potions.

Recommendations for fight-specific potion timings will be in the respective encounter guide.

## Food/Materia

Using food while raiding and having melded materia in all guaranteed meld slots is more or less an expectation in fights of Savage difficulty and above. See our BiS lists for recommended food; most of the time, this will be the highest item level food that matches Dancer’s substat priorities.

# Intermediate

This section will focus on elements that you should likely know about but tend to have smaller impacts on your gameplay.

## Downtime

Downtime is a Dancer’s best friend. Where possible, try to prep Dances during downtime, as it is a gain of around 2 GCDs. More specific details on downtime preparation for a given fight will be in the fight’s encounter guide.

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

A partner priority list will not be discussed in this guide as balance patches and updates will often change the ranking order. Please visit the Balance for the most up-to-date priority list, or use [partnercalc](https://partnercalc.app/) to find the best partner for your specific logs. Top choices at time of writing are SAM, RPR, and MNK.

For higher end optimization, partner swapping refers to switching your dance partner mid-fight. The most common reason for this is a death of the currently partnered player, but for more optimized groups this may also be to catch a DPS player’s burst.

Partner swapping is generally executed over one to two GCDs, and comes at a cost if your partner has not died; once Closed Position has been dropped, your partner will immediately lose their Esprit generation and 5% damage buffs. Below is an image quantifying the total duration a player’s Standard Step buff is dropped if a partner swap is executed over a single GCD:

![](/img/jobs/dnc/dncimage5.png)

Much like FD1 double-weaves, a partner swap can be executed over a single GCD without clipping; however, as dropping Closed position has an intrinsic 1 second cooldown, it will once again be somewhat tight to execute for players with high ping. Swapping over two GCDs is a very small loss over one GCD and is advisable if it prevents you from clipping.

There are two ways of partner swapping:

1. Drop Closed Position and select your partner immediately after using a GCD
2. Drop Closed Position and partner a player by using a macro

The benefits of using a macro include not having to deselect the boss, which may or may not delay auto-attacks. However, the downside of using a macro is that it can be easy to clip your GCD, as macros cannot be queued. **The most important thing to avoid in a proper partner swap is clipping**.

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

This will target the sixth player on your party list. The repeated entries are deliberate and are used as an attempt to imperfectly simulate queuing with the macro. Please note that this macro does not include a command for dropping closed position, and as such, you will need to do that manually first.

## Partnercalc

Made by Hint, one of the mentors and head admins of the Balance -- can quantify player damage under a given Standard Step window. This tool is likely your best bet for objective data. You can find partnercalc [here](https://partnercalc.app/).

As for the potential of performing Tillana swaps after a Technical window is done, it is possible, but not enough data exists to justify it at this point in time as avoiding its use during your Technical Window will lose you a GCD under your own buffs.

# Advanced

This last section is very niche, and is more for experienced players who are interested in small gains and theorycrafting. This guide will not be delving deeply into each topic. If you want to know more, stop by the Balance and feel free to ask in #dnc_questions.

## Damage Delay

The short summary of this is that there is a lag time between when you cast an ability, and when the damage actually registers. When reviewing a log on fflogs, this is seen as the difference between “<Player Name> prepares <x>” and 
"<Player Name> <x>”.

For Dancer, Standard Finish has a damage delay of approximately 0.65 seconds. However, popping Standard Finish within range of the boss will immediately start your auto-attacks, which have a damage delay of approximately 0.5-0.55 seconds.

**In short, you should actually be using Standard Finish at -0.5s on the countdown timer**.

## Ghosting

Related to damage delay, ghosting refers to using an ability on a target which then becomes invulnerable within ~0.5s. The ability will go off, any resources or procs used will be consumed, but the damage will not go through. Care should be made to avoid burning resources such as Saber Dance if there is a chance that the damage might ghost.

## Buff Propagation

The use of most raid buffs has an associated buff propagation. Players who are closer have the buff applied to them first, and as a result, the buff wears off on them first as well. This has a “ripple” effect depending on how close players were relative to each other. **Technical Finish is unique in that the buff is instantly applied to everyone**, but the **falloff still has a ripple effect**. This means that on use, Technical Step will have a 20.5s duration on the closest target (yourself) with a gain of 0.13s on each subsequent player affected. The player furthest away from you will have a total Technical Step buff duration that is closer to ~21.5s.

## Positionals

This is probably the least favorite discovery made while theorycrafting this expansion. Technical Step’s buff propagation does not just include allies; it also includes enemies. As a result, using Technical Finish while standing on an enemy’s hitbox will apply the damage on them first, and ripple the Technical buff on to yourself second (increasing the buff duration on yourself to 20.63s). This can be important for getting your last GCD under the Technical buff, especially once you include FPS tax (not discussed in this document). Suffice to say, the combination of these factors is why a slightly faster set is recommended for this expansion.

# Final Words

That’s all! As always, please DM me at io#4617 if there are any questions, suggestions, or feedback. Feel free to also stop by the Dancer channels in the Balance.

As always, I’d like to thank the other mentors and helpfuls at the Balance for their support, and for their help with this document and testing.

* io

# Useful Resources

See below regarding some helpful resources:

1. \[The Balance Discord](https://discord.com/invite/thebalanceffxiv

Guides, BiS lists, etc. can be found in #dnc_resources and #dnc_encounter.

Dancer specific questions and discussions can be asked in #dnc_questions or #dnc_encounter; just make sure to grab the Dancer role.

2. [Ringabel’s extensive DNC guide](https://bit.ly/DNCGuideEW)

For a more in depth look on the class, including details that were omitted in this guide for the sake of brevity.

3. [XIV Analysis](https://xivanalysis.com/)

A helpful site in which players can upload logs and have their gameplay analyzed in order to make adjustments and improvements.

4. [Partnercalc](https://partnercalc.app/) 

A site by Hint which analyzes each Standard Step window in a given log and determines which players were best to partner. Damage breakdowns are included.