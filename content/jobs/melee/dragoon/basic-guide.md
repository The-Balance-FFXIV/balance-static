---
title: Basic Guide
card_header_image: /img/jobs/drg/basic.png
authors:
  - Balance-DRG-Staff
patch: "7.4"
lastmod: 2026-01-02T07:18:51.795Z
changelog:
  - date: 2021-10-29T02:49:11.086Z
    message: Created page
  - date: 2022-03-26T04:40:45.042Z
    message: Updated for Endwalker
  - date: 2022-04-20T07:47:47.854Z
    message: Fixed broken <inline> tags; potency adjustments; animation lock
      adjustments; fixed some line breaks; fixed buff timings; fixed DS macros
  - date: 2022-08-12T17:06:16.913Z
    message: Updated DS textand life cycle text, various formatting fixes (DS
      macros, rotation table, column size, spaces), fixed link to BiS page
  - date: 2022-09-21T18:15:35.821Z
    message: Editorial changes and updates.
  - date: 2023-05-29T13:35:37.429Z
    message: Updated patch - no changes
  - date: 2024-07-29T17:40:16.839Z
    message: Revisions for DT
  - date: 2024-12-09T10:28:58.173Z
    message: Revision with 7.1 changes
  - date: 2025-03-30T10:51:06.547Z
    message: Bump to 7.2
  - date: 2026-01-02T07:18:53.085Z
    message: No changes, bumped patch to 7.4
---
# Saving The Dragoon

## Overview

Dragoon is a relatively static melee DPS job with a high focus on weaving off-Global Cooldown (oGCD) actions between a rigid 10-hit sequence of Global Cooldown (GCD) actions. Burst windows can get hectic, and prioritizing the various skills you need to execute can become a rather significant hassle in some instances. Dawntrail has doubled down on this by introducing the ability to utilize even more oGCD actions at regular intervals, as if we didn’t have enough already.

# Weaponskills

Also known as your GCD actions, weaponskills form the backbone upon which you weave the meat of your rotation - your abilities (oGCD actions). These skills are strung together in specific orders to form combos which amplify the skill effects.

## The Chaotic Spring Combo

