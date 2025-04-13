---
title: Gunbreaker Basic Guide
card_header_image: /img/jobs/gnb/basic.png
authors:
  - Balance-GNB-Staff
patch: "7.2"
lastmod: 2025-04-13T18:59:50.926Z
changelog:
  - date: 2022-04-05T18:01:38.826Z
    message: Updated for Endwalker
  - date: 2022-04-30T02:08:11.464Z
    message: Updated for 6.11 adjustments
  - date: 2022-08-28T21:10:49.542Z
    message: Amended potencies for 6.2, adjusted info in AOE info, removed outdated
      flow chart.
  - date: 2022-09-24T23:54:18.906Z
    message: Removed outdated content until guide is reworked and new info added.
  - date: 2023-05-28T13:11:20.082Z
    message: Added 6.4 infographics. Adjusted information relative to 6.4 changes.
      Adjusted Ult BIS for DSR and TOP.
  - date: 2024-08-06T18:57:17.680Z
    message: Updated for Dawntrail
---
# Gunbreaker Rotation Guide

#### Authors

**Krom Ulus** | discord: krom.ulus\
**Azazel Raine** | discord: azazelraine

# Intro

**Gunbreaker** is a tank job with a focus on continuously building and spending cartridges to deal very high damage inside of strict burst windows. As a basic overview, the rotation is a builder-spender rotation focused on optimizing damage dealt every minute inside **No Mercy**, which is a 20% damage buff that lasts for 20 seconds after its use.

In this guide we will discuss a number of subjects, beginning with a simple introduction to the priority system for the rotation and then moving into more scenario specific subjects for particular things that alter the rotation in specific ways.

- - -

## CARTRIDGE GAUGE

- - -

The cartridge gauge carries a maximum of 3 cartridges, and is the resource gauge that we manage in order to carry enough cartridges to cast all of our cooldowns within **No Mercy**.

The actions that will fill the cartridge gauge are as follows:

* **Solid Barrel** and **Demon Slaughter** both generate one cartridge upon finishing their combo.
* **Bloodfest** will completely refill the cartridge gauge.

The actions that will spend cartridges from the gauge are as follows:

* **Gnashing Fang, Double Down, Burst Strike,** and **Fated Circle** all spend one cartridge.

- - -

## NO MERCY AND BUFF PRINCIPLES

- - -

### Section TLDR:

* Damage calculations occur as soon as you press an action, not when it hits a target.
* This results in it being possible to get extra GCDs into your buff by casting it later at certain GCD speeds.
* Yo should use **No Mercy** off cooldown in accordance with the usage guidelines at the end of this section.
* Do not attempt to clip the GCD to cast **No Mercy** off cooldown.

- - -

We need to establish a couple of concepts first regarding both how damage is calculated and how cooldowns align from GCD speeds to understand how and when to use **No Mercy**.

#### Damage Snapshotting

Damage is calculated by snapshotting all buffs and debuffs at the exact moment the server receives the request to use any action. This means that the damage actually applying to and hitting a target has already been calculated before it strikes the target. Debuff-based damage over time effects such as **Sonic Break** work the same way, meaning the only thing that matters is what buffs *were* active when it was cast, not what remains active through it's effect duration.

As a result, this allows us to buff a ninth GCD within No Mercy at faster speeds than 2.50. It also means that as long as damage-over-time effects fully tick and expire without being wasted, they can go anywhere within **No Mercy**.

#### 9 GCD No Mercy

An additional 9th GCD inside **No Mercy** is typically possible on GCD speeds faster than or equal to 2.47 (albeit theoretically possible anywhere faster than 2.50). Buffing the 9th GCD is very dependent on when **No Mercy** is used relative to the GCD roll and it requires a specific usage timing.

In order to buff a 9th GCD inside **No Mercy**, we must use **No Mercy** as a “late weave”, or cast it in between the bottom left and top left corner of our GCD icon, at the "nine-o-clock" position within the GCD roll. This makes it so that **No Mercy** will activate right as we press the next GCD, letting us maximize our active usage time of the possible 20 seconds.

#### No Mercy Usage Guidelines

