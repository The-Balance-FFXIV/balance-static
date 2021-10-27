---
authors:
  - Balance WAR Staff
patch: "5.5"
lastmod: 2021-10-27T07:48:43.031Z
changelog:
  - date: 2021-08-13T23:00:00.000Z
    message: " We still good!"
  - date: 2020-11-27T00:00:00.000Z
    message: Fixed things for Patch 5.3 shenanigans. Lots of changes
  - date: 2020-08-12T23:00:00.000Z
    message: Some Patch 5.30 shenanigans. Didn’t fix the rotation yet.
  - date: 2020-07-17T23:00:00.000Z
    message: Fixed some skill descriptions FINALLY (Holm, Raw, Veng)
  - date: 2020-07-05T23:00:00.000Z
    message: Added IC IR IC IC opener and a bit about EpppEpppE rotato.
  - date: 2020-02-19T00:00:00.000Z
    message: Added a BLURB for the looping rotation. Big explanation about 1-2-3
      path phases. Also adjusted some Onslaught text to answer questions like
      “When should I use it?”
  - date: 2019-12-11T00:00:00.000Z
    message: Fixed some typos and brainfarts
  - date: 2019-11-22T00:00:00.000Z
    message: Added a section for Nascent Flash vs Raw Intuition
  - date: 2019-09-10T23:00:00.000Z
    message: More BIS list adjustments, melding priority fixes (removed the
      Det-heavy priority)
  - date: 2019-07-31T23:00:00.000Z
    message: BIS lists adjusted.
  - date: 2019-07-30T23:00:00.000Z
    message: Changed the Meld priorities and some wording. Added BIS for E1-4s.
  - date: 2019-07-14T23:00:00.000Z
    message: Raid Tips and Tricks for Trials. Simplified AoE table.
  - date: 2019-07-13T23:00:00.000Z
    message: Added the AoE table back
  - date: 2019-07-12T23:00:00.000Z
    message: Added a note about side/rear hits no longer critting under Raw
      Intuition. Added a note about Nascent Flash being a 40k+ heal.
  - date: 2019-07-10T23:00:00.000Z
    message: Updated Enmity Table
  - date: 2019-07-08T23:00:00.000Z
    message: SkS tiers, BiS, Low Blow, Equilibrium edits
  - date: 2019-07-07T23:00:00.000Z
    message: Updates for Visuals, Job overview, Abilities Overview, Opener
      Optimization, Additional Resources, Acknowledgment sections
  - date: 2019-07-05T23:00:00.000Z
    message: Public Release for The Balance
  - date: 2019-07-03T23:00:00.000Z
    message: Initial Release for 5.0
  - date: 2019-07-04T23:00:00.000Z
    message: Colorful
---
# How to Fell Cleave
## "An Angry Wannabe-Healer Guide"
## Warrior Primer v5.3

- - -

## A comprehensive guide on Warrior’s gameplay, current info and theory

