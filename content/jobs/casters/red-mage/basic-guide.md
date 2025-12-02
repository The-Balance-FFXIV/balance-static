---
title: Basic Guide
card_header_image: /img/jobs/rdm/lanaresized.png
authors:
  - Balance-RDM-Staff
patch: "7.2"
lastmod: 2025-03-24T00:00:00.000Z
changelog:
  - date: 2021-10-26T01:24:41.469Z
    message: Created page
  - date: 2022-01-02T20:49:23.183Z
    message: Updated for Endwalker
  - date: 2023-06-10T03:34:39.485Z
    message: No changes, updated patch number
  - date: 2024-07-18T22:31:08.446Z
    message: Updated for Dawntrail with preliminary version
  - date: 2025-03-24T20:09:08.609Z
    message: Updated for 7.2
---
# Introduction

This guide aims to concisely cover a basic overview of the Red Mage changes brought with Dawntrail along with an introduction to new rotation and opener concepts. A new guide with deep dives into advanced concepts and applications of theory for Red Mage is being worked on as of patch 7.2 being released. If you have questions after reading the guide, feel free to ask in the **\#rdm_questions** channel on [The Balance server.](https://discord.gg/thebalanceffxiv)

## TL;DR changes in playstyle from Endwalker for raiding

This guide will not go over the changes and tooltips which can be read from the official FFXIV website: <https://na.finalfantasyxiv.com/jobguide/redmage/>. In terms of gameplay in raids:

* The job mostly plays the same on a basic level (cast spells > maximize melee combos, in buffs if possible > maximize oGCD uses).
* The new Acceleration effectively grants us two instant-cast GCDs. New Acceleration and Grand Impact have a lot of optimization potential, but the fundamental play is to avoid overcapping, save one charge for movement, and yes you can use it in downtime (ideally around 15 seconds before the boss is targetable).
* oGCD alignment is trickier to manage due to Acceleration changes. We will primarily rely on the 40-second Swiftcast and stricter combo timings instead, though Acceleration can be used as a “temporary” fix for preventing oGCD drift.
* Scorch and Resolution take priority over Grand Impact on our hotbar when all of these spells are up, but once they are used, Grand Impact will replace Jolt III again.
* Grand Impact does not consume Dualcast, Swiftcast, or Acceleration’s instant-cast buff.
* Manafication rush is even better than before because in addition to an extra combo, it now also means +1 use of Prefulgence (1000 potency AOE oGCD). Most Prefulgence uses can be held for buffs, even when rushing Manafication.
* Downtime Manafication, however, has been severely nerfed since it no longer grants mana by itself. It may still have very niche and situational use cases, but this will depend heavily on encounter design.
* Our AOE Enchanted Moulinet combo now costs 50|50 mana.

# Basics

## Mana gauge

Red Mage casts spells to build black and white mana gauges to 50|50 or higher (capped at 100|100), and then spends that to use a melee combo with powerful finisher spells. Red Mage’s job gauge, the Balance Gauge, displays the current black mana and white mana available. 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcp_TWbOUskEgNhXEW-0F3EUuR7CAYDq29lA1Nj2vFEQGVF2RQDNSJvM0Vah6cA-Jpyszt-CfURbUTrIjQeWUHHfMTkq04Z0wYIauy7HvWRyld_xSqMOWNQWN3gctE6Lx3wnRo-z1h2z8og-6x4x7TtYC8z?key=g0mOyOwaD_13c10-GmC5Xg)

* Verthunder III, Verfire, Verflare, and Verthunder II give **black mana**.
* Veraero III, Verstone, Verholy, and Veraero II give **white mana**.
* Jolt III, Impact, Grand Impact, Scorch, and Resolution give **both at the same time** (but at slightly lower amounts of each).

**In general, avoid overcapping mana** (outside of some fight-specific scenarios in Ultimates or adds phases where we are saving resources for the next phase). Furthermore, the gap between black and white mana gauge numbers need to be kept smaller than 30. Otherwise, the Balance Gauge crystal will change color and the lower mana will accumulate mana at half the usual rate until it is rebalanced, which will delay a future melee combo and potentially result in a major DPS loss. 