Certain GCD speeds are poorly aligned to **No Mercy** and cause **No Mercy** to drift when attempting to cast it, which can drift **No Mercy** away from party buffs. To minimize this as much as possible, there are basic usage guidelines for how and when to cast **No Mercy** based on GCD speed ranges.

**2.50 GCD**

* Use **No Mercy** as an early weave off cooldown.

**2.45 - 2.47 GCD**

* Use **No Mercy** as an early weave without **Bloodfest**.
* Use **No Mercy** as a late weave with **Bloodfest**.

**2.40 - 2.44 GCD**

* Use **No Mercy** as a late weave off cooldown.

# **OPENERS**

## ![2.50 GNB Opener](/img/jobs/gbn/2.5opener_7.1_1.2.png)


## ![2.4N GNB Opener](/img/jobs/gbn/2.4opener_7.1_1.1.png)


#### OPENER NOTES

- The **Lightning Shot** cast is suggested for pull consistency and raid buff alignment.
  - It does not matter if you are MT or ST, this is always fundamentally true.
  - **Trajectory** can be used at -0.22s to replace **Lightning Shot**.
  - **Provoke** can be used at -0.6s to replace **Lightning Shot**, but this is not advised without knowing the fight timeline. You may need to swap within the first 30 seconds of the fight.
- **Sonic Break** being moved to the 9th GCD in the 2.4n Opener is not a new technique, but for those unfamiliar:
  * It is the least risky choice to keep **Hypervelocity** inside of **No Mercy**. (40p gain)
  * If **Sonic Break** falls out of **No Mercy** when trying this, move **Burst Strike** back to the 9th GCD.
  * If **Sonic Break** falls out of raid buffs worth more than 12.1% overall, move﻿﻿ **Burst Strike** back to the 9th GCD.
  * If **Sonic Break** is cut off by downtime, move﻿﻿ **Burst Strike** back to the 9th GCD.

# **Rotation Fundamentals**

![Gunbreaker Rotation Graphic](/img/jobs/gbn/gnbfundamental_7.1_1.1_experimental.png)

</br>

- - -
## FILLER PRIORITY SYSTEM
- - -

The goal of this is to prepare the appropriate cartridges for **No Mercy**.

- Complete the **Solid Barrel** combo continuously to fill the gauge.
- Use **Gnashing Fang** and **Blasting Zone** off cooldown ONCE.
- Use **Burst Strike** only when the cartridge gauge is about to overcap.
  * This occurs anytime the gauge is full and **Solid Barrel** is the next action to use.
  * You should **Burst Strike** into **No Mercy** when you will also have **Bloodfest** to avoid drifting the usage for any speed, and to also optimize damage on 2.50.

Once **No Mercy** comes back off cooldown, weave it in accordance with the usage guideline above this section.

- - -
## BURST PHASE
- - -

The goal of this phase is to fit the maximum amount of potency into **No Mercy**.

GCD cooldowns within **No Mercy** should be used in the following priority:

* Use **Gnashing Fang** and **Double Down**.
* Use **Reign of Beasts** after **Gnashing Fang**.
* Use **Burst Strike** if there is room to do so without pushing out any cooldowns from **No Mercy**.
* Use **Combo Actions** when there are no cooldowns available for use.
* Use **Lightning Shot** if you will be forced out of melee range.

**Sonic Break** should be used in the following priority:

* Use **Sonic Break** anywhere necessary to allow better cooldown usage.
* Use **Sonic Break** as the 9th GCD on 2.4X GCDs to stop **Hypervelocity** from falling out of **No Mercy**.*
* Use **Sonic Break** earlier if any DOT uptime is lost from downtime or fight killtime.

\* Note that the usage of **Sonic Break** as the 9th GCD is solely due to the fact that it has no cooldown, and is the lowest potency option to place at the 9th GCD in order to keep **Hypervelocity** within **No Mercy** without inducing loss. Other options exist that can remove the threat of wasting DoT time, such as:

* From 2.40 - 2.42, you can use **Burst Strike** last and still use **Hypervelocity** before **No Mercy** ends (with very proper timing of **No Mercy**).
* **Lionheart** can also take the place of the 9th GCD instead of **Sonic Break**, but it is a higher potency GCD and therefore the chance of it falling out of **No Mercy** makes it a slightly riskier option.

