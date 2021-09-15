---
title: Advanced Guide
---
This section assumes that you are comfortable with the entirety of the Paladin kit as well as the basic rotation outlined in the Intro & Rotation Guide.

*If that is not the case, please turn back.*


# Introduction to Paladin Optimization
Because Paladin's self-buffs (Fight or Flight and Requiescat) are very powerful compared to raid buffs (e.g. Trick Attack, Divination), much of Paladin optimization focuses around maximizing usages of personal buff windows within a given phase or killtime, sometimes at the cost of raid buff contribution.

Typically, maximizing usages of personal buff windows means trying to maximize the number of Requiescat usages, since a large majority of Requiescat's value can be realized in just one GCD. For example, Requiescat and Confiteor alone makes for ~1750 potency, whereas the value of Fight or Flight needs to be extracted over a longer time, since Goring Blade needs to tick and Atonements must be built and spent over several GCDs.

Because of this, knowing phase timings and projected killtimes is crucial to Paladin optimization, since they inform how many uses you can get out of Requiescat and thus also opener choice, number of Holy Spirits per Requiescat, etc.


# Shifted Atonement Rotation
Following a Fight or Flight opener in a full-uptime situation, every third Atonement may be delayed until after the next Goring Blade to fit 4 Atonements into each Fight or Flight window. This is a minor potency gain (~0.5% average, depending on rotation length and server DoT tick timing) as long as Goring Blades remain 8 or 9 GCDs apart.

Note that Fight or Flight is used after Riot Blade and must contain 11 GCDs.


In full uptime, using 3 Atonements in a row during Fight or Flight with this rotation will cost a DoT tick and result in a net potency loss. This may be ignored if Goring Blade will not be reapplied after Requirescat (due to upcoming phase transition, etc).


![Shifted Atonement](https://xiv.sleepyshiba.com/pld/assets/rotation-shiftedatonement.png)

# Alternative Openers
Often, in order to squeeze out another use of Requiescat in a phase or encounter, the first use of Requiescat in the opener has to be pushed up to be earlier. Here are a few different openers that do so, often by using Fight or Flight pre-pull in order to have fewer GCDs before the first Requiescat usage.


## 3-Second Pre-Pull FoF Opener


By omitting a Goring Blade combo, we can move Requiescat forward by 3 GCDs in the opener.

Note that the order of the Royal Authority combo and the Goring Blade combo doesn't matter for personal damage. However, by doing Royal Authority first, the Goring Blade, which is the stronger GCD, can be used under raidbuffs. This opener is also better than the standard opener for raidbuff contribution further into the fight.


![3 second prepull](https://xiv.sleepyshiba.com/pld/assets/rotation-3secondprepull.png)

## 16-Second Pre-Pull FoF Opener


By limiting the first FoF window to just a single Goring Blade combo, we are able to use Requiescat very early.


![16 second prepull](https://xiv.sleepyshiba.com/pld/assets/rotation-16secondprepull.png)

## Face-pull Requiescat Opener

By opening with Requiescat immediately on pull, we are able to get it on cooldown as early as possible. Only use this opener if it is required to get an extra Requiescat usage, for example in a phase that is 3:05 long (like after Fate Calibration Beta in The Epic of Alexander, with 3rd or 4th jail).


## Requiescat First Opener (Deprecated)


Favor prepull openers most of the time. Since this opener leads to a Requiescat-first loop, it is impossible to use a shifted Atonement loop because there are no Atonements between Confiteor and Fight or Flight to shift.

This is situationally used when the killtime favors a standard opener but you need Requiescat earlier for a disengage or to pad using AoE.


![Requiescat First Opener](https://xiv.sleepyshiba.com/pld/assets/rotation-reqfirst.png)

# Phase/Fight Finishers and Goring Uptime
If a phase or fight ends shortly after your Fight or Flight window (as is the case in optimal killtimes), the last Goring in a standard looping rotation can have wasted ticks, leading to a potency loss. By replacing an unbuffed Goring combo with a Royal combo and carrying 3 stacks of Sword Oath into FoF, we can replace that final FoF Goring combo with 3 Atonements, leading to a 6-atonement FoF finisher. This is the preferred way to end phases/fights.


**Standard FoF:** Total potency: ~13000


![standard](https://xiv.sleepyshiba.com/pld/assets/rotation-standardfof.png)

**6-Atone FoF:** Total potency: ~13400


![6 atone fof](https://xiv.sleepyshiba.com/pld/assets/rotation-6atonefof.png)

If a phase would end before a full Requiescat window, remove Holy Spirits until you end on Confiteor. If there are a few spare GCDs after Requiscat, delay the 6-atone FoF window by adding an unbuffed Goring Blade combo after the previous Requiescat, then cut Holy Spirits at the end as necessary.


## Choosing an opener for the kill-time
For full uptime fights, an opener should be chosen to maximize Requiescat usages while not sacrificing too many Fight or Flight GCDs.


| OPENER | TIME OF FIRST REQUIESCAT USAGE |
| --- | --- | 
| Standard | ~0:29 |
| 3s pre-pull | ~0:21 |
| 16s pre-pull | ~0:09 |
| Facepull req | ~0:01 |

Each 63s loop drifts Requiescat by ~3s while each 60s loop drifts Requiescat by ~1s (depending on skill speed).


If you know your killtime, choose an opener and number of 63s or 60s loops that would put your last Requiescat shortly before the boss dies.


# Two-target rotation
Paladin's physical AoE combo is too weak to be used with two targets. However, a further optimization to the single target loop can be used to increase potency by keeping Goring Blade uptime on both targets. By replacing a FoF Royal combo and a unbuffed set of Atonements in the standard single-target loop with a Goring combo each, we get a loop for extended two-target encounters (alternate targets for each Goring Blade).




![2 target rotation](https://xiv.sleepyshiba.com/pld/assets/rotation-twotarget.png)

# Fight-specific optimization
For fight-specific optimization, especially in fights with fixed-length phases, it is recommended to map out all GCDs and FoF/Req timings to try and maximize total potency across phases.

See the Current Tier BiS & Fights page for more on optimization.