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
---

# Introduction

This guide focuses on advanced level 100 Dark Knight gameplay, and assumes that you are comfortable with the entirety of the Dark Knight kit as well as its opener and rotation. If you're still leveling, you should start with [the leveling guide](/jobs/tanks/dark-knight/leveling-guide), and if you're still learning, you should start with the [the basic guide](/jobs/tanks/dark-knight/basic-guide), and build familiarity with the kit first.

Trying to apply these techniques before you're fully comfortable with the rotation and job could make your gameplay worse, not better.

# Unmend and GCD Downtime

Unmend is a pretty bad ability. It has a mere 150 potency, and to rub salt in the wound, it's a Spell, so if we have Skill Speed, it doesn't even apply to Unmend. Though, it's still better to use a bad GCD than to spend time you could be using a GCD doing nothing during forced melee downtime.

Some of the best advice you can receive as you're learning is to Always Be Casting, i.e. making sure your GCD is rolling at all times. This remains great advice and especially if you're still getting used to a fight, is still worth doing with Unmend rather than doing nothing.

But this is the advanced guide, so we can be a lot more nuanced than Always Be Casting. For us, it's not always correct to keep the GCD rolling for small amounts of GCD downtime. Our 123 combo has an average potency of 387, and that's not even counting the resource gain from Syphon Strike and Souleater. In comparison, Unmend's 150 potency is 38% of our average 123 GCD potency of 387. As a result, if you're only going to lose about second of your GCD rolling, it's usually better to not press Unmend and wait until you can use your 123 at the soonest opportunity instead.

We can make this into a rule of thumb based on the 38% number. 38% of 2.5 seconds is 0.95 seconds, so if you're kept away from the boss for only ~1.5 seconds or less, it may be better to not use Unmend, and wait until you get back to the boss to continue your 123 combo instead. Of course, if we're away from the boss for more than 1.5 seconds, and especially if we're away from the boss for 2.5 seconds or more, it's still correct to press Unmend rather than do no damage.

# Application Delay, Resources, and How to Be a Time Criminal

In FFXIV, abilities first consume their resources, and then apply their effects. The time between the cooldown starting and the ability's effects happening (both *applying* its damage and *applying* its other effects) is called the application delay of the ability. This primarily matters for us because of Blood Weapon's 600 MP gain on GCDs. The 600 MP is gained upon ability application, which means you can do something that would overcap MP, but spend it by using Edge of Shadow before the ability application. 

For most abilities, the application delay is low enough that we cannot realistically weave an Edge of Shadow before the ability (and MP gain, which could be granted by Blood Weapon) applies. You cannot use Syphon Strike (which has the 'standard' application delay of 0.62s) and use an Edge of Shadow before you gain the 600 MP from the Syphon Strike. However, Disesteem is an exception. Disesteem, has a 1.65s application time, meaning it's both possible and very comfortable to perform 'time crimes' with it.

For example, if you have 9600 MP and Blood Weapon active, you can use Disesteem, immediately weave Edge of Shadow, and not overcap MP, as the Edge of Shadow will spend MP before Disesteem (and the Blood Weapon buff that modified it to give you +600 MP) applies. If you were to use Hard Slash in the same situation, you would overcap MP.

Another ability where the application delay is worth knowing is Carve and Spit, which has an application delay of 1.47s, similarly allowing an Edge of Shadow weave before the MP gain applies.

This can come up in practical situations if you're going into burst with an especially high amount of MP. In these situations, you want to save Disesteem for the GCD where you'd normally overcap. If you have, for example, 9000 MP and a Dark Arts proc, then with Blood Weapon and Delirium up, using Disesteem -> Edge of Shadow -> Scarlet Delirium -> Edge of Shadow would overcap MP, whereas Scarlet Delirium -> Edge of Shadow -> Disesteem -> Edge of Shadow would not.

# Salted Earth, Buff Windows, and 90s Cooldowns