OGCD cooldowns within **No Mercy** should be used in the following priority:

* Use **Blasting Zone** and **Bow Shock** in any order.
* Use **Bloodfest** only upon reaching zero cartridges.

- - -

## UNIQUE BURST PHASES

- - -

#### Forced 1-Cartridge No Mercy (2.50 Only)

A situation can occur where a **Solid Barrel** is cast on the same GCD you have **No Mercy with Bloodfest** come off cooldown. Since we'd prefer not to drift **Bloodfest within No Mercy** or enter **No Mercy** with 3 cartridges, what do we do?\
\
The solution is to cast a **Burst Strike** in place of that **Solid Barrel**. This will bring you to 1 cartridge, which will force you to use **Sonic Break** as either the first or second GCD of **No Mercy**. **Gnashing Fang** or **Double Down** (or both) will drift by 1 GCD in the process, but **Bloodfest** and **No Mercy** will not at no loss.

This will be your new burst window until you are forced into two-carting again, and when that happens, you will delay **Bloodfest** by one GCD.

- - -

## COMBO CONSIDERATIONS

- - -

![](/img/jobs/gbn/gnb_combobreaker_v1.png)

</br>

Certain actions cannot be cast while certain combo chains are active without breaking the presently active combo chain. It is important to understand what you can or cannot press during a combo chain to avoid losing out on significant potency by mistake.

* Your standard **Solid Barrel** combo cannot be broken by anything but itself or its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are both broken by the Solid Barrel combo, as well as its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are also their own independent combo chains that cannot be used or mixed together, or they will break the other. 

- - -

## SKILL SPEED CONSIDERATIONS

- - -

### Section TLDR:

* GCD cooldowns come off cooldown before **No Mercy** with faster GCDs. Hold them back into **No Mercy**.
* 2.40, 2.45, and 2.50 are driftless for party raid buffs and **No Mercy**.
* 2.45 requires less than or equal to ~50ms ping (or plugins) to not clip/drift **No Mercy**.
* Other GCDs cause some amount of buff drift, potentially drifting **No Mercy** from raid buffs.
* This does not mean that other speeds are unplayable or bad, but it does add the risk of losing bonus raid buff damage.

- - -

### Reverse Drift

Skill Speed (SKS) modifies GCD cooldowns by reducing their cooldowns by 0.1% per SKS tier. This is done to help GCD cooldowns remain aligned to your GCD and not clip them.

This benefit is not extended to oGCD cooldowns. This is done intentionally to keep **No Mercy** aligned to party raid buffs, but it creates misalignment between your GCD cooldowns and **No Mercy**, as all GCD cooldowns begin coming off cooldown sooner than **No Mercy** does. This is referred to as “**reverse drift**”.

The solution to reverse drift is simple - pretend the cooldown reduction does not exist and hold the GCD cooldowns back into **No Mercy**.

### Cooldown Drift

Similarly to how GCD cooldowns do not align to **No Mercy** with SKS, certain GCDs themselves do not align to oGCD cooldowns either. This causes oGCD cooldowns to occasionally drift into the next GCD because they would otherwise clip the GCD if were you to attempt to use them.

Determining how much a cooldown will “move” from the last position it came off cooldown per use on any given speed is found by dividing the cooldown length by your GCD. 

* As an example, 60s/2.50 GCD = 24 GCDs per **No Mercy** or **Bow Shock**, meaning they come off cooldown exactly every 24 GCD rolls from wherever you last used them. This means that the oGCD cooldown will never come off cooldown at a different place in relation to the GCD roll. 
* On 2.46, it becomes 60/2.46 = 24.39 GCDs, meaning that **No Mercy** comes off cooldown +0.39 GCDs after the last time it was used. This appears in practice as if it comes off cooldown “later in the GCD roll” from its previous use. 

This observed usage point shift eventually accumulates to the point that the cooldown will come back off cooldown at a point that it cannot be used without clipping the GCD, forcing the cooldown to drift to the next GCD and then be used at the earliest usable point.

