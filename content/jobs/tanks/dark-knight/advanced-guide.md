---
title: Advanced Guide
card_header_image: /img/jobs/drk/advanced.png
authors:
  - Balance-DRK-Staff
  - violet-stardust
patch: "7.4"
lastmod: 2025-12-16T18:23:04.886Z
changelog:
  - date: 2024-11-16T15:17:46.131Z
    message: Updated for 7.1
  - date: 2024-12-26T01:30:53.485Z
    message: Updated to use LaTeX formatting, clearer equations, and corrected some
      minor mistakes
  - date: 2025-02-20T04:05:51.782Z
    message: Added some minor clarifications and improvements, including Esteem
      targeting behavior.
  - date: 2025-04-23T23:05:07.665Z
    message: Added a section on opener variations and application delay ghosting.
  - date: 2025-05-15T14:59:59.087Z
    message: Minor Living Shadow scaling correction.
  - date: 2025-05-18T19:55:36.634Z
    message: Minor updates to reflect hotfixed Shadowstride application delay.
description: ""
---
# Introduction

This guide focuses on advanced level 100 Dark Knight gameplay, and assumes that you are comfortable with the entirety of the Dark Knight kit as well as its opener and rotation. If you are still leveling, you should start with the [leveling guide](/jobs/tanks/dark-knight/leveling-guide), and if you're still learning, you should start with the the [basic guide](/jobs/tanks/dark-knight/basic-guide), and build familiarity with Dark Knight's kit first.

Trying to apply these techniques before you are fully comfortable with the rotation and job could make your gameplay worse rather than better.

# Unmend and GCD Downtime

Some of the best advice you can receive while learning is to Always Be Casting, i.e. making sure your GCD is rolling at all times. However, if you are forced out of melee range of the enemy (we may also say that you *have melee downtime* or *have GCD downtime*), your options for this are limited.
**Unmend** is a pretty bad ability. It has only 150 potency, and, since it is a Spell, it does not benefit from any Skill Speed you may have.
However, it is often your only option for a GCD that can be used outside of melee range, and especially when getting used to a fight, it is better to use **Unmend** than to do nothing at all.

In more advanced settings, we can be more nuanced --- for small amounts of GCD downtime, it may not always be correct to keep the GCD rolling with **Unmend**.
DRK's **Souleater** combo has an average potency per GCD of 387, even before counting the resource gain from **Syphon Strike** and **Souleater**.
If we have a downtime of \(x\) seconds (where \(x\) is smaller than 2.50 --- at 2.50 seconds or longer of downtime, Unmend can be freely used without delaying your next melee GCD), using **Unmend** gives 150 potency, but delays the next GCD by \(2.50 - x\) seconds, relative to if it had not been used.
Since the average potency of our filler GCDs (the **Souleater** combo) is 386.67 on average (or 387, rounding up to the nearest integer), this means that using Unmend costs \(\frac{2.50 - x}{\rm{GCD Speed}}\) of an average filler GCD, or \(387 \times \frac{2.50 - x}{\rm{GCD Speed}}\).

The average potency gain/loss from using Unmend when there are \(x\) seconds remaining of downtime can then be written as \(150 - (387 \times \frac{2.50 - x}{\rm{GCD Speed}})\).
When this quantity is positive, you gain damage from using **Unmend**, and when it is negative, you lose damage from using **Unmend**. Notably, this doesn't take into account MP gain or Blood gain from the **Souleater** combo, since including them would have its own set of caveats, and the \(2.50\) presumes you have no Spell Speed that would affect **Unmend**.

Setting this equal to zero and solving for \(x\) in terms of GCD speed, we see that the break-even point for using **Unmend** is when downtime (in seconds) is the result of the following expression:

\[
\begin{aligned}
2.5 - \left(\frac{150}{387} \times \rm{GCD Speed} \right)
\end{aligned}
\]

At a 2.50 GCD, this value is just over \(1.5\), and so using **Unmend** is a gain (on average) for downtime longer than 1.5 seconds, and a loss for downtime shorter than 1.5 seconds.