## GCD spells and Dualcast

Red Mage has two types of spells: what we refer to as short casts (2s cast time at base spell speed, slightly lower damage) and long casts (5s cast time at base spell speed, slightly higher damage, but much longer to cast). Both have 2.5 recast timers at base spell speed.

* **Short cast**: Jolt III, Verfire, Verstone, Verthunder II, Veraero II, Vercure (utility)
* **Long cast**: Verthunder III, Veraero III, Impact, Verraise (utility)

A quick review of the Dualcast tooltip and a few minutes of in-game experimentation or doing the Red Mage job quests will likely be more effective than explaining it in text. Hard cast a spell, Dualcast buff is enabled, then the next spell will be instant cast (and consume the buff) assuming no other interferences.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXehWrxnBNXZ5Le7M_H_hdiCXgtEehR3SILkfwTs4wS0LzqKOlR9WGnuKzQ5txLqwn8CrwdpUlrupwBUWHaS2vemyDAMrZOcp0UnO2Arf-tgEhTT3mR-OvrXxaZTfM7koYE-ndmi5C74JQ_F0lLBwLRvH23E?key=g0mOyOwaD_13c10-GmC5Xg)

The key thing to understand here is that outside of pre-casting in the opener, we always hardcast our short cast damage spells, and use instant-cast buffs (Dualcast, Acceleration, or Swiftcast) on long cast spells to bypass the 5 second (or longer for Verraise) cast time. This is also where we weave up to two oGCDs to avoid clipping our GCD. 

* **1-2 targets**: Verfire or Verstone (Jolt III if neither available) > Verthunder III or Veraero III (whichever does not have a proc, or has lower mana)
* **3+ targets**: Verthunder II or Veraero II (whichever has lower mana) > Impact

Note on 2 targets: Impact does the same potency on two targets (210 potency \* 2 = 420) as Verthunder III or Veraero III does on a single target (420 potency) with the same total mana generation, but the added proc chance from Verthunder/aero III makes them theoretically very slightly better in a vacuum, though Impact can have situational use for HP balancing purposes. However, if Impact is boosted by Acceleration, it becomes 260 potency \* 2.

## Enchanted melee combos

Upon accumulating 50|50 mana, we are able to unleash a melee combo, the most powerful tool in our rotation. With sufficient mana, our weaponskills become enchanted weaponskills, which are significantly more powerful than their normal versions, deal magic damage, and generate mana stacks that allow us to access our hardest hitting finisher spell combos (Verflare/holy, Scorch, Resolution). The first part of our enchanted weaponskill combos for burst damage are:

* **1 to 2 targets**: Enchanted Riposte > Enchanted Zwercchau > Enchanted Redoublement
* **3+ targets**: Enchanted Moulinet > Enchanted Moulinet Deux > Enchanted Moulinet Trois

Our Verflare/holy > Scorch > Resolution combo that follows directly after does more damage than other spells in our kit for both single target and AOE scenarios. As such, maximizing Red Mage’s damage starts with maximizing the number of melee combos we get per encounter, followed by putting as many as possible under buffs and/or potion(s).

### Enchanted Reprise

In addition to our burst damage combos, we also have Enchanted Reprise, an instant-casted ranged weaponskill that consumes 5|5 mana. As of patch 7.05, it has three main uses:

1. **Emergency movement**
2. **Last hitting a boss at the end of a fight**
3. **Niche, advanced optimization for small potency gains**

That said, using Enchanted Reprise results in a mana loss, and delays a future melee combo by approximately 3 GCDs (~7.5 seconds): anywhere between 4-6 mana is lost from the opportunity cost of not casting a spell over the same 2.5 seconds, and an additional -10 mana is lost immediately from the skill itself. The more we use it, the more likely we are to misalign or lose a future melee combo, which is a major DPS loss. However, two uses of Enchanted Reprise results in a 20-40 potency gain over a standard Dualcast pair.

