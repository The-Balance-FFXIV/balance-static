---
title: Basic Guide
card_header_image: /img/jobs/drk/basic.png
authors:
  - silaqui-amakiir
  - violet-stardust
patch: "7.4"
lastmod: 2026-01-03T17:17:45.939Z
changelog:
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
  - date: 2025-09-12T22:04:48.723Z
    message: Restructured raid buff section, added a section about TBN, and added
      section detailing MP usage.
  - date: 2025-12-16T18:20:09.098Z
    message: 7.4 updates
  - date: 2026-01-03T17:17:48.119Z
    message: Added rotation infographic.
tags: []
---
# Introduction

Dark Knight (DRK) is one of the four tanks available in Final Fantasy XIV: Dawntrail. Its rotation features large bursts of damage, accompanied by spikes in actions per minute (APM) and requires managing both MP and a Blood Gauge, putting many hard-hitting attacks into party raid buff windows. It also has access to one of the most powerful single-target mitigation abilities available in **The Blackest Night** (**TBN**).

The purpose of this guide is to give an overview of Dark Knight's abilities and to allow you to hit the ground running when picking up Dark Knight, as well as giving a peek into optimization in high-end conte

## Skills and Abilities Overview

Skills and abilities can be found on [this page.](/jobs/tanks/dark-knight/skills-overview/)

# Dark Knight Opener

Goals for Dark Knight openers include:

* Use as many big hits and spend as much MP as possible inside potion and raid buff windows (which typically come up around the third or fourth GCD). This means that most skills will be delayed until this point.
* Get **Living Shadow** out early enough that its attacks fully fit into buffs. Its long spawn animation and the fact that it updates with buffs in real time means that it is best used before buffs come out, unlike skills that apply damage immediately.
* Use an **Edge of Shadow** to apply Darkside as early as possible.
* Avoid overcapping on MP.

## Standard Opener

![7.2 Standard Dark Knight Opener](/img/drk_opener_7_2.png "Standard")

</br>

The potion used is whatever the current tier's Strength potion is (as of the time of writing, it is the Grade 3 Gemdraught of Strength HQ).

**Unmend** is used to delay the opener slightly to account for raid buff application time, as well as to start our GCD rolling as early as possible. Use it whether or not you are pulling.

### Optional Modifications

