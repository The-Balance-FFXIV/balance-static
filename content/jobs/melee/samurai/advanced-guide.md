---
authors:
  - Balance SAM Staff
patch: "5.58"
lastmod: 2021-10-28T03:28:29.257Z
changelog:
  - date: 2021-10-28T03:28:48.087Z
    message: Created page
---
# The Shadowbringers Samurai Compendium

## An Exploration of 5.0 Samurai Mechanics

### By Jahaudant @ The Balance & DPS Tools Discords

*Last Updated 17th April 2020*

- - -

# Introduction

Final Fantasy XIV Version 5.0: Shadowbringers has arrived, and with it a plethora of job and balance changes for Samurai -- many of which have significant implications on how we should be playing the job optimally.

Before we get started, it is important to note that this document is not intended to act as a traditional guide. It will be of little to no help to a new Samurai, or someone unfamiliar with the fundamentals. Instead, it is written to serve one main purpose; to document and explain various aspects of Samurai 5.0 playstyle and theory in a way that anyone can read and understand.

It is also important to note that I am not the end-all-be-all of how Samurai should be played and this document serves to demonstrate and explain theories which could be disproven at any point. Just because something is in this compendium doesn’t mean that it will be correct forever. As new tests are done, or new discoveries are made, I will do my best to update any information and present the most accurate representation of optimal Samurai play that I can.

- - -

# The 5.0 Samurai Rotation Changes

Coming fresh from version 4.0, you may be used to the free flowing nature of Samurai play. Our abilities didn’t naturally line up very well at all. With Hagakure at 40 seconds, Higanbana at 60 seconds, Meikyo at 80 seconds, and Guren at 120 seconds and on top of that Hagakure and Higanbana having a GCD based pre-requisite the 4.0 Samurai play style was a pure priority system with extended perfect alignment being almost impossible to attain without Higanbana clipping or creative Hagakure usage. And, unlike Warrior, Dragoon, and other classes, Samurai was mostly unconstrained by GCD tier requirements to meet certain rotational thresholds or breakpoints.

In 5.0, this has changed.

## Tsubame Gaeshi is Restrictive and Inflexible

Our new big hitter, Tsubame Gaeshi (or Kaeshi: Setsugekka in 99.9% of situations) is a 60 second cooldown and is only usable immediately after an iaijutsu (Midare). This makes the ability quite difficult to actually use exactly on cooldown - even more so than Meikyo which, in the previous expansion, would often force us to incur 1-2 GCD drift for each use.

Let’s say you just got your third Sen, hit a Hakaze + Jinpu, and your Tsubame cooldown is at three seconds or more. You are left with no choice but to hit Midare, skip Tsubame, and (without Meikyo) perform another nine GCDs before you are able to use Tsubame again. A hefty 15 seconds~ of cooldown drift.

Even with Meikyo helping us with quick Sen generation, you may find you are often letting Tsubame sit unused for two, three, or more GCDs at a time pushing it slowly outside of our valuable raid buff window and perhaps costing us a whole cast over the course of a fight.

So the question is; is there anything we can do about this? 

## The Crumbs: Normalized Cooldown Times

As noted in the previous section, our small repertoire of abilities have had their cooldowns adjusted. Meikyo Shisui has been reduced from 80 seconds to 55 seconds. Ikishoten is on a 60 second cooldown. And our new ability, Tsubame: Gaeshi, is also on a 60 second cooldown. Combined with the fact that Senei/Guren remain at 120 seconds, I’m sure you can notice the pattern; Samurai now works almost entirely on a 60 second cooldown cycle. 

## The Solution: A Rotation Loop

In order to minimize personal ability cooldown drift and maintain perfect alignment with raid buffs on intervals of 60/120/180 seconds it is important that our rotation allows us to use our two least flexible abilities - Meikyo Shisui and Tsubame: Gaeshi - as soon as they are available. Since Tsubame is on a 60 second cooldown we need to target a specific GCD tier to achieve a clean GCD cycle that comes as close to 60 seconds in length as possible.

