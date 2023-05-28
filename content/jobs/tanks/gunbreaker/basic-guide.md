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

**Krom Ulus** | Adamantoise (Aether) | krom#7427\
**Azazel Raine** | Balmung (Crystal) | Azazel#1000

- - -

## Playstyle and Core Concepts

- - -

Gunbreaker is a higher APM job with a focus on building and spending cartridges to deal very high damage inside of tight burst windows. This guide will introduce the relevant actions, gauge usage, and priority system to manage your rotation.

The rotation is a builder-spender rotation focused on maximizing damage inside the personal 20% damage buff, **No Mercy**, every 60 seconds.

The **powder gauge** is used to hold cartridges that may be used on any weaponskills requiring them, typically used in **No Mercy**. The gauge can hold two cartridges at level 30, and three cartridges at level 88.

### No Mercy

- - -

**No Mercy** is a 20% damage buff that lasts for 20 seconds.

* We want as much potency in this buff as possible.
* We want as many GCDs in this buff as possible.
* **[How To Fit 9 GCDs In No Mercy](https://youtu.be/rdNHJv7aLAg) (<2.48 GCD)** 

### Generation

- - -

Completing certain combo chains or using certain abilities generate gauge. **Do not overcap the cartridge gauge**.

**Solid Barrel Combo**

* Generates 1 cartridge.

**Demon Slaughter Combo**

* Replaces Solid Barrel Combo at 3+ targets.
* Generates 1 cartridge.

**Bloodfest**

* Completely fills the cartridge gauge.
* Only use this when the gauge is **empty**, or else it will overwrite any existing cartridges.

### Spending Gauge

- - -

Prioritize using cartridges on major cooldowns or to stop the gauge from overcapping.

**Gnashing Fang Combo**

* Requires **1 cartridge**.
* Use **Continuation** with every GCD in this combo.

**Double Down**

* Requires **2 cartridges**.

**Burst Strike**

* Spends **1 cartridge**.
* Use cartridges **Gnashing Fang** and **Double Down** first if possible.   

**Fated Circle**

* Spends **1 cartridge**.
* Replaces **Burst Strike** at 2+ targets.
* Replaces **Gnashing Fang** at 4+ targets.

- - -

## the Priority System

- - -

Splitting the rotation into two main phases helps understand the fundamentals behind gauge usage:

* The **filler phase**.
* The **burst phase**.

The burst phase begins when **No Mercy** is activated, and the filler phase begins when  **No Mercy** ends.

![GNB Simple Infographic](/img/jobs/gnb/priorotation.png "GNB Rotation")

### Filler Phase

- - -

The **Solid Barrel** combo should be used continuously to fill the cartridge gauge for **No Mercy**.

* Use **Gnashing Fang** and **Blasting Zone** off cooldown **once**.
* Use **Burst Strike** only when the cartridge gauge is about to overcap on cartridges.

When **No Mercy** comes off cooldown, enter the **burst phase**.

* If **Gnashing Fang** comes off cooldown again before **No Mercy**, hold it into **No Mercy**.

### Burst Phase

- - -

Once **No Mercy** is off cooldown, use it off cooldown and begin using your cooldowns inside of the buff.

**No Mercy** should contain:

* A **Gnashing Fang** combo, **Double Down**, **Sonic Break**, and as many usages of **Burst Strike** as possible.
* Prioritize using **Gnashing Fang** and **Double Down** over **Burst Strike**.
* Use a **combo action** when nothing else can be spent or used.
* Use **Lightning Shot** if you cannot remain in melee range.

**Blasting Zone**, **Bow Shock**, **Continuation**, **Bloodfest**, and **Rough Divide** are oGCD actions that should be used within **No Mercy**.

* **Bloodfest** should not be used until all cartridges have been spent.
* **Rough Divide** should be used outside of **No Mercy** if it allows for melee uptime.

When **No Mercy** ends, return to the **filler phase**. 

### Forced 2-Cartridge Burst Phase 

- - -

It is possible for this scenario to occur within your rotation:

* The cartridge gauge is full.
* The next combo action is **Solid Barrel**.
* **No Mercy** will be off cooldown after using the next GCD.

This forces us to enter **No Mercy** with two cartridges if we use **No Mercy** off cooldown. There is more than one solution to this, so refer to the infographic.

![](/img/jobs/gnb/2cnm_lr.png)

### **What can break the Gnashing Fang Combo**

- - -

One thing to keep in mind is that the Gnashing Fang is a combo **but** it has some flexibility. Certain weaponskills can be used inside this combo (and are done so for optimal damage in buffs) without breaking it. However! The combo can still be broken by using any of cartridge generating combo actions such as Solid Barrel or Demon Slaughter combos. Breaking a Gnashing Fang is never worth it and to do so is one of the most destructive things to a Gunbreaker’s DPS.\
\
Failure to utilise any of the Continuation buffs applied by the previously used weaponskill before the following weaponskill will result in losing the ability to execute said Continuation. Ensure that continuation is hit following every GCD that provides the buff.

![What can break Gnashing Fang Combo](/img/jobs/gnb/gnb_combobreaker_v2.1.png "What can break Gnashing Fang Combo")

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

**Camouflage** reduces damage taken by 10% for 20 seconds. Provides an additive +50% parry rate (for a total of 60% parry rate) for 20 seconds. Parry applies a 15% damage reduction, but only to physical attacks.

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

## Ultimates

Ultimates are timeless content due to their difficulty and rewards but are forced sync and cannot be done above their release level. This affects the gear you enter the encounter with, but is more lenient as all three past Ultimates' entry IL are far below our current standard. Food and Pots do not sync, but still have a soft cap so you don’t need the absolute top current food and pots for something like UCoB as its sync is relatively low. The relic from Shadowbringers is the best choice of weapon for previous Ultimates, But will require you to get it to at least the [Augmented Law’s Order](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/3111076df9e/) stage to assign substats. [Blade’s Resolve](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/b723d663158/) gives you more substat to work with but this realistically is of only benefit in TEA, as you’ll reach cap for the substats with Law’s Order in the other two Ultimates, as such unless you want to really optimize and push as much damage as you want for TEA, you can settle for Augmented Law’s Order. If you don’t want to grind the Blade’s Resistance Relic, you can use any weapon with optimal substats that exceed the encounter’s max IL. \
\
The reason why The Manderville Relic (Stage I or Stage II) is an ideal substitute over the Asphodelos Gunblade for Dragonsong's Reprise is the fact both substats are capped. Even with 2xMelds on the Asphodelos Weapon, the substat total is still less. You do not need to meld the Manderville Weapon in this case as the melds will be ingored.

**The Unending Coil of Bahamut (UCoB):**\
IL Cap: 470\
BIS: [UCoB/UWU Combination BIS](https://cdn.discordapp.com/attachments/541353216307232788/950220623873990656/unknown.png)\
Relic Stat cap: 127

**The Weapon’s Refrain (UWU):**\
IL Cap: 500\
BIS: [UCoB/UWU Combination BIS](https://cdn.discordapp.com/attachments/541353216307232788/950220623873990656/unknown.png)\
Relic Stat cap: 136

**The Epic of Alexander (TEA):**\
IL Cap: 595 \
BIS: [2.40](https://cdn.discordapp.com/attachments/541353216307232788/945234729865728030/unknown.png)\
Relic Stat cap: 184

**Dragonsong’s Reprise (DSW/DSR):**\
IL Cap: N/A\
BIS Options: [2.50](https://cdn.discordapp.com/attachments/541353216307232788/1062495701277343865/image.png), [2.40,](https://media.discordapp.net/attachments/889729119867265095/1063214948420952155/image.png) [2.40 (22 STR Race).](https://media.discordapp.net/attachments/889729119867265095/1063304909035946055/image.png)\
Alt Weapon: Use Manderville Relic if you do not possess Ultimate Gunblade of the Heavens. [](https://etro.gg/gearset/88fbea7d-3b43-479c-adb8-b87c9d6cb5f9)

**The Omega Protocol (TOP):**\
IL Cap: N/A\
BIS Options: [2.50](https://etro.gg/gearset/6eee20c5-a3a0-447a-8ed0-9f250c1a6daa), [2.42.](https://etro.gg/gearset/e102cb6b-528b-43bb-99ac-f66146a857a2)\
Alt Weapon: Use Abyssos Gunblade if you do not possess Ultimate Omega Bayonet.

## Special Thanks

This guide was only possible with the help of Krom Ulus for tireless theorycrafting as well as key members of the GNB Community and support of The Balance Staff.