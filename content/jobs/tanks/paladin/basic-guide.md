---
title: Paladin Basics Guide
card_header_image: /img/jobs/pld/basic.png
authors:
  - nikroulah
patch: "6.21"
lastmod: 2022-09-19T01:48:07.113Z
changelog:
  - date: 2021-10-27T17:21:54.665Z
    message: Added
  - date: 2022-01-10T00:21:39.923Z
    message: Endwalker update
  - date: 2022-07-26T20:34:27.725Z
    message: Updated opener graphics
  - date: 2022-09-19T01:32:12.497Z
    message: Updated for 6.2
tags:
  - Rotation
  - PaladinRotation
  - Opener
  - PaladinOpener
---
Welcome to the Basics Guide for Paladin! Whether you are a fresh level 90, a returning player, or just need a refresher, this guide will get you started and allow you to hit the ground running.

Since this is a basic introduction to level 90 Paladin, this guide will not go into many nuances and topics that are tied to high-end optimization. If you are looking for such information, you may find it in one of the dedicated guides below:

* [Leveling Guide](/jobs/tanks/paladin/leveling-guide/)
* [Openers](/jobs/tanks/paladin/openers)
* Advanced Guide (Coming Soon!)
* Fight Tips (Coming Soon!)
* Stats and Materia (see [main page](/jobs/tanks/paladin))
* [Gearing](/jobs/tanks/paladin/best-in-slot)
* [Skill Overview](/jobs/tanks/paladin/skills-overview/)
* [Frequently Asked Questions](/jobs/tanks/paladin/faq)

- - -

## Paladin Playstyle

The Paladin rotation revolves around its two main buffs: Fight or Flight, which heavily buffs all physical damage, and Requiescat, which buffs spells and enables the use of Confiteor. Defensively, Paladin has strong party mitigation as well as targeted mitigation for your co-tank or party members.

## Core Concepts

There are a few key concepts that are fundamental to the game and carry over between jobs.

* Keeping your Global Cooldown (GCD) on cooldown is one of the most important parts of playing any job. Pressing something wrong is almost always better than pressing nothing at all.
* As a primarily melee job, it is important to know how to keep melee uptime on the boss. This includes knowing when mechanics snapshot and where you can greed for extra GCDs before and after disengaging for mechanics.
* Keep off-Global Cooldowns (oGCDs) on cooldown. Damaging oGCDs should be used roughly as they come off cooldown, as long as using them does not delay your next GCD due to animation lock.

## The Rotation

With Patch 6.2 gearing options and recent job changes, there are now two rotations for the job: a slow GCD rotation (for use if your GCD is 2.46 or higher), and a fast GCD rotation (for use if your GCD is 2.45 or faster). The new, slow GCD rotation loop is generally preferred, but sticking to the old, fast GCD rotation loop can be done for familiarity with a minor DPS loss.

### Slow GCD Rotation (6.2)

#### Paladin Opener

