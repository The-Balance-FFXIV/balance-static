---
title: Dark Knight Advanced Guide
card_header_image: /img/jobs/drk/advanced.png
authors:
  - Balance-DRK-Staff
  - violet-stardust
patch: "7.1"
lastmod: 2024-11-16T15:17:46.131Z
changelog:
  - date: 2024-11-16T15:17:46.131Z
    message: Updated for 7.1
  - date: 2024-12-24T18:57:46.131Z
    message: Updated to use LaTeX formulae, correct a minor mistake
---

# Introduction

This guide focuses on advanced level 100 Dark Knight gameplay, and assumes that you are comfortable with the entirety of the Dark Knight kit as well as its opener and rotation. If you are still leveling, you should start with the [leveling guide](/jobs/tanks/dark-knight/leveling-guide), and if you're still learning, you should start with the the [basic guide](/jobs/tanks/dark-knight/basic-guide), and build familiarity with Dark Knight's kit first.

Trying to apply these techniques before you are fully comfortable with the rotation and job could make your gameplay worse rather than better.

# Unmend and GCD Downtime

Some of the best advice you can receive while learning is to Always Be Casting, i.e. making sure your GCD is rolling at all times. However, if you are forced out of melee range of the enemy (we may also say that you _have melee downtime_ or _have GCD downtime_), your options for this are limited.
Unmend is a pretty bad ability. It has only 150 potency, and, since it is a Spell, it does not benefit from any Skill Speed you may have.
However, it is often your only option for a GCD that can be used outside of melee range, and especially when getting used to a fight, it is better to use Unmend than to do nothing at all.

In more advanced settings, we can be more nuanced --- for small amounts of GCD downtime, it may not always be correct to keep the GCD rolling with Unmend.
DRK's Souleater combo has an average potency per GCD of 387, even before counting the resource gain from Syphon Strike and Souleater.
If we have a downtime of \(x\) seconds (where \(x\) is smaller than 2.50 --- at 2.50 seconds or longer of downtime, Unmend can be freely used without delaying your next melee GCD), using Unmend gives 150 potency, but delays the next GCD by \(2.50 - x\) seconds, relative to if it had not been used.
On average, this means that using Unmend costs \(\frac{2.50 - x}{\rm{GCD Speed}}\) of an average filler GCD, or \(378 - \frac{2.50 - x}{\rm{GCD Speed}}\).
The average potency gain/loss from using Unmend when there are \(x\) seconds remaining of downtime can then be written as \(150 - (378 \times \frac{2.50 - x}{\rm{GCD Speed}})\).
When this quantity is positive, you gain damage from using Unmend, and when it is negative, you lose damage from using Unmend.

Setting this equal to zero and solving for \(x\) in terms of GCD speed, we see that the amount of seconds break-even point for using Unmend is when downtime is the the result of the following equation:

\[
\begin{aligned}
2.5 - \left(\frac{150}{378} \times \rm{GCD Speed} \right)
\end{aligned}
\]

At a 2.50 GCD, this value is just over \(1.5\), and so using Unmend is a gain (on average) for downtime longer than 1.5 seconds, and a loss for downtime shorter than 1.5 seconds.

Of course, if you know exactly what GCD (if any) will be lost by using Unmend during a short downtime, there is no need to work with averages, and you can calculate for each individual case whether Unmend is a gain or not, but in general, using Unmend only when forced into downtime for more than 1.5 seconds at a time is a safe rule of thumb.

It is also worth noting that Disesteem has a range of 10 yalms, meaning that if Disesteem is available, then you should use it over Unmend to deal with melee downtime.

# Application Delay, Resources, and How to Be a Time Criminal

In FFXIV, abilities first consume any resources that they cost, and then apply their effects. The time between the cooldown starting and the ability's effects happening (both *applying* its damage and *applying* its other effects) is called the *application delay* of the ability. This primarily matters for Dark Knight because of Blood Weapon's 600 MP gain on GCDs. This 600 MP is gained upon ability application, which means you can do something that would overcap MP, but spend it by using Edge of Shadow before the ability application. 

For most abilities, the application delay is low enough that we cannot realistically weave an Edge of Shadow before the ability (and MP gain, which could be granted by Blood Weapon) applies. You cannot use Syphon Strike (which has the 'standard' application delay of 0.62s) and use an Edge of Shadow before you gain the 600 MP from the Syphon Strike. However, Disesteem is an exception. Disesteem has a 1.65s application time, meaning it is not only possible but very comfortable to perform these 'time crimes' with it.