Of course, if you know exactly what GCD (if any) will be lost by using **Unmend** during a short downtime, there is no need to work with averages, and you can calculate for each individual case whether **Unmend** is a gain or not, but in general, using **Unmend** only when forced into downtime for more than 1.5 seconds at a time is a safe rule of thumb.

If you do opt to take GCD downtime instead of using **Unmend**, you should be aware that the clip might mean your GCD won't align as perfectly with oGCDs as it would normally on GCD speeds like 2.50. This isn't inherently an issue, but is something to be aware of.

It is also worth noting that **Disesteem** has a range of 10 yalms, meaning that if Disesteem is available, then you should use it over **Unmend** to deal with melee downtime.

# Application Delay, Resources, and How to Be a Time Criminal

In FFXIV, abilities first consume any resources that they cost, and then apply their effects. The time between the cooldown starting and the ability's effects happening (both *applying* its damage and *applying* its other effects) is called the *application delay* of the ability. This primarily matters for Dark Knight because of Blood Weapon's 600 MP gain on GCDs. This 600 MP is gained upon ability application, which means you can do something that would overcap MP, but spend it by using Edge of Shadow before the ability application. 

For most abilities, the application delay is low enough that we cannot realistically weave an **Edge of Shadow** before the ability (and MP gain, which could be granted by **Blood Weapon**) applies. Due to the animation lock being 0.6s, while it is theoretically possible, you cannot use **Syphon Strike** (which has the 'standard' application delay of 0.62s) and use an **Edge of Shadow** before you gain the 600 MP from the **Syphon Strike** in realistic scenarios due to requiring sub-0.02s precision and unrealistically low ping. **Comeuppance** has a 0.67s application delay, making it slightly more practically possible, but realistically requiring a combination of very low ping and/or plugins to be consistent.

However, **Disesteem** is an exception. **Disesteem** has a 1.65s application delay, meaning it is not only possible, but very comfortable to perform these 'time crimes' with it at any ping and under any circumstance.

For example, if you have 9600 MP and **Blood Weapon** active, you can use **Disesteem**, immediately weave **Edge of Shadow**, and not overcap MP, as the **Edge of Shadow** will spend MP before **Disesteem** (and the **Blood Weapon** buff that modified it to give you +600 MP) applies. If you were to use **Hard Slash** in the same situation, you would overcap MP.

Another ability where the application delay is worth knowing is **Carve and Spit**, which has an application delay of 1.47s, similarly allowing an **Edge of Shadow** weave before the MP gain applies.

This can come up in practical situations if you are about to enter burst window with an especially high amount of MP. In these situations, you want to save Disesteem for the GCD where you would normally overcap. If you have, for example, 9000 MP and a Dark Arts proc, then with **Blood Weapon** and **Delirium** up, using **Disesteem** -> **Edge of Shadow** -> **Scarlet Delirium** -> **Edge of Shadow** would overcap MP, whereas **Scarlet Delirium** -> **Edge of Shadow** -> **Disesteem** -> **Edge of Shadow** would not.

While the most salient application delays are highlighted in this section, if you're curious about the application delay of every Dark Knight ability, refer to [this spreadsheet](https://docs.google.com/spreadsheets/d/1Emevsz5_oJdmkXy23hZQUXimirZQaoo5BejSzL3hZ9I/edit?gid=0#gid=0).

## Application Delay and Ghosting

One other notable situation where application delay is relevant is during periods of downtime when a boss phases out, to potentially reappear later. For example, if you use a **Bloodspiller** (application delay of 0.8s) 0.7s before a boss disappears, then you will have essentially wasted your GCD and 50 Blood, whereas if you were to have used **Hard Slash** (application delay of 0.58s) it would have applied properly, and the GCD would not have been 'wasted'.

Some players refer to using an ability and not having it applied to the boss due to the boss disappearing as having that ability be 'ghosted'. To prevent this 'ghosting', you should be conscious about how you plan a rotation for fights with this kind of downtime, and especially wary not to use high application delay abilities (most notably **Bloodspiller**, **Carve and Spit**, and **Disesteem**) before bosses disappear or phases end.

