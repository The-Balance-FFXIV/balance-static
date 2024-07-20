---
title: Gunbreaker Basic Guide
card_header_image: /img/jobs/gnb/basic.png
authors:
  - azazael
  - Balance-GNB-Staff
patch: "6.4"
lastmod: 2023-05-28T13:28:36.724Z
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
---
# Gunbreaker Rotation Guide

#### Authors

**Krom Ulus** | Adamantoise (Aether) | discord: krom.ulus\
**Azazel Raine** | Balmung (Crystal) | discord: azazelraine

- - -

## Playstyle and Core Concepts

- - -

Gunbreaker is a high APM tank job with a focus on continuously building and spending cartridges optimally to deal very high damage inside of strict burst windows. The rotation at a basic overview is a builder-spender rotation focused on optimizing damage dealt inside No Mercy, which is a 20% damage buff that is usable every 60 seconds and lasts for 20 seconds after its use.

In this guide we will discuss a number of subjects, beginning with a simple introduction to the priority system for the rotation and then moving into more scenario specific subjects for particular things that alter the rotation in specific ways.

### CARTRIDGE GAUGE

- - -

The cartridge gauge is the resource gauge that we manage in order to carry enough cartridges to cast all of our cooldowns within **No Mercy**.

The cartridge gauge can hold up to two cartridges until reaching level 88, where a trait allows it to begin holding three. This gauge and the actions that spend resources from that gauge are what make the burst windows on Gunbreaker tight, because you can never hold more than exactly what you need to use your cooldowns.

The actions that will fill the cartridge gauge are as follows:

* **Solid Barrel** and **Demon Slaughter** both generate one cartridge upon finishing their combo.
* **Bloodfest** will completely refill the cartridge gauge.

The actions that will spend cartridges from the gauge are as follows:

* **Gnashing Fang, Burst Strike,** and **Fated Circle** all spend one cartridge.
* **Double Down** will spend two cartridges.

**Gnashing Fang** and **Double Down** are both GCD cooldowns that should ideally be used off cooldown. Because they both align into **No Mercy**, this means you must at some point generate 3 cartridges either within or before the period that **No Mercy** is active *and* cast both cooldowns inside of it.

Next, we will discuss **No Mercy** and how to ideally use it before discussing the priority system surrounding it.

### NO MERCY AND BUFF PRINCIPLES

- - -

In order to understand why **No Mercy** (and other buffs) are used the way that they are, we need to establish a couple of concepts first in relation to both how damage is calculated and how cooldowns align from GCD tiers.

#### Damage Snapshotting

Damage in FFXIV is calculated by snapshotting cast points, respecting all buffs and debuffs at the exact frame that the cast point was registered. This means that the damage actually applying to and hitting a target is already calculated before it ever reaches the target, so you do not have to worry about a buff falling off in between the time that you pressed an action and the time it took for the damage to hit the target.

DOT effects work in the same way, so all of the DOT damage is calculated from the frame that the action is pressed. If you press **No Mercy** and then use **Sonic Break** as the last GCD within the buff window, the entire 30 seconds of **Sonic Break** is still buffed by **No Mercy** even though most of it is active while **No Mercy** is not.

This greatly affects the flexibility in how the burst rotation can be set up, because it means that as long as damage-over-time effects fully tick and expire without being wasted, they can go anywhere within **No Mercy**. On certain GCD speeds, it also means that we can fit additional GCDs into **No Mercy** without needing enough time have those extra GCDs actually hit while **No Mercy** is still active.

#### 9 GCD No Mercy

On GCDs of 2.47 or faster, we can typically begin to gain an additional 9th GCD into **No Mercy** due to the fact that it takes less time to press the same actions within our 20 second window. Thanks to damage snapshotting, we also don’t have to care about when that 9th GCD hits the target, so we only care that it was pressed while **No Mercy** was still active. This extra GCD is very dependent on when **No Mercy** is used relative to the GCD cooldown roll and requires a specific use timing to actually attain, though.

In order to use the full 20 seconds of **No Mercy**, we must use No Mercy as a “late weave”, or cast it in between the bottom left and top left corner of our GCD icon. This makes it so that **No Mercy** will activate right as we press the next GCD, granting us the maximum amount of time to use our buff.

There is another very important consideration to make regarding GCD speeds and **No Mercy**, which is how well that GCD aligns to the cooldown of **No Mercy** itself. A poorly aligned 60s/GCD interval will cause **No Mercy** to drift rather excessively when attempting to late weave it which may result in drifting away from party buffs. To avoid this, there are basic usage guidelines for how and when to cast **No Mercy**.

