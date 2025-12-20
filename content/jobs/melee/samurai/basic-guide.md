---
title: Basic Guide
card_header_image: /img/jobs/sam/basic.png
authors:
  - Balance-SAM-Staff
patch: ""
lastmod: 2025-08-05T02:52:16.367Z
changelog:
  - date: 2021-10-28T03:23:16.783Z
    message: Created page
  - date: 2022-04-04T22:59:17.068Z
    message: Updated for Endwalker.
  - date: 2022-08-03T01:49:24.835Z
    message: Updated for 6.18
  - date: 2022-08-06T02:59:12.849Z
    message: Fixed formatting
  - date: 2022-08-25T04:11:54.647Z
    message: Updated for 6.2
  - date: 2023-10-24T23:04:39.505Z
    message: Updated for 6.5
  - date: 2024-01-17T05:40:28.783Z
    message: Updated for 6.55
  - date: 2024-08-28T06:49:05.029Z
    message: Updated for Dawntrail 7.05
  - date: 2025-08-05T02:52:18.813Z
    message: Updated potencies for 7.3
---
# Foreword

\-Zheng

As of Dawntrail, Samurai has been part of the game for seven years. As part of the team, I am updating this guide for Dawntrail as we have gotten a substantial amount of changes upon release, until 7.05 which marked a big shift in gameplay since Shadowbringers, and will be covered in this document. This guide is intended for newer and older players alike.

