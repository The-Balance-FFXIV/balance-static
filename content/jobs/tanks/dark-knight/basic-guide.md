---
title: Dark Knight Basic Guide
card_header_image: /img/jobs/drk/basic.png
authors:
  - nikroulah
  - silaqui-amakiir
  - violet-stardust
patch: "7.2"
lastmod: 2025-05-18T19:58:19.151Z
changelog:
  - date: 2021-10-27T17:33:50.039Z
    message: Added
  - date: 2022-03-15T01:19:29.210Z
    message: (Minor) updates for 6.05
  - date: 2022-04-22T15:32:55.904Z
    message: (Preliminary) Updates for 6.1
  - date: 2022-09-19T08:49:40.968Z
    message: Updates for 6.21
  - date: 2023-01-18T23:02:37.977Z
    message: Opener update and patch bump to 6.3.
  - date: 2024-07-28T10:51:24.137Z
    message: Updates for 7.0
  - date: 2024-09-25T22:19:23.129Z
    message: Add section on breaking pre-pull TBN on any boss.
  - date: 2025-03-24T21:58:44.706Z
    message: Updates for 7.2, and some minor corrections/fixes.
  - date: 2025-04-23T22:31:23.555Z
    message: Minor updates to the opener, and some small stylistic updates.
  - date: 2025-05-18T19:58:20.463Z
    message: Minor updates to reflect hotfixed Shadowstride application delay.
tags: []
---
# Introduction to Dark Knight

## The useless pre-Endwalker guide by nikroulah#1605 (now updated for 6.x and 7.x).

- - -

# Introduction

Dark Knight (DRK) is one of the four tanks available in Final Fantasy XIV: Dawntrail. Its rotation features large bursts of damage, accompanied by spikes in actions per minute (APM) and requires managing both MP and a Blood Gauge, putting many hard-hitting attacks into party raid buff windows. It also has access to one of the most powerful single-target mitigation abilities available in **The Blackest Night** (TBN).

The purpose of this guide is to give an overview of Dark Knight's abilities and to allow you to hit the ground running when picking up Dark Knight, as well as giving a peek into optimization in high-end content.

- - -

# Skills and Abilities Overview

Skills and abilities can be found on [this page.](/jobs/tanks/dark-knight/skills-overview/)

- - -

# Dark Knight Opener

Goals for DRK openers include:

* Use as many big hits and spend as much MP as possible inside potion and raid buff windows (which typically come up around the third or fourth GCD). This means that most skills will be delayed until this point.
* Get **Living Shadow** out early enough that its attacks fully fit into buffs. Its long spawn animation and the fact that it updates with buffs in real time means that it is best used before buffs come out, unlike skills that apply damage immediately.
* Use an **Edge of Shadow** to apply Darkside as early as possible.
* Avoid overcapping on MP.

## Standard Opener

![7.2 Standard Dark Knight Opener](/img/drk_opener_7_2.png "Standard")

> Text version: <br/>
> Prepull **The Blackest Night** (-3) <br/> 
> **Unmend** (-1), Potion, **Edge of Shadow**, <br/> 
> **Hard Slash** + **Living Shadow**, <br/>
> **Syphon Strike**, <br/>
> **Souleater** + **Delirium**, <br/>
> **Disesteem** + **Salted Earth** + **Edge of Shadow**, <br/>
> Scarlet Delirium + Shadowbringer + **Edge of Shadow**, <br/>
> **Comeuppance** + **Carve and Spit** + **Edge of Shadow**, <br/>
> **Torcleaver** + **Shadowbringer** + **Edge of Shadow**, <br/>
> **Bloodspiller** + **Salt and Darkness**

The potion used is whatever the current tier's Strength potion is (as of the time of writing, it is the Grade 3 Gemdraught of Strength HQ).

#### Opener notes
* **Unmend** is used to delay the opener slightly to account for raid buff application time. Use it whether or not you are pulling.
* Early use of **Disesteem** (before the **Torcleaver** combo) avoids some minor MP overcap.

