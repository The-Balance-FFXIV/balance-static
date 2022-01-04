---
title: Red Mage Basic Guide
card_header_image: /img/jobs/rdm/basic.png
authors:
  - Balance-RDM-Staff
  - lana
  - argen
  - meru
patch: "6.0"
lastmod: 2022-01-03T20:49:22.531Z
changelog:
  - date: 2021-10-26T01:24:41.469Z
    message: Created page
  - date: 2022-01-02T20:49:23.183Z
    message: Updated for Endwalker
---
# Red Mage Level 90 Guide for 6.x

## Overview

This guide will cover changes to Red Mage and proper rotations and ability usage in the Endwalker expansion. While the core foundation of Red Mage has not changed at all since its introduction in Stormblood, many smaller changes and quality of life improvements made in Endwalker have changed how we approach different aspects of the job, all of which will be covered below. 

At its simplest Red Mage has you casting spells to build your Black and White Mana to 50|50 and then spending that mana to use a melee combo with powerful finisher spells. Red Mage is a very intuitive job, making it a great pick for beginners or people looking for something easier to pick up. The simplicity of its base rotation makes it a great choice for learning new fights, and the large amount of utility it comes with also provides great support to your party. Despite these things, high-level Red Mage play still has plenty of optimization available and a high skill ceiling comparable to many other jobs in the game. 

If you have more questions after reading the guide, feel free to ask in #rdm_questions on [The Balance server.](https://discord.gg/thebalanceffxiv)

## Changes in 6.x

*This section covers changes made to the job in patch 6.0. If you are new to the job, you may want to skip over this section and continue reading the following one.* 

**Mana Generation and Cost Values**

The biggest overhaul to Red Mage in 6.0 was the change to how much mana we generate from casting spells, and how much mana we spend on our weaponskills. Our mana generated from spells has been adjusted to be around slightly above half of our previous values in 5.0. Exact changes in values are as follows: 

*\*Please note that AoE spell mana values were not adjusted*

| Jolt I/II                | +3 Black & White Mana -> +2 Black & White Mana |
| ------------------------ | ---------------------------------------------- |
| Verthunder/Veraero I/III | +11 Black/White -> +6 Black/White Mana         |
| Verfire/Verstone         | +9 Black/White -> +5 Black/White Mana          |
| Verflare/Verholy         | +21 Black/White -> +11 Black/White Mana        |
| Scorch                   | +7 Black & White -> +4 Black & White Mana      |

&nbsp;

In relation to this change in mana generation values, the mana cost of weaponskills has also been adjusted to cost 10 mana less than previously, meaning the melee combo now costs 30 less mana resulting in a requirement of 50|50 Black and White Mana. Exact values are as follows: 

*\*Please note that Enchanted Moulinet and Enchanted Reprise mana costs were not adjusted*

| Enchanted Riposte      | \-30 Black & White -> -20 Black & White Mana |
| ---------------------- | -------------------------------------------- |
| Enchanted Zwerchhau    | \-25 Black & White -> -15 Black & White Mana |
| Enchanted Redoublement | \-25 Black & White -> -15 Black & White Mana |

&nbsp;

**Melee Combo Finishers**

Existing melee combo finishers were changed from single target spells to AoE spells with a 60% falloff on additional targets hit. This change makes Red Mage’s burst much more viable in multi-target situations. In addition, a third finisher, Resolution, has been added which combos off Scorch. This finisher is a line AoE that will always hit the targeted enemy as well as any enemies within its straight-line hitbox. 

Backend changes to how the melee combo functions have been made. First, the way your finishers are earned has changed in 6.x. In this expansion, using any Enchanted weaponskill other than Enchanted Reprise will give you a Mana Stack, and accumulating three Mana Stacks allows you to use either Verflare or Verholy. While you should always do your normal single target combo to receive these three Mana Stacks, this does mean that any combination of Enchanted weaponskills, including a broken combo, will allow you to use your finishers. This change also allows three Enchanted Moulinets to chain into your finishers, replacing the previous Enchanted Moulinet spam rotation in 5.x.  

Finally, the distinction between the melee combo and the finisher combo allows us to do a few new things with them. While using Manafication will still break any existing combo chains, the separation between the two combos means you can use it **between Enchanted Redoublement and Verholy/Verflare** without losing your finishers. Doing this allows you to get the cooldown on Manafication rolling faster, while still buffing all three finishers as well as the weaponskills from your immediate next combo. In addition to this, there is no combo timer on Verholy/Verflare as its activation requirement is simply three Mana Stacks, which allows you to hold your three finishers indefinitely during downtime in fights or in dungeons. Please note that casting either Verholy or Verflare will start your second combo, beginning the 30 second limit between spells. 