Salted Earth is a weird in that it has a 90s cooldown, unlike most other damaging cooldowns in the game. Regardless, it's best to use Salted Earth off cooldown rather than save it for buffs, since more uses of the ability will always trump less uses in buff windows. This only changes when you know the killtime and you know you wouldn't lose a use to hold the ability for buffs. For example, if you're killing the boss after 8:30, then you wouldn't lose a use of Salted Earth if you held the one you'd use around 1:30 to the 2m burst window. This also shifts the 7:30 Salted Earth to the 8m window, allowing us to pot in the 2m and 8m burst window (instead of the 0m and 6m burst window) without losing abilities under pot.

# How Does Living Shadow Work Exactly?

Living Shadow is a very unique ability. Its abilities work uniquely, and each of them has unique strength scaling and an alternate weapon damage scaling. This section goes into detail to provide exactly how it works, and the formulae that differ between Living Shadow's abilities and Dark Knight's normal abilities.

## Living Shadow's Abilities and 'Rotation'

Living Shadow spawns Esteem, which, after a ~6.8 second spawn delay, will perform six abilities, with a ~2.18 second delay between each.

The abilities Esteem uses do share animations with the player's abilities, but are not those abilities. Esteem's abilities do not share potencies with the equivalent ability for the player, and have their own own potencies. For example, if Bloodspiller gets a potency buff, then Living Shadow's Bloodspiller does not gain the same potency buff.

At level 100, Living Shadow performs the following abilities, in sequence, totaling 2450 potency. It may start over if the target moves out of range, but six attacks is always the limit:

- Abyssal Drain (AoE, 420 Potency)

- Shadowstride (Single Target, No Damage)

- Shadowbringer (AoE, 470 Potency)

- Edge of Shadow (Single Target, 420 Potency)

- Bloodspiller (Single Target, 420 Potency)

- Disesteem (AoE, 620 Potency)

## Living Shadow's Scaling

You may notice that Living Shadow's abilities have higher damage than an ability with equivalent potency from the player. This is due to Living Shadow's having a variety of alternate scalings to the player. Living Shadow updates buffs and debuffs in real-time, meaning you can use Living Shadow before buffs and have them applied to its abilities if they're applied before it uses that ability. It isn't affected by Darkside, but is affected by every other buff (including potions).

Living Shadow's base strength is calculated differently to the player. In particular:

- Living Shadow's strength does not include the party strength bonus for having different roles in your party (with all roles, this is a usually a 5% boost for the player)

- Living Shadow does not use your base stats (e.g. 23 base strength that races like The Lost have), and instead uses a base strength of 2. Effectively, this means strength is lowered by around 20, depending on your race (21 for max strength races like Xaela and The Lost)

- Living Shadow's strength includes all strength bonuses from gear, as normal

To be more specific, Living Shadow's base strength (before strength buffs like potions) is calculated by the following formula (where `baseStrength` is `440` at level 100):

`baseStrength + strengthProvidedByGear + 2`

Living Shadow's weapon damage multplier is calculated differently to the player. In particular:

- While players would use a weapon damage multplier of `115`, Living Shadow uses a weapon damage multiplier of `100`

- This is typical for all 'pet actions', and generally true for any damage that does not come 'from' the player

This changes the formula from the following:

`floor(baseStrength * 100 / 1000 + weaponDamage) / 100`

To the following (where `baseStrength` is 440 at level 100):

`floor(baseStrength * 115 / 1000 + weaponDamage) / 100`

Living Shadow's main stat multiplier is calculated differently to the player. In particular:

- The Tank Mastery trait means that tanks have a lower main stat power modifier than other jobs. The modifier varies by level, but at level 100, it is `190` for tanks, and `237` for all other roles (making tanks have ~80% lower main stat scaling than other roles). Living Shadow uses the 'other' scaling

- This means Living Shadow gains more damage scaling (about 25% higher) from strength than normal abilities on Dark Knight

At level 100 (where the main stat multiplier for tanks is `190`, and other jobs is `237`), this changes the main stat multiplier formula from the following (where `baseStrength` is `440` at level 100):

`trunc(190 * (totalStrength - baseStrength) / baseStrength) + 100 / 100`

To the following:

`trunc(237 * (livingShadowStrength - baseStrength) / baseStrength) + 100 / 100`