* [Introduction](#introduction)
* [Job Overview](#job-overview)
* [tl;dr](#tl;dr)
* [Abilities Preview](#abilities-preview)  
  * [Single Target](#single-target)
  * [Area of Effect](#area-of-effect)
  * [oGCD](#ogcd)
  * [Utility](#utility)
  * [The Beast Gauge](#the-beast-gauge)
* [Abilities In-Depth Overview](#abilities-in-depth-overview)
  * [Single Target](#single-target)
  * [Area of Effect](#area-of-effect)
  * [oGCD](#ogcd)
  * [Utility](#utility)
* [The Openers and Rotation](#the-openers-and-rotation)

  * [Opener Optimisation](#opener-optimisation)
  * [Rotation Optimisation](#rotation-optimisation)
* [Stats, Itemisation and BiS Theory](#stats-itemisation-and-bis-theory)
* [Raid Tips and Tricks](#raid-tips-and-tricks)
* [Additional Resources](#additional-resources)
* [Acknowledgment](#acknowledgment)
* [Changelog](#changelog)

- - -

# Introduction

Hello, fellow axe wielders, we are Warruru Bros from The Balance discord:

* Mox Xinmagar
* Glu Kos
* Sizzy Twintails

With this guide, we hope to provide everyone with an *in-depth view* on one of the FINAL FANTASY XIV tanks, Warrior. As such, this guide is dedicated to people already familiar with the basics of Tank role. 

For those new to Tank role as a whole, we must first refer you to this beginner tank guide, where you’ll be introduced to the basics, such as defensive cooldowns for each tank, enmity control, tank swaps and positioning:

[So You Want To Be A Tank?](https://goo.gl/nYzAnq)

If you know the basics and want to push the limits of Warrior gameplay, carry on reading.

- - -

# Job Overview

> \*On the northernmost edge of Abalathia's Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding great axes and known as 

Warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield.

Warrior is a powerhouse combining both very unique defensive and offensive kits. 

In general, Warrior’s gameplay revolves around filling the Beast Gauge using basic combos and spending the Beast Gauge on powerful abilities. It’s a minigame of sorts where you are balancing between zero and 100. Go too far and you’ll waste the precious Beast Gauge. Go too low and you won’t have enough Beast Gauge to use the ability when you need it.

At the same time, you will have another minigame. You will pay attention to the 30-60 seconds of **Storm's** **Eye** buff timer. Losing on some Beast Gauge if you reapply the buff too early or losing damage if you forget to reapply it at all.

Don’t be afraid, there will be some time to relax during **Inner Release**, while doing massive damage with those powerful abilities mentioned earlier.

While other tanks rely on knowing what happens next, Warrior charges into battle without a second thought. Self mitigation combined with insane self HP recovery tools are the biggest strengths of Warrior, allowing us to quickly react and adjust to unexpected situations. A healer suddenly died and you’re all by itself with low health? No problem! We have two instant heals to use, we heal ourselves during **Storm’s Path** combo and, on top of that, we also can heal ourselves or a party member by the portion of the damage we’ve dealt to the enemy!

Remember, no man can win every battle, but no man should fall without a struggle!

- - -

# tl;dr

*Also known as “I’m here for the quickest tips”. No explanation, just take them and run.*

## IC IR IC IC Opener

![Opener](https://i.imgur.com/WB2SEtL.png)

Nascent Flash is free to be moved around depending on damage taken. Here it is used to teach people to use Inner Release on the second oGCD slot.

## Rotation (is a priority now)

* Keep Storm’s Eye up and refresh it below 15 seconds.
* Keep Upheaval on cooldown.
* Keep Inner Release on cooldown (fight-dependent).
* Don’t overcap Beast Gauge.
* As a rule of thumb, use Fell Cleave only after 70 Beast Gauge.
* Use Storm’s Path to gain as much Beast Gauge as possible.
* Aim to use Infuriate and Inner Chaoses inside party buffs.
* Aim to keep Infuriate below two stacks at all times.

## Stat Priority

Crit > Comfy SkS > Det > Ten    

## Skill Speed Tiers

37 GCDs per 90s

* 1015 for 2.43 GCD - Highest DPS, but requires some planning
* 1117 for 2.42 GCD - Some breathing room compared to the one above

38 GCDs per 90s

* 1523 for 2.38 GCD - Your average Warrior skill speed
* 1624 for 2.37 GCD - Some breathing room for mechs and clipping
* 1726 for 2.36 GCD - "Greeding Mechanics" levels of comfy

## BiS Lists

Refer to [The Balance discord](https://discord.gg/thebalanceffxiv) server [\#warrior_resources](https://discordapp.com/channels/277897135515762698/580300071061553182/593937173569601538)

- - -

# Abilities Preview

Abilities will be presented in a tabular format for easy reading.

## Single Target

|                                                             |              |                                                                                                                                                                                                                              |                                                                      |
| ----------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Heavy Swing](https://xivapi.com/i/000000/000260_hr1.png)  | Heavy Swing  | Standard basic attack to initiate both the Storm’s Eye Combo and the Storm’s Path Combo, consisting of Heavy Swing, Maim, Storm’s Eye and Heavy Swing, Maim, Storm’s Path respectively.                                      | 200p <br>**GCD**                                                     |
| ![Maim](https://xivapi.com/i/000000/000255_hr1.png)         | Maim         | 320 potency if combo’d after Heavy Swing. Adds 10 Beast Gauge                                                                                                                                                                | 100p <br>(320p combo) <br>**GCD** <br>+10 Gauge                      |
| ![Storm's Eye](https://xivapi.com/i/000000/000264_hr1.png)  | Storm’s Eye  | 420 potency if combo’d after Maim. <br>Adds 10 Beast Gauge. <br>Grants a 10% damage buff for 30s. <br>Extend any existing Storm’s Eye buff by +30 seconds, up to 60s.                                                        | 100p <br>(420p combo) <br>**GCD** <br>+10 Gauge <br>+10% damage buff |
| ![Storm's Path](https://xivapi.com/i/000000/000258_hr1.png) | Storm’s Path | 420 potency if combo’d after Maim. <br> Adds 20 Beast Bauge.                                                                                                                                                                 | 100p (420p combo) <br> **GCD** <br> +20 Gauge                        |
| ![Fell Cleave](https://xivapi.com/i/002000/002557_hr1.png)  | Fell Cleave  | A big 590p hit, your main damage source. <br>Consumes 50 Beast Gauge. <br>Reduces Infuriate’s cooldown by 5s.                                                                                                                | 590p <br>**GCD** <br>-50 Gauge                                       |
| ![Inner Chaos](https://xivapi.com/i/002000/002568_hr1.png)  | Inner Chaos  | Costs one stack of Nascent Chaos. <br>Replaces Fell Cleave on your hotbar when you have one stack of Nascent Chaos. <br>Delivers a Critical Direct hit. <br>Consumes 50 Beast Gauge. <br>Reduces Infuriate’s cooldown by 5s. | 920p <br>Dhit crit <br>**GCD** <br>-NC <br>-50 Gauge                 |
| ![Tomahawk](https://xivapi.com/i/000000/000261_hr1.png)     | Tomahawk     | Ranged attack with increased enmity.                                                                                                                                                                                         | 140p <br> **GCD**                                                    |

## Area of Effect

|                                                                |                 |                                                                                                                                                                                                                           |                                                  |
| -------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ![Overpower](https://xivapi.com/i/000000/000254_hr1.png)       | Overpower       | 130 potency to enemies in a cone in front of you. <br>Radius of eight yalms.                                                                                                                                              | 130p <br>GCD                                     |
| ![Mythril Tempest](https://xivapi.com/i/009000/009477_hr1.png) | Mythril Tempest | 200 potency to all enemies nearby you, if used after Overpower. <br>Radius of five yalms. <br>Extends Storm’s Eye buff by 30s (up to 60s) and adds 20 Beast Gauge.                                                        | 100p <br>(200p combo) <br>**GCD** <br> +20 Gauge |
| ![Decimate](https://xivapi.com/i/002000/002558_hr1.png)        | Decimate        | A big AOE hit, 250 potency per target. <br>Radius of five yalms. <br>Consumes 50 Beast gauge. <br>Reduces Infuriate’s cooldown by 5s.                                                                                     | 250p <br>**GCD** <br>-50 Gauge                   |
| ![Chaotic Cyclone](https://xivapi.com/i/002000/002566_hr1.png) | Chaotic Cyclone | Costs one stack of Nascent Chaos. <br>Replaces Decimate on your hotbar when you have one stack of Nascent Chaos. <br>Guaranteed Critical Direct hit. <br>Consumes 50 Beast gauge. <br>Reduces Infuriate’s cooldown by 5s. | 400p  <br>**GCD** <br>-50 Gauge <br>-NC          |

## oGCD

|                                                          |           |                                                                                                         |                                        |
| -------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| ![Upheaval](https://xivapi.com/i/000000/000405_hr1.png)  | Upheaval  | This is a single oGCD that deals 450 potency damage. <br>Consumes 20 Beast Gauge.                       | 450p <br>30s CD <br>oGCD <br>-20 Gauge |
| ![Onslaught](https://xivapi.com/i/002000/002561_hr1.png) | Onslaught | Warrior’s gap-closer. <br>Consumes 20 Beast Gauge.                                                      | 100p <br>10s CD <br>oGCD <br>-20 Gauge |
| ![Infuriate](https://xivapi.com/i/002000/002555_hr1.png) | Infuriate | Increases Beast Gauge by 50 <br>Grants Nascent Chaos <br>30 seconds duration <br>Stacks up to two times | 60s CD <br>oGCD <br>+50 Gauge <br>+NC  |

## Utility

|                                                                 |                              |                                                                                                                                                                                                                                                                                                      |                                     |
| --------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| ![Inner Release](https://xivapi.com/i/002000/002564_hr1.png)    | Inner Release                | Guarantees all of your attacks  are Critical and Direct hit. <br>Extends existing Storm’s Eye buff by +15 seconds (up to 60s). <br>Makes all of your attacks cost 0 Beast Gauge. <br>Nullifies most draw-in and knockback effects. 10 seconds duration.                                              | +Crit Dhit <br>90s CD <br>oGCD <br> |
| ![Defiance](https://xivapi.com/i/002000/002551_hr1.png)         | Defiance                     | Toggleable effect that significantly increases enmity generation.                                                                                                                                                                                                                                    | + 900% Enmity <br>10s CD  <br>oGCD  |
| ![Provoke](https://xivapi.com/i/000000/000165_hr1.png)          | Provoke                      | Places you on top of the enmity list and adds additional fixed amount on top of that                                                                                                                                                                                                                 | 30s CD <br> oGCD <br> +Enmity       |
| ![Shirk](https://xivapi.com/i/000000/000810_hr1.png)            | Shirk                        | Redirects 25% of your current enmity onto a party member of your choice                                                                                                                                                                                                                              | 120s CD <br>oGCD <br>-25% Enmity    |
| ![Holmgang](https://xivapi.com/i/000000/000266_hr1.png)         | Holmgang                     | Prevents most attacks from reducing your HP below one HP. <br>Binds your target <br>Eight seconds duration                                                                                                                                                                                           | 8s dur. <Br>240s CD <br>oGCD        |
| ![Vengeance](https://xivapi.com/i/000000/000267_hr1.png)        | Vengeance                    | Reduces damage taken by 30%. <br>Deals 55 potency every time you take physical damage                                                                                                                                                                                                                | 15s dur. <br>120s CD <br>oGCD       |
| ![Rampart](https://xivapi.com/i/000000/000152_hr1.png)          | Rampart                      | Reduces damage taken by 20%.                                                                                                                                                                                                                                                                         | 20s dur. <br>90s CD <br> oGCD       |
| ![Thrill of Battle](https://xivapi.com/i/000000/000263_hr1.png) | Thrill of Battle             | Increases maximum HP by 20% and restores the amount increased <br> Increase HP recovery by healing actions on self by 20% <br>10 seconds duration                                                                                                                                                    | 10s dur. <br> 90s CD <br>oGCD       |
| ![Equilibrium](https://xivapi.com/i/002000/002560_hr1.png)      | Equilibrium                  | Heals self for 1200 potency. <br>60 seconds cooldown.                                                                                                                                                                                                                                                | 1200p <br>60s CD <br> oGCD          |
| ![Raw Intuition](https://xivapi.com/i/002000/002559_hr1.png)    | Raw Intuition                | Reduces damage taken by 20% <br>Shares a recast timer with Nascent Flash. <br>Six seconds duration.                                                                                                                                                                                                  | 6s dur. <br>25s CD <br>oGCD         |
| ![Nascent Flash](https://xivapi.com/i/000000/000405_hr1.png)    | Nascent Flash                | Grants Nascent Flash to yourself and Nascent Glint to a party member <br>Nascent Flash: Absorbs ~48% of damage dealt as HP. <br>Nascent Glint: Reduces damage taken by 10% and restores 50% of hp absorbed by Nascent Flash. <br>Six seconds duration. <br>Shares a recast timer with Raw Intuition. | 6s dur. <br>25s CD <br>oGCD         |
| ![Shake It Off](https://xivapi.com/i/002000/002563_hr1.png)     | Shake It Off                 | Gives a party wide, 15% of targets hp, shield. <br> Dispels Vengeance, Raw Intuition, Thrill of Battle and increases shield by 2% for each effect absorbed. <br>15 seconds duration.                                                                                                                 | 15s dur. <br>90s CD <br>oGCD        |
| ![Reprise](https://xivapi.com/i/003000/003233_hr1.png)          | Reprisal                     | Reduces targets’ damage dealt by 10%. <br>Does an AoE around the tank, hitting multiple targets.                                                                                                                                                                                                     | 10s dur. <br>60s CD <br>oGCD        |
| ![Arm's Length](https://xivapi.com/i/000000/000822_hr1.png)     | Arm’s Length <br>(knockback) | Negates majority of Knockback effects. <br>Certain attacks cannot be negated.                                                                                                                                                                                                                        | 6s dur. <br>120s CD <br>oGCD        |
| ![Arm's Length](https://xivapi.com/i/000000/000822_hr1.png)     | Arm’s Length <br>(Slow)      | Applies a Slow +20% debuff on the targets around you, increasing enemy’s cast time, attack time and auto-attack delay.                                                                                                                                                                               | 15s dur. <br>120s CD <br>oGCD       |
| ![Interject](https://xivapi.com/i/000000/000808_hr1.png)        | Interject                    | Interrupts the use of some (highlighted) enemy actions.                                                                                                                                                                                                                                              | 30s CD <br>oGCD                     |
| ![Low Blow](https://xivapi.com/i/003000/003059_hr1.png)         | Low Blow                     | Stuns target. <br>Certain targets cannot be stunned.                                                                                                                                                                                                                                                 | 5s dur. <br>25s CD <br>oGCD         |

## The Beast Gauge

The Beast Gauge will be the main resource you will have to manage when playing Warrior. You will naturally accumulate the Beast Gauge during your rotation and will be able to spend it on specific skills. **IT DOESN’T INCREASE CRIT ANYMORE.**

![Gauge 1](https://img.finalfantasyxiv.com/lds/promo/h/G/8mnBmkrAJdhB7ZPLG812UiFhxk.png)
![Gauge 2](https://img.finalfantasyxiv.com/lds/promo/h/k/3GHiS3XIjitdQYTykl4K02V_Kw.png)

Several actions will increase the Beast Gauge:

* Maim and Storm’s Eye will increase by 10.
* Storm’s Path and Mythril Tempest will increase by 20
* Infuriate will increase by 50

Several actions can be used by spending the beast Gauge:

* Inner Beast and Steel Cyclone will decrease by 50
* Fell Cleave and Decimate will decrease by 50
* Inner Chaos and Chaotic Cyclone will decrease by 50
* Upheaval will decrease by 20
* Onslaught will decrease by 20

While our crit chance increase from the Beast Gauge did get removed in 5.0, we still want to keep the Beast Gauge and Infuriate charges ready for buff windows, most notably Trick Attack. Our goal for every trick attack is to spend ideally 170 gauge, on two Inner Chaos, one Upheaval and one  Fell Cleave. 

Depending on the fight, you won’t get your full burst in every trick window, but you should aim to land one Upheaval and one Inner Chaos as a bare minimum.

- - -

# Abilities In-Depth Overview

## Single Target

### Storm’s Eye Combo

Heavy Swing -> Maim -> Storm’s Eye

One of your 1-2-3 combos. The goal of Warrior is to make sure Storm’s Eye is up as much as possible. Lovely 10% damage increase. Also generates 20 points of Beast Gauge (10 from Maim and 10 from Storm’s Eye).
Basic Rule is “if Storm’s Eye has less than 15 seconds left, then re-apply Storm’s Eye“. This will make sure that you don’t lose the buff. To maximize Storm’s Eye effectiveness though, it is possible to delay the application by using gauge spenders, such as Fell Cleave or Inner Chaos as a filler.

### Storm’s Path Combo

Heavy Swing -> Maim -> Storm’s Path

Your second standard 1-2-3 combo that generates 30 Beast Gauge (10 from Maim and 20 from Storm’s Path). The Warrior rotation aims to maximize gauge generation and minimize Storm’s Eye refreshes. As such this will be the most used combo for you.

### Fell Cleave

A powerful single GCD with 590 potency that can only be used while you have 50 Beast Gauge available. It is a preferred way to spend the Beast Gauge for 1-2 targets.
**ALWAYS use 5 times inside Inner Release for 1-2 targets** and as your gauge spender in-between Inner Releases to prevent the gauge from overcapping.

### Inner Chaos

A powerful single GCD with 920 potency that can only be used while you have 50 Best Gauge available and a Nascent Chaos buff granted by Infuriate. It will replace  Fell Cleave on your hotbar, so it is easy to treat it in the same manner. Like  Fell Cleave,  Inner Chaos is a preferred way to spend the Beast Gauge for one to two targets. However **Inner Chaos should NEVER be used inside Inner Release**, since it already has the benefit of Crit Direct Hit. Try to use Inner Chaos inside raid damage buffs. 

### Tomahawk

Tomahawk is the only long ranged skill available to Warrior. 140 potency is not the biggest damage in our kit, however **Tomahawk makes it possible to attack the target in a range from 3y to 15y.**
Additional x7 enmity multiplier makes Tomahawk the strongest GCD enmity generator available on-demand for a Warrior. Don’t hesitate to use it if the target suddenly decided to run away and punch a caster in the face. 

## Area of Effect

### Mythril Tempest Combo

Overpower -> Mythril Tempest

AoE combo, not much to say. 
**This combo beats Heavy Swing -> Maim -> Storm’s Eye/Storm’s Path combo at two targets.**

### AoE Gauge spenders

Decimate ( Chaotic Cyclone )

AoE versions of Fell Cleave (Inner Chaos) to be used for multiple targets. The AoE is centered on self. 
**These gauge spenders beat Fell Cleave (Inner Chaos) at three targets.**

### Quick Reference

Use the chart below for quick reference during your AoE adventures:

![Flowchart](https://cdn.discordapp.com/attachments/752334526449057853/884745727702622248/unknown.png)

### Handy AoE Table

![Table](https://cdn.discordapp.com/attachments/752334526449057853/884745881600020500/unknown.png)

## oGCD

### Upheaval

Upheaval is just a standard damage oGCD. Use Upheaval on cooldown, it should align with buffs like Inner Release. A good visual cue for using Upheaval is looking at Inner Release’s cooldown timer: it should be used between 59-53 and 29-22 seconds. 

In reality Upheaval often lands between 58-53 and 28-22 seconds because the first second of Inner Release is used by Fell Cleave, and at times Upheaval lines up with a GCD so it has to be delayed a bit, making it drift. If Inner Release’s cooldown timer reaches under 22 seconds, replace Upheaval with a single Onslaught to reset Upheaval’s position and stabilize the Beast Gauge. **You should also ALWAYS use Upheaval during Inner Release as it is a free 450 potency during the Inner Release.**

### Onslaught

Warriors’s very own gap closer. Onslaught has a short ten second cooldown, making it almost always available as long as you have 20 Beast Gauge. Intended use is for closing gaps to increase your uptime and thus Onslaught should be used that way. **You should also ALWAYS use Onslaught during Inner Release as it is a free 100 potency skill during the Inner Release.**

Onslaught comes with a priority system:

1. Use it as a gap closer to increase your uptime.
2. Use within Inner Release.
3. Use to manipulate your Beast Gauge according to the fight.
4. Use at the end of the fight, if you have less than 50 gauge and Upheaval is on cooldown

### Infuriate

In Shadowbringers, Infuriate now grants Nascent Chaos, a buff which enables Inner Chaos, which is an upgraded 920 potency Fell Cleave (and  Chaotic Cyclone which is upgraded Decimate) with guaranteed Crit and Direct Hit. You can also store two charges of Infuriate which allows you to sit on a charge for Trick Attack while still running down the cooldown on the other charge. **You should always try to aim for one Infuriate inside Trick Attack**, often you’ll even be able to get two since you’ll be reducing the CD of Infuriate by doing Fell Cleaves or Inner Chaoses inside Trick Attack.

General guidance for Infuriate: 

1. Use during the opener
2. Use during Trick Attack
3. Use before second charge accumulates
4. DO NOT use during Inner Release
5. DO NOT use before Inner Release, unless you can Inner Chaos/Chaotic Cyclone before Inner Release activation

## Utility

#### Inner Release

This button will make all your damage be Critical Direct Hits. This button will make your Beast Gauge actions cost zero gauge. And this button also will prevent you from suffering Stun, Sleep, Bind, Heavy and Knockback effects. It is the single most important ability we have in our toolkit. Every Warrior should know how to use it wisely.
Each Inner Release window lasts ten seconds and should contain seven Beast Gauge actions: five GCDs and two oGCDs. **NO EXCEPTIONS.**

For 1-2 targets:

![Inner Release 1-2](https://cdn.discordapp.com/attachments/752334526449057853/884757272780214272/unknown.png)

For 3+ targets:

![Inner Release 3+](https://cdn.discordapp.com/attachments/752334526449057853/884757299846074438/unknown.png)

To correctly perform this, each Inner Release must be executed in the second oGCD slot of the GCD. If not done in the second oGCD slot, you have a chance to miss the fifth GCD skill and lose a good amount of potency as a result. **Check the picture below for a good moment to activate your Inner Release.**

![Inner Release Moment](https://cdn.discordapp.com/attachments/752334526449057853/884757552640974879/unknown.png)

### Enmity Manipulation

#### Defiance

Defiance is your Tank Stance. It will multiply the enmity you generate by a factor of ten. So, just by having the Defiance buff active, you will generate as much enmity as ten people combined. It simplifies the enmity management for tanks. Simply speaking - **if you are tanking the boss, you have Defiance active.**
As a counterpoint, hitting a target you’re not supposed to hit, while in Defiance, will probably make you hold that target for a long time. This applies to certain fights with additional targets.

#### Provoke

Provoke is your go-to tool for grabbing the aggro. Patch 5.0 changed how Provoke works and currently each cast first places you on top of the enmity list and then adds a fixed amount of about 38,000 (380,000 in Defiance) points of enmity (for lvl 80 ilvl 430 Warrior). Makes tank swapping process a breeze.

#### Shirk

Shirk is the opposite of Provoke. Using Shirk on a party member will transfer 25% of your enmity points to the party member. That 25% of enmity from Monsters A and B will be transferred to the party member’s Monster A and B enmity pool, respectively, effectively lowering your own enmity by 25%.

#### Enmity values

As of Patch 5.0, most of the tank skills have gotten an Enmity adjustment. 

This guide doesn’t include information about enmity control and damage mitigation as it is seen as a general tanking skill rather than specific to Warrior. The [General Tanking Guide](https://drive.google.com/open?id=1cLIQbPzzWg-IWxo_Myom-_9aSqf7xO4vxmhk6QaLPkM) by Aletin goes over these topics in detail, telling you how things work and how to properly manage each tool individually and as a whole set.

For a more in-depth look on Enmity Values for lvl 80 ilvl 444 BiS Warrior,  you can check this enmity table.

![Enmity Table](https://cdn.discordapp.com/attachments/752334526449057853/884758084306735124/unknown.png)

NOTE: 

* Variable abilities will have VARIABLE damage (example: Heavy Swing will be 4000-4400 damage) and as a result will have VARIABLE enmity values during the fight. It will cause +- 5% difference with enmity values in the table.
* Fixed abilities will have FIXED enmity values.
* Damage buffs, Critical Hits and Direct Hits will change the output of abilities and as a result will change enmity values (example: Storm's Eye buff will increase your damage by 10% and as a result enmity will be increased by 10%). 
* Provoke takes damage buffs into consideration as well.
* Critical Direct Hit effect is omitted for comparison purposes

\*\* Storm's Path doesn't generate extra enmity via HP recovery effect

\*\** Sets your enmity equal to the highest enmity and adds fixed amount on top

\*\*\*\* Shirk instantly transfers 25% of your current enmity to the party member

**\*** Defiance adds x10 enmity multiplier to all your skills. Applies to itself. 

### Mitigation and Recovery

#### Holmgang

Holmgang prevents you from dropping below one HP for eight seconds for most attacks, it doesn’t ignore damage. Could be used on a target to Bind the target in place for the duration of the Holmgang or it could be used without the target. It’s pretty much a “survive anything” button, with few exceptions. 
Time your Holmgang well and be careful when using Holmgang for multi-hit tank busters. Its duration is eight seconds. To get the most out of it, you want to use it at the very end of the tankbuster cast. It activates much faster than Living Dead and Hallowed Ground, so don’t worry about animation delay screwing you over. As long as you use Holmgang before the damage is taken, it will work, even if the damage has already snapshotted before you pressed it. This is because Holmgang prevents you from dropping below one HP, it doesn’t ignore damage like Hallowed or Superbolide which is why they must be used before the damage is registered. 
**As of Patch 5.0, Holmgang’s effect wears off if the bound target dies.** This puts Warriors at risk, especially in big AoE pulls in dungeons when the targeted monster dies and cuts Holmgang short. 

To avoid this, use a macro that doesn’t use a target:

```
/merror off
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/ac Holmgang <me>
/micon Holmgang
```

This macro activates Holmgang by targeting yourself. For raids try to avoid using the macro as its activation isn’t 100% accurate due to how the game works.

#### Vengeance

Vengeance is the heaviest mitigation tool in Warriors’ kit. A -30% mitigation and a Thorns effect that delivers an attack with 55 potency every time the Warrior is hit by physical damage, for 15 seconds at a 120 second recast timer. Great in AoE pulls in dungeons, even better for mitigating hard-hitting tank busters.

#### Rampart

Rampart is your +20% mitigation for 20 seconds, on a 90 second recast timer. Overall, it’s good for AoE pulls in dungeons and mitigating heavy incoming damage spikes in raids.

#### Thrill of Battle

Thrill of Battle gives +20% to Maximum Health and restores the amount increased. Additionally, it increases HP recovery via healing actions on self by 20%. **It does NOT increase the healing done by Nascent Flash, but it does affect
Equilibrium.** Ten second duration on a 90 second timer.

#### Equilibrium

Equilibrium is a 1200 potency self-heal for Warriors on a 60 second cooldown. The healing is buffed during Thrill of Battle by 20%. Useful for recovering from tank busters or helping the healers to keep you alive.

#### Raw Intuition

Raw Intuition is a -20% mitigation tool for six seconds. As opposed to Stormblood (patch 4.x), getting hit from the back or sides no longer results in Critical damage. Good for tank busters, especially when paired with other cooldowns when required. However, it does share the recast timer with Nascent Flash, so you can’t have both active at the same time. See optimization section on “Nascent Flash vs Raw Intuition”.

#### Nascent Flash

Nascent Flash heals the Warrior for ~50% of the damage dealt, and the party member for 25%. It also reduces damage taken by a party member by +10%. The healing is not affected by Thrill of Battle. Very much overpowered in AoE pulls in dungeons where you can land AoE damage on multiple targets, and can be a heal well over 40k in total. However, it does share the recast timer with Raw Intuition, so you can’t have both active at the same time. See optimization section on “Nascent Flash vs Raw Intuition”.
Here is a handy macro to activate Nascent Flash:

```
/merror off
/ac "Nascent Flash" <mo>
/ac "Nascent Flash" <mo>
/ac "Nascent Flash" <mo>
/ac "Nascent Flash" <mo>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <2>
/ac "Nascent Flash" <me>
/ac "Nascent Flash" <me>
/micon "Nascent Flash"
```

The macro runs through 4 lines of “mouse-over”, targeting anyone under your cursor. If there’s no one under your cursor, it will pass these lines. The next lines (<2>) target the second person in YOUR party list, which is 99% of the time your co-tank (or a healer in non-two-tank content). If the second party member is dead, these lines will pass without actions. The last two lines attempt to cast the skill on yourself to avoid skipping using the skill altogether. 

Nascent Glint buff on that party member. If you don’t have a party member under your mouse, it will apply Nascent Glint buff on the second member of your party list (usually the 2nd tank). This does not apply to Chocobos, for some reason… Use `/ac "Nascent Flash" <b>` instead, if you want to help your loyal fighting buddy!

#### Shake It Off

Shake It Off is the party-shielding tool for Warriors. Using Shake It Off consumes any active Thrill of Battle, Vengeance or Raw Intuition buffs. The base value of the shield is 12% of the party member’s maximum health, with +2% additional shielding for each buff consumed. At most, the shield can be 18% of the party member’s maximum health. There are times when buffing Shake It Off is a good idea, but **consuming defensive cooldowns just to buff a 15 second shield by +6% isn’t usually worth it.**

#### Reprisal

Reprisal is simply a wide mitigation tool, which lowers the targets’ damage dealt by 10% for the next ten seconds at 60 seconds recast timer. Good for raid-wide damage or additional tank buster mitigation, if there’s no better use for it in the next 60 seconds. It’s also an AoE skill, meaning that you can Reprisal multiple targets at once!

#### Arm’s Length

Arm’s Length is a tricky one. Its main purpose is to prevent a single knock-back in the six seconds it is active, but when used in AoE pulls in dungeons, it increases cast time, recast time and auto-attack delay of any monster by 20% for 15 seconds when hit. Great for slowing down the incoming damage from multiple targets.

### Cast Interruptions

#### Interject

Interrupts the use of enemy actions highlighted with red-blinking cast bar.

#### Low Blow

Stuns the target for five seconds. **DOES NOT** interrupt the use of enemy actions highlighted with red-blinking cast bar.

- - -

# The Openers and Rotation

All right, now let’s use all this knowledge we’ve gathered and discuss how, when and why to use the abilities we have.

## Opener Optimization

At present there is only a single worthy opener for Warriors, mainly because we want to get Inner Release on cooldown as soon as possible to maximize its usage, and because we can fit an extra Fell Cleave inside the potion by abusing Inner Release’s +15s Eye extension mechanics.

### IC IR IC IC Opener

![IC IR IC IC Opener](https://cdn.discordapp.com/attachments/752334526449057853/884760228699189309/unknown.png)

IC IR IC IC opener takes advantage of the potion’s whole duration, landing in three Inner Chaos, two combo finishers, a Fell Cleave and all the important oGCDs.

Nascent Flash makes sure that you’re using Inner Release in the second oGCD slot between GCDs, and that it lines up with Upheaval. You can use Nascent Flash later on if you wish to cover any fight damage that comes up a few GCDs later compared to the opener.

If you are facepulling, move the Infuriate forward by a GCD, right after Heavy Swing.

Defiance and Tomahawk is enough to keep an enmity lead if you are main tanking. 

Equilibrium and Provoke can be used during the opener for a flat increase in enmity if you are pulling the boss and will keep Main tanking the boss after the pull. As mentioned earlier, as of patch 5.0 Defiance and Tomahawk provides enough enmity and it is better to use Equilibrium for healing and Provoke for tank swaps.

## Rotation Optimization

The basic rotation in a 100% uptime scenario is generously put a priority list:

* Keep Storm’s Eye up and refresh it below 15 seconds.
* Keep Upheaval on cooldown.
* Keep Inner Release on cooldown (fight-dependent).
* Hit five Fell Cleaves, one Upheaval and one Onslaught inside every Inner Release
* Don’t overcap the Beast Gauge.
* As a rule of thumb, use Fell Cleave only after 70 Beast Gauge.
* Use Storm’s Path to gain as much Beast Gauge as possible.
* Aim to use Infuriate and Inner Chaoses inside party buffs.
* Aim to keep Infuriate below two stacks at all times.

The main goal for your rotation should be to maximize Storm’s Path casts and Storm’s Eye uptime.

With the combo timer being extended to 15 seconds, combos can carry over Inner Release. This means that after using Heavy Swing or Maim, it is possible to fit five Fell Cleaves before continuing the combo. However, it is easy to drop the combo by using Inner Chaos or an extra Fell Cleave right before or after Inner Release.

### Why Fell Cleave only after 70 gauge?

This rule is mostly for new Warriors, to ensure that they always have enough Beast Gauge for Upheavals. After you get a hang of the basics and party buffs, feel free to burn that gauge inside buffs. Hitting zero Beast Gauge is bad practice only if it delays Upheaval, or if it was spent in vain.

### Upheaval

Upheaval should be used inside Inner Release, and twice outside of Inner Release. The general rule regarding Upheaval usage is that you should NOT use it if Inner Release’s cooldown is at 22 seconds or below, as it would not fit inside the buff. In these cases, replace the Upheaval with an Onslaught to keep your Beast Gauge on track. A good visual cue for using Upheaval is looking at Inner Release’s cooldown timer: it should be used between 59-53 and 29-22 seconds. 

![Upheaval image](https://cdn.discordapp.com/attachments/752334526449057853/884761036014645308/unknown.png)

In reality, Upheaval often lands between 58-53 and 28-22 seconds because the first second of Inner Release is used by Fell Cleave, and at times Upheaval lines up with a GCD so it has to be delayed a bit, making it drift.

### Onslaught

The tool to manage our gauge amidst fight mechanics and timings. 
A general rule for Onslaught usage is to use it when you would miss GCDs otherwise due to mechanics forcing you to disengage.

### Infuriate

Infuriate should rarely hit two stacks. To ensure as many casts as possible, we want to take advantage of the Infuriate’s cooldown timer by keeping it ticking constantly. There are exceptions to this rule, such as pushing as much gauge as possible into Trick Attacks and thus saving the stacks, but in general the stacks should hover between zero and one, and the timer should stay active.

Another thing to avoid completely is using Infuriate right before Inner Release, or during it. Infuriate activates Nascent Chaos, which opens up Inner Chaos and Chaotic Cyclone, they always Crit Direct Hit, and using those skills inside Inner Release is a waste, because using GCD spenders inside the buff consumes Nascent Chaos. If necessary, delay Inner Release by a GCD and consume the Nascent Chaos through Inner Chaos or Chaotic Cyclone, then use Inner Release. There are exceptions to this, but they’re all fight-dependent (for example, Perfect Alexander opener to maximize your damage before taking a jail).

### Nascent Flash vs Raw Intuition

Assuming that one potency is 29 damage and NFlash heals us for 48%, and the co-tank is healed for 50% of that initial 48%. Leaving Onslaught out of the normal windows, but including it in IR windows.

Worst case is a single combo without buffs, and a single auto-attack.
Best case scenario is Eye-buffed two Inner Chaos, Fell Cleaves, Upheaval and two auto-attacks.
Usual scenario is Eye-buffed Maim, a /combo-finisher, Upheaval, Fell Cleaves and a single auto-attack.
Inner Release window is Eye-buffed Upheaval, Onslaught and three Fell Cleaves.

Spreadsheet used for the results below can be found [here.](https://bit.ly/XIV530Nascent)

![Spreadsheet](https://cdn.discordapp.com/attachments/752334526449057853/884760633256583220/unknown.png)

As the table above shows, Raw Intuition has to either cover you from a certain death or mitigate ~54k damage on its own to be worth more than Nascent Flash in the usual scenario.

- - -

# Stats, Itemization and BiS Theory

With access to the information we know now, utilizing community tools such as the current [Tank DPS calculator](https://bit.ly/TankDPSCalc520) allows us to more accurately determine what gear and melds should be used.

For Stat Tiers, refer to [TheoryJerks/AkhMorning’s website.](http://theoryjerks.akhmorning.com/stats/speed/)

## Melding priority

Crit > Comfy SkS > Det > Ten

Direct Hit is avoided altogether because of how Inner Chaos and Inner Release work: Direct Hit has no effect in either of those.

Currently “Supported” **Skill Speed Tiers**

* 1015 for 2.43 GCD - Highest DPS, but requires some planning
* 1117 for 2.42 GCD - Some breathing room compared to the one above
* 1523 for 2.38 GCD - Your average Warrior skill speed
* 1624 for 2.37 GCD - Some breathing room for mechs and clipping
* 1726 for 2.36 GCD - "Greeding Mechanics" levels of comfy

The difference between 2.43 GCD and 2.38 GCD is a single weapon skill between Inner Releases:

Inner Release’s recast: 90 seconds
 <br> Weapon skill timer: 2.43 seconds or 2.38 seconds

Total amount of Weapon skills per 90 seconds:

90s / 2.43 = 37.037… which translates into 37 full Weapon skills
 <br> 90s / 2.38 = 37.815… which translates into 38 full Weapon skills

- - -

# Raid Tips and Tricks

## Eden

[http://bit.ly/WAR_E1-4s_tips ](http://bit.ly/WAR_E1-4s_tips)

## The Epic of Alexander

<http://bit.ly/WAR_TEA_Notes>

### VOD of Perfect Alexander opener by Ramza

<https://www.twitch.tv/videos/547866534> 
<br> This opener is optimal assuming you get Stillness first

- - -

# Additional Resources

## Guides:

[Beginner's Tank Guide](https://docs.google.com/document/d/1cLIQbPzzWg-IWxo_Myom-_9aSqf7xO4vxmhk6QaLPkM)
<br> Visit for basics of tanking. 

[Paladin Primer v4.58](https://docs.google.com/document/d/1JY2t2GvNaNnQhZ5Isp-HIso2JgGMY6WXk5IGAY2v8AU)
<br> Visit for shield wielding tips. 

[Gunbreaker Primer v5.00](https://docs.google.com/document/d/1gfsMbHP55N5e0UKyc9zfpAdL_uVco40YdBlVNGvyJ0k)
<br> Visit for gunpowder blasting tips. 

## Websites:

[The Balance Discord](https://discord.gg/thebalanceffxiv)
<br>Visit for chat and questions. 

[TheoryJerks/AkhMorning](http://theoryjerks.akhmorning.com/stats/speed/)
<br>Visit for stat intervals and formulas. 

## Miscellaneous:

### How do Macros work?

Filling up all the slots with repeating lines sort of simulates queuing.
The real reasoning is that *macros read one line per each in-game frame.* If the macro tries to execute an action while in animation lock (from another action, for example), it has no effect.

* Frame 1: /merror off
* Frame 2: /ac "Nascent Flash" <2>
* Frame 3: /ac "Nascent Flash" <2>
* Frame N: ...

So when you repeat the action inside the macro, you stretch the action activation window. Instead of a macro that has a single frame where it attempts to use an action, you have a macro with 13 frames of attempts. This gets around the issue of "Animation Lock vs Macros" where you might not be able to use a skill because of the Animation Lock.

Macro targets:
<https://ffxiv.consolegameswiki.com/wiki/Macro#Targeting_Placeholders>

- - -

# Acknowledgment

## Authors:

Mox Xinmagar 	(Mox#0007)

Glu Kos		(Glukos#1104)	

Sizzy Twintails	(Sizouney#4484)

## Special thanks to:

Levi			(Alevia#1270)
For Warrior blobs. Visit [Levi’s Discord](https://discord.gg/hvN7JHA) for more!

Aletin Ves’ser 	(Aletin#3164)
For the [PLD guide](https://docs.google.com/document/d/1JY2t2GvNaNnQhZ5Isp-HIso2JgGMY6WXk5IGAY2v8AU) that was cloned, slaughtered and modified to make this guide.

Sierra Lindfeldt 	(kat#0069)
For the original layout of GNB guide which had its contents gutted multiple times.