**Manafication**

Manafication received a large change in Endwalker that slightly altered its usage. Rather than doubling your existing mana number as it did previously, Manafication now provides a flat 50|50 mana, effectively giving you a free melee combo. As a result of this change, Manafication can now only be used in combat. Additionally, the Manafication damage buff has been altered to give you five stacks, one being spent with each GCD used. These stacks last for a total of 15 seconds, and a 6th stack is also given at level 90 to accommodate for Resolution. Manafication also no longer resets the cooldown on Corps-a-Corps and Engagement/Displacement.

**Embolden**

Embolden received a massive overhaul in Endwalker. It now buffs all damage types for party members while losing its decay – Embolden is now a flat 5% damage buff for the party that lasts for 20s. The damage type change means Red Mage will now be much more viable in party compositions that deal heavy magical damage. Please note that the self-buff given by Embolden still only buffs magical damage, meaning our oGCDs are not affected.

**Engagement, Displacement, and Corps-a-corps**

Displacement’s potency has been reduced to be equal to Engagement’s. This means you will only ever use Displacement if the movement it provides is useful, as the ability to easily double weave Engagement makes it the preferable choice in most situations. Additionally, Engagement is now unlocked at the same level as Displacement, allowing you to use it much earlier than before. Both Engagement/Displacement and Corps-a-corps now have two charges at all levels. 

**Acceleration**

Instead of guaranteeing procs on your next three eligible spells, Acceleration now makes your next Verthunder, Veraero or Impact instant while either guaranteeing a proc (in the case of Verthunder and Veraero) or increasing the skill’s potency by 50 (in the case of Impact). This change means that we can no longer use Acceleration to force a proc off a higher mana finisher, as Verholy and Verflare no longer benefit from Acceleration. A second charge of Acceleration is given at level 88. This change provides much more decision-making around the use of Swiftcast, which will be detailed later in this guide. 

**Magick Barrier**

At level 86 we receive Magick Barrier, a ten second 10% party-wide magical mitigation tool that also buffs healing recovered from actions used by 5%. This heal buff applies to both GCD and oGCD heals, synergizing well with healers’ toolkits and even healing skills from fellow DPS. This tool further increases our large amount of existing raid utility, allowing us to contribute to the party in more ways than just damage. 

**Veraero and Verthunder III**

Veraero and Verthunder have been upgraded to Veraero III and Verthunder III. These abilities simply act as potency upgrades with new animations and function the same way.

**Enchanted Reprise**

As a result of the overall 6.0 change of ranged weaponskills no longer breaking combos, Enchanted Reprise can now be used during our melee combo at any point without breaking the combo chain. Enchanted Reprise’s recast was also increased from 2.2s to 2.5s, making it a more costly GCD choice compared to its Shadowbringers version.

## Basic Introduction to Red Mage

### Helpful Links