* If the prepull TBN will not break, it can be left out for a small MP loss, delaying the last **Edge of Shadow** slightly. Use it as soon as you can without clipping your GCD.
* **Shadowstride** can be used to pull instead of **Unmend**, and pulling with **Hard Slash** is also viable if the boss starts in melee range, but each of these options requires adding an extra **Hard Slash** before **Disesteem** to ensure that the burst fits into late-applied buffs. However, if you are the pulling tank, this can make positioning harder. There is more detail on this opener and its benefits and potential drawbacks in [a section in the advanced guide](/jobs/tanks/dark-knight/advanced-guide/#opening-with-shadowstride), and we'd recommend only using this opener if you're aware of the trade-offs.
* If you cannot fit the **Edge of Shadow** before **Hard Slash** without clipping due to, for example, the boss being far away, move it to after **Hard Slash**. I.e., **Unmend** -> Potion -> **Hard Slash** -> **Edge of Shadow** -> **Living Shadow**.

# Rotation

## Rotation Fundamentals Infographic

![Rotation fundamentals infographic](/img/jobs/drk/darkknightrotation.png "Rotation fundamentals")

## Single-Target Rotation

Dark Knight's rotation follows a simple priority system after the opener.
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

## MP Usage and Darkside Management

Dark Knight also interacts with Magic Points (MP), which for Dark Knight acts as a second gauge alongside the Blood Gauge. MP can be spent on **Edge of Shadow**, **Flood of Shadow**, or **The Blackest Night**. **Edge of Shadow** and **Flood of Shadow** extend Darkside by thirty seconds (up to a maximum of sixty), our personal buff that gives us +10% damage. We want to make sure we keep Darkside up, not overcap on MP, and, where possible, save the remaining MP-spenders for damage-increasing party buffs.

As a result, over the course of a fight, you should generally only spend MP by using **Edge of Shadow** or **Flood of Shadow** in these three situations:

* You're about to overcap MP
* You're about to run out of Darkside
* You're in burst, and have damage-increasing buffs

This allows us to maintain high personal damage, always keep Darkside at all times, as well as making sure we have as many MP spending abilities as possible for buffs.

You should also aim to use **The Blackest Night** before buffs to get a charge of Dark Arts. This can be on auto-attacks, tankbusters, a raidwide, or anything you can. Dark Arts will allow you to get an additional **Edge of Shadow** in buffs. This concept is elaborated on further in [the advanced gameplay section](/jobs/tanks/dark-knight/basic-guide/#optimizing-raid-buffs-further).

You should liberally use **The Blackest Night** to avoid damage as needed, too. It is always better to move damage out of buffs in order to stay alive.

## Rotation Video

{{< youtube -qDvEZQU9dQ >}}

# Stats and Itemization

Best-in-slot sets can be found on the [BiS page](/jobs/tanks/dark-knight/best-in-slot/) or in the Balance discord. Before obtaining best-in-slot gear, or if the items in the best-in-slot sets are not available to you, pick gear and meld according to stat priority on each piece of gear, listed below.

**Highest priority**

* Item Level

  * Affects Strength and Weapon Damage (for weapons), as well as total substat amount 
  * Significantly affects all damage dealt
  * Prioritize over getting better substats
* Critical Hit

  * Affects critical chance + critical damage
  * Priority meld on all gear (unless number turns red when melding)
* Skill Speed (if desired)

  * Reduces weaponskill recast time
  * Meld only to reach preferred GCD speed (commonly anywhere from 2.40s to 2.50s)
    (see [akhmorning](https://www.akhmorning.com/allagan-studies/stats/speed/) or [xivgear.app](https://xivgear.app/math/?page=math%7Csks) for precise skill speed tiers)
* Direct Hit

  * Meld remaining slots (filler stat)
* Determination

  * Sometimes used in a small number of slots due to stat tiering
* Tenacity

  * Rarely melded due to weak scaling and minimal mitigation

**Lowest priority**

If the above priority isn't enough, and you want to be sure of the absolute best choice for each slot, because of stat tiering, it may not always be obvious how two pieces of gear compare.
Using a gear calculator tool is recommended --- see, for example, [xivgearapp](https://xivgear.app).

Note that in any sort of gear calculator, simulations make some assumptions (e.g., a common assumption is that of full uptime, single-target fights).
They will still generally give reliable results when used to compare gear with large differences, but, especially when comparing gearsets with different speeds, it is good to be aware of the assumptions being made and whether they apply to your use case.

## Choosing your skill speed

The Dark Knight rotation is functional at almost all skill speeds, although certain speeds keep oGCD abilities better aligned with your GCD. In particular, 2.40 and 2.50 maintain perfect alignment for 60s cooldown oGCDs.

One notable factor regarding skill speed for Dark Knight is that **Unmend**, **Unleash**, and **Stalwart Soul** are Spells, and not Weaponskills. As a result, these abilities' cooldowns do not scale with Skill Speed (they instead scale with Spell Speed).

Outside of high-end optimization, choice of skill speed has little impact on the Dark Knight rotation, and can be chosen for comfort. At some faster speeds, oGCDs like **Salted Earth** and **Carve and Spit** will drift slightly.

In optimization, each encounter must be considered separately to determine what GCDs are gained or lost by different skill speeds, as well as lining up the GCD with any melee disengages. In general, the slowest speed that doesn't lose any major GCDs within a phase will be the strongest choice, as much of Dark Knight's damage does not scale with speed.

If in doubt, or you're not sure what any of this means, **we recommend 2.50**. It will likely be more forgiving if you're new to the job or have very high ping, as well as simming very slightly better. If you like Dark Knight a lot or want to branch out, then we recommend trying 2.46 too, which many find a very comfortable speed, and deciding for yourself what's comfiest for you.

# Dungeons

## Keeping Aggro

Turn on **Grit** and never turn it off. As long as you keep hitting the mobs, you will have aggro on them. In multi-target situations, use AoE so that you can keep aggro on all mobs.

## Pulling Mobs

There are a variety of ways to ensure you pull all of the mobs in a pack quickly and reliably, without stopping on your way to the next pack of mobs:

* Run up to the mobs so they see and run to you and use an AoE combo GCD once they are in range to secure aggro.
* Tab through the mobs and use **Unmend** while weaving any damaging oGCDs or **Provoke**.

Try to position the mobs so that they are in a tight clump: this lets you, your DPS, and your healers use their AoE damage more effectively. Pull melee enemies onto ranged enemies so that the ranged enemies are also in the clump. Alternatively, drag mobs around a corner so the ranged enemies are forced to run next to you in order to attack.

## Mitigation

Cycle through your mitigation on trash pulls (they hurt more than bosses). Rather than using it all at once, keeping something up at all times can help your healer keep you alive more easily. More powerful mitigation cooldowns like **Rampart**, **Shadowed Vigil**, and **Arm's Length** can be paired with weaker ones like **Reprisal**, **Oblation**, and **Dark Mind**. **The Blackest Night** is one of your most powerful mitigation tools and can be used liberally (at least once per mob pack) once unlocked. **Dark Mind** is also noticeably better against magical damage, and should be prioritized on magic damage, where possible.

**Living Dead** can be extremely strong in dungeons, as a single AoE GCD will often heal you to full after Walking Dead is activated. However, an inexperienced healer may heal too much during **Living Dead**, preventing Walking Dead from activating. It may help to let your healers know ahead of time where you plan to use **Living Dead**, to avoid this problem.

# Let's Talk About The Blackest Night (TBN)

## What is TBN?

**The Blackest Night** (**TBN**) is one of Dark Knight's best abilities and one of the things that makes its mitigation and damage so flexible, but also probably its most misunderstood. It's also one of the best pieces of targeted or personal mitigation in the entire game, if not the best, and hopefully this section will help you understand why.

Unlike other tanks' comparable mitigations, which do not cost any damage gauge, it costs 3000 MP, the same as an **Edge of Shadow**. On the surface, this can cause newer or less experienced Dark Knights to worry about the potential of losing damage, or worry that using it at all will lose them damage. Most obviously, if you use a **TBN** and it doesn't pop, you lose a whole **Edge of Shadow**'s worth of damage. However, if it does pop, it refunds itself with a Dark Arts, allowing the use of the same 3000 MP ability you 'lost'.

Practically speaking, in a large dungeon pull or facing down a tankbuster in a high-end raid or trial, it's almost impossible for it not to break. On boss auto-attacks, it should be immediately obvious as to whether or not those auto-attacks break **TBN** during progression (they almost always will), meaning by the time damage starts mattering, in the rare case that they don't break **TBN**, you'll know for next pull.

That means that, practically speaking, **TBN** is damage neutral to a damage gain. Since the shield always breaks, you're never losing damage, and you can **gain** damage by using the Dark Arts that its breakage grants can be used to 'move' your MP around, allowing for five **Edge of Shadow**s in a buff window as opposed to four. Indeed, the start of [advanced Dark Knight play](/jobs/tanks/dark-knight/basic-guide/#optimizing-raid-buffs-further) revolves around this concept.

Of course, if a second **TBN** pops before you've used the Dark Arts from the first one, you would lose damage, but that would obviously be user error, and is very easy to avoid.

To summarize, **TBN** is either damage neutral, or a gain, allowing you to move extra damage into buffs. We'd strongly recommend not being scared of 'losing damage' with **TBN** --- use it liberally during fight progression (where mitigation matters the most), and it if doesn't pop, you can always adjust during the next pull and have everything mapped out by the time you clear.

## Its Cooldown

**TBN** is special compared to the other tank 'short mits' (**Bloodwhetting**, **Heart of Corundum**, and **Holy Sheltron**) in that it has a 15 second cooldown. The other tanks either have a 25 second cooldown (Warrior and Gunbreaker) or are limited by gauge to be roughly every 30 seconds (Paladin).

Its cooldown allows it to mitigate damage more frequently than other tanks, allowing you to mitigate tankbusters or other salient damage that's closer together than any other tank. This can be very relevant in some difficult fights like Savages and Ultimates, and the flexibility to be able to use your mitigation more frequently isn't always an option other tanks have.

There **is** a downside of using **TBN** so frequently though, you can move some of your MP spending out of buffs if you use too much. However, up to 4 (the last sometimes requires careful timing, by using **TBN** during a buff window) MP spenders per 2 minutes can be **TBN** without moving any damage out of buff windows --- all three spenders in the odd-numbered minutes, plus one in the even-numbered minute. An astute reader will note that four per 2 minutes is also the same amount of times that a 25 second cooldown will typically fit.

To summarize, there's very few practical circumstances in which you need (or even want) so many **TBN**s you move damage out of buff windows, but if there's so much damage you need to **TBN** so often that you move damage out of burst windows, then **no other tank would have as much mit** as Dark Knight.

A good way to think about it is this: unlike other tanks, Dark Knight has the option to move damage out of buff windows to mitigate more damage whenever it wants. If this is saving healers GCD heals, this is always better, and is another example of **TBN** being a DPS gain compared to other 'short mit'.

## Shields Like TBN Are Really Really Good

**TBN** provides a shield equal to 25% of the target's health upon application. Note that this, like other percentage-based barriers in the game, isn't increased by 'increased healing' effects, such as **Rampart** upon gaining the **Enhanced Rampart** trait.

Shields work really well with mitigation, and, unless there are multiple big hits within a small window of time, often work out better than having 'more mitigation'. In particular, a 25% shield is absolutely massive, and works out to more than you might intuit. This is primarily because the shield applies after all other mitigation, so the mitigated hit will collide with your **TBN**, not the unmitigated hit.

Let's look at a few example mitigation scenarios comparing **TBN** to the 15% mitigation offered by **Holy Sheltron** and **Heart of Corundum**, to illustrate just how good **TBN** is against competition.

Scenario 1: We have 100,000 health, and are taking a 25,000 damage (after all other reductions) tankbuster:

* The Dark Knight with **TBN** and no other mitigation will take no damage at all.
* The other tank with 15% mit will take 21,250 damage.

Scenario 2: We have 100,000 health, and are taking a 100,000 damage (after all other reductions) tankbuster:

* The Dark Knight with **TBN** and no other mitigation will take 75,000 damage
* The other tank with 15% mit will take 85,000 damage

Scenario 3: We have 100,000 health, and are taking a 124,000 damage (after all other reductions) tankbuster:

* The Dark Knight with **TBN** and no other mitigation will take 99,000 damage, and live
* The other tank with 15% mit will die

These examples illustrate that **TBN**, compared to percentage based mitigation, mitigates more damage relative to how small the hit is, since the amount it blocks is static. However, they also illustrate how strong it is --- a 25% shield is incredibly, incredibly good when stacked with other mitigation.

Of course, if some of the larger tankbusters in these scenarios hit twice within the eight second durations of the two abilities we're comparing against, then the other mitigation will win out. That being said, practically speaking, most of the way this game deals out damage fits very neatly with the circumstances that make **TBN** so darn good.

# Helpful Macros

Since Dark Knight has extremely powerful targeted mitigation, some players find that they prefer to have mouse-over macros, or macros that allow using **TBN** and **Oblation** without having to change targets. This section gives some examples of useful macros that Dark Knight players use, as well as tips on how to make your own.

Macros are by no means required, or even optimal, they are another option to use your abilities that some players find comfortable. 

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

These same principles can be used to make your own macros, too! For example, if you wanted to make a macro for **The Blackest Night** for each party member, you'd make one macro where the inner lines of the macro are `/ac "The Blackest Night" <1>`, another where they are `/ac "The Blackest Night" <2>` and so forth.

# Advanced Gameplay

This section assumes that you are comfortable with the entirety of the Dark Knight kit as well as the basic rotation outlined above. If you blindly try to do these optimizations without grasping the fundamentals, it is likely to be detrimental to your play, rather than improve it.

## Advanced Guide

While this section will go over some optimizations for Dark Knight, for those looking for more, we also have an [advanced guide](/jobs/tanks/dark-knight/advanced-guide) with many other notes and discussions of nuance. If you're looking for more like this section, we'd recommend checking that out after you've read this!

## Optimizing Raid Buffs Further

**Edge of Shadow** and **Bloodspiller** can be delayed without loss, as long as MP and Blood Gauge do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come every 2 minutes.

Dark Knight generates around 10800 MP per minute, from a combination of **Syphon Strike**, **Carve and Spit**, **Delirium**, and natural MP regen ticks (which grant 200 MP every three seconds in combat, or 600 MP every three seconds if out of combat).
This translates to 3.6 MP spenders per minute, or 7.2 spenders per 2 minutes.
Since at least 2 **Edge/Flood of Shadow** are needed in the odd minutes to maintain Darkside, this leaves at most 5.2 spenders for every even minute, when buffs come out.
Even going into burst at full MP and using the MP generated from **Carve and Spit** and Delirium, however, we do not reach 15000 MP.

To reach 5 **Edge/Flood of Shadow** in buffs, we use **The Blackest Night (TBN)** earlier, outside of buffs, in order to store a Dark Arts, essentially banking 3000 MP for later.
With a stored Dark Arts from the previous minute, 9000+ MP, and the MP from **Delirium** and **Carve and Spit**, 5 **Edge/Flood of Shadow** within buffs are possible.

This means that damage-optimal MP spending is as follows:

* 5 **Edge of Shadow** in each buff window (except the opener, where one **Edge of Shadow** is used outside of buffs to get Darkside).
* Three MP spenders in odd minutes, where the last one is **The Blackest Night**, with the Dark Arts from this being held into the next buff window.

Note that the first two MP spenders in odd minutes can freely be **The Blackest Night (TBN)** as well, with their Dark Arts then being used before the next **TBN**.
Similarly, **TBN** can be used during buffs without losing damage as long as the Dark Arts it generates can be spent on **Edge/Flood of Shadow** before the buff window ends.

Similarly, though more simply, entering buffs (when **Delirium** is pressed) with 70 or less Blood Gauge will ensure that you do not overcap on Blood Gauge.
This allows for using 1-2 **Bloodspillers** during every 2-minute raid buff window, and it is best to have the Blood Gauge as high as possible (up to 70) when entering Delirium.

## Breaking a pre-pull The Blackest Night on any boss

In some fights, the boss' auto-attacks are too weak to break **The Blackest Night (TBN)** used at -3s in the opener. In many cases, you can leave TBN out of the opener with no loss, and just delay the last **Edge of Shadow** in the opener until you have enough MP.

However, if you want to ensure that you get Dark Arts at the beginning of the fight even for bosses with weak auto-attacks, you can make a separate gear set with lower Vitality to apply your TBN, and switch back to your normal gear set after application. Since TBN's shield scales with your max HP at the time of cast, this will make the shield smaller, allowing it to break more easily.

This is a very minor DPS gain on average, and so is only recommended for optimization, not for progression.

To do this, do the following:

1. Switch into a gear set with lower Vitality (e.g. your current gear with some of the pieces taken off)
2. Apply **TBN** to yourself (at -3s)
3. Switch your gear back to the gear you intend to do the fight on
4. Execute your opener like normal 

You can still use this technique if you are not the pulling tank, but will need to coordinate the timing of their gearset swap with your use of **TBN** on them.

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