Disregarding whether their 60 second total GCD count allows for a workable rotation this means that our potential optimal GCD tiers will be:

* **2.23 GCD / 27 GCD Loop** - 27 * 2.23 = 60.21 Seconds
* **2.15 GCD / 28 GCD Loop** - 28 * 2.15 = 60.20 Seconds
* **2.07 GCD / 29 GCD Loop** - 29 * 2.07 = 60.03 Seconds
* **2.00 GCD / 30 GCD Loop** - 30 * 2.00 = 60.00 Seconds
* **1.94 GCD / 31 GCD Loop** - 31 * 1.94 = 60.14 Seconds
* **1.88 GCD / 32 GCD Loop** - 32 * 1.88 = 60.16 Seconds

Any GCD tiers between these values will incur, depending on your rotation, either more ability cooldown drift or some measure of GCD clipping when compared to the above optimal breakpoints and are therefore slightly less efficient.

We can immediately disregard 2.23, 1.88 and perhaps also 1.94 as they are either impossible to reach or unlikely to be attainable with early 5.0 substat economy. In addition, our natural 60 second rotation cycle without filler GCDs can be manipulated to be 25, 26, 27, 28, 34, 35, 36 or 37 GCDs. However, since 2.22 has already been discarded and the GCD requirement for 34 GCDs within 60 sec is also unattainable, we are left with a 28 GCD cycle at 2.15 GCD being the theoretically optimal choice with 2.06 coming in second and requiring one filler GCD at minimum. 

Therefore, a **base** cyclical 60 second rotation with 28 GCDs would look something like this:

> **WARNING: The below rotation is an example of a base / unoptimized looping rotation. Do not use this in-game.**

### Opener / Burst Phase