| **True Thrust >**                               | **Spiral Blow >**                                                                 | **Chaotic Spring >**                            | **Wheeling Thrust >**                           | **Drakesbane**                                                                    |
| ----------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002077_hr1.tex?format=png) | ![](https://xivapi.com/i/002000/002596_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) | ![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002599_hr1.tex?format=png) |

&nbsp;\
This combo allows Disembowel to apply the Power Surge buff, amplifying your damage by 10% and Chaotic Spring to inflict a damage-over-time (DoT) effect that will keep constant damage rolling, even outside of your normal attacking skills.

## The Heavens' Thrust Combo

| **True Thrust >**                               | **Lance Barrage >**                                                               | **Heavens' Thrust >**                           | **Fang and Claw >**                             | **Drakesbane**                                                                    |
| ----------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002076_hr1.tex?format=png) | ![](https://xivapi.com/i/002000/002595_hr1.png) | ![](https://xivapi.com/i/002000/002582_hr1.png) | ![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002599_hr1.tex?format=png) |

&nbsp;\
This combo just deals raw damage. As it doesn’t apply any buffs, you want to make sure you only use this while Power Surge and Chaotic Spring are active already.

#### The Coerthan Torment Combo

| **Doom Spike >**                                | **Sonic Thrust >**                              | **Coerthan Torment**                            |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000306_hr1.png) | ![](https://xivapi.com/i/002000/002586_hr1.png) | ![](https://xivapi.com/i/002000/002590_hr1.png) |

&nbsp;\
This combo affects a line of enemies in front of you. It allows Sonic Thrust to apply the Power Surge buff, amplifying your damage by 10%. This combo is only worth using when you are faced with three or more enemies in combat that can all be hit by each skill.

#### Draconian Fire

Upon properly completing any of the above combos, you will gain the buff Draconian Fire. This buff augments the next True Thrust or Doom Spike you use into Raiden Thrust or Draconian Fury, respectively. These weaponskills combo the exact same as their unbuffed versions. They also give you one charge of Firstminds’ Focus, which is discussed in more detail later.

| **True Thrust >**                               | **Raiden Thrust**                               |
| ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://xivapi.com/i/002000/002592_hr1.png) |

&nbsp;

| **Doom Spike >**                                | **Draconian Fury**                              |
| ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000306_hr1.png) | ![](https://xivapi.com/i/002000/002594_hr1.png) |

&nbsp;

#### Piercing Talon

While you always want to maintain your uptime on the above combos as much as possible, occasionally an encounter may push you off for an extended period of time. Rather than doing nothing, you can utilize Piercing Talon. It doesn’t break *any* of the above combos or negates your Draconian Fire. Elusive Jump now provides the buff Enhanced Piercing Talon, considerably increasing the potency for the next use. This makes Piercing Talon stronger than some of our regular combo GCDs. While not necessarily the standard, you may find usage for Piercing Talon even in full uptime as it allows us to pull from range and manipulate our GCD alignment around phase timings and downtime.

![](https://xivapi.com/i/000000/000315_hr1.png)

## Basic Rotation

![](https://i.imgur.com/V3f8kDq.png)

&nbsp;\
Putting the above information to work, in a single-target encounter, our rotation will simply be the Chaotic Spring Combo followed by the Heavens’ Thrust Combo. We repeat this infinitely, assuming nothing interrupts our rotation. You may notice that Chaotic Spring will fall off slightly before you use the skill again. This is completely normal and nothing to be worried about. The DoT lasts 24 seconds while this rotation cycle takes 25 seconds to complete (assuming no Skillspeed).

#### Mistakes

Everyone makes them. In attempting to follow this rotation to the best of your ability, if you make a mistake and press the wrong second hit, **commit to the mistake**. Restarting the combo is a larger loss than just continuing the incorrect combo string. After the mistaken combo, just return to the alternating rotation. Do not attempt to course-correct back into the old order.

If you accidentally use an uncomboed GCD (and therefore break your combo) you have to start a fresh combo. Look at your remaining time on the Power Surge buff. If it is still high enough you want to start a Heavens' Thrust combo. Move on with a Chaotic Spring combo otherwise.

- - -

#### Wyrmwind Thrust

Every time you land Raiden Thrust or Draconian Fury, you gain one charge of your Firstminds’ Focus. Two charges allows you to activate Wyrmwind Thrust. Because we don’t start fights with Draconian Fire, the first charge comes during the Heavens’ Thrust combo and the second during the following Chaotic Spring combo. From there, you will always be using Wyrmwind Thrust during your Chaotic Spring combo, barring any rotational errors you encounter along the way. When it's ready to to be used, you **must** press Wyrmwind Thrust **before** your next Raiden Thrust or Draconian Fury, otherwise you will **not** gain the charge of Firstminds’ Focus, leading to a drastic loss in damage.

![](https://xivapi.com/i/002000/002597_hr1.png)

# Positionals

Some actions in the kit deal more damage from the **side** of a boss and some deal more from the **rear**. You want to be sure to position yourself to hit these for extra damage whenever possible.

#### How do I know if I'm at the **side** or **rear** of a target?

![Positional zones](https://imgur.com/ANOqtwM.png "Positional zones")

The arrow at the top is the **front** of the target. You get no special bonuses by attacking here, other than lots of bonus deaths for standing in tank busters and cleaves.

On the left and right sides, you will find the **sides** or **flanks** of the target. They account for 90° of the target on either side, but you will generally want to stand near the base of the visible line.

At the bottom of the image, there’s a gap between the two **sides** of the target. This empty space is the **rear**. When standing at the base of one **side**, it becomes easy to identify the two positions; you either attack the empty space or the line.

Some enemies will have the **side** mark wrapping their entire hitbox. These target rings are special because you will get positional bonuses from every action without needing to worry about where you attack from. All the enemies in the Palace of the Dead, for example, have this special targeting ring.

As a Dragoon, we only have positional requirements on three of our actions. Each of them provides an additional 40 potency when they hit the proper side of the target. 

#### Side Positionals

|                                                 |
| ----------------------------------------------- |
| ![](https://xivapi.com/i/002000/002582_hr1.png) |

&nbsp;\
**Fang and Claw** deals 40 more potency from the **side**.

#### Rear Positionals

|                                                 |                                                 |
| ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/002000/002596_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) |

&nbsp;\
 **Chaotic Spring** and **Wheeling Thrust** deal 40 more potency from the **rear**.

#### Combat Priority

While it is a loss to miss your positionals, landing them should be your last priority. Prioritize meeting all of the other combat priority requirements of a melee DPS job. These are listed in order from largest to smallest loss of damage if you fail that level.

**1. Handle Mechanics**\
   If you fail mechanics, you could cause a potential raid wipe and a fight reset. You do not want to be the cause of that. Nothing is more important than properly handling mechanics.\
**2. Stay Alive**\
   Don’t die. Plain and simple. If you have to sacrifice uptime to stay alive then you know the choice to make. Deaths cause much larger losses than having to use a few Piercing Talons.\
**3. Maintain Uptime (ABC - Always Be Casting)**\
   Stick to the boss like glue, assuming you meet one and two. Do not let your GCD stop spinning.\
**4. Land Positionals**\
   And then, once you have one through three down, worry about maintaining proper positionals. Missing *every single* positional is less than a 5% dps loss - much less than mistakes in the aforementioned points.

# Abilities

Also more commonly known as your oGCD skills, these are the most important part of your rotation as a Dragoon. Once you have your GCD skeleton laid out, you overlay the oGCD rotation on top of it to form the full rotation.

## Buffs

![](https://xivapi.com/i/000000/000309_hr1.png)\
Lance Charge is a strong and frequent buff in your arsenal. You should always press this button as soon as it is available.

![](https://xivapi.com/i/002000/002585_hr1.png)\
Battle Litany is a powerful raid buff that enhances everyone’s critical hit rate. It has the longest cooldown out of your buff arsenal. Your goal should be to align it properly with the 2 minute bursts of your group.

![](https://xivapi.com/i/002000/002583_hr1.png)\
Geirskogul acts as both, the strongest buff in your kit and a damaging skill. When using it your enter Life of the Dragon for 20s, increasing your damage dealt by 15% and allowing you to use a variety of other skills. It should be used in conjunction with the other buffs because stacking them makes them stronger.

![](https://xivapi.com/i/000000/000304_hr1.png)\
Life Surge forces your next weaponskill to automatically land a critical hit. The effect does not apply to DoT effects, which means we tend to use it on either Heavens’ Thrust or Drakesbane. It does however affect every hit of AoE GCDs. We therefore use it on Coerthan Torment when facing three or more targets. \
Try to hold one charge for odd minute buff windows and two charges for even minute windows.

![](https://xivapi.com/i/020000/020710_hr1.png)\
Gemdraughts of Strength ("Pot" in short) can be used as an additional 30s damage buff in combat. Potency-wise, they are weaker than our other main buff options, but they exist in addition to them. These are in no way necessary to use in order to play this game and are simply an additional option should you enjoy fully min/maxing your damage. They are always optimal to use.

## Basic Buff Rotation

In general, the buffs will be used together every two minutes, with Lance Charge hitting the odd minutes as well. This creates a very simple pattern.

![Basic buff rotation](https://i.imgur.com/P23HkKR.png "Basic Buff Rotation")

&nbsp;

# Attacks

In addition to buffs, Dragoon is inundated with oGCD offensive abilities that form the core of the rotation outside the GCD backbone.

![High Jump](https://xivapi.com/i/002000/002591_hr1.png) 
![Mirage Dive](https://xivapi.com/i/002000/002588_hr1.png)\
High Jump is your most frequently used oGCD action. Use it every 30s to activate Dive Ready which allows the use of Mirage Dive. These skills formerly had major implications for our rotation, however these were removed with Dawntrail. Now, they're only used for damage but it is still important to use them on cooldown as much as possible.

\
![](https://xivapi.com/i/002000/002578_hr1.png) 
![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002075_hr1.tex?format=png)
Dragonfire Dive is a strong area-of-effect (AoE) skill with long cooldown. In single-target, you still use it whenever it is available since it does not stop doing damage when there is only one target. Rise of the Dragon is a follow-up that also deals AoE damage. It is however not a jump so it isn't subject to the same long animation lock.

\
![](https://xivapi.com/i/002000/002597_hr1.png)\
Wyrmwind Thrust is just a strong oGCD action you should use whenever possible. It has slight flexibility within its five-GCD window, so it is not as high priority as High Jump or Dragonfire Dive which have strict cooldowns. You ideally have this fall under buffs whenever possible without sacrificing charges.

# Life of the Dragon

After using Geirskogul, you will enter Life of the Dragon. Entering Life turns Geirskogul into Nastrond and unlocks the ability to use Stardiver. Over the following 20 seconds, you can use Nastrond and Stardiver once as well as Starcross as a follow-up to Stardiver. The exact placement of Nastrond and Stardiver in this 20 second window is flexible, just make sure to use both in time. 

\
![](https://xivapi.com/i/002000/002589_hr1.png)\
Nastrond is a strong line attack like Geirskogul. Make sure you position yourself accordingly to hit as many targets as possible in AoE situations.

\
![](https://xivapi.com/i/002000/002593_hr1.png)
![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002078_hr1.tex?format=png) \
Stardiver has an **excessively long** animation lock. Even with the lowest possible ping and perfect server ticks, you **will** clip when weaving this alongside any other action, so I strongly recommend you just do not try it. You can use it somewhat freely in the 20s life window but don't forget that it also has a follow-up in Starcross now. Unlike Stardiver, Starcross has a short animation lock like other oGCDs. It can easily be double-weaved. These are your strongest hits in burst so make sure they land inside of all the buffs.

## Extra Mobility

![](https://xivapi.com/i/002000/002577_hr1.png)\
Elusive Jump allows you to quickly and efficiently jump backwards out of trouble. The main use for this is re-engaging or disengaging from a boss for mechanics at the last second, or crossing long distances quickly. Don’t be afraid to use it, but do your best to avoid yeeting yourself off the stage. Elusive Jump now also provides the buff Enhanced Piercing Talon, increasing its potency in the next 15 seconds.
This expands the use-cases and can make it worth it to use it even in full uptime.

![](https://beta.xivapi.com/api/1/asset/ui/icon/002000/002598_hr1.tex?format=png)
Winged Glide is a dash to a targeted enemy with 2 charges. It does not deal damage so you can use it freely whenever you need to gapclose longer distances.

Managing the usage of Elusive Jump, Winged Glide, Dragonfire Dive and Stardiver (the latter two only during burst windows) properly allows you to keep perfect uptime through a multitude of mechanics.  

# The Opener

I know a lot of you have skipped ahead to this section, since you feel like you have a solid grasp on the fundamentals, and I think that is great! The primary use of the opener is to prepare your cooldown alignment for the rest of the encounter.

## Standard Opener - No PT
![Standard Opener - No PT](https://github.com/RhyTamok/XIVdrg/blob/main/DRG/Graphics/Openers/Dragoon_Standard_Opener_-_No_PT.png?raw=true)

We use our raidbuff Battle Litany after applying our DoT for party alignment, the rest of our buffs surround it with Geirskogul being used last to ensure its own potency is buffed by all our personal buffs and potential raidbuffs.

Using our buffs before or after Chaotic Spring makes little difference, favoring being used after due to the Wyrmwind Thrust at the end.

The timing of your buffs, High Jump & Dragonfire Dive will determine the position in which you will weave them for the rest of the fight, our other weaves will be used as filler when possible keeping mind of Life Surge and Wyrmwind Thrust.

The order of your oGCDs aside those mentioned above can often be freely swapped around for no loss. The opener aims to use higher potency oGCDs before those with lower potency and to use all of our oGCDs in the smallest possible time-frame which can increase damage dealt during party member raidbuffs.

## Alternative Opener: PT on Pull
![Standard Opener](https://github.com/RhyTamok/XIVdrg/blob/main/DRG/Graphics/Openers/Dragoon_Standard_Opener.png?raw=true)

\
**__Why should you use this opener?__**

Most fights will not allow us to start from within melee range, this means that we cannot start our GCD combo until the countdown finishes to prevent pulling the boss early. 

Using Piercing Talon will allow us to start rolling our GCD from outside of melee range, only causing the boss to be pulled after its 0.85s delay of dealing damage. 

Additionally, slightly delaying our normal opener due to adding the filler Piercing Talon will allow us to move back our Battle Litany which will result in favorable alignment for us in full uptime encounters. The delay will also significantly increase the chances of Geirskogul being used after party member raidbuffs have been applied.

The damage output from both openers are comparable, it is recommended to use Piercing Talon only when the boss does not allow you to enter melee range before combat, however it is very acceptable to stick with only one opener regardless.

❗Note: \
➜ It is recommended to add a very slight delay before pressing Geirskogul, we want to leave space for a double weave following the ability while making sure the Wyrmwind Thrust at the end of our opener is buffed by Life of the Dragon.

## Re-Openers

During fights or dungeons, you may find yourself encountering a situation where you are coming up against a boss with resources already in the tank. This shuffles your opener around and makes things harder to manage. \
In general you want to use your buffs first, followed by high priority oGCDs (mainly High Jump & Dragonfire Dive).\
Dawntrail changes have made reopeners significantly easier so they should look very similar to the regular opener in most cases.

# Multiple Target Situations

When you have more than one target to attack, your backbone GCD rotation changes.

## Two Targets

When up against two targets, you drop the Heavens’ Thrust combo and just double down on the Chaotic Spring combo, alternating targets to maintain both DoT effects.
Only Chaotic Spring has to be alternated between targets. Every other combo action can be used on either target.

![](https://i.imgur.com/VJplkd1.png)

&nbsp;

## Three or More Targets

Once you have three or more targets, you should cycle through your Coerthan Torment combo and eschew all others. It applies Power Surge for you and deals more damage against three targets than the one or two target rotation would, while also giving more frequent casts of Wyrmwind Thrust.

|                                                 |                                                 |                                                 |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/002000/002594_hr1.png) | ![](https://xivapi.com/i/002000/002586_hr1.png) | ![](https://xivapi.com/i/002000/002590_hr1.png) |

&nbsp;

You ideally want to keep all of your other AoE attacks rolling as often as possible in these situations. Keep in mind that Life Surge does work on Coerthan Torment to force a critical hit on every target all at once. Make sure to still use single-target actions like High Jump. It's free damage after all.

- - -

# Gearing Up

Due to the slight buff of Determination with Endwalker, it is now preferable to have slightly more Determination than Direct Hit. However, you do not want to neglect Direct Hit completely.

1. Item level - maximize Strength and Weapon Damage first.
2. Critical Hit Rate > Determination >= Direct Hit Rate >>>> Skill Speed

Dawntrail changes have made skill speed even more punishing for us. But you should still try to maximize main stat first.

Check out [the BiS page](/jobs/melee/dragoon/best-in-slot/) for the current BiS Dragoon gear sets.