For example, if you have 9600 MP and Blood Weapon active, you can use Disesteem, immediately weave Edge of Shadow, and not overcap MP, as the Edge of Shadow will spend MP before Disesteem (and the Blood Weapon buff that modified it to give you +600 MP) applies. If you were to use Hard Slash in the same situation, you would overcap MP.

Another ability where the application delay is worth knowing is Carve and Spit, which has an application delay of 1.47s, similarly allowing an Edge of Shadow weave before the MP gain applies.

This can come up in practical situations if you are about to enter burst window with an especially high amount of MP. In these situations, you want to save Disesteem for the GCD where you would normally overcap. If you have, for example, 9000 MP and a Dark Arts proc, then with Blood Weapon and Delirium up, using Disesteem -> Edge of Shadow -> Scarlet Delirium -> Edge of Shadow would overcap MP, whereas Scarlet Delirium -> Edge of Shadow -> Disesteem -> Edge of Shadow would not.

# Salted Earth and Buff Windows

Salted Earth is unusual in that it has a 90 second cooldown, unlike most other damaging cooldowns in the game, and so it does not always line up with buff windows, which generally happen every 120 seconds.
Regardless, it is usually best to use Salted Earth off cooldown rather than to save it for buffs, since more uses of any ability will almost always be better than fewer uses in buff windows.

For a simple example, in a fight that lasts 6:30, using Salted Earth on cooldown gives 5 full usages at (approximately) 0:00, 1:30, 3:00, 4:30, and 6:00.
Delaying Salted Earth to fit in buffs gives 4 usages, at 0:00, 2:00, 4:00, and 6:00.
The usages at 0:00 and 6:00 are the same in both cases, and so can be ignored for a comparison.
With the delay, you trade three unbuffed usages (1:30, 3:00, 4:30) of Salted Earth for two buffed usages (2:00, 4:00).
As such, for this delay to be a gain, a buffed usage needs to be at least 1.5 times as strong as an unbuffed usage, which is not possible with a normal group composition, though could occur due to a special boss debuff or similar.

If you know your killtime (when the boss will die) or a phase timing (when the boss will disappear for a long time, essentially resetting your cooldowns), you may be able to delay Salted Earth to gain more buffed usages without losing overall usages, for an overall damage gain.
For example, with an 8:30 killtime, delaying your 7:30 Salted Earth to 8:00 exchanges the unbuffed 7:30 usage for a buffed 8:00 usage.
Alternately, delaying the 1:30 Salted Earth (and all subsequent ones) by 30 seconds moves the 1:30 and 7:30 usages into buffs at 2:00 and 8:00, respectively, in exchange for moving the 6:00 usage (in buffs) to 6:30 (out of buffs).
Both of these shifts have the same effect on the number of Salted Earth in buff windows, but the second option lets you have Salted Earth in 2:00 and 8:00 potions, rather than the standard 0:00 and 6:00 potion timing.

## Salted Earth Buff Snapshotting

Salted Earth snapshots all buffs on the player when cast, but checks damage modifying debuffs (e.g., Chain Stratagem, Dokumori, etc.) on targets every time it ticks for damage.
Because it is a ground effect ability, Salted Earth also gains a free tick on all targets in range immediately when cast, giving it 300 total potential potency (which is slightly increased by the skill speed DoT scalar).

Salt and Darkness, Salted Earth's follow-up ability, snapshots buffs independently of Salted Earth, and snapshots both buffs on the player and damage modifying debuffs when it is used, separately from Salted Earth.

# How Does Living Shadow Work Exactly?

Living Shadow is a very unique ability.
Esteem abilities work uniquely, and each of them has unique strength scaling and an alternate weapon damage scaling.
This section provides details on exactly how it works, and the formulae that differ between Living Shadow's abilities and Dark Knight's normal abilities.

## Living Shadow's Abilities and 'Rotation'

Living Shadow spawns Esteem, which, after a ~6.8 second spawn delay, will perform six abilities, with a ~2.18 second delay between each.

The abilities Esteem uses share animations, damage types, and areas of effect with the player's abilities, but have their own potencies independent of the skills they mimic. For example, if Bloodspiller gets a potency buff, then Living Shadow's Bloodspiller does not gain the same potency buff.