![Opener/burst](https://cdn.discordapp.com/attachments/752334526449057853/884902545238130738/unknown.png)

### Cooldown Phase

![cooldown phase](https://cdn.discordapp.com/attachments/752334526449057853/884902579371376680/unknown.png)

![cooldown table](https://cdn.discordapp.com/attachments/752334526449057853/884902781109022782/unknown.png)
The sequence of 28 GCDs can be repeated infinitely and, as described above, will maintain 60.21 seconds between each cycle of Tsubame, Meikyo and Higanbana applications when performed with 2.15 GCD.

- - -

# Optimizing Potency

## Maximizing Yukikaze Combo Usage

Yukikaze Combo, when examined in a vacuum, is slightly weaker than Gekko or Kasha. However, when considering the value of the Sen it produces (in two GCDs rather than three) it overtakes Gekko/Kasha in efficiency. (There are some technicalities due to part of the additional Sen value requiring a GCD, but we can ignore that for now)

![Potency-per-GCD Comparison for Yukikaze and Gekko/Kasha combos.](https://cdn.discordapp.com/attachments/752334526449057853/884902896284602458/unknown.png)
<br>*Potency-per-GCD Comparison for Yukikaze and Gekko/Kasha combos.*

![Potency-per-GCD Comparison for Yukikaze and Gekko/Kasha combos with the raw value of 1 Sen included.](https://cdn.discordapp.com/attachments/752334526449057853/884902916366954556/unknown.png)
<br>*Potency-per-GCD Comparison for Yukikaze and Gekko/Kasha combos with the raw value of 1 Sen included.*

This means you’ll want to prioritize Yukikaze in most cases where we’re given the option, including;

1. **Applying Higanbana with a Yukikaze Sen**
2. **In two target AOE situations, using a Yukikaze Sen for Tenka as much as possible.**
3. **Ensuring we avoid Yukikaze under Meikyo as much as possible.**

The third point is one that is not immediately obvious. A less direct way of prioritizing the Yukikaze Combo is by excluding it when possible from your Meikyo Shisui GCDs. Specifically, by entering Meikyo with the Yukikaze Sen already active, and by exiting an open-ended Meikyo (one where we don’t immediately spend the Sen) with a Gekko or Kasha.

Note that doing this also increases the number of higher potency single GCDs used in Meikyo (Gekko/Kasha at 608 combined potency vs Yukikaze at 552 combined potency).

That said, we can’t simply implement this principle in our looping rotation and expect it to work out. For every G/K Combo that we switch to a Yuki Combo, we effectively reduce the number of GCDs we are using to generate Sen. Without adjusting our rotation elsewhere we will end up with incorrect Sen amounts when we want to be specifically doing Midare or Higanbana. For example, by employing this optimization, we actually turn our original base 28 GCD rotation in to a 26 GCD rotation and therefore break our neat alignment.

How do we fix this? Fillers…

- - -

# Maintaining GCD Count

## Filler GCDs

We can’t just go reducing the number of GCDs we use, and that’s exactly what we are doing when we switch the three GCD Gekko combo with the two GCD Yukikaze combo where possible. We need to maintain the same number of GCDs used per 60 seconds in order not to incur cooldown drift. Does that then make this Yukikaze optimization tech kind of worthless? Not quite.

In short, it is theoretically optimal to do Yukikaze optimization techs mentioned above and then replace the “removed” GCD with a filler GCD.

## Hagakure

At ten Kenki per Sen Hagakure is not worth using the same way as we did in 4.0 and with a five second cooldown even if we tried to do so we would never be able to use any Iaijutsu! Hagakure does have it’s uses, though. Namely:

1. Resetting Sen after a long downtime to allow for a clean re-opener.
2. Near the end of a fight if it appears we won’t be able to fit another Midare in.

And one more use, which is very pertinent to what we are going to cover in the following section.

3. Eating filler combo Sens for bonus Kenki.

## Enpi as a Filler

The first and most obvious filler that comes to mind is Enpi. Simply put, after implementing a single Meikyo Optimisation we then use Yaten -> Enpi somewhere in our cooldown phase.

Pros

* High enough potency to be a net gain when used as a replacement GCD for Yukikaze optimization.
* Can be used to as a single GCD filler when required

Cons

* Unable to chain more than one Enpi due to Yaten Cooldown of ten seconds.
* May want Yaten (even if it’s pretty meh) for an upcoming mechanic
* On bosses without a large hitbox, Yaten will put you out of auto-attack range, potentially leading to loss of AA.

**Meikyo Gekko + Yukikaze Combo + Enpi Filler (Four GCDs)**

608 (Meikyo Gekko) + 264 (Hakaze) + 552 (Yukikaze) + 420 (E. Enpi) =1844 Potency

**Meikyo Yukikaze + Kasha Combo (Four GCDs)**

552 (Meikyo Yukikaze) + 264 (Hakaze) + 384 (Shifu) + 608 (Kasha) = 1808 Potency

**Total gained per optimization: 36 Potency**

## Yukikaze as a Filler

Pros

* With Hagakure, higher potency per GCD than Enpi.
* No movement restrictions.

Cons

* Requires two GCD “spaces” and therefore is not always possible to implement.

In situations where we require two additional filler GCDs instead of one, we can instead opt to use another Yukikaze combo and, ideally but not necessarily, eat the gained Sen with Hagakure. 

That means in base 28 GCD cycle at 2.15 GCD we can implement two Yukikaze Optimisations, then fill the created two GCD gap with an additional Yukikaze combo. Or, In a 29 GCD rotation at 2.07 GCD ,where we already require at least one filler, we can implement one Yukikaze Optimisation to turn that one filler GCD requirement into two. We can then use an additional Yukikaze combo (as opposed to previously having to use Enpi).

**2 Meikyo Gekko + 1 Yukikaze Combo + 1 Yukikaze Filler (8 GCDs)**

1216 (2 Meikyo Gekkos) + 2448 (3 Yukikaze Combos) + 128 (1 Sen Hagakure) =3792 Potency 

**2 Meikyo Yukikaze + 2 Gekko/Kasha Combo (8 GCDs)**

1104 (2 Meikyo Yukikaze) + 2512 (2 G/K Combo) =3616 Potency 

**Total Difference: 176 Potency**

**Gained per optimisation: 88 Potency**

## Gekko/Kasha as a Filler

Pros

* Applies Shifu or Jinpu
* No movement restrictions.

Cons

* Requires three GCD “spaces”
* Lower potency per GCD than Yukikaze

A Gekko/Kasha filler has a niche use case in rotations that would normally require us to drop a Yukikaze optimization, as a result of needing at least one enforced filler.

For example, when going from 2.15 GCD to 2.07 GCD, we need an additional filler GCD to make up for the increase in speed and we have three options in remedying this requirement.

1. Add a Yaten Enpi to the rotation
2. Revert a Meikyo Gekko back to Yukikaze (and therefore switch a Yuki Combo in the cooldown phase to a Gekko Combo)
3. Switch the Yukikaze + Hagakure filler to a Gekko + Hagakure filler

The difference between option two and three effectively boils down to the difference between the following two sets of GCDs, which I have laid out with effective potencies so that we can see the difference.

![Gekko Filler](https://cdn.discordapp.com/attachments/752334526449057853/884903296513499158/unknown.png)

Gekko filler wins!

- - -

# Downtime

Downtime is more difficult to deal with in 5.0 and has the potential to cause issues with or completely break our looping rotation.

For example, if a boss mechanic means we can’t hit it for four seconds then when Tsubame becomes available to use again, we are going to be roughly two GCDs behind. There are three different ways of dealing with short downtimes like this.

## Option 1)

We don’t immediately use Meikyo/Bana/Tsubame when they become available, and instead use them at the normal point in our rotation. 

This is the easiest solution. You can just blindly continue your usual rotation but while incurring a four second drift on your cooldowns (and Higanbana). This may put all of or a portion of your burst outside of any consistent buff windows

## Option 2)

We Meikyo on cooldown, but at a different Sen, break our current loop and revert to an ad-hoc rotation style for the remainder of the phase or fight.

This is probably the most natural feeling solution coming from playing SAM in 4.0 and it’s not a bad option to go with. You’ll be Meikyo’ing (and hopefully also Tsubame’ing) at roughly the same time as your buff window comes up but you’ll have to be quick on your feet to either figure out a new loop or ad-hoc your way through the remainder of the phase/fight.

## Option 3)

Drop your filler GCDs for that cycle.

The best of both worlds, but much trickier to pull off on-the-fly. For each 2~ seconds of downtime encountered you can remove one filler GCD from your cycle. For example, if you have a Yukikaze Hagakure filler by default and you disconnect from your target for two seconds, you can switch it to a single Enpi filler. Four seconds? Drop the filler entirely. We have even more theoretical downtime buffer than is provided by the rotation examples in the next section too.

Fun fact: By entering Meikyo with a Yuki Sen, ending Meikyo with a Gekko/Kasha, and applying Higanbana with a Yukikaze Sen we can manipulate our rotation at 2.06 GCD to require up to four filler GCDs which equates to 10.8 seconds of downtime buffer.

- - -

# Ad Hoc / Freestyle Samurai

## The Effectiveness of Ad Hoc Style

The goal of ad hoc play is to reduce or remove the need for “wasted” GCDs by shifting around Meikyo placement ad hoc (as required). That means attempting to perform a rotation with fewer “wasted” GCDs than the loop allows for.

To put that into perspective the standard 2.15 GCD 28 step loop incurs a total of three “wasted” GCDs.

1. The first required filler GCD
2. The second required filler GCD
3. Initiating Higanbana with a Gekko or Meikyo’d Sen

Generally speaking, it is extremely difficult, if not impossible,  to maintain buff and cooldown alignment while achieving this, particularly past the three minute mark.

However, if you are able to successfully perform an ad hoc style rotation employing every possible Yuki optimization while also maintaining Tsubame alignment well enough that it doesn’t fall outside of raid buffs or incur usage loss, it would be better.

It is also important to consider that if you enjoy playing Samurai at high SkS levels, the looping rotation tech becomes comparatively less and less effective as you get faster and introduce the need for additional, suboptimal, filler GCDs. 

With the possible variation in ad hoc rotations, I have only done limited simulation tests, but you can generally expect the following rules to hold true:

* At 2.15 and 2.07 looping is usually always the better, and easier, option. Especially in Patchwerk-style encounters.
* At 2.00, you may see an improvement in performance with a well executed ad hoc style rotation depending on your ability.
* Faster than 2.00 and you will almost certainly be better off freestyling it. The required number of fillers to loop at this speed is a considerable potency loss.
* Looping becomes impossible In very mechanic heavy encounters where you are unable to maintain full uptime for at least a minute at a time.

## Why This Compendium Won’t Cover it in Depth

Ad hoc follows the basic Samurai priority system instilled in you either from 4.0 or through the levelling experience. Perform your opener, then do your best to maintain buffs, apply Higanbana with as little clip or downtime as possible, don’t let Meikyo and Tsubame drift, and be potency-effective by following the same rules regarding Yukikaze and Meikyo as I’ve laid out in the previous sections. Simple enough in theory and especially more so now in 5.0 , where we don’t have a positive potency Hagakure to implement. High level optimization with this play style is almost entirely encounter dependent and so is not suited to this guide, which is intended to be universal.

- - -

# Openers and Rotations

## Cheat Sheet

![Cheat Sheet](https://i.imgur.com/N52Dliz.png)

## Videos

Valynn#9029 has recorded the two main rotations for those of you who prefer videos as learning tools.

**[Higanbana First Opener + 2.14 GCD Looping Rotation](https://youtu.be/7mCoCOIAWqo)** - \[4:35]

**[Midare First Opener + 2.14 GCD Looping Rotation](https://youtu.be/EWHO4Btr0Nc)** - \[4:34]

- - -

# Constructing a Looping Rotation - Reference

**Viable GCD/SKS tiers (with Shifu) for Looping:**

| Viable GCD Tiers <br>for Looping | Viable Skill <br>Speed Range | 60s Loop <br> GCD Count | Required <br>Filler GCDs |
| -------------------------------- | ---------------------------- | ----------------------- | ------------------------ |
| 2.16 < 2.15 > 2.14               | 457 to 811                   | 28                      | 2                        |
| 2.08 < 2.07 > 2.06               | 1,370 to 1,725               | 29                      | 3                        |
| 2.01 < 2.00 > 1.99               | 2,208 to 2,537               | 30                      | 4                        |

If you find your SkS to not be in any of those ranges, you want to either meld more SkS or lose SkS without equipping lower ilvl pieces.

**Filler Options:**

1. Yaten-Enpi = One Filler GCD
2. Yukikaze-Hagakure = Two Filler GCDs
3. Gekko/Kasha-Hagakure = Three Filler GCDs

Avoid using Yaten-Enpi as filler unless necessary for boss mechanics or when only a single filler GCD is needed.

- - -

# General Q & A

## Is Kaeshi: Higanbana Worth Using?

**Short Answer: No. Never.**

It is important to note that the DoT from Kaeshi: Higanbana does not stack with the DoT from regular Higanbana. This makes it obvious from even a cursory glance at the tooltip that it has no use case in single-target situations. What might not be obvious though is that, in fact, Kaeshi: Higanbana has no use case in any situation - ever.

The Sen efficiency of using our Tsubame cooldown on Midare is quite literally impossible to beat. In short, it is always better to use Tsubame on Kaeshi: Setsugekka and then apply a manual Higanbana to our second target than it is to ever use Kaeshi: Higanbana because it costs just three GCDs to do so compared to the nine to fire off another Midare. I have created a simple potency table to illustrate how this works.

Each line is a GCD. Yellow numbers indicate where total damage at that GCD is equal between rotations. Red numbers mean that rotation is underperforming compared to the other. And green numbers mean that rotation is outperforming the other.

![Is Kaehi: Higibana Worth Using?](https://cdn.discordapp.com/attachments/752334526449057853/884903581537427466/unknown.png)
