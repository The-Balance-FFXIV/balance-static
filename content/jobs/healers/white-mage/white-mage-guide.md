---
title: White Mage Guide
---
Notes;
- 1-1 port from guide linked in #whm_resources
- Rotation graphics need to be added for Opener section 
  - Elleiana can make one; but need confirmation on info first!
- Unsure what to do with regards to tooltips
   - Have added screenshots of tooltips to show how the guide was intended; not sure if I should continue with screenshots, or if the API can be pulled directly instead.
- Source info: https://saltedxiv.com/guides/whm

<!-- TODO: link proper healing guide later, so it doesnt go to the gdoc! -->

--- 

- [First and Foremost](#first-and-foremost)
- [Gameplay Basics](#gameplay-basics)
  - [GCDs and oGCDs](#gcds-and-ogcds)
    - [Rolling Your GCD & Weaving](#rolling-your-gcd-and-weaving)
    - [Snapshotting](#snapshotting)
    - [Healing up Buffs Don't Make Sense](#healing-up-buffs-dont-make-sense)
  - [Potency and Variance](#potency-and-variance)
  - [Why Macros are Bad](#why-macros-are-bad)
    - [Skill Queuing](#skill-queuing)
  - [Server Ticks](#server-ticks)
    - [Calculating Tick Potency](#calculating-tick-potency)
    - [Ground Target Initial Ticks](#ground-target-initial-ticks)
- [Healing 101](#healing-101)
  - [Knowing Your Heal Priorities](#knowing-your-heal-priorities)
    - [MP Cost of Heals](#mp-cost-of-heals)
    - [Damage Lost/Opportunity Cost per Heal](#damage-lost-opportunity-cost-per-heal)
      - [GCD Heal Damage Tradeoff Cost](#gcd-heal-damage-tradeoff-cost)
      - [oGCD Heal Damage Costs](#ogcd-heal-damage-costs)
      - [Afflatus Heal Damage Cost](#afflatus-heal-damage-cost)
    - [Cooldown on the Ability](#cooldown-on-the-ability)
    - [Resource Cost](#resource-cost)
  - [White Mage Heals: A Breakdown](#white-mage-heals-a-breakdown)
    - [Healing Gauge](#healing-gauge)
    - [Single Target (ST) Heals](#single-target-st-heals)
    - [Area of Effect (AoE) Heals](#area-of-effect-aoe-heals)
    - [Healing-Oriented Buffs](#healing-oriented-buffs)
  - [Role Actions](#role-actions)
  - [Pre-casting & Heal Delay](#precasting-and-heal-delay)
  - [Mitigation](#mitigation)
  - [Over Healing](#over-healing)
  - [Working with Your Co-healer](#working-with-your-cohealer)
    - [Communication is Key!](#communication-is-key)
    - [Playing with a Scholar](#playing-with-a-scholar)
    - [Playing with an Astrologian](#-playing-with-an-astrologian)
- [Damage 101](#damage-101)
  - [Damage Button Breakdown](damage-button-breakdown)
    - [Using PoM in an optimized fight](#using-pom-in-an-optimized-fight)
    - [Tinctures (Pots)](#tinctures-pots)
  - [Afflatus and You](#afflatus-and-you)
    - [It’s a DPS Loss?](#its-a-dps-loss)
    - [Overcapping Lilies](#overcapping-lilies)
    - [All or Nothing](#all-or-nothing)
    - [Heal Prioritizing](#heal-prioritizing)
    - [Downtime Lilies](#downtime-lilies)
    - [Fights with Adds](#fights-with-adds)
    - [Dungeon Lilies](#dungeon-lilies)
    - [When should you actually use these Afflatuses?](#when-should-you-actually-use-all-these-afflatuses)
    - [Misery and Raid Buff Alignment](#misery-and-raid-buff-alignment)
  - [Moving Around](#moving-around)
  - [Openers](#openers)
  - [Stats and Gearing](#stats-and-gearing)
    - [Weapon Damage](#weapon-damage)
    - [Mind](#mind)
    - [Substat Priority](#substat-priority)
    - [Substat Overview](substat-overview)
    - [Gearsets](#gearsets)
- [Additonal Resources](#additional-resources)
- [About the Author](#about-the-author)




The white mage class (WHM) is deceptively one of the most beginner friendly and yet uniquely obtuse healer jobs in the game. You’ll see this guide split into two primary sections, a basics overview to get you up and running, and (soon™) an advanced topics section that will delve into some of the nuances that make the class a challenge to play at the highest tier. I’ll say it now, as you’ll see me say it a million times: White Mage is incredibly and heavily subjective to a significant number of factors that affect what’s “best” to do. I’ll attempt to explain some of the more advanced theories in the advanced topics guide, and provide some situational examples to hopefully help articulate the nuance. 



Before getting too far in, because White Mage is often a player’s first healer, this guide will be walking through some of the basics of healing in this game. I **strongly** encourage you to read [Zyrk’s Bullshit Guide of the Principles of healing](https://bit.ly/FFXIVHealerGuide), but I’ll attempt to cover some of the topics discussed there, to aid those whom are loath to read two long text guides! Even if you think you’re familiar with some gameplay basics, it never hurts to have a refresher!


# First and Foremost
Your job in Final Fantasy XIV is to **deal as much damage as possible**, while keeping everyone alive. This is not a “pure healer” game; while Yoshi P has said we have high potent “pure” (raw) heals, this does not mean our job is only to heal. You’ll be doing yourself a service to forget everything you know about World of Warcraft’s or [insert other MMO you’ve played for 50 years] healing principles! XIV is it’s own game, and it operates differently.


Knowing this, then, our job becomes how to heal as efficiently as possible, and in so doing we allocate our remaining resources to deal as much damage as possible. Executing this principle successfully and you’ll have offered the most potential support to your group.


Healing efficiently as possible can be best achieved by not only mastering your own kit but collaborating with your co-healer in 8-man content as much as possible. Even when you two can’t speak to each other, there can be general understandings of which heals should be applied first.


--- 


# Gameplay Basics

## GCDs and oGCDs

It may seem weird to dive into this before talking about actual healing, but understanding how GCDs work is the very first lesson in this game. Truthfully, a lack of understanding on this topic is also the number one issue I see among healers looking to improve!

Hang around in [The Balance](https://www.discord.gg/thebalanceffxiv) or any FFXIV gameplay community long enough and you’ll hear the acronyms GCD and oGCD thrown around frequently. The game often (but not always) delineates GCDs as spells (or weaponskills, on melee classes), and oGCDs as abilities.


> ### GCD
> GCD stands for Global Cool Down and is used to refer to all of your skills that share the same cool down. You’ll notice, for example, that when you cast Glare, multiple skills on your hotbar will turn grey and begin to “cooldown” preventing their use for a short duration. And all the icons seem to share the same animation, like in the gif below. Most will have a base recast time of 2.50s, which will decrease when you have more spell speed equipped.
> 
> In the capture below, actions wrapped in green are GCDs. They all share the same cooldown when one is used.


> ### oGCD
> oGCD stands for off Global Cool Down and is referring to skills independent of the shared GCD. For example, when you use Tetragrammaton, you’ll see the skill turn grey and begin to tick down for 60s, but no other skill will become unavailable. Each has their own recast time, unless otherwise noted, and is not affected by spell speed.
> 
> In the capture below, actions wrapped in pink are oGCDs. Each has an individual cooldown independent of other actions.

![Video Embed](https://i.imgur.com/fgqXTAv.mp4) 

> *This clip does not represent proper weaving, nor is it a recommended hotbar layout!*


### Rolling Your GCD & Weaving

The number one rule of **EVERY** class in the game is to **ALWAYS. BE. CASTING.**

***Always.*** 

More specifically, this concept is referring to making sure you’re always casting a GCD skill. Any time spent where your GCD’s cooldown isn’t “rolling” around is opportunity wasted, and that’s bad. But if you’re always using a GCD, how do you fit oGCDs in? This is where weaving comes in.



> #### Weaving

> Weaving is the term used to refer to properly executing an oGCD ability during a GCD action's recast. You’ll notice you can't use an oGCD "inside" a casted GCDs like Glare or Medica II. Instead, we need to use instant GCDs* to weave oGCDs with.
>
> **as always, there's exceptions to every rule, but this is a good general rule of thumb to get you started.*



White mages at level 80 have the following instant GCDs:
- Dia
- Regen
- Afflatus Solace
- Afflatus Rapture
- Afflatus Misery


If you read the tooltip of each of the above, you’ll notice they all have a base recast time of 2.50s, but are “instant” to cast.


Meanwhile, we have the following abilities as oGCDs:
- Assize
- Asylum
- Benediction
- Divine Benison
- Fluid Aura
- Lucid Dreaming
- Plenary Indulgence
- Tetragrammaton
- Presence of Mind
- Rescue
- Surecast
- Swiftcast
- Temperance
- Thin Air

To use them properly, we need to “weave” with the instant GCDs listed above.


“Instant” skills in the game are a bit of a misnomer. Even though they’re listed as instant, they all have an animation lock a bit under one second. What this means is when you try to use an oGCD like **Assize** between two casted GCDs like **Glare**, the second Glare’s cast ends up being delayed by that animation lock. This adds up significantly over the course of an encounter. Alternatively, if you use an instant GCD like **Dia** to weave Assize under, your next Glare (or other GCD) cast won’t be delayed at all. That’s proper weaving!


Sticking an oGCD between two casted GCDs is something you’ll often hear referred to as “clipping your GCD.” These clips will add up over the course of a fight and result in less casts overall. You also cannot weave more than two oGCDs during one instant GCD cast without running into issues.


The Advanced Topics section in this guide will elaborate a bit more on the nuances of weaving and clipping your GCD.


> #### Weaving Infographic
> The infographic here, by the talented [Nethar](https://twitter.com/epimeral), gives a quick visual guide to weaving! Alternatively, if the concept still isn’t quite hitting home, try giving this [drafted written document a read.](https://docs.google.com/document/d/1Qat0JDeLgtRgfR9zz9l2ICGCVKg8j3YK4jRHt_-Is7w/edit?usp=sharing)
>
> ![Weaving Infographic](https://saltedxiv.com/wp-content/uploads/2020/01/GCD_v._3.png)


**Don’t Drop Casts to Panic Heal!**
It’s common among healers to panic during scary mechanics and to freeze, as we’re afraid if we cast a damage skill, we’ll miss a needed heal and a party member will die. Frankly, this very very rarely happens. It’s common for both healers from other games, or first time healers, to subscribe to this notion. Relax and take a deep breath! The damage pacing in this game is quite slow and very predictable, and nothing comes out so fast or so unexpectedly to one shot a player. If you’re trying to learn a new mechanic you’ve never seen, while staring at your screen trying to observe, you can mindlessly cast your filler spell ( Glare at level 80!) the whole time.


The best way to monitor your GCD and oGCD use are with commonly used tools like [ACT](https://advancedcombattracker.com/) and [FFlogs](https://www.fflogs.com/). Check out the [Tools & Tips](#additional-resources) section for more information on those!


### Snapshotting
As a subset of GCDs and oGCDs, there’s another set of acronyms worth mentioning here: HoTs and DoTs.


> #### HoT
> HoT stands for Heal over Time and refers to skills that heal the target over a set duration. White Mage HoTs include **Asylum** and **Medica II** for Area of Affect (AoE) HoTs, and **Regen** as a single target (ST) HoT.


> #### DoT
> DoT stands for Damage over Time. Our DoT is **Dia**, an action that does damage every 3s over its duration.


With most DoTs and HoTs in the game, the potency of them “snapshots” on application. This means any buffs or debuffs that might affect their respective potency are calculated at the time of use of the skill.

As an example, say **Temperance**, which has a 20% healing up attribute, is on you and your party. This means that a **Regen** or **Medica II** cast after Temperance is used will increase in potency by 20%. By contrast, if you used Medica II first and then Temperance, the Medica II HoT already ticking on the party **would not be buffed**. Regen works the same way.

DoTs work essentially the same way, where any damage up buffs on a target, or damage down debuffs on you, will affect your Dia DoT if any of those buffs or debuffs are applied before your Dia is cast, and they have no affect if the buffs or debuffs are applied after its cast.


> #### Asylum & Ground Targets, a Special Case
> Because there are exceptions to every rule, ground target skills operate a little differently. White Mage's only ground target ability is Asylum, but it’s worth clarifying that ground target skills will calculate their potency per tick, rather than application. This is true as long as the HoT/DoT tick is happening directly from the ground, and not from a buff generated being inside the area of effect.
> 
> There aren’t too many examples of this left in the game as of Shadowbringers but Dark Knight’s Salted Earth is an example of one that will check it’s damage potency per tick!



### Healing up Buffs Don't Make Sense
But here’s how they work.

Standard healing up buffs, so in our case Temperance’s 20% up buff, only affect GCD heals, not oGCD ones. Why? Not entirely sure, but I sure wish SE would make the tool tips clearer on this point. It’s been this way since at least A Realm Reborn.


There’s two notable types of healing up buffs in the game. The most common for healers to have is written as `increases healing magic potency`. Skills with this phrasing buff the heals cast by the player with the buff on them, thus buffs their **outgoing** healing. However, it buffs **GCD heals only**, and it does not affect oGCD heals. For a White Mage you can be affected by the healing up component from Temperance (your buff bar will have two temperance buffs, one for the mitigation, and one for the healing buff), or from a Scholar in your party whose had their fairy cast either form of Illumination (see the list below).

**Healer actions with this effect:**
- Temperance (WHM)
- Neutral Sect (AST)
- Fey Illumination / Seraphic Illumination (SCH | applies to the whole party)
- Dissipation (SCH)


The other type is written as `HP recovery via healing actions`. Skills with this phrasing increase the amount of **incoming** heals on the target with this buff and the increase is applied to ALL heals (GCD and oGCD). Meaning, if one of these buffs is on a target, any heal from any player or source is buffed. These buff actions all come from non-healer roles with the exception of Asylum, so it’s helpful to know how they function when you see their buffs applied.

**Actions with this effect:**
- Asylum (WHM | Players must be inside the bubble to receive requisite buff)
- Mantra (MNK | AoE buff)
- Nature's Minne (BRD | Single Target)
- Thrill of Battle (WAR | Personal)
- Improvisation (DNC | AoE buff)


Unlike the first set, the buff from these skills **affect the potency of oGCDs too**, meaning as long as your target has the buff from Asylum, oGCD heals like Tetragrammaton will have 10% more potency.


> Extra Notes
> 1. Unlike heals, damage up and down buffs generally apply to any action, regardless of oGCD or GCD, but do follow the aforementioned snapshot rules.
> 2. Asylum’s ability to buff oGCD heals will also buff it’s own HoT!
 
 --- 
 
## Potency and Variance

Potency is a uniform way for the game to refer to the amount of healing or damage we’ll do relative to our other skills. Glare, for example, has a potency of 300 whereas Dia has a total listed potency of 720. While these numbers are constant and allow for comparisons between skills, it’s worth noting that there’s a 5% variance on damage and healing amounts when actually calculated by the game. This applies to damage hitting us and our party, too. So, Glare will always have 300 potency, but you may see its “swing” from the encounter be +/- 5% in damage amounts.

While not incredibly important for our damage hitting buttons, there are some cases where this variance could make or break the difference between someone living or dying. For example, if an enemy averaged a 10,000 auto-attack hit on our tank, that would mean the hit could be anywhere between 9,500 and 10,500. Similarly an AOE could go out on the party and if our planned heals only leave them with a tiny sliver of HP, it’s possible someone could get an unlucky roll and die to this variance. It’s important to heal our parties efficiently, but you don’t want to play so risky as to be within this variance that someone might die!

--- 

## Why Macros are Bad
You will not see a list of recommended macros in this guide. To understand why let’s elaborate a bit on the rolling your GCD section from before.


### Skill Queuing
You’ll likely have noticed, either consciously or subconsciously, that this game functions with a simple skill queuing system. This means that when you push your next action a bit before you last one has finished casting, the game will immediately “queue” that button and execute it immediately upon the cast finish. So if I’m casting Glare and press Cure III about 80% through of Glare’s cast bar, the game will immediately start casting Cure III as soon as Glare has finished, without me having to press the button again.

Notably, actions within a macro cannot be queued. Which means that when you try to cast a macroed GCD after another GCD, the game will not queue it, and you will have a delay before the cast fires even if you’re spam pressing the button. Take a look at this video to see what I mean:

[![Don't Macro Your GCDs](https://img.youtube.com/vi/VgpUCgExvbA/0.jpg](https://www.youtube.com/watch?v=VgpUCgExvbA "Don't Macro Your GCDs")
 
Over the course of a fight that delay will add up and equate to a significant amount of casts lost.

So, in short, don’t macro GCDs. If you find yourself struggling with targeting, there’s a Targeting Tips section near the end of the guide.

oGCD skills do still suffer from the same input issues as GCDs when macroed, however if you’re properly weaving then the input delay could potentially be absorbed within the GCD recast time. Because you should still be targeting properly for GCD heals, I personally wouldn’t recommend macroing oGCDs either. That said, I’ve explained the “what goes on” in the Advanced Skill Queuing section, which will let you know if you can get away with it.


> #### Ground Target Macros
> To contrast all of the above, however, you may find a ground target placement macro for Asylum to be effective. `/ac “Asylum”` will cast Asylum on your current target, like a boss or a tank or even yourself.
> 
> Many controller players, including myself, struggle with the ground placement interface and, essentially speaking, the delay created by macro’ing this oGCD isn’t going to be any worse than us trying to fumble through the ground placement. Use at your own risk!


--- 


## Server Ticks
To round out the gameplay section, we’ll talk about what is colloquially known as “Server Ticks.” It’s a bit of a misnomer as the ticks aren’t related to the server so much as they are to when the entity/map is generated, however the populace uses server ticks to refer to this, so I will as well.

All DoT’s and HoTs will “tick” on the server tick, your natural passive HP and MP regeneration will tick on the server tick, Lucid Dreaming will restore mana on this tick, and some buffs will run their checks on this tick. It occurs every three seconds, no matter what, so it doesn’t coincide with your GCD recast time at all.


### Calculating Tick Potency
Since HoTs and Dots tick every three seconds, we can use this to calculate the potency!

Let’s take Dia’s tooltip:

![Dia Tooltip](https://imgur.com/a/Y4713n0)

The duration is listed as 30 seconds. Since we know it’ll tick every three seconds, we’ll get 10 total ticks out of the dot (30s / 3s).
Since the potency per tick is 60p, we know the total dot tick potency is 600p (60p * 10 ticks)
Finally, since Dia has initial hit damage potency of 120p, we add that in to get 720p total (600p + 120p).


### Ground Target Initial Ticks
Back in Stormblood, ground target HoTs and DoTs were adjusted to immediately apply their effects on action use. This doesn’t impact when the remaining server ticks happen, instead this results in most ground targeted actions gaining an additional tick. If you drop an Asylum on yourself you’ll notice the flying text for the heal immediately, and then your proper server tick will happen for the remainder of the HoT. This means we can evaluate the potency of ground target heals (in this case Asylum’s) with one extra tick.

There is a very small chance you’ll miss out on the additional tick if your asylum is dropped with a certain alignment with the server tick, but it’s rare enough to not worry about.

It’s also worth noting as an aside that Astrologian’s Collective Unconscious bubble doesn’t get the extra tick.


--- 
--- 


# Healing 101
Now that we have some gameplay basics out of the way, let’s dive into the good stuff!

From here on out I’ll be making a certain distinction between the actions we have; there are GCDs and oGCDs as you know, but I’ll refer to Afflatus skills independently for the remainder of this guide. From a technical standpoint all Afflatus skills are standard GCDs. However, unlike most of our GCDs, they have no mp cost and are resource locked to our lily generation. They’re like a weird GCD + oGCD love child and a bloody mess of one!

It’s also worth throwing out there that truly aren’t oh-shit buttons in this game. You should be maximizing all of the tools in your kit as frequently and as effectively as possible, enabling you to play more optimally; don’t sit on a button “just in case” – that’s not how it works, and it’s poor play all around. Damage doesn’t come out fast enough in this game to warrant an emergency heal mindset, if a DPS ate some damage they were supposed to dodge, you will have time to Cure II them. You do not need to save something like Tetragrammaton for these kinds of spots! Plan out your Tetras and use them frequently, and if someone needs a spot heal for standing in something avoidable, that’s when you can use your GCD heals, not vice versa!


## Knowing Your Heal Priorities
With some subjective variance to account for, in a general sense you’ll want to use oGCD heals before GCD ones in order to master healing effectively. When I say “cost of a heal” I don’t just mean how much MP it takes to cast. All heals have multiple costs to consider:

- MP Cost
- Damage lost to casting a heal
- Cooldown on the ability
- Resources needed to cast it, which in this case for WHM I’m referring to - stored lily stacks.

As a rule of thumb, you’ll reach for your Afflatus heals the most often, but that’s unfortunately a bit subjective as I’ll elaborate below.


### MP Cost of Heals
White Mages have the most leniency compared to the other two healers in that with skills like **Assize** and **Thin Air**, when used in conjunction with **Lucid Dreaming**, we have the best mana efficiency of the healer role. That said, you will still run out of mana if you’re unnecessarily repeatedly casting high mana cost skills like **Cure III**, **Medica**, and **Medica II**. Be mindful of the cost in high damage fights!


### Damage Lost/Opportunity Cost per Heal
To any healer aiming to play well, this is the most important cost to consider; “How much damage am I losing to use this?” And in a sense the question you should be asking is, “Which of my options will cover the healing needed with the least damage lost.”


#### GCD Heal Damage Tradeoff Cost
GCD heals like **Cure III** and **Medica II** mean you’re using a GCD to cast them. With your goal in every encounter to execute as many in-combat GCDs as possible, then any GCD you’ve used on a heal means it’s a GCD not spent on casting Glare or reapplying Dia. Which in turn means you’re losing at least 300 potency every time you reach for a GCD heal. Make sure these are absolutely necessary before casting them!


#### oGCD Heal Damage Costs
oGCD heals have the ability to be weaved with instant cast GCDs like Dia, so your most effective “zero cost” use of them is to weave it with said instant GCDs, and you aim to do this as much as possible. However, that’s not always realistic to do. For cases where you’ve used an oGCD between two casted GCDs, you get a hard clip like we discussed earlier. For the sake of this section of the guide which is aimed at a more introductory overview, you can roughly assume the cost of hard clipping any GCD cast with an oGCD is about 100 potency lost. This is explained in more detail in the Advanced: Caster Tax & Clipping section of the guide if you’re interested.

You’ll notice even if you end up clipping an oGCD heal, you still have less damage lost than you would for a GCD heal, so keep that in mind as well!


#### Afflatus Heal Damage Cost
This is where things get a bit more complicated and subjective! There’s enough about these skills to warrant their own section, so I go quite a bit more in-depth farther down in this guide. However, to simplify the damage cost of using Afflatus for healing, each Afflatus heal (either **Afflatus Solace** or **Afflatus Rapture**) will cost you a loss of 300 potency each at the time of use. They are still GCDs which take the place of a Glare cast, so they’re subject to the same GCD heal concerns mentioned above. But what about then using **Afflatus Misery**? It then offsets this cost by dealing 900 potency when used, however it is also a GCD meaning you are still out an additional fourth glare cast.


Let’s put it more simply, comparing to a situation where you’d instead straight cast Glares:

- 1 Afflatus heal used = 300p lost
- 2 Afflatus heals used = 600p lost
- 3 Afflatus Heals used = 900p lost
- 3 Afflatus Heals used + 1 Misery cast = 300p lost (that’s (-300*4) + 900)


When using Afflatus heals make sure you never finish an encounter with only two or three used but no Misery cast. For the sake of using only one Afflatus heal, and not resolving the final Misery cast, the damage lost for using just one is the same as if you didn’t use the afflatus heal and instead used a regular GCD heal. (Meaning when you don’t use misery, Solace and Rapture become just “regular” GCD heals with the full 300p loss from not casting a Glare.) That said, it’s also the same potential loss as using all three lily heals and then the Misery hit (still down 300p)— although there’s other benefits here that we’ll discuss later in the [Afflatus](#afflatus-and-you) section where calling a full Misery set 300p lost isn’t wholly accurate. Another scenario to keep in mind is that It is also okay to use two Afflatus Heals properly (to heal) and then needlessly blow the third near the end of a fight, provided you also and then cast the Misery. This would avoid the 600p lost for only using 2 Afflatus heals, and instead get you back to the standard 300p lost.


The difficulty comes in weighing the cost of these against our other options: GCD heals or Clipping oGCD heals (weaving oGCD heals essentially comes with no cost!).


For some more practical examples (all assume Misery is used unless otherwise stated):

- Using three Afflatus Raptures is much better than using three Medica Casts but nets the same amount of outgoing healing.
  - Damage loss: -300p for Raptures vs. -900p for Medicas
- Using a single Afflatus Solace when the other two healing lilies won’t be touched is worse than hard clipping a Tetragrammaton, again for the same healing potency done.
  - Damage loss: -300p vs. -100p


A more advanced example:

- Using Afflatus Solace for a needed single target heal, and then using the remaining two lilies to double weave and/or move, even if the heal is completely wasted, is better than hard clipping those oGCDs or dropping casts while moving.
   - Damage loss:
   - -300p for Solace vs.
   - -400p for hard clipping four casts (-100p per clip * 4 oGCDs) vs.
   - -600p for dropping two whole GCDs by not casting while moving.

In truth the best uses of Afflatus skills will be trying to get them to multitask as much as possible!


### Cooldown on the Ability
Ability’s cooldowns are another important cost to consider, especially when you’re trying to be more optimal in a fight and are planning your strategy with your team. Ideally you want to get as many uses of your low-cost tools as possible to offset the need to use your high-cost ones, like GCD heals. Let’s take another example: if there’s a very heavy hitting raid AOE coming out at a certain point in a fight, you’ll likely want to save **Temperance** for it. Let’s say the hit happens about four and a half minutes in. Even if there’s no other major-hard hitting AOE before that 4:30 mark in the fight, you can still get two more uses of Temperance before that point, which could help with either smaller raid damage hits, or even just tank auto damage. This is clearly better use of the skill than sitting on it until the big hit, but at the same time you wouldn’t want to use the skill at 3:30 because you won’t have it up in time for the scary spot!


### Resource Cost 
Resources needed intrinsically applies to a White Mage’s Afflatus heals — we can’t use them if we don’t have any healing lilies generated. There’s less of an opportunity cost here as much as a more traditional resource lockout.

For all of the above considerations, do your best to make sure the cost of the heal is worth it! I.e., You don’t need to cast a Cure III when the party is sitting at 80% of their health. Make sure the heal used fits the heal demand needed!


--- 


## White Mage Heals: A Breakdown
Since this may be the first guide you’re reading, this section provides an overview of the healing actions we have. That said, please read your tooltips. They’re embedded or listed throughout the website for your convenience, just hover over the skill name, or tap if you’re on a touch device. Data for the tooltips is provided by the community created [XIVAPI](https://xivapi.com/).


### Healing Gauge

![Standard Gauge Full](https://www.saltedxiv.com/wp-content/uploads/2020/01/full-gauge-300x300.png)

![Simple Gauge Full](https://www.saltedxiv.com/wp-content/uploads/2020/01/full-gauge-simple.png)


Your healing gauge will only begin to fill when you enter combat and will freeze when you’re out of combat. Every 30s of being in combat, one “black” (they’re blue but YoshiP called them black) healing lily will be added to your gauge, up to a maximum of three. If you have three unused black healing lilies, the gauge will stop filling.

Using a black healing lily with either Solace or Rapture will “nourish the blood lily” and generate what I’ll call a stack of blood. Build three stacks of blood and you’ll be able to execute Afflatus Misery and get a return on some of the damage lost by casting Afflatus heals.


While you can’t generate more than three black healing lilies at a time, once converted to blood they no longer count as black lilies, so it’s possible to have both three stacks of blood and three stacks of unused black healing lilies at the same time.


--- 


### Single Target (ST) Heals
 
**Cure**

![Cure Tooltip](https://imgur.com/gqSUYZh.png)

Useful while leveling, nearly useless at level 80 content except for niche situations. That said, you should have plenty of room on your hotbar to not need to remove it. Niche uses would be proccing Divine Veil when nothing else is available to, or immediately after raising when you have no mana and need to single target heal immediately. Don’t feel bad about nearly never using this.

A weird little note about Cure, it’s cast time is a full second shorter than your standard GCD recast time. Which means, technically, you can freely weave after it without clipping. It’s still not worth using over Cure II though.


**Cure II**

![Cure II Tooltip](https://imgur.com/gqSUYZh.png)

Your on-demand single target heal. Honestly, still try to use this as little as possible. Really. You have much better tools to handle single target healing with! This should be your very last resort as a single target heal.


**Regen**

![Regen Tooltip](https://imgur.com/GvzyISl.png)

A high-potency (1200 total) single target HoT with the added benefit of being instant cast, so we can weave a move while using it. It’s still a GCD heal, however, which means it takes the place of casting Glare. Make sure the opportunity cost of using this is absolutely needed, and that there aren’t better options available to help with single target damage! Since you can weave after it, consider what oGCD options you may need; Tetra often can be a great combo for a high amount of single target healing!

Whether or not this skill sees much use will depend a lot on the content you’re running, and who you’re running it with. For example, it’s fantastic in dungeons between trash pulls. When you look at savage – it’s a great tool in prog, and a great tool in pick-up groups where tanks likely don’t know how to mitigate properly. But when you look at optimized runs of savage fights, you’ll see it not cast at all. In contrast, Regen gets to shine again in Ultimate-tier content because it tends to hit much more than savage. Try to adjust your use to if you truly are gaining value from it.


**Afflatus Solace**

A single target heal with the same potency as both Cure II and Tetragrammaton. It’s better to use this heal over Cure II, and can be better to use this over regen, however it’s situational and subjective to the actual costs involved. It is instant cast, meaning you can both weave and move with it, and for a high potency combo of single target healing, weave Tetra with Solace to get 1400p of healing out in one go!


**Tetragrammaton**

A single target heal with the same potency as Cure II and Afflatus Solace. This one is an oGCD so is best used when weaved, but in worst case scenarios it may be okay to hard clip to use this.


**Divine Benison**

A single target shield the equivalent of 500p on a very short 30s cooldown. The tool tip is worded weirdly, I believe to signify that it cannot crit, however it can be buffed by actions like Nature's Minne, Mantra, and Asylum. This skill has fantastic synergy with Dia as the 30s cooldown aligns with Dia’s 30s duration, and I strongly suggest weaving it with every Dia whenever possible.


> **Don't hold it!**
> Do not sit on Divine Benison for tankbusters. Doing so you leave a lot of free single target healing potency on the table unused, while using it on cooldown will likely save you single target heal casts! There is no tankbuster in the game that this skill is needed for. Tanks have enough mitigation tools in their own kit that they do not need additional shields from any healer to survive. Keep this in mind and use this skill frequently!


**Benediction**

Heals 100% of a target’s HP – notably not to 100% of their HP. Meaning if I have 80,000 health, and I’m sitting at 20,000 right now, Benediction will still heal for 80,000, not 60,000.

It’s cooldown is on the longer side but you shouldn’t sit on this as an oh-shit button. If you know your tanks, it’s wise to plan this in time with their invulnerable abilities that needed (so, Living Dead, Holmgang, or Superbolide) and if you can get an extra use between “invuln” casts, use it like an oGCD heal as you would Tetra.

With how little a proportion of the health pool of a well geared tank a single target heal does, having a single button take a tank from 1hp to 100% can be a fantastic tool to save both healers a significant amount of resources recovering from tank invulns.


--- 


### Area of Effect (AoE) Heals


**Medica**

This is your worst AOE heal. Really. It has a reasonably high mana cost, is a casted GCD, is low potency over your other casted GCD AOE heals, and its range is a bit smaller than Rapture. It also boasts the worst heal potency per mp cost. This is your absolute last resort AOE heal that you should only use when ALL the following situations occur:

- You have no healing lilies for an Afflatus Rapture
- People are spread too far for a Cure III
- You, for some reason, need this heal immediately by which I mean in less than 3 seconds, as a Medica II will do this much potency by the time 3 seconds have elapsed and will continue to heal further, unlike Medica (i.e. if your previous GCD was a Medica II and your VERY next GCD needs to be another raw heal and can’t be Cure III or Rapture).
- If somehow a literal half second and 100p of healing would save the situation (because if you can wait half a second, Medica II is better).
- Medica II is already applied AND you need the raw heal potency ASAP AND people are spread too far for a Cure III AND for some reason you’re so mana strapped that you want the lower mp cost on this over reapplying an already applied Medica II (which would be okay to overwrite once it’s been up for three seconds or more)

You should very rarely cast this.


**Medica II**

A comfortably high potency AOE HoT with a decently large range. It equates to 700p per person over 15s. Its mana cost is quite high, and it is still a GCD heal, so you’ll want this in high damage fights when you need the extra heal potency over a Rapture (and/or are out of lilies for a Rapture), and don’t need the heal to happen immediately. It’s great to pair this skill with the buff skill Thin Air.


**Cure III**

Your highest mana cost heal, Cure III is a high potency AOE heal with a tight range. This skill shines in fights with repeated hits of party damage in short succession and/or whenever a quick top up of the party is needed. It’s great to pair this skill with Thin Air and synergizes really well with Plenary Indulgence if a significant amount of healing is needed. In fact, with Plenary Indulgence up on the party, each party member would receive more than a Cure II’s worth of healing. You’ll want to prioritize Medica II if you have the time for the duration to help, as that has more healing potency, but if Medica II is already applied, you’re out of lily stacks for a Rapture, and need the raw potency heal, this is your go-to button.

It also has great solo-healer recovery for an AOE damage phase when your co-healer has died, and is often cited for why White Mage finds a spot in a lot of early progression parties.

One of the most notable aspects of Cure III, is that unlike the rest of your AOE GCD heals, Cure III can be “thrown” and cast on a targeted party member, healing 6y around them, rather than around you. This can be extremely useful in double tank damage mechanics or split group stack mechanics, as it’ll allow you to aoe heal a small group across the arena, even if you’re not stacked with them.


**Asylum**

Your only true AOE oGCD heal that doesn’t come with strings attached. Asylum is a very potent (900p) HoT over 24s. Use this as much as you can for the AOE heal. That said, in fights where the party is spread widely and it’s hard to find optimal spots for this to do AOE healing work, it’s okay to use it in a single target tank-healing sense! Drop it on the tanks as an oGCD regen!

Asylum also has a healing action buff, which I’ll cover in the buff section!


**Afflatus Rapture**

While low in potency, this will still likely be your go-to AOE heal. Its 20y range gives it a little leg over Medica’s range, plus it costs zero mp, and is instant, allowing for weaving and moving. And will feed your blood Lily gauge charging up for Misery. You’ll use this heal first in most cases, however in high healing phases you may find your best synergy is to combo this with other things in your kit. For example using one Rapture and weaving Plenary Indulgence and Temperance before another Rapture or a Cure III cast will net you a lot of healing potency without having to clip to use your buffs!


**And Also Technically Assize**

I’m listing Assize because it does technically do 400p of healing. However, you should not be sitting on this for a heal outside of a prog/not clearing environment in most cases. This one is somewhat subjective, and there are cases where you can get it to do double duty! so let’s dive into it further with some rough math:

Let’s compare using assize for damage vs. holding it to heal. Assume when we blow it on damage we have to use any non-afflatus GCD heal to compensate for the “lack” of a heal. (Ignore for the moment heal potencies, just assume one heal, assize or a GCD, in this example is enough)

If you were to hold Assize to heal for long enough in a fight that you lost a use, you lose that 400p. If you compare it to not losing a use but having to use a single GCD heal to compensate for the heal, you come out DPS neutral even if you hard clipped the assize. I.e. -300p from the lost glare and -100p from the hard clip, vs. -300p from the lost glare.

THAT SAID, if you know you won’t lose a use, **holding for a small bit of time to heal** and DPS is ***absolutely okay*** and often worth it, but be wary of Dia alignment issues. Fights with long transition phases definitely make this more comfortable and feasible. So, try and plan accordingly rather than yoloing it! The “right amount” of time it’s okay to hold for is super fight and kill time subjective.

Keep in mind while you might clip every other one if you can’t weave it, those other assizes should still be properly weaved with dia. Over the course of the fight misalignment with dia creates much larger DPS loss potential if you’re clipping to use it for custom timings.

Realistically, you won’t be making this consideration for EVERY assize use; it’ll be a small few over a fight where it’s even an option. In that case the gain potential is bigger because you’re not sitting on it and losing use(s), and when used properly, you’ll likely be clipping less and gaining that way.


--- 



### Healing-Oriented Buffs


White mage has a few self-applied buffs that can help in various situations.


**Plenary Indulgence**

Plenary, as it states, affects Medica, Medica II, Cure III, and Rapture – basically your GCD AOE Heals. It’s essentially a trigger-after effect for the duration it’s applied. To execute it, first use this buff, and then when you cast any of the aforementioned AoE GCD heals afterwards while the buff is applied, an extra 200p heal will be applied per heal cast. It’s not consumed on first use. So, if you use Rapture three times while the buff is out, you’ll get an extra 200p heal three times, not just once. It’s worth mentioning that the buff is called Confession, arguably because the devs don’t want to admit how horribly they botched the original version of the skill from Stormblood and want to maintain some lore consistency or some nonsense.


**Temperance**

Temperance is our only tool to help with whole-party mitigation, however it’s quite useful. Its 30y radius means you’re likely going to cover everyone in the arena, regardless of how spread out they are. The 10% damage reduction portion applies to the whole party, meanwhile you get your own 20% healing up buff to boost any GCD heals (including Afflatus ones) during the duration.

The damage reduction component is a continually checking aura, however. The means the game will check every 3s, on the server tick, if a party member is still in range of the White Mage who cast it, and if not, the buff will fall off them until they come back into range and the server tick checks again. It will still check and apply immediately on use though.


**Thin Air**

Very simple but very powerful buff! Anything actions cast while this is up will cost 0 mp. It will check at the end of your cast, however, so if you start casting a GCD spell when there’s 1s left on Thin Air, thus it falls off during your cast, then your cast will still cost MP – keep that in mind.

Thin Air is one of the few “don’t aim to use this on CD” buttons! Instead you want to pair this with your highest burst mp cost phases – which will most likely be when you’re using back to back AOE GCD heals, and/or when raising people.


*For some math to articulate the point:*
Using Thin Air on cooldown, but only covering Glare casts will only save you 1,600 – 2,000 mp depending on your GCD length.

Using Thin Air to cover one Medica II and one Cure III cast will save you 2800mp, plus you’ll get two to three more casts under it, so assuming glare you’re at 3,600 – 4000 mp saved.

Meaning you could quite literally use it half as often as the first example and save the same, or more, MP than using it on cooldown by saving it for burst heal moments. And in high burst incoming damage phases that mp saved is even more valuable!


**Asylum (Buff)**

Asylum also has a healing action buff, boosting both oGCD and GCD heals on the target. This means your target specifically needs to be under the bubble and have the Asylum buff in order to receive 10% up on healing done to them. This can synergize really well with a shielding cohealer who can get extra potent shields if the party is under the bubble, and it will also buff strong oGCD heals like a Scholar’s Indomitability.


**Presence of Mind**

**And technically we’ll mention Presence of Mind for Progression use**

Presence of Mind is in truth a buff that should be used for damage, so I’ll articulate how best to use it in the damage section. That said, while progressing through a fight, using this skill to cast rapid fire heals in repeated hit phases, or to cast a raise quickly when Swiftcast is down, is definitely worth considering!


--- 



### Other Actions


**Raise**

Revives a player who dies in combat. It’s cast time is incredibly long, so it’s often best paired with swiftcast. Additionally the mana cost is extremely high, so consider pairing thin air with the cast.

The priority for determining who should raise first will depend on a few variables. Damage-loss wise, usually a SMN in the right part of their rotation should get the raise before any healer does as their damage potency per GCD is less than a healer’s standard GCD (and their pet keeps doing pet things!) RDMs can be a bit of a wash damage wise, but the utility they have to raise is valuable. In a prog setting you’ll want your raise-capable casters to get raise priority. This let’s healers conserve mana they may need to handle unexpected hurdles that come from prog!

Between the three healers, the priority as it relates to damage is AST doing the least damge per GCD, then SCH, then WHM doing the most per GCD, so **when everyone has sufficient mana** as a White Mage you’ll be the last priority. But that’s not really a fair assessment to jump to in a lot of situations — having Thin Air means we can negate the mp cost of raising, and Astros especially struggle with their mp amounts. Work on communicating effectively with your party to see who should get the raise, but decide quickly!


--- 


## Role Actions

Not sure where else to stick these, so here’s a quick overview:


**Repose**

Actually useless. Cast on overworld monsters who are near an NPC you need to talk to for a quest. Oh and that one role quest you need it for that somehow justifies its continued existence. That’s all I got.


**Esuna**

A GCD that cleanses cleansable debuffs, not to be confused with non cleansable debuffs. Cleansable debuffs have a white line with the debuff icon, some examples are shown in this image. I sacrificed myself to a morbol for it:

![Dispells](https://saltedxiv.com/wp-content/uploads/2020/02/morbolpls-e1600408866837.jpg)

Sometimes it’s not worth the effort to cleanse these.


**Swiftcast**

An oGCD that will make your next GCD cast instant. Notably, because this is an oGCD it does hard clip into your GCD if you’re applying this without weaving, so try to weave it instead if you can.


**Lucid Dreaming**

Your mp restore buff! It’s an oGCD so try to weave it, but don’t fret about trying to use it if you’re above 75% of your mana.


**Surecast**

Negates most knockbacks and interrupt actions just like it says. It’s comfy on savage-tier fights that push you across the arena, allowing you to not get pushed.


**Rescue**

zzZOOOoooom Zips in a party member to where you’re standing from across the map. Use it to make greedy black mages stand in your Asylum bubble or save fools who messed up a mechanic. You have the power!

Will occasionally have niche uses in optimized fight strategies, but if it requires a weave and only one rescue is needed, you can usually make your co-healer who has much better weave options do it!


---


## Pre-casting & Heal Delay
Now that we’ve talked about all our heals, let’s talk about what actually happens when we cast them. You’ll notice that heals aren’t always as immediate as you want them to be; this can be both to your detriment and to your advantage! When a boss has a cast bar for an incoming AOE attack, you can start pre-casting your heal before the damage goes out, and time it to land just after the damage hits. This is especially important if another hit comes shortly thereafter. If you wait until after the damage hits to start casting, you’ll have less time to recover before the second hit; if you precast the heal for the first hit, you’ll have much more time to prepare for the second!

Heals tend to roll out sequentially across party members, starting with the closest first, and it’s most noticeable with heals or skills that apply a buff, which can often take longer than a regular heal to register. Keep this in mind when pre-casting, as it’s very possible to cast a heal that hits on one or two party members earlier than the damage, leaving them lacking health for an incoming hit, and/or the opposite is true, where the heal hits a handful of party members too late to save them from the incoming damage.

Plenary Indulgence is a notable example of a buff that can take a bit to apply to all party members. It’s possible, especially when connections are wonky, to use Plenary and then a GCD immediately after, and have party members not get the extra 200p heal because the buff wasn’t yet applied before the heal hit.


--


## Mitigation
Planning mitigation appropriately is one of the most important things you can do to optimize your group’s gameplay. That said, as a White Mage your only AOE mitigation you can help with is **Temperance**. Coordinate with your party to spread out your mitigation resources to get the best use of them all.


--


## Over Healing
Over healing means any healing done beyond what was necessary to survive. If my tank needs 5,000 hp and I heal for 10,000, I’ve done 5,000 overheal or 50%. Part of healing efficiently is knowing how to properly avoid overheal while also not being scared of it. Since the majority of a White Mage’s kit comes from raw “pure” heals and HoTs, our overheal amount naturally tends to drift higher than, say, a Scholar who doesn’t have a GCD-based hot, and has more mitigation tools in their kit. (Shields don’t count towards overheal!) That said, you want to avoid healing needlessly when it’s not needed. If you’re casting heals that are mostly overheal, you could’ve likely used those resources on doing damage instead. It’s important to aim for efficiency while still keeping your party alive.

If you’re looking at [FFLogs](https://www.fflogs.com/) and trying to gauge your performance based on your HPS percentile, don’t. HPS is an absolutely garbage metric of healer skill in this game. Your goal in FFXIV is not to maximize effective healing done, which is what HPS measures, but is rather to deal as much damage as possible, while keeping the party alive. You want **efficient** heals, which aren’t always the most “effective” looking ones. This means healing efficiently (but still safely!) in order to maximize your damage output. HPS doesn’t gauge this performance metric at all. In many cases low HPS rankings are better than high ones, but in truth this also isn’t always the case.

HPS can also vary widely by factors like:

- Party comp and use of party mitigation tools
- Tank comp and use of tank mitigation
- Healer comp and efficient or inefficient use of repsective toolkits
- And many more reasons.

To articulate an example, you could have a White Mage repeatedly cast **Medica** as soon as damage goes out before any other heals or HoTs from their co-healer could happen. They could even do so in such a way that their Medica casts don’t result in overheal. This means in FFLogs their HPS would be quite high, and their overheal quite low. At first glance that looks nice, but in reality it’s absolutely poor play. Letting passive heals or HoTs like **Medica II** and **Whispering Dawn** may have resulted in less HPS and more overheal, but would have been much more efficient tools to use to let both healers DPS more.

Analyzing healing logs are quite comprehensive and intensive; it requires a full picture overview of both what the healers did, but also what the party contributed, so try checking the [Damage], [Casts], and [Healing] tab in depth to get an even better idea.


---


## Working with Your Co-healer
Co-healer synergy is intrinsically valuable and important to foster if you’re in a pre-formed group. Even when running with a pick-up group (PuG) it’s still important to understand the kits of your co-healer and how you can best work with them to maximize your potential. Some priorities will shift a bit per co-healer pairing, so class-specific helpful notes are in the sections below. As a general recommendation I strongly recommend leveling all three healers to 80 to at least have a cursory familiarity with their kit, it’ll help your own White Mage gameplay a ton!


### Communication is Key!
Work with your co-healer as much as you can to plan and coordinate how you’re healing a fight. You don’t want to both apply AOE HoTs at the same time when having both does way more healing than what’s needed, and then not have either resource when one would work.

Each co-healer pair is going to be different, and how best to communicate, plan, and strategize will vary greatly from group to group and person to person, but as long as you’re both on board with the same goal of playing well, you’ll do just fine! You can try using some spreadsheets of fights to map you and your party’s resources, or you could try verbally communicated over a voice chat program what you’re using and where. The most important thing to do is discuss how each person would work best and come to a mutual agreement on how to cooperate!


### Playing with a Scholar
Unlike your kit which boasts big GCD heals, Scholar’s oomph comes mainly from potent oGCD tools they have both from their fairy and from their Aetherflow stacks. However, as most of these cool tools are oGCDs, they have to use them by weaving with a skill, Ruin II, that does less damage than their spammable cast, Broil III. They can also use their Aetherflow stacks for a small damage and mp restore on an Energy Drain, rather than on a big heal. So while Broil III does less damage than your Glare (290p vs. 300p), a Ruin II plus two Energy Drains will be 360p of damage. In working with a Scholar, you’ll want to balance utilizing their big oGCD cooldowns when needed, using your Afflatus heals as much as you can to offset their burden of wanting to use Energy Drain for damage. You’d lose 300p for three afflatus heals and a Misery cast, vs. them losing 300p plus any loss from using Ruin IIs over Broils if they used three aetherflow stacks on heals instead of energy drain. Keep this in mind!

Their fairy pet, named Lily, *not to be confused with your lilies*, will also continuously cast embrace on any party member who’s health bar isn’t full. This is extremely valuable in offsetting the single target heal burden in the party, especially on tanks. Don’t be overzealous on single target heals with the fairy has your back! She has two “skins,” Eos and Selene, that are nothing but visual differences.

The difficulty in synergy here is the game of “who loses the least damage by healing what and with what and where” and can be difficult to flesh out, especially if communication is lacking. Work in tandem to find the best tool to fit a mechanic!


### Playing with an Astrologian
Astrologian has a blend of strong oGCD heals and GCD heals (and buffs) to round out their healing kit. Notably, unlike Scholar or White Mage, Astrologian’s spammable damage skill, Malefic IV has a cast that’s shorter than their recast by enough that it allows them to freely weave one oGCD every time. (It’s okay to be jealous!) This means their oGCDs have zero cost to apply when weaved after said Malefic or any other instant they have, and since those casts are extremely frequent, those tools should generally speaking take priority in usage over your GCD heals or your oGCDs that you cannot freely weave. Plus since Malefic’s damage potency is quite a bit less than Glare’s, they still take GCD healing priority in a lot of use cases. Ast’s have a really handy skill in Earthly Star that when fully charged will do a ton of AOE healing. Try to pay attention to when this is placed down, as it’ll pop soon and you don’t want to waste healing resources when Earthly Star is about to cover it.

Another quick note to be aware of is Astrologian’s struggles with mp. Unlike White Mage or Scholar, AST doesn’t have nearly as many mp recovery tools, nor is their kit as mp efficient. Be mindful of your partner’s mp and try to cover their back when things go awry!

This biggest debate when an Astrologian is paired with a White Mage is whether the Astrologian should use Diurnal Sect or Nocturnal Sect. Diurnal makes some of their GCD heals into HoTs, and Nocturnal makes those same GCDs into shields. From a potency comparison standpoint, Diurnal does more healing, and is the more efficient choice whenever the shielding from Nocturnal isn’t required. So, definitely encourage an Astro buddy to try out Diurnal when you’re with them on White Mage. Later floors of a Savage Tier (and Ultimate tier fights) will still potentially need the shields from Nocturnal Sect, especially while progressing through the fight, so keep that in mind and don’t always default ot Diurnal. And as a last point, when in Duty Finder content or Party Finder content, you may find Nocturnal Sect’s shields help keep inexperienced players alive more readily than Diurnals HoTs, even if the latter is more efficient. So play whatever you think fits the situation best!


--- 
--- 


# Damage 101
As you level, certain skills will automatically upgrade via traits, this guide will cover the ones available at level 80.

**Stone**, **Stone II**, **Stone III**, and **Stone IV** upgrade in turn at their respective level into **Glare** at 72.

**Aero** and **Aero II** upgrade in turn, finishing with **Dia** at level 72.

Your basic damage rotation is maintaining **Dia**’s uptime while casting **Glare** in between Dia refreshes as much as possible


## Damage Button Breakdown

**Glare**

Don’t just glare at your DPS friends who stand in AOEs. Push this button as frequently and as often as you can!

**Holy**

Your AOE button, it’s only worth on three or more targets at level 80, so if there’s only two, you’re better off using Glare on a target.

It’s value in dungeons isn’t just in its potency but also its stun lock! It applies a four second stun that is halved each time the stun is reapplied, for up to seven seconds of trash monster stunning action. Keep in mind when monsters are stunned they’re not dealing damage to your tank!

**Dia**

A 720 potency DoT. Try to keep up on a boss as much as possible without overriding it early or letting it fall off.

On AOE packs, Dia is a gain up to five enemies, provided it ticks for its full duration. Try to apply it on monsters while your tank is pulling, since you can run while casting, and settle into Holy spamming when they’ve settled.


> #### When should you refresh your dot?
> Unlike other jobs in the game, and even unlike our fellow healers, White Mage has a difficult time maintaining perfect GCD alignment allowing for easy dot refreshes. This is because whenever we use Presence of Mind we temporarily shorten our cast and recast times in its 15s duration, shifting our normal GCD’s alignment with our dot, Dia.
> 
> Like many aspects of White Mage, the “right” answer is a bit subjective. The easy and short (but not complete) answer is **try to refresh it when its duration is at 2s or less**. Keep in mind that after the cast, it will take about another second to apply on your target. (So if you cast Dia when there’s 2s left of its current duration, it’ll overwrite at 1s!)
> 
> For the complicated more accurate answer you’ll need to take into account your alignment with Assize as well as encounter mechanics, needed weaves of other actions, and if you’re going super hyper optimized, you can even consider kill time a factor in your decision making.
> 
> The most obvious consideration to make is refreshing your Dia in such a way that you’ll be able to properly weave your next odd-count Assize with it (remember every other Assize, the "odd-count" ones, will align with every third Dia application).
> 
> The next consideration happens in some fights, where you may need to move for mechanics a single GCD before or after the “ideal” Dia refresh GCD. For example if your GCD options are a Dia overwrite at 3.5s remaining or Dia at 1s remaining, BUT you find that the 3.5s is when you need to move for a mechanic that has no pre-positioning options, this can be, but is not always, a better option.
> 
> Lastly while also taking both the Assize and Mechanic points into account, you can conisder the factor of kill time. In some fights, there may be uptime phases where the boss goes invulnerable (or dies) at a time where no matter what you do you’ll lose some duration of your Dia dot. When this happens, provided your last Dia before the phase ending will still be up for over 9s, you can sometimes use that window to shift your Dia alignment around to better work for mechanics! This is VERY fight specific!


**Assize**

A whopping 400p AOE damage button that slices, dices, and makes Julienne fries. Okay but really, 400p damage per target, 400p heal, 5% mp restored (so 500 mp), Every. Forty-Five. Seconds. It’s great.

Use this on cooldown as a damage button. In fights with multiple enemies it’s usually worth holding to hit on both of them (if holding makes you lose a single use over the whole fight, you break even damage wise anyways)!


**Afflatus Misery**

A 900p hit on the main target and 750p hit on everything else in the 5y radius. Absolutely try to use this on multiple targets wherever possible.

Most notably, use this after the blood gauge is filled to restore back some of the potency lost by using GCD Afflatus heals. The lily section will cover how best to use this skill in more detail.


**Presence of Mind**

A 15s buff with a weird cooldown of two and a half minutes that synergizes with absolutely nothing. thanks SE! That said, the buff makes your cast and recast 20% faster (and auto attacks, gotta get those cane smacks in!). It doesn’t directly increase your damage, but since your GCD is shortened, you get more casts off in the same time frame, thus it increases your damage as a result.

It does not inherently matter whether you cast a GCD heal or GCD damage spell while Presence of Mind is applied if you were going to cast either regardless, as long as you’re continuously rolling your GCD. Since it only nets you extra casts over the fight, it doesn’t matter if you cast 5 Glares under the buff and one Medica II outside of it, or one Medica II and 4 Glares under the buff, and a Glare outside of it, it’s the same number of casts (this changes a bit if you manage to get PoM up during raid buffs, however). All of that considered, it’s wholly useless to use this pre-pull.


### Using PoM in an optimized fight
> There’s a few rules of thumb to follow here:
> 
> When you don’t know your expected kill time, use Presence of Mind as close to on cooldown as you can without clipping to apply it.
> 
> If you do know your expected kill time, to calculate if you can safely hold PoM for raid burst alignment, calculate the difference between your expected kill time and the nearest “on cooldown” window (below) that’s less than your kill time and subtract 15s for the buff duration.
> 
> Timeline windows:
> On cooldown:
> 0 | 2:30 | 5:00 | 7:30 | 10:00 | 12:30
> 
> Holding for 30s:
> 0 | 3:00 | 5:30 | 8:00 | 10:30 | 13:00
> 
> Holding for 60s (held 30s, twice):
> 0 | 3:00 | 6:00 | 8:30 | 11:00 | 13:30
> 
> So, if you expected to kill a fight at 8:30, the nearest natural window is 7:30. 8:30-7:30 is 60s and subtract 15s more for the duration of the last use, to get 45s. That means for an 8:30 kill time I can only hold for upwards of 45s before losing an entire use of PoM (and to correctly use would want to align for the 3:00 burst only.


**Fluid Aura**

You can pretend this doesn’t exist. Really.
(I miss you Heavensward Fluid Aura!)


### Tinctures (Pots)
Not technically an ability, but rather a consumable item, I figured I’d list these here as an FYI. Previous expansions they were various tiers of “Potions” of Mind, so they were colloquially called pots (and still are) however in Shadowbringers we now have Tinctures.

Tinctures function a bit like an oGCD in that you have to weave them effectively to apply them, however unlike proper oGCDs, the animation lock on tinctures (and potions) is significantly longer, and you can only single weave a Tincture without clipping, you can’t use another oGCD in the weave window.


---


## Afflatus and You
Welcome to the most subjective and fantastic and annoying part of learning to play White Mage. So far, I’ve covered a bit about what each Afflatus skill does and how to heal with them when you need to heal, but in this section, we’ll cover the additional uses and purposes of the entire Afflatus mechanic.

Generally you’ll want to consider the Afflatus mechanic as a full set of 4 GCDs; three lily heals that turn into the one blood lily. Once you’ve used your first lily heal in a set, you’ll essentially be committing to resolve the full set of 4 GCDs. In most situations you don’t want to execute some number of lily heals without using **Afflatus Misery** but the topics below will go more in depth.


### It’s a DPS Loss?
In a vacuum/dummy fight scenario, resolving the Afflatus mechanic is a loss over straight casting of glares:

`  Glare |  Glare  |  Glare  |  Glare = 4 GCDs for 1200p`

`Rapture | Rapture | Rapture | Misery = 4 GCDs for 900p`

But we don’t play White Mage in a vacuum nor on a dummy (other than to practice).

Afflatus skills all come with additional benefits that we’ll go into below!


### Overcapping Lilies

You have two types of lilies tracked in your job gauge, there’s a “Healing Lily” Gauge (these have also been referred to as black lilies), and a Blood Lily gauge that tracks how far along you are on your way to a fully nourished the blood lily.

***Blood for the Blood Lily!***

For your healing lily gauge, or black healing lilies, it is absolutely okay to sit on a full set of three of these if you don’t need an afflatus or solace cast for anything. Since resolving the lily mechanic with Misery is still a loss over straight casting Glares, this isn’t intrinsically bad to do, although you may want to ask if you truly didn’t need a Lily skill in the last 90s, as they’re generally your go-to heal buttons.

For your blood lily gauge, it’s okay to sit on a full blood proc’d Misery cast and not use it for a while, in fact it may even be more optimal for you to hold the Misery until you need to weave something, until you need it to move, or even to align with raid buffs. However, it is not okay to use any black healing lily skills (solace nor rapture) when you’re capped on blood stacks. Doing this will result in a flat extra 300p lost and be no different than if you cast any old generic GCD heal, and at that point your regular GCD heals would probably be more efficient. Avoid doing this! If you find you need your healing lilies, then use the Misery you’re sitting on first and then use the lily heals immediately after.


### All or Nothing

The entire Afflatus mechanic of three “black” lily heals and a Misery cast both is, and isn’t, an all or nothing mechanic. This is where we start to get pretty subjective in our uses, and it may be best articulated with some scenarios to help demonstrate the points.

**Using One Lily Heal is the Same as Using All Four Afflatus Skills**

This is both a yes and no example. From a purely damage potency standpoint, using only one Afflatus heal (either Solace or Rapture), is the same potency lost as using three Afflatus Heals and a Misery. Both are a net loss of 300p.

On the one hand, however, you get other benefits from using the other two lily heals in the set, even if you don’t need the heal, that don’t directly correlate to potency gained. Namely, being able to double weave with them, and being able to move with them, are both decent boons.

So, you may be in the use case where an encounter is ending in less than 90s (thus won’t generate enough lilies for a full set), you’ve already used Tetra and Benediction, and the tank really needs a single target heal. In this case, your options are Cure II or Solace. Both will lose you 300p, but Solace will also let you double weave and move (so you could get something like a benison too, or you could pre-position for the next AOE without dropping casts). Thus, in this case even though you don’t get the Misery off, there’s still a use-case where it’s okay to use one without resolving the whole set. It’s a bit niche, but hopefully articulates some of the subjectivity.

Contrasting that, if you were in a similar scenario at the end of single-encounter instance, but DID have enough time to generate two more healing lilies but didn’t need the heals from them, you may still want to “blow” them needlessly so you can weave effectively or move. You lose essentially nothing more potency wise doing this other than what you already lost when you committed to that first Solace or Rapture cast. However you may end up “gaining” by creating movement and weave windows that you’d’ otherwise clip or drop cast to execute.

(There’s also very smol caster tax benefits!)


**Fight Duration**

In single-fight encounters, keep an eye on the boss’s HP and try to guess at the kill time as it correlates with your Lily gauge. If you won’t be able to generate a Misery before the fight ends, you’ll most likely want to avoid using any healing lilies after your last Misery. Any used would be no different than GCD healing. Granted if you need to GCD heal anyways, then it’s a toss-up — decide what’s most efficient to use. Considering the healing potency on Rapture, you’re likely more efficient to GCD heal with Cure III or Medica II. And, when it comes to Solace you’re in the same boat as you are with Cure II where, generally, you shouldn’t be in a situation where you even need to cast this. Regen would be a better single target heal GCD option if you have time for the HoT.


### Heal Prioritizing

It may seem weird to have this in the DPS section, but ultimately managing your heals better and more efficiently is the past way to execute more DPS!

Usually you can safely assume using an Afflatus heal is going to be better than a GCD heal, provided the potency alone is enough. I.e. if one Rapture is too short and you end up doing a Rapture and a Cure III, whereas one Cure III is sufficient on its own, you haven’t really saved yourself much of anything with that Rapture cast.

As far as comparing to oGCD heals, freely weaved oGCD heals are still your first go to, but your afflatus heals may be what you end up wanting to weave under, so that point is a bit moot. When comparing to hard clipped oGCD heals, you’ll really want to get a full picture of the rest of the afflatus mechanic before deciding the worth. As stated before, a single clip of tetra is less potency lost than committing to a single lily or to the full afflatus mechanic, but if you end up using the rest of your healing lilies usefully, you will likely come out ahead.

So in truth, generally you cannot and should not consider each lily heal in a one-off scenario. Consider the weight and use of resolving the whole mechanic before committing to using it. That said, you’ll generally be using it effectively without having to think too much about it! Don’t try to oversimplify how much an afflatus action is “worth.” Trying to simplify this does more harm than benefit. It is not some arbitrary value of “divide by 4 GCDs and use that value” because you can’t consider a single lily by itself, you need to look at all four Afflatus GCDs in a set. Are you saving weaves that would be clips? Are you saving movement you’d lose damage otherwise trying to execute? Don’t try to 1 lily GCD to 1 co-healer GCD compare, it fundamentally doesn’t work this way.


### Downtime Lilies

Probably the most fun part of Afflatus healing lilies is downtime lilies! In single encounter battles when there’s downtime where the boss is untargetable, blowing the lilies (whether they effectively heal or not) will most likely give you a gain over using them in combat. It’s even more common in dungeon-type content where combat frequently stops and starts! In standard combat, each lily heal used is 300p lost until misery is cast: so you lose 1200p (300p per each potential glare lost) overall for the mechanic, and gain 900p back. However, when used in downtime there’s no comparison to a lost Glare because no Glare could be cast at that time. So, each used during downtime is another 300p back in your pocket!

There is essentially no detriment to using downtime lilies. The “worst case” scenario would be using an Afflatus heal during downtime only to realize back during active combat you still need that heal. However, in that case, you’d just cast a standard non-Afflatus GCD heal and be back at the same damage potency loss where you would’ve been otherwise (unless you blew multiple lilies and then needed multiple GCD heals). If anything, you still come out on the more efficient end as you’re likely using either Medica II or Cure III: a much more healing potent GCD heal for the same amount of damage potency loss you would’ve had, had you saved and used Rapture in that spot.


### Fights with Adds

In single-fight instances (meaning instances where you’re in combat for the duration until completed, like Raids and Trials, and unlike dungeons), when there’s adds it’s important to try and save a Misery cast for use on any set of additional (adds) monsters that your Misery can hit two or more of them. Even if this means blowing afflatus heals on nothing else useful, you get a significant amount of potency on the second enemy (675p plus the original 900p) to make this a significant gain!



### Dungeon Lilies 



Dungeon lilies operate significantly different than everything articulated above, specifically because you will frequently enter and leave combat and because of dungeon “mob” packs or “trash” as it’s colloquially known – large packs of multiple targets. While pacing will vary per dungeon, you’ll want to try and get as many Miseries as you can on packs of dungeon trash as it will be a huge and significant amount of AOE damage that will speed the dungeon along faster. Ideally you still want to try and dump lily heals during downtime, for example between pulls of trash or before pulling the boss. But even using these during active combat as long as you get the Misery on an AOE pack is still a large gain.

Downtime lilies are still applicable here, and anything used outside of combat is still a significant gain over being in combat while using!

Additionally, it’s possible to get two Miseries off on one pack, and this is both fun as well as worth doing on very large trash packs. To do this you need to spend three lily heals to fully charge your blood gauge, either during downtime or during earlier bosses of the dungeon, and then let three more black lily heal stacks generate. On the large pack, use the already stored Misery, then dump your three healing lilies, and use Misery again! You’re a DPS class now!


### When should you actually use these Afflatuses?

The healing aspect of the Afflatus mechanic is still likely the most important part to prioritize over other benefits. That said, for a simple and easy-to-remember rule of thumb” for lilies, try to get them to do two of the following three things:
1. needed effective healing
2. weaving oGCDs (bonus points for double weaving!)
3. movement


Which doesn’t mean “don’t use lilies if you don’t meet two of these” (especially if one is the heal!) – but do try to get it to do double (or even triple!) duty. As you might’ve gathered, proper optimal lily use can be highly subjective from a variety of variables. What will actual be optimal in any given moment will likely come down to encounter specific rotations, and/or subjective scenarios based on your party and their gameplay. Which is why it’s hard to have one catch all “always do this” answer.


### Misery and Raid Buff Alignment
Aligning Misery for raid buffs won’t be an inherent gain if you’re attempt to blow lily heals needlessly to generate Misery for a burst window. For example, a 10% up buff will only net you an additional 90p, which doesn’t offset the 300p lost by straight casting Glares. You’d need something silly like over 33% damage up buffs to gain back that damage.

That said if you’re naturally actively using lily heals for other gains, whether easily quantified or not, and can align Misery with raid buffs, absolutely do so. If used continuously enough without capping, Misery has the potential to line up with three minute and six-minute raid burst windows. But because Misery itself doesn’t have a cooldown timer, it’s possible to say, use one during two-minute buff three-minute buff windows, which are key spots when  your party members have damage increasing buffs out for the party.

Most savage tier fights will have enough of a healing requirement that you can easily hit these windows! But also make sure to consider if the raid buff benefits out weigh other opportunity costs. For an example, say your only raid buff in a situation was a trick attack (5%); you could gain 45p for Misery under trick, or you could hold the Misery for a bit longer, miss Trick Attack, but weave Assize effectively without clipping. You’ve essentially traded 45p in raid buffs bonuses for roughly 100p not lost to clipping. Again, it’s very subjective to fight and comp and situation (and the nuances of clipping), but try to be actively thinking on it!


---


## Moving Around
One of the bigger challenges White Mages face is trying to move around during a fight to properly handle mechanics. What are the best ways to do so?

By crying audibly…

Okay, really, you do have SOME tools to try and use to make moving (and weaving!) less awful on WHM, even when the party doesn’t need a heal. There’s a bit of a priority system you can follow, but as always, it’s heavily subjective to the fight and the situation!

1. The best thing you can do is plan ahead. If you know you need to be in a certain spot 10s from now, but have to refresh Dia now, move early!
2. Slidecasting is your best friend!
    - Sometimes also called Stutter-stepping, Slidecasting is the act of moving your character a bit before a cast finishes, without having the cast cancel on you. You can’t move very far or very long, but if you have enough time or only need to move a small distance, this can be your best tool.
    - You can start moving roughly 80% of the way through your cast bar. One quick tip to help you see when you can move: stick an emote action somewhere on a visible bar. When it lights up, that’s about when you can start slide casting.
3. For long movements, try chaining combinations of things, i.e., Afflatus Rapture > Afflatus Misery + Swiftcast > Glare etc.
4. A pure overheal-afflatus **if you’ve already used one**, OR if you’ll end up using at least one more for movement/weaving/healing. Essentially, you’ve already committed or will commit to executing a full Afflatus set.
5. Dia with <6s left — but this one comes with extra costs of misaligning with Assize, which has its own additional potential potency lost. However, fight downtime can help correct misalignment and make it more optimal to do so.
6. A little more subjective, but I’d put Regen here in the priority, or a non-Misery’d Solace if you’re near the end of the fight (meaning one you’ll never resolve the Misery cast for). Basically, for both, an instant cast single target heal that loses 300p but does effective healing.
7. Blow an Afflatus heal when you **have not yet committed a set**. The difference between this and #3 on the list is that this point is specifically for committing to a brand-new Afflatus set, vs. #3 being in the middle of an already committed to one (i.e. 1 or two blood stacks in) — or one you were going to commit to anyways. Granted, this point especially will vary in its priority position a lot based on where you are in a fight. Earlier in the encounter you’ll likely have no issues committing to resolving your Misery cast. Toward the end of the fight you really have to consider if you will resolve it. That latter scenario is essentially what this priority slot is describing. Are you forcing a Misery and in so doing losing more damage than you would with your other options?
8. If it’s a short movement (this one is super incredibly subjective) – drop cast. You do kind of have to know how long you’ll drop the cast for to know if this is worth (i.e. if your movement is quicker than than a hard clip’s animation lock duration). The use case for this is generally something where you start moving by slidecasting and keep moving a little bit longer.
9. Swiftcast + Casted GCD (like Glare)
    - This DOES hardclip with Swiftcast, so make sure the time you need to move warrants this. You will still be able to weave two more actions under the swiftcasted Glare, so there could be a tradeoff.
10. Dia if >6s left on it – this is pretty gross and a last resort because you misalign with everything. It can be optimal in niche situations. Essentially if you’re going to completely not cast anything, using this is better than nothing.

--- 

**Avoiding Clips**


Maintaining solid uptime as a White Mage also includes the struggle of avoiding hard clipping oGCDs between GCDs. There’s some overlap with the priority order listed in the Moving Around section above, as the only tools a White Mage can use to properly weave skills without clipping are instant cast GCDs like Regen, Dia, Afflatus Solace, Afflatus Rapture, or Afflatus Misery. You can also weave after a swift casted GCD skill like Glare, although the Swiftcast use would have to be weaved with the GCD before to avoid the clip.

In some cases, it’s better to just hard clip the oGCD than it is to force something to weave. For example, using a Regen when the party member isn’t going to take much damage is essentially a waste. You’d be trading what would’ve been -100p lost for hard clipping for the loss of 300p from not casting a glare. The [Weaving](#rolling-your-gcd-and-weaving) section toward the beginning of the guide goes a bit more in depth, but it’s important to remember that a hard GCD clip basically means 100p lost.

*The best thing you can do is plan ahead.*



**Weaving Healing-Oriented oGCDs**

To elaborate a bit, some of our healing oGCDs like Asylum and Temperance apply a buff and have a duration for their effect. That means these types of skills can be applied a bit earlier and gives us some flexibility with how to use them.

Additionally, since Afflatus heals are instant cast GCDs, sometimes your best option for healing oGCDs is to heal a bit first with Rapture or Solace and then weave the oGCD skill. For a high damage phase for example, you may want to Afflatus Rapture the first hit, drop Asylum and weave Plenary Indulgence, and continue to heal with another skill after that’s now buffed by these oGCDs.


**Weaving Damage-Oriented oGCDs**

Your two big damage-oriented oGCDs are Presence of Mind and Assize.


- **Weaving Presence of Mind**
    - As mentioned earlier, Presence of Mind’s two-and-a-half-minute cool down naturally synergizes with nothing from the rest of your party. Because of this, ideally try to weave it when it’s up rather than clipping to apply since you’re not going for alignment. It should still align with Dia if you didn’t drift your DoT too much, and if you ARE going for raid buff Alignment, you should still have a Dia set up to weave this with.



- **Weaving Assize**  
  - Probably the most challenging weave to handle; every other Assize, should naturally line up with Dia. For the ones that don’t you have a few options:

  - Weave it with an Afflatus skill (Solace, Rapture, or Misery)
  - On the one hand, doing so when you don’t need this to heal, double weave, or move is a bit of a toss-up and heavily fight and lily subjective.
On the other, saving Misery casts for Assize alignment can help significantly over the course of a fight if you’re struggling with other resources to weave Assize with.
  - Weave it with a needed and useful Regen
  - Hard clip Glare with it

Personal opinion: it feels gross and wrong, but hard clipping it is a perfectly viable option in some cases. Ideally, avoid this by using an Afflatus skill, but try and make that Afflatus doing double duty by weaving something else you need with it, or pre-positioning for a mechanic.

--- 



## Openers
The White Mage opener is relatively simple and straight-forward to execute, but there’s a few things to note for all of the variations.

Generally, try to weave Assize in the first GCD “slot” of your instant GCD. Because White Mage can’t maintain perfect GCD alignment as our cast time varies due to Presence of Mind, having Assize earlier in the GCD helps reduce the potential need to drift in subsequent uses of the skill.

There’s two considerations to make when executing Presence of Mind: 1) how bad is your latency, and 2) what is your GCD speed?

1. On decent connections with a pretty standard GCD (e.g. 2.41 is plenty comfortable) you can snap 8 GCDs under the effect of PoM only if you execute PoM in the second weave slot. Using it as your first weave at this GCD will not let its buff last long enough to snapshot the 8th GCD’s cast.

  **Tl;dr: If your connection is okay-ish and your GCD is normal-ish, make sure to slot PoM as the second weave.**

2. If you’re running a very slow GCD (2.43+) and/or your latency is very poor it either won’t matter if you use PoM in the first or second slot. OR if your latency is so bad, it’s possible that using it in the second weave slot will make it so your very next GCD cast doesn’t snapshot the buff application and casts its normal full length. (If you’ve ever been lagging so much that you hit swiftcast and then the game still had you full cast your next action, this is the same issue).
  
  **Tl;dr: If your connection is really poor, swap Presence of Mind into the first oGCD slot of its GCD below, rather than the second.**

<br>

---

> | | Denotes the start of combat, actions executed before should be done pre-pull.

**Standard Opener**

The go-to opener to use in almost all cases.

[image needed]


**"I need an extra oGCD weave" Opener**

For fights where you need an extra oGCD woven early on, here’s how to do so without clipping. Temperance is used, as that will be the likely use case, but any oGCD could take it’s spot.

[image needed]




**Delayed Assize if you have a Dragoon Opener**

This opener only checks out if you have a Dragoon in the party who is using Battle Litany early enough that it applies on you before you cast Assize. It’s a bit wishy-washy to begin with, but notably it doesn’t inherently gain you anything, it’s only to get the slightly higher chance to crit the Assize.


[image needed]

**DoT Re-snap Optimization Opener**

The math for this is subjective and situational. Whether this wins will depend on comp, raid buffs, boss uptime, and player execution. Use the GCD planner to check the numbers before using this opener — it’s meant for speed/optimization kills.

Theory is to overwrite snap Dia at the tail end of opener raid buffs which will then keep its alignment with other minute-multiple buffs thereafter. The 3rd application of Dia should then be around the 51/52s mark, so you only hold your 2nd Assize for about 7s.
RISKY note: if you know your kill time won’t lose you an assize you could consider holding the first for 21s and weaving with 2nd dia, getting the assize under these raid buffs.

Opener below is shown with the DRG modefication above, but this doesn’t have to be used.


[image needed]


Overwrite this Dia   when there’s about 9s remaining on its duration, at the end of the raid buff window. Glare until the next natural Dia application 30s later and then weave Assize with this third dia.

---



## Stats and Gearing

*Mind and Weapon Damage are the two most imporatant stats ALWAYS.*


**All** stats in Final Fantasy XIV operate off of tiers, not weights. Adding more of a certain stat won’t gain any new effect until a new tier is reached. This is why we can’t state 1 point of one stat is equal to some amount of points of another stat. How much a single stat point is worth is entirely relative to how much in total of both the stat in question you have, and how much you have of the of the stat you’re comparing against.

This guide provides a general overview of the importance of each stat as it relates to White Mage, however for a more comprehensive understanding, a dedicated page on this site will be written at some point in the future (and linked here!).

### Weapon Damage
The weapon damage (magic damage) on your weapon far outweighs all your other stats, both primary secondary. Notable the magic damage ALSO increases your healing output – it’s not just for damage.

***Almost always***, *take the weapon with the highest weapon damage.*
(exceptions covered below in the substats section.)


### Mind
Mind is your next highest priority. As a healer it’s your “main” stat. It’s on ALL your healer gear and it boosts the potency of your heals and your attacks. Again, prioritize pieces with the most mind over other substats.


---

### Substat Priority
The quick and dirty substat priority is involves grabbing piety to comfort and then:
Crit

DH

Det

SpS


---

### Substat Overivew
*Descriptions copied from the game, with slight modifications for clarity and additional information provided.*

**Critical Hit (Crit)**

Affects the amount of physical and magical damage dealt, as well as HP restored. The more you have, the higher the frequency with which your hits will be critical and the higher the potency of those critical hits. This affects both standard potency actions, and over time effects.

As a healer, we still end up spending spending most of our time doing damage. Crit should be the substat your prioritize over other substats. It scales better than the other substats because it scales quadradically. It has the most damage return AND heals can critical hit as well. While you’ll likely never adjust your healing rotation as the result of a critical heal, it can still be a comfortable bonus when your heals crit, more than the other substats can reward you.


**Direct Hit Rate (DH)**


Affects the rate at which your attacks land direct hits, dealing 25% more damage than normal hits. The higher the value, the higher the frequency with which your hits will be direct.

It’s important as a healer to note that this stat affects our damage actions only. Unlike crit, det, and SpS, DH has no impact on your heals. 



**Determination (Det)**

Affects the amount of damage dealt, as well as the amount of HP restored by healing actions.
Unlike crit or DH, det provides a consistent but small potency increase to all your actions. The amount it increases your heals by will likely never be enough to cause you to adjust your healing rotation to cut out heals by stacking more det, so don’t approach this stat for its healing aspect.


**Spell Speed (SpS)**

Affects both the casting and recast timers for spells. The higher the value, the shorter the timers. Also affects a spell’s damage over time or healing over time potency.
> So, Direct Hit? Or Determination?

> Short version? Pick which helps you sleep at night.


> Both stats have relatively tiny effects to your output to begin with. We're talking single digit % difference. Of that, on an even tinier scale, DH does beat out det in terms of damage. That said, det's damage is pretty close, and it provides that tiny boost to heals that DH doesn't.

> When it comes to that det healing boost, the increase from det is not likely to ever actually cut out a GCD heal for you. The impact is just that small. It can help during prog with lucky heal rolls when things go wrong, stacking the odds in your favor to keep people alive by the skin of their teeth. BUT it's also rare to be at a 0.1% enrage pull where the little extra oomph from stacking DH could've made the clear.

> There isn't a "right" answer, so go with your gut. If you want my personal take, I tend to stack more det during early prog, and swap out for DH when my group is comfortable with a fight.

**Piety (Pie)**

Affects MP regeneration. Regeneration rate is determined by piety. Only applicable when in battle and role is Healer.

Piety is simultaneously the most important stat as a healer, and the least important. You need MP to cast and do anything at all, so if you run out you’re dead in the water. But at the same time, having excessive MP is useless to you, if the extra piety you garner goes unused, you could’ve dumped those stats into something more useful. Thankfully, White Mage has fantastic MP economy thanks to skills like Thin Air, Assize, and of course Lucid Dreaming. Plus our afflatus heals all cost 0 MP. 

But how much is enough? Needing ***enough*** is my arbitrary way of saying how much a player needs depends on the player. I can’t give you one magic “right” value. New players, players who run in PuG groups, players who are over reliant on GCD heals, players who don’t use their mp tools often enough will all need more mp. Alternatively a speed runner can likely get away running with 0 piety on their gear depending on the fight. Give some of the recommended sets in the gear planner linked below a try and adjust accordingly. 

If you find yourself never going out of mana in a fight, maybe try dropping some. Constantly going out? grab more. Don’t be afraid to adjust to suit your needs. Avoiding piety ISN’T the “how to get more damage” answer, better play is.


> **Always take the highest ilvl option, except when you don't.**
> Gearing up may seem confusing, but when in doubt you'll always be safe taking the highest ilvl. It's just about always the best piece you'll be able to use. And when it's not, it tends to be not that far behind.

> But in the spirit of fully content accuracy, sometimes lower ilvl items beat out higher ilvl comparisons. Sometimes you'll see us slotting a weapon 5 ilvls lower in the damage BiS, or sometimes you may see a crafted accessory sneak in in place of our raid or tome upgraded options. This happens rarely and it's important to understand when and how. It comes down to tiers, but mostly it comes to the presence of a "dead" stat, and how much is there. Past cases where we took a lower ilvl piece generally had the higher ilvl piece with a stat spread of high piety and some other stat in the low slot, meanwhile it's lower ilvl comparison likely had zero piety on it. If that piety wasn't something needed to function, then what you're really doing is grabbing a lower item leveled piece that would gain you a few hundred more of a valuable substat.

> As always, it's subjective and depends. While it's possible to do the math manually, it's a lot easier to use the gear planner linked below!



---

### Gearsets
The latest up to date recommended White Mage best-in-slot (BiS) sets will always be posted on the main [White Mage page](https://saltedxiv.com/whm) of this site. 

For a full list of gearsets from this tier, previous tiers, and current expansion ultimates, use the Gear Planner spreadsheet. Previous tiers and ultimate sets can be found in the tabs at the base. Duplicate the sheet to try adding your own custom sets to see how they compare! Instructions can be found on the Read Me tab.

[Gear Planner](https://bit.ly/whmgearcalc)

**Looking for gearsets for level synced content like UCoB or UWU?**

Most current expansion gear pieces end up BiS when synced down, or nearly close!

Level sync on gear works by using the “stat caps” as if the gear was actually of the item level designated by the sync. So, an i500 piece in UCoB will act like an i345 piece. The con to this is that any melds are completely ignored. However, the pro is that both substats will sync to the “cap” of the weapon for a stat, and not the amount the weapon would’ve had with its normal high/low split. The cap is the maximum amount of a stat a weapon can have. You’ll notice when you meld, the “high” stat on a piece won’t let you meld any more to it, but you can add more of the “low” stat, up to the amount the high stat is sitting at. That cap is what’s used when a piece sync’s down. 

To use an example, the i345 Bonewicca Soother’s Chestpiece has the substats of 260 Crit and 182 det. This means the cap for an i345 body piece is 260. When you take an i500 body piece, like the Augmented Crystarium Robe of Healing which has the stats of 320 Crit and 457 Det, into UCoB that piece will act like it has **both 260 crit and 260 det**. Again, a level synced gear piece ignores melds. So if you were going to compare the 345 top WITH melds, you’d have 522 total substats (260 + 182 + 40 + 40) and the i500 piece would sync to 520 (260*2). Which is nearly identical, and generally current tier pieces are signficantly easier to get than pieces from last expansion, especially the dungeon acquired ones!

For UCoB: gear with an ilvl of 418 and higher will have both substats capped
For UWU: gear with an ilvl of 470 and higher will have both substats capped
For TEA: syncing gear will not cap all subtats, and will still ignore melds. Use at-ilvl gear.

For min-maxing stats and gear options, give the Gear Sync Calculator a try:

[Omni Job Gear Sync Calc](https://bit.ly/XIVGearSyncCalc)

--- 

## Additonal Resources
- [White Mage Rotation Planner](https://bit.ly/whmrotation)

   Created by Fürst Blumier
   
   A rotational sim for full rotation planning and comparing between options.


- [Eden's Verse Fight Tips](https://saltedxiv.com/whm/edens-verse-savage)

   Written by Alevia Rohan


- [Eden's Promise White Mage Guide](https://saltedxiv.com/whm/edens-promise-white-mage-fight-guide)

   Written by Alevia Rohan



--- 


## About the Author
Not a huge fan of talking about myself so I’ll keep this short for now and update it later! I’m Alevia Rohan, your resident Salt Mage, White Mage Balance Mentor, fan of cuddly sheep, creator of comfy XIV job blobs, and the mastermind behind this whole website! Social links below and stuff.

See an issue with the guide? Please shoot me a DM on discord @Alevia#1270. You can also join this site’s discord and find me, or use the feedback or contact forms.