---
title: Machinist Advanced Guide
card_header_image: /img/jobs/mch/advanced.png
authors:
  - Balance-MCH-Staff
patch: "5.58"
lastmod: 2021-11-15T21:11:47.168Z
changelog:
  - date: 2021-11-15T21:12:08.136Z
    message: Added page
---
*This guide is intended to give the reader the tools needed to approach encounter optimization as a Machinist.
It assumes you are already familiar with the fundamentals of the job – if you need a refresher, please
read the [Basic Guide](https://www.thebalanceffxiv.com/jobs/ranged/machinist/basic-guide/) and come back when you're done.*

# Introduction to Optimization

This section will introduce some core concepts for optimizing encounters in FFXIV.
If you are already familiar with optimization on other jobs, you can feel free to skip ahead!

## The Golden Rules

There are two simple rules for optimizing an encounter, which apply to every combat job in the game:

**1. Use your cooldowns as many times as possible.**

In other words, "just press buttons lol". This rule is baked into our general rotation already – we use tool GCDs as soon as they become available,
we use Wildfire at the same point in our GCD rotation every time, and we avoid overcapping as much as possible.
However, there are also places in our general rotation (like in the opener) where we intentionally delay our cooldowns.
This leads us to the second rule:

**2. Make your cooldowns deal as much damage as possible.**

What separates good Machinists from great Machinists is their ability to coordinate as many cooldowns and resources
as possible into periods where there they have raid buffs, tinctures, or other fight-specific burst phases. This is why
the general opener calls for delaying Chain Saw and Wildfire into raid buffs, but is that always the right choice? 

We'll tackle opener optimization shortly, but hopefully it's clear to you that the two golden rules work in
opposition to each other. Delaying your cooldowns for raid buffs means potentially losing uses,
and using your cooldowns as early as possible means potentially missing raid buffs.
The key to encounter optimization is therefore to **identify how many uses** you can get in a fight, and then
**plan those uses effectively**.

## Average Case vs. Fixed Case

The general rotation is designed for the **average case**. These are the situations where kill time is
completely unknown. This is why the general opener delays certain cooldowns into raid buffs: *on average*
you deal more damage by following this opener, even though there's a chance that you will lose uses at
the end of the fight.

The average case is a good framework for general theorycrafting, but when we're optimizing an encounter
we're generally dealing with the **fixed case**. In this scenario, we know exactly how long each phase is
and we have a fairly good idea of what our kill time will be. This enables us to be precise with our
cooldown usage: we can use the delayed opener, or a rushed opener (which we'll see shortly), or
any number of tricks which allow us to maximize the two golden rules. 

When raiding, try to always be aware of which of the above cases you're currently in. Do you know exactly
when the boss is going to disappear for downtime? If so, do you know which GCD you'll hit the boss with last?
Is there an opportunity for you to use a cooldown earlier in the opener (to gain a use) or, if not, later in the opener
(to align with more buffs)?

# Battery

Let's face it, Queen really puts the *auto* in "automaton". It can be boring to press one button
and watch your pet do the rest on its own. For this reason, you might just overlook how completely bonkers its
damage is. A 100-battery Queen deals **2600 potency** (around 2314 player potency)! That's over four Drills worth of damage, which means that
**Queen is the single most important action to align to raid buffs**. If you're serious about optimizing an encounter,
the best place to start is by carefully planning out the timing for your Queen summons to fit as many of her hits as possible
into raid buffs. 

## Battery Manipulation

Sometimes you want to delay your Queen summon without taking battery away from the Queen that comes after.
To do this, **you can use Hypercharge to delay your upcoming Clean Shot** which increases the amount of time you
have to summon Queen without generating more battery. If you're in this situation, see if you can manipulate
your Hypercharge timings to make this work.

In a two-target cleave, another option is to **use Scattergun to delay your upcoming Clean Shot**. Note that
Scattergun is a small potency loss compared to your Heated Combo against two targets, so you're going to need
a really good reason for delaying Queen before this becomes an option.

## Post-Battery Phase

If you've already summoned your last Queen of the fight, you've entered the "post-battery" phase. This
has no consequence on single target fights, but it does shift the AoE priority slightly. **In post-battery
situations, Scattergun is a gain over Heated Combo on two targets**.

# Reassemble

In Endwalker we received a second charge of Reassemble which has some interesting consequences.
Since we generate two charges every 110 seconds, this cooldown doesn't loop cleanly with our two minute cycle. 
If we try to always use Reassemble under buffs we'll drift the cooldown by 10 seconds every two minutes which
generally (but not necessarily) results in a missed use for typical full uptime fights.

**Still, fitting two Reassembles into as many buff windows as possible without losing a use is a key element of
encounter optimization**. The best way to work this out for yourself is with a spreadsheet that includes
the timings of each of your tool uses as well as the time ranges where raid buffs are located.
Note that raid buff windows where tinctures are used are especially important to try to fit two Reassembles into 
if the fight allows it.

## General Rotation Cheatsheet

If you are strictly following the general opener's tool timings in a full uptime fight, you can use the following
table to identify kill times (or phase times) where you won't lose a use by fully aligning Reassemble to buffs:

| Start Time | End Time | Reassemble in Buffs? |
|------------|----------|----------------------|
| 0:22.5     | 1:02.5   | Yes                  |
| 1:12.5     | 2:00     | Yes                  |
| 2:25       | 2:42.5   | Yes                  |
| 3:12.5     | 3:42.5   | Yes                  |
| 4:22.5     | 4:40     | Yes                  |
| 5:12.5     | 5:42.5   | Yes                  |
| 7:12.5     | 7:20     | Yes                  |
| 7:20       | ∞        | No                   |

Note that if your kill time isn't within any of the above ranges, that doesn't necessarily mean you should use Reassemble
fully on cooldown – it just means you won't be able to fit two Reassembles in *every* buff window.

# Wildfire Setups

At a 2.50 GCD with full uptime, Wildfire's cooldown loops cleanly over our GCD rotation and we can effectively
follow the same pattern for weaving Wildfire as we did in the opener every two minutes. However, if there's awkward
downtime or you need to hold Wildfire for delayed burst, you might need to weave Wildfire differently to get it
on cooldown at the right time without interfering with your GCD rotation. Below are the most common options:

## WF > HC

The standard and most ping-friendly Wildfire setup. 

![WF > HC](https://i.imgur.com/sjBViLP.png)

## WF > GCD > HC

If you need to weave Wildfire before a tool GCD, use this setup.

![HC > GCD > HC](https://i.imgur.com/sjBViLP.png)

## HC > HB > WF

This one exists too.

![HC > HB > WF](https://i.imgur.com/j2KijBX.png)

# Opener Optimization

The order in which you use cooldowns in the opener sets the pace for the rest of the encounter. If you use
something outside of buffs in the opener, then in a full uptime scenario it will fall outside of buffs in all
future burst windows too. While the two golden rules of optimization will ultimately dictate which cooldowns you
choose to align to buffs, this section will offer some advice on how to optimize your openers.

## Tools

We'll cover potency analysis in a separate section, but the tl;dr is that in terms of potency per second,
**Air Anchor > Drill > Chain Saw**. That's why in the general opener we choose to use our tools
in this order. In the fixed case we can manipulate this order or rush tools to prevent losing uses, and
similarly we can delay tool uses to fit all of them under buffs if it doesn't result in lost uses.

As an example, with the general opener and full uptime we would use Drill at 6:02.5 and Chain Saw at 6:12.5.
If the boss is expected to die around 6:10 at the latest, we can move Chain Saw earlier in our opener to
get the final cast off at 6:05. This might lose some buff alignment on the previous Chain Saw casts, but gaining
a full extra use more than makes up for it.

## Automaton Queen

An interesting new facet of the Machinist rotation in Endwalker is the ability to summon Queen in the opener.
To do so requires generating 50 battery over a minimum of 5 full GCDs (HC1 + HC2 + HC3, AA, CS)
prior to your first Hypercharge window. In practice this becomes 6 full GCDs since we'll need to get Drill
on cooldown before Wildfire as well.
Since this Queen comes out so late it can only land a few punches under raid buffs,
but **it will resolve its full damage under an opener tincture** if you choose to use one here.

Using an opener Queen is usually a good way to squeeze some extra juice out of your battery gauge.
However, with certain kill times **the 6 GCD requirement may end up delaying your Wildfire enough to lose a use**!

## Wildfire

As mentioned above, there may be situations where we need to skip the opener Queen in order to get Wildfire
on cooldown earlier. Setting up Wildfire in the opener is a bit more involved than other cooldowns: 
first, we need the 50 heat from Barrel Stabilizer.
Second, we need to dump a minimum of 3 charges total of Gauss Round and Ricochet to prevent them from overcapping
during Hypercharge. **The earliest we can use Wildfire without overcapping is after the 2nd GCD**. 
To do so requires a WF > GCD > HC setup – you can see an example in the "fast opener" at the end of this section.

An interesting quirk about Wildire is that it's handled internally as a DoT effect rather than direct damage.
This has a couple consequences:

1. Wildfire snapshots buffs at the time you cast it, rather than when the damage resolves.
2. Wildfire's damage has a small Skill Speed multiplier if you've got more than 400 of the stat.

One final thing to note about Wildfire is that it cannot benefit from critical hits and direct hits. Therefore,
**you can ignore critical and direct hit buffs** when planning where to use Wildfire.

## Reassemble

Getting Reassemble on cooldown before the pull is a nice way to potentially gain an extra charge by the end of the fight.
If it doesn't get you an extra charge, you can consider delaying the first use of Reassemble until your first tool GCD
under raid buffs. The second charge can then be used on the Drill which follows Wildfire to catch more buffs. 

## Secondary Hypercharges

You may recall from the [Basic Guide](https://www.thebalanceffxiv.com/jobs/ranged/machinist/basic-guide/) that
we intentionally use three consecutive combo GCDs in the opener to allow for a Hypercharge to fit in subsequent
burst windows. When optimizing your opener you should consider the placement of these secondary Hypercharge windows
since they increase the amount of potency we can fit into raid buffs.

If you're doing a fast Wildfire opener, another alternative is to **make space for your secondary Hypercharge after Wildfire**.
See the fast opener below.

## Example Openers

There are dozens of viable ways to get things on cooldown as a Machinist. Below are a couple very different variations
which you may find useful (feel free to rearrange the order of the tool GCDs as needed):

### Delayed Tools

In situations where you can safely drift all three tools without losing any uses, this variant is great for
maximizing buff alignment. 

![Delayed Tools](https://i.imgur.com/x0Ah7a2.png)

### Fast

On the other end of the spectrum, you might face a situation where you need to get everything on cooldown ASAP.
This variant uses Drill last to enable double Hypercharge windows in between Drill casts.

![Fast Opener](https://i.imgur.com/Hg0WVeE.png)


# Tinctures

Tinctures are an ~8% damage buff, bigger than any raid buff. It's important that you get as much damage into these windows
as possible, which ideally includes:

* Automaton Queen
* 2 Drills
* 1-2 Reassembles
* Air Anchor
* Chain Saw
* Wildfire
* 10+ Heat Blasts
* 15+ Gauss Rounds / Ricochets

Since Queen is our single biggest source of direct potency in one button, **Machinists greatly prefer to use their first tincture
at the two minute window** where they can fit in a full Queen. However, this is not always possible: if we use our tincture at 2:00
then the next buff window we can use a tincture on is 8:00 which is often beyond what an encounter allows for. If coordinating
a delay of raid buffs is an option for your group then in this case it might be possible to use the 2nd tincture at 6:30 or
7:00 instead.

## Cheatsheet

The following table can be used to help plan your tincture usage in a typical fight:

| Max Kill Time | Uses | Standard Buff Timings |
|---------------|------|-----------------------|
| 2:30          | 1    | 0:00                  |
| 4:30          | 1    | 2:00                  |
| 6:00          | 2    | 0:00, 4:30 (or 5:00)  |
| 6:30          | 2    | 0:00, 6:00            |
| 8:30          | 2    | 2:00, 8:00            |
| 10:00         | 3    | 0:00, 4:30, 9:00      |
| 10:30         | 3    | 0:00, 5:00, 10:00     |

# Potency Analysis

\< The numerical stuff -- will add pending 6.1 patch notes & TC \>

# The Machinist's Toolbelt

As a Machinist, you have a variety of miscellaneous optimization "tools" available to you (get it?). We'll cover
each one briefly, but ultimately it's up to you to find the best places to apply them in a given encounter.
If you've made it this far in the guide you should have no problem with that!

## Ricochet Pooling

If an AoE situation is coming up in the fight, you can pool your Ricochet charges to take advantage
of their cleave damage. Maybe this is obvious to you or maybe you've never thought about it until now,
but it's an easy 60 potency per target per charge of Ricochet. Due to the 5y radius of this action,
the enemies will need to be stacked quite close to each other to take advantage of Ricochet's cleave.

Tip: distance is calculated **from the center of your target's hitbox to the edge of the hitboxes of other enemies**.

## 7-GCD Wildfire

Thanks to FFXIV's spaghetti code, there's a tech that uses the game's delayed damage propagation of AoE actions
coupled with Machinist's long damage delays on certain actions to land a sneaky 7th GCD under Wildfire:

1. Position yourself so that your desired Wildfire target is the furthest enemy (i.e. other enemies are between you and the target).
2. Use an AoE GCD.
3. Immediately apply Wildfire to your target.

This tech has been confirmed to work with as few as **two targets (Scattergun)** or **four targets (Chain Saw, Bioblaster)**. The higher your
ping is, the more targets you'll need in order to delay the GCD damage into the Wildfire debuff. 

## Flamethrower Buff Extension

Another AoE tech, this time involving everyone's favorite Machinist action. Flamethrower functions like other ground DoTs:
it snapshots buffs on the player at the time of casting the action, but it doesn't snapshot debuffs on the target such as
Chain Stratagem. This means **if you start channeling Flamethrower on the last GCD of buffs, they'll last for the full
duration**. This only requires a modest 1.13x buff multiplier for Flamethrower to edge out Heated Combo on two targets,
and of course it's an even bigger gain on 3 or more targets.

## Tick Fishing

This tech is so minor and impractical that it's basically not worth doing, but it's included here for the sake of
completeness. If you begin channeling Flamethrower during downtime where a boss is untargetable, you can potentially
land a tick on the boss right as it returns without costing any GCD time. Just remember to **begin channeling at least
2.5 seconds before the boss is targetable** so that Flamethrower doesn't clip your GCD. 