At level 100, Living Shadow performs the following abilities, in sequence, totaling 2450 potency. It may start over if the target moves out of range, but always stops after executing six abilities:

- Abyssal Drain (AoE, 420 Potency)

- Shadowstride (Single Target, No Damage)

- Shadowbringer (AoE, 470 Potency)

- Edge of Shadow (Single Target, 420 Potency)

- Bloodspiller (Single Target, 420 Potency)

- Disesteem (AoE, 620 Potency)

## Living Shadow's Scaling

You may notice that Living Shadow's abilities have higher damage than an ability with equivalent potency from the player. This is due to Living Shadow having a variety of alternate scalings to the player, that, combined, result in higher damage overall. Living Shadow updates buffs and debuffs in real-time, meaning you can use Living Shadow before buffs and have them applied to its abilities if they are applied before it uses that ability. It is not affected by Darkside, but is affected by every other buff (including potions). Unlike some abilities with alternate scalings, its listed potencies are accurate, and using the formulae listed below with the listed potencies, you get accurate damage numbers.

To use an example, in 7.05 2.50 BiS, a 620 potency attack (e.g. Scarlet Delirium) from the player with Darkside active would do on average ~37069 damage before crit, whereas a 620 potency attack from Living Shadow (e.g. Living Shadow's Disesteem) would do on average ~38958 damage before crit (about 5% more). Due to the multitude of formulae involved, there is no simple rule for how different they will be at a given gear level, but in general, the higher your strength, the more damage Living Shadow's abilities will do compared to an equivalent potency ability on the player.

### Living Shadow's Scaling: The Specifics

Living Shadow's base strength is calculated differently to the player. In particular:

- Living Shadow's strength does not include the party strength bonus for having different roles in your party (with all roles, this is a usually a 5% boost for the player)

- Living Shadow does not use your base stats (e.g. 23 base strength that races like The Lost have), and instead uses a base strength of 2. Effectively, this means strength is lowered by around 20, depending on your race (21 for max strength races like Xaela and The Lost)

- Living Shadow's strength includes all strength bonuses from gear, as normal

To be more specific, Living Shadow's base strength (before strength buffs like potions) is calculated by the following formula (where \(\rm{baseStrength}\) is \(440\) at level 100):

\[
\begin{aligned}
\rm{baseStrength} + \rm{strengthProvidedByGear} + 2
\end{aligned}
\]

Living Shadow's weapon damage multiplier is calculated differently to the player. In particular:

- While players would use a weapon damage multiplier of \(115\), Living Shadow uses a slightly lower weapon damage multiplier of \(100\)

- This is typical for all 'pet actions', and generally true for any damage that does not come 'from' the player

This changes the weapon damage multiplier formula from the following:

\[
\begin{aligned}
\frac{\left \lfloor{\frac{\rm{baseStrength} \times 115}{1000} + \rm{weaponDamage}}\right \rfloor}{100}
\end{aligned}
\]

To the following (where \(\rm{baseStrength}\) is \(440\) at level 100):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{\rm{baseStrength} \times 100}{1000} + \rm{weaponDamage}}\right \rfloor}{100}
\end{aligned}
\]


Living Shadow's main stat multiplier is calculated differently to the player. In particular:

- The Tank Mastery trait means that tanks have a lower main stat power modifier than other jobs. The modifier varies by level, but at level 100, it is \(190\) for tanks, and \(237\) for all other roles (meaning tanks have ~20% lower main stat scaling than other roles). Living Shadow uses the 'other' scaling

- This means that Living Shadow gains more damage scaling (about 25% higher) from strength than other abilities on Dark Knight

At level 100 (where the main stat multiplier for tanks is \(190\), and other jobs is \(237\)), this changes the main stat multiplier formula from the following (where \(\rm{baseStrength}\) is \(440\) at level 100):


\[
\begin{aligned}
\frac{\left \lfloor{\frac{190 \times \left(\rm{totalStrength} - \rm{baseStrength}\right)}{\rm{baseStrength}}}\right \rfloor + 100}{100}
\end{aligned}
\]

To the following (where \(\rm{livingShadowStrength}\) is calculated via the formula defined above):

\[
\begin{aligned}
\frac{\left \lfloor{\frac{236 \times \left(\rm{livingShadowStrength} - \rm{baseStrength}\right)}{\rm{baseStrength}}}\right \rfloor + 100}{100}
\end{aligned}
\]