### Optional Modifications
* If the prepull TBN will not break, it can be left out for a small MP loss. This does not change the rest of the opener substantially, although the last **Edge of Shadow** may get pushed further back.
* **Shadowstride** can be used to pull instead of **Unmend**, and pulling with **Hard Slash** is also viable if the boss starts in melee range, but each of these options requires adding an extra **Hard Slash** before **Disesteem** to ensure that the burst fits into late-applied buffs. However, if you are the pulling tank, this can make positioning harder. There is more detail on this opener and its benefits and potential drawbacks in [a section in the advanced guide.](/jobs/tanks/dark-knight/advanced-guide/#opening-with-shadowstride)
* If you cannot fit the **Edge of Shadow** before **Hard Slash** without clipping due to, for example, the boss being far away, move it to after **Hard Slash**. I.e., **Unmend** -> Potion -> **Hard Slash** -> **Edge of Shadow** -> **Living Shadow**.

- - -

# Rotation

## Single-Target Rotation

Dark Knight’s rotation follows a simple priority system after the opener.
Burst windows after the opener will look much the same as the opener, except that not all bursts will have Salted Earth.

For GCDs:
* Use **Disesteem** and the **Torcleaver** combo (**Scarlet Delirium**, **Comeuppance**, **Torcleaver**) when under buffs.
* Use **Bloodspiller** under raid buffs, or to prevent overcapping on blood.
* Use the **Souleater** Combo (**Hard Slash**, **Syphon Strike**, **Souleater**) otherwise.

For oGCDs:
* Use **Edge of Shadow** under raid buffs, or to prevent overcapping on MP.
* Hold both charges of **Shadowbringer** for 2-minute buffs.
* Use all other damaging/damage-buffing oGCDs (**Salted Earth**, **Delirium**, **Carve and Spit**, etc) on cooldown.

## AoE (Multi-Target Rotation)

At levels 94 and higher, DRK switches to using its AoE rotation for **3 or more targets**. Below level 94, the Stalwart Soul combo is a slight gain over the **Souleater** combo on 2 or more targets, but other skills are unchanged.
The AoE rotation is another simple priority system, replacing each single-target ability with its AoE counterpart.

For GCDs:
* Replace the **Torcleaver** combo with **Impalement**.
* Replace **Bloodspiller** with **Quietus**
* Replace **Souleater** combo GCDs with **Stalwart Soul** combo GCDs (**Unleash**, **Stalwart Soul**)

For oGCDs:
* Replace **Edge of Shadow** with **Flood of Shadow**
* Replace **Carve and Spit** with **Abyssal Drain**


## Pooling Resources for Raid Buffs

**Edge of Shadow** and **Bloodspiller** can be delayed without loss, as long as MP and Blood Gauge do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come every 2 minutes.

Dark Knight generates around 10800 MP per minute, from a combination of **Syphon Strike**, **Carve and Spit**, **Delirium**, and natural MP regen ticks (which grant 200 MP every three seconds in combat, or 600 MP every three seconds if out of combat).
This translates to 3.6 MP spenders per minute, or 7.2 spenders per 2 minutes.
Since at least 2 **Edge/Flood of Shadow** are needed in the odd minutes to maintain Darkside, this leaves at most 5.2 spenders for every even minute, when buffs come out.
Even going into burst at full MP and using the MP generated from **Carve and Spit** and Delirium, however, we do not reach 15000 MP.

To reach 5 **Edge/Flood of Shadow** in buffs, we use **The Blackest Night (TBN)** earlier, outside of buffs, in order to store a Dark Arts, essentially banking 3000 MP for later.
With a stored Dark Arts from the previous minute, 9000+ MP, and the MP from Delirium and **Carve and Spit**, 5 **Edge/Flood of Shadow** within buffs are possible.

This means that damage-optimal MP spending is as follows:
* 5 **Edge of Shadow** in each buff window (except the opener, where one Edge of Shadow is used outside of buffs to get Darkside).
* Three MP spenders in odd minutes, where the last one is **The Blackest Night**, with the Dark Arts from this being held into the next buff window.

Note that the first two MP spenders in odd minutes can freely be **The Blackest Night (TBN)** as well, with their Dark Arts then being used before the next TBN.
Similarly, TBN can be used during buffs without losing damage as long as the Dark Arts it generates can be spent on **Edge/Flood of Shadow** before the buff window ends.

Similarly, though more simply, entering buffs (when Delirium is pressed) with 70 or less Blood Gauge will ensure that you do not overcap on Blood Gauge.
This allows for using 1-2 **Bloodspillers** during every 2-minute raid buff window, and it is best to have the Blood Gauge as high as possible (up to 70) when entering Delirium.

## Rotation Video

{{< youtube -qDvEZQU9dQ >}}

- - -

# Helpful Macros

## The Blackest Night (mouse-over)

```
/merror off
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/ac "The Blackest Night" <mo>
/micon "The Blackest Night"
```

## Oblation (mouse-over)

```
/merror off
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/ac "Oblation" <mo>
/micon "Oblation"
```

## Shirk (assumes cotank is in party slot two)

```
/merror off
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/ac "Shirk" <2>
/micon "Shirk" 
```

## Why are there so many repeated lines?

FFXIV macros do not queue, so hitting a macro while in animation lock from another action will cause the macro to not go off. Since macros execute lines sequentially at around one line per frame, repeating the `/action` lines simulates mashing the ability every frame for ~15 frames and gives the macro a semblance of queuing.

## Mouse-over? <2>?

`<mo>` will attempt to target whatever your mouse cursor is currently hovering over when that macro line is reached, whether it be their physical model or a name on your party list.

`<2>` targets the second player on your party list, which is the other tank by default in eight-player content.

Note that for the mouse-over macros, if you opt to use them, we recommend having them *in addition to* the normal ability keybind. The normal ability keybind will be easier to use on yourself, as well as being more reliable than the macro, since macros do not properly queue, as discussed above.

- - -

# Stats and Itemization

Before obtaining best-in-slot gear, pick gear and meld according to stat priority on each piece of gear. Best-in-slot sets can be found on the [BiS page](/jobs/tanks/dark-knight/best-in-slot/) or in the Balance discord.

Because of stat tiering, it may not always be obvious how two pieces of gear compare.
Using a gear calculator tool is recommended --- see, for example, [xivgearapp](https://xivgear.app).

Note that in any sort of gear calculator, simulations make some assumptions (e.g., a common assumption is that of full uptime, single-target fights).
They will still generally give reliable results when used to compare gear with large differences, but, especially when comparing gearsets with different speeds, it is good to be aware of the assumptions being made and whether they apply to your use case.

**Highest priority**

* Item Level
  * Affects Strength and Weapon Damage (for weapons), as well as total substat amount 
  * Significantly affects all damage dealt
  * Prioritize over getting better substats
* Critical Hit
  * Affects critical chance + critical damage
  * Often naturally capped on BiS gear pieces
  * Priority meld on all gear (unless number turns red when melding)
* Skill Speed
  * Reduces weaponskill recast time
  * Meld only to reach preferred GCD speed (commonly anywhere from 2.40s to 2.50s)
    (see [akhmorning](https://www.akhmorning.com/allagan-studies/stats/speed/) or [xivgear.app](https://xivgear.app/math/?page=math%7Csks) for precise skill speed tiers)
* Direct Hit
  * Affects only direct hit chance
  * Meld remaining slots (filler stat)
* Determination
  * Increases damage dealt
  * Sometimes used in one slot due to stat tiering
* Tenacity
  * Increases damage dealt and reduces damage taken
  * Rarely melded due to weak scaling and minimal mitigation

**Lowest priority**

## Choosing your skill speed

The Dark Knight rotation is functional at almost all skill speeds, although certain speeds keep oGCD abilities better aligned with your GCD. In particular, 2.40 and 2.50 maintain perfect alignment for 60s cooldown oGCDs.

Outside of high-end optimization, choice of skill speed has little impact on the Dark Knight rotation, and can be chosen for comfort. At certain speeds, 90-second cooldowns like **Salted Earth** must be drifted or clipped while the same is true of 60-second cooldowns at other speeds.

In optimization, each encounter must be considered separately to determine what GCDs are gained or lost by different skill speeds, as well as lining up the GCD with any melee disengages. In general, the slowest speed that doesn’t lose any major GCDs within a phase will be the strongest choice, as much of Dark Knight's damage does not scale with speed.

If in doubt, or you're not sure what any of this means, we recommend 2.50. It will likely be more forgiving if you're new to the job or have very high ping, as well as simming very slightly better. If you like Dark Knight a lot or want to branch out, then we recommend trying 2.46 too, which many find a very comfortable speed, and deciding for yourself what's comfiest for you.

- - -

# Dungeons

## Keeping Aggro

Turn on **Grit** and never turn it off. As long as you keep hitting the mobs, you will have aggro on them. In multi-target situations, use AoE so that you can keep aggro on all mobs.

## Pulling Mobs

There are a variety of ways to ensure you pull all of the mobs in a pack quickly and reliably, without stopping on your way to the next pack of mobs:

* Run up to the mobs so they see and run to you and use an AoE combo GCD once they are in range to secure aggro.
* Tab through the mobs and use **Unmend** while weaving any damaging oGCDs or Provoke.

Try to position the mobs so that they are in a tight clump: this lets you, your DPS, and your healers use their AoE damage more effectively. Pull melee enemies onto ranged enemies so that the ranged enemies are also in the clump. Alternatively, drag mobs around a corner so the ranged enemies are forced to run next to you in order to attack.

## Mitigation

Cycle through your mitigation on trash pulls (they hurt more than bosses). Rather than using it all at once, keeping something up at all times can help your healer keep you alive more easily. More powerful mitigation cooldowns like **Rampart**, **Shadowed Vigil**, and **Arm’s Length** can be paired with weaker ones like **Reprisal** or **Oblation**. **The Blackest Night** is one of your most powerful mitigation tools and can be used liberally (at least once per mob pack) once unlocked.

**Living Dead** can be extremely strong in dungeons, as a single AoE GCD will often heal you to full after Walking Dead is activated. However, an inexperienced healer may heal too much during **Living Dead**, preventing Walking Dead from activating. It may help to let your healers know ahead of time where you plan to use **Living Dead**, to avoid this problem.

- - -

# Frequently Asked Questions

#### Can I use all my MP on The Blackest Night (TBN)?

Up to 3 (4 with careful timing, by using TBN during a buff window) MP spenders per 2 minutes can be TBN without losing any damage --- all three spenders in the odd-numbered minutes, plus one in the even-numbered minute.
Note that the damage loss from using TBN more than this is smaller than the damage loss from dying!
It is always better to lose damage in buffs in order to stay alive, and sometimes even to reduce the amount of healing needed.

- - -

# Advanced Gameplay

This section assumes that you are comfortable with the entirety of the Dark Knight kit as well as the basic rotation outlined above. If you blindly try to do these optimizations without grasping the fundamentals, it is likely to be detrimental to your play, rather than improve it.

While this section will go over some optimizations for Dark Knight, for those looking for more, we also have an [advanced guide](/jobs/tanks/dark-knight/advanced-guide) with many other notes and discussions of nuance.

## Optimizing Raid Buffs Further

Moving MP with **The Blackest Night**:

The standard rotation allows four **Edges of Shadow** to be used in each raid buff window without any further adjustments. However, since raid buffs windows happen every two minutes, it is beneficial to use **The Blackest Night** during odd minutes to get Dark Arts afterwards, which allows five **Edges of Shadow** to be used in the next even-minute buff window without overcapping MP.

#### List of Raid Buffs

| Job | Icon                                                                                                                                                                                   | Name             | Effect                                            | Cooldown |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------- | -------- |
| NIN | ![icon](https://xivapi.com/i/012000/012920_hr1.png)                                                                                                                                    | Dokumori              | Target takes 5% more damage <br>20s duration      | 120s     |
| DRG | ![icon](https://xivapi.com/i/012000/012578_hr1.png)                                                                                                                                    | Battle Litany    | Critical rate increased by 10% <br>20s duration   | 120s     |
| MNK | ![icon](https://xivapi.com/i/012000/012532_hr1.png)                                                                                                                                    | Brotherhood      | 5% damage increase <br>20s duration               | 120s     |
| RPR | ![icon](https://xivapi.com/i/012000/012936_hr1.png)                                                                                                                                    | Arcane Circle    | 3% damage increase <br>20s duration               | 120s     |
| DNC | ![icon](https://xivapi.com/i/013000/013709_hr1.png)                                                                                                                                    | Technical Finish | 5% damage increase <br>20s duration               | 120s     |
| BRD | ![icon](https://xivapi.com/i/012000/012601_hr1.png)                                                                                                                                    | Battle Voice     | Direct hit rate increased by 20% <br>20s duration | 120s     |
| BRD | ![icon](https://xivapi.com/i/012000/012622_hr1.png)                                                                                                                                    | Radiant Finale     | 6% damage increase (2% in opener) <br>20s duration | 120s     |
| SMN | ![icon](https://xivapi.com/i/012000/012692_hr1.png)                                                                                                                                    | Searing Light    | 5% damage increase <br>20s duration               | 120s     |
| RDM | ![icon](https://xivapi.com/i/013000/013410_hr1.png) | Embolden         | 5% damage increase <br> 20s duration              | 120s     |
| PCT | ![icon](https://xivapi.com/i/013000/013808_hr1.png) | Starry Muse         | 5% damage increase <br> 20s duration              | 120s     |
| SCH | ![icon](https://xivapi.com/i/012000/012809_hr1.png)                                                                                                                                    | Chain Stratagem  | +10% critical rate on target <br>20s duration     | 120s     |
| AST | ![icon](https://xivapi.com/i/013000/013245_hr1.png)                                                                                                                                    | Divination       | 6% damage increase <br>20s duration               | 120s     |
| AST | Various                                                                                                                                                                                | Cards            | Target gets 6% damage increase <br>15s duration  | 60s      |

## Breaking a pre-pull The Blackest Night on any boss

In some fights, the boss' auto-attacks are too weak to break **The Blackest Night (TBN)** used at -3s in the opener. In many cases, you can leave TBN out of the opener with no loss, and just delay the last **Edge of Shadow** in the opener until you have enough MP.

However, if you want to ensure that you get Dark Arts at the beginning of the fight even for bosses with weak auto-attacks, you can make a separate gear set with lower Vitality to apply your TBN, and switch back to your normal gear set after application. Since TBN's shield scales with your max HP at the time of cast, this will make the shield smaller, allowing it to break more easily.

This is a very minor DPS gain on average, and so is only recommended for optimization, not for progression.

To do this, do the following:
1. Switch into a gear set with lower Vitality (e.g. your current gear with some of the pieces taken off)
1. Apply TBN to yourself (at -3s)
1. Switch your gear back to the gear you intend to do the fight on
1. Execute your opener like normal 

You can still use this technique if you are not the pulling tank, but will need to coordinate the timing of their gearset swap with your use of TBN on them.

#### Macro

You can use macros to make this gear swap easier. For example, this macro will apply TBN to yourself, and then change gear into gearset 1. This can be used at -3s and presumes you're already in your lower Vitality gearset.

```
/merror off
/ac "The Blackest Night"
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/gearset change 1
/micon "The Blackest Night"
```

## Fight-specific optimization

For discussion around fight-specific optimization, please visit [the #drk_encounter channel](https://discord.com/channels/277897135515762698/1264618936297848926) in the Balance discord and view the pins to see any up-to-date information on current encounters.