#### No Mercy Usage Guidelines

The ideal **No Mercy** usage guidelines for specific speeds are as follows:

**2.50 GCD**

* Use **No Mercy** as an early weave off cooldown.

**2.45 - 2.47 GCD**

* Use **No Mercy** as an early weave without **Bloodfest**.
* Use **No Mercy** as a late weave with **Bloodfest**.

**2.40 - 2.44 GCD**

* Use **No Mercy** as a late weave off cooldown.

#### Section TLDR:

* All damage is calculated on the frame that an action is cast, not when damage hits a target.
* Use **No Mercy** off cooldown in accordance with the usage guidelines directly above this.
* Do not attempt to clip the GCD to cast **No Mercy**.

## **AOE Priority**

- - -

![AOE Prio](/img/jobs/gnb/gnb-ammended.png "AOE Rotation/Priority")

## Notable Utility

- - -

![Heart of Corundum](/img/jobs/gnb/hoc.png "Heart of Corundum")

**Heart of Corundum** provides your target with a buff that reduces their damage taken by 27.75% for the first 4 seconds it was applied, and 15% for the next 4 seconds after that. It also applies a 900 potency heal that will proc onto that target upon their maximum HP reaching less than 50%, or when the buff expires 20 seconds later.

* The heal is extremely powerful, and due to the proc or timer expiration requirement, it can be used as a plannable healing tool that can heal almost half of a DPS's health bar.

![Camouflage](/img/jobs/tanks/gunbreaker/Aurora.png)

**Aurora** is a targeted 18 second heal over time effect that heals yourself or your target for 200 potency every 3 seconds (1200 total). It has two stacks, which makes it an effective regen effect to apply to any player that requires extra healing over a certain duration. However, this effect does not stack so you cannot apply a double Aurora to someone, it'll merely refresh the duration.

![Camouflage](/img/jobs/tanks/gunbreaker/Camouflage.png)

**Camouflage** reduces damage taken by 10% for 20 seconds. Provides an additive +50% **parry rate** (for a total of 60% parry rate) for 20 seconds. **Parrying** applies a 15% damage reduction to **physical attacks only**.

* The 10% damage reduction always applies to every damage instance.

![Rampart](/img/jobs/tanks/gunbreaker/Rampart.png)

**Rampart**\
**CD: 90s**

Reduces damage taken by 20% for 20 seconds.

![Nebula](/img/jobs/tanks/gunbreaker/Nebula.png)

**Nebula**\
**CD: 120s**

Reduces damage taken by 30% for 15 seconds.

![Superbolide](/img/jobs/tanks/gunbreaker/Superbolide.png)

**Superbolide**\
CD: 360s / 6m

Reduces HP to 1 and renders you impervious to most attacks for 10 seconds.

![ArmsLength](/img/jobs/tanks/gunbreaker/Arms_Length.png)

**Arm’s Length**\
**CD: 120s**

Role action. Makes you immune to most knockback or draw-in effects for six seconds. Applies a 20% slow to enemies that attack you while Arm’s Length is active (This means enemies will attack you 20% slower, very useful for dungeons).

## Utility Off Global Cool Down Abilities

- - -

![HeartOfLight](/img/jobs/tanks/gunbreaker/Heart_of_Light.png)

**Heart of Light**\
**CD: 90s**

Reduces magic damage taken by 10% for self and party members in a 30y radius around you for 15 seconds.

![Reprisal](/img/jobs/tanks/gunbreaker/Reprisal.png)

**Reprisal**\
**CD: 60s**

Role action. Reduces damage dealt by all enemies in a 5y radius around you by 10% for 10 seconds. 

![LowBlow](/img/jobs/tanks/gunbreaker/Low_Blow.png)

**Low Blow**\
**CD: 25s**

Role action. Stuns a target for five seconds. Enemies that get stunned repeatedly will develop stun immunity.

![Interject](/img/jobs/tanks/gunbreaker/Interject.png)

**Interject**\
**CD: 30s**

Role action. Cancels a target's cast (if it is an interruptible cast). 

![RoyalGuard](/img/jobs/tanks/gunbreaker/Royal_Guard.png)

**Royal Guard**

Tank stance. While toggled on, applies a 10x enmity modifier to all abilities.

![Provoke](/img/jobs/tanks/gunbreaker/Provoke.png)