* **Jolt III Dualcast: 360 + 440 = 800p**
* **Verfire/stone Dualcast: 380 + 440 = 820p**
* **Two Enchanted Reprises: 420 + 420 = 840p**

This means that when you know you will no longer be able to gain an additional melee combo and have your mana levels planned out, a few additional uses of Enchanted Reprise is technically a gain over Dualcasting. This has interesting implications for advanced Red Mage optimization. Technically, it can also be used as a substitute to Swiftcast for oGCD alignment, but that is not recommended in standard play due to the terrible habits that could build, and it should not be used as a crutch (focus instead on mastering Swiftcast, melee combo timings, and temporary fixes via Acceleration). 

For standard play, it is best to stick to the three main uses mentioned.

# Understanding our oGCD abilities: priorities, alignment, buffs

## Embolden and Vice of Thorns

Embolden is Red Mage’s party-wide damage buff. Embolden has a recast timer of 120 seconds and buffs all damage done by party members by 5% for 20 seconds, while buffing our personal magic damage by 5% for 20 seconds. **Embolden should be used on cooldown to align with all other two minute party buffs, unless a specific buff delay is agreed upon by the entire party.** Do not delay using Embolden to align with your own rotation.

At level 92, Embolden grants Thorned Flourish upon executing Embolden, which allows us to cast Vice of Thorns once within the next 30 seconds. In most scenarios, it is simply best to use it under buffs, though it can occasionally be saved for more AOE damage.

## Manafication and Prefulgence

Manafication is an ability with a 110s cooldown that allows us to use a melee combo without consuming mana. Specifically, it grants three stacks of Magicked Swordplay, each stack allowing us to use a melee combo at no mana cost while the buff is up. The ability also gives us a 5% magic damage buff with six stacks that lasts 30 seconds, which buffs the next six GCDs by 5%. This damage buff should generally be used on our melee combo, as it is the strongest burst window Red Mage has. 

At level 100, we also gain a new oGCD ability: **Prefulgence**, which is our hardest hitting oGCD at 1000 potency for the first enemy, and 60% less for all remaining enemies. It is enabled after the sixth Manafication stack is consumed, which grants us the Prefulgence Ready buff for 30 seconds and replaces Manafication on our hotbar until used. 

In general, Prefulgence should be used in buffs whenever possible. If you’re unsure about whether you can hold Prefulgence long enough for the next buff window, simply compare the timer with your Embolden cooldown timer, which should be aligned with the party: if Embolden is coming up in 15 seconds and the Prefulgence Ready buff has 25 seconds left on the timer, then it will easily be available for the upcoming buff window.

The 110s cooldown on Manafication often causes confusion on whether it should be held for Embolden or used on cooldown, but **in fights with unknown killtimes, using Manafication on cooldown is often the better choice from a risk vs reward perspective.** That is because the cost of losing a full additional use is higher than misaligning it (due to the power of a full combo plus Prefulgence), and when rushing Manafication, we can still always do 1-2 normal melee combos (and usually Prefulgence) under buffs anyway.

That said, saving Manafication for raid buffs is easier to execute. If you prefer an easier playstyle and are willing to gamble on losing a use of Manafication, you can do that if you wish as long as you are aware of the potential downside. Ultimately, the "optimal" choice depends on the encounter and killtime, so you should be prepared to learn both.

Here is an image showing the gap between both cooldowns, and why the longer a fight goes, the higher the chance of gaining an additional use:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfUxuDB9S2726AafGsmUcDyQaI9ndIzSm8NI00s-CnbUpib66re4H_9G4AcZrVDL_3vRdTzAVgSsifUiA2FroMHvoI3jKLLBJsofQx4qoRJ9iuoUUhIWh3qxdDm7MTp2XQo4Xmny8iSu4YjKQyOzKOeiqwL?key=g0mOyOwaD_13c10-GmC5Xg)

In general, do not use Manafication during downtime. There is niche optimization potential there that may be applicable in certain encounters, but is unnecessary for standard play.