[Beginner Infographic](https://bit.ly/3pn92tQ)

[Rotation PoV](https://bit.ly/3mGQyCR)

[Hotbar Examples](https://bit.ly/3ms1kwJ)

### Black and White Mana

Red Mage’s job gauge, the Balance Gauge, displays the current amount of **Black Mana** and **White Mana** available. Black Mana is accumulated by casting Verthunder III, Verfire, Verflare, and Verthunder II, while White Mana is accumulated by casting Veraero III, Verstone, Verholy, and Veraero II. Casting Jolt II, Impact, Scorch, and Resolution will give both Black and White mana. 

An important part of Red Mage is keeping your Black and White mana “balanced,” meaning the gap must be kept smaller than 30 between the two. If one mana value becomes higher than the other, the Balance Gauge crystal will change color and the lower mana will accumulate mana at half the usual rate until it is rebalanced. In that state, Manafication will also only generate 25 of the lower mana.

### GCD Spells and Dualcast

Red Mage has two types of spells – what we refer to as long casts (5s cast time) and short casts (2.5s cast time). Damaging short casts include Jolt II, Verstone, Verfire, Verthunder II, and Veraero II while long casts include Verthunder III, Veraero III, and Impact. Spells with longer cast times have higher potencies than our short casts and also generate more mana, but should never be hardcast with their full cast time outside the opener. Instead, we utilize these spells efficiently with our Dualcast trait. We gain the Dualcast buff from hardcasting a spell, which allows us to instantly cast any spell with a cast time. Our casting phase then follows a rhythm of hardcasting spells with short cast times to gain Dualcast, and then using the buff to instantly cast spells with longer cast time to maximize our potency and mana generation over time.

Casting Verthunder III gives us black mana, while casting Veraero III gives us white mana. Every time Verthunder III or Veraero III is used, there is a 50% chance of receiving a proc, which allows us to cast either Verfire or Verstone respectively. In single target scenarios, your basic rotation will be to cast Verfire or Verstone (or Jolt II if no procs are available) and then dualcast either Verthunder III or Veraero III. When choosing whether to dualcast Verthunder III or Veraero III, you should prioritize whatever mana type does not currently have a proc available. For example, if you cast Verstone and already have a Verfire proc available, your dualcast should be spent on Veraero (if it will not unbalance your mana) as you have spent your Verstone proc and have a chance of receiving another Verstone proc. 

In two target scenarios, your primary rotation becomes Jolt II (or procs if available) into Impact, which is a potency gain over Veraero III and Verthunder III in all multi-target scenarios. In scenarios with three or more targets, you should replace your shortcasts with Verthunder II and Veraero II, which give you black mana and white mana respectively. Both of these spells are potency gains over Jolt II, Verfire, and Verstone at three or more targets.

GCD spells, potencies, and mana generation values are shown below. 

| **Spell**      | **Mana Generation**              | **Potency** | **Cast Time** |
| -------------- | -------------------------------- | ----------- | ------------- |
| Jolt II        | Generates 2 Black and White Mana | 310         | 2.5 seconds   |
| Verthunder III | Generates 6 Black Mana           | 380         | 5 seconds     |
| Veraero III    | Generates 6 White Mana           | 380         | 5 seconds     |
| Verfire        | Generates 5 Black Mana           | 330         | 2.5 seconds   |
| Verstone       | Generates 5 White Mana           | 330         | 2.5 seconds   |
| Impact         | Generates 3 Black and White Mana | 210 AoE     | 5 seconds     |
| Verthunder II  | Generates 7 Black Mana           | 140 AoE     | 2.5 seconds   |
| Veraero II     | Generates 7 White Mana           | 140 AoE     | 2.5 seconds   |

&nbsp;

### Melee Combos

Once you have amassed **50|50 mana, you are ready to unleash a melee combo**, the most powerful tool in your rotation. If you have enough mana, your weaponskills— Riposte, Zwerchhau, and Redoublement— transform into their Enchanted versions. Enchanted weaponskills are significantly more powerful than un-enchanted skills, deal magic damage and generate Mana Stacks that will allow you to access your finisher spells. Your melee combo will consist of three Enchanted melee weaponskills followed by three finisher spells. A full single target melee combo is as follows:

Enchanted Riposte -> Enchanted Zwerchhau -> Enchanted Redoublement -> Verholy or Verflare -> Scorch -> Resolution

Enchanted Riposte, Enchanted Zwerchhau, and Enchanted Redoublement are single target weaponskills that combo off of each other, increasing the potency of each subsequent skill. Using these weaponskills will consume Black and White mana while granting us Mana Stacks, red crystals which show up at the bottom of our Balance Gauge. Once you have used all three weaponskills, you will be able to use Verflare/Verholy into subsequent finishers. As a side note, while this situation should be avoided in general, you are able to recover from out-of-order combos as long as you have enough mana to execute any enchanted weaponskill to generate the Mana Stacks necessary for Verflare/Verholy.  

All three finishers are instant casts and deal damage to multiple targets, making them strong spells in AoE scenarios. Each finisher also generates a set amount of mana, allowing us to begin rebuilding our gauge before beginning our casting phase again. The choice between using Verflare or Verholy depends on the state of your procs and mana gauge. Use the finisher corresponding to your lower mana to guarantee a Verfire or Verstone proc. However, if the lower mana already has a proc available and the higher one does not, use the finisher of the higher mana for the 20% proc chance as long as it does not cause you to unbalance your mana. 

Scorch, the follow-up finisher to Verflare/Verholy, simply deals damage to its primary target and enemies around it. Our final finisher however, Resolution, is a line aimed toward the targeted enemy. When using Resolution in AoE scenarios, you should try to position your character so that the line will hit as many enemies as possible. Do note that Resolution will always hit the target it is cast on, regardless of the direction the visual goes in. In addition, all our finishers deal full damage to the targeted enemy and falloff damage for the rest. 

In scenarios with three or more targets, we can replace our single target melee skills with Enchanted Moulinet, as it offers more potency while still granting a Mana Stack with each use. Therefore, our “melee combo” in this scenario would consist of three uses of Enchanted Moulinet followed by our finishers. Note that means we need to amass **60|60 mana before beginning our AoE “combo”**, as casting any spell will cause us to lose all our stacks.

An important distinction in-game to keep in mind is that the melee combo and finishers are considered two separate combos by the game. While casting any spells other than Verholy or Verflare will cause you to drop Mana Stacks and lose access to your finishers, it is possible to hold these finishers indefinitely if there is nothing to hit. This is in contrast to the usual 30 second timer allowed between combo abilities before the combo is broken. This distinction is also why we are able to use Manafication after Enchanted Redoublement without losing our finishers despite Manafication being a combo-breaker otherwise. 

| **Spell or Weaponskill** | **Mana Generation or Cost**      | **Potency**                   | **Recast Time** |
| ------------------------ | -------------------------------- | ----------------------------- | --------------- |
| Enchanted Riposte        | Costs 20 Black and White Mana    | 220                           | 1.5 seconds     |
| Enchanted Zwerchhau      | Costs 15 Black and White Mana    | 100 (Combo: 290)              | 1.5 seconds     |
| Enchanted Redoublement   | Costs 15 Black and White Mana    | 100 (Combo: 470)              | 2.2 seconds     |
| Enchanted Moulinet       | Costs 20 Black and White Mana    | 130 AoE                       | 1.5 seconds     |
| Verflare                 | Generates 11 Black Mana          | 580 AoE with 60% falloff      | 2.5 seconds     |
| Verholy                  | Generates 11 White Mana          | 580 AoE with 60% falloff      | 2.5 seconds     |
| Scorch                   | Generates 4 Black and White Mana | 680 AoE with 60% falloff      | 2.5 seconds     |
| Resolution               | Generates 4 Black and White Mana | 750 line AoE with 60% falloff | 2.5 seconds     |

&nbsp;

### Damaging oGCDs and buffs

One of the strongest parts of Red Mage’s kit is its powerful oGCD abilities, which include Fleche, Contre Sixte, Corps-a-corps, and Engagement/Displacement. All of these abilities deal a good amount of damage, so it is important to use them on cooldown and maximize usages throughout an encounter. 

| **Ability**             | **Potency** | **Recast Time** |
| ----------------------- | ----------- | --------------- |
| Fleche                  | 460         | 25 seconds      |
| Contre Sixte            | 360 AoE     | 35 seconds      |
| Corps-a-corps           | 130         | 35 seconds      |
| Engagement/Displacement | 180         | 35 seconds      |

&nbsp;

**Damage oGCD priority (based on potency and cooldown timer):**

Fleche > Contre Sixte > Engagement/Displacement > Corps-a-corps

**Fleche** is our strongest oGCD ability and also has the shortest cooldown, meaning it should always be prioritized when multiple oGCDs are ready to be used. Optimizing your rotation around maximizing your Fleche usage and minimizing drift is an important part of Red Mage, which will be explained later in the Swiftcast and Acceleration section. 

Following Fleche, **Contre Sixte** is our second strongest oGCD in single target, and our strongest when there is more than one target involved. Contre Sixte casts a circular AoE around the targeted enemy and has no falloff damage for surrounding enemies.

Next, **Engagement and Displacement** are oGCDs with two charges that also share a cooldown. These abilities are equal in potency, so you will primarily be using Engagement in your rotation due to Displacement’s drawbacks. As Displacement does a 15-yalm backflip, it can be useful for situations where extended movement is needed, but otherwise is more dangerous and has a longer animation lock than Engagement. 

Finally, **Corps-a-corps** is an ability with two charges that also moves you to the boss’s hitbox. While the “gapcloser” function of this ability can be very useful, it is important to think of this ability as a damaging ability first, and a movement ability second, rather than the other way around. This means you should always use at least one charge of Corps-a-corps on cooldown to avoid overcapping.

As both Corps-a-corps and Engagement/Displacement have two charges, you can optionally hold onto one charge of each for movement. Having two charges also means it is possible to get two uses of these abilities under party raid buffs. This should be done whenever possible, but should not be done at the cost of drifting the cooldown on either ability. 

Following this, Red Mage also has two other oGCDs that are important parts of its DPS rotation: Embolden and Manafication.

**Embolden** is Red Mage’s party-wide damage buff. Embolden has a recast timer of 120 seconds and buffs all damage done by party members by 5% for 20 seconds, while buffing our personal magic damage by 5% for 20 seconds. It is important to note that as our own Embolden only buffs magic damage dealt, which means that it buffs all of our GCDs (including Enchanted weaponskills) but does not affect any of our oGCDs. Embolden should be used on cooldown to align with all other two minute party buffs, unless a specific buff delay is agreed upon by the entire party. Do not delay using Embolden to align with your own rotation.

**Manafication** is an ability with a 110s cooldown that gives us 50 Black and White mana, which effectively gives us a free melee combo with every use. Make sure to not significantly overcap on mana when using Manafication. The skill also gives us a 5% damage buff with six stacks that lasts 15 seconds, which buffs the next 6 GCDs used by 5%. This damage buff should always be used on your melee combo, as it is the strongest burst window Red Mage has. The 110s cooldown on Manafication often causes confusion on whether it should be held for Embolden or used on cooldown, but in fights with unknown killtimes it is better to use Manafication on cooldown to avoid losing a usage of it. Note that desyncing Manafication from Embolden does not necessarily mean losing a melee combo under Embolden – a more detailed explanation on Manafication usage can be found in a separate section below. 

### Using Vercure during downtime

Vercure is part of Red Mage’s strong utility kit, and its uses in raid recovery is covered later below. While Vercure’s usage as a healing GCD is rather niche, it can be used for a small DPS gain as part of our rotation. Casting Vercure during downtimes in fights will proc Dualcast, which allows us to instantly cast Verthunder III or Veraero III when the boss returns. However, be careful when a pot window aligns with a reopener in this way – as using pot will cancel the dualcast proc from Vercure.

### Enchanted Reprise

**Enchanted Reprise** is a ranged weaponskill that costs 5|5 mana that is primarily used for keeping uptime when casting is not an option and we do not have our common movement tools available (Swiftcast, Acceleration and Melee combo). Due to its large mana cost, we try to avoid using this ability as much as possible. However, in progression scenarios when fight mechanics are unknown, it is better to use Enchanted Reprise than to lose uptime on the boss. It can also be used during a melee combo without breaking it if you are forced to disengage from a boss before you finish your melee hits, though be wary of the mana cost potentially costing you a mana stack. Outside of this, however, this ability should not be used, with the sole exception of getting one last GCD on a boss about to die when you do not have your other instant cast options. 

## Opener

### 6.x General Purpose Opener

![RDM Opener](/img/jobs/rdm/rdm_ew_opener.png)

&nbsp;

Our opener has changed significantly in 6.x largely due to Manafication. As Manafication now gives enough mana for a full melee combo, we can enter our combo significantly earlier and put more hard-hitting skills under party buffs. The goal of this opener is threefold – maximize damage under potion and party buffs, keep oGCDs aligned, and guarantee two procs after our melee combo. 

Using Swiftcast and Acceleration together allows us to Verthunder (or Veraero) twice in a row, giving us plenty of weave space early on in the opener. We use the same GCD twice so we can guarantee a second proc from our melee combo finisher with uneven mana values. Fleche, our highest priority damaging oGCD is used as soon as possible under potion and party raid buffs, followed by our other damaging oGCDs in the order of usage priority. Following our melee combo, we do not use our second charge of Acceleration as our Fleche will already be aligned with our dualcast windows. This allows our second fleche at the tail end of the opener to land under potion. On GCDs faster than 2.5 (or at 2.5 with higher ping) your second Contre Sixte will be forced to drift slightly into your next dualcast window. As Contre Sixte has a lower potency and higher cooldown than Fleche, we simply allow this first drift to happen, afterwards keeping it aligned for the remainder of the encounter.

Please note that this is a general purpose opener, and we may use a slightly altered opener depending on fights. For example, while our current opener will not cost us a use of Fleche or Contre Sixte in most scenarios, there may be fights where phasing requires us to place one of them a GCD or two earlier to avoid losing a usage during the first phase. In situations such as this, one potential option is to double weave your potion and Fleche or Contre Sixte—if it does not clip significantly—to put one of these abilities on cooldown earlier.  

## Swiftcast and Acceleration

These oGCD abilities play a unique and essential role in our rotation. They are functionally similar in that they ensure our GCD next spell with a cast time (with some caveats) can be cast immediately without Dualcast. In practice, these will be paired with Verthunder III and Veraero III for single target scenarios, or Impact for AoE. Swiftcast in particular may occasionally be used for Verraise when reviving multiple people quickly is needed.

**Acceleration**

Ensures the next Verthunder III, Veraero III, or Impact can be cast immediately without Dualcast. We have two charges of this ability. If we cast other spells with Acceleration up, we will hardcast them per usual and the Acceleration buff will not be consumed. As a bonus effect, it guarantees a proc from Verthunder III and Veraero III, and gives a 50 potency boost to Impact.

**Swiftcast *(role action)***

Ensures the next spell can be cast immediately. While there is no bonus effect on procs or potency, it has the niche use of being usable on other spells, most notably Verraise if you wish to revive someone more quickly without Dualcast.

When using Acceleration or Swiftcast, our most important usage is to keep GCD uptime during movement when it would otherwise be impossible or very risky to Dualcast or melee combo. This takes priority over everything else.

Our second priority is to keep our oGCDs aligned (more on this below) so we can weave them without delay. Assuming we used the general purpose opener, an easy rule of thumb is “one Acceleration or Swiftcast per melee combo, from the second combo onwards”. This is primarily to ensure we don’t lose a use of Fleche and/or Contre Sixte over time due to their high potency and short cooldown timers, but can affect other oGCDs as well.

Lastly, we can use Acceleration or Swiftcast to gain procs. In a vacuum, Acceleration or Swiftcast uses are also a damage gain, as they help us replace the weaker hardcast spells on our timeline with Verthunder III/Verthunder III/Impact (per two uses). However, we do not simply use these abilities on cooldown, because doing so increases the likelihood of losing a use of Fleche and/or Contre Sixte. Therefore it is best to see procs or the small damage gain as a “bonus effect” to using these abilities efficiently.

When Acceleration and Swiftcast are both available, use Swiftcast if both procs are up, and use Acceleration if one or no procs are up. As a side note, when all of our instant-cast ability buffs are up, they get consumed in this order regardless of the order they were pressed: Acceleration > Dualcast > Swiftcast.

### oGCD Alignment

We only weave during our Dualcast window, which occurs every two casts (2.5 sec + 2.5 sec if no Spell Speed). Our oGCD cooldowns are in multiples of 5 (25 for Fleche, 35 for Contre Sixte, 120 for Embolden, etc.). This means if we stand there casting spells forever, our oGCDs will continue to come off cooldown during the instant cast part of our Dualcast, and not mid-hardcast. 

However, our melee combo swaps this Dualcast rhythm: our melee hits add up to approximately 5 seconds, and we have three 2.5 second finishers. Swiftcast and Acceleration also swap this Dualcast rhythm around by allowing us to do a single instant cast.

Therefore, to prevent forced oGCD drift, we can “realign” our Dualcast by using one Swiftcast or Acceleration per melee combo from our second melee combo onwards. Note that there are further complexities to this such as aligning our Dualcast with mechanics, weaving during melee combo, spell speed, double melee combos, and more – this is just the basic concept. Think of the “one Swiftcast or Acceleration per melee combo” concept as a general rule of thumb to prevent excess drift, and not a hard rule that you have to stick to no matter what. In addition, you do not have to immediately weave Swiftcast or Acceleration after a combo to fix your alignment – it simply needs to be done before the next time an important oGCD comes off cooldown. 

Also keep in mind that if you have both Swiftcast and two charges of Acceleration available and will not need them for any upcoming movement, you can use two of these together to begin their cooldowns while not causing any oGCD drift. A video demonstration of this oGCD alignment concept can be found [here.](https://www.youtube.com/watch?v=_Dx7DYPda5c)

## Manafication

Manafication, one of the most important abilities in our kit, has some nuance to its optimal usage. To start off, Manafication should be used on cooldown by default. Because of its 110s cooldown, Manafication drifts ten seconds farther from Embolden with every usage. This means closely aligning Manafication with Embolden runs a higher risk of losing an entire use of Manafication the longer a fight goes on. 

A common misconception by newer players is that Manafication should always be held for Embolden, but this is not the case. Losing a usage of Manafication means losing not just the 5% damage buff, but also an entire melee combo, a loss far exceeding the minor potency gain of stacking Manafication and Embolden. In addition to this, desyncing Manafication with Embolden does not mean losing a combo under Embolden entirely – thanks to the flexibility of our melee combo, we can easily store enough mana to combo under Embolden without the need for Manafication. Therefore, in fights where the killtime is unknown, Manafication should be used on cooldown, and you should aim to use non-Manafication buffed combos under your Embolden.

However, it is preferable to save Manafication for Embolden windows in scenarios where you are guaranteed to not lose a usage. These situations include consistent kill times as well as specific fight phasings. While this scenario is often the exception rather than the norm, aligning our 5% buff with the party buff window is the correct play under these circumstances.

Another important characteristic of Manafication is the ability to use it between Enchanted Redoublement and Verholy/Verflare. Manafication explicitly breaks any existing combo, which means you cannot use it between melee weaponskills or finishers. However, as mentioned previously, our melee weaponskills and finishers are considered two separate combo chains by the game, so using Manafication after Enchanted Redoublement will not cause us to lose Verholy/Verflare from combo breakage. 

The main benefit of using Manafication in this fashion is to get it on cooldown faster without significantly overcapping on mana in situations where you have high mana with Manafication off cooldown. When doing this, your first three Manafication stacks will be used on your finishers, while the last three can be used on the first three hits of an immediate second combo, effectively buffing the same GCDs as using Manafication before your combo. 

## Melee Combo With and Without Buffs

Due to our gauge capacity being twice the cost of a melee combo, we have a lot of flexibility on when to use our melee combo. Outside of buff and potion windows, the timing of our melee combos has no effect on our damage, only affecting our oGCD alignment which can be fixed with Swiftcast or Acceleration. Therefore, our unbuffed melee combo should be used whenever is best for a given encounter. As nothing in the combo has cast times, choosing combo timings based on mobility requirements in fights gives us a significant advantage.

### Party Buffs

Outside of mobility, the most important way to utilize melee combo is to always have enough mana to use one under buffs. This will generally be every two minutes, but can also occur every minute if a Ninja is in the party due to Trick Attack, or if an Astrologian draws into a ranged card. As our melee combo is our most significant burst window, our goal is to maximize its usage under buffs. While our own Embolden lasts 20 seconds, there are multiple 15 second party buffs in the game. A full melee combo is around 12.7 seconds long, so it’s vital to begin our combo on time to land our strongest finishers under them.

Our baseline is to land one singular melee combo under full party buffs every buff window. However, as our own Embolden and certain other party buffs are 20s long, it is possible to fit more than a singular combo under it. While we cannot fit two full combos under 20s buffs, we are able to fit three finishers and a full melee combo. In order to accomplish this, we aim to begin our first melee combo around five seconds before Embolden comes off cooldown. This allows us to hit Embolden after Enchanted Redoublement, buffing our three finishers and our immediate second combo. If you aim to do this, it is important that you **time your own rotation around Embolden’s availability, and not the other way around**. Embolden is a party buff and should not be used selfishly. 

![Embolden Example](/img/jobs/rdm/exembolden.png)

*An example Embolden window*

### Potion

Our potion window, being 30 seconds long, does allow us to fit two full melee combos under it. A basic approach to this would be to use your potion before buffs are available at the start of your first combo, so that your finishers and second combo will ideally land under buffs. Doing this, however, leaves us with nearly a full five seconds in our potion window, enough time for two GCDs. This means it’s possible for us to not only fit two full melee combos under our potion, but also a third Scorch and Resolution. 

There are two requirements to pull this off. One, a minimum of 73|73 mana, and two, Manafication being available no later than our second combo. We start our first melee combo before using a potion, choosing instead to pot after our first Verholy or Verflare. Doing this allows us to land our first Scorch and Resolution in the pot window, followed by two subsequent combos, at least one of which should also land under party buffs. Depending on the amount of Black and White mana you begin with, you can either use Manafication before the first set of finishers, or delay it to avoid significant mana overcap. Very slight overcap is generally accepted as it will rarely lead to a melee combo loss, but this may vary based on encounter and party killtime. 

![Potion Example](/img/jobs/rdm/example-potion-window.png)

*An example potion window*

If there is a Summoner in your party, keep in mind that their party buff, Searing Light, lasts 30 seconds, the same duration as a potion window. This means that you can attempt to do the same rotation under Searing Light that you would for a potion, but it may not be possible for every single buff window unless heavily optimizing.

Both the Embolden and potion scenarios above assume that the extra combos used under them are not needed elsewhere. As mentioned, your baseline is to get one melee combo under party buffs and two in your potion. If the extra melee combo to gain additional finishers under buffs or potion is needed elsewhere for movement, it is far more important to use them to maintain uptime as losing GCDs on the boss will negate any gain from moving a few GCDs to be under buffs.

Ideal potion timings vary on a case-by-case basis and will depend on encounter length and design. It can occasionally be optimal to use potions on cooldown, or to use our first potion at two minutes with a double or triple combo. However, in most scenarios, the default approach is to use one in the opener and a second one at around six minutes under raid buffs.

## Utility and Party Support

In raids, DPS jobs are expected to provide some amount of utility to the party from either role skills or unique individual abilities. This is primarily in the form of damage mitigation, but can also take the form of recovery. In line with the job’s identity across Final Fantasy history, Red Mage in particular is known for providing a lot of support while doing respectable damage.

### Party Mitigation

Red Mage has two party mitigation abilities, both of which can be done by pressing an oGCD button at no DPS loss. These abilities can often save the party from a wipe or reduce required healing output, particularly when used in a coordinated manner with others. In a static, it is best to coordinate cooldowns with your party and see where healers need the most help. In an unorganized environment (such as in party finder), you can exercise judgment to see where the party takes more damage.

**Magick Barrier**

Provides 10% partywide magical mitigation and a 5% boost to healing actions (including oGCDs) for ten seconds. Since it is a party buff, party members need to be in range to gain the effect. On the plus side, it can be used to mitigate damage coming from untargetable sources. Magick Barrier is especially useful for “heal checks”, where there are repeated instances of damage and the healer has to use multiple heals to keep the party alive.

**Addle *(role action)***

Lowers the target's physical damage dealt by 5% and magic damage dealt by 10% for ten seconds. Since it is a boss debuff, it cannot be used on untargetable damage sources. But on the plus side, party members don’t have to be in range for it to work. This makes it particularly useful for heavy instances of damage where the party has to spread out. While physical damage tends to be less common than magic damage, there may be instances that the physical damage reduction can be useful too (e.g. a magical tank buster followed by physical autos).

While both Magick Barrier and Addle have subtle differences, they can often be used interchangeably for general damage reduction on standard magical raidwides or stacks.

The key thing to remember is that using our mitigation oGCDs is not a DPS loss. One Magick Barrier/Addle may not always be the difference between life or death, but a party where every player contributes to mitigation will be leaps and bounds more effective at clearing content. Some content such as Ultimate or early week Savage cannot be cleared if DPS players do not assist with damage mitigation. As such, it is best to view mitigation usage as a mandatory and expected part of our kit. Not optional.

Another important thing to note about mitigation is to always be consistent with its application. Inconsistent mitigation is worse than having no mitigation as it can cause unexpected deaths in early progression where health and damage margins are tight. If you’ve made a mistake and are unable to apply your mitigation at expected times, communicate with your party to see if the missing 10% can be made up with shielding or another form of % mitigation.

### Recovery

In addition to mitigation, Red Mage has two party recovery GCD spells that can be Dualcast: Vercure and Verraise. Both of these abilities are capable of saving runs and reducing healer load, but are used very differently.

**Vercure**

Since Vercure is a GCD and comes at the expense of our DPS spells (which do damage and generate mana for our melee combos), we do not use this spell for sustained healing. No raid content is designed in such a way that DPS need to repeatedly use single target heals, making Vercure far more useful in solo content. Our standard use for Vercure in raids is to proc Dualcast during downtime when the boss is untargetable for damage.

However, due to scaling off our Intelligence stat, Vercure’s heal is potent enough to be useful during clutch moments, such as saving someone who is low HP from dying to a raidwide when the healers are busy healing AoE damage. However, this tends to take a high degree of raid awareness and reaction speed to pull off, and can be seen as a more advanced maneuver.

In short, as a form of utility, Vercure can be used in one off situations to fire off a “clutch” heal, but there should never be a situation in standard raids where you are regularly expected to heal with Vercure. Content is not designed this way and the DPS loss would be substantial. A notable exception to this would be during downtime mechanics where party members are taking damage, such as Wormhole Formation in Alexander Ultimate. Using Vercure to heal yourself or party members during downtime mechanics is not a DPS loss and should be attempted if it does not distract you too much from performing your own mechanics.

**Verraise**

A resurrection spell that can be instant cast via Dualcast or Swiftcast with a high MP cost (2,400), which is very useful for saving runs from wiping. Red Mage is often chosen in progression for this ability because you can raise multiple people back-to-back with Dualcast and Swiftcast. 

A common point of contention is “when should the caster or the healer raise”. In progression, where the focus is learning mechanics and DPS doesn’t matter, the Red Mage should cover as many resurrections as possible to help healers save MP (ideally with Super-Ethers). This applies even when healers have Swiftcast available as healer GCDs for emergency healing and MP pools are more important than your personal DPS in early progression.

However, besides the relatively minor potency loss from not casting Verthunder III or Veraero III, we also generate 0 mana from a Verraise. So you may delay or lose a melee combo from too many uses. As such, when going for a kill or farming, we should decide when to raise on a case-by-case basis.

There are many variables at play. These include MP, healer Swiftcast availability, healer playstyle/gear, level of incoming damage, our own melee combo timings (e.g. not breaking our melee combo to raise), severity of DPS check, and more.

If in a static, try to work together with or communicate with your healer. For maximum party effectiveness, you should be ready to share the load and cover for each other if needed. In a party finder environment, default to raising if you need to save the run or the healers are handling heal checks, but consider allowing your healer to Swiftcast raise if they are able to and there is no immediate urgency.

### Other

**Sleep** *(role action)*

New role action in Endwalker. This is unlikely to find much use in raids or dungeons. Raid bosses are generally immune to status effects, and hitting a sleeping normal mob will wake them up anyway. However, Sleep can have some niche uses disabling enemies in the overworld or certain types of instanced content, like in Eureka. This spell can proc and consume Dualcast, and can also be Swiftcast.

**Surecast** *(role action)*

Nullifies most knockback and draw-in abilities from enemies. Not only will this be useful for surviving mechanics, but it can also help us ensure our casts don’t get interrupted. Some mechanics explicitly ignore Surecast, but unfortunately there is no good way of telling ahead of time. 

**Lucid Dreaming** *(role action)*

Gradually recover MP, totalling 3850 MP restored over its full duration. RDM’s rotation is MP negative so Lucid Dreaming is necessary to keep our GCD rolling. An advisable time to press it is when you have around 70% MP remaining. Don’t wait until your MP runs out, because you may suddenly need to Verraise a few people to save your party from wiping.