**Provoke**

Role action. Puts you at the top of the enmity list and gives 2000 potency worth of additional enmity (20,000 if Royal Guard is active).

![Shirk](/img/jobs/tanks/gunbreaker/Shirk.png)

**Shirk**

Role action. Transfers 25% of your enmity to a target party member. This effect applies to all enemies on your aggro table.

## Defensive Breakdown

Using your defensive cooldowns properly is an important part of maximizing your effectiveness as a tank, and timing your abilities correctly will ensure you’re getting the most out of your kit while reducing your total incoming damage for the encounter. Stacking mitigation is also optimal to do, especially in high end content where the damage received is likely going to KO you without stacking your mitigation together. However, you can also stack too much which will leave you without options later, so make sure you’re pacing yourself appropriately for the encounter. 

**Weaving mitigation** is a topic a lot of people bring up. Using Mitigations such as Rampart and Camouflage can be done before your No Mercy as they have a substantial duration, and abilities such as Heart of Corundum can be weaved around a GCD such as Double Down and Sonic Break, as neither have forced oGCDs due to lacking Continuation. If you need to weave during the later part of No Mercy you can float Rough Divide, as it is the lowest-potency attack inside a No Mercy Window.

We have three self-mits that last a decent duration *but* have a lengthy cooldown.

* Rampart: Is an all around solid defensive CD due to its duration. 20% and 20s uptime, meaning it can take a tank buster and persist long enough to cover following autos if needed. Ideally you want to alternate between Rampart and Nebula when dealing with tank busters, and you rarely want to stack them as it’ll leave you with fewer options later. A more appropriate option is to stack Camouflage with Rampart, as they share the same duration and same cooldown.
* Nebula: One of your best cooldowns as it provides a better percentage reduction than Rampart, but it has a shorter duration and longer cooldown. As such, it requires some planning - you need to be aware that it will be up less, which means that using it pre-emptively will require stricter planning, and planning ahead is also going to be stricter due to the longer cooldown. While a great tool, you need to ensure you have it up when needed and to make sure you have options available when it isn’t.
* Camouflage: Very ideal for auto management due to the increased parry rate and baseline 10% damage reduction (DR). While not the best cooldown by itself for a tank buster, as the 10% is your only guaranteed mitigation and the parry may either not activate or not be even possible due to a magic tank buster, it’ll help alleviate damage intake while autos are coinciding with mechanics that your healers may be dealing with. As mentioned above, it can be stacked with Rampart to give yourself a strong combo of parry and decent DR, but keep in mind this will leave you a bit scarce after the fact if you’re tanking and taking autos.

**Heart of Corundum:** Our new tool and a great support and self management ability. Heart of Corundum is part of SE’s new sort of “Reward” system for tanks where they provide a short timed buff on top of the base buff, which if timed correctly will let you mitigate more. How Heart of Corundum works is you gain three buffs:

* Heart of Corundum: 15% DR to self or party member for 8s
* Clarity of Corundum: 15% DR to self or party member for 4s.
* Catharsis of Corundum: 900 potency heal when effect expires or when health is reduced below 50% on self or target. Buff duration 20s.
  *The effect of your Brutal Shell shield is also granted to another target, but use on yourself will not affect your own Brutal Shell shield. This is also present for Heart of Stone.

Heart of Corundum provides a 27.75%~ damage reduction for the first four seconds of its duration as the two damage reductions from Heart of Corundum and Clarity of Corundum stack together to provide a very strong opening effect which decays to 15% after four seconds. While this persists, you have Catharsis of Corundum which provides a great 900 pot heal (which can crit!). Corundum has no cost, no drawback, and a short cooldown, and is therefore an extremely powerful and versatile tool to use for support and self-sustain. However, utilizing it to its maximum potential requires you to make use of **Clarity of Corundum**. Personally, when double weaving any mitigation, I tend to weave Corundum second to ensure Clarity is present for the tank buster. That being said, keep in mind that any late mitigation will miss the damage snapshot and instead of a nice 27.75% you’ll get 0%. You ideally always want your main mitigations with Heart of Corundum for heavy hitting tank busters.

**Aurora**: A simple HoT that provides some support. Aurora is not strong enough to help heal you up from tank busters if you’re pushed into a corner nor can it alone realistically help heal you up from using Superbolide as it only ticks once every 3s, while Heart of Corundum excels at both those points. However, Aurora is a good tool to help counteract autos, DoTs and also save your healers some resources during downtime if you place it on yourself or another member. Using Aurora twice on a target does not extend the buff by 16s, it merely refreshes it to a max duration of 16s. As such, you can refresh early and waste HoT ticks.