## Core damaging oGCDs: Fleche, Contre Sixte, Engagement, and Corps-a-corps

Red Mage has several oGCD abilities that are simply used for extra damage. Maximize uses first, then consider putting them into raid buffs or potions second. Our main damaging oGCD abilities which have carried over from Endwalker are the following, in order of highest importance (most damage) to lowest (least damage):

* Fleche
* Contre Sixte
* Engagement or Displacement (two charges)
* Corps-a-corps (two charges)

These abilities are simply to be used on cooldown according to the above priority. The more uses of them we get, the better. Because none of these abilities follow a 30 second cycle (Fleche’s cooldown is 25 seconds and the other three have 35 second cooldowns), raid buffs are a secondary consideration, and holding these abilities for too long risks lost uses. You can afford to hold a single charge of Engagement/Displacement and Corps-a-corps for buffs for a bit of bonus party damage, but make sure to never overcap on both charges.

Engagement and Displacement share cooldowns. **We primarily use Engagement in our rotation instead of Displacement due to the 15-yalm backflip being risky in a lot of raid scenarios or arenas.** Corps-a-corps also has a gap closer effect, so be careful about using it at the wrong time to ensure you don’t accidentally dash into an AOE.

## Swiftcast and oGCD alignment

Swiftcast ensures that the next spell we cast is instant, which helps with movement. We should generally only use this for Verthunder/aero III, Impact (for AOE), or if we need a slightly quicker Verraise to save a run. That said, its primary purpose in our rotation should be for **keeping our oGCDs aligned and preventing drift: especially of Fleche, Contre Sixte, and Embolden.** Using Manafication on time is also important but there is usually a few more seconds of leeway, even when rushing.

For those that did not play Red Mage in Endwalker, here’s how it works: We typically weave oGCDs after our Dualcasted instant cast spell, which occurs every two casts (2.5 sec + 2.5 sec = 5 sec if no spell speed). Our oGCD cooldowns are in multiples of 5 (25 for Fleche, 35 for Contre Sixte, 120 for Embolden, and so on). This means if we stand there casting spells forever, our oGCDs will theoretically continue to come off cooldown during the instant cast part of our Dualcast, and not mid-hardcast.

However, our melee combo swaps this Dualcast rhythm: at base spell speed, our three melee hits amount to 5.2 seconds (1.5 + 1.5 + 2.2), and the three combo finisher spells amount to 7.5 seconds. This adds up to 12.7. For purposes of simplifying oGCD alignment, you can even think of it as 12.5, which is nonetheless not even close to a multiple of 5. This means the next time our oGCDs become available, assuming full uptime, they will come up while we are hardcasting.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXd0jbxj6nPEzNruCdBpLCQaMwTCvDRAakra9tTxWWjur1ZYdwd-wewu3z0rZ4GffjTR_1rYLo4Sl4Ct2xYx6oPzH45YTHHTDZxmvS_-ZHIS2UrzS4GIIzkqkWjuY0tEqNspgmG9t4CfFTuM7GOYdmyqkXCm?key=g0mOyOwaD_13c10-GmC5Xg)

There are further complexities such as weaving during melee combos (try to avoid weaving an important oGCD after Enchanted Zwercchau) and some spell speed considerations when in progression gear, but that’s the general idea. This is where Swiftcast comes in: it allows us to cast a spell like Verthunder/aero III instantly without having to prepare Dualcast. Add a single 2.5 spell to the ~12.5 melee combo, and we’re at 15: a multiple of 5.

**The more general rule of thumb is to use it before or after a single or triple combo (but not double combo). It can also be used for Verraise if urgent recovery is needed.**

This may seem complicated at first, but it’s fundamental to playing the job well because **maximizing Fleche and Contre Sixte uses while keeping Embolden aligned with the group is key to optimizing Red Mage.** Practice on a dummy on a 2.48 GCD or slower to get an idea, and eventually you should notice Fleche, Contre Sixte, or at times other oGCDs coming up inconveniently in the middle of a cast. The more this happens across a raid encounter, the more likely you are to throw away a significant amount of damage.

