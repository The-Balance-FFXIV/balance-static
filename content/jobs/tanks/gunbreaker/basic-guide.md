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

**Gunbreaker** is a tank job with a focus on continuously building and spending cartridges to deal very high damage inside of strict burst windows. As a basic overview, the rotation is a builder-spender rotation focused on optimizing damage dealt every minute inside **No Mercy**, which is a 20% damage buff that lasts for 20 seconds after its use.

In this guide we will discuss a number of subjects, beginning with a simple introduction to the priority system for the rotation and then moving into more scenario specific subjects for particular things that alter the rotation in specific ways.

- - -

## Powder Gauge

- - -

The powder gauge (or cartridge gauge) carries a maximum of 3 charges (or cartridges), and is the resource gauge that we manage in order to carry enough cartridges to cast all of our cooldowns within **No Mercy**.

The actions that will fill the cartridge gauge are as follows:

* **Solid Barrel** and **Demon Slaughter** both generate one cartridge upon finishing their combo.
* **Bloodfest** will completely refill the cartridge gauge.

The actions that will spend cartridges from the gauge are as follows:

* **Gnashing Fang, Double Down, Burst Strike,** and **Fated Circle** all spend one cartridge.

- - -

## Buff Principles & Using No Mercy

- - -

### Section TLDR:

* Damage calculations occur as soon as you press an action, not when it hits a target.
* This results in it being possible to get extra GCDs into your buff by casting it later at certain GCD speeds.
* Yo should use **No Mercy** off cooldown in accordance with the usage guidelines at the end of this section.
* Do not attempt to clip the GCD to cast **No Mercy** off cooldown.

- - -

We need to establish a couple of concepts first regarding both how damage is calculated and how cooldowns align from GCD speeds to understand how and when to use **No Mercy**.

#### Damage Snapshotting

Understanding damage "snapshotting" is important because of the way it impacts buff management. Action damage is calculated instantaneously when the server receives the request to use that action, not when the action applies to a target. Debuff-based damage over time effects such as **Sonic Break** function in the same way, allowing for more flexible usage of **Sonic Break**.

This allows a ninth GCD to be buffed within **No Mercy** at faster speeds than 2.50, and allows **Sonic Break** to fill in certain rotational needs since the duration effect is fully buffed so long as it was initially cast at some point within **No Mercy**.

#### 9 GCD No Mercy

Acquiring the ninth GCD within **No Mercy** requires a specific usage time relative to the GCD roll. Using **No Mercy** very early in the GCD roll would result in the buff activating while your GCD is still on-cooldown, wasting active buff time.

**No Mercy** must be cast as a "late weave", or when the rolling GCD indicator reaches a near-9-o-clock position when imagining the indicator as a clock. **No Mercy** takes slightly over half a second (600ms) to activate after pressing it, so using **No Mercy** as a late weave will result in the buff activating at the same time that the next GCD can be cast, wasting little to no active buff time and permitting the use of a ninth GCD within the final second of **No Mercy**.

#### No Mercy Usage Guidelines

Certain GCD speeds are poorly aligned to **No Mercy** and cause **No Mercy** to drift when attempting to cast it, which can drift **No Mercy** away from party buffs. To minimize this as much as possible, there are basic usage guidelines for how and when to cast **No Mercy** based on GCD speed ranges. As a rule of thumb, 2.50, 2.45, and 2.40 all have little to no innate drift of **No Mercy**. Deviating to a slower speed within the listed ranges below will introduce some drift to the cooldown regardless of how well you follow the guidelines below.

**2.50 GCD**

* Use **No Mercy** as an early weave off cooldown.

**2.45 - 2.47 GCD**

* Use **No Mercy** as an early weave without **Bloodfest**.
* Use **No Mercy** as a late weave with **Bloodfest**.

**2.40 - 2.44 GCD**

* Use **No Mercy** as a late weave off cooldown.

# Openers