Animation lock plays a significant role in this, because after pressing any GCD action the animation lock must end before any oGCD may be cast. Casting oGCDs right before the next GCD is about to be pressed would also animation lock the GCD, causing a GCD clip. **This limits the room that you can weave oGCDs without clipping the GCD, and that room is both ping dependent and FPS dependent.**

* Higher ping results in longer animation lock, reducing the weaving room before GCD clipping occurs. 
* In regards to FPS, a new GCD can only begin on a new frame, so a microscopic clip that you cannot visually see occurs while you wait for a new frame to generate showing the GCD as usable to the game client. Technically speaking, this increases the time you can weave because you would have clipped by that amount regardless.

What this means for the rotation is that some GCD speeds are just uniquely worse at aligning to oGCDs, and they will cause more drift than other speeds will over the course of a fight. This can be very important for both raid buffs and usages, and due to how loaded the burst window is at level 100, it becomes very unfavorable to drift out of party buffs due to uncontrollable GCD speed-based drift.

The speeds that do NOT drift **No Mercy** by any significant amount are as follows:

* 2.50 GCD (0.00s drift per use)
* 2.45 GCD (0.05s drift per every other use) **(PING DEPENDENT - ≤50MS TO NOT CLIP OR DRIFT)**
* 2.40 GCD (0.00s drift per use)