## Acceleration and Grand Impact

In Dawntrail, Acceleration is an ability with a lot of features. The tooltip states:

* Ensures the next Verthunder III, Veraero III, or Impact can be cast immediately. (Duration: 20s)
* Additional Effect: Increases the potency of Impact by 50
* Additional Effect: Ensures Verthunder III and Veraero III trigger Verfire Ready or Verstone Ready respectively
* Additional Effect: Grants Grand Impact Ready (Duration: 30s)
* Maximum Charges: 2

Grand Impact Ready, a new effect we get from a level 96 trait (Enhanced Acceleration II), allows us to cast **Grand Impact**, another instant-cast GCD AOE spell that hits the first enemy for 600 potency and 60% less for all remaining enemies. It also increases both black mana and white Mana by 3. Grand Impact will also replace Jolt III and Impact on the hotbar until used. In short:

* Do not overcap on charges. We now want to maximize uses because of the DPS gain from Grand Impact.
* Save one charge for movement.
* To avoid complicating oGCD alignment, we can default to using the instant-cast spell and Grand Impact back-to-back for movement. It can also be used as a temporary fix for oGCD alignment issues (keep the Fleche/Contre Sixte/Embolden cooldowns running) if Swiftcast and a melee combo are not available.
* It can be worth using under buffs if we are only doing a single combo under buffs, but this is not a priority for fundamental play. Learn to maximize uses and keep full uptime with movement first.
* Generally, we can use Acceleration during downtime as long as the boss will be targetable in 15 or so seconds (we can re-open with an Acceleration-boosted GCD, a Dualcasted GCD, and then Grand Impact for three instant casts in a row).
* A slightly advanced application of Acceleration is to use it with one proc active when you need to imminently change alignment and do not have Swiftcast available. By doing this, you can use the Verthunder/aero of the opposite element of your proc, giving you both procs and guaranteeing that you can delay using Grand Impact by at least 10 seconds. An example of this being executed can be found in [this clip](https://www.twitch.tv/cyclopsdragon/clip/SlickSweetSoybeanM4xHeh-Akk-fFqS0WdRmTxD).

# Party utility and recovery

## Addle and Magick Barrier

These are free abilities used to reduce incoming damage to the party. **Note that in raiding, these should not be considered optional**. They are oGCDs that can significantly help the party’s survivability, being mandatory in Ultimates and at a lower item level in Savage.

**Magick Barrier** provides 10% partywide magical mitigation and a 5% boost to healing actions (including oGCDs) for ten seconds. It’s particularly valuable in heal checks and in situations where the party is together but the boss is untargetable.

**Addle** (role action) lowers the target’s physical damage dealt by 5% and magic damage dealt by 10% for 15 seconds at level 100. Since it targets the boss, it is particularly useful for when the party is spread out. While physical damage tends to be less common than magic damage, there may be instances that the physical damage reduction can be useful too (e.g. a magical tank buster followed by physical autos).

Over the course of an encounter, we ultimately want to work with our party to maximize the value we gain from these abilities. Another important thing to note about mitigation is to always be consistent with application. Inconsistent mitigation can be worse than having no mitigation as it can cause unexpected deaths in early progression where health and damage margins are tight. If you’ve made a mistake and are unable to apply your mitigation at expected times, communicate with your party to see if the missing 10% can be made up with shielding or another form of % mitigation.

## Vercure

Since Vercure is a GCD and comes at the expense of our DPS spells whenever the boss is targetable (which do damage and generate mana for our melee combos), **we do not use this spell for sustained healing in active combat**. The primary uses are:

* Casting Vercure during downtime to proc Dualcast, which allows us to instantly cast Verthunder III or Veraero III when the boss returns.
* Healing ourselves or party members when the boss is untargetable if needed (no DPS loss because there’s no tradeoff).
* Vercure’s heal is potent enough to be useful during clutch moments, such as saving someone who is low HP from dying to a raidwide when the healers are busy healing AoE damage. This tends to take a high degree of raid awareness and reaction speed to pull off, and can be seen as a more advanced maneuver.

## Verraise

A resurrection spell that can be instant cast via Dualcast or Swiftcast with a high MP cost (2,400), which is very useful for saving runs from wiping. Red Mage is often chosen in progression for this ability because you can raise multiple people back-to-back with Dualcast and Swiftcast. For priority:

* **Red Mage should res first in progression**, because healer MP tends to be more valuable for healing while still learning the fight. Use Super-Ethers to support this.
* **In kill attempts or reclears where the damage starts to matter, it should be case by case**. Healers should have their plans better settled with some reserve MP, and there are considerations like if we are doing melee combo, is it a burst window, does the healer need to Swiftcast a heal somewhere, etc.
* **In a static**, communicate with and develop some chemistry with your healer. 
* **In party finder**, default to raising if you need to save the run or the healers are handling heal checks, but consider allowing your healer to Swiftcast raise if they are able to and there is no immediate urgency.

# Other Role Actions

## Sleep

This is unlikely to find much use in raids or dungeons. Raid bosses are generally immune to status effects, and hitting a sleeping normal mob will wake them up anyway. However, Sleep can have some niche uses disabling enemies in the overworld or certain types of instanced content, like in Eureka. This spell can proc and consume Dualcast, and can also be Swiftcast.

## Surecast

Nullifies most knockback and draw-in abilities from enemies. Not only will this be useful for surviving mechanics, but it can also help us ensure our casts don’t get interrupted. Some mechanics explicitly ignore Surecast, but there is no good way of telling ahead of time.

## Lucid Dreaming

RDM’s rotation is MP negative so Lucid Dreaming is necessary to keep our GCD rolling. An advisable time to press it is when you have around 70% MP remaining. Don’t wait until MP runs out, because we may suddenly need to Verraise people to save the party from wiping.

# Mana vs potency?

**“Potency per mana” is not a realistic or practical metric that can be used to make rotational decisions.**

It’s common to wonder whether mana can be understood as potency/damage, and many have attempted “potency per mana” calculations through some version of dividing a melee combo’s potency (or potency difference vs casting spells over the same period of time as an opportunity cost) by the mana cost. However, there are problems with this:

* We do not have a reliable gauge spender with any kind of flexibility. We can only convert mana into damage at 50|50 mana (leaving aside much worse broken melee combos or Enchanted Reprise). Likewise, a combo at 75|75 mana does not do more damage than a combo at 50|50 mana.
* Outside of Jolt III vs Verfire/stone in level 90 Ultimates or very situational two-target phases in older Ultimates, there are no situations where we even get to choose between a small potency gain vs a small mana gain in a way that has any value. There are too many other variables that would make even a theoretical infinite loop answer irrelevant.
* Wrong conclusions can be easily drawn if lacking a more holistic understanding of the game and people take numbers like this at face value (e.g. fussing over optimizing procs for mana gain at the expense of other more important aspects of the rotation).

While it might be a novel thought exercise, mana vs potency is an “interesting but somewhat impractical reference” at best, and “actively misleading” at worst for actually learning how to play the job, depending on who is reading it. This is in part due to Red Mage being a job that is at its best making dynamic adjustments based on encounter design and killtimes, as opposed to following a strict minute-based cycle and ruleset.

For intermediate-advanced encounter planning on Red Mage, understanding mana gains/losses as a function of time (in the form of “spell casts until a future melee combo”) is probably more useful for assessing potential tradeoffs, i.e. about 5-6 mana will bring us 1 GCD closer to a future melee combo, on average (i.e. reaching the 50|50 threshold 1 cast earlier). 

Whether that makes any difference at all depends on expected killtimes, expected number of combos throughout an encounter, buff alignment, mechanics timings, phasing, and more. This will be covered in depth in an advanced RDM guide in future.

# Rotation

## General rotation with infographic

![](/img/jobs/rdm/rdm-100-info.jpeg)

<https://i.imgur.com/LGRfOzV.jpeg>

[](https://i.imgur.com/LGRfOzV.jpeg)Our rotation is as follows:

* Dualcast spells to build mana. Prioritize Verfire/stone procs over Jolt III if they're up. 
* Melee combo at 50|50+ mana. Use Verholy if white mana is lower than black mana, or vice versa for Verflare if 0 or 2 procs are up. If only 1 proc is up, use the other finisher provided it doesn’t imbalance your mana.
* Base damaging oGCDs: Use on cooldown (priority: Fleche > Contre Sixte > Engagement > Corps-a-corps).
* Vice of Thorns and Prefulgence: Prioritize using them under buffs, although it can be a DPS gain to hold them for AOE damage if the situation allows it. Never let them fall off.
* Swiftcast: Use for oGCD alignment before or after a single or triple combo (but not double combo). Can be used for Verraise if urgent recovery is needed.
* Acceleration: Use 1 charge on cooldown, and hold the 2nd for either movement or temporarily fixing oGCD alignment to avoid drifting Fleche, Contre Sixte, or Embolden (using Grand Impact and Verthunder/aero III back to back simplifies this). Grand impact in buffs is optional to accompany a single melee combo in buffs, but not a priority.
* Manafication: Use on cooldown in unknown killtimes, but only when the boss is targetable. Align with Embolden only if you’re sure you won’t lose a use, or are willing to gamble on the DPS loss of doing so.
* Burst windows: Always save enough mana for one melee combo under buffs. If possible, two is ideal, but not necessary.

## Openers

**Red Mage is somewhat flexible with its openers**: often, prioritizing one thing comes at the expense of another (i.e. buff damage potency vs Fleche/Contre Sixte usage vs movement flexibility for mechanics), and **what is actually optimal or most practical will depend on encounter design**. If further discoveries are made or job changes occur, these openers will be adjusted for future versions of the guide, and readers can also expect fight-specific Savage and/or Ultimate openers to be made for encounters with more unique timelines. At time of writing, there are three general purpose openers that are viable for their own reasons:

### Standard opener (highest damage, strictest rotation)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdLg1tf9coceW2A_PokhgXaaGsUxohp4MEtwXM72O8XUupVeqeX90T-9Bv0OP-YPAFCIsW-NW7ElQsKCCLzoi7iqi-Kl5EUY_n2av5E1fws_A6_O_rGNpcrHex6U19Nsg6qJGxdJoPV3YEHW9Xt2UV4r3tX?key=g0mOyOwaD_13c10-GmC5Xg)

<https://i.imgur.com/5TW44kN.png> (update: fixed formatting on text in graphic)

The standard opener puts the most damage under buffs with Contre Sixte and two Grand Impacts back-to-back, as well as optimized Swiftcast and proc usage. The drawback is that oGCD alignment from the opener until two minutes becomes very strict, with an Acceleration use required to double-weave Fleche and Contre Sixte at approximately the 78-second/1 minute 18 second mark, and an additional Swiftcast used to keep the Fleche cooldown rolling just before the triple combo for the 2-minute buff window (it will be back in time after the triple combo for oGCD alignment). This sequence and subsequent oGCD alignment is quite strict and may take some practice.

### Early C6 opener (more flexibility)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcpC3aY0YmgK7_f66_F4t8DAxYJ65YqwkuopPZxa1uvrcSuJ8hkzKS7reOKk_MohSR2q1hCZ55EIv67HWGqw7pu3EQUNVvJ-YNPgSiMP1v17q92-4q45FSAs6GmApHBlWUDGXOMSOWhgmcenIuYKR6Jr9-V?key=g0mOyOwaD_13c10-GmC5Xg)

<https://i.imgur.com/FllnKZO.png> (update: fixed formatting on text in graphic)

This opener sacrifices a bit of buff damage and optimized Swiftcast usage for increased flexibility on movement, and an earlier use of Contre Sixte if needed for certain phases or killtimes. The last Swiftcast double weaved at the end with the Contre Sixte is technically flexible; that is simply the earliest point it can be used without resulting in drifting the second Contre Sixte (in general, do not use Swiftcast before that Contre Sixte). Also, using Grand Impact before Embolden here will have it buffed by jobs that send buffs earlier (2nd GCD).

### Single weave potion opener

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeSQms-QT_-X65Z3bi5Q1vzm4H_toQ4OWDozp3Dmpf8dWuvHv0z_0J86bL6kZ8FVRuKNt-aNZ8vOQJeMmoux12f_xUxDKGihalveINIqamQ_DPDv1KhYr8xk-zouPd4PwsZzOnEwXufhcbvbnla12xW3evZ?key=g0mOyOwaD_13c10-GmC5Xg)

<https://i.imgur.com/cqjimUe.png> (update: fixed formatting on text in graphic)

Patch 7.0 has shortened the animation lock for double weaving potions, though the queuing is still delayed. This opener is a slightly lower potency option for those who still can't comfortably double weave potions with their latency to the server. Note that the last Contre Sixte will drift by one cast, similar to the Endwalker standard opener.

## Buff windows

T**riple comboing at two minutes is recommended with 73|73 or above mana (starting 15 seconds before Embolden comes up if rushing Manafication, or 17 for buff damage potency)** regardless of whether we use potion in the opener or during the 2-minute window. One reason for this is because it makes oGCD alignment easier. Much like Endwalker:

* **Triple combo** -17 or -15 seconds before buffs. If using potion here, use it after the first Verflare/holy to ensure three sets of Scorch/Resolution are caught under the potion buff (assuming 73|73 or higher mana to start).
* **Double combo** -5 seconds before buffs (Embolden after first Verflare/holy) or -1 second (Embolden after first Enchanted Riposte). If using potion for a double combo, just use it anytime before starting the combos.
* **Single combos** can be used at the start of buffs or even 1 GCD after they go off, as our combo lasts ~12.7 seconds, and all buffs now last for 20 seconds (technically 2 GCDs after buffs go off are possible too, but some jobs may send their buffs a bit earlier so it’s better to play it safe). 
* **Grand Impact into buffs** to accompany single combos are worth consideration, but are best assessed on a fight-by-fight basis and not assumed as a default since there are other more important priorities for Acceleration.

Buff windows from four minutes onwards tend to be more variable due to mechanics, downtime, higher chance of mistakes, mana lost from lost uptime or Verraising, or predictable killtime ranges. **Double combo during these buff windows if you can (92|81 mana without Manafication)**, single combo otherwise. It should always be possible to get at least one combo under every buff window.

# Advanced or Niche Considerations

There are several aspects to Dawntrail RDM that warrant further exploration and testing:

* **Encounter-specific openers, including pre-pull Acceleration** for an additional Grand Impact (with or without right clicking the buff off for the instant GCD) to gain an extra use in predictable killtimes.
* **Downtime Manafication**. If we gain an additional use of Manafication during uptime, it is a clear DPS gain due to +1 melee combo and +1 Prefulgence. But during downtime, more interestingly, we can Vercure ourselves six times (assuming no delay) to proc the Prefulgence Ready buff. If this results in an extra use of Manafication, that is still a gain (i.e. +0 melee combo and +1 Prefulgence is still an overall DPS gain in a vacuum).
* **Maximizing Swiftcast uses across an encounter with zero oGCD drift** will require strict rotation and timeline planning. With Acceleration being usable as a temporary fix for oGCD weaving if Swiftcast is on cooldown (it does not shift alignment but it allows us to keep the cooldowns cycling if we shift alignment later), there are many possibilities.
* **Maximizing potency value of Acceleration and Grand Impact**. In theory, Grand Impact is a gain over Verthunder/aero III during buff windows, but a loss if it comes at the expense of melee combo finishers. With strict Acceleration and Grand Impact planning, it is possible to plan encounters in such a way that we save Grand Impact for buffs without losing a use of Acceleration, assuming scenarios where we single combo under buffs (e.g. when rushing Manafication).