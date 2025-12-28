---
title: Basic Guide
card_header_image: /img/jobs/gnb/screenshot-2025-09-09-131147.png
authors:
  - krom
  - azazael
patch: "7.4"
lastmod: 2025-12-17T02:18:02.784Z
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
# Introductory Concepts
## Section TLDR

* The gauge is what allows you to use your most important actions. Do not overcap or overspend it.
* Damage or healing calculations occur when an action is cast, not when they apply to a target. This is important for buff optimization.
* With GCD recast speeds faster than 2.50, you will occasionally (or always) use **No Mercy** at 9 o-clock relative to the GCD roll indicator.

- - -

**Gunbreaker** is a job with a focus on continuously building and spending cartridges to deal very high damage inside of strict burst windows. As a basic overview, the rotation is a builder-spender rotation focused on optimizing damage dealt every minute inside **No Mercy**, which is a 20% damage buff that lasts for 20 seconds after its use.

We must establish some basic concepts about the gauge usage, buff management, and buff usage before explaining the rotation.

</br>

## Powder Gauge

- - -

The powder gauge (or cartridge gauge) carries a maximum of 3 charges (cartridges), which is the resource required in order to cast all of the desired cooldowns within each usage of **No Mercy**.

The actions that will fill the cartridge gauge are as follows:

* **Solid Barrel** and **Demon Slaughter** both generate one cartridge upon finishing their combo.
* These combo chains cannot be broken unless switching from one to the other or using the wrong action in sequence.
* **Bloodfest** will grant 3 temporary cartridges in addition to your normal 3 without overwriting them.

The actions that will spend cartridges from the gauge are as follows:

* **Double Down** spends two cartridges.
* **Gnashing Fang, Burst Strike,** and **Fated Circle** all spend one cartridge.
* **Gnashing Fang** is broken by the cartridge-generating combos and **Reign of Beasts**.

Familiarizing yourself with each combo and how they work is important. You should generally never break an active combo or finish a combo that will generate another charge while the powder gauge is full, as that would overwrite the charge.

</br>

## How Damage Works With Buffs

- - -

### Damage Snapshotting

Understanding damage "snapshotting" is important because it significantly impacts the correct approach to buff usage, which is relevant to us because of our buff, **No Mercy**. 
- Action damage is calculated instantaneously when the server receives the request to use that action, not when the action applies to a target. 
- In other words, if you use an action when a buff is active, the effects of that buff are saved permanently, regardless of how long it takes for that action to deal damage or heal a target.
- Debuff-based damage over time effects such as **Sonic Break** function in the same way, allowing for more flexible usage of **Sonic Break** since the entire effect is buffed regardless of when **Sonic Break** is used.

This allows a ninth GCD to be buffed by **No Mercy** at GCD recast speeds faster than 2.50, and allows **Sonic Break** to flexibly move as a gap filler for certain optimizations (or mistake recovery) within the burst phase since the effect duration is fully buffed so long as it was initially cast at some point while **No Mercy** was active.

</br>

## No Mercy
- - -
### 9 GCD No Mercy

Acquiring the ninth GCD within **No Mercy** requires a specific usage time relative to the GCD indicator roll. Using **No Mercy** very early in the GCD roll would result in the buff activating while your GCD is still on-cooldown, wasting active buff time as you wait for the next GCD to be usable.

For GCD recast speeds faster than 2.50, **No Mercy** must be cast as a "late weave" to attain the 9th GCD, or if imagining the indicator as a clock, when the rolling GCD indicator reaches a "nearly-9-o-clock" position. **No Mercy** takes slightly over half a second (600ms) to activate after pressing it, so using **No Mercy** as a late weave results in the buff activating at the same time that the next GCD can be cast, wasting little to no active buff time and permitting the use of a ninth GCD within the final second of **No Mercy**.

### Usage Timing By GCD Recast Speed

