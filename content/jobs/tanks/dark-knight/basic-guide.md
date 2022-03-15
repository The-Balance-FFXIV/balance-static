---
title: Dark Knight Basic Guide
card_header_image: /img/jobs/drk/basic.png
authors:
  - nikroulah
  - silaqui-amakiir
patch: "6.05"
lastmod: 2021-10-27T17:24:00.336Z
changelog:
  - date: 2021-10-27T17:33:50.039Z
    message: Added
  - date: 2022-03-15T01:19:29.210Z
    message: (Minor) updates for 6.05
---
# Introduction to Dark Knight

## The useless pre-Endwalker guide by nikroulah#1605 (now updated for 6.x)

- - -

# Introduction

Dark Knight (DRK) is one of the four tanks available in Final Fantasy XIV: Shadowbringers. Its rotation features large bursts of damage, accompanied by spikes in actions per minute (APM) and requires managing both MP and a Blood Gauge, putting many hard-hitting attacks into party raid buff windows. It also has access to one of the most powerful single-target mitigation abilities available in The Blackest Night (TBN).

The purpose of this guide is to give an overview of Dark Knight’s abilities and to allow you to hit the ground running when picking up Dark Knight, as well as giving a peek into optimization in high-end content.

- - -

# Skills and Abilities Overview

