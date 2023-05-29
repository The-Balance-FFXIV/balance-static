---
title: Dragoon Basic Guide
card_header_image: /img/jobs/drg/basic.png
authors:
  - Balance-DRG-Staff
patch: "6.4"
lastmod: 2023-05-29T13:35:33.573Z
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
---
# Saving The Dragoon

## Overview

Dragoon is a relatively static melee DPS job with a high focus on weaving off-Global Cooldown (oGCD) actions between a rigid 10-hit sequence of Global Cooldown (GCD) actions. Burst windows can get hectic, and prioritizing the various skills you need to execute can become a rather significant hassle in some instances. Endwalker has doubled down on this by introducing the ability to utilize even more oGCD actions at regular intervals, as if we didn’t have enough already.

- - -

# The Brains Behind the Operation

**Eve Malqir** (Balmung) - the primary writer of this guide and Dragoon Mentor from [The Balance](https://discord.gg/thebalanceffxiv "The Balance Discord")\
Always open to answering questions! Please don't hesitate to contact me! :)\
Contact: **Evie#1153** on Discord | [Twitch](https://www.twitch.tv/evemalqir)

**Xiu Ye** (Midgardsormr) - combat theorycrafting buddy and Dragoon Mentor from [The Balance](https://discord.gg/thebalanceffxiv "The Balance Discord")\
Contact: **Xiu Ye#0560** on Discord | [Youtube](https://www.youtube.com/channel/UCNOO4Px0BQjgzqPD_DJv-kA) | [Twitch](https://www.twitch.tv/hopedrg)

**Rhy Tamok** (Phoenix) - Our resident cinnamon roll who loves to help and always goes out of his way to go above and beyond for the community. The most active Mentor in the questions channels.
Contact: **Rhy Tamok#0001** on Discord 

**Rubix Bob** (Cerberus) - Probably a bigger math nerd than Eve, Rubix created and maintains a wonderful rotation tool on his personal website and is similarly knowledgeable about the class.
Contact: **Rubixbob#5304** on Discord

- - -

# Weaponskills

Also known as your GCD actions, weaponskills form the backbone upon which you weave the meat of your rotation - your abilities (oGCD actions). These skills are strung together in specific orders to form combos which amplify the skill effects.

## The Chaotic Spring Combo

| **True Thrust >**                               | **Disembowel >**                                | **Chaotic Spring >**                            | **Wheeling Thrust >**                           | **Fang and Claw**                               |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://xivapi.com/i/000000/000317_hr1.png) | ![](https://xivapi.com/i/002000/002596_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) | ![](https://xivapi.com/i/002000/002582_hr1.png) |

&nbsp;\
This combo allows Disembowel to apply the Power Surge buff, amplifying your damage by 10% and Chaotic Spring to inflict a damage-over-time (DoT) effect that will keep constant damage rolling, even outside of your normal attacking skills.

## The Heavens' Thrust Combo

| **True Thrust >**                               | **Vorpal Thrust >**                             | **Heavens' Thrust >**                           | **Fang and Claw >**                             | **Wheeling Thrust**                             |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://xivapi.com/i/000000/000312_hr1.png) | ![](https://xivapi.com/i/002000/002595_hr1.png) | ![](https://xivapi.com/i/002000/002582_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) |

&nbsp;\
This combo just deals raw damage, with your highest individual weaponskill potency of Heavens’ Thrust’s 480. As it doesn’t apply any buffs, you want to make sure you only use this while Power Surge and Chaotic Spring are active already.

#### The Coerthan Torment Combo

| **Doom Spike >**                                | **Sonic Thrust >**                              | **Coerthan Torment**                            |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000306_hr1.png) | ![](https://xivapi.com/i/002000/002586_hr1.png) | ![](https://xivapi.com/i/002000/002590_hr1.png) |

&nbsp;\
This combo affects a line of enemies in front of you. It allows Sonic Thrust to apply the Power Surge buff, amplifying your damage by 10%. This combo is only worth using when you are faced with three or more enemies in combat that can all be hit by each skill.

#### Draconian Fire

Upon properly completing any of the above combos, you will gain the buff Draconian Fire. This buff augments the next True Thrust or Doom Spike you use into Raiden Thrust or Draconian Fury, respectively. These weaponskills combo the exact same as their unbuffed versions. They also give you one charge of Firstminds’ Focus, which is discussed in more detail later.

| **True Thrust >**                               | **Raiden Thrust >**                             |
| ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000310_hr1.png) | ![](https://xivapi.com/i/002000/002592_hr1.png) |

&nbsp;

| **Doom Spike >**                                | **Draconian Fury**                              |
| ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/000000/000306_hr1.png) | ![](https://xivapi.com/i/002000/002594_hr1.png) |

&nbsp;

#### Piercing Talon

While you always want to maintain your uptime on the above combos as much as possible, occasionally an encounter may push you off for an extended period of time. Rather than doing nothing, you can utilize Piercing Talon. It doesn’t break *any* of the above combos or negates your Draconian Fire. This is only worth doing if you would be unable to re-engage before your GCD spin completes.

![](https://xivapi.com/i/000000/000315_hr1.png)

## Basic Rotation

![](https://cdn.discordapp.com/attachments/877670675425394709/1022227736019865731/drg_rotation.png)


&nbsp;\
Putting the above information to work, in a single-target encounter, our rotation will simply be the Chaotic Spring Combo followed by the Heavens’ Thrust Combo. We repeat this infinitely, assuming nothing interrupts our rotation.

#### Mistakes

Everyone makes them. In attempting to follow this rotation to the best of your ability, if you make a mistake and press the wrong second hit, **commit to the mistake**. Restarting the combo is a larger loss than just continuing the incorrect combo string. After the mistaken combo, just return to the alternating rotation. Do not attempt to course-correct back into the old order.

If you accidentally use an uncomboed GCD (and therefore break your combo) you have to start a fresh combo. Look at your remaining time on the Power Surge buff. If it is still high enough you want to start a Heavens' Thrust combo. Move on with a Chaotic Spring combo otherweise.

- - -

#### Wyrmwind Thrust

Every time you land Raiden Thrust or Draconian Fury, you gain one charge of your Firstminds’ Focus. Two charges allows you to activate Wyrmwind Thrust. Because we don’t start fights with Draconian Fire, the first charge comes during the Heavens’ Thrust combo and the second during the following Chaotic Spring combo. From there, you will always be using Wyrmwind Thrust during your
 Chaotic Spring combo, barring any rotational errors you encounter along the way. When it's ready to to be used, you **must** press Wyrmwind Thrust **before** your next Raiden Thrust or Draconian Fury, otherwise you will **not** gain the charge of Firstminds’ Focus, leading to a drastic loss in damage.

![](https://xivapi.com/i/002000/002597_hr1.png)

- - -

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
   And then, once you have one through three down, worry about maintaining proper positionals. Missing *every single* positional is only a 5% dps loss - much less than mistakes in the aforementioned points.

- - -

# Abilities

Also more commonly known as your oGCD skills, these are the most important part of your rotation as a Dragoon. Once you have your GCD skeleton laid out, you overlay the oGCD rotation on top of it to form the full rotation.

## Buffs

![](https://xivapi.com/i/000000/000309_hr1.png)\
Lance Charge is the strongest buff in your arsenal.\
You should always press this button as soon as it is available.

![](https://xivapi.com/i/002000/002587_hr1.png)\
Dragon Sight gives the same damage boost as Lance Charge, but less frequently. To maximize its effectiveness, you also need to target a party member (usually the fellow melee DPS: Reaper, Samurai, Ninja or Monk) to give them a damage buff as well. There are a few different ways to handle this and are mentioned further in the guide.

![](https://xivapi.com/i/002000/002585_hr1.png)\
Battle Litany is a powerful raid buff that enhances everyone’s critical hit rate. As it shares a timer with Dragon Sight, the two should generally be paired together, with Battle Litany coming second due to its shortened duration.

![](https://xivapi.com/i/000000/000304_hr1.png)\
Life Surge forces your next weaponskill to automatically land a critical hit. The effect does not apply to DoT effects, which means we tend to use it on either Heavens’ Thrust or the fifth hit of our single-target combos, assuming we hit the positional and every buff is up. It does however affect every hit of AoE GCDs. We therefore use it on Coerthan Torment when facing three or more targets. \
Try to hold a charge for buff windows as long as you don't overcap both charges.

![](https://xivapi.com/i/020000/020710_hr1.png)\
Tinctures of Strength can be used as an additional 30s damage buff in combat. Potency-wise, they are weaker than our other main buff options, but they exist in addition to them. These are in no way necessary to use in order to play this game and are simply an additional option should you enjoy fully min/maxing your damage. They are always optimal to use.

## Basic Buff Rotation

In general, the buffs will be used together every two minutes, with Lance Charge hitting the odd minutes as well. This creates a very simple pattern.

![Basic buff rotation](https://i.imgur.com/wCfUtSr.png "Basic Buff Rotation")

&nbsp;

- - -

## Dragon Sight

Dragon Sight is a pain in the ass. We all know it. It’s not going anywhere, though, so let us just get that out of the way and move on to how to mitigate this logistical nightmare of a party-targeted ability. You could theoretically use it without a target but this should never be a consideration as the 5% buff will simply be lost. *You do **not** get a 15% buff this way!*

This being said, the best ways to handle using it vary based on playstyle.

If you play on mouse/keyboard, we recommend using a macro.
If you play on a gamepad/controller, you can simply use soft targeting (up/down on d-pad), dropping all reliance on macros.

Different macro options are listed below, along with pros and cons.

**Mouseover Macro**

```/merror
/merror off
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/micon "Dragon Sight" 
```

This will simply place the tether onto your mouseover target. Just hover your mouse over the proper player in the party list and press the button and you cast it on the proper player. An optimal macro to use with mouse and keyboard.

**One Specific Ally**

```/merror
/merror off
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/micon "Dragon Sight"
```

Specifically targets whoever is at position 2. The number or party list can be altered as needed. Rather inflexible in use, but very consistent in execution.

**Mixed Macro**

```/merror
/merror off
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <mo>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/ac "Dragon Sight" <2>
/micon "Dragon Sight"
```

This mixes the aforementioned macros to create a macro that would prioritize your mouseover target, but default to your preferred party list position/member. Useful if you don’t trust your ability to mouseover, but you should really just practice that and shift to the mouseover one eventually instead.

- - -

# Attacks

In addition to buffs, Dragoon is inundated with oGCD offensive abilities that form the core of the rotation outside the GCD backbone.

![High Jump](https://xivapi.com/i/002000/002591_hr1.png)
![Mirage Dive](https://xivapi.com/i/002000/002588_hr1.png)\
High Jump is your most frequently used oGCD action. Use it every 30s to activate Dive Ready which allows the use of Mirage Dive. Mirage Dive strengthens the gaze of the First Brood, unlocking your Life of the Dragon window, our strongest burst window.

\
![](https://xivapi.com/i/002000/002580_hr1.png)\
Spineshatter Dive is a simple oGCD damage skill that simultaneously acts as a quick and effective means for movement. Now with two charges, some encounters may find interesting uses for it where you can hold a single charge for a period of rapid boss movement to chase more accurately and efficiently than Elusive Jump allows.

\
![](https://xivapi.com/i/002000/002578_hr1.png)\
Dragonfire Dive is the biggest area-of-effect (AoE) skill we have access to, besides Stardiver. In single-target, you still use it whenever it is available since it does not stop doing damage when there is only one target.

\
![](https://xivapi.com/i/002000/002597_hr1.png)\
Wyrmwind Thrust is just a strong oGCD action you should use whenever possible. It has slight flexibility within its five-GCD window, so it is not as high priority as High Jump or Dragonfire Dive which have strict cooldowns. You ideally have this fall under buffs whenever possible without sacrificing charges.

\
![](https://xivapi.com/i/002000/002583_hr1.png)\
Geirskogul and its relationship with High Jump form the basis of the overall oGCD rotation for Dragoon. This dictates when and where you will enter your Life cycles and how well those cycles will sync up with your above-mentioned buff rotations. As you will see, in the opener, we use Geirskogul before High Jump so that we always skip entering Life during the un-buffed actions, and instead save it for our one-minute buff windows.

# Life of the Dragon

After using a pair of Mirage Dives, you will enter Life of the Dragon on your next cast of Geirskogul that deals damage. Entering Life turns Geirskogul into Nastrond and unlocks the ability to use Stardiver. Over the following 30 seconds, you can use three Nastronds and one Stardiver, but beyond that they can be shifted somewhat freely to adjust to mechanics and buffs.

\
![](https://xivapi.com/i/002000/002589_hr1.png)\
Nastrond is a strong line attack that is essentially a direct upgrade to Geirskogul. You should just burn it as soon as it’s available when Life of the Dragon is active and aim to never use fewer than three within one cycle.

\
![](https://xivapi.com/i/002000/002593_hr1.png)\
Stardiver has an **excessively long** animation lock. Even with the lowest possible ping and perfect server ticks, you **will** clip when weaving this alongside any other action, so I strongly recommend you just do not try it. That said, you always have a full 30 second window of leeway to use it, so pick the best possible spot. It is our single strongest hit at 620 potency, so it should still take priority during buffs over *anything* else.

## Buff Windows x Life Cycle

To properly explain how the Life Cycles line up with the buffs, I will present a simplified version of our oGCD rotation as it lines up in general. We receive the second eye between buff windows, but by intentionally using Geirskogul before High Jump, we postpone the Life of the Dragon entry by 30 seconds. This is commonly called a "life delay" and is done to align our life windows with our buffs.

If your target would die before you can fully use this delayed life then you want to wait to use Geirskogul until after High Jump and Mirage Dive to enter life right away. Remember: Additional uses > Buff alignment.

![](/img/jobs/drg/drgbuffscycle.png)

## Extra Mobility

![](https://xivapi.com/i/002000/002577_hr1.png)\
Elusive Jump allows you to quickly and efficiently jump backwards out of trouble. The only use for this is re-engaging or disengaging from a boss for mechanics at the last second, or crossing long distances quickly. Don’t be afraid to use it, but do your best to avoid yeeting yourself off the stage.

# The Opener

I know a lot of you have skipped ahead to this section, since you feel like you have a solid grasp on the fundamentals, and I think that is great! The primary use of the opener is to prepare your cooldown alignment for the rest of the encounter. With our new job design, it is possible that we will actually have fight-specific openers down the stretch.

![](/img/jobs/drg/drg_ew_opener.png)

In certain encounters, we may shuffle the location of certain buttons in order to enable different things in regards to the particular encounter’s timing. Early Spineshatter Dive may be useful for some encounters for movement, while early High Jump may be useful for others to eke out an additional use prior to phasing.

## Re-Openers

During fights or dungeons, you may find yourself encountering a situation where you are coming up against a boss with resources already in the tank. This shuffles your opener around and makes things harder to manage. \
In general you want to use your buffs first, followed by high priority oGCDs (mainly Geirskogul and High Jump). Double weaving with jumps is required in reopeners to get everything under buffs. 

- - -

# Multiple Target Situations

When you have more than one target to attack, your backbone GCD rotation changes.

## Two Targets

When up against two targets, you drop the Heavens’ Thrust combo and just double down on the Chaotic Spring combo, alternating targets to maintain both DoT effects.
Only Chaotic Spring has to be alternated between targets. Every other combo action can be used on either target.

| &nbsp;                                          | &nbsp;                                          | Target One                                      | &nbsp;                                          | &nbsp;                                          | &nbsp;                                          | &nbsp;                                          | Target Two                                      | &nbsp;                                          | &nbsp;                                          |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/002000/002592_hr1.png) | ![](https://xivapi.com/i/000000/000317_hr1.png) | ![](https://xivapi.com/i/002000/002596_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) | ![](https://xivapi.com/i/002000/002582_hr1.png) | ![](https://xivapi.com/i/002000/002592_hr1.png) | ![](https://xivapi.com/i/000000/000317_hr1.png) | ![](https://xivapi.com/i/002000/002596_hr1.png) | ![](https://xivapi.com/i/002000/002584_hr1.png) | ![](https://xivapi.com/i/002000/002582_hr1.png) |

&nbsp;

## Three or More Targets

Once you have three or more targets, you should cycle through your Coerthan Torment combo and eschew all others. It applies Power Surge for you and deals more damage against three targets than the one or two target rotation would, while also giving more frequent casts of Wyrmwind Thrust.

|                                                 |                                                 |                                                 |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](https://xivapi.com/i/002000/002594_hr1.png) | ![](https://xivapi.com/i/002000/002586_hr1.png) | ![](https://xivapi.com/i/002000/002590_hr1.png) |

&nbsp;

You ideally want to keep all of your other AoE attacks rolling as often as possible in these situations. Keep in mind that Life Surge does work on Coerthan Torment to force a critical hit on every target all at once. Make sure to prioritize High Jump the same as always to get into Life of the Dragon quickly, as Nastrond and Stardiver are two of your strongest multi-target actions.

- - -

# Gearing Up

Due to the slight buff of Determination with Endwalker, it is now preferable to have slightly more Determination than Direct Hit. However, you do not want to neglect Direct Hit completely.

1. Item level - maximize Strength and Weapon Damage first.
2. Critical Hit Rate > Determination = Direct Hit Rate > Skill Speed

We want to go as slow as possible, but reducing Skill Speed does not matter nearly as much as maximizing your main stat.

We recommend you use the [gear comparison tool](http://bit.ly/DRG-Gear-EW) to actually get a better idea of how melds affect your DPS!

Check out [the BiS page](/jobs/melee/dragoon/best-in-slot/) for the current BiS Dragoon gear sets.