The following section summarizes Samurai’s abilities. You may also refer to [Square Enix’s Samurai Job Guide](https://na.finalfantasyxiv.com/jobguide/samurai/) for specific skill and trait text. Feel free to skip this section if you are familiar with Samurai’s skills.

# Actions

A summary of all of Samurai's actions can be found [here.](/jobs/melee/samurai/skills-overview/)

In an eight-person instance such as an Extreme Primal or Savage Raid, all actions except (usually) Leg Sweep will see at least some use. Leg Sweep has seen situational use in the past. Depending on your party's strategy, Bloodbath, Second Wind, and Feint may all be used situationally to assist healers, while Arm’s Length is useful in any fight with a knockback/pull mechanic such as floor three of Arcadion Savage. True North will be useful in a majority of fights, as getting a full omni-directional fight is very uncommon these days.

# Shape of the Blade: Introduction to Samurai

## Playstyle

High similarity to Dragoon with simple Global Cooldown (GCD) structure at a glance. However, SAM is a job that is capable of an extremely high skill ceiling due to the flexibility in its Kenki usage and Sen/GCD optimization. This is a job that emphasizes using the complete toolkit given the circumstances. Samurai manage two different resources to do heavy damage: Sen and Kenki.

Every time SAM completes a certain GCD combo, its corresponding Sen is collected. There are three types of Sen to collect:

Snow (Setsu): ![alt_text](https://lh6.googleusercontent.com/lW5486Um3Pv47vhQ8JbdZRN2hoXIOEj0mGBUN499CrqfPsbdmRGrEsD9qtyDzJSocNthd8tfnDa6jLKu_LdDQngUjBnFpeqv-pgAa57L_WuyxYH2JW6RcJzAXJ6y4TnAURE4csu3=s0 "Setsu")

Moon (Getsu): ![alt_text](https://lh3.googleusercontent.com/vh7p32RLojf1eVxekvJgdXj61Q4h4w8FTI0f7K-8QtGKUQRpqBsgIPqjGvTIp8jl1EQEHtDCan8xoegKxMtxnHN94Ti4koHcV69g5liT5ExglUdUoxa7vkyRQF0bock5ZcTtnFzH=s0 "Getsu")

Flower (Ka): ![alt_text](https://lh6.googleusercontent.com/jSAYprY7WsOG_OyYhh-kYdWo9El9MvFzNKO3Tv4a6GyON8h_i1ToYCAG8bnb-QeQAmhiftTf26kbDKTAG7yoWR7wK0D3VcltTG80NWZ46-y5zZoGuRkcol9hM_LjJljycbeOcYcG=s0 "Ka")

The resulting Iaijutsu differs based on the number of Sen held, regardless of the combination. If you use a combo that normally grants you a Sen that you already have, it will not give you any extra Sen, making it wasted.

Kenki is SAM’s second but extremely vital resource. All of SAM’s GCD skills (only Iaijutsu does not generate Kenki) and one off-Global Cooldown (oGCD) generate a certain amount of Kenki. Kenki is then spent on Hissatsu moves, which are oGCD abilities with very short cooldowns (CDs) (except Guren/Senei).

**Key points of dealing damage as a Samurai:**

* Minimizing resource waste by not overwriting Sen/Meditation or generating excess Kenki
* Maximizing bursts within raid buffs
* Awareness of fight transitions to know how much Sen/Kenki to start or end a phase with
* Tendo Setsugekka, Tsubame-gaeshi, Meikyo, and Ikishoten/Ogi CD timing

**Advantages:**

* Low entry barrier to learn the basics of Samurai, high skill ceiling allows for skill expression
* Heavy 120s burst, with good 60s burst as well
* Lenient buff uptimes tied to mandatory combos
* Incredible mobility with backstep and charge
* Lenient positionals

**Disadvantages:**

* Fast ramp time is dependent on the availability of Meikyo Shisui, otherwise takes a long windup to recover from losing its buffs.
* The sheer flexibility means optimization becomes a fight-to-fight basis; requires high adaptability.
* Complete lack of raid utility. Whether or not a SAM is worth bringing to raid is entirely up to the skill of the player.

# Swinging the Blade: Practicing the Strokes

## Combo and Buffs Priority

Starting with zero buffs, the opening buff order will depend on whether or not you have Meikyo Shisui available. If you do, go:

Gekko combo > Kasha combo > Yukikaze combo.

If you do not, go:

Kasha combo > Gekko combo > Yukikaze combo.

Meikyo Shisui allows us to put our buffs up immediately, and we want to do this in nearly all situations, even before you unlock the second charge of Meikyo at level 76.

Due to the aforementioned Meikyo changes that allow us to apply buffs more quickly, we have shifted from applying Fuka (formerly Shifu) first to applying Fugetsu (formerly Jinpu) first. Since we can apply Fuka on the second GCD, we lose less from applying it second. However, we gain a large amount of potency from its application GCD (Kasha when under Meikyo) under Fugetsu.

When we do not have Meikyo, the first buff that is up is often Fuka, the haste buff. I am using “haste” in this document to shorten the full effect which is “reduces Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay.” This buff means that our GCD timer will be reduced (to a maximum of 2.18, assuming no Skill Speed on gear) and that auto-attacks will happen more often while it is up. Note that this *does not* affect the damage over time from Higanbana. However, it does rotate you through your combos quicker to acquire more Sen and Kenki and minimize the opportunity to drop your buffs.

Fugetsu is a 13% flat damage increase to all your abilities, including Higanbana’s damage over time (DoT) portion. As such, you want to make sure that this buff is up every time you use Higanbana or Midare to take advantage of its enormous potency value, as Fuka doesn’t increase damage dealt. Coming from downtime with no buffs and three Sen up, you will want to prioritize Jinpu.

Lastly, Yukikaze would be the least significant combo out of the three in the opener, but one of the most significant throughout the fight. SAM’s opener relies on lining up the buffs and CDs to maximize damage with raid buffs, and Yukikaze offers no self-buff to Samurai. By starting Yukikaze, Samurai will end up not being able to have both Shifu or Jinpu up by the time raid buffs go out, as everything will be delayed by a combo. During the fight, Yukikaze is great to have as your only Sen up leading into downtime because it allows you to get both buffs back up before using Midare. It can also be used to help as an alignment tool. 

**Tip:** <span style="text-decoration:underline;">Remember Iaijutsu does not break combo.</span> If you need to reapply Higanbana but Fugetsu is down and you are already sitting on one Sen, you can do a Hakaze > Jinpu > Iaijutsu > Gekko and you will have the Fugetsu buff applied on your Higanbana without wasting the Sen on the combo.

## Honing the Blade: Kenki and Potency

With the Sen system, Ogi Namikiri, and the new Tendo Setsugekka with its 1020 potency and auto-crit is what catches people’s attention with its flash, then SAM’s Kenki system is what makes the engine run and deal out damage over the fight. Kenki generation is 100% predictable and tied to your GCDs, and in an ideal world you want to finish a fight with 0 Kenki. As such, you will generate and expend similar amounts of Kenki over the same duration. To understand how much Kenki is worth to your damage, it may be preferable to use potency/Kenki and use your most common Kenki skill (Shinten) as a baseline.

| Ability            | Potency          | Potency Per Kenki                       |
| ------------------ | ---------------- | --------------------------------------- |
| Zanshin            | \= 940p/50k      | \= 18.8p/k for the first mob, 9.4 after |
| Senei              | \= 800p/25k      | \= 32p/k                                |
| Guren              | \= 400p/25k      | \= 16p/k per mob                        |
| <mark> **Shinten** | <mark>= 250p/25k | \= <mark> **10p/k**                     |
| Yaten              | \= 100p/10k      | \= 10p/k                                |
| Gyoten             | \= 100p/10k      | \= 10p/k                                |
| Kyuten             | \= 120p/25k      | \= 4.8p/k per mob                       |

From the numbers above, a few conclusions can be drawn:

* Guren and Senei are extremely powerful oGCDs and carry a very high potency/Kenki. Just the sheer potency number makes you want to use this ASAP on an opener. Guren is a gain starting on two targets.
* Senei gives you the biggest bang for your buck.
* Gyoten and Yaten are worth the same as Shinten, allowing you to use them to manipulate Kenki before buff windows or dump more during buff windows.
* Kyuten outperforms Shinten at three mobs and above.
* Zanshin is worth using as its still more potency per Kenki over Shinten, and any mobs cleaved are still kenki/potency positive and a gain.

In addition, it means that **<span style="text-decoration:underline;">each time you successfully use Tengetsu you have effectively gained 100 potency.</span>** This potency can add up very quickly by the end of an encounter, so always try to press Tengetsu when you know there is incoming damage.

*Note regarding Yaten-Enpi-Gyoten:* If you factor only the Yaten-Enpi combo, it is 10 Kenki cost for an additional 260 potency and regenerates 10 Kenki, and that gives you 26 potency per Kenki. <span style="text-decoration:underline;">However, this combo does not give you any benefits to reapply your buffs or for adding a Sen.</span> While it is a potent one GCD combo, it cannot be used reliably outside of very specific situations, such as dodging out of an AOE while being unable to go back to the boss soon or off-setting your GCDs by one. Gyoten can be used as a gap closer if Sprint won’t do the job, or to manipulate your Kenki bar for more damage under buffs.

## To Enpi or to Not Enpi (And Gyoten and Yaten)

That is the question. Most of the time, the answer can be summed up as: Do not if you can just run.

A common mistake that I have seen from many Samurai is that they happily use Yaten - Enpi - Gyoten combo to get out of an AoE and then dash back in immediately. However, that method will push our GCDs back by one, and it is an inefficient use of GCD if you could have simply moved out of an AoE between GCDs.

So what are the values of Gyoten/Yaten/Enpi?

<span style="text-decoration:underline;">They are good only if you gain a GCD that would have been otherwise impossible without them.</span>

Gyoten/Yaten gain value if using them allows you to get an extra GCD compared to not using them, such as moving from one target at one end of a map to another one at the other end. If the targets are close enough that you could have run or used Sprint and not lose GCDs, then it is inefficient.

Enpi is the same. It gains value only if there are time periods where you could have used a ranged attack but not melee attack, which is often a rare situation.

Of course, exceptions always happen. You will recognize the exceptions in the fight situation as you gain experience. However, using Yaten as a safety net initially is still better than straight up dying.

## Meikyo Shisui: Rise to the Heavens

With the changes to Meikyo Shisui and combo enders (Gekko/Kasha) in 6.0, its role as a tool in our rotation has changed in a big way going into Endwalker. Instead of existing solely as an optimization tool and a way to fix our rotational alignment to maximize our Iaijustu and Tsubame usage, it now offers a way to avoid the ramp-up/buff application period that defined Samurai in Shadowbringers.

As of Dawntrail as well, Meikyo allows us to use our newest tool, **Tendo Setsugekka, a 1020 potency GCD with a guaranteed critical hit per use.** When our Meikyo Shisui is used, our next Midare turns into a Tendo and will do more damage than a standard Midare, and give a Kaeshi version named Kaeshi Tendo Setsugekka. **If you're building a Tenka Goken, Meikyo turns our Tenka Goken into a Tendo Goken.**

The goal of Meikyo is to manipulate your Sen so you can apply your buffs as quickly as possible, maximize Iaijutsu usage, and use Tendo Setsugekka. For example, in the opener we use Meikyo to quickly apply both of our buffs, get all three Sen, and open with a fully buffed Tendo in raid buffs. We also use Meikyo in every 60s burst window to manipulate our Sen and quickly perform a buffed Higanbana right on time. While leveling or in dungeon content, it can also be used to quickly perform Tendo Goken for AoE purposes.

**Tip:** Iaijutsu does not count as one of the three Weaponskills on Meikyo, so you can use it between the three to put up Higanbana with ease. For example: Meikyo starts > Kasha > Higanbana > Kasha > Gekko (Meikyo ends).

It is important to note *which* finishers to use if you are planning to come out of the Meikyo with one or two Sen. You need to look at the remaining duration of the buffs you have and keep track of the order of the buffs that need to be refreshed. The reason being that the first combo you do after a Meikyo will likely be the buff that needs to be refreshed or has the shortest duration; therefore, you will reapply the buff and its Sen immediately after and then followed by the next. As such, if you are ending a Meikyo with one or two Sen, use the Sen with the longest buff duration last in Meikyo.

**For example:** If you just performed a Gekko combo and have a Getsu Sen and Higanbana need to be refreshed in four GCDs, but you cannot wait. 

With Meikyo, it is possible for you to go the following sequence: 

![](/img/jobs/sam/meikyoExample.png)

<span style="text-decoartion:underline;">Meikyo is not just a key to use Tendo Setsugekka, but it can be used to increase damage outside of Tendo</span>. Consider Meikyo as a GCD saver too. After you have refreshed both your Fugetsu and Fuka buffs, as it lets you skip an entire two GCDs in your Kasha and Gekko combos. The most ideal situation is one where you use all three of Meikyo’s GCDs on Kasha and Gekko only, as using Yukikaze in Meikyo saves you only one GCD and Yukikaze is a weaker finisher.

<span style="text-decoration:underline;">An example of Meikyo with ideal usage as long as the buffs do not fall off:</span>

![](/img/jobs/sam/optimalMeikyo.png)

## Hagakure Usage

Hagakure is an oGCD ability re-added to the game in patch 5.05 as a shadow of its former self. Originally a cornerstone of a Samurai’s rotation and toolkit in Stormblood, this ability now allows you to trade all of your Sen in for 10 Kenki each on a five second cooldown. 

The intended purpose for the reintroduction of Hagakure from Square Enix seemed to be from the outcry of players who were upset that in dungeons they would sometimes have leftover Sen, and Hagakure would allow them to “wipe clean” this gauge in order to enter a dungeon boss without having to overcap existing Sen while re-applying buffs. In a raid setting, however, Hagakure serves a similar purpose: it wipes away the Sen we build while filling time to keep rotational alignment. For the newer players, have this button in case your rotations runs into a awkward spot and there's no way out. For the older players, this button is no longer used as a strict requirement for filler. Please see below in the Rotation & Looping Section

## Higanbana Timing

Of all the moves a Samurai can use, the single most powerful move is Higanbana. As you recall, Higanbana is 1200 potency of damage over the course of 60 seconds. Because of its sheer damage compacted into a single GCD, this is strongly amplified under raid buffs. The nice thing about raid buffs is that a good chunk of them will line up with Higanbana timing: Trick Attack, Battle Voice, Dragon Sight, Battle Litany, Chain Stratagem, Technical Step, etc. tend to fall under a cooldown time that is a multiple of 60s. As such, you should be able to land your Higanbana within those raid buffs at the time of refresh.

With that said, how do you know when to *not* use Higanbana? Some bosses go invincible for a period of time during which your Higanbana is ineffective. When that happens, if your Higanbana did not get to make use of its duration, then it is lost DPS.

Comparing Midare Setsugekka with Higanbana, it takes about 42s of ticks for Higanbana to outdamage Midare Setsugekka in the same GCD.

The rule of thumb is that if Higanbana was not able to tick for more than about 42s of its duration then it would have been better not to use it. This is doubly true if using Higanbana would have prevented you from using a Midare Setsugekka in the same period of time. Generally speaking, fight phases of 1:30 should have only one Higanbana used, 3:20 only three Higanbana, and so on. Fight phases of 3:50, for example, should have four Higanbana used *only* if you are able to use a buffed (already under Fugetsu at absolute minimum) Higanbana at the very first GCD and have perfect refresh timing. There are some situations where it is proper to use Higanbana when it would not tick for its full duration, such as at the end of a fight where you are ending on two meditation stacks in order to generate the extra stack and use Shoha, but that is a per-fight optimization that should be mathematically figured out according to the rest of the encounter.

Higanbana is responsible for much of a Samurai’s damage, but applying it liberally and improperly only means you will suffer in the long run.

## Rotation & Looping

Samurai’s high potency rotation revolves around executing our biggest cooldown abilities as soon as they are available to ensure that we use all the available charges of each skill, as well as to ensure buff uptime in order to never drop Higanbana. To do so, we use what is referred to as a "looping" rotation, where the order of skills repeats every 120s after the opener. This looping rotation is separated into three distinct parts: the opener, the cooldown phase, and the burst phase. 

In the opener, we use Meikyo Shisui before pulling the boss in order to have it up on pull to use Gekko and Kasha and apply our buffs as fast as possible. We then immediately use all of our large cooldown abilities (Senei, Ikishoten, both our Tsubame Gaeshi charges, and our second Meikyo Shisui charge) to get their cooldowns rolling. 

In the cooldown phase we are just passing the time waiting for our Higanbana timer to tick down and for our cooldowns to come back. To do this, we simply use our natural combos to build a Midare, and then build the three Sen again a second time. These three Sen then lead into your burst phase.

In the burst phase, we will use whichever big cooldowns are available to do our maximum amount of damage inside the buffs provided by the rest of our team. It starts by using the three Sen we gathered in the cooldown phase in order to use both Midare and Kaeshi: Setsugekka, using Meikyo Shisui to acquire the sen to reapply Higanbana and preparing for another Midare inside the buffs. If we have Ikishoten + Senei + Ogi Namikiri, we will use them here. If we do not, we will have to use filler to align our loop.

## Filler

This section is for the older player base from Shadowbringers and Endwalker. Please scroll down to the Rotation & Looping section if you were not playing Samurai during these times.\
\
As of Dawntrail 7.05, the Hagakure fillers are obsolete and no longer practiced. In 7.05, Tsubame Gaeshi was reworked to now proc after every Midare/Tenka Goken, including Tendo Setsugekka. This means that in our rotation, we have more GCDs than we did in our old iterations that required Hagakure fillers to loop, because there are at least 2 additional GCD slots in our cooldown phases before odd minute burst and after odd minute burst due to them both having a Midare.

# Opener

![](/img/jobs/sam/samurai-opener.jpeg)

# Rotation Guide

![](/img/jobs/sam/sam_214_sheet.jpeg)

# Higanbana Realignment Guide

![](/img/jobs/sam/samurai-realigning-higanbana-options.jpg)

# AoE Rotations

Rule of thumb: Always AoE when there are three or more enemies. When AoEing groups of enemies as a SAM, you will want to put your buffs up with Meikyo Shisui and Mangetsu/Oka and then follow the basic rotation below:

![alt_text](https://xivapi.com/i/003000/003189_hr1.png "Fuko") **\->** ![alt_text](https://xivapi.com/i/003000/003165_hr1.png "Oka") **\->** ![alt_text](https://xivapi.com/i/003000/003189_hr1.png "Fuko") **\->** ![alt_text](https://xivapi.com/i/003000/003163_hr1.png "Mangetsu") **\->** ![](https://xivapi.com/i/003000/003161_hr1.png)
![](<>)

The strength of SAM’s AoE rotation lies in the fact that both two-GCD AoE combos generate a different Sen each, allowing you to easily flow into a Tenka Goken. They will also naturally upkeep your buff timers, so you will not have to awkwardly switch back and forth from AoE to single target. Their strongest Hissatsu move, Guren, is also an extremely potent AoE and it is worth saving Guren for adds or AoE as long as you are not holding onto it for longer than its cooldown. Once you reach three targets or more, excess Kenki should be spent on Kyuten instead of Shinten.

**What happens if there are two targets?**

If both targets will last long enough, using Higanbana on each and reapply as necessary. Two targets follows the same rotation as single target in building Midare Setsugekka, while making sure you use Hissatsu: Guren and Zanshin to cleave the two targets. However, despite being more potency per GCD, this rotation requires more GCDs to go through (as it needs all 3 Sen). In the case that you would gain a usage of Tenka Goken over Midare in the time provided, it would be a gain to do that instead. Hissatsu: Guren is also a gain on two or more targets and should be used over Hissatsu: Senei in these scenarios.

# Conclusion

Being a good DPS player is not only being able to execute well, but also adapting as the job and fights change over time. It is because of players like you who are interested in this job that the tactics and the nuances in the fights and against bosses become clear over time. As such, please use this guide as a reference point on how you can start as a Samurai. The best form of growth will come from your own practice and your own growth as a player!

With this, the guide has come to its conclusion. I hope you enjoyed the guide and were able to learn about Samurai. Please don’t hesitate to let me know if anything about this guide can be improved.

**Thank you for reading this guide.**

![](https://lh4.googleusercontent.com/WYFGvb-_0xV2iCbfRhsYKe_QMAGvuQEO6wKAjoy3FhPpc6qUtJzO574h1NDE_DqwPxdVxILiiDcHCPQDG4JHGMBCBJru_bzpQlAHcclp_mrFccKC-9zvXjlkbVkKUPbNX2IzAwGO=s0)

# Complete Beginner’s Guide

For the complete beginners to melee DPS and this game’s terminology in general.

## Glossary

So you signed up for being a melee DPS, that means you want to hurt things, and you want to hurt things *up close and personal*. To maximize hurting things, let us go over some basic concepts.

<span style="text-decoration:underline;">Potency:</span> The basic unit of how much damage a move will do. Comparing potencies between combos or rotations is useful only within the specific class.

<span style="text-decoration:underline;">Global Cooldown:</span> (GCD) Can refer to two things. One is the skills themselves, also called Weaponskills. These are skills grouped together under a global cooldown and go on cooldown the same time they are pressed, and in almost all cases come off cooldown simultaneously. Always be using them when you can. Could also refer to *how long* your GCD is, or how long these skills are on cooldown when pressed. Examples: Hakaze is a GCD. My GCD is 2.13(seconds). 

<span style="text-decoration:underline;">Off-Global Cooldown:</span> (oGCD) are abilities that have their own cooldowns that act independently of other abilities with job-specific exceptions. The abilities have a variety of effects like buffs or damage and are meant to be cast in the downtime between two consecutive GCDs.

<span style="text-decoration:underline;">Combo:</span> If you read the tooltips of some of your skills, you will notice that some of them have lines like “Combo Potency” or “Combo Effect” and list another move. That means you must do the moves in a sequence to receive the full effect and potency of all moves. Always do moves in the entire combo sequence to maximize damage done.

<span style="text-decoration:underline;">Positional:</span> Some moves have additional effects that indicate a bonus buff, damage, or resource if you use a move and it hits the target’s flank or rear. The rear is indicated by the missing chunk in the target circles of an enemy, and the flanks on the adjacent quarters. Enemies with full circles are omnidirectional, meaning all positional effects with triggers without regard for where you stand.

<span style="text-decoration:underline;">Damage-over-Time:</span> (DoT) are moves that leave a ticking debuff on an enemy while doing a certain amount of damage every server tick of three seconds. Total potency is determined by dividing the duration by three, then multiply it with the tick potency. You can safely estimate that for every three seconds the DoT is overwritten/cancelled before reaching 0 or the DoT is not applied on the target, you lose that many ticks of potency. To maximize the damage from a DoT, the countdown must be allowed to reach 1 or 0 every time and have the DoT reapplied as soon as possible to 0.

<span style="text-decoration:underline;">Buffs:</span> are beneficial effects that you have when they’re up. If a buff can be kept up 100% of the time, do it. oGCD buffs often cannot be maintained 100% so you should be selective when you use them to maximize the damage on a target, or use moves that extend the duration of the said buffs.

<span style="text-decoration:underline;">Debuffs:</span> are harmful effects that you apply on enemies to either maximize the damage they’ll take or reduce the damage they can do. Again, use wisely to maximize damage or safety of your tanks.

## Rules of Thumb

* *<span style="text-decoration:underline;">Rotate through the combos:</span>* For classes with multiple combos with different effects, rotate through all of them for maximum effect. 
* *<span style="text-decoration:underline;">How many oGCDs between two GCDs?:</span>* At base GCD recast time, do not use more than two oGCDs between two consecutive GCDs. At reduced GCD recast time or high latency, use one oGCD unless the situation calls for it. Most of the time you don’t want to use one after a GCD with a cast time. There are certain oGCD that have a longer lock. For example using a potion will not allow you to double weave between two GCDs.
* *<span style="text-decoration:underline;">Taking a break on positionals:</span>* To minimize the movement required on moving between rear and flank for positional moves, position yourself at the point where the targeting circle breaks. By positioning yourself on the boundary between rear and flank you only need to move a foot either side for the positionals.

![](https://lh4.googleusercontent.com/iugvrxCSRoRG7NMfhhDlT6txW2o5EwTSE8J2FOlnH1TyiiSnJWn8KrUIRaTATPYvB7oA3_XIlM7dvwaLmGQXO9qswp27-lNU0fvN1enOh2iHVFsQQThVOwNmPNFEQAFBng7XcTwx=s0 "image_tooltip")

*Figure 1: How to position yourself to minimize movements for positionals!*

* *<span style="text-decoration:underline;">Dead DPS does no damage:</span>* Avoid dying at all costs unless the team strategy or mechanics require you to die so the encounter won’t wipe. A dead person contributes nothing while dead and will be raised with reduced battle stats.

# Changelog

March 2018, Patch 4.2

* No changes to SAM since Stormblood launch
* Restructured guide
* Added section on Higanbana, Yaten-Enpi-Gyoten
* Added fight specific tips as of Sigmascape: Savage
  May 2018, Patch 4.3
* +20 Potency to Jinpu, Shifu, Yukikaze, Gekko, and Kasha
* Third Eye damage reduction increased to 10%
* Additional effect on Merciful Eyes: 20% current enmity reduction

Sept 2018, Patch 4.4

* +20 Potency to Yukikaze, Gekko, Kasha, and Enpi

July 2019, Patch 5.0

* Boxer takes over for Aureum as caretaker.
* Large-scale updates to everything coinciding with expansion changes.

November 2019, Patch 5.1

* 5.1 changes added and guide finally fully updated for Shadowbringers.

January 2022, Patch 6.05

* First draft of an updated guide for Endwalker.

March 2022, Pre-Patch 6.1

* Added Rotation/Looping+Filler sections.

August 2022, Pre-Patch 6.2

* Adjusted math and guidance (re:Kaiten Removal) for Patch 6.1 changes.

August 2024, Patch 7.05

* First draft of an updated guide for Dawntrail