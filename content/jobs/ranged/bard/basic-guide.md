---
title: Bard Basic Guide
card_header_image: /img/jobs/brd/basic.png
authors:
  - infinitestory
patch: "5.58"
lastmod: 2021-10-26T02:17:04.672Z
changelog:
  - date: 2021-10-26T02:17:16.801Z
    message: Created page
---
# Authors

by **Verzell Varion \[Adamantoise]**
**with contributions from Im’hotep Rah \[Goblin], Sana Cetonis \[Sargatanas], Ellunavi Sevald \[Sargatanas], Yumiya Nagatsuki \[Behemoth], Elya Kura \[Ragnarok]**

- - -

# Foreword

Hi all! Welcome to our Bard guide, freshly revamped for the 5.x Shadowbringers expansion. This guide will cover concepts of Bard gameplay, from the very fundamentals to the limits of optimization, as well as serving as a pocket reference for all aspects of Bard.

With the launch of Shadowbringers, Bard received changes that didn’t compromise its core identity nor feel of gameplay, but were still substantial enough to deserve major guide revisions. In addition, we’ve wanted to rewrite the Bard guide to make it less daunting and more accessible to beginner players, to reflect the fact that Bard is a fairly straightforward job to pick up and run with.

If you have any questions, corrections, or suggestions, please come visit us on [The Balance Discord](https://discordapp.com/invite/thebalanceffxiv), or PM me or Rah on Discord. Our contacts are listed in the [Credits](#credits) section. We hope you enjoy the guide!

- - -

# How to Use this Guide

If you’re considering picking up Bard… 

* Read [Basic Gameplay](#basic-gameplay). It covers the basics of what it feels like to play Bard (hint: comfy).

If you’re in the middle of leveling Bard… 

* Read [Basic Gameplay](#basic-gameplay), but note that this guide is entirely written from the perspective of a level 80 Bard. It doesn’t spend any time on optimization below level 80. Read it with a fresh eye once you hit the cap!

If you’re a new Bard, or one who didn’t play during Stormblood…

* Start at [Basic Gameplay](#basic-gameplay), and continue reading from there. Keep a tab on the [Glossary](#glossary) as well as the [Clarified Tooltip Reference](#clarified-tooltip-reference), abbreviations are used liberally. Skip the Changes from Stormblood section.

If you’re a returning Bard who played during Stormblood…

* Skip to [Changes from Stormblood](#changes-from-stormblood), and continue reading from there. I also recommend reading the [Clarified Tooltip Reference](#clarified-tooltip-reference), since some of Bard’s tooltips this time around are unintuitive.

If you’re an experienced Bard, or looking for optimization advice…

* Skip to [Advanced Gameplay](#advanced-gameplay). If you’ve read the guide before, make sure to read the Changelog to see if there’s anything new.

- - -

# Glossary

|       |                                                                                                                                                                            |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AA    | Apex Arrow                                                                                                                                                                 |
| AP    | Army’s Paeon                                                                                                                                                               |
| BL    | Bloodletter                                                                                                                                                                |
| BS    | Burst Shot                                                                                                                                                                 |
| BV    | Battle Voice                                                                                                                                                               |
| CB    | Caustic Bite                                                                                                                                                               |
| DoT   | Damage over Time (for Bard, inflicted by Caustic Bite and Stormbite)                                                                                                       |
| EA    | Empyreal Arrow                                                                                                                                                             |
| GCD   | Global Cooldown (for Bard, this means Weaponskills)                                                                                                                        |
| IJ    | Iron Jaws                                                                                                                                                                  |
| MB    | Mage’s Ballad                                                                                                                                                              |
| oGCD  | off-Global Cooldown (for Bard, this means Abilities and Spells)                                                                                                            |
| PP    | Pitch Perfect                                                                                                                                                              |
| Proc  | Originally short for “special process”, it’s an MMO term that refers to events with a random chance of happening. For Bard, this means Straight Shot Ready and Repertoire. |
| RA    | Refulgent Arrow                                                                                                                                                            |
| RoD   | Rain of Death                                                                                                                                                              |
| RS    | Raging Strikes                                                                                                                                                             |
| QN    | Quick Nock                                                                                                                                                                 |
| SB    | Stormbite                                                                                                                                                                  |
| Snap  | Short for snapshot, refers to capturing buffs onto DoTs using Iron Jaws.                                                                                                   |
| SW    | Sidewinder                                                                                                                                                                 |
| Troub | Troubadour                                                                                                                                                                 |
| Weave | Using oGCDs in between GCDs. Using two of them in a single window is called double weaving.                                                                                |
| WM    | Wanderer’s Minuet                                                                                                                                                          |

- - -

# Basic Gameplay

The three most characteristic qualities of Bard gameplay are that it uses a **priority system**, it’s **reactive**, and it’s **flexible**. I’ll explain what those mean:

* **Priority system:** In FFXIV, there are some classes which have very static rotations. What that means is that you can map out exactly when to press buttons over a couple-minute duration, and the rotation is just a loop of that exact sequence. Bard is the *exact opposite* of those classes. Its different skills are loosely interconnected, rather than strictly ordered like combo-based classes. In fact, Bard has no GCD combos at all! Instead, as a Bard, you’ll be managing uptime on songs and damage over time skills while responding to procs. This also means you can learn Bard in steps. I’ve heard Bard described as an onion, with layers of complexity.
* **Reactive play:** Arguably more than any other class (only Dancer and Black Mage are even in the question), Bard’s priority system is heavily shaped by RNG. It’s one of the classes that makes the most choices during the fight. Even on the same fight, every pull will feel just a bit different.
* **Flexibility:** There are really few hard and fast rules of Bard gameplay. As you gain expertise, you’ll get a better sense of what guidelines/priorities you can break. The priority system can be molded to fit fights with adds phases, downtime, etc. as needed.

This section will cover the basics of playing Bard on a single-target fight.

## Priority System Overview

If this seems daunting, don’t worry about taking it in all at once! Bard is meant to be learned in steps, which are explained below. You can think of this more like a cheatsheet. **These are not hard and fast rules!** It’s a general guide.

#### GCD Priority - keep your GCD rolling!

1. DoTs not up? If not, **Stormbite → Caustic Bite**. 
2. DoTs about to run out (<3s left)? **Iron Jaws**.
3. **Apex Arrow** gauge maxed? Use it.
4. Straight Shot Ready? **Refulgent Arrow**.
5. GCD up, and nothing else to do? **Burst Shot**.

#### oGCD Priority - do between GCDs

6. Do you have a song playing? If not:

   * **Wanderer’s Minuet.**
   * WM on cooldown? **Mage’s Ballad.**
   * WM and MB on cooldown? **Army’s Paeon.**
7. **Pitch Perfect** at 3 stacks? Use it.
8. **Bloodletter** up in **Mage’s Ballad**? Use it.
9. **Empyreal Arrow** up? Use it, and be ready to weave a proc.
10. **Bloodletter** up? Use it.
11. In Wanderer’s Minuet? Use **Raging Strikes**.
12. In **Raging Strikes**, **Barrage** up, and not Straight Shot Ready? Use Barrage.
13. **Sidewinder** up? Use it.

## Always Be Casting + Basics of Weaving

One of the strictest rules of Bard is also one of the most important rules of playing FFXIV classes well in general. Always be casting! Pressing buttons in the wrong order is usually better than pressing nothing. This is doubly true on Bard, which doesn’t have combos and instead has a powerful filler GCD in the form of Burst Shot!

**GCD** stands for Global Cooldown, and refers to weaponskills. For Bard, all these skills share the same cooldown, which is 2.5s and drops as you acquire Skill Speed. Bard’s skills do not have cast times, so in between using GCDs, you can usually use one or two **oGCDs** (off-GCDs), which are skills that are not weaponskills. This is called **weaving**.

It’s important to keep your GCD rolling. If a GCD is available, you should be pressing something, and you should avoid pressing oGCDs if your GCD is about to come up in <0.7 seconds. This is called **clipping**, and you’ll notice it because even if you mash your GCD after, it won’t be used immediately when it comes off of cooldown. Using more than two oGCDs between two GCDs will almost always cause clipping.  Don’t do it.  Depending on how good your internet is, you may not even be able to use 2 during Army’s Paeon or Army’s Muse, so in these cases you should generally pick the lower priority oGCD and delay it.

Your filler GCDs, which you press if you don’t need to use any other GCDs, are **Burst Shot (BS)** and **Refulgent Arrow (RA)**. Use RA if you have Straight Shot Ready, and BS if not.

## DoTs

|**Stormbite** | **Caustic Bite** | **Iron Jaws**|
|-|-|-|
|![stormbite](https://xivapi.com/i/002000/002614_hr1.png) | ![caustic bite](https://xivapi.com/i/002000/002613_hr1.png) | ![iron jaws](https://xivapi.com/i/002000/002608_hr1.png)| 

Just about everything else in Bard’s kit is built on top of your two damage over time skills.  These two are **Stormbite (SB)** and **Caustic Bite (CB)**.  Together, they contribute a major amount of Bard’s damage, in addition to unlocking the song procs (foreshadowing!)  Against a single target enemy, it’s almost always best to have both always up.  Most of the time, you will lead off on targets with SB into CB.

After initially applying DoTs to an enemy, instead of manually reapplying them, use **Iron Jaws (IJ)** to refresh the timer as it gets low (< 3s or so).  Even though IJ seems weaker, it only costs one GCD.  IJ → BS is stronger than SB → CB.

One additional thing to know about DoT skills is that the damage over time calculates damage based on the buffs and debuffs on you and the target when the DoTs were applied or reapplied.  So when you use IJ (or SB or CB), the buffs (Raging Strikes, Resistance Up...), and debuffs (Vulnerability Up, Weakness...), both on you and your target get "snapshotted". These snapshotted buffs and debuffs affect the DoTs for their entire duration until they run out or are reapplied. This makes IJ very powerful when you have raid buffs stacked up.

Note that all three of these skills can also proc Straight Shot Ready, so be watchful of your buff bar or RA button!

## Song Rotation + Procs

Next, we get to the lifeblood of Bard -- songs. Bard has three songs, which have different effects (Repertoire) that have a 40% chance to trigger every time a DoT deals damage to a target. All DoTs in the game deal damage every three seconds, so you have two proc chances every three seconds on a single target. All song skills and their procs are oGCDs. 

![WM icon](https://xivapi.com/i/002000/002607_hr1.png) ![Wanderer's Minuet](https://img.finalfantasyxiv.com/lds/promo/h/2/zIhfAHktEHJDMVyF6loNl0p7Kw.png)
  **Wanderer’s Minuet (WM)** is the strongest single-target song. It stores up to three procs, which can be expended on a powerful oGCD called **Pitch Perfect (PP)**. Use PP only at three stacks, unless your WM is about to run out. It plays a noise when it hits 3, so you don’t even have to watch it.

![mb icon](https://xivapi.com/i/002000/002602_hr1.png) ![Mage's Ballad](https://img.finalfantasyxiv.com/lds/promo/h/C/6UAuuGF_bnfRwSST-dCBUBh2Zw.png)
  **Mage’s Ballad (MB)** is the next-strongest. It doesn’t store anything. Instead, when a proc happens, the cooldown of **Bloodletter (BL)** is reset. It’s normal to mash BL during MB, but take care not to mash BL when your GCD is coming up, or you will clip!

![AP icon](https://xivapi.com/i/002000/002603_hr1.png) ![army's paeon](https://img.finalfantasyxiv.com/lds/promo/h/0/QnR7fHYkAr_3AQFpbtW0dwhsJk.png)
  **Army’s Paeon (AP)** is the weakest. It stacks up to four, and as you accumulate stacks, your GCD time speeds up. It also grants a buff when you switch out of it, depending on how many stacks you had.

The order of using songs is **WM for 30s → MB for 30s → AP for 20s** (cutting it short to begin the next WM). This is the **80s cycle**, and is the only part of Bard that you could really call a rotation. 
**Note that starting from the 3rd WM, the cooldown reduction from AP will cause WM to come off cooldown earlier.  You should stay in AP for 20s.  If you use WM the moment it comes off cd, you will end up songless later.**  You should always have a song going, as they provide a lot of Bard’s damage.

![empyreal arrow](https://xivapi.com/i/002000/002606_hr1.png)
  **Empyreal Arrow (EA)** grants a single Repertoire proc. It should be used more or less off cooldown. Note that it can cause clipping, because it may make your other oGCDs available. It’s better to delay EA by a GCD to avoid this, than to clip.

## Wanderer’s Minuet + Raging Strikes + Barrage Alignment

|**Wanderer's Minuet** | **Raging Strikes** | **Barrage**|
|-|-|-|
|![WM icon](https://xivapi.com/i/002000/002607_hr1.png) | ![raging strikes](https://xivapi.com/i/000000/000352_hr1.png) | ![barrage](https://xivapi.com/i/000000/000353_hr1.png)|

**Barrage** is our most powerful single oGCD, transforming our next filler GCD into a triple-damage RA. **Raging Strikes (RS)** is our only self-buff. **WM** is our most powerful song. Conveniently, all three have a cooldown of 80 seconds, so we use them all together.

When entering WM, you should also use RS (more advanced usage is discussed later in the guide). Use Barrage as soon as possible within this window, taking care not to use it when you already have Straight Shot Ready. Note that other single-target GCDs (not Apex Arrow) can consume Barrage, so you have to use RA as your next GCD.

## Other Offensive Skills

![apex arrow](https://xivapi.com/i/002000/002619_hr1.png)\
  **Apex Arrow** should be used at 100 Soul Voice, or dumped if the fight is imminently ending and you have more than 45 Soul Voice. It will fill every 60 seconds on average if you keep your DoTs and songs up and use EA on cooldown.

![bloodletter](https://xivapi.com/i/000000/000361_hr1.png)\
  **Bloodletter (BL)** should be used on cooldown when not in MB. Don’t use Rain of Death against a single target.

![sidewinder](https://xivapi.com/i/002000/002610_hr1.png)\
  **Sidewinder (SW)** should be used on cooldown to maximize uses. Don’t use Shadowbite against a single target. If you have a good Ninja, it will naturally align with Trick Attack after the opener in this guide. Note that DoTs have a bit of a delay before they are counted by Sidewinder and Shadowbite, so wait a moment between using your second DoT and using Sidewinder/Shadowbite.

![battle voice](https://xivapi.com/i/002000/002601_hr1.png)\
  **Battle Voice (BV)** should be used on cooldown to maximize uses.

- - -

# Changes from Stormblood

In roughly decreasing order of importance:

* The big one. **Song procs are no longer dependent on crit**, rather having a fixed 40% proc rate per DoT. This means we are no longer thirsty for every possible source of crit. It won’t be nearly as necessary to party with a SCH or DRG, our gear won’t come down to “pick the crit piece”, and it’s much less valuable to snap crit buffs.
* **Barrage grants a free guaranteed RA proc**, so there’s no more need to hold EA for barrage backup. **EA should be used on cooldown whenever possible!**
* All single-target **GCDs have a 35% chance to proc RA**, except for RA itself. This includes SB, CB, IJ, BS. There’s never been a better time to stick a double-size RA button in the center of your screen.
* The filler GCD has become stronger, with HS → BS being 150 → 240 potency and old RA → new RA being 300 → 340 potency. So **the cost of snapping is higher**, and it’s much less valuable to double snap. It’s also **a bigger loss to clip**.
* **Straight Shot is no longer a self buff**, which changes the opener and removes one thing to manage. It’s basically a mini RA now.
* Apex Arrow has been added. The tooltip is misleading, it only hits **600 potency at max** gauge, so it gives 6 potency per gauge spent. As a rule of thumb, use it at max gauge (can be OK to delay or use early 1-2 ticks in order to hit a buff window).
* Army’s Paeon now grants a lingering speed buff for ten seconds after switching into the next song. In practice, this is a “flat” bonus that doesn’t scale that hard with how long we’ve spent in AP, so it reinforces the 30-30-20 song cycle that we know and love.
* **EA is no longer a weaponskill**, so its cooldown isn’t reduced by SKS or Army’s Paeon.
* Foe Requiem and Refresh have been removed entirely. :( Battle Voice now gives 20% DH chance, which is a consolation prize.
* Certain potencies have been updated. BL 130 → 150, RoD 100 → 130, SB (initial use) 120 → 100, SB (dot) 55 → 50, CB (initial use) 120 → 150, CB (dot) 45 → 40, QN 110 → 150, RA 300 → 330, PP2 240 → 250, PP3 420 → 450.
* Troubadour’s duration has been halved to 15s, but now doesn’t require a song and reduces all damage by 10%. Minne’s cooldown has been doubled to 90s, but now affects oGCD healing.
* Arm’s Length has been added.
* Lots of new AoE skills and traits, QN can reset BL in any song, AoE sidewinder, Apex Arrow.

- - -

# Changes during Shadowbringers

* 5.1: Song buffs return.  WM gives 2% crit chance, MB gives 1% damage, and AP gives 3% DH chance.  This doesn’t change the song order at all.
* 5.1: Potency adjustments.  RA 340 → 330, SB (dot) 60 → 50, CB (dot) 50 → 40, SW 260 → 300, Apex (max) 500 → 600.
* 5.1: Troubadour cooldown buffed from 180s to 120s.
* 5.3: Potency buffs.  SW 300 → 350, RA 330 → 340, BS 230 → 240
* 5.4: Burst Shot potency buff.  BS 240 → 250
* The above changes do not substantially change the gameplay.  Early DoT snapshotting should be a little less aggressive, and Apex use/holding around adds should be more aggressive.

- - -

# Opener

## Prepull RS (recommended)

![prepull](https://cdn.discordapp.com/attachments/458951851610734595/884943142154014740/unknown.png)

#### Opener comparison:

* Strongest opener in general.
* This opener may not be usable at very high skill speed, since the BL and end-of-song timers will collide with the GCD timer as the first WM ends. It may also not be usable at high ping (see the note about the triple weave). Try it out!
* Is slightly harder to pull off.

**Things to note**:

* RS should be used prepull (slightly after the 1 appears in the countdown), so that the SB can be used exactly when the countdown hits 0.
* I recommend delaying the WM by a fraction of a second. At the end of the opener WM, if you have PP stacks and your DoT tick is slightly after the end of WM, you will likely be triple weaving BL PP MB in order to keep song and EA rolling as quickly as possible. You should test and make sure that you can actually pull off the PP in the middle there. If not (likely for ping reasons), you can instead do PP BL and then MB the next GCD. For those that can pull off the BL PP, it has a hidden benefit of letting you use up all your WM stacks even with a last-minute tick.
* If you have a potion, use it before RS (a bit before the 2 appears in the countdown).
* All Burst Shots are filler. If you get an RA proc, use RA instead of BS.
* Do not use RA in between SB and CB if you get a RA proc from the SB. Just let it go.
* If you have an RA proc when it’s time to IJ, you should still IJ. Let the RA proc go.
* If you have an RA proc ready when you would be using Barrage, instead use RA → Barrage → SW → RA → BL → IJ → EA etc. Do not use a BS between the Barraged RA and IJ in this case.
* Prioritize getting the 2nd BL on cooldown when it’s available (i.e. if you have a PP3 on that GCD, use the BL first unless you could lose a proc).
* Barrage timing can be flexibly moved earlier depending on party buffs. It’s important to catch all the raid buffs, but the earlier the better within that window. The timing in the opener is set to catch Brotherhood/Divi, but if you don’t have any buffs that go up that late, it can be done earlier with no harm. The IJ should not be moved earlier unless you have prepull cards, in which case you may need to do it before Barraging. The Barrage and IJ cannot be safely moved later without potentially causing the IJ to fall outside RS.
* Sidewinder cooldown can be moved earlier for the same reasons.  Shift it around to accommodate PP3, BL, and Barrage usage.
* Battle Voice cooldown is flexible if the party has classes that burst later.

## Prepull RS (ping-friendly)

![prepull ping friendly](https://cdn.discordapp.com/attachments/458951851610734595/884943576000245820/unknown.png)

#### Opener comparison:

* A prepull opener variant that is a tad weaker, but more compatible with higher SkS and more forgiving on ping.
* More familiar to those who played in Stormblood.

**Things to note:**

* If you have a potion, use it prepull (a bit before the 2 appears in the countdown).
* All Burst Shots are filler. If you get an RA proc, use RA instead of BS.
* Do not use RA in between SB and CB if you get a RA proc from the SB. Just let it go.
* If you have an RA proc when it’s time to IJ, you should still IJ. Let the RA proc go.
* If you have an RA proc ready when you would be using Barrage, instead use RA → Barrage → SW → RA → BL → IJ → EA etc. Do not use a BS between the Barraged RA and IJ in this case.
* Bloodletter cooldown is more forgiving in this opener, so if you have a PP3 when your 2nd BL comes off cooldown, use the PP3 first.
* Barrage timing can be flexibly moved earlier depending on party buffs. It’s important to catch all the raid buffs, but the earlier the better within that window. The timing in the opener is set to catch Brotherhood/Divi, but if you don’t have any buffs that go up that late, it can be done earlier with no harm. The IJ should not be moved earlier unless you have prepull cards, in which case you may need to do it before Barraging. The Barrage and IJ cannot be safely moved later without potentially causing the IJ to fall outside RS.
* Sidewinder cooldown can be moved earlier for the same reasons.  Shift it around to accommodate PP3, BL, and Barrage usage.
* Battle Voice cooldown is flexible if the party has classes that burst later. If you use BV later, move the first EA forward to double weave with WM.

- - -

# Utility Cooldowns

![battle voice](https://xivapi.com/i/002000/002601_hr1.png)\
  **Battle Voice**: Unless otherwise mapped out, it’s best to use this on cooldown and together with the final burst.

![troub](https://xivapi.com/i/002000/002612_hr1.png)\
  **Troubadour**: As of Shadowbringers, Troubadour no longer requires any particular song. It always gives 10% dmg reduction, but only for 15s. Due to its long cooldown (120s) and very powerful effect, it’s useful to map out this skill with your healers. Ask them where they want it.

![NM](https://xivapi.com/i/002000/002615_hr1.png)\
  **Nature’s Minne**: As of Shadowbringers, Minne now works on oGCD healing in addition to GCD healing. It’s still excellent for powering up Deploy + Adloquium, but can also be used in a pinch when a tank is about to eat several repeated hits.

![SW](https://xivapi.com/i/000000/000821_hr1.png)\
  **Second Wind**: Its heal amount is thankfully not based on our MND, so it actually heals for a decent amount. Great for healing up while doing long-range baited mechanics (e.g. Liquid Hell in Twintania).

![AL](https://xivapi.com/i/000000/000822_hr1.png)\
  **Arm’s Length**: It has a bit of an activation delay, so be sure to use it slightly before the knockback hits. Doesn’t work on all knockbacks.

![WP](https://xivapi.com/i/002000/002609_hr1.png)\
  **Warden’s Paean**: Debuffs that can be cleansed by Warden’s Paean have a glowing blue bar above the debuff icon. They’re not very common in higher level content, but keep an eye out for them. You should be first priority on cleansing debuffs because Warden’s is free to weave, compared to Esuna which is a GCD.

![hg](https://xivapi.com/i/000000/000848_hr1.png)\
  **Head Graze**: Anything that can be interrupted will have a pulsing red castbar.

- - -

# Advanced Gameplay

## RS Alignment Choice

![raging strikes](https://xivapi.com/i/000000/000352_hr1.png)

After the opener (i.e. starting from the second RS), you can elect to either align RS with the beginning of WM or the end. The tradeoff is that WM tends to have back-loaded damage, but Army’s Muse makes it easier to deal nine GCDs under RS.

Aligning RS with the beginning of WM is the **easiest choice, but is slightly worse for damage**. It ensures that you get nine GCDs under RS without needing any special delays, due to the speed buff from Army’s Muse. In particular, this plan is probably a good choice at low skill speeds. It’s also the easiest to remember.

You can float RS, using it two GCDs into WM and letting it slide farther back if your Barrage is forced back by natural RA procs. **I recommend this option. It’s still pretty easy but is a significant gain over using it at the very start of WM, and is almost as good as the hardmode option.** This catches some of the more valuable time of WM, while still easily hitting nine GCDs in RS due to partial help from Army’s Muse. You will still need to delay RS within the GCD.

Aligning RS with the ending of WM is the **hardest and riskiest choice, also requiring some minimum skill speed.** The end of WM, especially with the very last DoT tick, tends to have more PP usages, and you can also catch the 100 potency cast of MB itself. To do this, you use RS about 12 seconds into WM (around when it has 18 seconds remaining), in the second oGCD window of a GCD. If you do it early within the GCD, you risk missing the 9th GCD under RS, and if you do it late, you risk clipping. If either happens, you wipe out most if not all of the gains. Also, if you lose significant RS time at the end of the fight, that wipes out all the gains as well. Based on some early logs of mine, **it seems that RS now applies to self faster, making it extremely hard/impossible to get nine GCDs under RS at 2.47 or slower GCD** without the help of Muse. If this is the case for you, you should choose another option.

Late RS also has some less obvious tradeoffs with respect to buff alignment. It potentially makes the four minute alignment worse, especially if you drift your song rotation. However, it makes the three minute alignment better, since three minutes is 20s into the third WM. Also, if you have a NIN, doing second RS late gives you a tight window to snap the second and third tricks, whereas second RS early means you will probably early snap as the second RS is falling off and miss third trick.

## Iron Jaws

![ij](https://xivapi.com/i/002000/002608_hr1.png)

With the added chance to proc RA, there is now a choice of when to use IJ. If you plan to always use it on the last possible GCD, you risk wasting a RA proc chance. If you plan to use it on the second-to-last GCD, you end up using more IJs over the course of the fight. **It turns out these two plans are almost exactly equal in DPS in a vacuum, but using IJ as late as possible keeps better alignment with party buffs.** So, if you know that an early snap is coming in the future, you should plan to IJ on the second-to-last GCD of DoTs, and if you want to extend DoTs as much as possible to hit a buff window, you should plan to IJ on the last GCD of DoTs.

Deciding whether to snap buffs is a tradeoff between buffing DoTs, which tick for 900 potency over 30 seconds, and using additional IJs, which cost slightly more than 130 potency each (because you lose a buffed BS). **These are general guidelines, and could vary depending on what buffs are coming up later and what buffs are already on your DoTs**:

* Early DoT snapping depends significantly on whether you’re ending the buff window with an RA proc or not.

  * If you DON’T have an RA proc (IJ replacing a BS): **if your DoTs aren’t already buffed, and there are no buffs coming soon, for every 1% of buffs that are about to fall off you can snap your dots 1.5s early.**  So, for example, Brotherhood can be safely snapped for a gain just before it falls off if your DoTs have ~7s or less left on them.  The less time your DoTs have left, the bigger the gain.  If your DoTs already have buffs on them, or there are new buffs coming up soon, it’s less of a gain to early snap.
  * If you DO have an RA proc (IJ replacing a RA): **don’t early snap 5% of buffs, but 10% of buffs can be early snapped by about 10 seconds.**
* If your DoTs don’t already have any buffs on them, you should almost always snap 10% damage buffs or pairs of damage buffs once.  Do this naturally (as your DoTs are falling off) or as the buffs are falling off.
* Even if your DoTs have ~5s left on them when RS goes up, double snapping RS is basically not a gain, partly because you’d be expending two RS-buffed GCD slots that could be BS or even RA. Even if this only causes an extra half an IJ over the fight, it’s about even with adding 6 ticks of RS (compared to single snapping RS). If you have a natural IJ (from DoTs ending) right after RS goes up, and there are no other buffs at all, it’s a small gain to snap RS again just before it goes down.
* Crit buffs can be approximated as being about .5% damage for every 1% Crit chance.  So Chain and Litany are roughly as good as 5% damage buffs.

As a minor note, the devs seem to like putting 25s+ downtimes in fights. In such cases, if you have an RA proc going into the last GCD before downtime, it’s better to RA and then manually reapply DoTs after downtime. Otherwise, IJ on both ends.

## Procs in WM

|**WM** | **PP**|
|-|-|
|![wm](https://xivapi.com/i/002000/002607_hr1.png) | ![pp](https://xivapi.com/i/002000/002611_hr1.png)|

Unlike in Stormblood, there’s no way to raise the proc chance above 60%, so in general you should use Pitch Perfect at three stacks. Like in SB, **use PP2 early if you know you have an EA coming up next GCD concurrently with the DoT tick, or if the song is imminently ending.** This is especially important if your 2nd EA in WM is in the last few seconds, so you have PP available to make use of the guaranteed proc. If you are using EA very close to on cooldown, this will happen during your second WM! Be ready to use a PP2 at ~5s left on that second WM.

Note that because EA should be used on cooldown in every song, the EA timer will not be at the same time during every WM. If you would use an EA < 1s before transitioning from AP to WM, instead hold it for after the WM. This is to prevent you from getting a guaranteed proc and being unable to use it at the end of the song.

There’s no longer a need to triple weave Barrage EA PP. Avoid that triple weave by delaying EA in general, or delaying Barrage if you’re near the end of the fight (it risks delaying twice and messing up alignment due to the chance of a RA proc).

## Procs in MB

|**MB** | **Bloodletter**|
|-|-|
|![mb](https://xivapi.com/i/002000/002602_hr1.png) | ![bloodletter](https://xivapi.com/i/000000/000361_hr1.png)|

MB is a delicate dance between not losing procs, using EA on cooldown, and not clipping. At the very least, **it’s important to understand how the DoT timer works relative to the GCD timer.**

DoT ticks happen every three seconds, and the GCD timer is 2.5s or slightly less, so you can think of the tick as happening 0.5s “later” within the GCD every GCD, until it skips one entirely. It’s useful to learn to keep track of where the DoT timer is, relative to the GCD. If possible, try to do this through the WM to MB transition.

Make sure not to mash BL during the last ~1s of a GCD to avoid clipping. If a BL proc were to come up that late, the next GCD may not have a DoT tick at all, so it is perfectly safe to delay the BL to the start of the next GCD.

Using EA in MB can be tricky if you want to avoid losing procs. Here’s where it can be extremely valuable to know the DoT timer. If it’s early, it’s fine to use BL EA BL triple weaved (this is one of the only acceptable triple weaves). If it’s extremely late, you can mash EA BL fast enough that the DoT tick happens later. If the DoT timer is in the middle of the GCD, it’s acceptable to wait up to three GCDs for the DoT timer to move later. You shouldn’t need to wait more, even two GCDs is almost always enough, and the less you have to wait the better. Don’t wait on the first EA in MB if it would push it past the midpoint (i.e. if you would only get one EA in that MB).

## Song Transitions

|**WM** | **MB** | **AP**|
|-|-|-|
|![WM icon](https://xivapi.com/i/002000/002607_hr1.png) | ![mb icon](https://xivapi.com/i/002000/002602_hr1.png) | ![AP icon](https://xivapi.com/i/002000/002603_hr1.png)|

Due to the addition of Soul Voice, it’s more important than ever to minimize the amount of songless time, and avoid letting DoT ticks fall in songless time.

#### WM to MB transition:

If the DoT tick timer is very close (<.5s) to the end of the song, or you use a PP3 less than three seconds before the song ends, you can transition into MB early if it’s available. This is ping dependent, and at low ping it can be easier to make use of the last DoT tick in WM.

#### MB to AP transition:

Unlike the WM to MB transition, MB procs (BL) can be used after the song ends, so avoid cutting it short if there would be a DoT tick at the very end of MB. Other than that, just try to minimize songless time without clipping.

#### AP to WM transition:

Weave BS → WM → BS → RS → BS… if you’re doing early RS, or just BS → WM → BS if you’re doing late RS. In either case, do the transition when your MB cooldown is 30s or less, and your AP cooldown is 60s or less. **Wait at least 0.25s between the BS and WM to ensure you get 5 GCDs in Muse. At low skill speed (~2.47 or slower GCD), ideally wait even longer, up to half a second.** This should set up nicely for a PP MB double weave 12 GCDs later on the WM to MB transition, assuming full stacks of Army’s Muse. 

Be careful about double weaving during Army’s Muse.  Depending on your ping, it can cause clipping and cost you GCDs under Muse or GCDs under RS.

To reiterate from above, if you have an EA very close to this transition, save it for after the transition.

## Extending AP

![AP icon](https://xivapi.com/i/002000/002603_hr1.png)

This overlaps somewhat with the [Fight Mapping](#fight-mapping) section, but since this is the most common way to manipulate the song rotation, I wanted to spend some extra time on it.

Extending AP beyond 20s can be used to push back WM/RS/Barrage phases to line up with bursts. **You can think of it as pulling song time from the end of the fight/phase and moving it into the current AP.** You will also effectively move EAs into AP (where they are weakest). If you would end the fight in AP, you can usually do this mostly for free, potentially costing yourself some portion of Muse. Pulling time out of MB is acceptable if it gets you better alignment or some other gain (see below). I do not recommend losing WM/RS time unless you have a very good reason.

As an example, consider a fight that lasts around 7:45. Your party may elect to use 3-minute buffs at 0:10, 4:10, 7:10 and 2-minute buffs at 0:10, 2:10, 4:10, 7:10. In this case, you would want to line up WM with both the 4:10 and 7:10 bursts. You can do this by extending AP to the full 30s between four and seven minutes. At the cost of some MB time, you align your last WM/RS/Barrage with a powerful potion window.

Aside from alignment, there are other unplanned reasons to want to extend AP:

* Your BL timer is \~2-3s when you would enter WM. This will cause you to also have a BL timer of \~2-3s when you enter the next MB. But if you extend AP by ~4s to use BL before WM, you can buy yourself almost an entire Bloodletter.
* You aren’t at four stacks of AP at 20s in. The difference between a four stack Army’s Muse and three stack Army’s Muse can be over 100 potency, or even more if it causes you to lose a GCD under RS.
* Your EA comes off cooldown ~19s into AP. You would have to delay EA to avoid having an unusable PP proc. Delaying AP instead can cause you to make the PP usable.
* Your Barrage/RS has somehow drifted very far back within WM.

Note that if you planned your song alignment around raid buffs, extending AP could skew it slightly. But if multiple of the above cases are true, especially the first two (those are much bigger), **it can be worth it to sacrifice some alignment.**

## Refulgent Arrow Procs

![ra](https://xivapi.com/i/002000/002616_hr1.png)

Don’t hold RA procs for even a single GCD to catch upcoming buffs. The difference between a buffed RA and a buffed BS is too small. 

If you have an RA proc as Barrage comes up, delay the Barrage unless it would fall outside of Raging Strikes. With proper gameplay, this shouldn’t happen on a fight of reasonable duration.

While manually applying DoTs, if you get a RA proc from CB, save it and use it after SB.

## Apex Arrow

![aa](https://xivapi.com/i/002000/002619_hr1.png)

Apex Arrow charges to full roughly every 60s (20 DoT ticks, average 4 gauge per DoT tick from both DoTs combined, plus 20 gauge from 4 EA).

While in general, it’s best to use Apex Arrow at 100 gauge, there is some flexibility in its usage. It’s a gain to use early at 90 gauge to hit a 10% buff, or to delay up to two DoT ticks (2 GCDs if you’re not sure) to hit a 10% buff.  This will most commonly occur around Raging Strikes.  Against multiple targets, you can and should use Apex Arrow earlier because of the greater risk of overcapping: at 95 gauge for two targets, 90 gauge for three targets, or 85 for 4+ targets.

Also, if you’re on the last Apex Arrow of the fight (under ~30s left in the fight, so not long enough to charge a worthwhile Apex Arrow), you can delay as long as you like in order to fit it into buff windows.

If a multi-target phase is coming up within \~20s and your Apex Arrow hits full, save it for the start of the phase. As a multi-target phase is ending, use Apex Arrow if you are at more than \~40 gauge (beware of overkill!). These numbers have a LOT of dependence on the wait time, number of adds, lifetime of adds, and the duration of the fight after the adds phase ends. Optimally, it should be mapped out on a per-fight basis. Test it yourself - if you notice yourself waiting nearly long durations and then dumping a low-gauge Apex Arrow at the end of the adds phase, consider burning the Apex Arrow instead of waiting.

Some rules of thumb for applying DoTs vs using Apex at the start of a multi-target phase: If you enter a two target phase with 100 gauge, apply DoTs first and then use the Apex Arrow. With ~3-5 targets, apply a single DoT to each and then Apex. On multi-target phases with a large number of targets, Apex Arrow first, then DoTs. Again, this is fight-dependent, and especially dependent on the duration of the phase.

## Fight Mapping

Mapping a fight involves coming up with song timings and IJ timings to fit downtime, adds phases, and party burst phases. Things to consider:

* In general, the priorities are to avoid going songless, then maximize the amount of time spent in WM, and then maximize the amount of time spent in MB.  If you would end the fight during AP or near the beginning of WM, just go into WM as soon as it comes off cooldown during the last AP.
* The most straightforward way to adjust the song rotation is by extending AP beyond 20s duration. See the Extending AP section.
* MB (and to a lesser extent, AP) should be lined up with adds phases that have at least three targets. WM and MB should be lined up with adds phases that have two total targets.
* If you’re playing in a static that is optimizing, you can usually set all buffs except AST cards to happen at fixed times. This allows you to plan the entirety of your IJs out for the fight.
* If you could gain an extra Barrage by misaligning RS from WM on a short fight (e.g. Kefaust), it’s usually good to do so.
* If at all possible, ensure that 2nd (and 3rd) potions, which will likely be on raid buff windows, line up with both WM and Barrage, unless it costs a use of WM/Barrage.

- - -

# AoE

Against 2 targets, the relative song strength is WM > MB > AP. Against 3-6 targets, the song strength order is MB > WM > AP. Against >6 targets, the song strength order is MB > AP > WM. This isn’t necessarily the order you should use your songs in dungeons, it depends on the pull sizes.

In dungeons, in MB, double DoT just about everything that will live for nearly the full DoT duration. Mix in Apex Arrows as gauge gets above 90 in pulls of about three mobs, above 85 in larger pulls. Once enemies are too low to get most (more than ~24s) of a DoT duration, switch to QN as filler.

In AP/WM, double DoT pulls of up to six mobs. With larger pulls, apply just a few DoTs instead (including double DoTs on the center mob for Shadowbite) and go straight to spamming QN.

If you’re doing a multi-pack pull, it’s best to double DoT everything while walking. Make sure you have a song up while this is happening, preferably AP or WM, so you can generate Soul Voice.

Shadowbite is a potency gain starting at two targets.  Don’t forget that there’s a bit of a delay after you use your second DoT before it gets counted by Shadowbite, so wait a moment before using it.

- - -

# Clarified Tooltip Reference

Tooltips here are rewritten from the official translations to clarify some portions that aren’t obvious in the official job guide.

#### GCDs

|                                                         |                      |                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![bs](https://xivapi.com/i/002000/002618_hr1.png)           | Burst Shot (BS)      | Delivers an attack with a potency of 250.   Additional Effect: 35% chance of becoming Straight Shot Ready for 10s.                                                                                                                                                |
| ![ra](https://xivapi.com/i/002000/002616_hr1.png)           | Refulgent Arrow (RA) | Delivers an attack with a potency of 340.   Can only be executed when Straight Shot Ready.                                                                                                                                                                        |
| ![stormbite](https://xivapi.com/i/002000/002614_hr1.png)    | Stormbite (SB)       | Deals wind damage with a potency of 100.   Additional Effect: Deals wind damage over time, with a potency of 50 every 3s for 30s.   Additional Effect: 35% chance of becoming Straight Shot Ready for 10s.                                                        |
| ![caustic bite](https://xivapi.com/i/002000/002613_hr1.png) | Caustic Bite (CB)    | Delivers an attack with a potency of 150.   Additional Effect: Deals damage over time, with a potency of 40 every 3s for 30s.   Additional Effect: 35% chance of becoming Straight Shot Ready for 10s.                                                            |
| ![iron jaws](https://xivapi.com/i/002000/002608_hr1.png)    | Iron Jaws (IJ)       | Delivers an attack with a potency of 100.   Additional Effect: If the target is suffering from a Caustic Bite or Stormbite effect inflicted by you, the effect duration is reset to 30s.   Additional Effect: 35% chance of becoming Straight Shot Ready for 10s. |
| ![apex arrow](https://xivapi.com/i/002000/002619_hr1.png)   | Apex Arrow           | Consumes all Soul Voice to deliver an attack with a potency of 6 per Soul Voice expended (up to 600) to all enemies in a straight line before you. 25y range.   Minimum Soul Voice Gauge Cost: 20.                                                                |
| ![QN](https://xivapi.com/i/000000/000360_hr1.png)           | Quick Nock (QN)      | Delivers an attack with a potency of 150 to all enemies in a cone before you.   Additional Effect: 30% chance the recast timer for Bloodletter and Rain of Death will be reset                                                                                    |

#### Songs + Repertoire

|                                                           |                        |                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![WM icon](https://xivapi.com/i/002000/002607_hr1.png)        | Wanderer’s Minuet (WM) | Deals unaspected damage with a potency of 100.   Additional Effect: For the next 30s or until another song is used, 40% chance to grant Repertoire when damage over time is dealt by Caustic Bite or Stormbite.  Repertoire Effect: Allows execution of Pitch Perfect.  Can be stacked up to 3 times.  Additional Effect: Nearby party members get +2% to critical strike chance.  Range: 30y  Recast time: 80s      |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![pp](https://xivapi.com/i/002000/002611_hr1.png)             | Pitch Perfect (PP)     | Delivers an attack with a potency of 100 when Repertoire stack is 1, 250 when Repertoire stack is 2, and 450 when Repertoire stack is 3.   Can only be executed when the Wanderer's Minuet is active. Consumes all Repertoire.   Recast time: 3s                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![mb icon](https://xivapi.com/i/002000/002602_hr1.png)        | Mage’s Ballad (MB)     | Deals unaspected damage with a potency of 100.   Additional Effect: For the next 30s or until another song is used, 40% chance to grant Repertoire when damage over time is dealt by Caustic Bite or Stormbite.  Repertoire Effect: Resets the recast timer of Bloodletter and Rain of Death.  Additional Effect: Nearby party members deal 1% increased damage.  Range: 30y  Recast time: 80s                       |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![bloodletter](https://xivapi.com/i/000000/000361_hr1.png)    | Bloodletter (BL)       | Delivers an attack with a potency of 150.  Shares a recast timer with Rain of Death.  Recast time: 15s                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![ROD](https://xivapi.com/i/002000/002605_hr1.png)            | Rain of Death (RoD)    | Delivers an attack with a potency of 130 to target and all enemies nearby it.  Shares a recast timer with Bloodletter.  Recast time: 15s.                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![AP icon](https://xivapi.com/i/002000/002603_hr1.png)        | Army’s Paeon (AP)      | Deals unaspected damage with a potency of 100.                                                                                                                                                                                                                                                                                                                                                                  <br>Additional Effect: For the next 30s or until another song is used, 40% chance to grant Repertoire when damage over time is dealt by Caustic Bite or Stormbite.  Repertoire Effect: Reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 4%  Can be stacked up to 4 times.  Additional Effect: Nearby party members get +3% to direct hit chance.  Range: 30y  Recast time: 80s |
| ![EAP](https://xivapi.com/i/005000/005314_hr1.png)            | Enhanced Army’s Paeon  | During Army’s Paeon or within 30 seconds of Army’s Paeon ending, using the Wanderer’s Minuet or Mage’s Ballad will grant Army’s Muse for 10s. Army’s Muse reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay, depending on the number of Repertoire stacks in the previous Army’s Paeon.  1 Repertoire: 1%  2 Repertoire: 2%  3 Repertoire: 4%  4 Repertoire: 12% |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![empyreal arrow](https://xivapi.com/i/002000/002606_hr1.png) | Empyreal Arrow (EA)    | Delivers an attack with a potency of 230. Grants the effect of Repertoire if used during the Wanderer’s Minuet, Mage’s Ballad, or Army’s Paeon.  Recast time: 15s                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Other oGCDs

|                                                           |                     |                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![barrage](https://xivapi.com/i/000000/000353_hr1.png)        | Barrage             | Triples the number of strikes for the next single-target weaponskill used within 10s. Additional effects are not tripled.  Additional Effect: Grants Straight Shot Ready for 10s.  Recast time: 80s                                                                                                                                              |
| ![raging strikes](https://xivapi.com/i/000000/000352_hr1.png) | Raging Strikes (RS) | Increases damage dealt by 10% for 20s.  Recast time: 80s                                                                                                                                                                                                                                                                                         |
| ![sidewinder](https://xivapi.com/i/002000/002610_hr1.png)     | Sidewinder (SW)     | Delivers an attack with a potency of 100.  Additional Effect: If the target is suffering from a Caustic Bite or Stormbite effect inflicted by you, Sidewinder potency is increased to 200 for one effect, or 350 for both.  Shares a recast timer with Shadowbite.  Recast time: 60s                                                             |
| ![SHADBITE](https://xivapi.com/i/002000/002617_hr1.png)       | Shadowbite          | Delivers an attack with a potency of 100 to target and all enemies nearby it.   Additional Effect: If the primary target is suffering from a Caustic Bite or Stormbite effect inflicted by you, Shadowbite potency on all targets is increased to 160 for one effect, or 220 for both.  Shares a recast timer with Sidewinder.  Recast time: 60s |

#### Utility

|                                                         |                    |                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![battle voice](https://xivapi.com/i/002000/002601_hr1.png) | Battle Voice (BV)  | Increases direct hit rate of all nearby party members by 20% for 20s. Does not affect the user.   Can only be executed while singing Mage's Ballad, Army's Paeon, or the Wanderer's Minuet.  Recast time: 180s      |
| ![troub](https://xivapi.com/i/002000/002612_hr1.png)        | Troubadour (Troub) | Reduces damage taken by self and nearby party members by 10% for 15s.  Effect cannot be stacked with Machinist's Tactician or Dancer's Shield Samba.  Recast time: 120s                                             |
| ![NM](https://xivapi.com/i/002000/002615_hr1.png)           | Nature’s Minne     | Increases HP recovery via healing actions for self or the target party member by 20% for 15s.  Recast time: 90s                                                                                                     |
| ![SW](https://xivapi.com/i/000000/000821_hr1.png)           | Second Wind        | Instantly restores own HP.  Cure Potency: 500  Recast time: 120s                                                                                                                                                    |
| ![AL](https://xivapi.com/i/000000/000822_hr1.png)           | Arm’s Length       | Creates a barrier nullifying most knockback and draw-in effects for 6s.  Additional Effect: Slow +20% for 15s when barrier is struck.  Recast time: 120s                                                            |
| ![hg](https://xivapi.com/i/000000/000848_hr1.png)           | Head Graze         | Interrupts the use of a target's interruptible action.  Recast time: 30s                                                                                                                                            |
| ![REPELL SHOT](https://xivapi.com/i/000000/000366_hr1.png)  | Repelling Shot     | Jump 10 yalms away from current target. 5y range.  Cannot be executed while bound.  Recast time: 30s                                                                                                                |
| ![WP](https://xivapi.com/i/002000/002609_hr1.png)           | The Warden’s Paean | Removes one cleansable detrimental effect from self or target party member. If there are no such effects, instead adds a barrier that absorbs the next cleansable detrimental effect within 30s.   Recast time: 45s |

- - -

# Credits

Visit us on [The Balance Discord](https://discordapp.com/invite/thebalanceffxiv)!

* Verzell Varion \[Adamantoise] - Discord: infinitestory#6021 - main guide author
* Im’hotep Rah \[Goblin] - Discord: nerdler33#2017 - contributor, theorycrafter
* Sana Cetonis \[Sargatanas] - contributor, theorycrafter
* Ellunavi Sevald \[Sargatanas] - simulator writer
* Yumiya Nagatsuki \[Behemoth] - reviewer, theorycrafter
* Elya Kura \[Ragnarok] - reviewer, styling + graphics