Skills and abilities can be found on the [this page](https://www.thebalanceffxiv.com/jobs/tanks/dark-knight/skills-overview/)

- - -

# Opener

Goals for DRK openers include:

* Get Living Shadow out ASAP; the long spawn animation means any delays will push some hits out of raid buffs.
* Get buffs like Blood Weapon and Delirium, and damaging abilities like Carve and Spit and Salted Earth on cooldown early.
* Use as many big hits and spend as much mana as possible inside potion and raid buff windows (which typically come up around the 4th or 5th GCD).

## Standard Opener

Best raid buff alignment and a good default choice

![Standard Dark Knight Opener](/img/jobs/drk/drk_6.0_standard_opener_v3.png "Standard")

> Text version: Prepull The Blackest Night > Prepull Blood Weapon just before pull > Hard Slash + Edge of Shadow + Delirium > Syphon Strike + Potion > Souleater + Living Shadow + Salted Earth > Hard Slash + Shadowbringer + Edge of Shadow > Bloodspiller + Carve and Spit + Plunge > Bloodspiller + Shadowbringer + Edge of Shadow > Bloodspiller + Salt and Darkness + Edge of Shadow > Syphon Strike + Plunge + Edge of Shadow

The potion used is whatever the current tier’s Strength potion is (as of the time of writing, it is the Grade 6 Tincture of Strength HQ).

## Unmend Opener

This opener should only be used if you need precise positioning on a boss early into the fight and can't do that with a standard (facepull) opener, or if you need a precise pull time, as it delays Living Shadow out of raid buffs, as well as delaying your MP generation.
Consider having the other tank pull instead, then Provoke from them if needed.

![Unmend Opener](https://cdn.discordapp.com/attachments/583964695266983944/925284495798710322/tmp4.PNG "Unmend")

> Text version: Prepull The Blackest Night > Unmend + Delirium + Blood Weapon > Hard Slash + Edge of Shadow > Syphon Strike + Potion > Souleater + Living Shadow + Salted Earth > Bloodspiller + Shadowbringer + Edge of Shadow > Bloodspiller + Carve and Spit + Plunge > Bloodspiller + Shadowbringer + Edge of Shadow > Hard Slash + Salt and Darkness + Edge of Shadow > Syphon Strike + Plunge + Edge of Shadow

Opener notes:

* Blood Weapon is used prepull to ensure that Living Shadow is used as soon as possible. Any later and a hit will get pushed out of raid buffs.
* The prepull TBN is used to prevent MP overcap from the first Hard Slash under Blood Weapon, since if it breaks it refunds the MP cost in the form of a free Edge of Shadow.

  * If the prepull TBN will not break, then simply omit it and overcap 600-800 MP before your first Edge of Shadow
* Try to avoid pulling with Unmend, as doing so will delay Living Shadow. If you need to start with aggro, consider having your co-tank pull with stance on and use Provoke after your opener.

- - -

# Rotation

Dark Knight’s rotation is deceptively simple, and follows these simple principles:

* Avoid overcapping on MP or blood by using Edge of Shadow and Bloodspiller, respectively.
* Use offensive abilities without charges (such as Carve and Spit, Salted Earth, Blood Weapon, and Delirium) when available.
* Use offensive abilities with charges (Plunge and Shadowbringer) in raid buffs or to avoid overcapping. In practice, it is often possible to get all uses of these abilities under raid buffs.
* Fill remaining GCDs with Souleater combo.

![Blood Weapon and Delirium](https://lh3.googleusercontent.com/0sINCR_AVAV3PHXz0Wc7lR1ziR1ZHlqxH6d-T7kYV8DPJU1ZKcScHwcqF7iE3Q9Y-qWn7oYgyYNz4jYqJsy0XuJv1GYBommNH5wpzfDU1ILERnTU-cuECpleMujWFiYw9vRgA9cC=s0)

## Using Blood Weapon and Delirium

Blood Weapon should be weaved at least two-thirds of the way into the GCD roll in order to cover five GCDs.

Both Blood Weapon and Delirium should be used as they come up, without being held for extended periods of time (i.e. in the opener, at \~1:00, at \~2:00, etc).

The second Blood Weapon in the fight can (and should) be delayed by ~3 GCDs to avoid overcapping Blood and MP before raid buffs.

Because spells (e.g. Unleash) have a longer recast time than weaponskills due to skill speed, it can be much harder to get five GCDs in Blood Weapon while using AoE. Try to save Blood Gauge and Delirium stacks for Blood Weapon so that three to four Blood Gauge spending GCDs (Bloodspiller/Quietus) can be used during Blood Weapon for the shorter recast.

## Pooling Resources for Raid Buffs

Edge of Shadow and Bloodspiller can be delayed without loss, as long as MP and Blood do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come in multiples of 60 seconds.

Dark Knight generates around 12000 MP per minute, from a combination of Blood Weapon, Syphon Strike, Carve and Spit, Delirium, and natural MP regen ticks. Since MP caps at 10000, we delay the first (and only the first) Blood Weapon after the opener in full uptime to prevent overcapping before raid buffs come out, allowing four Edge of Shadow to naturally fall in every one-minute raid buff window.

Similarly, try to use three Blood Gauge spenders (i.e. Living Shadow, Bloodspiller) during every one-minute raid buff window.

- - -

# Helpful Macros

## The Blackest Night (mouseover)

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

## Shirk (assumes party slot 2)

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

FFXIV macros do not queue, so hitting a macro while in animation lock from another action will cause the macro to not go off. Since macros execute lines sequentially at around one line per frame, repeating the /action lines simulates mashing the ability every frame for ~15 frames and gives the macro a semblance of queuing.

## Mouseover? <2>?

<mo> will attempt to target whatever your mouse cursor is currently hovering over when that macro line is reached, whether it be their physical model or a name on your party list.

<2> targets the second player on your party list, which is the other tank by default in 8-man content.

- - -

# Stats and Itemization

Before obtaining best-in-slot gear, pick gear and meld according to stat priority on each piece of gear. Best-in-slot sets can be found on the [BiS page](/jobs/tanks/dark-knight/best-in-slot/) or in the Balance discord.

Because of stat tiering, the Tank Gear Calc is the best tool to directly compare specific gear pieces <https://bit.ly/TankDPSCalc520>.

**Highest priority**

* Weapon damage (main-hand weapon only)

  * Significantly affects all damage dealt
  * Proportional to item level
* Strength

  * Affects all damage dealt
  * Proportional to item level
* Critical Hit

  * Affects critical chance + critical damage
  * Often naturally capped on BiS gear pieces
  * Priority meld on all gear (unless number turns red when melding)
* Skill Speed

  * Reduces weaponskill recast time
  * Meld only to reach preferred GCD speed (commonly anywhere from 2.38s to 2.43s)
    (see https://www.akhmorning.com/allagan-studies/stats/speed/ for precise skill speed tiers)
* Direct Hit

  * Affects only direct hit chance
  * Meld remaining slots (filler stat)
* Determination

  * Increases damage dealt
  * Sometimes used in 1 slot due to stat tiering
* Tenacity

  * Increases damage dealt and reduces damage taken
  * Rarely melded due to weak scaling and minimal mitigation

**Lowest priority**

## Choosing your skill speed

The Dark Knight rotation is functional at almost all skill speeds. The only requirement is a minimum level of skill speed in order to fit five GCDs in Blood Weapon, which is possible at virtually any realistic recast speed (no more than 2.45). In optimization, common recast speeds can be anywhere from 2.38 to 2.45.

Outside of high-end optimization, choice of skill speed has little impact on the Dark Knight rotation, and can be chosen for comfort (faster speeds can be more forgiving and latency-friendly with Blood Weapon and Delirium, provided double weaves don’t clip your GCD). At certain speeds, 90-second cooldowns like Salted Earth must be drifted or clipped while the same is true of 60-second cooldowns at other speeds.

In optimization, each encounter must be considered separately to determine what GCDs are gained or lost by different skill speeds, as well as lining up the GCD with any melee disengages. In general, the slowest speed that doesn’t lose any major GCDs within a phase will be the strongest choice.

- - -

# Dungeons

## Keeping Aggro

Turn on Grit and never turn it off. As long as you keep hitting the mobs, you will have aggro on them. In multi-target situations, use AoE so that you can keep aggro on all mobs.

## Pulling Mobs

There are a variety of ways to ensure you pull all of the mobs in a pack quickly and reliably, without stopping on your way to the next pack of mobs:

* Run up to the mobs so they see and run to you and use an AoE combo GCD once they are in range to secure aggro.
* Tab through the mobs and use Unmend while weaving any damaging oGCDs or Provoke.

Try to position the mobs so that they are in a tight clump: this lets you, your dps, and your healers use their AoE damage more effectively. Pull melee enemies onto ranged enemies so that the ranged enemies are also in the clump. Alternatively, drag mobs around a corner so the ranged enemies are forced to run next to you in order to attack.

## Mitigation

Cycle through your mitigation on trash pulls (they hurt more than bosses). Rather than using it all at once, keeping something up at all times can help your healer keep you alive more easily. More powerful mitigation cooldowns like Rampart, Shadow Wall, and Arm’s Length can be paired with weaker ones like Reprisal or Oblation. The Blackest Night is one of your most powerful mitigation tools and can be used liberally (at least once per mob pack) once unlocked.

With a skilled healer, Living Dead can be one of your most powerful dungeon mitigations. With a bad one (or a Scholar), try to stay away from relying on Living Dead and prefer using The Blackest Night and other mitigations. A panicked healer might heal your Walking Dead buff away immediately, rendering it useless.

Living Dead has some synergy with White Mages, as their Benediction can fully heal your Walking Dead on its own.

## AoE Priority

![AOE Priority](https://lh6.googleusercontent.com/DKjax_f1Kk-IJrU9YdnHGLXxOOL2oCqDD6JkngawU4fwiY__zyUW74xS664K6TosLnaSAExnPi3nwTzGW1BYUo8e6GYTNy_jfJhlvLdPOXSk76ObN_b8-IU64xfLMr__Vrb0bCyT=s0)  
 On any number of targets, prioritize spending Blood on Living Shadow.

 ![2 target](https://lh5.googleusercontent.com/je8u42LVxCMC4a2qHgEwjNHOuFNng5tvWD_Vl-r-IspjuXKoUq091qE2kA24aE_g19LmOEtxqKKx6iz9mMHa95Dzru1oK2lJfo6-fjwgYzRCHAi0o8a4deheL5zW8nhGXetcFPWv=s0)  
On 2+ targets, replace Souleater combo with Stalwart Soul Combo.

| **Quietus**                                                                                                                                                                        | **Flood**                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![3 targets](https://lh3.googleusercontent.com/kpxcMMzdmTBcdwK0upDws_tzb4Fp4CCfPRtvfP-KLuFi9abH9GiJ-bLAvmJ2epSO0jM9bEh8BRAdXUrdmvsRYBwvw9QEn_TP0jy9nYPqbKhz0aa_9iEr_wWzzrqVjCChnAay7Hus=s0) | ![3 target 2](https://lh6.googleusercontent.com/QXWUuYy7BBdBNo51JQjI20dfFVoxMThHIGkYEW376YDH6w1HsfVhXzwC27j8OyQlO85t8EtI46ZI2Q27rSELupUfhcQ12LbgKkocZhsB8gRy1Rv-hhoOrLbnu0BfK1-S1iwPSg16=s0)  
On 3+ targets, replace Bloodspiller with Quietus and Edge of Shadow/Darkness with Flood of Shadow/Darkness

 ![ad](https://lh3.googleusercontent.com/IqgiYLYvy2whmfx7LTqjDR-MHQRFbIhtMqwzTHjGUtOTSvCFO7C9-QpAGGFN_R3aNX0IyWn7JsFl_1zaTgQQB_N1ABKlvQLhP2XwKjnVRaKkFDYu6o9or-bsnnaqPwRODecz0Mkp=s0)  
On 4+ targets, replace Carve and Spit with Abyssal Drain.

![aoe 1](https://lh4.googleusercontent.com/RVzpcFuEas91IqZHJRjI-lSj70urqNF7Bg_xl8n1y96zIeXlOrZ81wlaILjc5Gj3X2uOUJdqGaCxR5oe0ioygq0aA9B6TuJWAsR4dX9rroodCwiYlUZiO41VxUoMhxoLaOLe63Js=s0)  
Try to maximize the number of targets you hit with Salted Earth.

- - -

# Frequently Asked Questions

## Why can’t I fit five GCDs in Blood Weapon?

There are several possible reasons. Below are some ways to diagnose common issues:
* Try (on a striking dummy) using Blood Weapon immediately before your first GCD (the GCD will be slightly delayed by animation lock from Blood Weapon). If this makes a five-GCD Blood Weapon reliable, your problem is likely that you are using Blood Weapon too early under normal circumstances. Ideally, Blood Weapon should be used so that its animation lock ends exactly as you press the next GCD, around two-thirds to three-fourths of the way through the GCD.
* Try (on a striking dummy) using Blood Weapon at your usual timing between GCDs, but use no other oGCDs. Repeatedly press each upcoming GCD until it activates. If this makes a five-GCD Blood Weapon reliable, your problem may be that you are delaying your GCDs under Blood Weapon, either by using too many oGCDs between GCDs (more than two, or more than one if your GCD speed and ping are particularly high) or by not activating your GCDs fast enough after the previous one.
* If neither of these fix your problem, you may need additional skill speed in order to get five GCDs under Blood Weapon. Using a VPN (for example, Mudfish or PingZapper) may also help by mitigating your latency (and therefore also reducing animation lock).

## Can I overlap Blood Weapon and Delirium?

Yes, although you need to be careful to not overcap on Blood, as Delirium prevents you from spending Blood with Bloodspiller until all three of its stacks have been used. With typical alignments of Blood Weapon and Delirium, you can accomplish this by making sure that you are at 40 Blood or less before pressing Blood Weapon or Delirium, whichever comes first.

- - -

# Advanced Gameplay

This section assumes that you are comfortable with the entirety of the Dark Knight kit as well as the basic rotation outlined above. If you blindly try to do these optimizations without grasping the fundamentals, it is likely to be detrimental to your play, rather than improve it. Also see the Advanced DRK guide [here](/jobs/tanks/dark-knight/advanced-guide/).

## Optimizing Raid Buffs Further

Moving Mana with The Blackest Night:

Upon delaying the second Blood Weapon, the standard rotation allows four Edges of Shadow to be used in each one minute raid buff window (Trick Attack) without any further adjustments.

However, since most parties also possess two minute raid buffs, it is beneficial to only spend three Edges of Shadow in odd-minute buff windows and use The Blackest Night to proc Dark Arts afterwards, which allows five Edges of Shadow to be used in the next even-minute buff window without overcapping MP.

#### List of Raid Buffs

| Job | Icon                                                                                                                                                                                   | Name             | Effect                                               | Cooldown |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------- | -------- |
| NIN | ![icon](https://xivapi.com/i/014000/014857_hr1.png)                                                                                                                                    | Trick Attack     | Target takes 5% more damage <br>15s duration         | 60s      |
| DRG | ![icon](https://xivapi.com/i/012000/012578_hr1.png)                                                                                                                                    | Battle Litany    | Critical rate increased by 10% <br>15s duration      | 120s     |
| MNK | ![icon](https://xivapi.com/i/012000/012532_hr1.png)                                                                                                                                    | Brotherhood      | 5% damage increase <br>15s duration                  | 120s      |
| RPR | ![icon](https://xivapi.com/i/012000/012936_hr1.png)                                                                                                                                    | Arcane Circle    | 3% damage increase <br>20s duration                  | 120s      |
| DNC | ![icon](https://xivapi.com/i/013000/013709_hr1.png)                                                                                                                                    | Technical Finish | 5% damage increase <br>20s duration                  | 120s     |
| BRD | ![icon](https://xivapi.com/i/012000/012601_hr1.png)                                                                                                                                    | Battle Voice     | Direct hit rate increased by 20% <br>15s duration    | 120s     |
| SMN | ![icon](https://xivapi.com/i/012000/012692_hr1.png)                                                                                                                                    | Searing Light    | 3% damage increase <br>30s duration                  | 120s     |
| RDM | ![icon](https://lh4.googleusercontent.com/ebXGOdXOLv7jiAEDE59XNd3mrdjBKlvrGY8x5pfGO2xyGS_G7_6LFTpk_O-ZeFCDVBqJxaWoJElvhtjcUEr93DnU4nCQpxdoOggXfgnC1ImMKGu3CICQSoJAkDr0MEj6pWbDCsJN=s0) | Embolden         | 5% damage increase  | 120s     |
| SCH | ![icon](https://xivapi.com/i/012000/012809_hr1.png)                                                                                                                                    | Chain Stratagem  | +10% critical rate on target <br>15s duration        | 120s     |
| AST | ![icon](https://xivapi.com/i/013000/013245_hr1.png)                                                                                                                                    | Divination       | 6% damage increase <br>15s duration                 | 120s     |
| AST | Various                                                                                                                                                                                | Cards            | Target gets ~6% damage increase <br>15s duration     | 30s      |

## Alternative Opener - Early Delirium

Useful if a fight benefits from a slightly earlier Delirium due to downtime or phasing

![Early Delirium Opener](https://cdn.discordapp.com/attachments/583964695266983944/925284132886552576/tmp4.PNG "Early Delirium")

> Text version: Prepull Delirium > Prepull The Blackest Night > Prepull Blood Weapon just before pull > Hard Slash + Edge of Shadow > Syphon Strike + Potion > Souleater + Living Shadow + Salted Earth > Bloodspiller + Shadowbringer + Edge of Shadow > Bloodspiller + Carve and Spit + Plunge > Bloodspiller + Shadowbringer + Edge of Shadow > Hard Slash + Salt and Darkness + Edge of Shadow > Syphon Strike + Plunge + Edge of Shadow


## Fight-specific optimization

For discussion around fight-specific optimization, please visit the #drk_encounter channel in the Balance discord and view the pins to see any up-to-date information on current encounters.