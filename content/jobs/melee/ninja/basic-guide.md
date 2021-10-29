---
authors:
  - Balance NIN Staff
patch: "5.58"
lastmod: 2021-10-29T03:08:20.127Z
changelog:
  - date: 2021-10-29T03:08:27.069Z
    message: Created page
---
* [Introduction to Ninja](#introduction-to-ninja)
* [What is Ninja?](#what-is-ninja)
* [Skills and Abilities](#skills-and-abilities)

  * [Weaponskills (Commonly referred to as GCDs)](#weaponskills-commonly-referred-to-as-gcds)
  * [Ninjutsus/Mudras](#ninjutsusmudras)
  * [Regular Abilities(oGCDs)](#regular-abilitiesogcds)
  * [Ninki](#ninki)
  * [Utility Abilities](#utility-abilities)
  * [Traits](#traits)
* [Rotation](#rotation)

  * [Base Combo](#base-combo)
  * [Ninki Usage](#ninki-usage)
  * [Ninjutsu Usage](#ninjutsu-usage)
  * [oGCD Usage](#ogcd-usage)
  * [Trick Attack Rotation](#trick-attack-rotation)
  * [Ten Chi Jin (TCJ) Usage](#ten-chi-jin-tcj-usage)
  * [Multi-Target Rotation](#multi-target-rotation)
* [Best-In-Slot (BiS)](#best-in-slot-bis)
* [Optimization](#optimization)

  * [Optimizing Around Kill Times](#optimizing-around-kill-times)
  * [Optimizing Around Downtime](#optimizing-around-downtime)
  * [Niche Optimizations](#niche-optimizations)
* [Thanks](#thanks)

  * [Contacting Me](#contacting-me)

# Introduction to Ninja

Hello, and welcome to my guide on Final Fantasy XIV’s melee DPS job, Ninja, current for patch 5.55. This guide will aim to help you learn the job at a beginner level, as well as give you the tools and information needed to push the job to its limits in terms of damage and utility, and in turn bring the most to a raid group or dungeon group that you can.

A little about me before we begin. I have been maining Ninja since just before patch 3.2. I started getting into speedruns on Ninja during the Creator Savage tier for Alexander during patch 3.4. Ever since then, I have been part of multiple different groups, both for speed killing and for world progression. I have gotten multiple rank 1 parses and speed kills with this job throughout the different tiers and have killed all the Ultimates within the patch that they were introduced in. I have also helped theorycraft and construct the rotations and openers for Stormblood Ninja, pre-5.1 Shadowbringers Ninja, and also the current post-5.1 Shadowbringers Ninja.

# What is Ninja?

Ninja is one of four melee DPS in FFXIV. It is focused around super high burst windows once per minute, with very little in-between these burst windows. As a matter of fact, about 40% of our damage is inside this 15 second burst window. We have a very flexible rotation outside of this window, mostly built around preparing for the next burst window. We are also one of the jobs with the biggest reliance on our team because of our high raid damage buff. Our burst AoE damage is one of the best in the game as well, though we tend to fall off quickly if the AoE portion starts getting extended past our cooldowns. We are also the most mobile of the melees. For a long time we were a guaranteed pick for any high end speedkill or progression setting, though nowadays our speedkill value has been diminished a bit, but we are still brought when fights and/or compositions favor us. We are still one of the best choices for a melee job for progression because of our high flexibility in both movement and rotation, as well as a pretty simple rotation and easy optimizations.

# Skills and Abilities

![Banner2](/img/jobs/melee/ninja/Banner2.png)

## Weaponskills (Commonly referred to as GCDs)

![SpinningEdge](/img/jobs/melee/ninja/Spinning_Edge.png)
**Spinning Edge**

Delivers an attack with a potency of 230. Grants five Ninki. This is the first part of our basic combo. 

![GustSlash](/img/jobs/melee/ninja/Gust_Slash.png)
**Gust Slash**

Delivers an attack with a potency of 100. If used after Spinning Edge in the combo, it will instead deliver an attack with a potency of 340. Grants five Ninki if used in combo. This is the second part of our basic combo.

![AeolianEdge](/img/jobs/melee/ninja/Aeolian_Edge.png)
**Aeolian Edge**

Delivers an attack with a potency of 100, 160 potency if done from the rear of the enemy. If this is used after Gust Slash as the third part of our combo, it will instead deliver an attack with a potency of 420, 480 if done from the rear of the enemy. Grants ten Ninki if used in combo. This is one of two options for the third part of our basic combo

![ArmorCrush](/img/jobs/melee/ninja/Armor_Crush.png)
**Armor Crush**

Delivers an attack with a potency of 100, 160 if done from the flank of the enemy. If this is used after Gust Slash as the third part of the combo, it will instead deliver an attack with a potency of 400, 460 if done from the flank of the enemy. If done as part of the combo, it will also add 30 seconds to your Huton timer, assuming your Huton timer is already going, to a maximum of 70 seconds. Grants 10 Ninki if used in combo.This is one of two options for the third part of our basic combo.

![ShadowFang](/img/jobs/melee/ninja/Shadow_Fang.png)
**Shadow Fang**

Delivers an attack with a potency of 200. In addition, this will also put a damage over time effect (DoT) that lasts 30 seconds and deals a potency of 90 every tick, resulting in this ability having a total potency of 1100 when all of the DoT ticks are accounted for. Unlike other GCDs for ninja, this GCD has an extra personal cooldown of 70 seconds, though this is reduced by skill speed and Huton, which will make it have just under a 60 second cooldown once you have Huton up. Grants ten Ninki.

![ThrowingDagger](/img/jobs/melee/ninja/Throwing_Dagger.png)
**Throwing Dagger**

Delivers a ranged attack with a potency of 120. The range for this GCD is 15 yalms. Grants five Ninki.

![DeathBlossom](/img/jobs/melee/ninja/Death_Blossom.png)
**Death Blossom**

Delivers an attack with a potency of 120 to all nearby enemies. This is an Area of Effect(AoE) ability and deals damage in a five yalm radius around you. This is the first part of our AoE combo. Grants five Ninki.

![HakkeMujinsatsu](/img/jobs/melee/ninja/Hakke_Mujinsatsu.png)
**Hakke Mujinsatsu**

Delivers an attack with a potency of 100 to all nearby enemies. If done as the second part of our AoE combo, it instead delivers an attack with a potency of 140 to all nearby enemies, as well as add ten seconds to your Huton timer assuming your Huton timer is already going. Just like Death Blossom, this is an AoE attack that deals damage in a five yalm radius around you. Grants five Ninki if used in combo.

## Ninjutsus/Mudras

Ninjutsus set off a global cooldown of 1.5 seconds upon use, not reducible by Huton or skill speed, and each use of a ninjutsu will use up one mudra charge. Mudras have a shared 2 charges, which are used by using a ninjutsu, a charge time of 20 seconds per charge, and can only be started when a normal GCD could be started. Instead of a 2.5 or 1.5 second global cooldown, the mudras themselves only give a .5 second global cooldown. 

![Ten](/img/jobs/melee/ninja/Ten.png)
**Ten**

Make the ritual mudra hand gesture for “Heaven”.

![Chi](/img/jobs/melee/ninja/Chi.png)
**Chi**

Make the ritual mudra hand gesture for “Earth”.

![Jin](/img/jobs/melee/ninja/Jin.png)
**Jin**

Make the ritual mudra hand gesture for “Man”.

![FumaShuriken](/img/jobs/melee/ninja/Fuma_Shuriken.png)
**Fuma Shuriken**

Delivers a ranged ninjutsu attack with a potency of 500. This is achieved with any single mudra use. Has a range of 25 yalms.

![Raiton](/img/jobs/melee/ninja/Raiton.png)
**Raiton**

Deals lightning damage with a potency of 800. This is achieved by any two-mudra combination that ends with Chi. So, Ten>Chi or Jin>Chi. Has a range of 15 yalms.

![Katon](/img/jobs/melee/ninja/Katon.png)
**Katon**

Deals fire damage with a potency of 500 to target all enemies nearby it. This does damage to all targets in a five yalm radius around the target. This is achieved by any two-mudra combination that ends with Ten. So, Chi>Ten or Jin>Ten. Has a range of 15 yalms. 

![Hyoton](/img/jobs/melee/ninja/Hyoton.png)
**Hyoton**

Deals ice damage with a potency of 400. This also puts a bind on the target for 15s. This is achieved with any two-mudra combination that ends with Jin. So, Ten>Jin or Chi>Jin. Has a range of 25 yalms.

![Huton](/img/jobs/melee/ninja/Huton.png)
**Huton**

Reduces weaponskill recast time and auto-attack delay by 15%. Starts with a duration of 70 seconds which can be added onto in increments from Armor Crush and Hakke Mujinsatsu back to the maximum of 70 seconds. This is achieved by any three-mudra combination ending in Ten. So Jin>Chi>Ten or Chi>Jin>Ten. Buff is only applied to yourself.

![Doton](/img/jobs/melee/ninja/Doton.png)
**Doton**

Creates a patch of corrupted earth that acts like a stationary DoT that does 100 potency to those who are in it when it ticks for damage and 100 potency to anyone in the AoE as it is created. Also applies a 40% heavy on enemies in this AoE. This lasts for 24 seconds, resulting in 800 potency over all the ticks, to a combined potency of 900 altogether. This is achieved by any three-mudra combination ending in Chi. So, Ten>Jin>Chi or Jin>Ten>Chi. The AoE has a radius of five yalms.

![Suiton](/img/jobs/melee/ninja/Suiton.png)
**Suiton**

Deals water damage with a potency of 600. In addition this grants the effect of Suiton, for 20 seconds, which allows you to use any ability previously only usable under Hidden, like Trick Attack. This is achieved by any three-mudra combination that ends with Jin. So Ten>Chi>Jin or Chi>Ten>Jin. Has a range of 15 yalms. 

![GokaMekkyaku](/img/jobs/melee/ninja/Goka_Mekkyaku.png)
**Goka Mekkyaku**

Deals fire damage with a potency of 750 to target and any other enemies nearby the target. This does damage to all targets in a five yalm radius around the target. This is achieved by any two-mudra combination that ends with Ten. So, Chi>Ten or Jin>Ten. Has a range of 15 yalms. In addition, this is only usable under the effects of Kassatsu and is a replacement for Katon when under the effects of Kassatsu. Because of the boost from Kassatsu, the true potency is 975.

![HyoshoRanryu](/img/jobs/melee/ninja/Hyosho_Ranryu.png)
**Hyosho Ranryu**

Deals ice damage with a potency of 1200. This is achieved with any two-mudra combination that ends with Jin. So, Ten>Jin or Chi>Jin. Has a range of 25 yalms. In addition, this is only usable under the effects of Kassatsu and is a replacement for Hyoton when under the effects of Kassatsu. Because of the boost from Kassatsu, the true potency is 1560.

## Regular Abilities(oGCDs)

These are your regular abilities that can be used at any time when you are not in an animation lock, even while the global cooldown from a GCD is ongoing.

![Mug](/img/jobs/melee/ninja/Mug.png)
**Mug**

Delivers an attack with a potency of 150. Grants 40 Ninki gauge on use. Also increases the chance of additional items being dropped by target if mug is dealt before, or as, the finishing blow. This extra thing is mostly irrelevant since it only works on basic drops that you don't end up caring about, like Bat Fangs. This skill has a personal cooldown of 120 seconds. 

![TrickAttack](/img/jobs/melee/ninja/Trick_Attack.png)
**Trick Attack**

Delivers an attack with a potency of 350, 500 if done from the rear of the target enemy. In addition, it debuffs the enemy for 15s with a vulnerability up, increasing the enemy’s damage taken by 5% during this time. This can only be used under the effect Hidden. (See Suiton for how to use this in combat) This ability has a personal cooldown of 60 seconds.

![Kassatsu](/img/jobs/melee/ninja/Kassatsu.png)
**Kassatsu**

Allows the use of a single ninjutsu without consuming a mudra charge. In addition, it increases the damage of the ninjutsu used during this buff by 30%. This buff allows you to use Hyosho Ranryu and Goka Mekkyaku. The damage buff does also apply to Goka Mekkyaku and Hyosho Ranryu. This buff has a duration of 15 seconds and is lost upon the use of the next ninjutsu or the timer running out. This ability has a personal cooldown of 60 seconds. 

![DreamWithinADream](/img/jobs/melee/ninja/Dream_Within_A_Dream.png)
**Dream Within A Dream**

Delivers a three-hit attack, with each attack hitting for 200 potency for a total of 600 potency. Using this grants you the buff Assassinate Ready for 15 seconds, allowing you to use Assassinate. This ability has a personal cooldown of 60 seconds.

![Assassinate](/img/jobs/melee/ninja/Assassinate.png)
**Assassinate**

Delivers an attack with a potency of 200 that is guaranteed to be a critical direct hit. This can only be used under the buff Assassinate Ready (see: Dream Within a Dream). Using this ability will consume the buff Assassinate Ready. 

![TenChiJin](/img/jobs/melee/ninja/Ten_Chi_Jin.png)
**Ten Chi Jin (TCJ)**

Temporarily converts each of the three mudra into a ninjutsu action. Executing one of these actions will convert the remaining mudra into different ninjutsu actions until all three have been executed or the Ten Chi Jin effect expires. You can only use ninjutsu during this, and the same ninjutsu cannot be executed twice. This ability cannot be activated while under the effects of Kassatsu. This effect ends upon moving. This effect has a duration of 6 seconds. In essence, this allows you to use one one-step ninjutsu, one two-step ninjutsu, and one three-step ninjutsu in a row. Common uses are Fuma>Raiton>Suiton, Fuma>Katon>Doton, and Fuma>Katon>Suiton. This ability has a personal cooldown of 120 seconds.

![Meisui](/img/jobs/melee/ninja/Meisui.png)
**Meisui**

Dispels the Suiton buff, and in return increases the Ninki gauge by 50. This ability can only be used while in combat. This ability has a personal cooldown of 120 seconds.

## Ninki

Ninki abilities are like normal oGCDs except for the fact that they require 50 Ninki to use. You can store up to 100 Ninki at once.

![HellfrogMedium](/img/jobs/melee/ninja/Hellfrog_Medium.png)
**Hellfrog Medium**

Deals fire damage with a potency of 200 to target and any other enemies near the target. Costs 50 Ninki to use. This ability has a range of 25 yalms and does damage in a radius of five yalms around the target.

![Bhavacakra](/img/jobs/melee/ninja/Bhavacakra.png)
**Bhavacakra**

Deals unaspected damage with a potency of 300. Costs 50 Ninki to use. 

![Bunshin](/img/jobs/melee/ninja/Bunshin.png)
**Bunshin**

Grants five stacks of the buff Bunshin, each stack allowing your shadow to attack enemies each time you execute a weaponskill. Shadow attack potency varies based on the attack executed, but is not affected by combo bonuses. Each attack from the shadow will grant you five Ninki, for a total of 25 ninki if all five stacks of Bunshin are used before the time limit. This buff has a duration of 30 seconds. Costs 50 ninki to use. This ability has a personal cooldown of 90 seconds.

Melee attack: 200 potency.
Ranged attack: 100 potency.
AoE attack: 100 potency to all enemies hit.

## Utility Abilities

These are oGCDs that don’t deal damage so aren’t necessarily used on cooldown, but are more used when they are specifically needed.

![ShadeShift](/img/jobs/melee/ninja/Shade_Shift.png)
**Shade Shift**

Gives yourself a shield equal to 20% of your maximum hp. This shield lasts 20 seconds, or until it is destroyed. This ability has a personal cooldown of 120 seconds.

![Hide](/img/jobs/melee/ninja/Hide.png)
**Hide**

Blend in with your surroundings, making it impossible for most enemies to detect you, but reducing movement speed by 50%. Has no effect on enemies ten levels higher than you, or certain enemies with special sight. Grants the buff Hidden. This cannot be executed in combat, and you will lose the Hidden buff and be taken out of Hide if you enter combat. This effect also ends upon the use of any action except for Sprint, or upon the reuse of Hide. In addition, the use of this ability will restore two charges of your mudras. 

![Shukuchi](/img/jobs/melee/ninja/Shukuchi.png)
**Shukuchi**

Moves you quickly to a target location chosen by you. Has two charges. Has a charge time of 60 seconds per charge, but a charge is also granted by the use of a two-mudra ninjutsu usage. Has a range of 20 yalms.

![SecondWind](/img/jobs/melee/ninja/Second_Wind.png)
**Second Wind**

Instantly restores own HP. Has a cure potency of 500. Has a personal cooldown of 120 seconds.

![LegSweep](/img/jobs/melee/ninja/Leg_Sweep.png)
**Leg Sweep**

Stuns target for three seconds. Has a personal cooldown of 40 seconds.

![Bloodbath](/img/jobs/melee/ninja/Bloodbath.png)
**Bloodbath**

Converts a portion of physical damage dealt into health. Has a duration of 20 seconds. Has a personal cooldown of 90 seconds.

![Feint](/img/jobs/melee/ninja/Feint.png)
**Feint**

Lowers target’s strength and dexterity by 10%. Has a duration of ten seconds. Has a personal cooldown of 90 seconds.

![ArmsLength](/img/jobs/melee/ninja/Arms_Length.png)
**Arm's Length**

Creates a barrier nullifying most knockback and draw-in effects. Has a duration of six seconds. Applies a 20% slow for 15 seconds on any target that hits you during this six second duration. Has a personal cooldown of 120 seconds. 

![TrueNorth](/img/jobs/melee/ninja/True_North.png)
**True North**

Nullifies all action direction requirements. This means that attacks like Aeolian Edge, Armor Crush, and Trick Attack will do the full potency no matter where you attack the enemy from. This buff lasts for ten seconds and has two charges. The charges have a charge time of 45 seconds. 

## Traits

These are all passives.

![AllFours](/img/jobs/melee/ninja/All_Fours.png)
**All Fours**

Reduces damage taken when falling.

![FleetOfFoot](/img/jobs/melee/ninja/Fleet_Of_Foot.png)
**Fleet of Foot**

Increases movement speed.

![Shukiho](/img/jobs/melee/ninja/Shukiho.png)
**Shukiho**

Increases Ninki gauge by five upon successfully landing certain weaponskills and combos. 

![EnhancedShukuchi](/img/jobs/melee/ninja/Enhanced_Shukuchi.png)
**Enhanced Shukuchi**

Resets the recast timer on Shukuchi when executing a two-mudra ninjutsu on most targets.

![EnhancedMug](/img/jobs/melee/ninja/Enhanced_Mug.png)
**Enhanced Mug**

Increases Ninki gauge by 40 when successfully landing Mug.

![EnhancedShukuchi2](/img/jobs/melee/ninja/Enhanced_Shukuchi2.png)
**Enhanced Shukuchi II**

Allows the accumulation of charges for Shukuchi to allow for multiple consecutive shukuchis. 

![EnhancedKassatsu](/img/jobs/melee/ninja/Enhanced_Kassatsu.png)
**Enhanced Kassatsu**

Upgrades Katon and Hyoton to Goka Mekkyaku and Hyosho Ranryu respectively while under the effects of Kassatsu.

![Shukiho2](/img/jobs/melee/ninja/Shukiho2.png)
**Shukiho II**

Increases Ninki gauge by ten upon successfully landing Shadow Fang or completing a combo with Aeolian Edge or Armor Crush.

![Banner3](/img/jobs/melee/ninja/Banner3.png)

# Rotation

(This is only about the basics. I will talk about the niche scenarios and how to optimize the rotation later in another section.)

The single biggest thing is that you always want to make sure you are using your GCDs. Your oGCDs can be used in-between your GCDs so you want to make sure that your GCDs are being used as soon as possible, since they are limited in when they can be used, whereas oGCDs aren't. This concept is the base foundation of pretty much all rotations in this game, barring very certain scenarios that are all high-end optimization. 

## Base Combo

At the base level, our rotation is really simple. Our first priority is making sure we always have Huton up and running. This means that at any point while Huton has less than 40 seconds left, we need to make sure we use Armor Crush to make sure it doesn't fall to zero, because this would require us to use one of our Mudra charges to cast Huton instead of a different ninjutsu, which is automatically 800+ potency lost. 

While learning and before you get really comfortable, I would recommend playing safer and using Armor Crush at a higher amount of time left, but once more comfortable, you want to start optimizing around Armor Crush being used outside of raid buffs, since Aeolian Edge has more potency, and in turn benefits more from raid buffs. As for Shadow Fang, it will be used as one of first things, if not the very first thing you do inside every single Trick Attack. This should be your regular priority outside of your trick attack windows:

1. Keep up Huton, which means use Armor Crush at some point after Huton falls below 40 seconds but before it falls below one second.
2. Aeolian Edge. 

## Ninki Usage

Ninki usage is very simple. Since all of the Ninki abilities can only be used at 50 Ninki gauge, they are direct comparisons. Assuming you are only going for single target damage, Bunshin will do 1000 potency, Bhavacakra will do 300 potency, and Hellfrog Medium will do 200 potency. By far, Bunshin is your strongest one, so you always want to use that one on cooldown, even if it puts it out of raid buffs. Then, when you get to have enough Ninki for another use of a Ninki ability, you have to decide between Bhavacakra and Hellfrog Medium. Luckily, it's as simple as if you’re hitting one target only, do Bhavacakra. If you are hitting two or more targets, hit Hellfrog Medium. You generally want to save your Bhavacakras and such to be inside Trick attack buff, but you gain too much Ninki to only do that, so sometimes your Ninki abilities will be outside of Trick Attack, but save it when you can. 

## Ninjutsu Usage

In a straight dummy fight, ninjutsu is really easy to use. In almost every case, the way to use it is to use Suiton within 20 seconds of Trick Attack coming off cooldown, and then using your other two Mudra charges that you get in-between your Trick Attack coming off cooldown, inside Trick Attack as Raitons. The reason for this is that your Raiton is 800 potency, the highest single damage skill you have outside of Hyosho Ranryu and Shadow Fang, both of which also have a 60 second cooldown like Trick Attack, so they are automatically lined up anyways. And the Hyosho Ranryu from your Kassatsu is also almost always inside Trick Attack. 

## oGCD Usage

Every single one of your damage oGCDs have a cooldown that is a multiple of 60 seconds, except Bunshin. Bunshin, like mentioned in the Ninki usage section, is going to be used on cooldown always. Mug, because it does very little damage itself, is generally used before a trick attack window, so that you have more Ninki going into it, resulting in more Ninki ability usages inside Trick Attack. The rest of them will always be used on cooldown from when you use them in the opener, resulting in them always being inside Trick Attack naturally because of the aligning cooldown timings.

## Trick Attack Rotation

This is the biggest hurdle to learning Ninja. In a single target dummy fight, this part of your rotation itself will be about 40% of your damage, if not more, even though it's only up 25% of the fight. Your Trick Attacks will be very similar every time with minor variations in where you are in your combo at the time. Because Trick Attack makes the boss take 5% more damage for 15 seconds, we stuff all of our biggest damage tools into this window. This means we put in two Raitons, Dream Within a Dream, Assassinate, at least one Bhavacakra but preferably more, Shadow Fang, and Hyosho Ranryu every single time when possible. The only variation is that every other T rick we won't have TCJ and Meisui like we do in the other ones. All this really changes is that we take out some regular GCDs to put those into Trick. If you do the opener correctly, and then use things on cooldown from there, your Trick Attacks will mostly be done for you. Just remember that if something isn't up, use your GCD. 

## Ten Chi Jin (TCJ) Usage

There are currently two pretty commonly used TCJ variations and one relatively rare TCJ variation that we use at the high end. The two common ones are Fuma>Raiton>Suiton (TCJ Suiton) and Fuma>Katon>Doton (TCJ Doton). They are basically the highest single target damage variation and the highest AoE damage variation. TCJ Suiton is the highest single target with TCJ Doton being the highest AoE. TCJ will always be used inside of Trick Attack because of its high natural potency and need to use Suiton inside of trick for Meisui. 

* TCJ Suiton: Fuma (500)+Raiton (800)+Suiton (600)+Bhava (300) = 2200 potency
* TCJ Doton: Fuma (500)+Katon (500)+Doton (900) = 1900 potency single target, 3300 potency two target. 

The only other variation that is seen sometimes is Fuma>Katon>Suiton. This is mostly used if the two targets will die very soon so Doton doesn't get full ticks, or if the bosses will be moving out of the Doton. 

## Multi-Target Rotation

Ninja has different priorities in terms of what abilities to use at one target, two targets, and 3+ targets. For one target, it's all the stuff I have already talked about, but it changes slightly for two targets. 

At two targets, you will start to do Hellfrogs instead of Bhavacakras and will do Katons and Dotons instead of Raitons. Your basic GCD rotation will not change -- just that your abilities will be switched to AoE abilities. You will still do Trick Attack at this amount of targets, so Suiton is still used for this. 

At three targets, this is when you start to do your AoE combo. This would be Death Blossom into Hakke Mujinsatsu. So, three targets is where you consistently do your AoE combo, as well as go full out AoE on your ninjutsus. 

![Banner4](/img/jobs/melee/ninja/Banner4.png)

![Opener](/img/jobs/melee/ninja/Opener.png)

oGCDs in Parentheses 
-11s: Huton 
-7s: Doton at max aggro range (Hide) 
-1s: Suiton (Kassatsu) Spinning Edge (Potion) → Gust Slash (Mug + Bunshin) → Aeolian Edge → Spinning Edge (Trick Attack) → Shadow Fang (Dream Within a Dream) → Hyosho Ranryu (Assassinate) → Raiton (TCJ) → Fuma Shuriken \[Ten] → Raiton \[Chi] → Suiton \[Jin] (Meisui) → Gust Slash (Bhavacakra) → Aeolian Edge (Bhavacakra) | Trick Attack ends | → Raiton

This will be your opener on any fights where you get a pull countdown. The Doton will only do damage if the tank pulls the boss into your Doton, but if he doesn't, it's not a big deal, just do the rest as shown. This will both set up the rest of the fight for you in terms of cooldowns and give you the biggest amount of damage you can inside raid buffs. There are of course variations for some specific fights, but it's all based on this same opener and are minor differences that I would only worry about once you know the job/fight well. 

# Best-in-Slot (BiS)

For your Best-in-Slot gear, you will generally be going for Weapon Damage> Dexterity> Crit> Direct Hit> Determination >> Skill Speed. This is not 100% exact once you get to the max gear, but until you have that, that is the priority in stats. 

## 2.12 GCD BiS

![2.12 GCD BiS](https://i.gyazo.com/1cb336372acce657393786ccad4a7596.png)
<https://etro.gg/gearset/dec9811d-c02c-4378-b046-d3cebe42eccb>

## 2.11 GCD BiS

![2.11 GCD BiS](https://i.gyazo.com/d353943f5d3d61160b11739b6868e3a6.png)

<https://etro.gg/gearset/33b9d186-963a-4cdb-84a0-6b2ebbadc652>

## 2.10 GCD BiS

![2.12 GCD BiS](https://cdn.discordapp.com/attachments/277968373336244234/870902464302420008/unknown.png)

<https://etro.gg/gearset/c1c01cbb-f99b-4ba8-bbe3-e9d03a76b280>

Use the 2.12 GCD BiS for general play, the 2.11 plays around potential extra gcds and is more consistent at doing triple bhavas in tricks, which still wouldn't be in every fight, and also requires a lot better ping to make work. Use 2.10 BiS if neither of the other 2 will get you the gcd in a fight you are looking for.

Meld priority for non BIS pieces: Crit>>>>DH>DET>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SKS

## UCOB BIS

<https://etro.gg/gearset/a6f033eb-2d74-4a2a-bd08-f7823d415fc3>

## UWU BIS (Credit to Io)

<https://etro.gg/gearset/74be6ffe-4d39-4513-96fb-be800c372592>

Can use other pieces; needs the following all above ilvl 470:

* Relic weapon: CRT 318/DH 318/DET 314/SKS 217 
* Body/pants: 2x CRT/DET
* Helmet/gloves/boots: 2x CRT/DH, 1x CRT/DET
* Accessories: 3x CRT/DET, 3x CRT/DH
* Food: Smoked chicken HQ

## The Epic of Alexander Best In Slot

<https://etro.gg/gearset/a25fcb8e-7f1a-432f-a627-bbf6eabfe77c>

<!-- TODO: link proper image later, so its not discord hosted -->

![Banner5](https://cdn.discordapp.com/attachments/458951851610734595/883853789474467873/unknown.png)

# Optimization

Alright, now that you have a good idea of the basics of the job, how do you optimize? Well, the first thing is always making sure that you are doing all the things up above. This means getting everything you can inside Tricks, not losing GCDs to avoidable downtime or hesitation from not knowing what to do, aligning buffs with other players’ buffs when possible, and finding when there is unavoidable downtime and using your utility to minimize these things. Some of these things will be Ninja-specific, while others won't be.

## Optimizing Around Kill Times

The quickest and probably easiest optimizations come from understanding your kill times. Knowing a rough kill time lets you know how many of each of your cooldowns you can use in the fight, and therefore optimize around putting them in the right place. For example, in a fight that you are expecting to kill around eight minutes, you know you only get eight uses of your 60 second cooldowns, six uses of your 90 second cooldowns, and realistically only four uses of your 120 second cooldowns. Whereas in a kill time of around nine minutes, we instead get nine uses of your 60 second cooldowns, six realistic uses of 90 second cooldowns, and five uses of 120 second cooldowns. 

Because of the kill time, you can move these around to align with other players’ buffs more as long as you don't start to lose usages. You could for example move two of your 90 second cooldown uses that would otherwise not be inside Trick Attack to be inside of Trick Attack, preferably when two minute cooldowns and any potential three minute cooldowns are also there, since buffs stack multiplicatively. As always, talk to your party members and try to figure out what would be the best way to do this for the fight and for the party, since different compositions and fights gain more from different variations of this. 

## Optimizing Around Downtime

As a Ninja, you are the melee job with the most flexibility in terms of playing around downtime, at least when the boss is still targetable but you can’t be in melee range for whatever reason. You have the best ranged options because of Ninjutsus, and the most flexibility with movement because of increased movement speed and Shukuchi. When you need to move out for a longer time than your GCD, you should, instead of putting them into Trick attacks, use your Raitons during this time and get more regular GCDs inside of Trick Attack. 

This is done because you will be using Throwing Daggers otherwise from range, which is a 120 potency attack. So, you move Raiton out of Tricks, which makes that Raiton do 40 less potency. We then gain a regular GCD instead of a Throwing Dagger to fill the void of the Raiton. Any regular single target GCD is at least 220 potency so before adding in the benefits on trick to the regular GCD, we have a guaranteed gain of 60 potency -- more if we end up gaining a stronger GCD. 

Probably the most underutilized optimization tool Ninja has is Shukuchi. Shukuchi is the only movement ability in the game that gives you free reign of where you want to end up, assuming you are in range. There are many times where you can use it to get to a stack at the last moment, get out of range for an AoE at the last moment, or get to the boss faster, which can in turn potentially get you extra GCD on the boss. This is especially useful in a party where you can get a healer or a ranged DPS to stand where you need to end up, because you can then use a macro to Shukuchi to that party member without ever having to use the ground targeting system Shukuchi normally uses.

Other highly underutilized tools for optimization and safety are your defensive cooldowns, these being Shade Shift, Second Wind, and Bloodbath. There are times where sometimes an AoE will not give Vulnerability Up or Damage Down to you, or that they won't matter for whatever reason. Often, you can use these tools to then stay in the AoE for no loss. This should, of course, always be communicated with your healers beforehand, and maybe they will even be willing to give you a shield for it. 

Finally, the increased movement speed. This is not necessarily noticeable by most players because it is quite small. But it is still something that you can use to gain an advantage. Especially when an AoE lines up very close to a GCD, you will sometimes have the ability to get that GCD off, whereas any other melee job wouldn't. It just means you have to test this stuff on ninja specifically, not on the other melee jobs, because they aren't necessarily the same thresholds for when you can get another GCD and be safe. 

![Banner6](/img/jobs/melee/ninja/Banner6.png)

## Niche Optimizations

Do not do these things until you truly know what you are doing, these things are generally pretty high risk of being DPS losses if you aren't sure, or require you to either think and do math on the fly, or already have a fight mapped out and consistent down to every single GCD.

With that being said, let’s get started. The first niche optimization is probably the easiest one to implement, and if you are doing the opener from up above, you already are doing one instance of it. This is the optimization of when it is better to do another GCD in Trick instead of a second Raiton. The way this works is that you have to have the GCD be under the effect of Bunshin, gain a Bhavacakra inside the Trick that would otherwise have been outside of Trick Attack, and it can't be a Spinning Edge. Raiton is 800 potency, and the Bunshin on top of the Bhavacakra is 500 potency. To get above the Raiton’s 800 potency, we need to do a GCD that is originally at least 300 potency, which means it is only Gust Slash, Aeolian Edge, and Armor Crush that fits this condition. Once again, this only affects the very last GCD of trick, and you have to only be able to put the Bhavacakra inside Trick Attack because of this.

A second niche optimization is single target Doton. Yes, this is a thing, but it is very hard to do correctly. Doing this incorrectly just once in a fight is a guaranteed potency loss of at least 120. And it only ever truly gains you a max of about 90 potency if done correctly. To fulfill the condition for this optimization, the boss has to be able to stay in the Doton the entire duration, and you cannot lose a single GCD to the extra time used to cast Doton. This is due to change when Square Enix made ground abilities (like Soil and Wings) instantly tick so you got the protection instantly instead of relying on server ticks, this change was applied to all ground AoEs, including the damaging ones, which gives Doton 900 potency instead of the expected 800 from looking at the potency numbers. Due to this, Doton is technically 100 potency more than Raiton, but it also takes an extra Mudra to execute, so you lose about .5 seconds on your GCD, if not more with ping. 

For this to be a gain, you have to know when a fight’s phase will end, down to the exact timing of your GCD, and this needs to be consistent. Assuming these conditions are met, you then move one of your Raitons from trick, and turn it into a Doton before Trick. The reason for this is that Doton does not snapshot enemy debuffs, so using it during Trick is a loss compared to using it before trick and allowing the ticks to be going throughout the entire time trick is up. So, you would essentially want to Suiton then Trick Doton when you get the next Mudra charge, then do Trick normally, but switch what was previously a Raiton with a GCD instead.

Another niche optimization is using Shadow Fang outside of Trick Attack. Because Shadow Fang has a duration of 30 seconds, there are often cases where a boss either dies early or becomes untargetable for part of this duration. This would in turn make it lose a lot of potency depending on the situation. In a case like this, you will want to move Shadow Fang either forward in your opener to out of Trick, or to after Trick depending on the situation. Gaining one tick is enough to outweigh what Trick Attack does for its potency. It's a relatively simple optimization but it happens rare enough nowadays that it's rarely used.

# Thanks

Thank you to everyone who has helped me get to where I am today, and who will be with me in the future. I'm sure I will forget someone here, so just know that I appreciate each and every one of you, no matter what happened between us. Thanks to Momo Sama for being the Ninja main I looked up to for all of the Creator tier speedrunning. You were the one who got me interested in the job at the highest level, and you were the one I learned a lot of my basic optimization stuff from. Without you I likely would have been anywhere near where I am today. 

Thank you to the many people who were part of omgroom while I was a part of that group as well. You were the group that I really pushed the fights with and who helped me develop through UCOB and later Ultimates with. The confidence in my own play and theorycrafting that I built with you guys pushes me forward all the time in this game nowadays. 

Thank you to Kyo -- the back and forth Ninja theorycrafting and application we did back in Stormblood allowed me to think outside the box and not just go with the rotation stuff everyone else went with, but to actually think for myself, allowing me to both improve myself more and more, and for making me look at a different side of the optimization than I did previously. 

Thank you to Shalfu for all the work he did in Shadowbringers for Ninja. Without him, I don't think pre-5.1 NIB would have been as amazing and fun as it was, even if it was shit balance-wise for a while. And once again, thank you to everyone else who I have been in contact with extensively, and non-extensively, you all motivated me and helped me become a better player and person. 

## Contacting Me

If you want to reach out to me for whatever reason, you can reach me at the following social medias, I check these daily and will get back to you when I can.
Twitter: @zhotacton
Discord: Zhotacton#7564