Not every GCD recast speed is a good fit for **No Mercy**. Some speeds within the range Gunbreaker typically plays at can and will cause inevitable drift because of how a 60 second cooldown aligns to the number of possible GCDs at that GCD speed within a 60 second period. This will drift you away from party buffs, potentially damaging your DPS.

To minimize this as much as possible, there are basic usage guidelines for when to cast **No Mercy** based on **GCD speed ranges**. The **fastest speed within each listed range** is the speed that has the **least drift**. Deviating to a slower speed will linearly increase the innate drift that occurs with every usage of **No Mercy**.

**2.50 GCD**

* Use **No Mercy** off cooldown whenever it is usable, but preferably as an early weave (3 o'clock).

**2.45 - 2.47 GCD**

Alternate between using **No Mercy** off cooldown as a late weave (9 o'clock) and early weave (3 o'clock). Try to make the 9 GCD window fit in raid buffs.

**2.40 - 2.44 GCD**

* Use **No Mercy** off cooldown as a late weave (9 o'clock).

# Openers

![GNB Opener](https://u.cubeupload.com/krom/O1Ms7E.png) </br>

### Opener Notes

- The **Lightning Shot** cast is suggested for threat generation and raid buff alignment.
  - **Trajectory** can be used at -0.66s to replace **Lightning Shot** (1/10th threat generation).
  - **Provoke** can be used at -0.6s to replace **Lightning Shot**, but this is not advised without knowing the fight timeline because **Provoke** may be necessary within the first 30 seconds of the fight for a tank swap and can waste a pull.
- When opting out of using **Lightning Shot** in the case of an encounter that can begin within melee range or by using alternative pulling options listed above, it may be necessary to start **No Mercy** after a third GCD to ensure raid buff alignment remains mostly optimized.

# **Rotation Fundamentals**

![Gunbreaker Rotation Graphic](https://u.cubeupload.com/krom/ZOrXeg.png) </br>
{{< youtube RFaN8RYU2TA >}} </br>

## Filler Priority
- - -

The goal of this is to prepare the appropriate cartridges for **No Mercy**.

- Complete the **Solid Barrel** combo continuously to fill the gauge.
- Use **Gnashing Fang** and **Blasting Zone** off cooldown ONCE. Do not overcap your charges of **Gnashing Fang**.
- Try to only use **Burst Strike** when the cartridge gauge is about to overcap.
  * This occurs anytime the gauge is full and **Solid Barrel** is the next action to use.
  * You should **Burst Strike** into **No Mercy** when you will also have **Bloodfest** to avoid drifting the usage for any speed, and to also optimize damage on 2.50.

Once **No Mercy** comes back off cooldown, weave it in accordance with the usage guideline above this section.

## Burst Phase
- - -

The goal of this phase is to fit the maximum amount of potency into **No Mercy**.

Use **Bloodfest** off cooldown, and try to keep it prior to **No Mercy**. It is not required, but provides additional leniency because it will remove gauge requirements for your burst phase, and provide flexibility in where you can place **Reign of Beasts** and **Gnashing Fang**.

**Double Down**, **Sonic Break**, **Reign of Beasts**, and **Gnashing Fang** should all be placed within **No Mercy**. The order of cooldowns within the burst phase is not strict.

If it appears that GCDs will be lost during the burst phase, attempt to prioritize cooldowns in the following order to minimize potency loss:
1. **Double Down**
2. **Reign of Beasts (combo)**
3. **Sonic Break**
4. **Gnashing Fang**

**Sonic Break** is very flexible, and can be used in the following priority:

* Use **Sonic Break** earlier next pull if **any** DOT uptime is lost from downtime or fight killtime.
* Use **Sonic Break** anywhere necessary to allow better cooldown usage.
* Use **Sonic Break** as the 9th GCD if **Gnashing Fang**'s combo or **Burst Strike** would end up as the 9th GCD within **No Mercy** (specific to speeds other than 2.50).

\* Note that considering the use of **Sonic Break** as the 9th GCD only exists due to the fact that it does not have a cooldown, and is lower potency than **Lionheart**. It contains the risk of wasting a portion of the damage-over-time effect in pulls where you do not know if the boss will become untargetable. Other options exist that can remove the threat of wasting DoT time, such as:

* From 2.40 - 2.41, you can use **Burst Strike** or **Wicked Talon** as the 9th GCD, *and* still have time to use **Continuation** before **No Mercy** ends (only by casting **No Mercy** at the latest possible point in the GCD roll without interrupting the next GCD). This may not possible on ping values greater than ~50ms.
* **Lionheart** can also take the place of the 9th GCD instead of **Sonic Break**, but it is a higher potency GCD than **Sonic Break**, and therefore has the risk of losing additional potency if the 9th GCD is accidentally lost. Doing this also requires you to use **Reign of Beasts** after **Gnashing Fang** within the burst phase.

OGCD cooldowns within **No Mercy** should be used in the following priority:

* Use **Blasting Zone** and **Bow Shock** in any order that fits the needs of a fight.

</br>

## Unique Burst Phase Considerations

- - -

#### Optimizing Gnashing Fang On 2.50 GCD
Due to **Gnashing Fang** being a charge-based cooldown, it can be held up to **No Mercy** without risk of loss in order to buff one of **Gnashing Fang's Continuation** moves instead of **Burst Strike's Hypervelocity**.

This permits **Gnashing Fang** to be used ideally 7 seconds prior to **No Mercy** in a manner that looks like:
1. **Gnashing Fang**
2. **Savage Claw**
3. **Wicked Talon**
4. **No Mercy**
5. **Eye Gouge**
6. Normal burst phase.

It is worth noting that this is the *ideal* case, but **any** **Continuation** from the **Gnashing Fang** combo is a gain over **Hypervelocity**, so holding **Gnashing Fang** for any necessary reason, thereby pushing it partially into **No Mercy**, is perfectly acceptable and considered ideal.

The mental technique to follow is to prioritize finishing the active **Solid Barrel** combo when **No Mercy** has 13 seconds or less on the remaining cooldown, and if necessary, use **Burst Strikes** to stall from then on until it becomes possible to use **Gnashing Fang** within 7 seconds or less prior to **No Mercy**.

A video has been created to demonstrate that here:
{{< youtube 4gjscI0xuJg >}}

An example of when the ideal case cannot be performed is if downtime occurs, and the **Solid Barrel** combo is active within the 7 seconds prior to **No Mercy** coming off cooldown. The normal **Solid Barrel** combo has a 30-second timer that begins the moment the last combo action was pressed, which is too short to be carried through **Gnashing Fang** and an entire **No Mercy**, so that combo must be finished prior to starting **Gnashing Fang**'s combo into **No Mercy**.

During full uptime, the combo can be managed to not be active upon reaching time to cast **Gnashing Fang** by utilizing **Burst Strikes** to manipulate the combo position to always end the **Solid Barrel** combo shortly before beginning **Gnashing Fang**. The opener that has been suggested in this guide requires zero usages of **Burst Strike** for the first minute after the opener has ended, but after that, attempt to follow this technique:

- Take the number of cartridges present when **No Mercy** ends.
- If the number is zero, the number of **Burst Strikes** is one.
- If the number is nonzero, double that number.
- **Burst Strike** that many times before reaching the next **Gnashing Fang** into **No Mercy**.

If any GCDs bleed out of **No Mercy** into the subsequent filler section due to downtime or interruptions within **No Mercy** (or **Lightning Shot** is used within filler), remove one necessary **Burst Strike** per unexpected GCD within filler.

If uncomfortable with attempting this technique, do not attempt it and use **Gnashing Fang** anywhere within the filler with **Burst Strike** into **No Mercy** instead. This is not a significant loss, reducing your DPS by only 0.15% - 0.2%.

#### Gnashing Fang Optimizations for Speeds Below 2.50

Since 9 GCDs within **No Mercy** becomes possible for speeds faster than 2.50, the goal shifts from moving **Eye Gouge** into **No Mercy** over to moving **Wicked Talon** into **No Mercy**.

This is done by starting **Gnashing Fang** approximately 3-4 seconds before **No Mercy** comes off cooldown. The combo timer can be carried through **Gnashing Fang** and **No Mercy** without breaking, unlike 2.50 due to the reduced time between GCDs.
- Be warned, any major GCD clipping within **No Mercy** can risk loss of combo state.

</br>

## Combo Considerations

- - -

![](/img/jobs/gnb/gnb_combobreaker_v1.png)

</br>

Certain actions cannot be cast while certain combo chains are active without breaking the presently active combo chain. It is important to understand what can or cannot be pressed during a combo chain to avoid losing out on significant potency by mistake.

* The standard **Solid Barrel** combo cannot be broken by anything but itself or its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are both broken by the Solid Barrel combo, as well as its AOE counterpart. 
* **Gnashing Fang** and **Lionheart** are also their own independent combo chains that cannot be used or mixed together, or they will break the other. 

</br>

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

This benefit is not extended to oGCD cooldowns. This is done intentionally to keep **No Mercy** aligned to party raid buffs, but it creates misalignment between GCD cooldowns like **Double Down** and oGCD cooldowns like **No Mercy**, because GCD cooldowns like **Double Down** begin coming off cooldown sooner than **No Mercy** does. This is referred to as “**reverse drift**", because cooldowns are readied for use too early relative to the buff they should be used in.

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

Those three speeds in particular are the most favorable for staying aligned with party buffs. Going from 2.40 to 2.42 would increase the drift rate because it would take longer for **No Mercy** to return to the same ideal usage point, and the cooldown can only be used one time per drift. In specific, it would cause **2.42 * (1 - (60 / 2.42 - 24) = 0.5s** of drift per **No Mercy** (excluding factors like framerate). This drift linearly increases or decreases within the respective speed range of 2.40 - 2.44 as the GCD is slowed or sped up respectively, and the same holds true of 2.45 - 2.47 which can use **No Mercy** twice off cooldown between drifts of **No Mercy**.

Keep in mind that this doesn’t necessarily mean 2.40 is always better than 2.42 or something slower, it just means that the *risk* of losing raid buff damage over extended periods of time where raid buffs never realign to **No Mercy** is increased when running other speeds, which can potentially be a damage loss depending on the encounter.

</br>

## Recovery Considerations

- - -
### SECTION TLDR:
- Being rebuilt for 7.4.
- - -

This section is still under reconstruction for the mini-rework of 7.4. It will cover mostly GCD downtime.

# AOE Priority

## Level 100

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

**Great Nebula**

* Reduces damage taken by 40% for 15 seconds.
* Increases maximum health by 20% and heals you for that amount.

**Rampart**

* Reduces damage taken by 20% for 20 seconds.
* Increases healing received by self-healing actions by 15%.

**Camouflage**

* Reduces damage taken by 10% for 20 seconds. 
* Provides an additive +50% **parry rate** (for a total of 60% parry rate) for 20 seconds. **Parrying** applies a 15% damage reduction to **physical attacks only**.

**Heart of Corundum**

* Reduces their damage taken by 27.75% for the first 4 seconds it was applied, and 15% for the next 4 seconds after that. 
* Applies a 900 potency heal that will proc upon a player's maximum HP reaching less than 50%, or when the buff expires 20 seconds later.

**Aurora**

* Targeted 18 second heal over time effect that heals yourself or your target for 300 potency every 3 seconds (1800 total). 
* It has two stacks, which makes it an effective regen effect to apply to any player that requires extra healing over a certain duration.

**Superbolide**

* Reduces HP to 50% of your maximum HP and renders you impervious to most attacks for 10 seconds.

**Arm’s Length**

* Provides knockback or draw-in effect immunity for six seconds. 
* Applies a 20% Slow effect to enemies that attack you while Arm’s Length is active (enemies will attack you 20% slower, very useful for dungeons).

</br>

## Party Utility

- - -

**Heart of Light**

* Reduces **magic damage** taken by 10% and **physical damage** taken by 5% for self and party members in a 30y radius around you for 15 seconds.

**Reprisal**

* Reduces damage dealt by all enemies in a 5y radius around you by 10% for 15 seconds. 

**Low Blow**

* Stuns a target for five seconds. Interrupts any cast.
* Enemies that get stunned repeatedly will slowly develop stun immunity.

**Interject**

* Interrupts any cast (if it is an interruptible cast). 

**Provoke**

* Places you at the top of the enmity list and grants 5000 potency worth of additional enmity (50,000 if tank stance is active).

**Shirk**

* Transfers 25% of your current enmity to any targeted party member.

</br>

## Mitigation Planning

- - -

All mitigation is multiplicative. As an example with both Rampart and Great Nebula together, the total reduced damage amount is **1 - (1 - 0.2) * (1 - 0.4) = 52%** when put together.

Despite the apparent theoretical 8% loss in efficiency from stacking them, it is not only optimal but *necessary* in many types of content to stack mitigation together to minimize damage taken during instances of heavy damage or periods with a high rate of damage, which typically apply to either tankbuster attacks or dungeon pulls respectively, but can also apply to things like boss auto attack chains. **Efficiency loss is irrelevant in relation to fight-specific mitigation needs, especially when most cooldowns are sitting waiting to be used throughout a fight anyways.**

Understanding the fight timeline is critical to effective mitigation. Every pull you make should be a live re-assessment of your usage timing on mitigation such as Reprisal and Heart of Light (or any personal mitigation) to evaluate if you can either cover additional instances of damage with the same usage, or gain additional usages of that cooldown later while still covering the same instance of damage with the current usage.

Give yourself appropriate time to weave mitigation during your normal rotation. Utilize the long active timer of your heavy mitigation to your advantage and use it before the cast if necessary to permit weaving needs. It only needs to be active for the hit preparation.

The majority of tankbusters can be resolved through a basic strategy of employing either Rampart and Camoflauge tied with Heart of Corundum, or Nebula tied with Heart of Corundum. Some strategies may prefer that you use Superbolide as well.

Heart of Corundum is also an extremely flexible action in the sense that you can use it and abuse the proc timer of Catharsis of Corundum, which is the 900 potency heal effect that it carries. The proc heal does not go off until 20 seconds expire, or a player drops below 50% HP. This allows niche strategies to be employed that allow you to very precisely time a heal to go off at the ideal time, where healing is necessary but mitigation is not.

</br>

## Dungeon Tips

- - -

Attempt to pull wall-to-wall if the healer is capable of handling it.\
Use your cooldowns as follows:

**General Tips**

* Prepull Heart of Corundum early to proc free healing as you are running.
* Apply Aurora to help buffer into any required healing.
* Apply Superbolide as needed if healer help is required.
* Lightly space mitigations out over a couple of GCDs, but ensure most of it is active while the majority of the dungeon targets are alive.
* If you're playing with a WHM, let them cast Holy on the mobs before mitting.

**First Wall to Wall**:

* Rampart and Camoflauge
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)
* Consider Heart of Light (5% physical)

**Second Wall to Wall**:

* Great Nebula and Arm's Length
* Heart of Corundum (off cooldown)
* Reprisal
* Low Blow (off cooldown)

After Great Nebula expires, Rampart/Camoflauge/Heart of Light should be coming off cooldown again.

This plan works for the majority of dungeon encounters. However, this may not work out due to poor party DPS and you may have to alter cooldown usage. There’s nothing wrong with taking the next few pulls slow if more cooldowns had to be used than normal.