![Slow GCD Opener for Paladin](https://cdn.discordapp.com/attachments/1009922395403976825/1019114452580307006/opener250.png)

The potion used is whatever the current tier's Strength potion is (as of patch 6.2, it is the Grade 7 Tincture of Strength).

After the opener, go into the rotation loop (pictured and explained below) by doing a Royal Authority combo and using Fight or Flight after the Riot Blade.

#### Paladin Rotation Loop

![Full Slow GCD Rotation Loop for Paladin][https://cdn.discordapp.com/attachments/1009922395403976825/1019114451439460472/loop250.png]

The loop looks complicated, but essentially boils down to:
1. Magic Phase (4x Holy Spirit, Confiteor, Blade of Valor combo)
1. Royal Authority combo + 3x Atonement
1. Goring Blade combo
1. Royal Authority combo + 3x Atonement
1. *If Requiescat would not come up in time for the next GCD*, use a Goring Blade combo
1. Repeat.

If playing a speed faster than 2.50, you will occasionally need to hardcast a Holy Spirit. At 2.46 and 2.47, you can hardcast a Holy Spirit after every third Confiteor (the one after your unbuffed Goring Blade combo). At 2.48 and 2.49, this is also the ideal place to hardcast if the encounter lasts long enough for your Fight or Flight and Requiescat to start clipping your GCD.

### Fast GCD Rotation (Legacy)

#### Paladin Opener

![Fast GCD Opener for Paladin](https://cdn.discordapp.com/attachments/1009922395403976825/1019114452261543986/opener18s.png)

![](https://xivapi.com/i/020000/020710_hr1.png)

The potion used is whatever the current tier's Strength potion is (as of patch 6.2, it is the Grade 7 Tincture of Strength).

If a 20-second countdown for the encounter is not feasible, simply skip the pre-pull Fight or Flight and use it where it would normally come up during the rotation loop.

**High Latency Adjustments:**\
At high latency, if double weaves would cause your GCD to clip, move oGCDs around to stick to single-weaving.

#### Paladin Rotation Loop

Following Blade of Valor, the Paladin rotation enters into a loop with three phases, with a short filler phase before repeating the Fight or Flight and Requiescat windows as in the opener.

![Paladin Rotation Loop](https://xiv.sleepyshiba.com/pld/img/loop.png)

During the filler phase, only two out of three Atonements are used because the natural rotation would be approximately 64 seconds long. Dropping a GCD minimizes the natural drift on Fight or Flight, Requiescat, and other oGCDs and is the best option in a vacuum.

Damaging oGCDs like Circle of Scorn and Expiacion should be used on cooldown, ideally with two charges of Intervene being pooled for Fight or Flight. Requiescat can be used any time after the 4th Fight or Flight GCD for the buff to last until Confiteor.

#### Weaving Fight or Flight

With a 25-second duration, at fast GCD rotation skill speeds, it is possible to fit 11 GCDs in the Fight or Flight buff window. In the standard rotation these GCDs will be Riot Blade, Goring Blade, a Royal Atonement combo and three Atonements, and another Goring Blade combo. The buff on Goring Blade's damage-over-time effect (DoT) will persist as long as Goring Blade itself was buffed by Fight or Flight.

![](https://xiv.sleepyshiba.com/pld/assets/fofgcd.png)

In order to fit all 11 GCDs in the buff window, Fight or Flight must be weaved late in the GCD timer. The approximate timing is two-thirds of the way into the GCD after Fast Blade, though the timing may vary depending on your latency and Skill Speed. As long as the buff icon was on your buff bar when your last GCD is cast, then it was buffed. The in-game battle log, animations, and floating damage text are inaccurate for determining whether the last GCD was buffed or not.

Each Fight or Flight window should also contain one Circle of Scorn and one Expiacion. Using them roughly on cooldown should naturally line them up with Fight or Flight. Intervene is ideally pooled for two uses during Fight or Flight, but should be used to keep melee uptime if needed.

### Multiple Targets

* At three or more targets, replace single target melee combos with Total Eclipse and Prominence.
* At two or more targets, replace Holy Spirit with Holy Circle
* In dungeons, use Requiescat before Fight or Flight, since it is stronger in multi-target situations

For prolonged two-target encounters (rarely found outside of Ultimate raids), see the Advanced Guide (Coming Soon!) for more information.

## Notable Utility

![Divine Veil](https://xiv.sleepyshiba.com/pld/assets/skill-divineveil.png)

Divine Veil provides a party-wide shield and heal (excluding yourself) after being procced by any healing GCD with an on-hit healing potency (e.g. Holy Spirit, Astrologian's Helios, Scholar fairy's Embrace, and not White Mage's Regen).

![Passage of Arms](https://xiv.sleepyshiba.com/pld/assets/skill-passageofarms.png)

Passage of Arms applies a buff to all party members behind you, granting them a 15% reduction in damage taken. The buff lingers for five seconds after you cancel it, so the most common use case is flashing it onto the party before high raid-wide damage.

![Intervention](https://xiv.sleepyshiba.com/pld/assets/skill-intervention.png)

Intervention gives your target a buff that reduces damage taken, as well as provides a small regen effect. The damage reduction buff can be buffed by having either Rampart or Sentinel active when casting Intervention.

![Reprisal](https://xiv.sleepyshiba.com/pld/assets/skill-reprisal.png)

Reprisal reduces the damage dealt by all enemies around you. Generally use this on raid-wide damage.

![Holy Sheltron](https://xiv.sleepyshiba.com/pld/assets/skill-holysheltron.png)
![Rampart](https://xiv.sleepyshiba.com/pld/assets/skill-rampart.png)
![Sentinel](https://xiv.sleepyshiba.com/pld/assets/skill-sentinel.png)
![Hallowed Ground](https://xiv.sleepyshiba.com/pld/assets/skill-hallowedground.png)

Use your other defensive cooldowns to reduce incoming damage and make life easier for your healers.

![Clemency](https://xiv.sleepyshiba.com/pld/assets/skill-clemency.png)
![Cover](https://xiv.sleepyshiba.com/pld/assets/skill-cover.png)

These skills are very niche and infrequently used but have their time and place to shine. Clemency is a *significant* DPS loss but enables soloing dungeon bosses when the healer is dead, or saving runs when progging raids and trials. Cover can be used in niche optimization strategies or for saving a party member from otherwise lethal damage. Covered damage ignores Hallowed Ground.

- - -

## Helpful Macros

Co-tank macros assume your co-tank is in party slot two (default party sorting).

**Intervention on Co-Tank**  

```
/merror off 
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/micon Intervention  
```

**Mouseover Cover:**

```
/merror off
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/micon Cover  
```

**Shirk on Co-Tank**

```
/merror off
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/micon Shirk  
```

**Why are there so many repeated lines?**
FFXIV macros do not queue, so hitting a macro while in animation lock from another action will cause the macro to not go off. Since macros execute lines sequentially at around one line per frame, repeating the /action lines simulates mashing the ability every frame for \~15 frames and gives the macro a semblance of queuing.

**Mouseover? `<2>`?**\
`<mo>` will attempt to target whatever your mouse cursor is currently hovering over when that macro line is reached, whether it be their physical model or a name on your party list.

`<2>` targets the second player on your party list, which is the other tank by default in eight-person content.

- - -

## Further Reading

For high-end optimization concepts, see the Advanced Guide (Coming Soon!).

For fight-specific optimizations, see the Encounter Optimization Guide (Coming Soon!).

### Stats and Itemization

Before obtaining best-in-slot gear, pick gear and meld according to stat priority on each piece of gear. Best-in-slot sets can be found [in the Balance Discord](https://discord.com/channels/277897135515762698/580300460179718146/847963997952016394) or [the Best in Slot page on this website](/jobs/tanks/paladin/best-in-slot/).

Because of stat tiering, the [Tank Gear Calculator](https://bit.ly/XIV-TANKDPSCALC-EW) gets the last word on any specific gearing question.

**Highest Priority**

**Weapon Damage** (main-hand weapon only)

* Significantly affects all damage dealt.
* Proportional to item level.

**Strength**

* Affects all damage dealt.
* Proportional to item level.

**Critical Hit**

* Affects critical chance and critical damage.
* Often naturally capped on BiS gear pieces.
* Priority meld on all gear (unless that gear piece would overcap, i.e. the number turns red when melding).

**Skill Speed**

* Reduces weaponskill recast time.
* Meld only to reach preferred GCD speed (commonly anywhere from 2.40-2.43s).
* See [precise skill speed tiers](https://www.akhmorning.com/allagan-studies/stats/speed/), courtesy of the folks over at Allagan Studies.

**Direct Hit**

* Affects only direct hit chance.
* Meld remaining slots (filler stat).

**Determination**

* Increases damage dealt and healing done.
* Sometimes used in one slot due to stat tiering.

**Tenacity**

* Increases damage dealt, healing done, and reduces damage taken.
* Rarely melded due to weak scaling and minimal impact of mitigation.

**Lowest Priority**

#### Choosing your skill speed

The Paladin rotation is functional at almost all skill speeds. For the Fast GCD rotation, the only requirement is a minimum level of skill speed in order to get 11 GCDs in Fight or Flight, which is possible at virtually any recast speed faster than 2.50 (more reasonably, anything less than 2.47). Common Fast GCD speeds lie anywhere between 2.42 and 2.45. The Slow GCD rotation is a gain over the Fast GCD rotation at 2.46 and slower.

Outside of high-end optimization, choice of skill speed has little impact on the Paladin rotation, and can be chosen for comfort. For high latency it is recommended to use the Slow GCD rotation with a slower GCD (like 2.50). Alternatively, you can use the Fast GCD rotation and go with a faster GCD (2.40) to compensate for your latency.

In optimization, each encounter must be considered separately to determine how many GCDs are gained or lost by different skill speeds, as well as to line up the GCD with any melee disengages. In general, the slowest speed that doesn't lose any major GCDs within a phase will be the strongest choice.