Those three speeds in particular are the most favorable for staying aligned with party buffs. Going from 2.40 to 2.42 would increase the drift rate because it would take longer for **No Mercy** to return to the same ideal usage point, and you can only use the cooldown off cooldown once per drift. In specific, it would cause **2.42 * (1 - (60 / 2.42 - 24) = 0.5s** of drift per **No Mercy**. This drift linearly increases or decreases within the respective speed range of 2.40 - 2.44 as you go slower or faster respectively, and the same holds true of 2.45 - 2.47 which can use **No Mercy** twice off cooldown in between drifts.

Keep in mind that this doesn’t necessarily mean 2.40 is always better than 2.42 or something slower, it just means that the *risk* of losing raid buff damage over extended periods of time where raid buffs never realign to you is increased when running other speeds, which can potentially be a damage loss depending on the fight you’re in.

# AOE Priority

### Level 100

* Use the **Demon Slaughter** combo on 3 targets or more.
* Use **Fated Circle** on 2 targets or more.
* Use **Double Down** on any number of targets, preferably positioning yourself to strike as many targets as possible.
* Use **Reign of Beasts**' combo on any number of targets, but always try to target the enemy that is closest to as many other enemies as possible, as the damage effect is centered on your current target.
* Use **Gnashing Fang** on up to 2-3* targets.

  * **Gnashing Fang** is technically a gain on up to 2 targets when running an AOE-only rotation to a purely infinite duration, but there are a high number of dynamic AOE scenarios that can exist (uneven add health reducing target count on death, thrown off cooldown alignment by moving this action around resulting in future loss, etc.) that would show this action being a gain when used off cooldown on up to 3 targets, so this is what we feel should be the *average* recommendation for most short encounters around 30 seconds in length or anytime one of the 3 targets is nearly dead. 
  * A good time to consider using **Fated Circle(s)** in place of **Gnashing Fang** at 3 targets is whenever the 3-target AOE encounter will last for more than 30 seconds, or at minimum, whenever skipping or holding a usage would not negatively impact **Gnashing Fang's** alignment throughout the rest of the fight and cause lost usages (or some form of loss within **No Mercy**).
* Use﻿ **Sonic Break** on up to 4 targets.

  * At 4 targets, do not use **Sonic Break** if you suspect that it will not use it's **entire** damage-over-time duration.
  * At 3 targets, do not use **Sonic Break** if you suspect that it will not use at least **half** of it's damage-over-time duration.
  * At 3+ targets, it is a gain to hold **Sonic Break** out of **No Mercy** if it will let you use another **Fated Circle** in it's place.


# Mitigation

#### **Great Nebula**

* Reduces damage taken by 40% for 15 seconds.
* Increases maximum health by 20% and heals you for that amount.

#### **Rampart**

* Reduces damage taken by 20% for 20 seconds.
* Increases healing received by self-healing actions by 15%.

#### **Camouflage**

* Reduces damage taken by 10% for 20 seconds. 
* Provides an additive +50% **parry rate** (for a total of 60% parry rate) for 20 seconds. **Parrying** applies a 15% damage reduction to **physical attacks only**.

#### **Heart of Corundum**

* Reduces their damage taken by 27.75% for the first 4 seconds it was applied, and 15% for the next 4 seconds after that. 
* Applies a 900 potency heal that will proc upon a player's maximum HP reaching less than 50%, or when the buff expires 20 seconds later.

#### **Aurora**

* Targeted 18 second heal over time effect that heals yourself or your target for 300 potency every 3 seconds (1800 total). 
* It has two stacks, which makes it an effective regen effect to apply to any player that requires extra healing over a certain duration.

#### **Superbolide**

* Reduces HP to 50% of your maximum HP and renders you impervious to most attacks for 10 seconds.

#### **Arm’s Length**

* Provides knockback or draw-in effect immunity for six seconds. 
* Applies a 20% Slow effect to enemies that attack you while Arm’s Length is active (enemies will attack you 20% slower, very useful for dungeons).

- - -

## Party Utility

- - -

#### **Heart of Light**

* Reduces **magic damage** taken by 10% for self and party members in a 30y radius around you for 15 seconds.

#### **Reprisal**

* Reduces damage dealt by all enemies in a 5y radius around you by 10% for 15 seconds. 

#### **Low Blow**

* Stuns a target for five seconds. Interrupts any cast.
* Enemies that get stunned repeatedly will slowly develop stun immunity.

#### **Interject**

* Interrupts any cast (if it is an interruptible cast). 

#### **Provoke**

* Places you at the top of the enmity list and grants 5000 potency worth of additional enmity (50,000 if tank stance is active).

#### **Shirk**

* Transfers 25% of your current enmity to any targeted party member.

- - -

## Mitigation Planning

- - -

All mitigation is multiplicative. As an example with both Rampart and Great Nebula together, the total reduced damage amount is **1 - (1 - 0.2) * (1 - 0.4) = 52%** when put together.

Despite the apparent loss in efficiency, it is optimal in many types of content to stack mitigation together to minimize damage taken during periods of heavy damage or high rates of damage, which typically apply to either tankbuster attacks or dungeon pulls. Efficiency loss is irrelevant in relation to fight-specific mitigation needs.

Understanding the fight timeline is critical to effective mitigation. Every pull should be a live re-assessment of your usage timing on mitigation such as Reprisal and Heart of Light (or any personal mitigation) to evaluate if you can cover additional instances of damage with the same usage.

Give yourself appropriate time to weave mitigation during your normal rotation. Utilize the long active timer of your heavy mitigation to your advantage and use it before the cast if necessary. It only needs to be active for the hit preparation.

The majority of tankbusters can be resolved through a basic strategy of employing either Rampart and Camoflauge tied with Heart of Corundum, or Nebula tied with Heart of Corundum. Some strategies may prefer that you use Superbolide as well.

Heart of Corundum is also techable in the sense that you can use it and abuse the proc timer of Catharsis of Corundum, the 900 potency heal effect. The proc heal does not go off until 20 seconds expire, or a player drops below 50% HP. This allows niche strategies to be employed that allow you to very precisely time a heal to go off at the correct time long in advance.

- - -

## Dungeon Tips

- - -

Attempt to pull wall-to-wall if the healer is capable of handling it.\
Use your cooldowns as follows:

#### General Tips

* Prepull Heart of Corundum early to proc free healing as you are running.
* Apply Aurora to help buffer into any required healing.
* Apply Superbolide as needed if healer help is required.

#### First Wall to Wall:

* Rampart and Camoflauge
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)

#### Second Wall to Wall:

* Great Nebula and Arm's Length
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)

This plan works for the majority of dungeon encounters. However, this may not work out due to poor party DPS and you may have to alter cooldown usage. There’s nothing wrong with taking the next few pulls slow if more cooldowns had to be used than normal.