# Salted Earth and Buff Windows

**Salted Earth** is unusual in that it has a 90 second cooldown, unlike most other damaging cooldowns in the game, and so it does not always line up with buff windows, which generally happen every 120 seconds.
Regardless, it is usually best to use **Salted Earth** off cooldown rather than to save it for buffs, since more uses of any ability will almost always be better than fewer uses in buff windows.

For a simple example, in a fight that lasts 6:30, using **Salted Earth** on cooldown gives 5 full usages at (approximately) 0:00, 1:30, 3:00, 4:30, and 6:00.
Delaying **Salted Earth** to fit in buffs gives 4 usages, at 0:00, 2:00, 4:00, and 6:00.
The usages at 0:00 and 6:00 are the same in both cases, and so can be ignored for a comparison.
With the delay, you trade three unbuffed usages (1:30, 3:00, 4:30) of **Salted Earth** for two buffed usages (2:00, 4:00).
As such, for this delay to be a gain, a buffed usage needs to be at least 1.5 times as strong as an unbuffed usage, which is not possible with a normal group composition, though could occur due to a special boss debuff or similar.

If you know your killtime (when the boss will die) or a phase timing (when the boss will disappear for a long time, essentially resetting your cooldowns), you may be able to delay Salted Earth to gain more buffed usages without losing overall usages, for an overall damage gain.
For example, with an 8:30 killtime, delaying your 7:30 Salted Earth to 8:00 exchanges the unbuffed 7:30 usage for a buffed 8:00 usage.
Alternately, delaying the 1:30 **Salted Earth** (and all subsequent ones) by 30 seconds moves the 1:30 and 7:30 usages into buffs at 2:00 and 8:00, respectively, in exchange for moving the 6:00 usage (in buffs) to 6:30 (out of buffs).
Both of these shifts have the same effect on the number of **Salted Earth** in buff windows, but the second option lets you have **Salted Earth** in 2:00 and 8:00 potions, rather than the standard 0:00 and 6:00 potion timing.

## Salted Earth Buff Snapshotting

**Salted Earth** snapshots all buffs on the player when cast, but checks damage modifying debuffs (e.g., **Chain Stratagem**, **Dokumori**, etc.) on targets every time it ticks for damage.
Because it is a ground effect ability, **Salted Earth** also gains a free tick on all targets in range immediately when cast, giving it 300 total potential potency (which is slightly increased by the skill speed DoT scalar).

**Salt and Darkness**, **Salted Earth**'s follow-up ability, snapshots buffs independently of **Salted Earth**, and snapshots both buffs on the player and damage modifying debuffs when it is used, separately from **Salted Earth**.

# Opener Variations

While the standard opener is discussed in the [openers guide](/jobs/tanks/dark-knight/openers), it's possible and sometimes beneficial to vary the opener to better match situations and fights with known timelines. While we would recommend the standard opener for any unknown fight, and while it will be more than functional for almost every encounter, this section aims to give you the tools to understand when and how to vary your opener.

## Why is the Opener The Way That It Is?

Before thinking about changing the opener for a specific fight, it is important to understand why the opener is the way that it is to begin with.

