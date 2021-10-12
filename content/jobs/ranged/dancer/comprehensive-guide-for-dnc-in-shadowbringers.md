---
title: Comprehensive Guide for DNC in Shadowbringers
---
# Comprehensive Guide for DNC in Shadowbringers

*By: Ringabel Dim of Excalibur*\
Last Updated: August 12, 2020\
(Current as of Patch 5.3)

- - -

# Table of Contents

* \[Purpose and Introduction]
* \[Basic DNC Overview]
* \[Range of Actions and Abilities]
* \[Understanding Standard Step / How to do Dance Steps]
* \[Understanding Technical Step]
* \[Understanding Fan Dance (and weaving oGCDs in general)]
* \[Esprit Generation]

  * \[Improvisation]
* \[Understanding Flourish]
* \[DNC “Rotation”]
* \[General Single Target GCD Priority List]
* \[AoE Rotation]
* \[Opener]
* \[Technical Finish / Devilment Window Optimization]

  * \[Conclusions from Technical Finish Rotation Analysis]
* \[Stat Tiering and Itemization for Dancer]

  * \[Weapon Damage and Dexterity]
  * \[Crit vs Det/DH]
  * \[Determination vs DH]
  * \[Skill Speed… and Why it is not good on DNC]
* \[Gear and Best in Slot (BiS)]
* \[Considerations for Selecting a Dance Partner]

  * \[Dance Partner Priority List ]
  * \[Dance Partner Swapping]
* \[DNC Utility]

  * \[Shield Samba]
  * \[Curing Waltz]
  * \[Improvisation]
  * \[Head Graze]
  * \[Arm’s Length]
  * \[Second Wind]
  * \[Peloton]
  * \[En Avant]
* \[Common Abbreviations]
* \[Glossary of Terms]
* \[About the Author / Special Thanks]
* \[Changelog]

- - -

# Purpose and Introduction

The purpose of this guide is to be a comprehensive gameplay guide for how to play and optimize the DNC rotation. This guide goes over the fundamentals and job basics while also looking into advanced tips and tricks that experienced players may not know. Due to the randomness of the proc, Feather, and Esprit generation, DNC has a dynamic playstyle where no two pulls are ever the same. Hopefully after reading this guide, you will have a better understanding of how to play DNC to its fullest.