**Superbolide**: While a bit infamous, Superbolide is actually a very very good CD when used properly. Reality is people tend to find dropping to 1HP insane, but that’s ultimately how three out of four invulns work if the damage was going to KO you. If it wasn’t? Then practically all those invulns were wasted. Superbolide can be destructive if used improperly, but when used properly and when it’s coordinated with your healers, it is very very strong. Corundum and Aurora together can help heal you back up during the 10s duration with some support from healers, and unlike Living Dead you do not require your entire pool of health to be restored, just enough to survive the oncoming damage when the buff expires. I recommend telling your healers either in party chat or in voice ahead of time when you’re going to use it so they can prepare.

**Heart of Light:** One of our two defensive raid mitigations. Heart of Light is an AOE effect that radiates from yourself and applies a buff reducing all magic damage taken by 10% for 15s. Heart of Light should be used on heavy hitting raid wides that hit the majority, if not all, of the raid. Due to the fact that it, like your personal cooldowns, is a buff with no diminishing value over the course of its duration, it excels at multiple hits over the duration and as such if used on said abilities will reduce every hit placed under the buff by 10% (Example: Stack markers in the Endwalker MSQ Extremes, J Waves, Tumults)

**Reprisal:** Similar to Heart of Light, Reprisal is an AOE centered on yourself, however it affects enemies instead of party members. As a result of this, any damage that occurs when an enemy is untargetable (for example: phase transition AOEs where you can’t attack the boss) are unable to be affected by Reprisal. Reprisal is used for assisting with similar situations to HoL due to it being a debuff over a duration, but due to the short CD, it is an option for Tank Busters as well. Make sure to coordinate Reprisal with your cotank as it is a role based ability, meaning all tanks have access to it and it does not stack so it can be overwritten.

## Dungeon Tips/Info

When running dungeons, it’s important to go at your own pace. Some tanks will want to dictate the pull speed as fast as possible by pulling wall to wall, but the reality is that you shouldn’t feel obligated to pull big if you’re not confident. If you get KO’d and wipe and reset, you’ve lost the time you would have gained by doing a big pull. Getting to the point where you can feel confident pulling big is something that you have to decide for yourself, and is simply a potential goal to keep in mind

When doing dungeons, it’s important to space your cooldowns out. You have three cooldowns that have lengthy enough durations and can be used on separate add packs. Realistically, you should only need to burn one large cooldown per pack while using your smaller cooldowns to help your sustain. Some dungeons hit harder than others, and some dungeons have larger packs to deal with, so it’s important that you are prepared to change things or use things in emergencies.

**Main Cooldown** ➞ Try spread these out over as many pulls as you can.

* Rampart
* Nebula
* Camouflage

**Small Cooldown** ➞ Use as they become available.

* Heart of Corundum 
* Aurora

**Support Cooldown** ➞ Use one per big pull to debuff all targets

* Reprisal
* Arm’s Length

**Other:**

* Superbolide can be used to let your healer take a break from doing healing to do some damage or if you’re low can buy you time for a healer to get you to 100% while you wait on other CDs to come up. However it’s very bad to use without notification. If you plan to use Bolide as a tool to gain a few seconds of immunity then let your healer know. Do not open a pull with Bolide since going from 100% to 1% defeats the purpose of the ability. Use bolide when your HP becomes low. 20% to 1% is far better than 100% to 1% because you’ve at least made some use of the 80% health that was chipped away.

The above “plan” is of course not set in stone. In an ideal world, your dungeon DPS are fast enough to kill a pack of monsters before your main cooldown wears off. However, this may not happen and you may in turn have to cycle through cooldowns or change things. There’s nothing wrong with using more than expected and taking the next few pulls slow. The reason why we use these cooldowns and do big pulls is that besides them making runs faster, you rarely need Rampart or Nebula for dungeon bosses, as their tank busters don’t hit very hard and can be taken with a well timed Heart of Corundum.

Due to Clarity of Corundum’s duration being so short, I recommend waiting a GCD or two once you have all the enemies rounded up before using Heart of Corundum. If you prepull Heart of Corundum and run in, chances are Clarity of Corundum will fall off.

## Special Thanks

This guide was only possible with the help of Krom Ulus for tireless theorycrafting as well as key members of the GNB Community and support of The Balance Staff.