Ultimately, the opener has four main goals, that are also discussed in the [opener guide](/jobs/tanks/dark-knight/openers#opener-design-goals):

* Uncap MP and apply Darkside as soon as possible
* Make sure we get as much damage as we can in buffs
* Put the highest potency oGCDs on cooldown as soon as possible
* Make it possible to use your cooldowns as soon as they are off-cooldown and for them to automatically align with future buffs

It's for this reason why, for example, **Salted Earth** (total potency 800, 500 from Salt and Darkness) is ahead of the first charge of **Shadowbringer** (600 potency). 

**Carve and Spit** might seem like an exception, as, while it deals 540 potency itself, it also kind of counts for \(\frac{1}{5}\)th of an **Edge of Shadow** (92 potency) — however, it's still behind **Shadowbringer** in the opener. The reason for this is because the 5th **Edge** of the opener is always going to be after **Carve and Spit** applies, so the **Edge of Shadow** you may potentially gain will always be after this point in the opener irrespective of where you put **Carve and Spit**, which is why the 92 potency of \(\frac{1}{5}\)th of an **Edge** doesn't 'count' in this analysis. Lastly, putting **Carve and Spit** here makes it easier to press **Carve and Spit** off cooldown at any GCD speed without worrying about MP overcap. Moving it earlier might not cause you to overcap on MP during the opener, but could if pressed off cooldown during a future burst.

It may seem strange that the opener uses **Unmend**, given that, [in a previous section](/jobs/tanks/dark-knight/advanced-guide#unmend-and-gcd-downtime), we discussed how much **Unmend** is not a great ability to press if we can avoid it. However, much like how in that section we discussed how **Unmend** is worth just over a basic combo GCD, that same logic applies here, too. Since this standard opener is inherently designed for fights with unknown timelines, you may 'gain' or 'lose' a GCD based on where the boss dies or phases using **Unmend** versus opening with other abilities, since, due to the long application delay of about one second, you can start your GCD one second before the start of the fight. This delay allowing us to start our GCD earlier is what makes **Unmend** better or roughly equivalent DPS to alternate openers on average. **Unmend** also has a nice added bonus of giving us a huge buffer of enmity at the start. 

**Unmend** also has the important property of making our MP align much better during later bursts. Without it, the 6m burst can come extremely close to overcapping on MP without extreme care taken. It does this while also making sure our our big cooldowns align perfectly with when buffs come up from other jobs. If you're changing your opener to something that doesn't start with **Unmend**, and especially at faster speeds, you need to be a lot more wary about overcapping MP in future bursts.

## Opening With Shadowstride

Starting your opener with **Shadowstride** is one option. **Shadowstride**'s application delay of the enmity it grants is 0.66s, so you need to press it no earlier than 0.7s to not pull early. As a result, this shifts your GCD 'ahead' of the **Unmend** opener. After the delay and 0.6s animation lock, this would result in your first combo GCD (**Hard Slash**) starting ~1s ahead of the **Unmend** opener (~0.4s after pull). This can be beneficial in situations where phasing or forced downtime means that you would otherwise clip your GCD or lose a GCD with the **Unmend** opener. In other words, this shift in GCD start time could be beneficial to make your GCD better align with a fight's mechanics.

Pulling with **Shadowstride** can add some additional challenges, though. If you opt to pull with **Shadowstride** as the pulling tank, it may be more difficult to center the boss than when pulling with **Unmend**. Centering the boss at the start can be important in many fights, both so that everyone can attack the boss as soon as possible, and so that the boss won't jump around as much, interrupting melee GCD uptime. Your GCD uptime is less important than the combined rest of your party's, so it's important not to grief your party here --- if pulling with **Shadowstride** is causing issues positioning the boss after pull, it's probably not worth using **Shadowstride**.

Another thing this opener changes is the points available to weave oGCDs. If you're opening with **Shadowstride**, you should delay **Living Shadow** until after **Syphon Strike** to make sure its first attack is still in any buffs, and it also means that your ideal oGCDs after **Hard Slash** are a potion followed by **Edge of Shadow**. You can use **Delirium** after **Souleater** and then proceed with the rest of the opener as normal. This will push these abilities slightly earlier compared to where they normally would be (by about one second), accounting for the shift in GCD start time, and as a result, you may want to add an extra **Hard Slash** after **Souleater**, but before **Disesteem**, to ensure that the burst fits into late-applied buffs

## Breaking TBN Pre-pull If Possible

There are some encounters, such as Dawntrail's second Extreme, M3N, and P10S, where it's possible to use environmental hazards to safely break TBN pre-pull and grant a Dark Arts stack before the fight begins. This is very beneficial to do where possible as it regularly results in an extra Edge you wouldn't have otherwise gotten.

For some encounters (like P10S), while this is possible, it can take some time to stabilize the Dark Knight, so if you do want to do this trick, it's recommended to save this only for fights where this is a simple break, or for organized groups if doing this trick would inconvenience the party.

If starting the fight with 10k MP and a Dark Arts proc, try to open with **Unmend** -> **Edge** -> **Hard Slash** -> **Edge** -> **Living Shadow** (and then continue as normal) when possible, to result in the lowest amount of wasted MP gain.

# How Does Darkside Work Exactly?

Darkside is our 'gauge' that, for all practical purposes, works exactly like a personal 10% buff to our damage, similar to Warrior's Surging Tempest buff. Darkside is applied (and starts ticking down) as soon as you use **Edge of Shadow** or **Flood of Shadow** (or their **Darkness** variants at earlier levels), and **not** on their application of damage. In other words, the Darkside buff has an application time of 0.00s, even if the ability's damage doesn't. As a result, if you use another ability (or an auto-attack occurs) before the damage application for these abilities, it will be buffed by Darkside. 

As in the tooltip, these abilities grant thirty seconds of Darkside, up to a maximum of sixty.

If you didn't have any remaining Darkside duration when using it (such as the first **Edge of Shadow** in our opener), an ability that is granting Darkside will not, itself, be buffed by Darkside.

As [described below](/jobs/tanks/dark-knight/advanced-guide#how-does-living-shadow-work-exactly), none of Living Shadow's abilities are buffed by Darkside.

# How Does Passive MP Gain Work Exactly?

Passive MP/HP regeneration happens every three seconds on what's known as an 'actor tick'. This is what gives Dark Knight its passive MP gain, 600 if out of combat when the tick occurs, and 200 if in combat when the tick occurs. When these ticks happen is also when damage over time and healing over time effects trigger.

When players queue into an instance, party members have their actor ticks synced, so they all receive healing and MP ticks at the same time. If a player dies, their actor tick is paused until they are alive again (by either being resurrected or a party wipe).

This means that, if things are timed perfectly, with a TBN at 3.1s pre-pull, it's absolutely possible to get two out of combat actor ticks and therefore 1200 MP pre-combat, but MP gain being tied to these ticks is why this is impractical to rely on in practice. This is also why, in practice, starting a fight without using TBN pre-pull will mean you reach the 3000 MP required for the fifth Edge at different times.

For the most part, in unorganized settings where the party isn't trying to align their actor ticks for strategies like advanced LB generation, it's not really possible to rely on your actor ticks being at a consistent point during a fight, which is why MP can vary extremely slightly between pulls with identical play.

# How Does Living Shadow Work Exactly?

**Living Shadow** is a very unique ability.
Esteem abilities work uniquely, and each of them has unique strength scaling and an alternate weapon damage scaling.
This section provides details on exactly how it works, and the formulae that differ between **Living Shadow**'s abilities and Dark Knight's normal abilities.

## Living Shadow's Abilities, Targeting, and 'Rotation'

**Living Shadow** spawns Esteem, which, after a ~6.8 second spawn delay, will perform six abilities, with a ~2.18 second delay between each. The starting position of Esteem will be locked 560 milliseconds after the button is pressed.

Esteem begins searching for a target 750 milliseconds after **Living Shadow** is used, at which point it will lock onto the first enemy you attack. After being 'locked on' to an enemy, it will attempt to execute all of its abilities in sequence on that target until that enemy dies or runs out of abilities. If that enemy dies, Esteem retargets with the same logic but without the delay. In both cases, you must attack an enemy for Esteem to begin or continue its attack sequence.

Target selection is based off of cast event rather than damage application. Using a skill with a long application delay immediately after summoning will not lock Esteem's target despite dealing damage after the ~1s wait is over. Conversely, using a long-delay skill on one enemy followed by a short-delay skill on another will lock Esteem onto the first target even if the second enemy takes damage first.

The abilities Esteem uses share animations, damage types, and areas of effect with the player's abilities, but have their own potencies independent of the skills they mimic. For example, if **Bloodspiller** gets a potency buff, then **Living Shadow**'s **Bloodspiller** does not gain the same potency buff.

At level 100, **Living Shadow** performs the following abilities, in sequence, totaling 2450 potency. **Esteem** will always stop after executing six abilities:

* **Abyssal Drain** (AoE, 420 Potency, 0% less to additional targets)
* **Shadowstride** (Single Target, No Damage)
* **Shadowbringer** (AoE, 570 Potency, 25% less to additional targets)
* **Edge of Shadow** (Single Target, 420 Potency)
* **Bloodspiller** (Single Target, 420 Potency)
* **Disesteem** (AoE, 620 Potency, 25% less to additional targets)

If the target leaves Esteem's range, Esteem will replace the next ability with **Abyssal Drain**, and then continue where it was in its sequence. If the target is still out of range after **Abyssal Drain**, it will replace its next ability with **Shadowstride**. The only exception to this is if Esteem is out of range for its fifth attack (**Bloodspiller**), in which case it will replace **Bloodspiller** with **Shadowstride**, instead of **Abyssal Drain**. One quirk of Esteem is that **Disesteem** is a melee range ability for **Esteem**, so if Esteem is out of range for **Disesteem**, it will **Abyssal Drain** instead.

### Living Shadow's Ability Usage at Earlier Levels

While the properties and behaviour of Esteem stay the same between levels, the abilities it uses and their potencies differ. The following section outlines its ability usage at each unique set of levels.

#### Level 80-87

At level 80-87, **Living Shadow** performs the following abilities, in sequence, totaling 1700 potency:

* **Abyssal Drain** (AoE, 340 Potency, 0% less to additional targets)
* **Shadowstride** (Single Target, No Damage)
* **Flood of Shadow** (AoE, 340 Potency, 0% less to additional targets)
* **Edge of Shadow** (Single Target, 340 Potency)
* **Bloodspiller** (Single Target, 340 Potency)
* **Carve and Spit** (Single Target, 340 Potency)

#### Level 88-89

At level 88, the Enhanced Living Shadow trait increases the potency of its abilities to 420. As a result, at level 80-87, **Living Shadow** performs the following abilities, in sequence, totaling 2100 potency:

* **Abyssal Drain** (AoE, 420 Potency, 0% less to additional targets)
* **Shadowstride** (Single Target, No Damage)
* **Flood of Shadow** (AoE, 420 Potency, 0% less to additional targets)
* **Edge of Shadow** (Single Target, 420 Potency)
* **Bloodspiller** (Single Target, 420 Potency)
* **Carve and Spit** (Single Target, 420 Potency)

#### Level 90-99

At level 90, the Enhanced Living Shadow I trait replaces the 420 potency **Flood of Shadow** with a 570 potency **Shadowbringer**. As a result, at level 90-99, **Living Shadow** performs the following abilities, in sequence, totaling 2250 potency:

* **Abyssal Drain** (AoE, 420 Potency, 0% less to additional targets)
* **Shadowstride** (Single Target, No Damage)
* **Shadowbringer** (AoE, 570 Potency, 25% less to additional targets)
* **Edge of Shadow** (Single Target, 420 Potency)
* **Bloodspiller** (Single Target, 420 Potency)
* **Carve and Spit** (Single Target, 420 Potency)

#### Level 100

As listed above, but listed again for completeness, at level 100, the Enhanced Living Shadow II trait replaces the 420 potency **Carve and Spit** with a 620 potency **Disesteem**. As a result, we get our final set of abilities, totaling 2450 potency:

* **Abyssal Drain** (AoE, 420 Potency, 0% less to additional targets)
* **Shadowstride** (Single Target, No Damage)
* **Shadowbringer** (AoE, 570 Potency, 25% less to additional targets)
* **Edge of Shadow** (Single Target, 420 Potency)
* **Bloodspiller** (Single Target, 420 Potency)
* **Disesteem** (AoE, 620 Potency, 25% less to additional targets)

## Living Shadow's Scaling

You may notice that Living Shadow's abilities have higher damage than an ability with equivalent potency from the player. This is due to Living Shadow having a variety of alternate scalings to the player, that, combined, result in higher damage overall. Living Shadow updates buffs and debuffs in real-time, meaning you can use Living Shadow before buffs and have them applied to its abilities if they are applied before it uses that ability. It is not affected by Darkside, but is affected by every other buff (including potions). Unlike some abilities with alternate scalings, its listed potencies are accurate, and using the formulae listed below with the listed potencies, you get accurate damage numbers.

To use an example, in 7.05 2.50 BiS, a 620 potency attack (e.g. **Scarlet Delirium**) from the player with Darkside active would do on average \~37069 damage, whereas a 620 potency attack from **Living Shadow** (e.g. **Living Shadow**'s **Disesteem**) would do on average \~38958 damage (about 5% more). Due to the multitude of formulae involved, there is no simple rule for how different they will be at a given gear level, but in general, the higher your strength, the more damage **Living Shadow**'s abilities will do compared to an equivalent potency ability on the player.

### Living Shadow's Scaling: The Specifics

**Living Shadow**'s base strength is calculated differently to the player. In particular:

**Living Shadow**'s base strength is calculated differently to the player's. In particular, the player's base strength provided by level (\(440\) at level 100) is multiplied by a job-based modifier, which for Dark Knight is \(1.05\), whereas Living Shadow's is not.

This changes the formula for base strength (before racial modifiers) from the following:

\[
\begin{aligned}
\rm{darkKnightBaseStrength} = \left \lfloor{{440 \times \frac{105}{100}}}\right\rfloor = 462
\end{aligned}
\]

To the following:

\[
\begin{aligned}
\rm{livingShadowBaseStrength} = \left \lfloor{{440 \times \frac{100}{100}}}\right\rfloor = 440
\end{aligned}
\]

After the base strength is calculated, the following apply to get the final strength value: 

* **Living Shadow** does not use your racial stats (e.g. +3 base strength that races like The Lost have), and instead uses a racial strength bonus of +2
* **Living Shadow**'s strength does not include the party strength bonus for having different roles in your party (with all roles, this is a usually a 5% boost for the player)
* **Living Shadow**'s strength includes all strength bonuses from gear, as normal

To be more specific, **Living Shadow**'s strength (before strength buffs like potions) is calculated by the following formula (where \(\rm{livingShadowBaseStrength}\) is defined above):

\[
\begin{aligned}
\rm{livingShadowBaseStrength} + \rm{strengthProvidedByGear} + 2
\end{aligned}
\]

**Living Shadow**'s weapon damage multiplier is calculated differently to the player. In particular:

* While players would use a weapon damage multiplier of \(115\), **Living Shadow** uses a slightly lower weapon damage multiplier of \(100\)
* This is typical for all 'pet actions', and generally true for any damage that does not come 'from' the player

This changes the weapon damage multiplier formula from the following (where \(\rm{baseMainStat}\) is \(440\) at level 100):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{115 \times \rm{baseMainStat}}{1000} + \rm{weaponDamage}}\right \rfloor}{100}
\end{aligned}
\]

To the following (where \(\rm{baseMainStat}\) is \(440\) at level 100):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{100 \times \rm{baseMainStat}}{1000} + \rm{weaponDamage}}\right \rfloor}{100}
\end{aligned}
\]

Living Shadow's main stat multiplier is calculated differently to the player. In particular:

* The Tank Mastery trait means that tanks have a lower main stat power modifier than other jobs. The modifier varies by level, but at level 100, it is \(190\) for tanks, and \(237\) for all other roles (meaning tanks have ~20% lower main stat scaling than other roles). **Living Shadow** uses the 'other' scaling
* This means that **Living Shadow** gains more damage scaling (about 25% higher) from strength than other abilities on Dark Knight

At level 100 (where the main stat multiplier for tanks is \(190\), and other jobs is \(237\)), this changes the main stat multiplier formula from the following (where \(\rm{baseMainStat}\) is \(440\) at level 100):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{190 \times \left(\rm{totalStrength} - \rm{baseMainStat}\right)}{\rm{baseStrength}}}\right \rfloor + 100}{100}
\end{aligned}
\]

To the following (where \(\rm{livingShadowStrength}\) is the total value, calculated via the formula defined above):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{237 \times \left(\rm{livingShadowStrength} - \rm{baseMainStat}\right)}{\rm{baseMainStat}}}\right \rfloor + 100}{100}
\end{aligned}
\]