Ellunavi (moderator on [The Balance - Discord server](https://discord.gg/CjQkEn3)) wrote an in depth [analysis](https://docs.google.com/document/d/1iktjQ-kW7Vp-iWy_xEWh6t62FaXqjfGELGmcWOtPQfM/edit) at the beginning of Shadowbrings for DNC regarding the calculations which established the priorities for DNC GCD and oGCD usage. His work helps establish a basis to explain why certain recommendations in this guide are optimal depending on the situation.

Additionally, thanks to the hard work of the members of the [Allagan Studies](http://allaganstudies.akhmorning.com/), the damage formulas have been determined along with the stat tiers used to help support the rotational strategies that were found using math to find the best results and simulations to confirm them.

Everything in this guide is free to be reposted or otherwise used freely! If you plan on referencing anything in this guide in your own published work, I only ask that you give proper credit and/or reference to this guide.

- - -

# Basic DNC Overview

[DNC Job Guide from Square Enix](https://na.finalfantasyxiv.com/jobguide/dancer/) (which includes job weaponskill and ability descriptions).

## Short Version:

Dancer is a ranged physical DPS job with low personal DPS but high contribution to others’ DPS using raid buffs. It has “Dances'' that require executing the right dance steps in order to perform powerful finishing moves. Its main weaponskill GCDs revolve around a simple combo that has a chance to generate stronger proc GCDs which have a chance to generate feathers which can be used for oGCD damage abilities.

## Long Version:

Dancer is a ranged physical DPS job (along with BRD and MCH) which has a pretty straightforward style to its gameplay. Their primary damage stat is dexterity (DEX). DNC is the DPS job that does the least amount of personal damage; however, it makes up for it by providing high damage increasing buffs to your raid group. Part of DNC’s rotation is keeping a buff up called Standard Finish that increases your damage by 5%. Additionally, DNC has two two minute cooldown abilities: Technical Step and Devilment. Technical Finish (which occurs after successfully completing the Technical Step dance) will provide a 5% damage up buff to the whole party for 20 seconds while Devilment provides the DNC with a 20% crit hit rate and 20% direct hit rate boost for 20 seconds. DNC can also choose someone to be their Dance Partner in a fight with the ability Closed Position which will duplicate the Standard Finish 5% damage up buff and the Devilment buff on this target party member. Additionally, DNC provides raid utility in the form of a small AoE heal called Curing Waltz and a party wide damage reduction ability called Shield Samba. Despite doing low personal damage overall, DNC offers incredibly powerful burst damage in a 20 second window every two minutes with its Technical Step and Devilment abilities.

The rotational flow of DNC is a simple combo / proc GCD system coupled with two dance abilities, Standard Step and Technical Step, on a 30 second and two minute cooldown respectively. When beginning a dance, your normal GCDs are replaced with dance steps in order to unlock a finishing move (aptly named Standard Finish and Technical Finish). These dance steps do not do any damage, however, the dance finishes themselves are some of the strongest damage abilities in the game at 1000 and 1500 potency respectively. These dance finishes damage all enemies within a 15 yalm radius of you. The closest enemy will be hit for the full damage (1000 and 1500 potency respectively) while all other enemies will be hit for 75% reduced damage (250 potency for Standard Finish and 375 potency for Technical Finish).

Outside of these dances, your normal GCDs include a set of basic 1 → 2 combo weaponskills called Cascade and Fountain. Cascade and Fountain each have a 50% chance to proc separate slightly more powerful weaponskills called Reverse Cascade and Fountainfall respectively. Additionally, every time you or your dance partner perform a weaponskill or spell while under the effect of Standard Finish, you have a chance to generate 10 Esprit. Your Esprit gauge can hold a maximum of 100 Esprit. Every 50 Esprit can be spent on a weaponskill called Saber Dance, which is your strongest GCD at 600 potency on primary target and 300 potency to all nearby enemies close to the target. Using Saber Dance, Reverse Cascade, Fountainfall, or your dances will not interrupt your Cascade → Fountain combo. Using Cascade while you have a Reverse Cascade proc or using Fountain while you have a Fountainfall proc will override this proc if the proc would have successfully been generated.

Additionally, you have four more GCDs that mirror the way Cascade, Fountain, Reverse Cascade, and Fountainfall work in an AoE setting called Windmill, Bladeshower, Rising Windmill, and Bloodshower. All four of these weaponskills are AoEs in a circle around you (five yalm radius). Windmill combos into Bladeshower while Rising Windmill and Bloodshower are slightly stronger procs from the combo weaponskills. 

Every time you use a proc’d weaponskill (Reverse Cascade, Fountainfall, Rising Windmill, or Bloodshower), you have a 50% chance to generate a Fourfold Feather. You can hold a maximum of 4  eathers. These feathers can be used for oGCD abilities called Fan Dance (150 potency single target) and Fan Dance II (100 potency in an AoE around you on multiple targets). Additionally, when using a fan, it has a 50% chance to proc an ability called Fan Dance III (200 potency to primary target and 100 potency to all nearby enemies close to the target).

Finally, DNC has a 1 min cooldown called Flourish which immediately grants them each of their weaponskill procs (Reverse Cascade, Fountainfall, Rising Windmill, Bloodshower) and a proc of Fan Dance III.

The basic flow of the DNC GCDs on a single target encounter revolves around keeping your dances, Devilment, and Flourish off cooldown without drifting these abilities too much (if at all) and using weaponskills in between dances. The way DNC’s damage can be optimized is through a combination of maximizing the amount of damage you do (especially during buff windows), maximizing the amount of damage gained by your buffs to party members through optimal buff timings and Dance Partner choice, and minimizing losses in resource management (such as overcapping on esprit / feathers, or overriding a proc).

- - -

# Range of Actions and Abilities

| Action/Ability                                                                                           | Range/Radius                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cascade, Fountain, Reverse Cascade, Fountainfall, Saber Dance, Fan Dance, Fan Dance III (primary target) | 25y                                                                                                                                              |
| Saber Dance (AoE effect), Fan Dance III (AoE effect)                                                     | 5y (radius of AoE around the center of the target it was used on)                                                                                |
| Windmill, Bladeshower, Rising Windmill, Bloodshower, Fan Dance II                                        | 5y (radius of AoE around the DNC)                                                                                                                |
| Standard Finish, Technical Finish, Devilment                                                             | *Damage Range:* 15y radius around DNC (both Finishes) <br>*Buff Range:*15y for Technical Finish buffs. 30y for Standard Finish / Devilment buffs |

![](https://cdn.discordapp.com/attachments/458951851610734595/890398674604134420/unknown.png)
In the picture above there are 4 target dummies that are 5y apart from each other and marked #1-#4. There are also 2 more waymarkers B and A that are 5y apart from each other and waymarker B is 5y away from target dummy #4. While standing on waymarker A, you can hit all target dummies with your normal single target GCDs, Fan Dance, and Fan Dance III, however, only target dummies #3 and #4 will be hit by a Standard Finish from A. None of your AoE GCDs will hit any of the target dummies from A. Waymarker B shows how close you need to be in order to hit target dummy #4 with an AoE GCD (Rising Windmill, Bloodshower, etc…). Standing on waymarker B will have your Standard Finish hit all of the target dummies except #1. In order to hit target dummy #1 with Standard Finish, you would have to move closer in (i.e. stand on #4). If you select target dummy #2 when you cast Fan Dance III or Saber Dance, the primary damage will be dealt to target #2 (i.e. 200 potency from Fan Dance III and 600 potency from Saber Dance) while the AoE effect will look in a 5y radius around dummy #2 to deliver the AoE damage (i.e. dummies #1 and #3 would each be hit by 100 potency from Fan Dance III’s AoE effect and 300 potency from Saber Dance’s AoE effect).

- - -

# Understanding Standard Step / How to do Dance Steps

Standard Step is a DNC ability with a 30 second cooldown (cooldown starts from the moment Standard Step begins) that is on the GCD. When activating Standard Step, your Cascade, Fountain, Reverse Cascade, and Fountainfall GCDs will be replaced with steps (Emboite, Entrechat, Jete, Pirouette) that are also color coded (red, blue, green, yellow). Standard Step is a two step sequence of 2 of these random dance steps. The step sequence can be in a random order, but it will never repeat the same step twice in the same sequence. The step sequence is displayed on your Step Gauge, but the correct steps will also light up on your hotbar in the order you need to press them. After successfully pressing the required steps, the Standard Finish icon will be highlighted which when pressed will finish the dance and return your skills back to normal.

|                                                                                                            |                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Before initiating a dance                                                                                  |                                                                                                                    |
| ![Before dance](https://cdn.discordapp.com/attachments/458951851610734595/890400459767029850/unknown.png)  |                                                                                                                    |
| Once you press Standard Step                                                                               | Step Gauge appears                                                                                                 |
| ![Standard Step](https://cdn.discordapp.com/attachments/458951851610734595/890400486887391262/unknown.png) | ![Step Gauge](https://cdn.discordapp.com/attachments/458951851610734595/890400567439028294/unknown.png)            |
| After pressing the first dance step                                                                        |                                                                                                                    |
| ![First step](https://cdn.discordapp.com/attachments/458951851610734595/890400513563176990/unknown.png)    | ![Step Gauge first step](https://cdn.discordapp.com/attachments/458951851610734595/890400593854746754/unknown.png) |
| After pressing the second step                                                                             |                                                                                                                    |
| ![Second Step](https://cdn.discordapp.com/attachments/458951851610734595/890400543757967370/unknown.png)   | ![second step gauge](https://cdn.discordapp.com/attachments/458951851610734595/890400617758081054/unknown.png)     |

When starting Standard Step, it initiates a 1.5s GCD. When hitting the specific dance steps (Emboite, Entrechat, Jete, Pirouette), they initiate a 1.0s GCD. The final Standard Finish triggers a 1.5s GCD. Altogether, that sequence (and timings) should look like this:

![](https://cdn.discordapp.com/attachments/458951851610734595/890401701826297946/unknown.png)

Initiating Standard Step, both dance steps, and executing Standard Finish take up a total of 5.0s (this time is not influenced by skill speed at all, it will always be exactly 5.0s). That means if we are at a 2.50 GCD tier, using Standard Step is equal to the same amount of time it takes to use 2 regular weaponskill GCDs. This is important when considering how Standard Step interacts with Flourish (see section on “Understanding Flourish”).

Successfully executing the correct number of steps will determine how much potency Standard Finish does on the primary target (closest target to the DNC) and any additional targets as well as how much damage% buff will be received by you and your dance partner with the Standard Finish 60s buff. You can hit Standard Finish at any point after starting Standard Step to end the dance sequence. Depending on how many successful steps you did will affect Standard Finish’s potency and damage% buff.

| \# of Steps properly executed | Potency of Standard Finish on closest target hit | Potency of Standard Finish on additional target(s) hit | Damage% Buff (you and partner) |
| ----------------------------- | ------------------------------------------------ | ------------------------------------------------------ | ------------------------------ |
| 2 Step Successful             | 1000                                             | 250                                                    | 5%                             |
| 1 Step Successful             | 750                                              | 187.5                                                  | 2%                             |
| 0 Step Successful             | 500                                              | 125                                                    | 0%                             |

As you can see from the table above, missteps during Standard Step can result in significant losses in damage as well as a significant loss in the damage% buff. If you hit an improper dance step, the step you were supposed to dance will continue to be lit and the step gauge will not progress. You will still have a chance to press the correct step, however, this misstep will delay your rotation by 1.0s.\
Let’s look at some examples of what this would look like.

If your step gauge says your dance step order should be Entrechat followed by Pirouette (blue then yellow), but you accidentally press Entrechat, Entrechat again, Pirouette (blue - blue - yellow), your dance sequence would look like this:

![](https://cdn.discordapp.com/attachments/458951851610734595/890400567439028294/unknown.png)

![](https://cdn.discordapp.com/attachments/458951851610734595/890402432444686366/unknown.png)

This sequence of events will give you the full potency of Standard Finish (1000 potency) and the 5% damage up buff, but it took 1.0s longer to perform due to that extra unnecessary step.

If you do not complete the targeted sequence before hitting Standard Finish, you will not get the maximum potency and damage% up buff from Standard Finish. An example of this (using the same step gauge example from before with Entrechat, Pirouette or Blue, Yellow) would be if we were to do Entrechat and then Jete (blue then green) before doing the Standard Finish

![](https://cdn.discordapp.com/attachments/458951851610734595/890400567439028294/unknown.png)

![](https://cdn.discordapp.com/attachments/458951851610734595/890402318707744829/unknown.png)

This step sequence results in only doing 750 potency with Standard Finish and providing you and your partner with only a 2% damage buff as opposed to 5% because only one proper step was done before executing the Standard Finish.

After hitting Standard Step, you have a total of 15 seconds to execute all steps and complete the Standard Finish before the dance is automatically cancelled and your hotbar is automatically reverted back to its normal weaponskills. This is important when considering downtime of fights, or portions where the Boss is untargetable. If you know the exact time the boss will be targetable again, you can initiate Standard Step 15 seconds before the boss comes back. This allows you to do the Steps during a time in the fight where you can’t hit the boss, saving you 3.5s worth of GCD time on the boss. This is also important to consider for openers, where we will want to start our Standard Step 15 seconds before the boss is pulled in order to have Standard Step come up as soon as possible after the boss has been engaged.

In addition to providing the Dancer and their Dance Partner with a damage% buff, both players will also receive an Esprit generation buff. When executing a weaponskill or spell with this buff on, the DNC has \~30% chance to generate 10 Esprit while their Dance partner has \~20% chance to generate 10 Esprit per weaponskill or spell. Both of these buffs last for 60 seconds upon successfully casting Standard Finish. The buffs are only applied to your Dance Partner if they are within 30 yalm of you when Standard Finish goes off. If Standard Finish is cast while the buffs are active, the timer of both buffs will be refreshed to 60 seconds. With Standard Step having a 30 second cooldown, both of these buffs should theoretically be up 100% of the time on both you and your partner when keeping Standard Step off cooldown as much as possible. The exception to this is phases of fights with incredible long downtime (such as the transition from add phases to final phase in Shiva E8S) where the buffs may naturally fall off before you have to perform your “reopener”.

![buffs](https://cdn.discordapp.com/attachments/458951851610734595/890402891083415593/unknown.png)\
Standard Step is one of your strongest damaging moves and should be kept on cooldown as much as possible. At 1000 potency over the course of 5 seconds of dancing, this ability does 500 potency per GCD’s worth of time. With your average weaponskill GCD valued at approximately 347 potency per GCD, Standard Step is  a very strong gain over our average single target GCDs.

## Special Notes:

* You DO continue to do auto attacks while dancing. However, if the boss was de-selected (i.e. phase change and the boss reappeared), you will not automatically start auto attacking until you perform an offensive attack on the target (such as Standard Finish) OR manually re-initiate auto attacks (i.e. right click the boss).
* In addition to not being able to use weaponskills, you won’t be able to use any oGCD abilities with the exception of En Avant and Role Actions (such as Second Wind and Arm’s Length) until you execute “Standard Finish” or until the Standard Step 15 second timer expires.
* You can opt to do a one or zero step dance in order to ensure the Standard Finish goes off under niche circumstances where the two step dance would not hit the Boss. Situations like this very rarely occur, examples would be the very last second of the fight before the boss dies if you are mid dance or a particular phase transition where you wouldn’t be able to get the two step dance off before the boss becomes untargetable. In your normal rotation, it is never worth it to do less than two steps.

- - -

# Understanding Technical Step

| Technical Step                                  |     | Technical Finish                                |
| ----------------------------------------------- | --- | ----------------------------------------------- |
| ![](https://xivapi.com/i/003000/003473_hr1.png) |     | ![](https://xivapi.com/i/003000/003474_hr1.png) |

Technical Step is very similar to Standard Step in how the steps are executed, with one big difference. Technical Step requires four successful steps in order to have the maximum amount of damage come from your Technical Finish. Technical step is also on a 120 second cooldown (starting from when Technical Step first gets initiated). When activating Technical Step, your Cascade, Fountain, Reverse Cascade, and Fountainfall GCDs will again be replaced with steps (Emboite, Entrechat, Jete, Pirouette) that are also color coded (red, blue, green, yellow). The step sequence will be a random order of these four steps, and it will never repeat the same step twice in the same sequence. The step sequence is displayed on your Step Gauge, but the correct steps will also light up on your hotbar in the order you need to press them (same as Standard Step). After successfully pressing the required steps, the Technical Finish icon will be highlighted which when pressed will finish the dance and return your skills to normal. You have a total of 15 seconds after using Technical Step to do the steps and use Technical Finish before the dance effect expires.

**Example Step Gauge for Technical Step**

![Example Step Gauge for Technical Step](https://cdn.discordapp.com/attachments/458951851610734595/890403758721355796/unknown.png)

The Technical Step sequence looks like this:

![Technical Step sequence](https://cdn.discordapp.com/attachments/458951851610734595/890403892251213854/unknown.png)

Altogether, Technical Step (1.5s GCD), the four steps (1.0s each), and Technical Finish (1.5s) will take a total of 7.0s. Depending on how many steps were correctly danced will affect how much damage Technical Finish does and how much of a damage bonus you and your party members receive:

| \# of Steps properly executed | Potency of Technical Finish on closest target hit | Potency of Technical Finish on additional target(s) hit | Damage% Buff (all party members) |
| ----------------------------- | ------------------------------------------------- | ------------------------------------------------------- | -------------------------------- |
| 4 Steps Successful            | 1500                                              | 375                                                     | 5%                               |
| 3 Steps Successful            | 1250                                              | 312.5                                                   | 3%                               |
| 2 Steps Successful            | 1000                                              | 250                                                     | 2%                               |
| 1 Steps Successful            | 750                                               | 187.5                                                   | 1%                               |
| 0 Steps Successful            | 500                                               | 125                                                     | 0%                               |

All players within a 15 yalm radius of the DNC when the DNC executes Technical Finish receive a 5% damage Technical Finish buff and an Esprit generation buff (note: for you and your Dance Partner, this Esprit generation buff does not stack with the normal Standard Finish Esprit generation buff, but the 5% damage buff from Technical Finish does stack with Standard Finish’s damage buff). Both of these buffs last for 20 seconds upon successfully casting Technical Finish. Given that all players affected by Technical Finish will temporarily have the Esprit generation buff during this time, Esprit generation is significantly increased during this period.

![](https://cdn.discordapp.com/attachments/458951851610734595/890406044566708224/unknown.png)

Because the time it takes to execute Technical Step, the four steps, and Technical Finish is a total of seven seconds (1.5s for Technical Step, 1.0s x4 for the steps, 1.5s for Technical Finish = 7.0s), there is a natural 0.5 second gap period of time (because it’s 0.5 seconds short of 7.5 seconds which is the same as 3 GCDs worth of time) when at a 2.50 GCD tier between the end of a GCD and when Standard Step comes off cooldown during Technical Finish (if Standard Step has not drifted throughout the fight). At this GCD tier, it is optimal to hold the GCD in favor of using Standard Step when it comes off cooldown. See Ellunavi’s analysis for more info on when this is optimal.

## Special Notes:

* You DO continue to do auto attacks while dancing. However, if the boss was de-selected (i.e. phase change and the boss reappeared), you will not automatically start auto attacking until you perform an offensive attack on the target (such as Technical Finish) OR manually re-initiate auto attacks (i.e. right click the boss).
* In addition to not being able to use weaponskills, you won’t be able to use any oGCD abilities with the exception of En Avant and Role Actions (such as Second Wind and Arm’s Length) until you execute “Technical Finish” or until the Technical Step 15 second timer expires.
* Unlike other raid buff abilities, Technical Finish needs 5.5s to execute Technical Step and the four steps before Technical Finish can be used. This delay makes it a little harder to plan when to use raid buffs in a coordinated environment. If you know when you want the Technical Finish buff to go out to the party, you’ll have to work back ~six seconds for when you’ll want to start Technical Step.
* In the case of a party with two or more dancers, Technical Finish’s 5% party-wide damage buff will not stack if performed at the same time; however, each dancer will maintain their own separate Esprit generation buffs.

- - -

# Understanding Fan Dance (and weaving oGCDs in general)

Feathers are a resource the Dancer can use to perform Fan Dances that are weaved between the GCDs of weaponskills (called oGCDs). You have a 50% chance to earn a feather upon successfully landing a hit with any of your proc GCDs (Reverse Cascade and Fountainfall for single target GCDs, Rising Windmill and Bloodshower for AoE GCDs). You can hold up to 4 Feathers. How many Feathers you have can be seen on your Fourfold Feather gauge:\
![](https://cdn.discordapp.com/attachments/458951851610734595/890406241522814986/unknown.png)\
(Showing the DNC holding four Feathers)

You can use a Feather by using either Fan Dance (single target ability that does 150 potency) or Fan Dance II (AoE around you that does 100 potency to all targets hit). Successfully landing a hit with either of these abilities has a 50% chance to grant you the ability to use Fan Dance III (200 potency to selected target and 100 potency to all targets in an AoE around your target).

It is important to save these feathers as much as possible for opportunities when you have strong buffs to increase their damage (such as your Technical Finish / Devilment window). However, overcapping on feathers is a considerable loss to your DPS. Using a proc GCD when you are already capped on feathers is on average a loss of 125 potency (on single target encounters) due to missed potential of generating a feather from that proc and missed potential that feather had for generating a Fan Dance III proc. Using Fan Dance when you already have a Fan Dance III proc is on average a loss of 100 potency due to potentially missing an opportunity to use the Fan Dance III proc that could have been generated from that feather.

When you have no feathers, Fan Dance and Fan Dance II are grayed out and unavailable:  

![](https://cdn.discordapp.com/attachments/752334526449057853/897214836558151701/unknown.png)

```
	
```

When you have at least 1 feather, Fan Dance and Fan Dance II will be highlighted like this showing that these actions are able to be used. In a fight, feathers do not expire unless you die.![](https://cdn.discordapp.com/attachments/752334526449057853/897214900806500442/unknown.png)

When Fan Dance III procs, you get a buff that lasts for 20 seconds that allows you to use Fan Dance III called “Flourishing Fan Dance”. This will change the Fan Dance III ability from being grayed out to being highlighted and usable.![](https://cdn.discordapp.com/attachments/752334526449057853/897215115412275222/unknown.png)				

When using feathers during Technical Finish / Devilment, you’ll want to weave as many Fan Dances and Fan Dance IIIs as possible. The best way to do this is through double weaving (weaving two oGCDs in between two GCDs). Depending on your ping, you may not be able to properly weave 2 oGCDs in between GCDs without clipping your GCD. If you are clipping when double weaving like this, consider using a VPN to reduce your ping. If using a VPN is not an option or doesn’t help prevent clipping when double weaving, your best option is to only single weave to prevent significant clips. Although playable, it is suboptimal since you won’t be able to weave as many oGCDs as possible in buff windows.

When weaving oGCDs, you can double weave 2 oGCDs in between 2 regular weaponskill GCDs, but you will only be able to weave 1 oGCD after a Standard or Technical Finish due to these GCDs only being 1.5 seconds as opposed to your normal weaponskill GCD (base 2.50 sec). Generally speaking, when weaving feathers in buff windows, you’ll want to use Fan Dance and immediately queue up Fan Dance III in the double weave window. 

Theoretically, you can use Fan Dance and then wait to see whether Fan Dance III procs and if it doesn’t proc use Fan Dance again as your second oGCD. However, because Fan Dance has a 1 sec cooldown while animation lock of oGCDs is 0.8 sec, double weaving Fan Dance into Fan Dance is not recommended due to increased likelihood of clipping the GCD as well as relying on reaction time to decide whether you need to press Fan Dance III or Fan Dance as your second oGCD. Additionally, depending on your ping, there might be a delay of your client registering if your Fan Dance III ability procs and displaying it which could delay your response time in figuring out which oGCD to use if considering doing a double Fan Dance weave. Therefore, it is recommended to do Fan Dance and then hit the Fan Dance III button regardless of whether the ability procs. If it procs, you will have done Fan Dance into Fan Dance III. If it doesn’t proc, you will do the Fan Dance and then move into your next GCD without doing another oGCD.

Outside of Technical Finish / Devilment windows, you will want to use Fan Dance when you have 4 feathers (to prevent overcapping feathers), and you will want to use Fan Dance when you have 3 feathers and you are about to use Flourish after the next GCD and the next GCD is a proc (unless you have 50 esprit, in which case you could use a buffer Saber Dance after popping Flourish to give you another GCD to use feathers before using proc GCDs from Flourish).

You can also use feathers during non-Technical Finish / Devilment buff windows (such as the Trick Attack at odd minutes, Brotherhood, and Battle Litany). Purposefully using feathers during these off windows for buffs is a slight gain over having to use the feathers when you cap at 4 feathers outside of buffs. Keep in mind that on average you will generate approximately 2-3 feathers in a 45 second period of time (i.e. the time between when the off minute Trick Attack expires and the Trick Attack under Technical Finish / Devilment comes up), so you’ll likely be able to restock the feathers for your next Technical Finish / Devilment.

Other than Fan Dance and Fan Dance III, DNC has several other oGCD offensive abilities such as Flourish and Devilment and several utility oGCDs from DNC specific actions (Curing Waltz, Shield Samba, Closed Position / Ending) to role actions (Arm’s Length, Head Graze, Leg Graze, Foot Graze, Second Wind). All of these oGCDs do not have any serious animation locks and are all able to be double weaved. However, if using Closed Position in combat, it is recommended to use a macro for this action only due to potential loss of an auto attack that would happen when deselecting the boss to switch Dance Partner (see section “Dance Partner Swapping” for more information). When using a macro like this, you do not want to double weave.

Keep in mind when weaving Flourish, it will generate a Fan Dance III proc. Therefore, you will never want to double weave Flourish into Fan Dance since you lose the potential of using a Fan Dance III proc that would come from this feather.

When using a potion, you will want to not use any other oGCDs in the same weave as the potion because of the significant animation lock of using the potion. The best time to use a potion is fight dependent, but generally works best to use the GCD before going into Technical Step so the entire Technical Finish / Devilment window is captured under the potion. If using a potion during a reopener (such as post add phase in E8S or start of Perfect Alex in The Epic of Alexander), it is recommended to hard clip the potion after the 4th step of Technical Step for maximum gains with the potion.

Double+ weaving on the oGCD of a Standard/Technical Finish and Triple+ weaving for regular GCDs should never be done due to the severe clipping of your GCD which would cause losses in the number of GCDs you execute in a fight as well as potentially drifting certain abilities because of these clips.

- - -

# Esprit Generation

![](https://cdn.discordapp.com/attachments/752334526449057853/897215286590210088/unknown.png)

Esprit has a chance to be generated for the DNC whenever anyone with the Standard Finish or Technical Finish buffs perform a weaponskill or spell (GCDs for the most part). Not all actions that party members perform are able to generate esprit.

## Actions that DO Generate Esprit:

* All offensive “weaponskills” or “spells” that are on the global cooldown

  * This also includes weaponskills and spells that are on the GCD but have a cooldown for using it such as:

    * SMN’s Egi Assault spells (except for Egi Assault when Titan-Egi / Topaz Carbuncle are summoned and performing Earthen Armor / Glittering Topaz)
    * GNB’s Gnashing Fang Combo GCDs and Sonic Break GCD
    * NIN’s Shadow Fang GCD
* RDM’s enchanted melee combo GCDs, Enchanted Moulinet, and Enchanted Reprise all can generate esprit because they are classified as “weaponskills” (the non-enchanted weaponskills also generate esprit)
* BRD’s songs (Army’s Paeon / Mage’s Ballad / Wanderer’s Minuet) since they are classified as “spells” despite being on the oGCD
* Healer Role Action “Repose” and BLM’s “Sleep”

## Actions that DO NOT Generate Esprit:

* All oGCD “abilities”
* Healing spells and other non-damage dealing weaponskills or spells (such as BLM’s Umbral Soul, MNK’s Form Shift, and SMN’s Egi Assault when using Titan-Egi / Topaz Carbuncle for Earthen Armor / Glittering Topaz)
* “Abilities” that are on the GCD including

  * NIN’s Ninjutsus/Mudras including Kassatsu Ninjutsu and Ten Chi Jin Ninjutsus
  * SAM’s Tsubame-gaeshi (the Kaeshi Iaijutsus) and Meditate
  * MNK’s Meditation and Form Shift
  * DNC’s Standard / Technical Step, Standard / Technical Finish, and all intermittent dance steps
* “Weaponskills” and “Spells” cast by pets (since the pets do not gain the esprit buff)

  * MCH’s Automaton Queen’s 2 “weaponskills” (Arm Punch and Roller Dash)
  * SMN’s Pet actions that are classified as spells
  * NIN’s Bunshin GCD effects
  * DRK’s Living Shadow

Based on early testings watching how much esprit is generated on a job by job basis, it was estimated that DNC’s esprit generation on weaponskills is approximately 30% chance to generate 10 esprit per weaponskill. For all other jobs, the esprit generation rate is approximately 20% to generate 10 esprit per weaponskill or spell.\
*These esprit generation rates are assumptions and have not been 100% confirmed. Whether different jobs have slightly different esprit generation rates is unknown (despite some speculation and potentially mistranslated information about DNC from information before Shadowbringers). In order to confirm this information, large amounts of data would need to be collected for many runs of different jobs. The underlying assumption is these estimated esprit generations are good enough for any calculations that require them.*

During Technical Finish, the other 6 party members who do not have the Standard Finish buff will gain an esprit generation buff for 20 seconds. You and your dance partner will retain the normal amount of esprit generation you had before. Under Technical Finish, instead of 2 people contributing to your esprit generation, there are 8 people contributing to your esprit generation (effectively quadrupling this generation rate for 20 seconds).

- - -

# Improvisation

Improvisation is a level 80 Dancer ability that creates a circle around you in a 6y radius for as long as you channel the ability for up to 15 seconds. This ability will generate esprit based on how many party members are standing in the circle. When used in combat, it will generate 3 esprit + 1 for each party member who is in your circle per server tick (so if all 7 other party members are standing in it, it will generate 10 esprit per server tick). The ideal time to use Improvisation is during downtime when the boss is untargetable (such as a phase change). If channeled for the full duration, you can generate up to 60 esprit if everyone is standing in your circle. Additionally, it will grant a 10% healing buff for anyone standing in the circle. Since this ability is channeled, it will cancel the auto attack when initiating. You can potentially weave this ability in between GCDs when the whole party is standing together to “fish” for esprit. Due to the potential loss of an auto attack, this is a marginal gain at best, and a loss if you do not have all 7 party members in the circle (missing even 1 party member will cause you to only generate 9 esprit which effectively cannot contribute to a Saber Dance -- 49 esprit is not enough to use Saber Dance while 50 is). 

- - -

# Understanding Flourish

Flourish is a 60s cooldown oGCD ability that grants all 4 of our proc GCDs and a proc of Fan Dance III. Whenever you naturally proc one of these abilities, you gain a buff that lasts for 20 seconds that allow you to use that specific proc’d action. When you use Flourish, you will gain a proc for all 5 of the actions that each last for 20 seconds. The Flourish window in a DNC’s rotation can be a very hectic time, especially since you will not want to waste a single proc and 2 of the procs are AoE GCDs that require being close to the boss in order to hit.  

![](https://cdn.discordapp.com/attachments/752334526449057853/897215433843802132/unknown.png)\
(The buffs granted by flourish that allow you to use Reverse Cascade, Fountainfall, Rising Windmill, Bloodshower, and Fan Dance III)

Using Flourish while any of these procs are already active is a significant DPS loss. Using Flourish when the Fan Dance III proc is already active is a loss of 200 potency. Losing a Fountainfall / Bloodshower proc is a 142 potency loss over our average GCD potency. Losing a Reverse Cascade / Rising Windmill proc is a 92 potency loss over our average GCD potency. It is better to use your proc and delay Flourish by 1 GCD than using Flourish to override the proc.

However, there are ways that we can avoid delaying Flourish while not losing any procs. When doing your rotation normally before Flourish, you can do:

Cascade → use Reverse Cascade if procs → Fountain → use Fountainfall if procs → Cascade…
![](https://cdn.discordapp.com/attachments/752334526449057853/897215519214669824/unknown.png)

This will help reduce the potential of having proc(s) going into Flourish coming off cooldown.

To prevent going into Flourish with a Fan Dance III proc already active, weave that Fan Dance III before using Flourish. If the Fan Dance III procs on the last oGCD of the GCD before you use Flourish, you can double weave the Fan Dance III → Flourish in that order.

In order to avoid losing a proc while also using Flourish on cooldown, we can intentionally save esprit to use a Saber Dance to help buffer our GCD in preparation for Flourish. Thinking 2 GCDs ahead of Flourish, we will want to consider the following:

![](https://cdn.discordapp.com/attachments/752334526449057853/897215611007029309/unknown.png)\
(image courtesy of Io Whitespirit of The Balance - Discord server)

You have 20 seconds to use all of your procs before they expire. DNC is only able to execute at most 8 GCDs in that 20 second time frame. Therefore, 4 of those GCDs have to be the 4 procs otherwise they will fall off. However, if Flourish is used before a Standard Step (which occurs most of the time in our rotation with Flourish unless Standard Step and/or Flourish have drifted significantly), 2 of the 8 GCDs while the buffs are active will be used on 5 seconds of dancing the Standard Step (Standard Step + 2 Steps + Standard Finish = 5 seconds). Therefore, we only have 6 actionable GCDs where we can use the 4 procs. Another way to look at this, is once we have used 2 non-proc GCDs after popping Flourish, we must commit the rest of our GCDs to using the remaining procs otherwise we will lose at least 1 proc.

Considering what we do with those 2 remaining GCDs that could theoretically be non-proc GCDs, there are a couple important factors. Are we capped on esprit or nearly capped? Consider using one of these GCDs on Saber Dance to prevent overcapping esprit. Do we have a combo’d Fountain available that hasn’t been used? Consider using Fountainfall and then the combo’d Fountain (note, if this Fountain happens to generate a Fountainfall proc, it will expire 5+ seconds later than the procs that were generated with Flourish, use the procs from Flourish first before using this one to prevent yourself from losing any procs).

![](https://cdn.discordapp.com/attachments/752334526449057853/897215786647711814/unknown.png)\
Note: After doing this combo’d Fountain, continue using the rest of your Flourish procs and use Standard Step when it comes up. You can only use at most 1 more non-Flourish’ed proc GCD (i.e. potentially Saber Dance) before you must commit to only using the proc GCDs to ensure you don’t lose any.

If Flourish has been delayed to the oGCD after Standard Finish, you can prepare yourself going into that Flourish the same way as above, except do the preparatory 2 GCDs before you start your Standard Step (i.e. at the picture on the top of this page, you would do Cascade → Reverse Cascade → Standard Step → 2 Steps → Standard Finish (Flourish) → continue...  ). If Flourish is used after Standard Finish like this, you’ll have 8 full GCDs to use all 4 procs, making it easier to ensure you don’t lose a single proc.

Consider prioritizing doing the AoE procs (Rising Windmill and Bloodshower) during Flourish at points in time when you know you’ll be able to be in melee range of the boss.

Not losing a proc is especially difficult when Flourish is used during Technical Finish because you are generating a lot of esprit during that time. Priority in Technical Finish windows is to not lose a proc ever, even if it means overcapping esprit. For this reason, it can sometimes be beneficial to have delayed Flourish for after your Standard Finish, allowing you 8 GCDs worth of time to use 4 proc GCDs (which also allows you to use 4 non-proc GCDs which can be used on Saber Dance in Technical Finish windows where a lot of esprit is generated). Refer to the “Technical Finish / Devilment Window Optimization” section of this guide for more details of when this would be a gain.

- - -

# DNC “Rotation”

Because much of what GCDs DNC uses depend on their luck in generating procs and esprit, DNC doesn’t have a “rotation” in the sense of a consistent execution of weaponskills in a specific order. The general flow of DNC in a Single Target encounter is performing a dance, followed by weaponskills until the dance comes off cooldown:

![](https://cdn.discordapp.com/attachments/752334526449057853/897215882768572487/unknown.png)

where the “GCD” boxes can represent any of Cascade, Fountain, Reverse Cascade, Fountainfall, Rising Windmill, Bloodshower, or Saber Dance. For which GCD to use in which box, that depends on our GCD priority list in the next section. But ultimately, the simple form of the DNC rotation outside of Technical Finish / Devilment can be summed up as 10 GCDs in between Standard Steps.

- - -

# General Single Target GCD Priority List

This GCD priority list was determined by identifying what would have the biggest loss to your DPS and preventing that from happening. Per Ellunavi’s analysis, the average GCD value for DNC is 347. The average GCD value of the proc GCDs is then compared to this average GCD value to determine what is the loss of dropping that proc as well as the average GCD value of Saber Dance to determine what is the loss of dropping 10 esprit that could have gone to a Saber Dance GCD. Finally, the average GCD value was compared to the value of a combo’d Fountain to determine what the loss in potency is for dropping the combo. The following is the result in the comparisons:

1. Losing Fountainfall / Bloodshower proc is a 142 potency loss.
2. Losing Reverse Cascade / Rising Windmill proc is a 92 potency loss
3. Losing 10 esprit due to overcapping is a loss of 53.4 potency per 10 esprit.
4. Losing the combo’d Fountain is a loss of 37.5 potency

The GCD priority list below was made by figuring out how to minimize these potential losses as best as possible. The result for GCD priority was: 

1. Fountainfall, Bloodshower, Reverse Cascade, Rising Windmill if not using them would otherwise let that proc fall. Note: Procs last 20 seconds. (If you have to choose which proc to let fall: Fountainfall = Bloodshower > Reverse Cascade = Rising Windmill  in potency value)
2. Standard Step (if available)
3. Saber Dance (if >= 90 esprit) - You’ll want to use Saber Dance if >=90 esprit in case both you and your Dance Partner would generate 10 esprit each during a non-Saber Dance GCD resulting in overcapping of esprit gauge.
4. Fountainfall (to allow for a combo’d Fountain to be used if it would otherwise be dropped)
5. Combo’d Fountain if it would otherwise drop. Note: After pressing Cascade, you have exactly 15 seconds to use Fountain counted from the moment you use Cascade in order to get the combo’d Fountain effect. At a 2.5 GCD, you cannot use more than 4 other GCDs after the Cascade without dropping the combo’d Fountain.
6. Reverse Cascade, Rising Windmill, Bloodshower. Prioritize the AoE procs for situations that will allow you to be in melee range.
7. Combo’d Fountain if you have no procs.
8. Cascade

\*Special Note: This GCD priority changes slightly while under the effect of Technical Finish / Devilment where Saber Dance >=90 esprit is higher priority than using Standard Step, and using Saber Dance when at 50 esprit is more important than using a combo’d Fountain. See “Technical Finish Window Optimization” section for more info.

- - -

# AoE Rotation

Whenever you are able to hit more than 1 target, you should make the following changes to your rotation based on how many targets you can hit:

2 Targets

* Replace Cascade → Fountain with Windmill → Bladeshower for your filler combo
* Replace Fan Dance I with Fan Dance II when using feathers, continue using Fan Dance III as it procs
* Continue to use Standard Step / Technical Step / Flourish / Devilment on cooldown
* Continue using Reverse Cascade and Fountainfall as they proc from Flourish
* Continue to use Saber Dance

3 Targets

* Same as 2 targets except you can let your single target procs (Reverse Cascade and Fountainfall) drop when you use Flourish since the value of your AoE GCD combo + potential procs they can generate are worth more than these single target GCD procs on 3+ targets

4+ Targets

* Same as 3 targets, except only use Standard Step to refresh the Standard Finish buff. Standard Step on 4+ targets is a loss compared to average AoE GCD potency + potential potency gains from the feathers that could be generated in those GCDs

Special note: 

* Windmill and Bladeshower will cancel the effect of a combo’d Fountain (i.e. if you do Cascade → Windmill, you will lose the combo’d Fountain effect). Similarly, Cascade and Fountain will cancel the effect of combo’d Bladeshower (i.e if you do Windmill → Cascade, you will lose the combo’d Bladeshower effect). 
* In situations where the number of targets you can hit changes (i.e. being able to hit 2 targets but then having to move away for a mechanic and can now only hit 1 target or vice versa), it is worth it to drop your combo’d Fountain in favor of a Windmill when going from 1 to 2 targets. When going from 2 to 1 targets, it is only worth it to complete a combo’d Bladeshower on the single target if you will be able to use the potential Bloodshower proc on both targets within the 20 seconds of the proc. Otherwise, drop the Bladeshower combo in favor of Cascade.

- - -

# Opener

The opener is important for DNC’s rotation since it sets up all of their cooldowns and dance timings for the rest of the fight by executing these actions in a certain order. In the opener, DNC does not have any esprit or feathers, and will have to begin the process of building these resources. It is recommended that you use a countdown timer of at least 15 seconds in order to properly time the pre-pull action sequence. The opener is as follows:

![](https://cdn.discordapp.com/attachments/752334526449057853/897216156178464768/unknown.png)

Start Standard Step (started 15 seconds pre-pull) → 2 steps → (use Peloton any point pre-pull, this gives the party a small burst of speed to hit the boss as soon as possible when the fight begins if they cannot pop sprint before the fight) → Potion (used 1.5 seconds before the boss is pulled) → Standard Finish (used right as the countdown hits 0) → Start Technical Step → 4 steps → Technical Finish (weave Flourish) → Rising Windmill (weave Devilment) → GCD → GCD → Start Standard Step → … continue with rotation

The Rising Windmill is chosen as the GCD after Technical Finish because it is your lowest potency proc (along with Reverse Cascade), and it will be used outside of Devilment. If you have an opportunity to hit 2 or more targets during this Technical Finish in the opener, it is better to use a Reverse Cascade here instead and save the Rising Windmill proc for when you can hit 2+ targets (such as the Living Liquid opener in The Epic of Alexander).

The Fan Dance III proc that is generated from Flourish can be double weaved and used after Devilment. However, it is slightly more optimal to hold the Fan Dance III a couple of GCDs until all of your party’s raid buffs are out. If holding Fan Dance III like this in the opener, wait before you use any potential Feathers you generate, otherwise you could override the Fan Dance III proc.

This opener uses your cooldowns in the following order: Technical Step/Finish, Flourish, Devilment, Standard Step/Finish. One slight adjustment to your Technical Step for future windows is to delay the next use of Technical Step/Finish by 1 GCD so that Devilment is weaved after Technical Finish and delay Flourish by 2 GCDs so it is done after the GCD after Technical Finish. See more information about this in the “Technical Finish / Devilment Window Optimization” section of this guide for more details of why we would do this.

- - -

# Technical Finish / Devilment Window Optimization

## Optimizing Technical Finish / Devilment as a Raid Buff (with timings)

Technical Finish and Devilment are both huge personal DPS cooldowns for the DNC as well as huge raid DPS buffs. Both of these things need to be considered when deciding when are the optimal timings of these abilities in a fight. Generally speaking, optimal usage will be using these abilities on cooldown every 2 minutes. There may be some fight specific mechanics or other reasons for why you may want to delay usage (i.e. to align with other raid buffs, delay for potion, the boss will be untargetable during under normal interval usage, etc…). These delays are generally only worth it if you would not lose a cast of Technical Finish / Devilment in the fight with the delay. A use of Technical Finish and Devilment effectively amounts to 2500-3000+ effective personal DNC potency gains from the damage buffs contribution to your damage, the gains from extra esprit generation resulting in more Saber Dances, and Technical Finish itself being a very potent damage ability. Losing a use of Technical Finish and Devilment effectively loses 2500+ potency.

When stacking raid buffs, the effective damage gains are multiplied together. So when stacking Trick Attack (5% damage), Devotion (5% damage), Technical Finish (5% damage), and Divination (6% damage), the actual damage gain when all of these buffs are active is not 21% (all of them added up) but instead:

1.05 x 1.05 x 1.05 x 1.06 = 1.227 (or a 22.7% increase in damage)

This extra 1.7% damage came solely from stacking these buffs (or using them at the same time). The more raid buffs that are stacked together like this, the greater the overall gains are for everyone in the party. This is very important especially when considering party members will be using their most potent abilities during this time frame to maximize their burst potential. An important thing when considering Technical Finish and Devilment is that both of these buffs last 20 seconds, while the other raid buffs mentioned last for 15 seconds. It is important then that Technical Finish and Devilment are up for the entirety of these other raid buffs. Ideally, Technical Finish and Devilment should go up slightly before those other raid buffs so that there will be a 15 second period of time where all raid buffs are active.

![](https://cdn.discordapp.com/attachments/752334526449057853/897216343781302283/unknown.png)\
([xivanalysis](https://xivanalysis.com/) example of ideal buff timings)

By doing Technical Finish before the other buffs are out, you lose a little bit of potency gain from doing that powerful finishing move before all the buffs. However, this is better than the alternative of doing the Finish in raid buffs because that would push the Technical Finish damage % buff outside of the burst window (especially since it could miss powerful actions that party members are doing in the first 1-2 GCDs of these raid buffs).

Because of how tight this buff alignment can be if other party members are keeping their buffs off cooldown, with the exception of intentional delays of all raid buffs because of mechanics / phase changes, you will never want to drift Technical Finish / Devilment because this is a loss versus having very good buff alignment. The only exception to this is drifting Technical Step purposefully by 1 GCD after your opener for the second use the align Devilment with the oGCD of the Technical Finish (Devilment does not drift at all by doing this because it was delayed by 1 GCD in the opener).

## Optimizing Technical Finish / Devilment as Personal DPS Buffs

In the Technical Finish / Devilment window itself, there are several factors we need to consider in terms of how to optimize this window:

1. Esprit generation will nearly quadruple during this window due to every party member having the esprit generation buff for 20 seconds. This will greatly increase esprit generation and Saber Dance will be used more frequently.
2. If all of Technical Step / Devilment / Flourish / Standard Step have been kept off cooldown for the majority of the fight with minimal drift, all these abilities will occur during this burst window.
3. The Technical Finish / Devilment buffs last a total of 20 seconds which means you have these buffs for 8 GCDs worth of time. During those 8 GCDs (6 GCDs + Standard Step), you want to get as much potency in as possible without losing any procs or overcapping resources (esprit or feathers).

While under the Technical Finish window, our GCD priority changes slightly to:

1. Fountainfall, Bloodshower, Reverse Cascade, Rising Windmill if not using them would otherwise let that proc fall. Note: Procs last 20 seconds. (If you have to choose which proc to let fall: FF = BS > RC = RW)
2. Saber Dance (if >=80 esprit)
3. Standard Step (if available)
4. Saber Dance (if we have 50 esprit)
5. Fountainfall (to allow for a combo’d Fountain to be used if it would otherwise be dropped)
6. Combo’d Fountain if it would otherwise drop. Note: After pressing Cascade, you have exactly 15 seconds to use Fountain counted from the moment you use Cascade in order to get the combo’d Fountain effect. At a 2.5 GCD, you cannot use more than 4 GCDs after the Cascade without dropping the combo’d Fountain.
7. Reverse Cascade, Rising Windmill, Bloodshower. Prioritize the AoE procs for situations that will allow you to be in melee range.
8. Combo’d Fountain if you have no procs.
9. Cascade

The key differences to our Technical Finish GCD priority vs our normal GCD priority is that we prioritize using Saber Dance before Standard Step if we are capped or close to capping (resulting in drifting Standard Step) and otherwise prioritize using as many Saber Dances in Technical Finish as possible including letting a combo’d Fountain drop in order to use more Saber Dances. Our top priority is to still not let any procs drop.

## Optimizing Ability Order During Technical Finish / Devilment

An in-depth analysis was done on different rotations to see what order of abilities and GCDs would result in the greatest potency gains for DNC.

Assumptions made for these findings include:

1. Esprit generation rate of party members is 20% to generate 10 esprit per weaponskill or spell and DNC’s self esprit generation rate is 30%. These generation rates are not 100% confirmed, but are close enough approximations for the purpose of our calculations.
2. Auto attacks were not factored into the potencies under these buffs, but would presumably factor in a small gain for the rotations that align Devilment with the Technical Finish cast over the ones that delay devilment due to multiplicative gains for stacking these buffs.
3. Esprit generation in the simulations was assumed to be consistent through the Technical Finish window. For example, in a case where 160 esprit was generated over the course of a Technical Finish window, it was simulated assuming 20 esprit generated per GCD. In actual practice, esprit generation is sporadic during the 20 seconds (for example, you could have a surge of esprit at one specific GCD). When considering how this affects comparing these rotations, the rotations which are better able to use more Saber Dances without losing procs tend to be the ones less likely to overcap esprit.
4. These findings don’t factor in any other raid buffs, but the assumption is that the more raid buffs you have during this window will widen the difference between what these rotations are predicting due to multiplicative gains of stacking these raid buffs with your Devilment / Technical Finish.
5. These rotations are only looking at the DNC’s rotation, and not what their Dance Partner is doing during this time. However, in a vacuum, Devilment’s best placement for your Dance Partner is on the oGCD after Technical Finish due to the multiplicative gains they would have from both buffs for the entirety of their durations.
6. When comparing these rotations, we are only looking at situations where the DNC is not entering the Technical Finish window with a GCD proc or a combo’d Fountain for ease of comparison of rotations.

The number of weaponskills and spells your party members use during Technical Finish may vary depending on composition. Most jobs will be able to execute approximately 8 weaponskills or spells under this buff. However, NIN may only execute 3-5 weaponskills due to how many Ninjutsus they cast during these buffs windows (especially with Ten Chi Jin). The DNC should be able to execute exactly 6 weaponskills per Technical Finish window (unless Standard Step was significantly drifted out of the window). Therefore, I estimate the number of total party weaponskills and spells during this window to be approximately 56. The average amount of total esprit generated during this window is somewhere between 120 and 130 esprit.

However, there is a lot of variation possible for how much esprit you generate during this window. It’s possible to generate 40 or less esprit, and it’s possible to generate 200+ esprit.  Both of these events are rare (< 1% of the time), but lead into some interesting theorycrafting about how to optimally plan for a Technical Finish window given a wide range in amount of esprit that could be generated.

The only thing we really have control of in the Technical Finish window is the order in which we do Technical Step / Devilment / Flourish / Standard Step. As noted earlier in the section about “Understanding Flourish”, when we use Flourish, we have 8 GCDs worth of time to use all 4 of those GCD procs. If we do a Standard Step during that time, we only have 6 GCDs to be able to use all 4 procs (since Standard Step takes 5 seconds to use). This means we only have 2 GCDs that can be used on something other than Flourish GCD procs (such as Saber Dance). During Technical Finish, our esprit generation is considerably faster than normal and being limited to only 2 GCDs to use Saber Dances can result in overcapping esprit during technical windows where we get lucky with esprit generation. However, if the flourish was delayed to after Standard Step, we would have 4 GCDs available to use Saber Dance.

Let’s consider possible different Technical Finish rotations (some of which purposefully delay an ability cast) based on the order of the abilities Technical Step, Devilment, Flourish, and Standard Step as well as how many GCDs are between these abilities:  

**Rotation 1:** TF -> Flourish -> GCD -> DM -> SS\
**Rotation 2:** TF -> Flourish -> GCD -> DM -> GCD -> GCD -> SS\
**Rotation 3:** TF -> DM -> GCD -> Flourish -> SS\
**Rotation 4:** TF -> DM -> GCD -> Flourish -> GCD -> SS\
**Rotation 5:** TF -> DM -> GCD -> SS -> Flourish\
**Rotation 6:** TF -> DM -> GCD -> GCD -> SS -> Flourish  

Each of these rotations highlight different potential things you could do under Technical Finish. 

**Rotation 1** may be used if you are potentially re-opening in a fight but lack resources (esprit) to be able to do a first GCD Saber Dance after Technical Finish which could then allow you to use Flourish. This rotation is also listed here as a comparison for why we want to order DM as the oGCD after Technical Finish in most cases.

**Rotation 2** would be if we don’t drift a single ability from when we use them in the opener. This is listed here mainly as a comparison for why we would want to reorder our abilities to have DM as the first oGCD in Technical Finish.

**Rotation 3** might be something seen in a fight where we are potentially re-opening with enough esprit to do a 1st GCD Saber Dance under Technical Finish.

**Rotation 4** can be how we align our abilities from our normal opener if we delay Technical Step by 1 GCD and delay Flourish by 2 GCDs.

**Rotation 5** is a variant of Rotation 3 where Flourish is delayed to after Standard Step.

**Rotation 6** is a variant of Rotation 4 where Flourish is delayed to after Standard Step.

There are more potential variations to the order these abilities could be used, but these 6 rotations seemed the most practical for analyzing and comparing. When comparing rotations, we will want to consider what is the effective potency gain from using Technical Finish and Devilment in the order we do these abilities and what is the expected loss in potency from esprit overcapping. Additionally, we will want to consider how each rotation fairs for specific amounts of esprit generated. Some rotations will be better able to use excessive amounts of esprit due to the timing of the Flourish cast while some rotations may be forced to use Flourish GCD procs while capped on esprit because they would otherwise lose the proc.

Other factors that are important when considering these rotations is what is the expected number of feathers that a rotation can use under the Technical Finish and Devilment buffs. Rotations that do Flourish earlier and are forced to do their proc GCDs earlier will have a greater chance of being able to use more feathers in their rotation.

One last factor will be considering how many feathers and how much esprit do you start with going into the rotation. Rotations that are less able to use Saber Dance during Technical Finish due to when Flourish is used will have greater losses from esprit overcapping when starting with higher amounts of esprit. Rotations that use the Flourish cast earlier in the Technical Finish window will have a greater number of expected Fan Dances used under the buffs when compared to other rotations especially when starting with fewer feathers.

Each rotation was examined under different sets of factors to see what that rotation would do given those circumstances, what the expected potencies under Devilment / Technical Finish would be in each situation, and what are the expected losses of potential esprit overcapping in that situation. A weighted average was then calculated of all the possible situations with probabilities of each situation occurring to give an end result of potency gains from doing specific rotations under Technical Finish / Devilment.

Let’s look at an example of a rotation under a specific set of circumstances:

![](https://cdn.discordapp.com/attachments/752334526449057853/897221919978455090/unknown.png)

In this example, we start off with 4 feathers and 50 esprit going into Technical Step. We are doing Devilment weaved after Technical Finish, 1 GCD (which is a Saber Dance) followed by Standard Step into Standard Finish and Flourish is weaved after the Standard Finish. The remaining 5 GCDs under the Technical Finish / Devilment buffs include 2 more Saber Dances, a Fountainfall, a Bloodshower, and a Rising Windmill. The last proc (Reverse Cascade) was done outside of the Technical Finish / Devilment buffs but did not drop. As many Fan Dances are weaved in the available oGCD spaces as possible. The total potencies of all these abilities is:

![](https://cdn.discordapp.com/attachments/752334526449057853/897222061892710450/unknown.png)

The quantities listed here for the Fan Dance and Fan Dance III abilities are the average number of casts you will be able to get off during this Technical Window given the circumstances listed before (starting with 4 feathers and generating 2 feathers out of the 4 procs). With the total potency of actions and abilities under this Technical Window, we can calculate the relative potency gains from the Devilment and Technical Finish buffs. Technical Finish is a 5% damage increase, while Devilment is an increase in Crit and DH rates by 20% each. At current 5.2 BiS stat tiers for DNC, Devilment is effectively a 15.6% damage increase for DNC. With both TF and DM buffs active, DNC’s effective damage increase is 21.4%. Therefore the effective potency gain for this rotation under these circumstances is:

|                                             |        |
| ------------------------------------------- | ------ |
| Overcapped Esprit                           | 0      |
| Total Potency under TF+DM                   | 5275   |
| **Effective Potency Contribution of TF+DM** | 1129.2 |

As noted in this table, there is no expected amount of overcapped esprit at this rotation and circumstances. If overcapped esprit would occur, the expected amount of overcapped esprit would factor into the effective potency total by subtracting 53.4 potency per 10 esprit lost in this way (average value of 10 esprit compared to average GCD).

Rotations that have Technical Finish desynced from Devilment by 1 GCD (specifically rotations 1 and 2) have their effective potencies calculated slightly different since there is 1 GCD done with Technical Finish but without Devilment at the beginning of Technical Finish window and another GCD that does not have Technical Finish but has Devilment at the end of the buff period while 5 GCDs + Standard Finish will still have both buffs. The effective potency gains are calculated based on what buffs are active for that particular GCD.

A table with all of the expected potency gains under Technical Finish and Devilment can be found [here](https://docs.google.com/spreadsheets/d/1nLzwnZjg_FDFea0FHdHijHTN1vxfsJYXJSVnzV3aUG0/edit?usp=sharing) for the various combinations that were tested of different esprit generation rates, different feather generation rates, and different amounts of starting resources (esprit and feathers).

In order to effectively compare these rotations, we need to account for the likelihood of some of these events occurring. For example, when you have the four Flourish procs, there are different chances for generating different amounts of feathers if using all 4 proc GCDs:

![](https://cdn.discordapp.com/attachments/752334526449057853/897222951601078292/unknown.png)

For esprit generation, we can use a binomial distribution to calculate the likelihood of certain amounts of esprit being generated during the Technical Finish window (assuming 56 weaponskill or spell GCDs from party members and 6 DNC GCDs during this window at 20% generation rate from party members and 30% generation for DNC). This esprit generation probability curve looks like this:

![](https://cdn.discordapp.com/attachments/752334526449057853/897223140306993243/unknown.png)

Using the probabilities for the different amounts of esprit and feathers generated, we can calculate weighted averages for each rotation’s potency gains under Technical Finish and Devilment. The final averages of these rotations are:

![](https://cdn.discordapp.com/attachments/752334526449057853/897223251275677767/unknown.png)

**Rotation 1:** TF -> Flourish -> GCD -> DM -> SS\
**Rotation 2:** TF -> Flourish -> GCD -> DM -> GCD -> GCD -> SS\
**Rotation 3:** TF -> DM -> GCD -> Flourish -> SS\
**Rotation 4:** TF -> DM -> GCD -> Flourish -> GCD -> SS\
**Rotation 5:** TF -> DM -> GCD -> SS -> Flourish\
**Rotation 6:** TF -> DM -> GCD -> GCD -> SS -> Flourish  

- - -

# Conclusions from Technical Finish Rotation Analysis

The first important thing to note when comparing these rotations is that the rotations that use Flourish before Devilment (Rotations 1 and 2) are a significant DPS loss compared to the other rotations. If starting with high amounts of esprit, these rotations are on average a 200 effective potency loss per buff window compared to the rotations which use Devilment in the oGCD Technical Finish occurs. At a medium amount of starting esprit, these rotations are on average about a 100 effective potency loss. This means outside of our opener, we will want to rearrange when we use Devilment and Flourish under Technical Finish so that Devilment is the first oGCD under Technical Finish. In order to do this after the opener, the next Technical Step will have to be delayed by 1 GCD in order for the Technical Finish to line up with Devilment coming off cooldown. Subsequent Technical Steps will now be naturally lined up with Devilment.

The next question to be answered is whether it is worth it to delay Flourish until after Standard Step in order to prevent losses due to overcapping esprit. The average potencies show that delaying Flourish in this way is about an average 60 potency gain per use of Technical Finish and Devilment when starting at high esprit and about a 25 potency gain when starting at medium amounts of esprit. Although this is a slight gain per cast of Technical Finish and Devilment, it will be shifting Flourish onto the tail end of your party’s raid buffs which would also shift it onto the tail end of any raid buffs you may have during non-Technical Finish / Devilment uses of Flourish (such as Battle Litany at 3 min, Brotherhood at 3 min, Trick attack at odd minutes). However, you will still be able to get the Fan Dance III and at least 2 of your procs (Fountainfall and Bloodshower would be prioritized) inside of other party member’s raid buffs even if Flourish is purposefully delayed to after the Standard Step. However, any unintentional drifts of Flourish in addition to this purposeful delay will cause Flourish to completely desync from raid buffs and from your Technical Finish / Devilment for the rest of the fight.

My recommendation when it comes to this Flourish timing is to only purposefully delay the cast to after Standard Step if you know you won’t lose a cast of Flourish for the rest of the fight and if you know whether the losses of pushing it partly out of your raid’s buffs is worth the potential gain from being able to do more Saber Dances in Technical Finish / Devilment. This should only really be considered in an optimized setting such as speed killing.

In a normal fight with a normal opener, the recommendation would be to delay your Technical Step by 1 GCD on the second use of Technical Step to line it up with Devilment which would delay your 3rd usage of Flourish by 2 GCDs in order to get the following alignment (assuming Standard Step did not drift):

![](https://cdn.discordapp.com/attachments/752334526449057853/897226431879348284/unknown.png)

However, if you are doing a re-opener in a fight where you are starting with full resources (100 esprit and 4 feathers), doing a Flourish before Standard Step on this specific Technical Finish window has a high chance of causing potency losses due to overcapping esprit. With all your abilities up, you will want to do Technical Step into Devilment (as explained earlier), use 1 GCD on Saber Dance to stop overcapping esprit (since you are coming into the reopener with 100 esprit) and then do Standard Step to give you and your partner the Standard Finish buff. The question then is whether to do this Flourish before or after Standard Step. In this case, delaying the Flourish to after Standard Finish will still likely have all of the Flourish procs be able to be used under other raid buffs due to how other jobs will reopen and the timing of their buffs. You may lose 1 proc GCD under the effects of other raid buffs, but you’ll gain the opportunity to do more Saber Dances under the same buffs. Therefore, I recommend doing the following re-opener, especially with full esprit and feathers:

![](https://cdn.discordapp.com/attachments/752334526449057853/897226455749107823/unknown.png)

Examples of where this reopener would be used are after add phase in Shiva E8S and Perfect Alexander reopener in The Epic of Alexander. If using a potion on this reopener, it is recommended to hard clip the potion after the 4th step of Technical Step to get the highest amount of potency under that potion as possible.

- - -

# Stat Tiering and Itemization for Dancer

Determining what gear to wear can have an impact on the damage you do. I find itemization to be a very important topic for any DPS role because wearing a more optimal gear set can increase your damage without changing anything with regards to your rotation. Essentially, proper itemization increases your DPS before you even step into the fight.

Generally speaking, the damage increase you get from stats as DNC is ranked in order of:

* Weapon Damage > Dexterity > Crit > Direct Hit > Det >>>> Skill Speed
* Melding Priority: Crit > DH > Det

Description of these stats are as follows:

* Weapon Damage: Found on your weapon, is an independent contributory factor to the damage formula
* Dexterity: DNC’s primary stat that is found on all of its gear, 1 point in dexterity adds 1 point in attack power which has its own function in the damage formula
* Crit: DNC’s most desired secondary stat, increases the chance of success in landing critical hits and increases the crit damage multiplier when you successfully land a critical hit
* Direct Hit: secondary stat, increases the chance of success in landing a direct hit (Note: Direct Hits do a static 25% increase in damage)
* Det: secondary stat, flat damage% increase which is its on separate function in the damage formula.
* SkS: secondary stat, decreases the global cooldown timer (base 2.50 for all DNC weaponskills) and increases the damage auto attacks do
* Special Note: Abilities can both crit and direct hit at the same time, in which case they get both the crit damage multiplier and the 1.25 multiplier from direct hit when the action both crits and direct hits.

By aiming to just increase ilvl of gear, you will (under most circumstances) increase your expected damage output simply by the sheer amount of dexterity you would be gaining and the amount of overall secondary stats you would acquire. Additionally, weapon damage can be increased by obtaining a higher ilvl weapon, and will more often than not be a DPS increase for DNC.

To understand how these stats affect your damage, it’s important to understand how stat tiering works in FFXIV. Let’s look at Determination for a second. The Determination secondary stat is a simple damage% increase stat. When thinking about this stat, you might think the graph of it would be a straight line where the more Determination you have, the higher the damage% increase is, like so:

![](https://cdn.discordapp.com/attachments/752334526449057853/897228159450226748/unknown.png)

However, most stats in FFXIV work in tiers, meaning you will only see the increase in the stat’s effect when you reach that next tier. The actual graph of Determination vs Damage% increase actually looks more like a staircase:

![](https://cdn.discordapp.com/attachments/752334526449057853/897228382104875018/unknown.png)

What this means is that when you are at a specific tier (step), adding 1 point in Determination will have no effect on your damage unless it moves you to the next tier (step). Any points in Determination added beyond this stat tier starting point are considered “wasted” unless it helps you reach a new stat tier. Generally speaking, we should only worry about these steps/tiers when determining what our BiS gear set is, which may involve changing around materia melds to ensure there are as few wasted secondary stat points as possible.

## Weapon Damage and Dexterity

Weapon Damage and Dexterity are the simplest of stats with regards to DNC DPS, especially since all gear pieces have Dexterity. The easiest way to increase these stats is simply by upgrading gear pieces for higher ilvl items that provide more DEX and higher ilvl weapons with more Weapon Damage. Weapon Damage is the only stat that is not tiered. Dexterity increases your damage through stat tiers, however, these steps are so small and varied (between 1-3 primary stat points per tier) that it is not worth effort examining differences in Dexterity stat tiers.

## Crit vs Det/DH

Crit is highly valuable for DNC because of how Crit scales and because of how the Crit stat interacts with our Devilment buff. Since the Crit secondary stat increases the success rate of landing a critical hit while also increasing the damage multiplier of critical hits, stacking large amounts of Crit will result in larger damage% gains per Crit stat tier. At current BiS (5.2), a slightly larger than 1% increase to damage can be seen from gaining 198 points of Crit (compared to 240 for DH and 254 for DET).

Additionally, in buffs windows where you have +% chance to Crit buffs (specifically Devilment, Chain Stratagem, Battle Litany), the points you have in Crit become more impactful due to how the Crit stat increases your crit damage multiplier. Since a disproportionately large amount of your damage occurs during buffs windows (specifically under Technical Finish and Devilment), this heavily weighs Crit to become more and more valuable over DH and DET which have a stagnant damage% increase during these windows.

## Determination vs DH

Determination and DH are similarly valued for DNC, but DH is slightly more worthwhile. The reason behind this is due to the stat tiering for DH to be slightly favorable over DET for DNC. In order to increase your chance to DH by 4%, you would need 240 points in DH at level 80. Since the DH multiplier is a static 1.25 and since all of your skills and abilities are able to direct hit, the damage gain from these 240 points in DH would be equal to 4% x 1.25 = 1% damage increase. For DET, it takes approximately 252 points of DET to obtain a 1% damage increase. Getting 1% damage increase takes 12 less secondary points with DH than with DET, making DH slightly more economical than DET when allocating your secondary stats.

However, DET and DH are separate functions in the damage formula that are multiplied together. In other words:

Damage = (contribution from DET) x (contribution from Direct Hits) x …. all other factors such as Crit, WD, Dex, Raid Buffs

When examining DET and DH stat interactions with each other, it is important to note that in trying to figure out what gives us the maximum expected damage with these stats, we need to maximize the value of “(Contribution from DET) x (Contribution from Direct Hits)”

Given that Crit sees the greatest gains for DNC as a secondary stat, our focus in itemization will be to maximize Crit and then use the rest of our secondary stats for DET / DH. With Current BiS (5.2) the total number of DET + DH secondary points available is 4829 (this includes the 340 base amount of DET and 380 base amount of DH). A graph showing the expected damage gain of your DET + DH for different amount of DET/DH is shown below:

![](https://cdn.discordapp.com/attachments/752334526449057853/897228568663298108/unknown.png)

This graph shows the expected damage gain at different amounts of DET (with the remaining stats being in DH) if DET + DH totals 4829. Even though DH is the more economical stat to meld, going full DH and completely avoiding DET is actually a damage loss due to how these secondary stats contribute to the damage formula in a multiplicative way. The peak in the above graph occurs approximately at 31.5% DET / 68.5% DH secondary stats.

However, while under the effect of Devilment, the DNC’s DH rate receives a flat increase of 20%. While under this buff window, our DET increases in value due to the multiplicative gains with this DH rate. In the graph below, you can see that DET and DH secondary stat values are near equal to each other while under the effect of Devilment (the peak in this graph occurs at 47.6% DET / 52.4% DH)

![](https://cdn.discordapp.com/attachments/752334526449057853/897228668747780096/unknown.png)

When trying to optimize the amount of damage you get from DET + DH, you have to consider what percent of your total damage occurs under the Devilment buff. Many current top DNC parses show on some fights the % of your total damage that is done under Devilment is approximately 31%. This % is dependent on multiple things: party composition (raid buffs), fight length (affecting the number of Devilment casts and what % of the total time you are under Devilment), ability to successfully pool feathers/esprit into buff windows, etc… In order to consider Devilment in our DH+DET optimization calculations, we can do a weighted average of the damage you do outside of Devilment vs inside Devilment for different % amounts of your total damage happening under Devilment. The result shows different DET/DH amounts were favored at different %’s of total damage happening under Devilment. However, between 21-35+% of total damage occurring under Devilment showed the same peak in expected damage value at the same specific stat tiers of DET / DH (at 1965 DET and 2864 DH or 39.5% DET / 60.5 % DH). However, achieving this exact stat tier is not possible with current gear / melding options available in 5.2 due to materia VIII’s being in increments of 60. Therefore, when looking at obtainable options from melding combinations, the maximum expected damage was calculated for 2067 DET and 2762 DH (42.0 % DET / 58.0 % DH) which is the stats for current BiS for DNC as of patch 5.25.

- - -

# Skill Speed… and Why it is not good on DNC

The skill speed stat has 2 effects for DNC: lowering the global cooldown timer for weaponskills (2.50 base GCD) and increasing the damage of auto attacks.

The damage% increase Skill Speed gives to auto attacks has the same differences between stat tiers compared to DET (i.e. 254 points of Skill Speed will increase auto attack damage by 1%). However, auto attacks are only about 13-15% of our total damage.

The other effect skill speed has is lowering the global cooldown for weaponskills. However, this does not lower the cooldown of our Standard Step or Technical Step, nor does it decrease the time it takes to execute beginning the Standard Step / Technical Step, performing the individual dance steps, or the time it takes to execute the Standard Finish / Technical Finish. Below is a visual that examines the difference between a 2.50 GCD tier and a 2.48 GCD tier.

![](https://cdn.discordapp.com/attachments/752334526449057853/897228883475177533/unknown.png)

![](https://cdn.discordapp.com/attachments/752334526449057853/897228917088350209/unknown.png)

At a 2.50 GCD tier, Standard Step becomes available at the precise end of a GCD provided you do not clip your GCD in the above image (Standard Step = 1.5s, dance steps (x2) = 1.0s x2 = 2.0s, Standard Finish = 1.5s, each weaponskill GCD is 2.5s per GCD x 10 GCDs = 25s. The result is 1.5 + 2 + 1.5 + 25 = 30.0s). The rotation at this GCD tier feels very smooth to play.

At a 2.48 GCD tier, a gap is created between the last GCD and when Standard Step becomes available again. This gives the DNC two options: either do another GCD which will end up delaying the next Standard Step by 2.28s (2.48 - 0.20 = 2.28s) or wait for 0.2 seconds and then begin Standard Step when it is available. These choices are referred to as “drifting” and “holding” respectively. At this specific GCD tier, it is actually worth it to hold your GCD and wait those 0.2 seconds in order to keep Standard Step off cooldown. At faster GCD tiers, it may become better to perform that 11th GCD resulting in a drift of Standard Step. For more information behind the calculations regarding when it is better to drift vs hold standard step, refer to Ellunavi’s DNC analysis.

The end result of Skill Speed lowering our GCD is that only at certain GCDs tiers may it be a slight gain to drift Standard Step in order to use the time saved from faster GCDs to earn an extra weaponskill usage. Most of the time, it is better to hold the GCD so Standard Step does not drift. Therefore, when you are holding your GCD like this, you actually gain no value from the fact that Skill Speed is decreasing your GCD. If this is the case, the only thing Skill Speed is actually providing for you is the damage% increase to your auto attacks (which makes it effectively 13% as good as Determination based on how much % of our damage comes from auto attacks).

One last thing about Skill Speed is that certain fights may have different phases or periods of time where the Boss is untargetable. Having a faster GCD tier may allow you to gain an extra GCD before the Boss jumps or changes phase. Generally speaking, the gain in this extra GCD is not worth the loss of the Crit, DH, or Determination stats you could have in place of the Skill Speed.

- - -

# Gear and Best in Slot (BiS)

“Best in Slot” refers to the best possible combination of gear for a specific piece of content. These gear sets were determined by using the damage formula and stat considerations mentioned in the previous section and were confirmed using simulations to figure out which gear set has the highest expected damage.

5.3 Best Food: Stuffed Highland Cabbage
5.3 Best Potions: Grade 3 Tincture of Dexterity

[Current BiS gear for Savage raiding (5.2)](https://etro.gg/gearset/c2266309-640a-4383-81c5-66c1b2e16ac9) - ilvl 500 and currently the best gear set for DNC. Remains unchanged in 5.3.

[Guide for Preparing Gear for Savage Raiding (5.3)](https://docs.google.com/document/d/1k_kasl9Uf0ar4sGrXIPtKahVpVZoCdwPMnNUXOOgMuo/edit?usp=sharing) - This is a guide for what gear to get when trying to gear up DNC in 5.3. This also includes a recommended tomestone item buy order. It also includes the best possible gear you can obtain before setting foot in any savage raid.

[Current BiS gear for The Epic of Alexander (5.3)](https://etro.gg/gearset/abe39cc0-e56b-4f93-ab6c-010cbae06f6d) - This gear set is a combination of ilvl 470 and 475 pieces because the content syncs to ilvl 475. If a gear piece is synced, it loses the effect of the materia melded. This set uses the 475 Helm, Chest, Legs, Earrings, and Ring from the newest 5.3 Dungeon. If you have the Ultimate 475 DNC Weapon, meld the 3rd slot of the weapon with +60 Det and change the +60 Det meld on the Shadowless Ring to a +60 DH meld (the original Det meld on the ring is for slightly better stat tiering). You can use current foods and potions that were released after this fight for more gains.

BiS for UCoB and UWU - There are no pre-made gear sets for these level 70 synced fights. For UCoB, ilvl 418 gear and above will have both secondary stats capped on the item when synced. For UWU, ilvl 470 gear and above will have both stats capped when synced. When syncing gear down, you can choose to go for gear pieces that have favorable stats (i.e. Crit > DH > Det), however, keep in mind how DET and DH interact with each other (shown in previous section where the ideal amount of DET is somewhere between 30-40% of total DH + DET). Current 5.2 BiS does a good job of syncing down to favorable stats for these ultimates (Crit on the base of every item, and DET/DH syncs to approximately 42% of your total DET + DH being DET), you could consider swapping out 1 Crit/Det piece for a Crit/DH piece to achieve a more favorable DET/DH stat tier.

* For both of these fights, you can use Shadowbringers food and potions for more gains.
* For UWU, there are no ilvl 375 gear pieces that are favorable to sync’ed gear pieces.
* For UCOB, the following Bonewicca ilvl345 gear pieces from Swallow’s Compass are slightly better than sync’ed gear pieces due to gains from melding:

  * Helm (note: you lose 80 crit here for a gain of 32 total secondary points, might not be worth it depending on stat tiering at level 70)
  * Gauntlets
  * Belt
  * Necklace
  * Ring

- - -

# Considerations for Selecting a Dance Partner

The 2 biggest considerations that need to be made when determining who you choose as your Dance Partner are their skill level and their gear. For example, you may have two players who have very similar skill levels at their respective jobs, but one player might have considerably better gear. The player with the better gear may be the better player to choose as your Dance Partner in this situation due to them being better able to maximize the DPS gain from having your buffs. Additionally, you may have 2 players with similar gear, but one performs exceptionally better at their job than the other. In order to determine who would be better to Dance Partner, the easiest thing would be to use ACT (damage parsing tool) to determine who is doing more damage.

Now assuming we’re in a skill and gear vacuum (i.e. everyone is BiS and is at the same skill level), there are 3 main considerations to think about when selecting a Dance Partner:

1. Amount of damage they do in total (affects how much DPS they gain from Standard Finish 5% damage up buff)
2. Amount of damage they do during Devilment Windows that can be buffed by crit/dh% rate (some abilities are already guaranteed to crit/dh so jobs with these kinds of abilities will not benefit as much from Devilment). Additionally, does this job gain anything from having higher crit/dh% rate (i.e. MNKs can gain extra Chakras due to Devilment increasing their crit% rate)
3. Amount of esprit they’ll likely generate for the DNC outside of Technical Finish windows resulting in potentially more Saber Dances over the fight

The first point is pretty straight forward, whoever does the most damage will gain the most from Standard Finish buff.

The second point is a little bit trickier figuring out since it’s not a direct damage % increase and instead a crit/dh hit rate % increase. The damage formulas can account for the crit rate and dh rate changes to calculate what is the expected damage % increase with the extra 20% crit/dh rate. At current SAM bis stat tiers (5.2), assuming no other raid buffs, Devilment will provide the SAM with a 15.7% expected damage increase (with more and more crit with future gear upgrades from future raid tiers, this will increase further due to the crit multiplier increasing with the crit hit stat). When stacking more raid buffs on top of this, the expected damage increase will go up considerably due to the multiplicative gains of stacking raid buffs. Therefore, it is very important that a job can do a high amount of damage during the 20 seconds Devilment is up.

For the third point, let’s look at how much esprit your dance partner generates for you. Although certain jobs execute more weaponskill or spell GCDs than others due to buffs that increase their speed, this generally isn’t as impactful on our personal DPS when compared to the amount of DPS our Dance Partner gains from having our Standard Finish damage% buff and Devilment crit/dh% buff. Part of this is because this independent esprit generation effect only matters for the parts of the fight outside of Technical Finish due to everyone contributing to your esprit during that buff window. These differences in esprit generation between potential dance partners can potentially mean getting 1-2 extra Saber Dances over the course of the fight. However, the personal DPS gain for the DNC from these extra Sabers Dances ends up being equal to AT MOST 5% of the DPS contribution you give to your Dance Partner from Standard Finish and Devilment. Therefore, consideration of Dance Partner’s esprit generation should only be used in Dance Partner selection if available Dance Partners are near equal in DPS gain they would get from your buffs.

## Dance Partner Priority List (assuming gear and skill vacuum)

1. SAM
2. MNK
3. NIN
4. BLM
5. SMN
6. DRG/RDM
7. MCH
8. BRD
9. DNC

### SAM

In most fights, Samurai has the highest personal DPS which makes them very good at using the Standard Finish 5% damage buff. Additionally, their burst every 2 minutes is strong and consistent, allowing them to be able to make good use of Devilment. It is also noteworthy that SAM’s DoT (Higanbana) snapshots the Devilment’s crit/dh buff for the full 1 minute duration of the DoT. Lastly, SAM’s GCD speed is rather quick allowing for decent esprit generation due to higher number of GCDs in a fight. All of these factors make Samurai our best option for a Dance Partner.

### MNK

Monk has pretty high personal damage (3rd or 4th highest personal damage job in a lot of fights) so they can make good use of the Standard Finish 5% damage buff. Devilment does not coincide well with MNK’s own buffs (Riddle of Fire and Brotherhood are 90s cooldowns), but Devilment will coincide with these buffs under most normal potion windows. There are some awkward interactions with Devilment and MNK’s Perfect Balance, where several of the GCDs MNK will be doing under Devilment are Bootshine which has a guaranteed chance to crit, making Devilment’s +crit% chance worthless for these GCDs. However, Devilment’s +crit% will also increase MNK’s chakra generation by about 1 additional chakra per cast of Devilment due to the MNK trait. This will allow for more Forbidden Chakra casts over the course of the fight. Lastly, MNK is the fastest job with a ~1.96s GCD. This means they are the job that can produce the most esprit overall.

### NIN

Ninja is one of the lower jobs when it comes to personal DPS (~10-15% less damage than Samurai), but it is one of the best jobs when it comes to burst 2 minute windows to make use of Devilment. Devilment lines up nicely with Trick Attack, Kassatsu Ninjutsu, Ten Chi Jin, Meisui, Mug, Dream Within a Dream, and the Ninjutsu and Ninki gauge oGCDs for Bhavacakra you have saved going into Devilment. One small note about Devilment is it does not boost the Crit/DH chance of Assassinate because this ability is guaranteed to Crit+DH. Although NIN has a decently fast GCD with Huton, Ninjutsus are abilities that are on the GCD but do not generate esprit. Ten Chi Jin occurs during Technical Finish (when everyone has the esprit generation buff), so consideration of TCJ being a factor in NIN’s esprit generation is irrelevant to the deciding whether to choose NIN as your Dance Partner. NIN still generates more esprit than your average job that has no speed enhancement of GCDs.

### BLM

Black Mage, along with Samurai, is one of the top damage dealers in most fights and can make very good use of Standard Finish 5% damage buff. However, BLM’s damage is very consistent throughout the fight and does not have high burst windows like other jobs that could capitalize on the Devilment buff. Additionally, the higher DPS gearset for BLM is a gearset that prioritizes spell speed, not crit. Therefore, Devilment will not benefit as much with a BLM with this gearset compared to another job that is stacking crit and increasing the crit damage multiplier. BLM does help the DNC generate esprit due to their fast GCDs with spell speed stacking and with Ley Lines granting them windows of very fast GCDs.

### SMN

Summoner does pretty good personal DPS and is usually ranked #3 in single target boss fights. SMN can line up their trance windows with Devilment, however, there are situations where it is better for SMN to rush their trances which may desync it from Devilment in some fights. At the very least, SMN should be able to snapshot Devilment on their DoTs with Tri-Disaster, but they might not have their full burst under Devilment. Their esprit generation is on the lower side due to wanting to stack Crit/DH/Det over spell speed and will likely stay between a 2.50 and 2.48 GCD. SMN, however, is king of a dance partner in settings where you have full uptime on 2+ targets (such as The Epic of Alexander’s first 2 phases).

### RDM/DRG

Both of these jobs are comparable when it comes to value as a dance partner. They both do similar personal damage (ranked average / slightly lower than average when comparing all DPS jobs). They both have decent burst in 2 minute windows to line up with Devilment. Both these jobs will generally stay closer to base 2.50 GCD so will have comparable esprit generation.

### MCH

Although MCH does decent personal DPS, it has awkward interactions when it comes to Devilment. Reassemble guarantees a crit+DH for a Drill or Air Anchor, so using Reassemble when Devilment is up makes Devilment have no value for that specific GCD. It is advised to do this Reassemble outside of Devilment. Additionally, Wildfire is guaranteed to never crit nor DH, therefore this ability also will not get any value from Devilment. Hypercharge is decent for esprit generation because it enables the MCH to perform 5 Heatblasts in the time they would normally use 3 GCDs.

### BRD

Bard is one of the lowest personal DPS jobs for overall damage. Additionally, their burst windows don’t sync well with Devilment. They get some extra GCDs than a typical ~2.50s GCD job would due to having faster speed during their Army’s Paeon to generate a little more esprit than some other jobs. Additionally, their songs (although oGCDs) technically have a chance to generate esprit because they are classified as “spells”.

### DNC

Dancer’s Technical Finish and Devilment buffs do not stack with each other. If you were to Dance Partner another DNC, you would have to coordinate with them to do your Devilment and Technical Finish at different times. Using either of these buffs when they are already active will override the crit/dh buff from Devilment and the damage% buff from Technical Finish.

## Dance Partner Swapping

*In most cases, Dance Partner Swapping in regular uptime fights results is a minimal gain at best, and a significant loss of dps at worst if done during a fight. There are phases of fights / mechanics in fights that enable better time for swapping partners where gains may me more noticeable. For the most part, Dance Partner Swapping should only be done in high end environments such as optimized speed kills.*

Dance Partner swapping is when you change your Dance Partner partway through a fight. In order to accomplish this, you’ll have to remove Closed Position from your original partner first and then give your new partner Closed Position. When you remove Closed Position, it will remove your Standard Finish buffs from your original partner (including esprit generation) and it will also remove the Devilment buff if it is currently running. It will not remove the damage buff and esprit generation buff you have on yourself. You cannot use or remove Closed Position while you are dancing. When Closed Position is active, the Closed Position hotkey will change to an action called “Ending” which triggers a 1 second cooldown for Closed Position when used. This action will remove the Closed Position buff from your partner and all of the buffs mentioned previously. Because of this 1 second cooldown, it is difficult to double weave Ending with initiating Closed Position on a new partner because this delays the animation of initiating the new Closed Position causing a clip to your GCD. Therefore, if swapping, the best practice would be to use Ending on a separate GCD from when you Closed Position your new partner.

While swapping partners, the best time would be 2 GCDs before you use Standard Step so that the Standard Finish buff can be applied to your new partner as soon as possible. What this would look like is:

![](https://cdn.discordapp.com/attachments/752334526449057853/897230212444594216/unknown.png)

When reapplying Closed position, you can use a macro that targets a specific party member and casts “Closed Position” on them. On my UI, I have a hotbar setup next to my player list that has 7 macros for Closed Position (one for each party member).

The macros have the text:

`/micon "Closed Position"`\
`/ac "Closed Position" <2>`

`/micon "Closed Position"`\
`/ac "Closed Position" <3>`  

`/micon "Closed Position"`\
`/ac "Closed Position" <4>`  

etc...

This will place Closed Position on the party member who is in that slot based on how you have your party list sorted. When using macros, there is an inherent delay that is caused by the macro in using the oGCD ability. Therefore, you do not want to use other oGCDs when using this macro otherwise you will clip your GCD. The alternative to using a macro would be to select the party member and manually use the Closed Position ability. However, when you deselect the boss doing this, you will lose an auto attack during that period of time. This loss of an auto attack makes it not worth it to deselect the boss, even if it allows you to double weave during that GCD.

What this all means is that there is a delay of approximately 7 seconds from when you hit Ending and remove the Standard Finish buffs from your original partner to when Standard Finish gets applied to your new partner. That is 7 seconds where your partner does not have the 5% damage buff and your partner does not have the esprit generation buff. If doing a planned Dance Partner swap, you should consider whether this loss of the damage buff and loss of the esprit buff for 7 seconds is worth giving a different party member the buff.

With the current balance of jobs in 5.2, I would only ever consider doing planned Dance Partner swaps if you have one DPS who does high overall damage but not great damage in Devilment window and another DPS who does great burst damage under Devilment but is low in overall damage while the 3rd DPS is mediocre in both. In order to accomplish this, you would start the fight with closed position on the job that bursts for more in the opener. Then, on the Standard Step that occurs after Devilment wears off, switch to the partner who does more overall damage but does not burst as well. On the Standard Step that happens before the next Devilment, switch back to the high bursting DPS. Overall, this would require swapping partners every minute on the Standard Steps before and after Devilment. However, this would mean you are losing the esprit generation for your partner for 7 seconds every minute and no DPS has the 5% damage up buff for 7 seconds every minute. You have to be certain that the DPS that is gained by having Devilment on the higher bursting job is worth the loss of the Standard Finish buff for this amount of time. In the current state of jobs in 5.2, the only party DPS composition I would consider doing this dance swap would be if the DPS jobs were DNC, NIN, BLM, and the 4th is either DRG, RDM, BRD, or MCH. In this case, I may consider partnering the NIN during Devilment while switching to the BLM in the off-Devilment windows. Even then, any potential gains from doing this Dance Partner swap will be minor given the losses to your esprit and the fact that Dance Partner buffs will not be up 100% of the time.

If your Dance Partner dies during a fight, it is very important to swap to a living partner as soon as you can, especially if Devilment is about to come up. The 25% primary stat reduction with the Weakness debuff is a significant loss in damage and will make that party member an unideal Dance Partner for 100 seconds. Once their Weakness debuff wears off, figure out an ideal time in your rotation to repartner them in order to be buffing the strongest partner possible.

- - -

# DNC Utility

Dancer has several abilities that can help with mitigation, healing, or otherwise help with handling certain mechanics in a fight. This section highlights how to best use some of these abilities:

## Shield Samba

Shield Samba is a 120 second cooldown ability that provides a 10% damage reduction buff to all party members within a 20y radius around the Dancer for 15 seconds. The best time to use this ability would be for raid wide AoE damage. If playing DNC in a coordinated environment, communicate with healers and tanks to figure out when the best time would be to use Shield Samba when planning out your raid groups party mitigation tools. Because of the duration, it might be possible to mitigate more than one mechanic in a fight with the same cast of Shield Samba (such as mitigating a raid wide damage ability as well as a tank buster that happens shortly after). Sometimes the timing is tight but doable where you use Shield Samba near the end of the cast of a Boss’ action to also hit a later mechanic.

This ability does not stack with BRD’s Troubadour or MCH’s Tactician (both of which have the same effects of 10% damage reduction for 15 seconds on a 120 second cooldown). However, one key thing to point out about Shield Samba is that it cannot be used while you are dancing. If you are trying to time Shield Samba at a precise time to cover a specific mechanic, it may be difficult to get the precise GCD for the cast you want if you are doing a dance during this time.

## Curing Waltz

Curing Waltz does a very small AoE heal on you and everyone in a 3y radius of you. Additionally, this AoE heal will be duplicated on whoever is your Dance Partner. If you stand directly on top of your Dance Partner when you use Curing Waltz, both you and your Dance Partner as well as anyone standing in that radius will be hit by 2 instances of the heal. At current BiS in patch 5.25, getting hit by both heals does somewhere between 17k and 18k altogether. This is effectively the same amount of healing done by a non-crit Indomitability from a SCH. Because of its very short cooldown (60 seconds), this ability can be used very frequently throughout a fight. It pairs well with topping the party off before or after raid wide damage occurs. However, if you are at a part of the fight where there is little raid wide damage, you can consider running on top of the tank (if it is safe to do so) and casting it on them to give them a very small, free spot heal. Additionally, this can be used as a small self-heal if needed to help survive a mechanic.

## Improvisation

In addition to generating esprit, Improvisation provides a 10% healing increase buff to party members in range. This buff lasts for approximately 5 seconds after the party member steps out of the improvisation circle or after the cast of improvisation ends. Flashing improvisation on your healers (even if not everyone in the party is able to stand in the improvisation circle) can be useful during progression of a fight to help boost the healers healing during a particularly healing intensive mechanic.

## Head Graze

Head Graze is a role action for ranged physical damage dealers that will interrupt the targets cast (i.e. “silence”). This ability is not always needed in Savage fights. So far in Shadowbringers, the savage fights that needed an interrupt were E1S (for the “Mana Boost” ability during add phase), E7S (for the “Advent of Light” abilities cast by the Idolatry adds), and E8S (for the “Stoneskin” ability cast by Earthen Aether adds). For E1S and E7S, both tanks should be able to interrupt these abilities with their Interject ability. However, for E8S, the tank on the West side of add phase will not be able to silence both Earthen Aether adds, which then requires a ranged physical damage dealer to be on that side as well in order to cover all of the silences needed for add phase. Head Graze has a 30 second cooldown. Since this is a role action, it can be used during a dance if need be.

## Arm’s Length

Although not a support ability, this role action prevents you from being knocked back for 6 seconds (120 second cooldown for the ability). There are some mechanics where this will not prevent the knockback effect, but it is useful for preventing knockbacks in a lot of situations. Since this is a role action, it can be used during a dance if need be.

## Second Wind

Second wind is a useful self heal oGCD that is on a 120 second cooldown. At current 5.2 BiS, it heals for about 14k non-crit (approximately 12% of your max hp). It is a useful ability to use when you don’t know whether you have enough health to survive the next raid wide damage. In certain fights, such as ultimates, it can be helpful to plan when to use Second Wind and coordinate with your healers to help figure out how you can use this ability to best maximize your chance of surviving certain mechanics.

## Peloton

Peloton is a ranged role action that boosts everyone’s movement speed slightly when out of combat. This is useful for dungeons when you are going between pulls to help everyone run faster. The movement speed boost from Peloton does not stack with Sprint (Sprint’s movement speed boost will take priority since it is a faster movement speed buff). Additionally, if used in combat, it will have no effect on boosting anyone’s movement speed since the buff automatically disappears if you are in combat. This can be used pre-pull in a raid fight to help the party run to the boss faster right as the countdown hits zero. When using it pre-pull in a fight, you can use it at any point before the boss is pulled since the buff lasts 30 seconds and can be used while dancing.

## En Avant

En Avant is a movement ability that DNCs can use to quickly dash 10y in the direction they are facing. It can be useful for quickly dodging AoEs, or just in general to help with movement while handling a mechanic. En Avant is on a charge system where you can have a maximum of 3 charges of the ability. As long as you have charges, you can use this ability. When you have less than maximum charges, a charge will be replenished every 30 seconds. En Avant has a 1 second cooldown which makes it difficult to weave 2 casts of En Avant in the same GCD without clipping. En Avant can be used while dancing if need be.

- - -

# Common Abbreviations

AoE - short for area of effect\
BiS - short for best in slot\
BS - short for Bloodshower\
Det - short for Determination, secondary stat\
DEX - short for dexterity, DNC’s primary damage stat\
DH - short for Direct Hit, secondary stat\
DM - short for Devilment\
DNC - short for Dancer\
DPS - short for damage per second\
GCD - short for global cooldown\
FD1 - short for Fan Dance\
FD2 - short for Fan Dance II\
FD3 - short for Fan Dance III\
FF - short for Fountainfall\
oGCD - short for off global cooldown\
RC - short for Reverse Cascade
RW - short for Rising Windmill\
SF - short for Standard Finish, the ending move of the Standard Step dance sequence\
SkS - short for skill speed, secondary stat\
SS - short for Standard Step\
TF - short for Technical Finish, the ending move of the Technical Step dance sequence\
TS - short for Technical Step\
WD - short for weapon damage, stat on your main hand weapon  

# Glossary of Terms

## Clipping

the act of delaying a GCD due to the timing of the usage of an oGCD or the number of oGCDs used in between GCDs, can cause significant losses in DPS if many clips occur in a fight

## Closed Position

an ability that can be used on a target party member that grants them the Dance Partner party effect

## Dance Partner

the effect granted by Closed Position. Enables the targeted player to also benefit from the effects of Standard Finish, Devilment, and Curing Waltz

## GCD

short for global cooldown, most weaponskills and spells in FFXIV are on a base global cooldown timer of 2.5 seconds (meaning once you activate that weaponskill or spell, you cannot execute another one for 2.5 seconds). The base GCD is different for some skills. Most skills and spells’ GCD can be lowered by acquiring skillspeed/spellspeed on your gear.

## oGCD

short for off global cooldown, these are abilities that are not on the global cooldown and instead have an independent cooldown. They do not trigger the global cooldown and under 
most circumstances can be used inbetween GCDs (this is known as weaving)

## Proc

refers to a GCD or oGCD that has a % chance to be usable based off a separate action that generates this effect. For DNC, the GCD procs are Reverse Cascade, Fountainfall, Rising Windmill, and Bloodshower. The oGCD proc from Fan Dance is called Fan Dance III.

## Weaving

using oGCD abilities in between GCDs (using 1 oGCD between GCDs = Single Weaving, using 2 oGCD between GCDs = Double Weaving)

- - -

# About the Author

Hello there! My name is Ringabel Dim of Excalibur. I have played FFXIV for 6 years and have been a DNC raiding main since the launch of Shadowbringers. I have done raid progression and fight specific optimizations on DNC for both Savage raid tiers (Eden’s Gate and Eden’s Verse) and The Epic of Alexander with my raid group on the Primal data center (“Monkeys with Typewriters”). I have recently become a DNC mentor on [The Balance - Discord server](https://discord.gg/CjQkEn3), which is a good source of information pertaining to FFXIV and raiding. If you have any questions regarding DNC, there is a #dnc_questions channel there which is a great place to ask anything with regards to DNC!

# Special Thanks

* Rah (DNC Mentor on The Balance)
* Io (DNC Mentor on The Balance)
* Resilla and Yumiya (Helpful DNCs on The Balance who helped look over this guide for errors)
* Ellunavi (Moderator on The Balance, and contributed much to DNC resources including his analysis and simulation tool)
* Allagan Studies
* Alevia Rohan for helping me host this guide on SaltedXIV
* My static, “Monkeys with Typewriters”, for letting me put up the axe and become a DNC main =)

# Changelog

* July 19, 2020

  * Guide completed and published
* August 10, 2020

  * Updated gearing section with link to new gearing guide for 5.3.
  * Updated Dance Partner Priority list (changed 4. BLM + SMN to 4. BLM, 5. SMN in response to 5.3 SMN nerf)
* August 12, 2020

  * Updated TEA BiS using new dungeon items from 5.3.