![2.50 GNB Opener](https://u.cubeupload.com/krom/PKVD4O.png)

</br>

![2.4N GNB Opener](https://u.cubeupload.com/krom/sjDxEW.png)
</br>

#### Opener Notes

- The **Lightning Shot** cast is suggested for threat generation and raid buff alignment.
  - **Trajectory** can be used at -0.66s to replace **Lightning Shot** (1/10th threat generation).
  - **Provoke** can be used at -0.6s to replace **Lightning Shot**, but this is not advised without knowing the fight timeline. You may need to use **Provoke** within the first 30 seconds of the fight for a tank swap.
- **Sonic Break** being used on the 9th GCD in the 2.4n Opener has caveats:
  * It is the least risky choice to keep **Hypervelocity** inside of **No Mercy**. (40p gain)
  * If **Sonic Break** falls out of **No Mercy** when trying this, move **Burst Strike** back to the 9th GCD.
  * If **Sonic Break** falls out of raid buffs worth more than 12.1% overall, move﻿﻿ **Burst Strike** back to the 9th GCD.
  * If **Sonic Break** is cut off by downtime, move﻿﻿ **Burst Strike** back to the 9th GCD.

# **Rotation Fundamentals**

![Gunbreaker Rotation Graphic](https://u.cubeupload.com/krom/otFy8D.png)

</br>

- - -
## Filler Priority
- - -

The goal of this is to prepare the appropriate cartridges for **No Mercy**.

- Complete the **Solid Barrel** combo continuously to fill the gauge.
- Use **Gnashing Fang** and **Blasting Zone** off cooldown ONCE.
- Use **Burst Strike** only when the cartridge gauge is about to overcap.
  * This occurs anytime the gauge is full and **Solid Barrel** is the next action to use.
  * You should **Burst Strike** into **No Mercy** when you will also have **Bloodfest** to avoid drifting the usage for any speed, and to also optimize damage on 2.50.

Once **No Mercy** comes back off cooldown, weave it in accordance with the usage guideline above this section.

- - -
## Burst Phase
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
* Use **Sonic Break** earlier next pull if any DOT uptime is lost from downtime or fight killtime.

\* Note that considering the use of **Sonic Break** as the 9th GCD only exists due to the fact that it has no cooldown and is the lowest potency option to place at the 9th GCD in order to keep **Hypervelocity** within **No Mercy** without inducing loss. It contains the risk of wasting a portion of the damage-over-time effect in pulls where you do not know if the boss will become untargetable. Other options exist that can remove the threat of wasting DoT time, such as:

* From 2.40 - 2.41, you can use **Burst Strike** as the 9th GCD and still have time to use **Hypervelocity** before **No Mercy** ends (only by casting **No Mercy** at the latest possible point in the GCD roll without interrupting the next GCD).
* **Lionheart** can also take the place of the 9th GCD instead of **Sonic Break** but it is a higher potency GCD than **Sonic Break**, and therefore has the risk of losing additional potency if the 9th GCD is accidentally lost.

OGCD cooldowns within **No Mercy** should be used in the following priority:

* Use **Blasting Zone** and **Bow Shock** in any order that fits the needs of a fight.
* Use **Bloodfest** only upon reaching zero cartridges.
  * **Bloodfest** is normally moved **into the burst window** for maximum resource flexibility. Doing so results in you automatically having the necessary powder gauge for your next burst.
  * Using **Bloodfest** before your burst window can permit a more optimal killtime, as it will move your **Burst Strike** damage before **No Mercy**.

- - -

## Unique Burst Phases

- - -

#### Forced 1-Cartridge No Mercy (2.50 Only)

Rotational upsets, GCD downtime, or the usage of **Lightning Shot** can create a scenario where a **Solid Barrel** is cast on the same GCD that **No Mercy with Bloodfest** comes off cooldown placing the cartridge gauge at 3 cartridges when casting **No Mercy**. Since **No Mercy** should ideally not drift to maintain alignment and **No Mercy** should not begin with 3 cartridges at 2.50, there is only one solution to that situation that avoids both problems:\
\
Reduce to 1 cartridge by casting a **Burst Strike** in place of that **Solid Barrel**. This will force **Sonic Break** to be cast at either the first or second GCD of **No Mercy** to prevent a combo action from taking the place of **Gnashing Fang** or **Double Down**. Either **Gnashing Fang** or **Double Down** (or both, depending on where you place **Sonic Break**) will drift by 1 GCD in the process, but **Bloodfest** and **No Mercy** will not drift with no potency loss during the burst phase.

All future usages of **No Mercy with Bloodfest** will begin with 1 cartridge. Encountering any additional rotational upsets can potentially force **No Mercy** to begin off cooldown again with two cartridges. If that happens, delay **Bloodfest** by one GCD.

- - -

## Combo Considerations

- - -

![](/img/jobs/gbn/gnb_combobreaker_v1.png)

</br>

Certain actions cannot be cast while certain combo chains are active without breaking the presently active combo chain. It is important to understand what can or cannot be pressed during a combo chain to avoid losing out on significant potency by mistake.

* The standard **Solid Barrel** combo cannot be broken by anything but itself or its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are both broken by the Solid Barrel combo, as well as its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are also their own independent combo chains that cannot be used or mixed together, or they will break the other. 

- - -

## Skill Speed Considerations

- - -

### Section TLDR:

* GCD cooldowns come off cooldown before **No Mercy** with faster GCDs. Hold them back into **No Mercy**.
* 2.40, 2.45, and 2.50 are driftless for party raid buffs and **No Mercy**.
* 2.45 requires less than or equal to ~50ms ping (or plugins) to not clip/drift **No Mercy**.
* Other GCDs cause some amount of buff drift, potentially drifting **No Mercy** from raid buffs.
* This does not mean that other speeds are unplayable or bad, but it does add the risk of losing bonus raid buff damage.

- - -

### Reverse Drift

Skill Speed (SKS) modifies GCD cooldowns by reducing their cooldowns by 0.1% per SKS tier. This is done to help GCD cooldowns remain aligned to the GCD and not clip them aggressively.

This benefit is not extended to oGCD cooldowns. This is done intentionally to keep **No Mercy** aligned to party raid buffs, but it creates misalignment between GCD cooldowns like **Gnashing Fang** and oGCD cooldowns like **No Mercy**, because GCD cooldowns like **Gnashing Fang** begin coming off cooldown sooner than **No Mercy** does. This is referred to as “**reverse drift**", because cooldowns are readied for use too early relative to the buff they should be used in.

The solution to "reverse drift" is simple - pretend the cooldown reduction does not exist and hold the GCD cooldowns back into **No Mercy**.

### Cooldown Drift

Similarly to how GCD cooldowns do not align to **No Mercy** with SKS, certain GCD speeds do not align themselves to oGCD cooldowns either. This causes oGCD cooldowns to occasionally drift into the next GCD, because they would interrupt the next GCD cast if they were cast upon becoming ready for use due to animation lock.

Animation lock plays a significant limiting role in whether or not you can press an action when it becomes ready for use, because animation lock from the previous action used (either GCD or oGCD) must end before any other action may be cast. This is why casting oGCDs right before the next GCD is about to be pressed can interrupt the next GCD and cause a GCD clip. **This limits the timing with the GCD roll that oGCDs can be cast without clipping the GCD, and that room is both ping dependent and FPS dependent.**
* Higher ping results in longer animation lock, reducing the weaving room before GCD clipping occurs. 
* In regards to FPS, a new GCD can only begin on a new frame, so a microscopic clip that you cannot visually see occurs while you wait for a new frame to generate showing the GCD as usable to the game client. Technically speaking, this increases the time you can weave because you would have clipped by that amount regardless.

Determining how much a cooldown will “shift” from the last position it came off cooldown per use on any given speed is found by dividing the cooldown length by the GCD speed. 

* As an example, 60s / 2.50s GCD = 24 GCDs per **No Mercy** or **Bow Shock**, meaning a 60 second cooldown will come off cooldown exactly every 24 GCD rolls from wherever the last usage occurred. Practically, this means that oGCD cooldown will never be ready for use at a different place in relation to the GCD roll as long as the GCD roll was never interrupted or stopped. This can be observed by playing 2.50 and using a 60 second cooldown, then repeatedly spamming one GCD action until the 60 second cooldown becomes ready for use again.
* On 2.46, this becomes 60s / 2.46s GCD = 24.39 GCDs, meaning that **No Mercy** will become ready for use again +0.39 GCDs after the last time it was cast relative to the GCD roll, because 24 GCD rolls have completed and another 0.39 GCDs must occur before it will become ready for use again. Using a clock example, if the last cast was at 3 o'clock, the next time **No Mercy** will be available for use is approximately at 7 o'clock relative to the GCD indicator roll.

This observed shift in where a cooldown becomes ready for use again will accumulate with every usage to the point that the cooldown will eventually become ready for use at a point that it cannot be used without interrupting the next GCD cast, forcing the cooldown to be held to the next GCD and then be used at the earliest usable point within the next GCD roll.

What this means for the rotation is that some GCD speeds are just uniquely worse at aligning to oGCDs and will cause more drift than other speeds will over the course of a fight. This can be very important for both raid buffs and preventing loss of cooldown usages, and due to how loaded the burst window is at level 100, it becomes very unfavorable to drift out of party buffs due to uncontrollable GCD speed-based drift because high-potency actions such as **Lionheart** will leave party buffs first.

The speeds that do NOT drift **No Mercy** by any significant amount are as follows:

* 2.50 GCD (0.00s drift per use)
* 2.45 GCD (0.05s drift per every other use) **(PING DEPENDENT - ≤50MS TO NOT CLIP OR DRIFT)**
* 2.40 GCD (0.00s drift per use)

Those three speeds in particular are the most favorable for staying aligned with party buffs. Going from 2.40 to 2.42 would increase the drift rate because it would take longer for **No Mercy** to return to the same ideal usage point, and the cooldown can only be used one time per drift. In specific, it would cause **2.42 * (1 - (60 / 2.42 - 24) = 0.5s** of drift per **No Mercy** (excluding factors like innate clip rate from **Gnashing Fang** or framerate). This drift linearly increases or decreases within the respective speed range of 2.40 - 2.44 as the GCD is slowed or sped up respectively, and the same holds true of 2.45 - 2.47 which can use **No Mercy** twice off cooldown between drifts of **No Mercy**.

Keep in mind that this doesn’t necessarily mean 2.40 is always better than 2.42 or something slower, it just means that the *risk* of losing raid buff damage over extended periods of time where raid buffs never realign to **No Mercy** is increased when running other speeds, which can potentially be a damage loss depending on the encounter.

- - -

## Recovery Considerations

- - -
### SECTION TLDR:
- Recovery depends somewhat on GCD speed. Faster speeds are easier to recover because of cooldown reduction and extra **No Mercy** space.
- The goal of recovery is to fit the desired cooldowns back into **No Mercy**, not necessarily keep them in their original order.
- Use **Bloodfest** earlier or later to solve GCD cooldown usage issues or powder gauge issues respectively.
- Use **Sonic Break** to fill in drifted cooldown space where **Gnashing Fang** or **Double Down** would normally be.
- Consider the use of **Reign of Beasts** earlier to flip the place of the **Gnashing Fang** combo if **Gnashing Fang** has drifted excessively.
- - -

Recovery is always a situational problem that has specific answers for each scenario. It is a multifaceted problem that depends on fight time available, the nature of the recovery (between death, drift, or lack of resources), GCD speed, and previous cooldown position with specific cooldowns like **Bloodfest**.

Recovery does not necessarily mean returning to a "normal" state of play that you are used to. You will have to adapt to cooldown shifts and learn to play with your cooldowns being out of order. The order of your cooldowns is irrelevant as long as nothing is pushed out of your buff, **No Mercy**.

GCD speed with Gunbreaker results in differing requirements for recovery, because adding speed introduces cooldown reduction to **Gnashing Fang** and **Double Down**. This means that their cooldowns will become ready for use earlier than they were in your previous burst phase. This can be used to your advantage if either cooldown ever drifts, because it is unlikely that you will need to hold **No Mercy** or do anything special with **Bloodfest** to realign them or keep your burst phase (with **Bloodfest**) from developing an undesired space filled with suboptimal GCDs.

Faster GCD speed also permits the ability to have a 9th GCD available within **No Mercy**, which allows for additional room to move cooldowns around without drifting them outside of your buff.

**Sonic Break** can be moved anywhere necessary to fill in the space of a drifted GCD cooldown. If **Gnashing Fang** drifts, an undesired space will form within your burst phase (with **Bloodfest**) that, on slower speeds, would potentially necessitate the usage of a suboptimal filler GCD in it's place. Since **Sonic Break** does not have a cooldown, it can be placed in that undesired space to prevent the usage of suboptimal GCDs.

Regarding suboptimal GCD space, if **Gnashing Fang** drifts excessively to the point that an undesired space during your burst phase (with **Bloodfest**) is unavoidable even after moving **Sonic Break** into the original place of **Gnashing Fang**, then you can opt to use the **Reign of Beasts** combo earlier and flip the usage order between **Reign of Beasts** and **Gnashing Fang**, which may drift **Gnashing Fang** further slightly into your burst phase, but will prevent the formation of undesired suboptimal GCD space that would push out important cooldowns.
 - This may be necessary if you die and revive with the ability to press **Gnashing Fang** inbetween burst phases during filler. If **No Mercy** has >15 seconds left when you are able to press **Gnashing Fang**, you can do so without pushing the next **Gnashing Fang** out of **No Mercy**, but it will be pushed to the very end of your burst phase. 

If none of these heuristics are available options, a small delay to **No Mercy** of a GCD or two will typically permit the ability to fit all of your cooldowns within **No Mercy** again.

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

* Reduces **magic damage** taken by 10% and **physical damage** taken by 5% for self and party members in a 30y radius around you for 15 seconds.

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
* Lightly space mitigations out over a couple of GCDs, but ensure most of it is active while the majority of the dungeon targets are alive.
* If you're playing with a WHM, let them cast Holy on the mobs before mitting.

#### First Wall to Wall:

* Rampart and Camoflauge
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)
* Consider Heart of Light (5% physical)

#### Second Wall to Wall:

* Great Nebula and Arm's Length
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)

After Great Nebula expires, Rampart/Camoflauge/Heart of Light should be coming off cooldown again.

This plan works for the majority of dungeon encounters. However, this may not work out due to poor party DPS and you may have to alter cooldown usage. There’s nothing wrong with taking the next few pulls slow if more cooldowns had to be used than normal.