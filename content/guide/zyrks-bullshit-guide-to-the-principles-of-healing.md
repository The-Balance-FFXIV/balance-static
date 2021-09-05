---
title: Zyrk's Bullshit Guide to the Principles of Healing
---
Notes; 
- Source info: https://docs.google.com/document/d/1yoq1zU2VgMJQ53PaJHaUtwA3S2aSz1C69qkLDaOmZY8/edit#

--- 

# Zyrk’s FFXIV Shadowbringers Healing Guide

## Learn how to hate your party, the game, and yourself

> ### Translators, please check the changelog 

# About the Author
Hi, I’m Zyrkhan Dar’locke. My name is blue on The Balance, and that’s basically all I have to say for myself. You may also know me as “what?” and “literally who.” I’m here to talk about healing and stuff, because I guess I like it or something, mostly because I don’t respect myself. If you also would like to learn about healing, or just hate yourself enough to listen to me ramble about it for the next 48 pages, here’s a thing I guess.




![Are you prepared to suffer?](https://imgur.com/DuwsD7v)

# Credits
> ### “healing is a... complikcated jogo”
> ### -Kendy


## Special thanks to:

The Balance Discord as a whole for helping to shape me into the player I am today, and for providing me with a place where I will never stop learning.

My fellow mods and the mentors on The Balance, for making sure I don’t say anything stupid here and make a fool of myself. You guys are great.

The healer channels of The Balance that are mostly not completely full of degenerates, for inspiring the creation of a general healing guide in the first place.

*(Dialace, you pretty much brought up the idea and then I went and wrote it, so I guess I stole your thunder kinda I’m sorry.)*

Allagan Studies for all the work they’ve done with the Stat Intervals spreadsheet and all kinds of other math witchcraft.

Favorite Mentor™ Ahri for providing a ton of consultation and proofreading throughout the project.

Orinx for his excellent work on the healer DH thread.


--- 

# Changelog - Translators look here
- 1/9/18, patch 4.18 - released
- 12/8/18, patch 4.45 - updated
  - Updated Combined Healer Kit section to reflect changes to Divine Benison
  - Various updates to reflect AST’s newly not-laughable pDPS
  - Added section on Lucid Dreaming usage
  - Added explanation of single target GCD macros being situationally permissible
  - Added xivanalysis under Identifying Areas for Improvement
  - Added explanation of how to check damage types in ACT/FFLogs
  - Added section on Damage/Healing Variance
- 12/17/20, patch 5.4 - updated
  - Holy shit he actually updated the guide
  - All it took was 9 months of quarantine during a global pandemic
  - Too bad we’re like 2 patches away from an expansion
- If you were translating the guide, or if you have previously translated it and would like to update it to reflect the updates I’ve made, I’ve kept an archived version of the pre-update guide as well as a copy of the updated guide where I highlighted and commented explaining every single change I made to make it as painless as possible to spot the differences.
  - [Archived pre-update guide](https://docs.google.com/document/d/1mMIJZ8W8efDIkAyMUKZ5xjSnTglAxM_QLdkU6ymrQBo/edit?usp=sharing)
  - [Updated guide with comments](https://docs.google.com/document/d/1NnwkwugzgQ2yetlX6LZxOrWWefqSv0YEOVA9XztxwcQ/edit?usp=sharing)



<!-- TODO: The above links to google docs - not sure if they should stay for transparency, or are irrelevant, but included anyway! -->

# To-Do
- Working with your cohealer: awareness, consistency, communication
- Working with your tanks: awareness, consistency, communication



--- 

# Table of Contents
*(for you PDF nerds)*

- [The Scope of this Guide](#the-scope-of-this-guide)
- [Core Concepts and Mechanics](#core-concepts-and-mechanics)
  - [GCDs/Spells](#gcds-spells)
  - [oGCDs/Abilities](#ogcds-abilities)
  - [GCD Clipping/Animation Lock](#gcd-clipping-animation-lock)
  - [Heal Delay](#heal-delay)
  - [Server/Entity Ticks](#server-entity-ticks)
  - [eHP/Mitigation](#ehp-mitigation)
  - [Buff/Debuff Snapshotting](#buff-debuff-snapshotting)
  - [Enmity/Threat](#enmity-threat)
  - [Macros and Skill Queueing](#macros-and-skill-queueing) 
  - [Stat Tiers](#stat-tiers)
  - [Damage/Healing Variance](#damage-healing-variance)
- [The Purpose of a Healer](#the-purpose-of-a-healer)
  - [Keeping the Party Alive](#keeping-the-party-alive)
  - [Dealing Damage](#dealing-damage)
- [Healer Identities and Their Roles in the Meta](#healer-identities-and-their-roles-in-the-meta)
  - [The Forced Dichotomy of Healer Design](#the-forced-dichotomy-of-healer-design)
  - [WHM](#whm)
  - [SCH](#sch)
  - [AST](#ast)
- [Encounter Design](#encounter-design)
  - [What the Encounter is Asking of You](#what-the-encounter-is-asking-of-you)
  - [Damage Sources](#damage-sources)
  - [Damage Types](#damage-types)
- [Healing Practices](#healing-practices)
  - [Always. Be. Casting.](#always-be-casting)
  - [Being Prepared](#being-prepared)
  - [Triage](#triage)
  - [Choosing the Right Tool for the Job](#choosing-the-right-tool-for-the-job)
  - [Healing Preemptively](#healing-preemptively)
  - [Proper Usage of Lucid Dreaming](#proper-usage-of-lucid-dreaming)
- [Maximizing Efficiency](#maximizing-efficiency)
  - [The “Cost” of an Action](#the-cost-of-an-action)
  - [GCD Efficiency](#gcd-efficiency)
  - [MP Efficiency](#mp-efficiency)
  - [Making the Most of Your Kit](#making-the-most-of-your-kit)
- [Working With Your Cohealer](#working-with-your-cohealer)
  - [You Have One Combined Healing Kit](#you-have-one-combined-healing-kit)
  - [You Have One Combined Damage Kit](#you-have-one-combined-damage-kit)
- [Healing Mentality](#healing-mentality)
  - [Progression](#progression)
  - [Farm](#farm)
  - [Speedkill](#speedkill)
- [An Overview of Stats](#an-overview-of-stats)
  - [Magic Damage and Main Stat](#magic-damage-and-main-stat)
  - [Piety](#piety)
  - [Relative Value](#relative-value)
  - [Critical Hit](#critical-hit)
  - [Determination](#determination)
  - [Spell Speed](#spell-speed)
  - [Direct Hit](#direct-hit)
- [Common Pitfalls](#common-pitfalls)
  - [Dropping Casts](#dropping-casts)
  - [Unnecessary Healing](#unnecessary-healing)
  - [Unnecessary Shielding](#unnecessary-shielding)
  - [Playing Scared](#playing-scared)
  - [Misplacing Blame](#misplacing-blame)
  - [Failing to Adapt](#failing-to-adapt)
- [Learning and Improvement](#learning-and-improvement)
  - [Learning Tools](#learning-tools)
  - [Identifying Areas for Improvement](#identifying-areas-for-improvement)
- [Interpreting FFLogs Data](#interpreting-fflogs-data)
  - [Summary](#summary)
  - [Casts](#casts)
  - [Overheal](#overheal)
  - [Mitigation](#mitigation)
  - [Putting it All in Context](#putting-it-all-in-context)


--- 

# The Scope of this Guide

I’ve said before that I feel like it’s difficult to adequately present a concise job guide for a healer, because any single topic would require an extensive explanation of caveats, edge cases, and exceptions in order to be much more than a general guideline. And many people may misconstrue that guideline because they don’t understand the reasoning behind it, and therefore don’t understand what situations would necessitate a deviation from said guideline.

It is with this in mind that I wanted to undertake the construction of a resource that would attempt to set people up with an understanding of the fundamental principles of healing, the thought processes that lead us to arrive at a given conclusion, the tools to think through problems or questions on their own, the ability to apply their knowledge to any variety of unique and unfamiliar situations and adapt to them, and the foundation and perspective to analyze and scrutinize information to determine sound or flawed reasoning.

There are very few absolute rules in healing. Be wary of anyone who tells you something is ALWAYS this way, or you should ALWAYS do that. There are almost always legitimate exceptions. Open minded skepticism is healthy, and the truth welcomes it. If they’re telling you the truth, they should be able to back it up. It is my hope that I’ll be able to foster that open minded skepticism, which may in turn lead to confidence in your understanding of healing and the good sense to learn, adapt, and improve when presented with new information that stands up to scrutiny.

A lot of guides want to teach you to pick out the correct answer in a multiple choice test, and that’s great as a crash course intro to a job. But, knowing what your skills do isn’t enough to make you a great healer. Where some guides want to teach you to memorize a bunch of correct answers, I want to teach you why. And that’s not to knock any of the amazing guides we have out there at all. On the contrary, I want to provide the context and background knowledge to appreciate and understand those guides even better.

I’ve attempted to write a TL;DR at the beginning of most sections to make it more palatable, but the guide was written mostly as a continuous piece, so I can’t promise they’ll help. The point of the guide is to go in depth, so if you want brevity, I think you’re in the wrong place, friendo.

Without further ado… let’s teach a man to fish.


--- 

# Core Concepts and Mechanics

There’s a lot going on behind the scenes in this game that many players may be partially or even completely unaware of. Some things are more apparent, while others are virtually undetectable through normal gameplay. A lot of guides mention some of these mechanics where they are relevant to healing, but I wanted to compile an explanation of them here, as it’s important to understand them.

## GCDs/Spells

*TL;DR - GCDs are actions that activate the global base recast timer of 2.5s, and scale with skill/spell speed and attack speed buffs. GCD heals are affected by healing buffs and debuffs.*

A **GCD** is a **G**lobal **C**ool**d**own. It’s the recast time on all your normal actions. The base GCD is 2.5s, and this is reduced by attack speed buffs, as well as skill/spell speed. All spells display a cast and recast time. These times may or may not be the same. For instance, Esuna has a cast time of 1.5s, and it is a GCD spell, which means it has a base recast of 2.5s. You are finished casting the spell after the cast time is finished, but cannot cast another GCD spell until after the recast timer is finished. Some spells (like Raises) have a longer cast time than the GCD.

Understanding the difference between spells and abilities is important, because outgoing healing buffs only affect spells, which specifically refers to actions that are on the GCD. So, buffs like Temperance, Fey Illumination, and Dissipation that buff outgoing healing only affect spells like Cure, Medica, Medica II and Regen’s HoT effects, etc. In the tooltip, an outgoing healing buff will use the wording, **“increases healing magic potency...”**

(Embrace and Seraphic Veil are also considered spells, even though they’re not tied to your own GCD, but Aetherpact, Whispering Dawn, Angel’s Whisper, and Consolation are considered abilities rather than spells, and are therefore not affected by outgoing healing buffs.)



## oGCDs/Abilities


*TL;DR - oGCDs are abilities that do not activate the global base recast timer of 2.5s. They are actions that typically have cooldowns, and oGCD heals are not affected by healing buffs and debuffs.*


Actions that are not tied to the GCD are referred to as **oGCDs** (**o**ff **G**lobal **C**ool**d**own), and these are generally classified as abilities. These include actions such as Tetragrammaton, Lustrate, Essential Dignity, Assize, Indomitability, Earthly Star, etc. These are not affected by outgoing healing buffs, because they are abilities, not spells. That said, they are also not affected by healing debuffs like Infirmity, and will heal for their full value even when the target is receiving reduced healing.

However, they are affected by incoming healing buffs like Mantra, Nature’s Minne, and Asylum, which work on all healing, including abilities. In the tooltip, an incoming healing buff will use the wording, **“increases HP recovery via healing actions...”**

Both spells and abilities are affected by your stats, which means they will scale with your gear, are affected by stat buffs such as Mind potions, and are affected by Weakness and Brink of Death.

## GCD Clipping/Animation Lock

*TL;DR - Executing any action has an animation lock. oGCD animation locks can eat into your GCD uptime and reduce your total output. To avoid this, you can use oGCDs after an instant GCD.*



Every action has an animation lock, including GCDs. The animation lock on GCDs is typically not too important, because the GCD recast timer is much longer than the animation lock. However, this becomes important when using instant oGCDs, because they can cut into your next GCD, reducing the amount of time you spend actually casting spells, thereby reducing your total output. This is called **clipping**. It seems like a small difference, but it adds up very quickly. For instance, if you’re casting Glare back to back, and you use Tetragrammaton between casts, you inserted a delay between your casts. Do that enough times, and it quickly adds up to many lost casts over the course of a fight.

The way we address this is by trying to use oGCDs during the remaining recast timer after using an instant GCD, such as Regen, Aero 2, etc. This allows us to use those oGCDs without sacrificing GCD uptime, because the oGCD was used during the GCD timer, instead of between two GCD timers. This is called **weaving**.
The animation lock on most actions is roughly .65s, and this is not affected by attack speed buffs or skill/spell speed. This is also true for GCDs. For instance, if you cast Regen, the animation lock of the GCD itself is .65s. After that animation lock is finished, you can use an oGCD like Tetragrammaton, which is another .65s animation lock. Depending on how fast or slow your GCD timer is (as in how much skill/spell speed you have, and attack speed buffs), you should be able to use a second oGCD before your GCD is up again, while clipping into your next GCD very little, if at all.

Utilizing these instant cast windows to weave oGCDs is very important for maximizing your throughput, and most job guides should address the specifics of this as it applies to each healer. To simplify, you can look at it as each time you clip your GCD with an oGCD, you lost ~33% of the potency of your DPS filler, because you lost ~33% of a GCD worth of uptime. Some amount of clipping may be unavoidable, but it is something to be mindful of.

## Caster Tax

*TL;DR - Any spell with a cast time equal to or greater than its recast time has an unwritten ~0.12s animation between perfectly chained casts. If the cast is shorter than the recast, this does not apply.*


Spells with full cast times, meaning the cast time is equal to or greater than the recast (GCD), are subject to an unwritten animation lock that takes up roughly a flat 120ms. For example, if your GCD is the full 2.5s and you’re chain casting Glare, which has a full 2.5s cast time, it’s actually about 2.62s between casts because of that extra animation lock that occurs after the spell completes.

However, with a spell that has a shorter cast time than the GCD, like any instant cast or spell with a fast cast time like Esuna or Malefic IV (1.5s), that short animation lock is eaten by the recast time, so you would have the true 2.5s between casts if you were chain casting spells like that.

This is mostly relevant for Astrologian, because their main damage spell has a shorter cast time than the GCD, so they are virtually completely exempt from the caster tax, which can add up to several extra casts over a full fight (and slightly more MP spent, by extension).

## Heal Delay

*TL;DR - There’s a small delay between the end of a cast and the application of damage or healing. AoE effects also roll on one target at a time, making that delay more pronounced on some targets. Keep this delay in mind and play accordingly.*



This is a pesky mechanic of the game, but one that can be accounted for and even used to your advantage, to a degree. I’m sure everyone knows the Benediction meme about how it’s “instant” except it isn’t. We’ve all been there, whether it’s Benediction, or Cure II, or whatever, where you see the pretty green numbers pop up above your tank’s corpse even though you finished the cast before he died. That’s just the way it is. Nothing to be done about it, so get familiar with it, get used to it, and learn to work around it. As you learn to predict damage, and familiarize yourself with the timings, you can do all sorts of neat things like casting Benediction right before someone takes damage, only to have Benediction actually heal them immediately after the damage goes through.

This delay also applies to buffs, as any tank will tell you. There is an animation delay before the buff shows up on the target’s buff bar, and then yet another small delay before the game actually registers the effects of the buff. The way the game calculates damage also factors into this delay, but suffice it to say that it’s very possible for tanks to die with Hallowed Ground on their buff bar, or take damage while they have a shield up. Buffs, including shields, need to be used slightly more in advance than it may appear.

The real kicker here is that there’s a much more significant delay on AoE heals (and damage). If you’ve ever cast Holy, you’ve probably noticed that there can be a pretty large gap between when the first enemy gets stunned and when the last enemy gets stunned. This is because AoEs roll on one target at a time. This can lead to situations where an AoE heal rolls on some targets too late, and they don’t get healed in time for raid damage, so you’ll want to account for that when timing your heals.

## Server/Entity Ticks

*TL;DR - DoTs and HoTs “tick” every 3 seconds. Most ground effects also tick every 3 seconds for the purpose of applying the effects of the ground AoE, so for position-based buff effects like Sacred Soil, Collective Unconscious, and Passage of Arms, you may need to use the skill up to 3 seconds before damage is calculated in order for the effect to apply in time.*


While we’re on the subject of delays, let’s talk about **server/entity ticks.** It’s a phenomenon commonly referred to as server ticks, but the more accurate term may be entity ticks. Many aspects of the game operate in intervals of 3 seconds, most notably HoTs and DoTs, as well as passive HP and MP regeneration, which “tick” every 3s. The timing of the entity tick is determined when each entity is spawned in, which is why everyone’s ticks usually line up in an instance, since every entity should be created simultaneously.

The part where this becomes quite significant is when you look at persistent ground effects. Asylum, Collective Unconscious, and Sacred Soil (and Shadow Flare) are all persistent ground effects. Previously, these effects could take up to 3 seconds after being placed before their effect would trigger, as they worked on an independent server tick. As of patch 4.4, ground effects such as these apply their effect immediately upon being placed.

The first “tick” on the initial cast is entirely independent from the actual 3 second tick intervals, so the first two “ticks” can be anywhere from 0-3 seconds apart. The remaining ticks will happen in 3s intervals following the second tick. The important thing here is that they still only refresh their effects in 3 second intervals, so if someone isn’t within the effect when it’s placed, they will not receive the buff as soon as they walk into the area. They can only receive the buff on a refresh “tick.”

This means that, if you want the damage reduction from Collective Unconscious or Sacred Soil, you need to use the ability before the incoming damage is *calculated*. And damage is calculated at a different time for lots of different abilities. Usually, the calculation is made right at or just before the end of the cast of the ability, which is typically shortly before the damage hits. However, there are some instances where the damage is calculated long before you take the damage. Susano’s phase transition comes to mind, where the damage is calculated almost right when you destroy the sword, and if you put up shields after that, the damage of his phase transition will go right through them.

The change in patch 4.4 actually caused Asylum to have 1 additional tick, because its first tick occurs immediately upon placement. It may be important to note that Collective Unconscious doesn’t benefit in the same way. The distinction is that Asylum is a ground effect that heals, so its ticks are calculated as a ground effect. Collective Unconscious is a ground effect *that applies a HoT* (and damage reduction). The HoT still functions the same as a normal HoT, with its ticks falling on the independent server/entity tick.

## eHP/Mitigation

*TL;DR - **Everyone needs to use their mitigation tools.** Coordinate mitigation with your group if possible, Reprisal is not an optional role skill. Addle is not for your Wyrmwave if it can be used to save a healer GCD instead.* 


First and foremost, ***mitigation is a group effort.*** We don’t have Virus or Disable anymore, and they redistributed our wealth of on-demand mitigation to other roles. The upside is that we now have more total mitigation potential across the whole party than ever before. Tanks have a flat 10% reduction every 60s from Reprisal. Each ranged physical DPS has 10% reduction every 120s. Melee and casters have Feint and Addle for 10% physical or magic damage reduction, respectively. The mitigation potential is insane. *Use it.*

**eHP** (**e**ffective **H**it **P**oints) is a term used to describe, well… a person’s effective hit points. This accounts for current or max HP, shields, and damage reduction buffs and debuffs. Not typically discussed as a hard number, but as a concept that you need to make sure the party has enough eHP to survive the incoming damage. You *only* need enough eHP to consistently survive the incoming damage, so you don’t necessarily need to overmitigate, but you do want to make the most of your available mitigation tools. If you don’t need to mitigate something else before the mitigation tool would come back off cooldown, use it. If you’ll get more value by using it for something else, you may want to hold it for that. Plan your mitigation and discuss it as a group if at all possible.

Something to note is that damage reduction works multiplicatively. If the unmitigated damage is 10,000, using Reprisal will take it down to 9,000. Using Addle/Feint on top of that would reduce it by 10% again, which would take it down to 8,100. Say you use Sacred Soil, then it becomes 7,290. If you threw in Collective Unconscious, then it’s 6,561. The first cooldown used reduces the damage by 1,000. We’ll call that 100% efficacy of the mitigation. The fourth cooldown only reduced it by an additional 729, compared to the 10,000 unmitigated base. You could think of that as being 72.9% efficacy. Stacking mitigation can be incredibly powerful, but stacking too much can be less efficient if it costs you something, like an opportunity to use one of those cooldowns at full strength on something else, or an Aetherflow stack in the case of SCH.



## Buff/Debuff Snapshotting

*TL;DR - Damage is calculated for each attack at a specific instant, usually slightly before the damage occurs. For the purposes of damage modifiers, the buff/debuff needs to be in place when the damage is calculated. For DoTs and HoTs, all buffs and debuffs on the target the instant the DoT/HoT is applied affect the entire duration of the DoT/HoT.*



While talking about server/entity ticks, I mentioned “when the damage is *calculated.*” That ties into this. **Snapshotting** refers to how an action’s effect is calculated at one particular instant before the action’s effect applies. This has a special interaction with DoT and HoT effects. The entire duration of the DoT/HoT is affected by whatever buffs and debuffs were in effect when the DoT/HoT was applied. This means that if you apply a DoT right before Trick Attack wears off, every tick for the entire duration of the DoT will be dealing extra damage, because the DoT was snapshot under Trick Attack. HoT effects (spells only, remember) also interact the same way with healing buffs. This means that you can use Temperance, cast Regen on the tank, and then refresh Regen right before Temperance wears off, and you’ll get a lot of buffed Regen time.

The exception to this is persistent ground effects. These DoTs/HoTs snapshot buffs on the player, but calculate each tick individually against targets and do not snapshot enemy debuffs (except Collective Unconscious, because the field applies a persistent HoT buff, which snapshots).

## Enmity/Threat

*TL;DR - Damage generates enmity equal to 100% of damage dealt. Healing any target that is in combat generates enmity equal to 50% of healing done, divided evenly between all enemies the target is in combat with. Overhealing does generate enmity, but not at an increased rate.*



Enmity/threat isn’t something we usually have to pay too much attention to as healers, because the game just isn’t designed for it to be our problem, for the most part. However, it’s still important to understand how it works for the situations where it *is* our problem due to fight mechanics or other extraneous circumstances.

Healing a target that is in combat generates enmity against all enemies the recipient of the healing is in combat with. This enmity is equal to 50% of the amount of HP restored, including overhealing, and that enmity is divided evenly between all enemies in combat with the recipient of the heal (200 healing = 100 enmity, if there are 2 enemies, that’s 50 enmity each). Overhealing does not generate enmity at an increased rate, but does still generate the normal amount of enmity. Normal enmity generation is simply a 100% conversion of the amount of damage dealt, with tanks having various enmity multipliers on their tank stances and certain skills, which causes them to generate enmity equal to several times the amount of damage they deal.

Applying buffs also generates a small, superficial amount of enmity, so if your tank has facepulled mobs in a dungeon without actually generating any enmity against them, they’ll turn and run after you if you place a buff on the tank, even if the buff doesn’t do damage or restore HP. Tanks can’t always tag every enemy they run past while they’re pulling in a dungeon, so it’s important to be mindful of this. In a more severe form, having a HoT effect active on the tank while he’s pulling mobs will likely cause the mobs to aggro onto you before he even has a chance to hit them, so be mindful of your regens, and try not to refresh them right before the current pull dies, or right before your tank makes another pull.

Not using HoTs before/during dungeon pulls is a general guideline and a courtesy thing, but it is potentially a gain. Every tank will feel differently about it, though, and unless you know your tank and know they’re okay with it, chances are good that most pug tanks will simply find it annoying, which is more trouble than it’s worth. You could explain to the tank that the regens are intentional and that you know you’re not in any danger by taking a few hits in the process when you bring the stragglers to the tanks at the end of the pull so he can pick them up. But, any time you lose by explaining this or having the tank slow down to question it or complain is going to be far more time than you could ever save by saving one GCD here and there over the whole dungeon.

The exception to this is on pulls with only a single target, as the first thing that’s going to happen is your tank hitting that target, which will generate far more threat than a single tick of your HoT. Some fights even benefit from having an AoE HoT up before you pull if there is raidwide damage very early in the fight, but this applies more to AST, since their sects offer a permanent 25% reduced enmity generated. It should likely be discussed with your tank ahead of time, and if it requires the tank to do an additional threat combo, it is generally not worth it. If you have a NIN for Shadewalker/Smokescreen, it should be a complete nonissue.

## Macros and Skill Queueing

*TL;DR - Macros insert a small delay between actions because they do not use the skill queueing system, so they’re subject to input delay and latency. This decreases your output, so macros for commonly used GCDs are highly discouraged. Some oGCD macros are more acceptable, but they will still create delays, so you should understand the cost and benefit and have a good justification for them.*

**Skill queueing** is the system that allows you to queue your next skill before your current action is entirely finished. When you give the command to execute an action within a little less than 1 second of the end of your current action, the game will queue up that action to start immediately when your current action finishes. This mitigates input and latency delays between your actions in order to allow for smoother gameplay.

Macros, however, are unable to use the skill queueing system. They will not begin executing the action until *after* the first time you press the key after your current action is finished. Even if you spam the key at inhuman speeds and issue the command the exact moment your current action is finished, you’re still subject to latency delay while the game receives that command. This causes a small delay between actions whenever you’re using macros, which can add up very quickly to a lot of lost time over the course of a fight. Ultimately, macros reduce your total output the more you use them, which should be avoided whenever possible.

Macros for your GCDs are the most egregious offenders, especially commonly used GCDs. Macros for oGCDs aren’t nearly as bad, and can situationally be quite helpful, but they will likely still result in additional clipping. GCD macros are highly discouraged, as you have plenty of time between GCDs to change to your next target. You already have to decide your next cast in the span of one GCD, so it shouldn’t require any additional thought to decide what you should be targeting as well. There is a case for mouseover macros for instant oGCD heals, because those are sometimes used as emergency spot heals, where you cannot pre-select your target and are forced to react as quickly as possible, but do yourself a favor and avoid GCD macros like the plague and get used to targeting manually.

The other exception to this lies in the phrase *“commonly used GCDs.”* Some healers strongly prefer using targeting macros for single target GCD heals (Cure II, Regen, and equivalents), including some of the most talented and successful healers at the highest levels of play. The thing is, at those high levels of play, they can “get away with it,” you could say, because their healing is so optimized that they might cast a single digit number of those spells in an entire fight, so the total effect of that small delay is minimized to the point of being entirely negligible.

The bottom line remains, however. It’s fundamentally, principally less efficient. There is still a delay, and that can matter, even if it doesn’t result in any lost GCDs over the fight. Even the smallest delay increases the amount of time over which you are dealing damage, and even though you are doing the same amount of damage, if it takes you 0.5s longer to deal that damage, you have increased the ***S*** portion of DPS, thereby reducing your DPS. Macros such as these are permissible when you are playing efficiently enough that you cast very few single target heals, but they should be off limits for anyone who finds themselves leaning heavily on these single target GCD heals, and I aim to encourage building the best habits from the start.

## Stat Tiers

*TL;DR - All stats in the game operate in discrete tiers. You will gain no benefit from a stat point unless that stat point pushes you to the next tier. [Check the stat tiers here.](https://www.akhmorning.com/allagan-studies/stats/)*



Stat tiers are probably the most obfuscated thing in the entire game. Everything in the game is tiered off at set intervals. Your GCD is tiered every .01s, your crit chance is tiered every .1%, your increased damage and healing from determination is tiered every .1%. Your physical and magic defense are tiered. Your main stat is tiered. Your attack power and magic attack power are tiered. [Everything. Is. Tiered. (Check the stat tiers here)](https://www.akhmorning.com/allagan-studies/stats/)

For example, skill/spell speed tiers are over 60 points apart. 715 spell speed is a GCD of 2.44s. Your GCD does not change at all until you get to the next tier at 782 spell speed. You could have 781 spell speed and your GCD would be exactly the same as if you had 715. Your GCD is the only easily observable example of this, and the tiers are very far apart for skill/spell speed, so the potential for wasting stats is the highest for that stat. If you’re worried about your secondary stats, that should be one of the first things you look at. Don’t waste stats.

Other secondary stats are also tiered, but their tiers are much closer together, so the maximum amount of points you can waste in those stats is much smaller, but it’s still something to consider. No point in melding an extra Savage Might V in your crafted accessory if the determination tiers are 17 points apart and you won’t hit the next tier with that +12.

## Damage/Healing Variance

*TL;DR - All damage and healing with a potency value is subject to the game’s potency variance of a uniformly distributed +/-5%. Pay attention and don’t cut things too close.*

All potency-based damage and healing (as opposed to percent-based) is subject to the game’s potency variance of a uniformly distributed +/-5%. This means that non-percent-based damage and healing can roll for as low as 95% of the listed potency and as high as 105% of the listed potency, and it is equally likely to roll any number within that range.

Sometimes, a tank will get high-rolled on several incoming hits in a row and take noticeably more damage than usual, or your heals might roll low, which could leave them too low for upcoming damage if you don’t take notice and compensate for it. Or if people are just barely surviving raid damage, it’s very possible that a high roll could kill them. Just because no one has died yet, that doesn’t mean your current setup is sufficient.

You don’t want to cut it too close and risk having random deaths due to standard variance. Sometimes, you just get unlucky. Your HoTs don’t crit, the ticks roll low, damage rolls high, and suddenly you’ve got a tank who’s missing 20% more HP than usual before a tank buster.

--- 

# The Purpose of a Healer


## Keeping the Party Alive

*TL;DR - We heal to keep the party alive so we can kill the boss. But the objective is ultimately to maximize the effectiveness of the party to give the party the best chance at success. This means we do a lot more than just heal.*


Simple, right? The healer’s job is to heal, to keep the party alive. On the surface, this is true. As most of you are aware, that’s not all we do as healers, but we’ll get to that. First, I want to briefly explore this idea. We keep the party alive. We respond to whatever the fight throws at us in order to get the party through the entire encounter so that we can kill the boss. This is our most important function, and is always priority #1. That’s why we need healers. That’s why we keep the party alive. To kill the boss. It shouldn’t require an explanation, but you’d be surprised. The takeaway here is that the goal is to kill the boss. We need people alive so they can deal damage. It doesn’t matter if they’re at 100% HP or 5% HP, as long as they’re not going to die. That’s where the next bit comes in.

## Dealing Damage

*TL;DR - DPS is just as much a part of our job as healing. We contribute as much as we can to the success of the party. Optimizing our play means optimizing healing and damage. Optimizing healing serves no purpose if it doesn’t result in an overall damage gain in some way.*


The point of healing the party is that we need them to deal damage in order to kill the boss. Conveniently, we also have a pretty decent damage kit as healers. The goal is to kill the boss, you have to do damage to kill the boss, we can do damage. Simple concept. Whenever we don’t need to be healing, we can and should be doing damage. This is not a debate, it is not a conversation, it is not a suggestion. It is a fact. **DPSing isn’t something you *start* doing when there’s nothing for you to heal. It should be something you *stop* doing when the fight requires you to heal.** There may be times when you legitimately do need to do so much healing that you have almost no opportunities to DPS, but I can promise you that those situations are much rarer than most people think.

Much of optimizing healing in this game revolves around optimizing damage. Optimizing healing means healing as efficiently as possible in order to give yourself as much time as possible to do damage. Your DPS is far from the only measure of a good healer, but it is a vital part of the picture. If this is a fact that you refuse to accept, I encourage you to reconsider, but I’m going to proceed under the assumption that we’re on the same page, here. I’m not going to try to teach a man to fish when he insists on starving himself to death.

--- 

# Healer Identities and Their Roles in the Meta

## The Forced Dichotomy of Healer Design

*TL;DR - Shields are inherently less efficient on their own than equivalent upfront heals and/or regens, because shields are able to do something unique, which is increase the party’s maximum eHP. If you don’t need shields to prevent lethal damage, don’t be afraid to use Diurnal Sect if you’re partied with a WHM. It’s the more efficient Sect. You don’t need the shields just for the sake of themselves.*


SE currently has this strange obsession with this healing dichotomy. It seems they’ve designed themselves into a corner, and now every healer has to have regens or shields. With that in mind, it’s important to understand how they’ve designed regens and shields. Regens are extremely GCD and MP efficient. They’re very potent because the entire effect isn’t instantaneous. Shields have a very powerful upfront effect, and have the ability to increase eHP and prevent otherwise lethal damage. Shields ease HP checks. SE has factored this heavily into the power budget of shields, generally giving shields high MP costs and lower total potency than upfront heals, because they can be used to increase the party’s maximum eHP.

By nature, because shields are generally less GCD and MP efficient than upfront heals and regens, it is almost always more efficient to heal up the damage than to prevent it with shields. The only time you *need* shields is when you are preventing someone from dying from full HP. That isn’t to say you won’t cast shields, because you will often do so whenever you do not have alternatives. For a Nocturnal AST, Aspected Helios is simply more potent than Helios as long as the shield is consumed before it falls off. For SCH, if you don’t have Indomitability or Whispering Dawn to handle the AoE healing, you’ll cast Succor. But, when you’re choosing between the two, it’s almost always better to heal the damage afterward than to expend more resources to mitigate it.

Most notably, as an AST, you’ll choose between Diurnal Sect (regens) and Nocturnal Sect (shields). Unless you absolutely *need* shields to prevent deaths, regens are inherently much more efficient. Don’t be afraid of running double regens if you’re WHM+AST and there are no mechanics that *require* shields. You’ll spend less MP and fewer GCDs running double regens than running regens + shields just because people think you have to have one of each. Diurnal Sect’s regens are inherently more potent. It’s simply the better sect, unless the fight forces you to have shields.

All this said… in the Shadowbringers expansion, SE pivoted heavily on healer design. The regen/shield dichotomy still exists, but it’s significantly diminished due to the increased accessibility to both kinds of tools even “outside of the job’s role.” WHM has limited access to mitigation (though not a shield) through Temperance. AST has limited access to the opposite sect’s effects with Celestial Intersection and Neutral Sect. SCH got new raw healing and regen abilities like Consolation and Sacred Soil getting a powerful HoT effect.

In addition to that, ranged physical DPS have all been given access to raidwide mitigation, and tanks have been given more tools to improve the survivability of the rest of the party across the board. Together, these changes reduce the game’s focus on whether each healer primarily has access to regens or shields, because everyone has a little of everything. So the dichotomy exists, it’s just much less important.

## WHM

*TL;DR - WHM has excellent on demand and sustained healing, providing superior brute force healing and recovery potential, as well as brute force DPS, and it has a solid spot in many groups because of this, especially during progression.*


White Mage boasts the most powerful sustained AoE healing of the three healers in the form of Cure III. It’s incredibly potent and MP efficient as an AoE heal. Honestly, this is half the reason you would want a WHM in your group. It’s an amazing tool for brute forcing AoE healing, picking up slack in an emergency, and recovering from HP deficits very quickly. WHM also has an impressive suite of oGCD heals, which offer a lot of value without having to lean heavily on GCD heals, as well as additional burst healing and recovery potential. WHM also has ridiculously good MP economy between Lucid Dreaming, Thin Air, Assize, and Lily spells. These factors combine to make it an excellent choice for progression or in less coordinated play in general.

In addition to its healing kit, WHM has the highest potency DPS filler. This is important to consider when coordinating healing GCDs, because the WHM’s DPS GCD is more valuable than AST’s or SCH’s.

## SCH

*TL;DR - SCH is the king of oGCD healing and on demand mitigation. They reign supreme in the sheer number of oGCDs they have access to, which allows them to fulfill their job fantasy of being the battlefield tactician with a tool for every job and a contingency for every possible scenario.*


Disclaimer: in this section, I’m going to use some questionable terminology. This terminology does not necessarily reflect the common uses of these terms and does not necessarily transfer perfectly to common lingo. However, within the confines of this guide, it is important for the sake of clarity that I’m able to clearly refer to different portions of a healer’s DPS contribution as separate entities. These terms are as follows:

- **pDPS** - Personal DPS. This is how much DPS you do directly with your damaging spells and abilities.
- **rDPS** - Raid DPS. In this context, I’m using this to describe how much DPS you contribute by increasing the DPS of the rest of the raid through buffs and debuffs (card buffs, Chain Stratagem).
- **tDPS**- Total DPS. pDPS + rDPS. I’m going to use this to refer to all the DPS you’re contributing to the group with your entire kit.

Scholar is the king of oGCD healing. It boasts several of the most powerful oGCD abilities in the entire game, as well as a fairy that contributes quite frankly a disgusting amount of healing and utility to the party. SCH has, at the time of this writing (Patch 5.4), less personal DPS (pDPS) than WHM but more than AST, and they bring a very nice raid DPS (rDPS) cooldown in the form of Chain Stratagem. From patch to patch, the balance of the healers’ total DPS (tDPS) can shift frequently. Currently, SCH is in a somewhat awkward place because so much of its contribution to the party is in the form of highly efficient oGCD heals, which has the potential to enable significantly increased cohealer DPS in the right situation.

However, this isn’t always the case in practice, because that amount of healing doesn’t enable any additional cohealer DPS if the group already has enough free healing that you can’t create additional DPS opportunities by bringing a SCH. For that reason, a good SCH can be absolutely incredible in progression and less optimized play because of the raw numerical power of its kit, but the job can fall in and out of favor in speedruns depending on the exact balance of the other healers’ kits and the healing requirements in any given encounter.

Notice that I haven’t even mentioned shields. That’s because SCH’s strength, its identity, is not its shields. Once upon a time, that was its identity. That time has long since passed. SCH has shields, but that’s more of a formality at this point. Sometimes, they’re necessary to get the party through HP checks. To that end, SCH and AST have the capacity to shield the party. But this simply is not the core design focus of either job, nor should it be.

## AST

*TL;DR - AST has a full suite of very powerful tools, and its overall DPS contribution to a party makes it virtually always competitive at the highest levels of play. Primarily, the ceiling on its potential DPS contribution is quite high. Because of that, it’s usually the go-to choice for speedkills, and its baseline power is high enough that it’s a desirable healer for general play as well.*


Astrologian’s identity is perhaps a bit confused at the moment. To be perfectly honest, it seems like SE isn’t sure how to address the corner they’ve designed themselves into with healers, and AST has become the victim of that uncertainty. As discussed earlier, they’ve been maintaining this dichotomous design that dictates the only healing mechanics as regens or shields, with the rest of the healing kit being basically identical. Because of the way HP checks exist in the game, shields are either mandatory or largely pointless. As a result, they needed to give AST shields in order to avoid SCH being *mandatory* (as opposed to simply optimal or preferred) as the only healer who can meet HP checks for the party, and they also needed to give it the capacity to heal effectively alongside a SCH to avoid making WHM mandatory. As a result, AST attempts to fulfill both roles and compete with both slots, which is… troublesome to balance, to say the least.

AST boasts some very strong GCD heals, good potential rDPS contribution through cards, and a handful of *very* powerful abilities. Essential Dignity is very potent and has two charges on a low cooldown, making it very abusable. Celestial Intersection is incredibly potent and spammable for tank upkeep. Earthly Star is also the highest potency AoE heal in the game by a longshot, and it’s only on a 60s cooldown. Neutral Sect is hands down the single most powerful healing cooldown in the entire game. If Benediction is the healer’s equivalent to Hallowed Ground, Neutral Sect is the healer’s equivalent to tank LB3. It is a button that allows you to Just Say No™ to damage for about 15 seconds. Quite frankly, it’s overkill for basically every normal situation.

That’s all very well, but AST’s identity is not actually about healing. It’s about providing rDPS through cards, and its pDPS is comparatively quite low in exchange, placing a strong emphasis on optimizing the use of your raid buffs to improve your contribution.

After the card system rework in Shadowbringers, the thing that truly sets AST apart is the focus on paying attention to how best to use your cards. Between uses of Divination (your raidwide damage buff on a two minute cooldown), you manipulate cards to set up your job gauge for Divination, and you carefully decide exactly how and when to distribute them, and to whom, to get the most damage out of them. Optimally, this means taking notice of when each party member is doing the most damage in their own rotation, so that you can buff their highest damage spikes instead of their low damage valleys. At the highest levels of play, your gameplay largely revolves around paying attention to these kinds of details to maximize your damage contribution.

--- 

# Encounter Design

## What the Encounter is Asking of You

*TL;DR - In order to determine the best course of action, you should often closely examine exactly what the encounter is asking of you. What are the requirements of this mechanic, and why? How did the devs intend you to handle it when they designed the encounter, and are there other solutions? If you’re ever lost or confused, try considering these questions.*


As healers, it’s critical that we understand the ins and outs of an encounter, because the encounter is primarily what determines what we do and how we play. We observe and understand an encounter in order to formulate a plan of action and respond to its healing, mitigation, and damage requirements. To that end, we must ask ourselves what the encounter is asking of us. What did the devs want me to do when they designed this fight? FFXIV raiding is a dance, and as healers, we have to reverse engineer our half of the dance by observing our dance partner and adapting our steps to match.

On the surface level, it’s simple. The boss deals 40,000 raid damage, the encounter wants me to heal 40,000 raid damage. But sometimes there are additional restrictions or components to our dance steps. Maybe the boss does 40,000 raid damage one time and then doesn’t do any more raid damage for 30 seconds. The encounter is asking me to heal 40,000 raid damage, but it’s not asking me to do it right this second. A Medica II will suffice by itself. Maybe the boss is going to do 130,000 raid damage, while my party’s max HP is 100,000. The encounter is asking me to shield and mitigate that damage enough for the party to live. A basic AoE shield and 2 sources of 10% mitigation should be enough.

Perhaps the boss is dealing 50,000 raid damage 4 times in a row, roughly 5 seconds apart. Well, my party only has 100,000 max HP. The encounter is asking me to heal consecutively. However, it’s not asking me to heal the 4th AoE immediately. I just need to heal up the damage from the first 3 AoEs and make sure the party has over 50,000 eHP when the last AoE hits, and then I can let regens do the rest.

Asking yourself what the encounter does and doesn’t require from you is both how you learn to heal a fight and how you optimize your healing. Focus on doing everything it asks first, and then you can worry more about what it *isn’t* asking. Clean up those dance steps. Eliminate unnecessary, messy steps so it looks nice. Okay, the dancing metaphor has gone on long enough.

## Damage Sources

*TL;DR - Paying attention to when damage is happening and where it’s coming from will better inform your decisions on how to efficiently respond to the damage.*


A big part of understanding an encounter is understanding where the damage is coming from. It comes from the boss, right? Well, usually, sure. But you need to understand how much damage is coming from different parts of the fight, from different abilities and mechanics. In some fights, the boss’s regular auto attacks hit like a truck. In others, they may barely even be noticeable, or the boss might not even *have* auto attacks. Some bosses do almost all of their damage with tank busters, some are mostly raid damage. Understanding where the damage is coming from will allow you to make more informed decisions about how you’re going to heal an encounter.

For instance, if I know that the boss’s auto attacks hurt a lot, that means that I’m going to have to pay more attention to the tank during portions of the fight where the boss is auto attacking freely. If the boss doesn’t auto attack at all, I may well ignore the tank after a tank buster that drops him to 10% HP, because he’s not going to take any more damage. Most bosses also auto attack while they’re in the middle of a cast bar, which can result in tanks taking a very surprising amount of damage during what appears to just be raid damage.

It’s also important to understand where the damage is coming from in a more literal sense. Historically, there have been some times where damage originates from an entity that is separate from the boss. It should be obvious, but that means your debuffs on the boss don’t affect the attack that’s being cast by something else. And that something else might not be targetable. In some fights, there were a few instances where an untargetable entity cast attacks that rendered our debuff mitigation tools useless (skills like Reprisal or Addle), forcing us to rely entirely on shields and player buffs (like Temperance) to mitigate them.



## Damage Types

*TL;DR - Knowing whether an attack deals physical, magic, or darkness damage will help inform your decisions on how to mitigate that attack. Damage types can be seen using ACT or FFLogs.*


Damage types are difficult to see, but can be relevant to us (damage types can be readily identified in ACT and FFLogs, but observing it in the heat of battle is impractical at best). Primarily, there’s physical damage and magic damage. The distinction between the two is relevant for varied physical and magic defense between jobs, and for some abilities that only reduce physical or magic damage, like Feint and Addle.

However, there also exists a third type of damage, typically referred to as darkness damage. This damage is not reduced by your physical or magic defense, and it is not reduced by stat debuffs such as the *old* Feint or Addle, which reduced STR/DEX and INT/MND, respectively. (Players do not currently have access to any kind of stat reduction debuffs.) Only percent reductions like Reprisal, Dismantle, Passage of Arms, Sacred Soil, and Collective Unconscious work on darkness damage.

There’s *also* another type of damage which has shown up a few times: HP removal. The examples that come to mind are Folio in O3S (deals exactly 55% of your max HP) and critical HP mechanics like Charybdis and Hell Wind (reduces HP to 1), but there have been plenty more since then. These are unaffected by any buffs or debuffs, and this damage goes through shields (ignores, bypasses shields, leaving the shield still on even though you take damage).

In ACT, viewing an attack under Incoming Damage or Outgoing Damage should display its damage type as Magic, Piercing, Slashing, or Blunt. It will also sometimes display the elemental aspect of damage, but this is rarely relevant (just in the case of mechanics that involve a buff or debuff relating to an element, and these mechanics are self explanatory, so there’s not really a need to look it up). Both physical and magical damage can have an elemental aspect.


In FFLogs, the names of all attacks are color coded; Physical damage is orange. Magical damage is blue. Darkness damage is purple. There is also another color for special cases where ACT/FFLogs is unable to read the damage type data from the skill. To my knowledge, this is only the case with incoming DoTs, because they do not technically *have* a damage type due to the roundabout way they’re coded. Incoming DoT effects are still mitigated by mitigating the initial hit, however, and since they snapshot buffs and debuffs just like everything else, they usually *function* as though they were the same damage type as the attack that applied the DoT for the purposes of mitigation.

DoTs are basically spaghetti code in this game, so there’s plenty of potential for weird interactions when it comes to incoming DoTs and mitigation. We may never perfectly understand the way they function, so don’t be too surprised if certain instances don’t align with expectations.

# Healing Practices

Here, I wanted to mention several key practices for healing, good habits to build, and general gameplay tips to form the foundation that applies to healing universally.

## Always. Be. Casting.

***TL;DR - Always be doing something. Always be contributing. Don’t just stand there. This is probably the single most important concept in the entire game.***


This right here is the single most important rule. You should always be doing something. When you *need* to heal, you should be healing, and when you don’t, you should be doing damage. Any amount of time you spend not casting something useful is lost value, even if it’s just a fraction of a second of delay between your casts while you think, or a delay because you’re not skill queueing properly. Those delays add up fast. Either it’s lost damage, which is bad, or it’s lost healing. Even if that healing isn’t the most efficient thing to do, even if it’s not entirely necessary, it’s better than doing nothing as long as you’re actually restoring someone’s missing HP. At least if you’re healing unnecessarily instead of sitting on your hands, you’re potentially enabling your cohealer to DPS more, even if it’s not the best use of your time.

Nobody would stand for it if the tank just spammed Flash until he had threat on all the enemies and then took his hands off the keyboard until someone was about to rip threat off of him. Nobody would stand for a DPS just not hitting the enemies, just absentmindedly dodging attacks without contributing anything. It’s not any different for us just because our icons are green.

## Being Prepared

*TL;DR - As a healer, you need to familiarize yourself with the fight most of all. It’s important to be prepared for damage ahead of time so you’re never caught off guard and scrambling to catch up.*


As healers, we’re very directly responsible for the survival of the party and the success of the duty. As discussed earlier, it’s important for us to be familiar with the fight in order to do what the fight requires from us to keep the party alive. Healers can very easily become the limiting factor on a group’s rate of progression or the group’s success as a whole. Healer deaths are much more difficult to recover from, and healer mistakes can easily result in deaths or wipes. That’s why it’s even more important for healers to know the fight inside and out. If we forget about a mechanic, or we forget to prepare the party for raid damage, or we forget to prepare the tank for a tank buster, everything is likely to go downhill very quickly.

## Triage

*TL;DR - Being prepared for upcoming damage and understanding the immediate requirements for survival will allow you to prioritize your heals efficiently. It’s never as simple as “who’s the lowest HP?” You have to choose who to heal based on the threat at hand.*


Triage refers to assigning a degree of urgency to several problems being presented at once. It’s important to keep a level head so that you can address these problems in the correct order. We’ve already touched on this a couple times, but it’s a concept that bears stating explicitly. Depending on what’s going on, you’ll have a different priority system for who needs to be healed the most urgently. In its simplest form, you have to prioritize the survival of the most crucial party members. Usually, that’s yourself, followed by the tank, followed by everyone else. Some circumstances may dictate that the survival of a DPS is momentarily more vital to the success of the party than your own survival or that of the tank, like a long enrage cast where the boss isn’t doing damage and you need to meet the DPS check. Maybe you’ll prioritize the other healer’s survival because they have far more MP than you right now, and if they live, they’re more able to stabilize the party and recover than you are.

To take it a step farther, you have to consider not only the importance of each party member’s survival, but what is happening in the fight, and what is *about* to happen. For instance, in O1S, the boss reduces everyone to 1 HP by casting Charybdis. Then, he follows up with either raid damage or a split tank buster. It always happens at the same points in the fight, in the same order. Knowing what he’s going to do next allows you to address the most immediate concern. If he’s going to do raid damage, you need to be AoE healing and/or mitigating. If he’s going to do the split tank buster, you can safely leave the rest of the party at 1 HP until after you’ve healed up both tanks for the buster.

To bring up regens again, if you know you have time for regens to heal the party before you take more raid damage, you should be using regens because they’re more efficient. Efficient use of regens is a huge factor in efficient healing, and it relies on your ability to assess the current situation and your knowledge of when damage is going to happen in a fight to determine when the party doesn’t need to be healed up immediately.



## Choosing the Right Tool for the Job

*TL;DR - Just like you have to choose who to heal based on the threat at hand, you have to choose the best heal to respond to a given threat. Consider where you specifically need burst healing or instant healing, and when you can rely on regens.*


As a healer, you have a variety of spells and abilities that make up your healing toolkit. It’s important to be able to identify the best tool for your current situation. The best tool depends on the urgency of the healing, as well as several things we’ll expand upon later, such as MP efficiency, GCD efficiency, and opportunity cost. You want to consider these factors when deciding what spells and abilities to use for any given situation.

As a general rule, you want to prioritize using oGCD abilities first, because they don’t take an entire GCD and they cost no MP, making them by far the most efficient part of your kit. In addition to that, you want to prioritize using HoTs over upfront heals, because they are far more GCD and MP efficient. And lastly, you want to only use upfront GCD heals whenever they’re absolutely necessary, because they are both the simplest and the least efficient tools in your kit.

Of course, there are times when the healing has to be immediate, so HoTs won’t cut it. There are times when you specifically need an instant heal for a mechanic, because maybe you’re moving, or maybe you can’t heal until the last second because the fight forces everyone to be spread out, so maybe it’s more efficient to hold one of your oGCDs for that. It’s important to understand and recognize these scenarios and adapt to the situation at hand.

## Healing Preemptively

*TL;DR - There’s no such thing as a reactive healer. If you’re ever reacting to damage, you’re already behind on responding to it. Try to know ahead of time when damage is happening and how you’re going to respond to it.*


It’s commonly said that shield healers (SCH and Noct AST) are preemptive healers, while non-shield healers (WHM and Diurnal AST) are reactive. This is a very misleading way of wording it, because you should never be healing reactively. It’s true, in a way, that they are “reactive” in that you can’t heal damage until it’s been done, but you shouldn’t be reacting to the damage in the traditional sense. You should already know the damage is coming ahead of time. When, from where, how much, and what kind. Outside of progression, you should never be caught by surprise and have to react to scripted damage. And even in progression, one of the most important things for you to do is learn to predict the damage.
All damage is predictable, including people getting hit by things they shouldn’t. Getting familiar with a fight isn’t just memorizing the scripted damage. It’s also understanding everything else that’s going on so that you can be prepared to a degree for various ways things could go wrong, finding a balance between preventing those possibilities to whatever degree is reasonable, and being prepared to quickly address various problems, should they arise. Your contingencies have contingencies.

If you wait until after damage has happened to even start addressing it, you’re going to suffer through a lot of wipes that you could have prevented. **Precast** your heals to land just after damage occurs to minimize the amount of time people spend at low HP, and thus the risk of them dying to any additional damage. Especially the tank, since he can take auto attacks during and immediately after hard hitting attacks. This game’s healing isn’t whack-a-mole. It’s not just filling people’s HP bars after they take damage. **Healing in FFXIV is about preparing your party for what is about to happen.** The party doesn’t always have to be full HP. If the party has full HP for the vast majority of the fight, you’re probably not getting as much value out of regens as you could be, which means you’re overusing less efficient heals and spending more MP and GCDs on healing than you need to.

Your job is not to keep everyone’s HP at or near 100%, it’s to get the party through the fight. Sometimes, that means everyone needs to be topped off. Most of the time, it doesn’t. If you’ll excuse another shitty metaphor, healing is a lot like a strategy game. Risk, for example. In Risk, you bolster your defenses in key strategic locations that can be attacked and require defending. You don’t amass an army and keep them all in a territory that can’t even be attacked. You’d just be wasting resources doing nothing. You also wouldn’t want to wait until someone starts attacking you to even begin defending yourself. In Risk, you set up your defenses in preparation for what is going to happen. You’re setting yourself up to weather whatever the other players may throw at you.

Similarly, in FFXIV, you are setting your party up to survive whatever is going to happen next. You are putting your party in a position to succeed, not wasting resources trying to keep every single territory equally defended at all times. If you spread yourself too thin that way, at best, you’re being inefficient and costing your party DPS. At worst, your defenses will buckle and you’ll wipe because you didn’t have enough resources available for the key points the boss is attacking.

## Proper Usage of Lucid Dreaming

*TL;DR - Use Lucid Dreaming as early as possible without it overflowing your MP. Lucid Dreaming will restore 35% of your max MP over 21 seconds, but because you are constantly spending MP, you should use it long before you are missing 35% of your MP.*


Lucid Dreaming gets its own special section because it’s an exceptionally important skill. It is your primary tool for MP management, and it is vital to your success. Lucid Dreaming restores 500 MP per tick, and ticks 7 times in its 21s duration, for a total of 3,500 MP. That’s 35% of your max MP every minute. It’s very important that you understand how to use this efficiently so that you can maximize your available resources.

Here’s the thing: Lucid Dreaming restores a big chunk of your max MP, but it does so over 21 seconds, not all at once. You don’t need to wait until you’re missing 35% of your MP before you use it. Depending on what’s going on in the fight and what you’re casting, you could use it when you’re missing 20%, or even less in some cases. While Lucid Dreaming is restoring your MP, you’re still spending it.

You should have time for around 8 GCDs over the duration of Lucid Dreaming, so for instance, a WHM casting Glare will spend 400 MP every ~2.5s, while Lucid Dreaming restores 500 MP every 3s. During that time, they cast 8 Glares and get 7 ticks of Lucid Dreaming, for a net gain of 300 MP before natural regen. They could have used Lucid Dreaming when they were missing more like 2k MP (to account for natural MP regen) and not wasted any MP regen whatsoever. Factor in casting any expensive AoE heals in that time, and they could have theoretically used it even earlier.

Because healers are generally MP-negative (we spend far more MP than we can generate on our own), our MP tends to significantly deplete between each usage of Lucid Dreaming, and then Lucid Dreaming pulls us back up. We almost always use Lucid Dreaming as soon as it’s available (the exception being extraneous circumstances like extended downtime, a fight mechanic that restores MP, etc).

For this reason, you want to use Lucid Dreaming as early in the fight as possible without overflowing your MP, so that it comes back up earlier. Don’t hold it until you’re missing the entire amount of MP it restores, and definitely don’t hold it until you’re super low on MP. It’s not an emergency tool. It’s a maintenance tool.


*It’s not a 401k. You’re not going to retire on it, it’s not accruing interest. It’s more like money on a conveyor belt being dumped into an active volcano. Take it while you can or you’re never going to see it again.*


--- 

# Maximizing Efficiency

Healing efficiency can be summarized as *contributing as much to the party as you can.* This boils down to ensuring the safety of the party as efficiently as possible, in order to give yourself as much room as you can to contribute other things to the party. Namely damage. It seems counterintuitive, but the name of the game is finding how to do the bare minimum amount of healing required for the safety of the party in order to spend as much time as possible contributing damage.

## The “Cost” of an Action

*TL;DR - All actions have an opportunity cost. A healing GCD could have been a damaging GCD. An Energy Drain could have been a GCD-saving heal + a higher potency damaging GCD in its place. Understanding efficiency involves weighing the value of an action against its opportunity cost.*


Every action has a cost. MP is the most obvious cost. But things get much more interesting when you consider the other costs of an action. They also have a time cost. In the case of a GCD, the time cost is equal to the GCD length. In the case of an oGCD, the time cost is the animation lock, which can cause clipping. And even for oGCDs, there is yet another cost. An opportunity cost. **Opportunity cost** is a way to say that taking a certain action costs you a certain opportunity. It shuts some doors to potential courses of action that are mutually exclusive with the action in question. You can’t eat your cake and have it, too.

If you use Benediction right now, the opportunity cost is that you won’t be able to use it for several minutes while it’s on cooldown. The actual value of that opportunity depends on the context. Maybe you want to use Benediction right now, but that means it won’t be available to heal the DRK’s Living Dead in 2 minutes when he uses it for a tank buster, so you’ll have to devote several GCDs to healing it up manually. That’s a significant opportunity cost, so you’d better have a very good reason for using Benediction right now, like saving someone’s life.

SCH’s Aetherflow mechanic is also an excellent example of opportunity cost, because Aetherflow stacks have an inherent opportunity cost. If you use one stack on Energy Drain, it has an opportunity cost of one potential Aetherflow ability. That Energy Drain could have been an Indomitability or Sacred Soil at best, or simply a Lustrate at worst. But even Lustrate has a higher value than an Energy Drain (Lustrate + Broil III is better than Adlo + Energy Drain if you’re going to have to heal), so this opportunity cost is something that SCHs have to be very aware of.

## GCD Efficiency

*TL;DR - GCDs are your most valuable resource for doing damage. Try to only use healing GCDs when you absolutely have to. Prioritize your oGCDs, then your most efficient GCDs like HoTs, and resort to upfront GCD heals like Cure II/Medica when you’re out of better options.*


GCD efficiency is an important metric, because the best way to get more damage is to spend more GCDs dealing damage. This means you need to spend fewer GCDs on healing in order to free up GCDs for damage. As discussed earlier, oGCDs are obviously the most GCD efficient because they’re not even on the GCD. They’re as free as it gets. Use and abuse them. Looking at GCDs, HoTs are allowed to be more GCD efficient because they’re not immediate. Then we have upfront GCDs. Cure II is more GCD efficient than Cure. Cure III is more GCD efficient than Medica. When possible, use the most efficient tools before you resort to less efficient tools.

Of course, there are circumstances that alter the importance of GCD efficiency. When the boss is untargetable, the value of GCD efficiency during that time changes. You don’t have to worry about freeing up GCDs to DPS while the boss is untargetable, so your GCD efficiency only matters in relation to the task at hand. For instance, the boss may be untargetable while several instances of raid damage happen. Even though you have instant oGCD heals available, you’re not actually getting the proper value out of them by using them while the boss is untargetable.

The biggest reason oGCDs are so efficient is because they prevent you from having to use a GCD heal, which allows you to spend that GCD doing damage. You’re currently unable to do damage to the boss, so using that oGCD heal is much less valuable. You would be better off covering the healing with GCD heals because you’re currently not punished for using GCD heals, since you’re not losing DPS by doing so. That way, you have the oGCD heals available when the boss is targetable, so that you can use them to save GCDs when it actually matters. In this example, the opportunity cost of having those oGCDs on cooldown outweighs the diminished benefit you would get from using them when saving GCDs doesn’t matter.

## MP Efficiency

*TL;DR - Properly utilizing your most efficient tools like oGCDs and regens will improve your MP longevity significantly.*


MP efficiency is quite simple. oGCDs are free, which means they save you quite a bit of MP by replacing their costly GCD counterparts. Utilizing free oGCDs is a vital part of managing your MP. This is part of why some of SCH’s MP costs are higher than the other healers’. Much of SCH’s power budget is packed into its oGCDs and the fairy. In order for it to not be an issue that some of SCH’s MP costs are slightly higher, a SCH needs to properly leverage the core of their kit. SCH has some higher MP costs, but they need to cast far fewer GCD heals.

Regens are very MP efficient. Cure III is more MP efficient and more potent than Medica, and your basic tier one heal (Cure, Benefic, Physick) is more MP efficient than your tier two heal (Cure II, Benefic II, Adloquium), but less GCD efficient. MP management is not nearly as big of an issue as it used to be, especially if you properly utilize oGCDs, but there are still times that you’ll have to pay attention to your MP. GCD efficiency is almost always more important than MP efficiency, except sometimes during downtime (when you can’t hit the boss), and when you’re in serious danger of running out of MP.

## Making the Most of Your Kit

*TL;DR - Pay attention to every tool in your kit, and understand their uses. Leveraging every available asset is essential for maximizing your contribution to the party. Don’t just ignore half of your kit, and don’t let free cooldowns sit unused if you can get value out of them.*


Your kit has an awful lot of buttons, and I promise you that nearly all of them have a use (not Repose though, don’t know why this still exists… Eureka I guess). There’s a ton of value spread around through all your different tools, and playing efficiently means wringing every last drop of value out of your entire kit. Can you get through a duty casting nothing but Cure II, Regen, and Medica? Probably. But the rest of your kit has so much value that will allow you to contribute more to your group.

Don’t sit on your abilities. Make use of them. Don’t hold Tetragrammaton, Assize, etc. “just in case.” These abilities are on fairly short cooldowns, and you should abuse all that free value. As a SCH, don’t sit on your Aetherflow stacks. Aetherflow should always be on cooldown. You get 3 stacks every minute. You can save them for a little while, but they’d better all be spent by the time Aetherflow comes back up. As an AST, don’t sit on Essential Dignity. It’s very powerful, with a very short cooldown, and it will save you loads of GCDs when you use it frequently. Damage in this game isn’t so unpredictable that you need to always have it available “just in case.”

Particularly with oGCDs, most of those abilities have only the opportunity cost of putting them on cooldown, and if you’re just holding them “just in case” to begin with, that opportunity cost is irrelevant because you weren’t using it most of the time in the first place. Default to using these abilities as much as possible, and then if you run into a situation where you realize that you need it more somewhere else, you can go from there. But don’t just let them sit there, untouched.

# Working With Your Cohealer
### It’s a group effort

*TL;DR - The main heal/off heal mentality is incredibly inefficient and you’ll both contribute more to the party if you learn to work together, leveraging the strongest parts of both kits.*


Before I delve into this topic, let’s clear something up. There is no such thing as a “main healer” or “off healer.” There are *two cohealers*. You work together to leverage the best parts of both of your kits in order to maximize your combined contribution to the party. One healer should not be defaulting to healing, and one healer should not be defaulting to DPSing. *Both* healers should be defaulting to using their most efficient tools in conjunction with one another in order to minimize the amount that *either* healer has to fall back on less efficient tools like upfront GCD heals.

Yes, every fight can be solo healed by any of the 3 healers while the other one strictly DPSes. But the solo healer is going to have a *lot* of gaps to fill in between their efficient tools, and without the cooperation of a cohealer, they’re going to have to fill those gaps with the least efficient parts of their kit, instead of filling them with the most efficient parts of the cohealer’s kit.

Disclaimer: Yes, I know some people just use “main healer” and “off healer” to refer to “regen healer” and “shield healer.” But, as I said earlier, this is a false dichotomy. You don’t have to have one of each, and it’s a huge misconception that you do. It encourages a narrow minded, unadaptive mindset. The actual main heal/off heal mentality is alive and well in some dark corners of the game, and the phrasing isn’t doing the community any favors. It’s archaic, and it hasn’t been true since ARR. Do the community a favor and delete these words from your vocabulary.



## You Have One Combined Healing Kit

*TL;DR - It’s important to understand how your heals stack up to each other so that you can choose the most efficient tool for the job from your combined healing kit. This can save you a lot of GCDs overall and significantly improve your contribution.*


So far, I’ve made several comparisons of spells and abilities within each healer’s individual kit. However, in a raid, there are two healers. So you have to consider not only what’s efficient for you, but also what’s efficient for your cohealer, and how the efficiency of your various tools compares to each other. For instance, Tetragrammaton and Essential Dignity are more efficient than Lustrate/Excogitation, because those cost an Aetherflow stack. Once you have already used Tetragrammaton or Essential Dignity, if you need more healing, you should prioritize using the SCH’s Aetherflow abilities before resorting to GCD heals.

If you need to use a GCD heal because you’ve exhausted your oGCDs and your regens are already up, Benefic II and Cure II are slightly more potent than Adloquium.

If you need to do ~500 potency of AoE healing and you don’t have oGCDs to do it, it’s much better for the WHM to cast Medica II or Cure III and cover it in a single GCD than it is for both healers to cast Medica/Helios/Succor/Aspected Helios and spend 2 GCDs in total, so the WHM should cover it if possible.

## You Have One Combined Damage Kit

*TL;DR - You also have to consider how the opportunity cost of a GCD compares between you and your cohealer so you understand whose damage GCD is more valuable when both healers have equally efficient responses to damage.*


This concept extends to dealing damage, as well. When resorting to GCD heals, you also have to factor in the opportunity cost of that GCD. For instance, Cure II might be more potent than Adloquium, but a WHM loses out on more damage by casting a heal than a SCH does. WHM’s filler is 300 potency, SCH’s is 290, and AST’s is 250. It may not seem like a big difference, but I’m sure you’re noticing a pattern: *it adds up.* If both healers could sufficiently cover the healing in the same amount of GCDs, you’re better off having the healer with the lower potency DPS filler do the healing.

The same goes for SCH’s Aetherflow. The opportunity cost of using an Aetherflow stack on a heal is a 150 potency Energy Drain, so it’s a much lower opportunity cost than any GCD heal, but if the healing can be covered by non-Aetherflow oGCDs, you should usually do so.

--- 

# Healing Mentality

### Context is everything

*TL;DR - All this knowledge is great, but you have to know how to apply it based on the context in which you’re playing.*


These concepts are all well and good, but healing is about balance and flexibility as much as it is about efficiency and optimization. The way we approach healing and the way we apply these concepts depend on the context of the group and the content, just like our heals depend on what the fight is throwing at us. At the end of the day, as much as we do want to optimize and play efficiently, our primary function is getting the party through the encounter. That requires varying degrees of safety and margins for error. If you play like you’re in a coordinated speedkill group while you’re in a random PF group, you’re going to be disappointed, and you probably won’t even be playing very well in the context of that group.

## Progression

*TL;DR - When you’re unable to predict where damage is going to happen, you have to play much more conservatively in order to be prepared to cover damage as it happens, allowing your group to see more of the fight. Focus on familiarizing yourself with the fight so that you can recognize the windows you have for DPS to contribute as much as you can to the party.*


In a way, there are two types of progression. The first type is blind progression. This is when the content is very new, and there isn’t much readily available information about the fights, or if your group is explicitly doing blind progression for fun/challenge. There’s no way for you to know what’s going to happen next, so you need to play much more cautiously when you’re seeing things for the first time and have no way to specifically prepare for them. There are still opportunities to DPS, but you’ll be much more conservative about doing so. You’ll use your game sense to anticipate when it seems like something *should* be happening soon, but aside from that, you just need to be ready to respond to the best of your ability to a wide variety of events.

When the fight is no longer new, when you can research the encounter and familiarize yourself with what’s going to happen, and when you’re in parts of the fight you’ve seen before but maybe haven’t executed correctly, this is simply normal progression. You’ll be constantly optimizing and planning, because you’re familiar with parts you’ve seen before, and you can be prepared for parts you haven’t gotten to, because you’ve done your research.



You don’t have to be nearly as conservative with your play, but you may still want to leave a little more room for error, since everyone will be much more prone to making mistakes, which you will have to fix. You don’t want to heal unnecessarily, but you don’t want to play it risky, either. You might want the party topped off before certain avoidable damage if they can survive it with full HP. Even though they’re not supposed to get hit by it, they still might, and if you can prevent that death by playing it a little safe, it’s often worth it to do so while you’re still progressing.

## Farm

*TL;DR - It’s not your job to hold everyone’s hand anymore. You’re not expecting everyone to make silly mistakes all the time that you’ll have to cover for, nor should you be. If someone makes a mistake, then address it, but you typically shouldn’t need to play ultra safe (unless your group is ultra special). Be efficient within reason, but don’t be scared.*


If a group can clear the content reliably, and has the fight “on farm,” you shouldn’t need to play too cautiously. You don’t need to keep everyone at full HP all the time “just in case they mess up,” because they really shouldn’t be messing up, and even if they do, the rest of the group should be solid enough that it doesn’t snowball into a wipe after a single random death. In this type of group, everyone should be performing to a reasonable standard, so you shouldn’t need to hold their hands. If they do need you to play ultra conservatively and hold their hands in order to clear the fight, I’m afraid that means you’re not in a farm party, but a carry party.

This is the setting where most of the optimization and efficiency concerns truly become relevant. We’re not making exceptions due to people’s unfamiliarity with the fight, and we’re not coddling anyone. We’re trying to play as efficiently as we can, within reason.

## Speedkill

*TL;DR - This is where you test the limits. You play somewhat risky to see exactly what you can get away with. This is not representative of most groups or most play.*


This is where the hardcore optimization happens. This type of party is where you truly test the boundaries of playing efficiently “within reason.” This is where you find out exactly how little healing you can get away with. This is where you probably wipe a lot to testing the bare minimum healing required. If farm parties are where you play efficiently within reason, speedkill parties are where you play downright risky. Because it doesn’t really matter how many times you fail. You only have to succeed once.

I encourage people who are skeptical of how little healing is actually required to examine speedkill logs and videos. Many of the fastest kills on FFLogs for any given fight will have a single digit number of GCD heals cast between both healers combined, sometimes even zero on low damage fights. These parties are where you push everything to their absolute limits. Razor thin HP margins, zero room for mistakes.

--- 

# An Overview of Stats

*TL;DR - Secondaries make a **really** small difference for healers compared to how drastically even small changes in your play can affect your output. Don’t sweat them too much if you’re not into it or if you just have a personal preference for one stat. It barely matters at all.*


To preface this section, I’d like to explain that secondary stats on healers make such a small difference in your overall output that you would have to intentionally choose the worst possible secondary stat spread in order to measure a significant difference when compared to a well thought out **BiS** (**B**est **i**n **S**lot). We’re talking a few percent difference at most, assuming similar amounts of piety between sets. A small enough difference that it’s massively eclipsed by much more important areas for optimization, namely playing better.

If you would like to directly compare gearsets and gear swaps, the Relative Damage Calculator spreadsheets can be used to make direct comparisons of your expected output with different stats (these are the main sheets used for healers on The Balance, and they’re updated every patch):

- AST
- WHM
- SCH
<!-- TODO: link proper guides later! -->

## Magic Damage and Main Stat

*TL;DR - Your weapon and main stat are, like, really important. Sometimes, gaining a large amount of secondaries can make a lower ilvl piece better than a higher ilvl piece with very poor secondaries (usually excess piety).*


The absolute most important factors for your output as a healer are the Magic Damage on your weapon, and your main stat, Mind (MND). Magic Damage far outweighs MND, and MND outweighs secondaries. This means that the weapon upgrade almost always outweighs any other upgrade, unless it’s a small jump in ilvl on the weapon compared to a very large jump in ilvl on another large piece like the chest or pants. It’s also possible that a lower ilvl weapon could potentially be better than a higher ilvl weapon with 1 more Magic Damage, if the lower ilvl weapon in question did not have piety, and the higher ilvl weapon did have piety. If you were looking to drop piety and couldn’t drop it from any other piece of gear, it might theoretically be worth using the lower ilvl weapon.

Similarly, though MND is worth many times more than any secondary stat, large sums of secondaries can make up for this if you are using a lower ilvl piece of gear that does not have piety, compared to a higher ilvl piece of gear that does have unwanted piety, and/or if you are using a pentamelded crafted accessory.

## Piety

*TL;DR - This is a moving target. You need enough to get through the fight safely, but anything extra does nothing for you. Dropping unnecessary piety to gain other secondaries has a much larger effect than basically any other change you can make with your secondaries.*


Piety is the role stat for healers. Base MP regen 200 per tick (every 3 seconds). Every ~22 points of piety (beyond the base piety) increases our natural MP regen by 1 per tick. Over the course of a fight, ~220 additional piety works out to 200 extra MP per minute, or an extra damage spell every 2 minutes. It’s really not impressive or exciting, but it’s a necessity.

Piety is arguably the single most important stat for healers, because you can’t do your job at all if you run out of MP. Raises, extra GCD heals for safety during progression, and even just high DPS uptime can tax your MP quite a bit. It’s absolutely critical that you have enough piety to perform your job and maintain uptime, and that piety threshold is going to vary wildly based on your job, your group, and what fight you’re doing. It’s a moving target, which makes it impossible to give it a simple answer. As of Patch 5.4, all three healers can function on similar amounts of piety, and the amount that is required is fairly low outside of progression.

The thing about piety is that if you have too little, your performance will suffer massively, and if you have too much, you’re wasting all those stats on piety when you could have more of a stat that will increase your throughput. The more accident prone a group is, the larger MP cushion you probably want for Raises. Even more so if you don’t have a SMN or RDM to cover some of the raises.

Suffice it to say, if you’re maintaining your uptime properly and you’re still finding yourself never getting low on MP, you have more piety than you need, and you could increase your throughput by changing some of your gear out to have less piety and more crit/det/spell speed. Gaining those stats by cutting excess piety will have a much larger effect on your throughput than changing between crit/det/spell speed/direct hit.



## Relative Value

*TL;DR - the actual value of a stat changes based on all your current stats, and this is an important concept to consider when choosing how you prioritize your stats.*


Relative value is a concept that I need to explain in order for any of the nitty gritty details of secondaries to make sense. It’s a concept that’s often overlooked and widely misunderstood, and it’s absolutely integral to how we think of secondary stats. When we talk about the value of secondary stats, we are usually referencing their relative value. That refers to their effect on your output relative to current output with your current stat totals, or as a comparison to other stats you could have in place of the stat in question.


> *If you’re interested in the math behind the explanations and assertions that I’m going to make in the next few sections about substats, the rest of this section is for you. If numbers don’t get your rocks off, feel free to skip ahead to the next section.*


To examine these relative values and compare them to one another, we can convert each stat into an expected value, which is a representation of the percent increase a certain amount of a stat should give us. The formula we use is as follows:

> 1 + (chance * multiplier) = expected value

Using this formula, we can assign expected values to any stat simply by plugging in the numbers from the [stat tier page](https://www.akhmorning.com/allagan-studies/stats/) (yes I’m plugging it again, it’s important, dammit). In fact, the page already does this for us, but I’ll demonstrate it here for the sake of explanation.

Determination’s expected value simplifies to 1 + x, where x = the percentage increase of your current determination tier, expressed as a decimal. For every tier, you gain .001.

Direct hit’s expected value can be expressed as 1 + (x * .25), where x = your chance to direct hit at your current tier, and .25 is the DH multiplier.

Crit’s expected value can be expressed as 1 + (x * y), where x = your crit chance, and y = your crit multiplier. It’s also important to note that you have a base crit chance and multiplier, unlike with other stats.

As you can see, det and DH have one scaling variable. Crit, on the other hand, has two variables that increase simultaneously as you go up in tiers, which is why it scales harder past certain values, even though it starts at a lower point on the graph, so to speak. It just needs some numbers pumped into it in order to really get going.

Now, we can use these *expected values* to get a clearer picture of relative values by comparing the expected value of the next tier to the total expected value of the previous tier, and adjusting that for how many points it took to reach that tier to find a point-for-point representation of the relative value of a stat *at a given stat total.*

Using determination as an example for simplicity’s sake, if determination tiers are 26 points apart (they’re not exactly, but this will suffice for the demonstration), 26 bonus determination beyond your base amount is worth .001 / 26 =  .0000385 per point. The previous tier is simply 1 (no bonus det), so the relative value is equal to the expected value when we compare it to the previous tier. As we go up in tiers, the relative value per point will diminish as we compare the expected value of one tier to the previous.

If you had 1524 bonus det, your expected value for that tier would be 1.06. We’ve already calculated that the expected value per point is .0000385. But now we have to compare this to our current output, which is the expected value of the tier we’re already at. This is .0000385 / 1.06 = .0000363 per point. The relative value has diminished somewhat significantly.

To give a more straightforward example, if you’re doing 1,000 DPS with no determination from gear or food, and you add ~260 determination, that’s a 1% increase, which is a 10 DPS gain. Purely for demonstration, let’s say you have so much determination that you’re doing double your base DPS, so you’re doing 2,000 DPS. Adding another ~260 determination is still a “1%” increase (expected value), but it’s 1% of your base damage, which means it’s still +10 DPS, which is only a 0.5% increase relative to your current output (relative value).

We apply this method to find a relative point value of each stat at each tier, and then compare the relative values of each stat to each other to determine their efficacy at a given amount in relation to one another.

## Critical Hit
*TL;DR - Crit scales better than det and DH in large amounts, increases the mileage you get from crit buffs like Battle Litany, Chain Stratagem, and BRD songs, and crit heals can free up healing GCDs to be spent on damage. To get the most of it, you should stack as much as you can to take advantage of the way it scales.*


Crit scales both crit chance and crit multiplier. Because of this, it scales quadratically, which is essentially to say that every point of crit is worth more than the last. It scales better the more you have. Crit starts outperforming other stats quite significantly when you stack large enough amounts of it. The threshold where the relative value of crit surpasses an equal amount of det is fairly low, because det has linear scaling, and its relative value per point therefore decreases as you get more of it.

Because crit scales this way, it’s a good idea to stack as much of it as possible. If you don’t get enough of it, crit isn’t doing much for you compared to other stats, so the common approach is to go all in on crit to take advantage of its excellent scaling. In addition to having excellent throughput scaling on its own, crit has excellent synergy with raid buffs that increase crit rate, like Battle Litany and Chain Stratagem. If you have more crit, your crit multiplier will be higher, which increases the value of those buffs even further.

Another consideration is that crit affects everything you do unconditionally, and it also has the benefit of interacting with our healing in a way that other stats don’t. Quite simply, crit heals have a lot of potential to free up more GCDs for DPS. Crit regen ticks will help maintain the tank’s HP passively just like det or spell speed might, and critting something like Tetragrammaton, Essential Dignity, Excogitation, or Lustrate (or even an Adlo) can immediately free up additional time for you and your cohealer to DPS.

Some people will argue that crit heals will just result in overhealing and won’t be useful, but that shouldn’t be the case the vast majority of the time, because your tank will likely be missing more HP than a crit heal. Unless you’re topping him off for an upcoming tankbuster, you should usually be aiming for your heal to put the tank at around 80% HP, so as not to waste any ticks on the regen that he has, or waste the healing if you crit. If the tank is missing so little HP that a crit heal would go to waste, you likely shouldn’t be healing him right now.

Crit heals are just a bonus in the first place, because you don’t plan your heals around crits. Worst case scenario, the heal crits and overheals and has no effect beyond exactly what you planned on it doing.

## Determination

*TL;DR - Det is a simple 0.1% increase to everything every ~26 points. Its relative value decreases as you get more of it, so it’s not advised as a primary focus, but it makes a good stat to fill in gear where you can’t get more crit.*


Determination is quite simple. It increases all your healing and damage. It has linear scaling, so it’s not as good as other stats in large amounts. It’s another unconditional bonus that affects everything you do, but without the RNG aspect of crit. Because it’s reliable and unconditional, it’s still an attractive stat to focus on wherever you can’t get any more crit. It’s good to meld when a piece of gear is already capped on crit, and it’s a decent stat to take on a piece of gear if there’s no crit option for that gear slot.

## Spell Speed

*TL;DR - Spell speed looks good on paper, but the gains can be difficult to replicate in real fights, and it comes at the cost of increased MP consumption. The relative value also scales better the more you have like crit, but it’s not generally recommended as a primary focus due to its conditional nature and increased MP consumption, resulting in a “piety tax.”*


Spell speed reduces your GCD timer and scales your DoT and HoT effects. Its scaling improves the more you stack, like crit, because the actual numerical scaling is linear. The tiers are the same distance apart, but .01s is a larger portion of your GCD the faster your GCD is, which means it’s a larger relative increase. It’s a reliable increase in that it’s not random, but it is also *unreliable* in that its effect on your throughput is conditional. In order for spell speed to do much, you need to be chaining casts very consistently for extended periods of time. This is all well and good on a training dummy, and in fact, spell speed can sometimes actually outperform crit on a dummy with infinite MP. However, replicating this level of success in a real fight is challenging at best, and downright unrealistic at worst.

Spell speed is sort of all or nothing, unfortunately. Either you gained an entire extra cast compared to a non-spell speed build, or you didn’t get the extra cast, and your spell speed didn’t gain you anything. The more casts you chain consecutively, the more likely you are to have gained a GCD over the non-spell speed build when interrupted, all the way up until you’ve chained enough casts to gain an entire guaranteed GCD. And the larger the spell speed difference between the builds, the fewer casts it will take to build that lead. Fight interruptions can happen at any point during your GCD, so it’s possible for you to gain a GCD even without building a large lead, but it’s entirely dependent on your exact GCD alignment relative to the interruptions of a specific encounter.



It’s theoretically possible to fine tune your exact GCD speed based on each individual fight, taking into account your exact sequence of casts and the exact timing of each interruption, but this is only even remotely possible in the context of a perfect run. Unless you really know what you’re doing, the benefits of spell speed are unlikely to measure up to the benefits of other stats. Suffice it to say, accurately modeling the effects of spell speed in real fights gets very complicated.

There are also a number of other drawbacks to spell speed compared to other secondaries, and it’s quite close to crit on a dummy, so it is generally accepted to be the less optimal choice as a primary focus for healers. Spell speed’s bonus is reliant on chaining casts properly, which means it will do practically nothing for a healer who’s dropping a lot of casts or pausing between casts. You have to play well in this regard for it to do anything. It also increases MP consumption to fuel your extra casts, which can result in you needing more piety at the expense of other stats, while other stats don’t have a cost attached to them.

It’s also commonly said that spell speed lets you get out your heals sooner, but this is largely irrelevant. As stated previously, you shouldn’t be waiting until after damage has happened and then *reacting* to heal it. You should already know the damage is coming and you should be precasting and timing your heals appropriately. The speed of your cast should make no difference unless you’re *reacting* to something, which should not be the case with GCD heals.

So, that’s why we don’t usually focus on spell speed as our highest priority. But, you speed demons will be happy to hear, that’s not the end of the story. When a healing job has an excellent MP economy, spell speed gains another dimension. When MP is tight, spell speed can be a liability because it comes with a “piety tax,” but when you have more than enough MP, it becomes an incredibly attractive option to leverage that excess MP and turn it into a damage gain. That’s why you will sometimes see best in slot lists with quite a lot of spell speed, depending on the job and the patch. If a healer literally has more MP than it knows what to do with, it usually ends up being leveraged to take advantage of the excellent scaling that spell speed offers on paper.

As I said before, the difference between these stats is incredibly small, so don’t feel bad if you prefer spell speed. There’s honest to goodness nothing wrong with that. If you like going fast and you strive to play around your faster GCD to maximize your extra casts, more power to you. **The most important thing about spell speed is to pay attention to your spell speed tier.** [Check the spell speed tiers](https://www.akhmorning.com/allagan-studies/stats/speed/) and try to configure your gear to hit a GCD tier while wasting as few stats as possible. The tiers are very far apart, so it’s easy to waste significant amounts of stats in spell speed if you’re not paying attention to the tiers.

## Direct Hit

*TL;DR - DH doesn’t affect healing, and is an incredibly miniscule gain over det for damage (less than auto attacking on SCH, seriously, it’s miniscule). If you’re going for the top parse on FFLogs or looking to get a lucky run, go for it, but there are a ton of better ways to optimize your damage that don’t come at the cost of healing potency.*


Direct hit increases your chance to score direct hits, which have a flat 25% damage increase. Basically a mini crit. *Heals cannot direct hit.* The multiplier does not scale like crit multiplier does. Because of that, DH’s point for point value relative to other stats decreases as you get more DH.  This means that DH is technically worth more per point when you have less of it. This statement has been propagated and misconstrued into the idea that since healers have no DH on their gear, they should meld DH, because it’s worth the most when you have none.
However, just because it’s worth more when you have smaller amounts, that doesn’t mean it’s worth more than other stats. Stacking crit in particular already outweighs DH even in a vacuum where you only DPS, and crit has the benefit of sometimes saving GCDs through crit heals. Even if you do meld DH, it should still only be melded where you can’t meld crit, from a purely mathematical standpoint.

That leaves us with the comparison of DH to other non-crit filler stats like det. There’s a lot of math involved, but as of Patch 5.4, the difference between melding det and DH can be anywhere from +0.31% DPS for the cost of -1.85% healing, to +0.53% DPS for -3.14% healing, depending on the amount of det/DH swing. That amount of healing won’t realistically change what heals you cast or save you a GCD, but it is still a marginal amount of a safety net for the party’s eHP. It’s not impressive, but it’s not nothing. People live with less than 2-3% of their max HP now and then, and 2-3% healing can be worth even more than that amount of their HP depending on the circumstances, so it can occasionally prevent deaths or wipes by very small margins.

DH is an extremely miniscule damage boost over det (literally less than the occasional SCH auto attack), and 2-3% healing is a small extra safety net that has a chance to prevent a death here and there in your healing career. It’s up to you which one you value more, but DH is far from some kind of god stat for healers.


[For more details on the math behind this, and an exploration of additional DH heavy setups, you can take a look at this reddit post.](https://www.reddit.com/r/ffxiv/comments/7l22nr/only_moon_cats_healers_should_be_melding_direct/)



--- 

# Common Pitfalls

I’d like to dedicate a section to pointing out bad habits, traps that new healers often fall into, and common mistakes to be aware of and avoid.

## Dropping Casts

*TL;DR - You can’t contribute if you’re not doing anything. Press your buttons.*


Standing around not casting something is the single worst mistake you can make. It’s the fastest way to tank your contribution to the party. Any time you’re not casting something useful, you’re bleeding value. Just pissing it away. Don’t do that. Cast something. Standing around casting a Cure II every 30s is not a “playstyle choice,” it’s non-participation. Should be obvious, but you should *play the game.* Press your buttons. Do stuff. Please.

That’s an extreme example, but the principle extends to any time you spend doing nothing without a *very* good reason. Even if you’re just spamming Cure nonstop, that’s at least better than being AFK for 90% of the fight. All that extra healing will at least occasionally have value. A broken clock is right twice a day…

## Unnecessary Healing

*TL;DR - Most people think they need to do way more healing than is actually necessary. Pay attention to that, but especially don’t be the guy who spams nothing but heals all the time.*


A lot of healers are under the mistaken impression that they need to keep everyone at 100% HP all the time. As we’ve discussed thoroughly, this is simply not the case. It doesn’t leave room for you to utilize your most efficient tools like HoTs. When a regen will cover the damage, don’t waste your time casting Medica on top of it. You don’t need to be Curebot Heal’spam, the honest healer with an addiction to casting Cure. Don’t panic, heal what needs to be healed, and don’t overdo it.



## Unnecessary Shielding

*TL;DR - Don’t pre-shield for every bit of damage just because you can. It’s very often inefficient. Ask yourself if you need the shields, and if you’re getting value out of the initial heal as well.*


This is very similar to unnecessary healing, some healers are under the impression that you should pre-shield for everything. Just because you *can*, that doesn’t mean you *should*. Because oGCDs and regens are so powerful compared to shields, it is always better to heal the damage after it’s been done than to shield beforehand (this refers to GCD shields, not free oGCD shields like Divine Veil and Shake it Off).

You don’t need to shield everything, or even most things. The only time you need to shield is to prevent lethal damage, whether it’s a buffer for consecutive hits, or a single big hit. Otherwise, you have more efficient tools between the two healers to heal the damage afterward. When pre-shielding, the party is also likely already at full HP, which means you’re not getting value from the healing portion of Succor or Nocturnal Aspected Helios, making it even less efficient.

## Playing Scared

*TL;DR - Don’t play like you’re constantly in fear of the worst case scenario. There’s no point in worrying that the Earth is going to be spontaneously hit by a massive gamma-ray burst from thousands of light years away and planning your whole life around some minute possibility. Don’t be the healing equivalent of a doomsday prepper.*


There’s a difference between being cautious and playing scared. The former is wisdom, while the latter is cowardice. You don’t usually want to play it fast and loose. You don’t want to gamble with the party’s survival. But you also don’t want to live your entire life in fear of the worst case scenario. You can’t play ultra conservatively all the time just in case some crazy thing comes up. Quite frankly, it’s not your job to be able to fix *everything.*

You want to be prepared for minor mistakes during progression, but there’s a point where you shouldn’t need to limit yourself in order to plan for every little possibility. It’s like refusing to go outside because of the tiny possibility that you could be struck by lightning or hit by a bus. You can’t sacrifice your normal play just so you can be more prepared for that one run once in a blue moon where everything goes tits up. There comes a time when it’s not your job to wipe everyone’s ass anymore.

## Misplacing Blame

*TL;DR - It’s important to examine a lot of contributing factors when you’re trying to determine what went wrong. Learning to identify and recognize when the blame does or doesn’t lie with you can allow you to have both confidence and humility, and can help you tremendously on your path of improvement. Don’t just point fingers at whatever might **seem** obvious.*


Expanding on the last topic, you are not responsible for everyone’s mistakes. A lot of wipes often *look* like a lack of healing, and sometimes that’s genuinely the case. But not always. Say your party needs about 80,000 HP to survive the incoming raid damage, because you’re mitigating it with Reprisal and Addle. You’ve prepared the party for the damage by healing everyone up to just over 80,000 HP, and HoTs are ticking on them to continue topping them off and to heal up the damage afterward. The party dies because someone didn’t use Reprisal or Addle.

A lot of people in this situation will say that the wipe was your fault because you didn’t top the party off, but it was actually the fault of the person who failed to mitigate it like they were supposed to. You held up your end of the bargain, you made sure the party had enough HP to survive the amount of damage they were supposed to take, and you took more damage than you were supposed to, through no fault of your own. You were just doing your job efficiently.

Could you have theoretically prevented this wipe by being psychic and predicting that someone was going to fail to do their job? Sure. Is that a reasonable expectation, and should you hold that against yourself and feel personally at fault? No. There are a lot of situations like this, where you will have to ask yourself if something was your fault. The first thing I ask myself after a wipe is “What could I have done better? Could I have prevented that?” Sometimes, you conclude that there was something you could’ve done differently within reason to safeguard against that problem. But sometimes, you have to understand that you’d have to go too far out of your way for the sake of one possible way things could go wrong among a billion possibilities. You’re a healer, not a miracle worker.

It’s also somewhat common for healers to blame other healers when misinterpreting the situation. A lot of healers will become irritated with their cohealer because they feel like they’re doing all the healing while their cohealer just DPSes. But, there is a strong tendency among less experienced healers to heal very inefficiently, and heal far more than necessary. And if one healer is already healing far more than is necessary, there’s no point in the other healer adding even more healing on top of it. Perhaps the other healer wants to use their most efficient tools like Medica II, or maybe Indomitability. But a healer who’s already taking it upon themselves to spam Medica and Cure II to inefficiently keep the party topped off at all times doesn’t leave any room for an efficient Medica II or Indomitability from the cohealer. A lot of times, when one healer seems to be healing very little compared to the other healer, it’s because they’re trying to be efficient and the other healer isn’t leaving them anything to heal because they’re healing inefficiently.

This is both a warning against being too judgmental and a warning that you may find yourself feeling like you’re not doing any healing if you’re trying to be efficient. Don’t worry. It’s simply the natural conclusion you’ll arrive at if you’re trying not to do unnecessary healing and your cohealer seems to have taped down their Medica hotkey. If you do find yourself annoyed that a cohealer isn’t healing much, I encourage you to consider whether or not you’re leaving them anything to heal.

## Failing to Adapt

*TL;DR - Don’t be too rigid. You might want to play a certain way, but sometimes the success of the party dictates that you just need to bite the bullet and play it safe. It might even require that you play a little riskier because the group needs the extra DPS. Your purpose is to facilitate the success of the party at the end of the day (within reason), even if it’s not always pretty.*


On the other side of the coin, sometimes you need to adapt your play to compensate for things that aren’t your fault. One size does not fit all. Some groups are better or more reliable at mitigation. Some groups can’t even remember that they have mitigation. It’s not efficient, but it’s also not necessarily within your control. And at the end of the day, it’s your job to try to get the party through the encounter. Sometimes, that means playing safer. Maybe it means putting up shields that are usually unnecessary, maybe it means putting on more piety gear to compensate for having to cast a lot of Raises. You’re still a healer, and you should still try your best to perform to the best of your ability in whatever environment you find yourself in. Don’t be *that guy* who just keeps saying “Well, this is how we do it in *my* group and it’s fine!” This isn’t that group. Suck it up. Adaptability is the mark of a great healer.



--- 

# Learning and Improvement

Learning is an ongoing process. It is neverending. If you ever think you have nothing left to learn, you’re wrong, full stop. The game is always changing, and we must grow and change with it. You should never stop learning, because as a healer, there is almost always something you can do better, regardless of your level of play. You can always improve.

## Learning Tools

Advanced Combat Tracker (ACT) is a parser. It reads the information your game client is sending and receiving and spits it all out to you in a way that you can easily read. Most people simply use it to measure DPS, but it contains a huge wealth of information beyond that.

FFLogs is a website to which people can upload ACT logs. FFLogs further organizes the data from ACT and gives you all kinds of freedom and tools to delve into combat logs in a much more user friendly and accessible way. It can be used to easily check all kinds of important information. Basically anything you can think of, you can see it on FFLogs. FFLogs also has DPS and clear time leaderboards, but that’s another matter entirely. The true beauty of FFLogs is in making data accessible. It’s an excellent learning tool. Trying to learn and improve without all this information is like trying to teach yourself to paint without ever looking at the canvas.

## Identifying Areas for Improvement

One of the most helpful things you can do with FFLogs is examine other people’s logs. If you’re uncertain about how to handle a certain part of a fight, you can simply go look at other people’s logs to see how they handled it. Find a good clear with the same healer comp as your group, and look at what they did to get an idea of how you can handle it. This is also great for optimization, because you can compare your own methods to other people’s methods. In that case, you’ll either decide that their method is more efficient and you’ll have a new, more efficient way of doing something, or you’ll decide that you prefer your own method for your group, and you can be more confident that you’re doing the right thing after having considered the alternatives.

Another incredible learning tool is [xivanalysis](https://xivanalysis.com/). When provided with an FFLogs URL, this tool goes through it and attempts to identify mistakes, pointing out things like incorrect oGCD weaving, Aetherflow stack management, cooldown usage, DoT uptime, etc. It’s not perfect, and may never be, but it’s an amazing tool that can instantly give you a lot of information about your play, from big picture mistakes to small optimizations. It’s always undergoing changes and development to make its analysis even more robust, and I highly recommend that you try it out.

--- 

# Interpreting FFLogs Data

### Seriously, context is everything

*TL;DR - If you’re examining healer logs, you’ve really got to dive deep to get the full picture.*


Delving further into your own logs, you can closely examine your own play and potentially identify things you could be doing better. Here, I’ll outline how to properly inspect and interpret logs to identify areas for improvement or potential problems. It might seem like overkill, but healer logs can be very easy to misinterpret, because you have to look at so many different things to see enough of the picture to make a sound judgment.

## Summary

*TL;DR - The Summary tab doesn’t really say anything meaningful on its own. We have to go deeper.*


On the Summary tab, you’ll see a brief, simplified overview of some key information. It’ll display every party member’s damage dealt and healing done, the total damage taken by the group by each ability, and a list of deaths with timestamps. On its own, this page says very little. It’s good for seeing DPS and taking note of any deaths in the run, but the healing metric on its own doesn’t mean much at all.

## Casts

*TL;DR - Check the Casts tab to see if it sets off any alarms that imply the healer might be spending a lot of time doing nothing (sub 20 CPM is definitely a red flag for most fights). Also see if it looks like they’re casting a huge amount of GCD heals or underusing oGCDs. But this still doesn’t tell us everything. **We have to go deeper**.*


On the Casts tab, you’ll find a very important metric. This page displays everyone’s number of casts, active time (as a percentage), and **CPM** (**c**asts **p**er **m**inute). When inspecting someone’s logs, this is usually the first page I check, because standing around not casting is one of the most common and worst offenders when it comes to poor healing performance. A “good” CPM varies by fight and circumstances, but you can compare your CPM to other healers with fast clear times or high DPS rankings to get an idea of what you should be aiming for under ideal circumstances.



Again, this isn’t a hard rule, but it’s something to look at. If there’s a small disparity in CPM, it’s probably nothing worth noting, but if it’s a large disparity, it can be a red flag. If the top parses have 30 CPM on a fight and you’re at 27, don’t sweat it. Sure, there’s probably optimization you could do, but there always is. If the top parses have 30 CPM and your log shows less than 20 CPM, that’s more of a concern. Additionally, higher CPM isn’t always necessarily better. A SCH who overuses Emergency Tactics may have an inflated CPM, and different fight strategies may measurably alter healer CPM while still both being perfectly good strategies. As always, you can’t simply look at one thing.

On the Casts tab, you’ll also see some dropdown menus. By selecting the healer in question from the dropdown menu that’s set to “All Friendlies” by default and selecting “Cast By Spell” from the menu set to “Cast By Source” by default, you can see how many times that healer cast each spell. By examining this page and comparing your number of casts of certain spells to another healer’s log, you can get an idea as to where you may be casting more heals than necessary, or not using certain oGCDs and cooldowns enough times.

By selecting “Timelines” at the top, you can also view an exact timeline of someone’s actions to see the exact sequence of their casts, or you can select “Events” to see it listed chronologically in a text format with more details and exact timestamps.

## Overheal

*TL;DR - You can look at Overheal and Overheal by Ability to check for big red flags like massive overheal % (>50% or something crazy) or high overheal on GCD heals that might be unnecessary casts. This can point you in the right direction to look at other things, but isn’t a good metric on its own. **We have to go deeper**.*


The basic Healing tab says more about your healing than the Summary tab, but it still doesn’t tell you a whole lot. It displays your total effective healing (not counting overhealing, unless you check “Raw Healing” above the graph), how much of that was shields, your HPS, your active time spent healing (as a percentage), and what percentage of your total healing was overhealing. It’s a start, but it doesn’t give the full picture.

Overheal on its own isn’t a very useful metric at all. If it’s some crazy figure like over 50% overheal, that’s a red flag, but it has to be pretty crazy in order to mean anything at a glance. There are many times when overhealing is a result of efficient play. For example, AST can do a lot of overhealing with Earthly Star, because sometimes you’re just using it for damage, or for the tank, because there’s no raid damage for you to use it for. WHM can do the same with Assize, and SCH can sometimes do it with Whispering Dawn used just for the tank. These heals are free, so as long as you’re getting some value out of them and you don’t need them for something else, it’s efficient to use them, which may inflate your overheal stat.

Even with GCD heals, there are times when you’ll have to put up shields while the party is already topped off, which may be an efficient thing to do in certain circumstances, but is overhealing on the initial heal. Maybe 4 targets need to be healed. It’s more efficient to use AoE heals to take care of that than to heal them individually, and those AoE heals can result in more overheal.

What you’re really interested in is “Overheal by Ability.” Selecting “Done By Ability” from the dropdown menu will show you how much healing and overhealing was done by each ability. This *still* doesn’t tell the entire story, because as I said, sometimes overhealing is efficient. However, it's a good place to check for red flags. If something stands out, it may bear further investigation. If you have a lot of overheal from things like Earthly Star, it’s probably not much cause for concern, but if you’ve got a lot of overheal from upfront GCD heals like Cure II or Medica, you should probably look into it, because you’re probably casting those more than you need to.

Overhealing with single target heals is fairly straightforward, but In order to investigate something like overhealing from Medica, you’ll need to look a little deeper. If you select Events view at the top, you’ll be able to see how much healing each individual cast did on each individual target. You can also narrow it down by source player, target player, or ability with the other dropdown menus. This page will display healing line by line, formatted like so:

> Zyrkhan Dar'locke Helios Zyrkhan Dar'locke +6518 (O: 1321)

The number displayed as +_ is the actual HP restored, and (O: ____) is the amount of overheal on top of that. To determine whether certain AoE heals are unnecessary, you can check to see whether the overheal is coming from efficient uses or if the whole cast is mostly overheal.

## Mitigation

*TL;DR - Check the casts or buffs/debuffs tabs to see if the party is properly utilizing their available mitigation, or if a lack of mitigation might be necessitating that the healer babysit the group at the cost of their own performance. You can also sometimes compare damage taken from an ability with another group’s logs to see if there’s a large gap in mitigation between the groups. Again, this doesn’t tell the whole story. You’ll probably HAVE TO GO DEE— sorry.*


A healer’s performance also depends quite heavily on how well their tanks mitigate incoming damage with efficient use of cooldowns and tank swaps, and how well the party as a whole mitigates incoming raid damage. By checking the Buffs tab and selecting the relevant tank(s) from the dropdown menu, you can determine whether the tanks are mitigating damage properly to enable their healers to contribute more. By selecting the Debuffs tab and selecting Enemies, you can also note how well mitigation debuffs like Reprisal, Tactician, Troubadour, Shield Samba, Feint, Addle, etc. were used.

In addition to this, you can poke around in the Damage Taken tab and compare logs with other groups to examine damage taken per second and total damage taken by each attack, which may give you an idea of how well a group is mitigating damage from certain hard hitting attacks, or mitigating damage as a whole.

## Putting it All in Context

*TL;DR - Nothing tells the whole story on its own. You have to consider basically every part of the picture before you can hope to understand the reasons behind any one facet of a healer’s log, and it can be a bit of an investigative undertaking. But you can certainly check for red flags in a few places and make sure there aren’t any glaring problems that need addressing.*


In order to accurately gauge a healer’s performance, you have to consider aaaaaall these factors and more. There are a ton of different aspects of healing performance to improve and optimize, and FFLogs can empower you with all the numbers and information you could need to identify ways you can improve. It’s an endless wealth of knowledge, and if you’re thorough and you use that knowledge well, you’re well on your way to becoming an excellent healer and having an excellent understanding of the game. Just be mindful of the context, because the performance of a healer is directly influenced by a virtually immeasurable number of internal and external factors.


--- 

# That’s All, Folks
That’s… that’s it. That’s all I’ve got right now. It’s finally over. If you somehow suffered through this monstrosity with me, I just want to say thank you. Thank you for caring enough to seek information, thank you for wanting to improve, thank you for being the best kind of player. You deserve a fucking medal. I hope this at least helps somebody. Because it sure didn’t help my RSI. Best of luck to you. Keep fighting the good fight. Keep seeking knowledge. There’s always something to learn.

> -Zyrk





