---
title: Paladin Advanced Guide
card_header_image: /img/jobs/pld/advanced.png
authors:
  - nikroulah
patch: "6.21"
lastmod: 2022-09-19T01:47:02.373Z
changelog:
  - date: 2021-10-27T17:21:01.212Z
    message: Created
  - date: 2022-09-19T01:41:13.642Z
    message: Updated for 6.2
---
This section assumes that you are comfortable with the entirety of the Paladin kit, as well as the basic rotation outlined in the Intro & Rotation Guide.

*If that is not the case, please turn back.*

## Introduction to Paladin Optimization

Because Paladin's self-buffs (Fight or Flight and Requiescat) are very powerful compared to raid buffs (e.g. Trick Attack, Divination), much of Paladin optimization focuses around maximizing usages of personal buff windows within a given phase or killtime, sometimes at the cost of raid buff contribution.

Typically, maximizing usages of personal buff windows means trying to maximize the number of Requiescat usages, since a large majority of Requiescat's value can be realized in just a few. For example, Requiescat and Confiteor alone makes for \~1400 potency, whereas the value of Fight or Flight needs to be extracted over a longer time, since Goring Blade needs to tick and Atonements must be built and spent over several GCDs.

Because of this, knowing phase timings and projected killtimes is crucial to Paladin optimization, since they inform how many uses you can get out of Requiescat and thus also opener choice, number of Holy Spirits per Requiescat, etc.

## Alternative Openers (for Fast GCD rotation *only*)

While the 18-second pre-pull FoF opener is the best option for most killtimes, sometimes this leads to ending on weak GCDs, for example right as or right before Fight or Flight begins. In these cases it is best to shift Fight or Flight back a bit, as long as you don't lose a use of Requiescat.

### Four-Second Pre-Pull FoF Opener

Note that the order of the Royal Authority combo and the Goring Blade combo doesn't matter for personal damage. However, by doing Royal Authority first, the Goring Blade, which is the stronger GCD, can be used under raid buffs. This opener is also better than the standard opener for raid buff contribution further into the fight.

![4 second prepull](https://cdn.discordapp.com/attachments/1009922395403976825/1019114451988922388/opener4s.png)

### No Pre-Pull FoF Opener

For phases where boss untargetable timings lead to ending on weak GCDs with the normal, 18-second pre-pull opener.

![No prepull prepull](https://cdn.discordapp.com/attachments/1009922395403976825/1019114452852949042/openerfull.png)

### Face-pull Requiescat Opener

By opening with Requiescat immediately on pull, we are able to get it on cooldown as early as possible. Only use this opener if it is required to get an extra Requiescat usage, for example in a phase that is 3:05 long (like after Fate Calibration Beta in The Epic of Alexander, with third or fourth jail).

### Choosing an opener for the kill-time

For full uptime fights, an opener should be chosen to maximize Requiescat usages while not sacrificing too many Fight or Flight GCDs.

| OPENER       | PREFERRED FOR |
| ------------ | ------------- |
| No pre-pull  | ~X:50-Y:00    |
| 4s pre-pull  | for niche use |
| 18s pre-pull | ~X:05-X:45    |
| Facepull req | for niche use |

## Two-target rotation (for Fast GCDs)

Paladin's physical AoE combo is too weak to be used with two targets. However, a further optimization to the single target loop can be used to increase potency by keeping DoT uptime on both targets. By replacing a FoF Royal combo and a unbuffed set of Atonements in the standard single-target loop with a Goring combo each, we get a loop for extended two-target encounters (alternate targets for each Goring Blade).

Two-target rotation loop (alternate targets with Blade of Valor and Goring Blade):
* ... previous loop (ending on Blade of Valor)
* Royal Authority combo
* Goring Blade combo
* Goring Blade combo (with FoF before Riot Blade)
* 3x Atonement
* Goring Blade combo
* Goring Blade combo
* 4x Holy Circle
* Confiteor
* Blade of Valor combo

## Two-target rotation (for Slow GCDs) Coming Soon!

Coming Soon!

## Fight-specific optimization

For fight-specific optimization, especially in fights with fixed-length phases, it is recommended to map out all GCDs and FoF/Req timings to try and maximize total potency across phases.

See the Current Tier BiS and Fight Tips pages for more on encounter-specific optimization, or join the Balance discord for more up-to-date fight rotations.