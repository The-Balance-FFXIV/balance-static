---
title: Astrologian Guide
---
# Intro to Astrologian

## Who Needs MP When You’re This Pretty?

*Brought to you by Zyrkhan Dar’locke, AKA Literally Who*\
*No, we still can’t be Gambit*

# The Scope of this Guide

As the title implies, this guide is intended to function as an introduction to Astrologian. This guide is concerned with Astrologian only. It will not address the general principles of healing as they apply to all healers. Those things are discussed in [Zyrk’s Bullshit Guide to the Principles of Healing](http://bit.ly/FFXIVHealerGuide). Our focus is on things that are unique to Astrologian: AST-specific spells/abilities, cards, strengths, weaknesses, etc.

The guide is intended both for people who are relatively new to the job and people who are generally uncertain as to whether they’re on the right track with their understanding of what the job does, what it’s supposed to do, and how it’s supposed to do it. The goal is to point you in the right direction and give you a solid foundation to build upon.

That said, there’s very little concrete feedback to indicate whether you’re doing anything right when it comes to anything other than keeping the party alive, so this may still be informative for more experienced Astrologians when it comes to expected ability usage and the general guidelines for proper cardplay.

The guide will **not**, however, list and explain your tooltips for you, except where strictly necessary for specific reasons. If you are unfamiliar with what your skills do, you don’t need this guide yet. ***What you need is to read your tooltips.*** They can be found either in game or on the official [FFXIV Astrologian job guide.](https://na.finalfantasyxiv.com/jobguide/astrologian/) Go. Go now, and don’t come back until you’ve at least attempted to read and understand all of your tooltips.

For more in-depth AST discussion and questions beyond the scope of this guide, please direct your attention to [The Balance Discord](https://discord.gg/thebalanceffxiv), where there are plenty of skilled ASTs who are more than happy to answer questions and work with you.

- - -

# Changelog

* 8/4/19 - Released for patch 5.05
* 11/12/19 - Updated for patch 5.1

  * Updated due to gameplay changes:

    * Collective Unconscious - Updated for skill rework
    * Lightspeed - Updated to reflect shifting usage priority away from Sleeve Draw due to 5.1 Minor Arcana change
    * Minor Arcana - Included explanation of 5.1 change and how it works now
    * Opener - Reworked into is own section
    * Pre-pull - New section
    * The pull - New opener, including flowchart and explanation
  * Minor updates that don’t change gameplay:

    * Essential Dignity - Potency updated to reflect minor buff in 5.1
  * Non-patch related updates:

    * Neutral Sect - Included more relevant information about buff stacking and overwriting
* 12/15/20 - Updated for patch 5.4

  * Updated due to gameplay changes:
  * Horoscope - Updated to reflect automatic activation after 5.3
  * Lightspeed - Updated to reflect removal of MP cost reduction effect in 5.3
  * Draw - Updated to reflect restoring MP on use after 5.3
  * Sleeve Draw - Updated to reflect skill rework in 5.3
  * Opener - Updated to reflect new opener after 5.3 changes

    * Outdated Opener given its own section for posterity
  * Secondary Stats - Updated to reflect shift in stat focus due to better MP economy after 5.3 changes

- - -

# Table of Contents

* [The Scope of this Guide](#the-scope-of-this-guide)
* [Changelog](#changelog)
* [Table of Contents](#table-of-contents)
* [What Makes Us Special?](#what-makes-us-special)

  * [Mobility](#mobility)
  * [Astrologian’s oGCDs](#astrologian-ogcds)

    * [Earthly Star (ES)](#earthly-star-es)
    * [Essential Dignity (ED)](#essential-dignity-ed)
    * [Celestial Intersection (CI)](#celestial-intersection-ci)
    * [Celestial Opposition (CO/COpp)](#celestial-opposition-cocopp)
    * [Neutral Sect (NS)](#neutral-sect-ns)
    * [Horoscope](#horoscope)
    * [Collective Unconscious (CU)](#collective-unconcious-cu)
    * [Synastry](#synastry)
    * [Lightspeed (LS)](#lightspeed-ls)
  * [Cards and Divination](#cards-and-divination)

    * [Draw/Play](#draw-play)
    * [Seals](#seals)
    * [Divination](#divination)
    * [Minor Arcana (MA)](#minor-arcana-ma)
    * [Redraw](#redraw)
    * [Sleeve Draw](#sleeve-draw) 
    * [How Your Buffs Work Together](#how-your-buffs-work-together)
* [Opener](#opener)

  * [Pre-pull](#pre-pull)
  * [The Pull](#the-pull)
* [Miscellaneous Stuff You Should Know](#miscellaneous-stuff-you-should-know)

  * [Strange Interactions](#strange-interactions)
  * [Choosing a Sect](#choosing-a-sect)

    * [Sect Swapping/Stance Dancing](#sect-swapping-stance-dancing)
  * [Secondary Stats](#secondary-stats)
* [Contact Stuff](#contact-stuff)

- - -

# What Makes Us Special?

Other than being very pretty (not to understate the importance of how pretty we are)
The way the game is currently designed, the primary goal of the entire raid is to dish out as much DPS as possible without unduly compromising the survival of the run. Healers work to keep people alive as efficiently as they can, and they contribute as much to the party’s damage as they can. That’s the core principle of healing, but each healer has slightly different ways to accomplish that goal. Astrologian’s role in the game is defined by its mobility, unique oGCDs, and above all else, cards.

How about a trite little pros and cons list? Really it’s just an excuse for me to give an overview of the big highs and lows when it comes to Astrologian gameplay and the Astrologian job fantasy.

| Pros                           | ~~Cons~~ Oops! All Pros!                 |
| ------------------------------ | ---------------------------------------- |
| Being pretty                   | Who's "oom"? idk her                     |
| Stuffing people full of buffs  | *Fastro*                                 |
| Feeling like a concert pianist | Cards will give uplander many brainhurts |
| Being *very* pretty            | (Trust me, this is a pro)                |

It may come as a surprise that cards aren’t the only thing Astrologian has going for it. We have quite a few unique strengths, actually, though not all of them are widely recognized—particularly mobility. We’ll begin with the simpler ones and work our way up to the lengthier explanations.

## Mobility

The base cast time of Malefic is 1.5s, with a standard 2.5s recast time (GCD). This allows us to play Solitaire during combat while avoiding the egregious human rights violation that was the 4.0 AST oGCD clipping nightmare. We’re able to weave a single oGCD after each Malefic without clipping (unless Earthly Star is being temperamental or you have really unfortunate latency).

In addition to letting us weave oGCDs without clipping, the 1.5s cast time means that, accounting for slidecasting, we have a solid half a GCD on nearly every GCD to scoot around without losing uptime. That’s absolutely massive when it comes to how forgiving the job is with positioning, dodging AoEs, and doing mechanics. It’s a highly underrated strength of Astrologian, especially when you’re less familiar with the content and aren’t necessarily preparing for every AoE and mechanic in advance.

## Astrologian’s oGCDs

Astrologians have some incredibly powerful oGCD abilities and cooldowns that offer us unique strengths. We may not have Cure 3 or Benediction, but we do have Earthly Star and Essential Dignity. These skills are similar in some ways, but they have different strengths. They may seem like a plagiarized White Mage kit, but if you try to play like a White Mage with cards, you’re going to make for a pretty poor Astrologian.

### Earthly Star (ES)

Earthly Star is a potent AoE oGCD heal that also deals damage. Cure III has the advantage of being on-demand and not limited by pesky cooldowns, but it has a hefty MP cost, and you have to spend a GCD casting it (which means you’re losing a potential damage GCD). Because Earthly Star is an oGCD, it has no MP cost and does not take a GCD to use. You don’t sacrifice damage to use it (you actually gain damage since the skill itself does damage).

The caveat is that it’s on a cooldown and it *requires* preemptive placement. If at all possible, Earthly Star should *always* charge for ten seconds to become a Giant Dominance so that you get the full damage and healing potencies. The only time you would detonate it before it has charged is if you have *absolutely no choice* in order to prevent deaths, or if the damage would otherwise be wasted due to the enemy becoming untargetable or dying.

This is the single highest base potency upfront AoE heal in the game, short of limit breaks. It’s also a very potent source of damage in any multi-target situation due to the fact that the damage has no falloff for multiple targets. It’s one of the most important buttons in your entire kit. **Use it and abuse it.** As a general guideline, place it every time it’s available, and then adjust the timings of your placements from there.

If there are places you’re not getting any healing value out of a certain usage, see if you can strip away other heals that are being used in that section of the fight. If you can’t strip away other heals in that section without it causing issues, *then* you can look into delaying the placement of your Star. It’s okay to delay it and even end up losing a cast over the course of the fight if it means you’re saving GCDs as a result of getting better value out of the Star’s healing (as long as you’re not losing out on an opportunity to hit more than one enemy with the damage, which is almost always the better option).

Earthly Star represents such a large portion of your power budget in the healing department that it *needs* to be worked around when you’re coordinating with your cohealer. Star timings should generally form the backbone of the healing plan, with other tools being used to fill in the gaps, because you are directly losing damage potency by losing uses of Earthly Star. You don’t delay Earthly Star because Whispering Dawn is up and can cover the healing. It’s the other way around. Whispering Dawn can sit on a cactus for a minute, because Earthly Star is a diva who *needs* that stage time.

### Essential Dignity (ED)

Essential Dignity is a low-cooldown single target oGCD heal. Its base potency is 400, which scales with the target’s missing HP up to 1100 potency when the target has 1 HP. With the level 78 trait, you have access to 2 charges of Essential Dignity, which takes this great skill and makes it significantly better.

The obvious role is as an emergency heal. It’s an oGCD, so when something goes wrong and you need to get someone healed *immediately* in order to prevent their death, this is the only button you have that can do that. Even Swiftcast/Lightspeed + Benefic II is going to be nearly a full second slower due to the animation locks. The second (and sort of third) role is as a consistent oGCD healing contribution to keep the tank afloat across the entire fight. In this capacity, it’s used to save both MP and GCDs that you (or your cohealer) would otherwise have to spend healing the tank.

When we only had one charge, you’d have to choose whether to save ED for potential impending emergencies or use it for tank upkeep, but that’s a thing of the past. Now, you can happily use it regularly for tank upkeep while still having one charge in the bank in case of emergency, or to spend both in quick succession for sections of high single target damage.

You want to use Essential Dignity liberally in order to minimize the amount of actual resources you and your cohealer spend on tank upkeep. Don’t sleep on it. If someone could use some healing, throw them an ED rather than sitting at full charges. It’s better to prevent people from getting into an emergency heal situation than to hold onto charges just in case of an emergency heal situation. Of course, you will get more potency if you let the tank get a little bit low before you use it, but don’t overcap your charges for too long just to squeeze a little extra potency out of it.

### Celestial Intersection (CI)

Celestial Intersection. This is it. This is your new first line of defense for tank upkeep. Use this before Diurnal Aspected Benefic, before you resort to ED charges, and before you let your cohealer use Regen, Aetherpact, Excogitation, etc. Potent, low cooldown single target oGCD healing that applies the effect of the *opposite sect* from the sect you’re in. In Diurnal Sect, it’s a 200 potency upfront heal and a 400 potency shield (a unique shield buff that doesn’t conflict with other healers’ shields). In Nocturnal Sect, it’s a 200 potency upfront heal and a 150 potency regen for 15 seconds, for a total of 950 potency.

Notably, the cooldown is only 30 seconds, so you can (and should) throw it on the tank virtually every time it’s up in Diurnal Sect, unless they’re not taking any damage for 30 seconds, since the shield lasts as long as the cooldown. In Nocturnal Sect, you’ll want to use it as often as you can without having it overheal by a huge amount. Don’t worry too much about overhealing with it since it’s free, but you may end up holding it for a little while if the tank isn’t taking enough damage to make use of it.

### Celestial Opposition (CO/COpp)

Celestial Opposition has been completely reworked for Shadowbringers. It is now an oGCD AoE heal that applies a regen in Diurnal Sect, or a shield in Nocturnal Sect. It’s identical to Aspected Helios in every way, except it’s a free oGCD with a 60 second cooldown, *and it stacks with your normal sect regens/shields.*

It’s free healing, it’s beefy, it’s pretty. Use it and abuse it. It’s as straightforward as it is powerful.

### Neutral Sect (NS)

Neutral Sect is our ***Big Boi*** Healing Cooldown™. It gives a 20% buff to our healing GCDs, and causes Aspected Benefic and Aspected Helios to apply the effects of both Diurnal and Nocturnal Sect. So, with the 20% buff, Aspected Benefic becomes a 240 potency upfront heal, with a 1200 potency regen and a 600 potency shield, for a total of 2040 potency in a single GCD. Likewise, Aspected Helios becomes a 240 potency upfront heal with a 600 potency regen and a 300 potency shield, for a total of 1140 potency in a single GCD.

Neutral Sect lasts 20 seconds, and our regens last 15 seconds, so it’s possible to get two full duration casts of Aspected Benefic or Aspected Helios out of a single use of Neutral Sect, if the situation calls for that much healing. Preferably, the shields would be consumed between the casts, but the regens are efficient enough to justify using even if the shields aren’t consumed.

The other unique strength of Neutral Sect is that it adds a shield onto your Aspected Benefic if you’re in Diurnal Sect, but it doesn’t increase the MP cost to the Nocturnal Sect cost. This means that with Neutral Sect, your Diurnal Aspected Benefic is now an instant, spammable 240 potency heal + 600 potency shield for 500 MP, while Benefic II with Neutral Sect active would be 840 potency healing for 900 MP. So, if you need more tank healing and the shield has been consumed, even though you’re overwriting the regen, Aspected Benefic under Neutral Sect is significantly more MP efficient than Benefic II unless you need raw healing instead of shields.

There’s an important distinction to understand here. The opposite sect effect that is granted under Neutral Sect is a unique version of the buff, while the effect that is native to the sect you’re in is the normal version of the buff. In Diurnal Sect, Neutral Sect adds a unique shield buff called *Nocturnal Balance* to your aspected spells, which will not conflict with a Scholar’s Galvanize the same way the normal Nocturnal Field buffs do. If your cohealer happens to be another Astrologian, your unique Neutral Sect shields from Diurnal Sect will not conflict with their native Nocturnal Field shields. If you’re in Nocturnal Sect, Neutral Sect will add a HoT in the form of *Diurnal Balance*, which will stack with a Diurnal Astrologian’s Aspected Benefic/Helios HoTs.

This also applies if you swap sects yourself, as you might in some encounters to prepare shields before the pull. For example, if you start in Nocturnal Sect, you can activate Neutral Sect and cast Aspected Helios to apply the native Nocturnal Field and the unique version of Diurnal Aspected Helios. Then, you can swap to Diurnal Sect and cast another Aspected Helios to apply the native Diurnal Aspected Helios regen and the unique shield. All four buffs will stack.

### Horoscope

Horoscope’s description has proven to be a little confusing for players. Upon the initial activation, Horoscope places a buff on all party members in range. This buff lasts ten seconds. Any party member with the Horoscope buff that is hit by your Helios or Aspected Helios has their Horoscope buff upgraded to Horoscope Helios, which lasts for 30 seconds. If you reactivate Horoscope, any party member in range with the buff receives a 200 potency heal for unupgraded Horoscope, or a 400 potency heal for Horoscope Helios. If you don’t reactivate Horoscope before the buff runs out, it goes off automatically like Scholar’s Excogitation.

This ability is on a fairly short cooldown, so don’t be afraid to use it just for the base 200 potency freebie heal. Don’t cast an unnecessary Helios or Aspected Helios simply on principle to upgrade Horoscope. Either use it as a supplementary freebie heal or think of it more like a “buff my next Helios/Aspected Helios by 400 potency” skill. The nice thing is that the extra potency doesn’t have to come out immediately, and the upgraded buff lasts a very long time, so you can prepare it far in advance. Use Horoscope now and an Aspected Helios for this hit, and then pop the upgraded Horoscope heal after the next raid damage in another 20 seconds.

### Collective Unconscious (CU)

Collective Unconscious is very unique. It’s a channeled ability that creates a bubble around you with two distinct effects: one reduces incoming damage by 10%, and the other is a 100 potency HoT. Depending on your sect, one effect is tied to continued channeling, and the other effect persists for a set duration *after* channeling. While channeling, both effects are refreshed on all party members within range every tick. The ability itself can be channeled for a maximum duration of 18 seconds.

In Diurnal Sect, the 10% mitigation requires channeling and the HoT persists with a duration of 15 seconds. In Nocturnal Sect, it’s the reverse; the HoT requires channeling, and the 10% mitigation persists with a duration of 20 seconds.

Both effects apply instantly when the ability is first activated. You can press it while moving and it will apply the effects to anyone who was close enough when you activated the ability. However, if someone wasn’t in range for the initial use, if they move into it, they won’t receive the effects until the next server tick. It’s pretty much never worth channeling other than downtime though, so make sure your group knows to be in range *before* you use it.

In Diurnal Sect, the channeled mitigation lingers for a couple seconds after you stop channeling, so you will get a few seconds of mitigation even if you simply flash the ability for an instant. Since the mitigation snapshots (for the explanation of snapshotting as a mechanic, see [general healing guide](http://bit.ly/FFXIVHealerGuide)), you can still cover raid damage with it by briefly flashing the ability shortly before the incoming damage is going to snapshot (often at the end of the cast bar, or 1-3 seconds before you receive the damage if there’s no visible cast bar).

In Nocturnal Sect, you immediately get one free tick of the HoT when you activate the skill, even if you don’t channel it. However, unlike Diurnal Sect’s briefly lingering mitigation, the HoT in Nocturnal Sect drops off immediately when you stop channeling. Curiously, you can potentially get two ticks of the HoT by briefly flashing the ability if it aligns closely with a server tick, as you can get the instant “forced” tick on activation and the first natural server tick at the same time.

In Diurnal Sect, CU functions primarily as a low cooldown oGCD HoT with a side of mitigation that you can take advantage of whenever the timing of the fight works out. It’s a solid source of free healing on a low cooldown, so you should usually be using it quite frequently to reduce reliance on GCD heals rather than holding it too long to play around the mitigation.

In Nocturnal Sect, your approach is very different. It’s a lengthy mitigation effect (plus a very small heal from the single HoT tick) on a short cooldown, so it’s easy to get decent value out of it while using it frequently, but the value of mitigation is determined by the amount of incoming damage during the buff. It may be more efficient to hold onto the cooldown here and there in order to use it at a better time, even if it means you get fewer total uses in the fight.

With a 20 second duration, you often want to look for places where you can “double dip” on the mitigation and have it cover multiple things. Back to back raid damage, raid damage and a tank buster, or multiple tank busters are good places to look for clever usage. For example, instead of using CU right before this raid damage, maybe you can put it up just before the tank buster that happens 15 seconds earlier and have it last long enough to cover the raid damage as well.

### Synastry

Synastry places corresponding buffs on yourself and a target party member, mirroring 40% of the healing done by *single target healing spells*. The exact wording here is very important. You see, *spells* and *abilities* are different things (for the full explanation of spells vs abilities… [you know the drill](https://docs.google.com/document/d/1yoq1zU2VgMJQ53PaJHaUtwA3S2aSz1C69qkLDaOmZY8/edit?usp=sharing)). Simply put, *spells* are actions that are on the GCD. *Abilities* are things that are not tied to the GCD, and they have their own internal recast time/cooldown. Benefic, Benefic II, Helios, etc. are spells. Essential Dignity, Earthly Star, etc. are abilities. Synastry only works with *single target healing spells*, which means that it only mirrors the healing from Benefic, Benefic II, and the upfront potency of Aspected Benefic (not the HoT or the shield portion).

This puts Synastry in a bit of a strange place. It makes you extremely good at doing one of the things that you spend all your time avoiding if at all possible: casting Benefic II. It essentially buffs your least GCD efficient, last-resort single target heal. It’s fairly common, then, that Synastry could go unused for an entire encounter, because it buffs something that you only use sparingly.

That’s not to say it *should* go unused, though. There are some situations where Synastry may legitimately be the most efficient tool you have for the job. When you need to focus healing on two targets at once (like shared tank busters), Synastry can be incredible. It’s also your go-to tool for massive amounts of burst healing on a single target, like healing a Dark Knight’s Living Dead.

Even just as a way to supplement tank upkeep in certain places in the fight, Synastry effectively turns your Benefic II into a fairly GCD efficient heal. It’s slightly less GCD efficient than a Diurnal Aspected Benefic, but if you need some extra single target healing somewhere and you don’t have any better tools to handle it at that place in the fight (like Essential Dignity or your cohealer’s oGCDs), Synastry + Benefic II is a perfectly good option.

### Lightspeed (LS)

Lightspeed reduces the cast times of your spells by 2.5 seconds for 15 seconds. This effectively makes all spells instant casts other than raise (Ascend). It used to reduce MP costs, but that effect was removed. This means that Lightspeed is only used for instant casts, or to cast raise (Ascend) faster.

Before I discuss how you do use Lightspeed, I must make one thing crystal clear: ***Lightspeed does not inherently make you do more damage.*** It does not allow you to get more casts off in the same amount of time. It is not a haste buff. You do not *gain* a GCD. You *frontload* a GCD when you use it, but you do not gain a GCD in the grand scheme of things. The only “exception” would be if you can squeeze in one last hit before an enemy dies or goes untargetable by frontloading the last GCD, as you might with Swiftcast.

The first obvious use for instant cast times is mobility, preferably for periods of extended movement, typically to deal with mechanics without losing casts. It can also be used to allow double weaving oGCDs for 15 seconds, as it’s used in the standard opener. It could even be used in dire situations to hardcast a raise, or multiple raises.

So, Lightspeed is not something you want to use every single time it’s available. You want to use it when it will actually do something valuable. If there are mechanics in the fight that require so much movement that you can’t plan other necessary instant casts around them, such as planning an Aspected Benefic or aligning your Combust refresh, using Lightspeed to maintain your GCD uptime is the single most valuable thing you can do with it.
In general, treat the opener and situations like these as the cornerstones of your Lightspeed plan, and then see if there are other places you could benefit from Lightspeed uses between them. Between extended movement sections, if you can fit in the extra use, it can be preferable to use Lightspeed in place of a Swiftcast even for a small amount of movement, especially during progression, because Swiftcast is more valuable than Lightspeed for casting a raise.

## Cards and Divination

This is our identifying job mechanic. Shadowbringers brought us a full card rework (one that was much needed for the big-picture health of the game, but I digress). The rework has been very contentious, but it’s what we’ve got, and you’re here to learn how to use it. I don’t like going over tooltips in guides, but since this is a complete rework, I’m making an exception.

### Draw/Play

Draw gives you one of six cards. Each card gives a damage buff for 15 seconds. The buff is 6% if you play it on the correct role, or 3% if you play it on the opposite role, with the roles being split into melee/tanks and ranged/healers. Upon use, Draw also restores 8% of your maximum MP (800 MP).

Draw has a 30 second cooldown, which starts ticking as soon as you’ve drawn a card. A drawn card has no expiration timer. You can hold onto it as long as you like, though you’ll want to Play it before Draw comes back up in order to not lose out on cards. Play is its own separate button for distributing cards.

### Seals

Each card also has a corresponding Seal, displayed at the top of the card in your gauge. There are three different Seals. There’s one card of each Seal for melee, and one card of each Seal for ranged. Balance, Arrow, and Spear are for melee, and Bole, Ewer, and Spire are for ranged. You can tell if a card is for melee or ranged by looking at the sides of the card. Melee cards have a blue outline and small blue ‘+’ signs to the sides, and ranged cards have a purple outline with small purple circles to the sides. If you’re familiar with pre-5.0 Astrologian, the old damage cards are for melee, and the old non-damage cards are for ranged.

When you play a card *while in combat*, the card’s Seal is stored in one of the slots at the top of your job gauge. The game is very finicky about registering you being in combat if you play a card immediately after your first GCD hitting an enemy, so our openers don’t play standard cards on the first GCD weave. The Seals slot into the gauge from right to left, pushing out the leftmost (oldest) Seal if all slots are filled. These Seals are used to fuel Divination.

### Divination

Divination requires three Seals to activate, and it gives all party members within range a damage buff whose strength corresponds to the Seals consumed to activate Divination. If you have three of the same Seal, Divination is a 4% buff. If you have two of the same Seal and one of another Seal, Divination is a 5% buff. If you have one of each Seal, Divination is the full 6% buff. You want to try for one of each Seal for Divination.

### Minor Arcana (MA)

Minor Arcana allows you to upgrade a card to a more powerful damage buff (8%/4% instead of 6%/3%), in exchange for taking away its Seal. Melee cards convert to Lord of Crowns, while ranged cards convert to Lady of Crowns. This is used frequently to avoid filling your gauge with duplicate Seals that you don’t want, while providing slightly stronger buffs from the cards.

Minor Arcana functions essentially as an alternative Play. You target an ally and use Minor Arcana, consuming the card in your hand and granting the corresponding Lord/Lady buff to the target, leaving your accumulated Seals unchanged.

### Redraw

Redraw allows you to exchange your currently drawn card for one of the other five cards at random. It has up to three charges, and you can Redraw multiple times in a row if need be. You cannot Redraw the card you had when you pressed Redraw, but you can Redraw a card that  you previously had if you’re doing multiple consecutive Redraws. For instance, you cannot pull Bole > Bole, but you can pull Bole > Balance > Bole. It does not guarantee that you will get a different Seal, only a different card. Redraw will typically be used to assist you in acquiring missing Seals for Divination. It may also sometimes be used to try to turn a melee card into a ranged card or vice versa if your group happens to be entirely melee or ranged DPS, or if all the melee or ranged DPS already have a card and you draw another card for that role.

### Sleeve Draw

Sleeve Draw gives you a card with a Seal that you do not already have in your gauge. If used with an empty gauge, it can give you any card. If used with two unique Seals, then it can only give you one of the two cards corresponding to the missing Seal. The cooldown of Draw is completely independent from cards received from Sleeve Draw, so Draw’s cooldown will continue ticking in the background while you resolve Sleeve Draw. Like Draw, it also restores 8% of your maximum MP (800 MP) on use.

Generally, you want to use Sleeve Draw every time it’s available, like clockwork. In a full uptime scenario, Draw should always come up right before Sleeve Draw if you’re not letting them drift. This means that you should never be forced to hold Sleeve Draw to avoid using it on an empty gauge, which would be wasting its primary benefit of guaranteeing a new Seal.

If things drift out of alignment, usually due to your death, I would advise prioritizing using Sleeve Draw to guarantee the third Seal for your next Divination, even if it means you have to hold Sleeve Draw for an extra 30 seconds or so. At that point, you’re playing catch-up and trying to salvage your next Divination window, which takes priority.

### How Your Buffs Work Together

Cards and Minor Arcana do not stack with themselves or each other, including from different Astrologians. However, Divination does stack with any existing card or Minor Arcana buff, and it stacks multiplicatively. This means that instead of being 6% + 6% = 12% damage buff, it’s actually 1.06 * 1.06 = 12.36% damage buff. This doesn’t seem significant on its own, but the same kind of multiplicative buff interaction is compounding with all other active raid buffs, and everyone is aligning the highest burst damage portions of their rotations with these stacking raid buffs, and it quickly becomes quite significant. This is the basis of coordinated raid burst, and it’s a huge part of what makes Astrologian good instead of okay.

Because card buffs only last 15 seconds, we also want to do this on a smaller scale whenever we’re playing regular cards by trying to Play your cards on the right person at the right time. Part of this decision is made for you based on what you draw and what Seals you do or don’t need, but you still have the freedom of deciding when you Play your card within a nearly 30 second window, because there’s no penalty for holding onto a card as long as you Play it before you need to Draw another one.

Optimizing your card usage like this can be daunting, and it’s not the most important thing about playing Astrologian by a long shot, but it’s definitely something to be aware of. The value of your card buffs can vary hugely (literally double in some cases) depending on whether you’re giving out cards during people’s individual burst or if you’re giving people cards when they’re in the lower DPS valleys of their cycles. For instance, you don’t want to give a Summoner a card right after they’ve refreshed their DoTs and are just going to be spamming Ruin for the next 15 seconds; you want to give them a card when they’re going to refresh their DoTs with the card active or when they’re going into Trance.

Sleeve Draw and Divination align in the opener and at the 6 minute mark in the fight. In the opener, we use Sleeve Draw to get Seals for Divination quickly so we can have Divination and multiple single target cards out during opening raid burst. At the 6 minute burst, it’s essentially the same thing, but less hectic since you should have seals ready for Divination ahead of time. But all the same, you want to be dishing out several cards quickly and overlapping them with Divination and other raid burst as well as you can manage. You may even hold the card from your 5:30 Draw to have an additional card partially overlapping with the six minute burst. In that case, you’d optimally use Draw at 5:30, Play/Minor Arcana your held card around 5:55, Draw again, Play/Minor Arcana that card on someone, activate Divination when it comes up, and then dish out another with Sleeve Draw.

- - -

# Opener

The most up to date Astrologian opener(s) can always be found in the #ast_resources channel on The Balance Discord. Keep in mind that Astrologian openers are extremely flexible and depend almost entirely on the circumstances of the fight, the timings of the planned raid DPS bursts, and party composition. Any premade Astrologian opener is a generic framework, not a universally optimal opener.

We've taken a lot of care to evaluate as many of the variables as we reasonably can and identify the core methodology of the most statistically successful opener with regard to when most DPS jobs burst the hardest and when other raid buffs should be coming out, assuming everyone is doing a proper opener. The framework is as follows, with the caveat that the card manipulation skills you use (Redraw, Minor Arcana) will depend on what you draw and when.

## Pre-pull

**Most of this is optional and fight-dependent**, but it is almost always recommended to prep a card 30 seconds pre-pull so that Draw comes back up, place Earthly Star somewhere pre-pull, and use Aspected Benefic, Celestial Intersection, and your Mind Potion/Tincture starting at -5s to lead into your precast Malefic.

* Pre-pull Earthly Star (up to -20s depending on fight; -12s to -8s optimal for damage)
* **\-30	- Draw** (opener assumes you pull with a card in hand and Draw ready)
* \-20	- Nocturnal Sect, Neutral Sect, Horoscope
* **\-12.5	- (Nocturnal) Aspected Helios**
* **\-10	- (Nocturnal) Aspected Benefic, Diurnal Sect**
* \-7.5	- (Diurnal) Aspected Helios
* **\-5	- (Diurnal) Aspected Benefic, (Diurnal) Celestial Intersection**
* **\-3	- Mind Potion**
* **\-1.5 - Malefic precast**

The bolded sections are considered fairly standard. The rest, especially using cooldowns like Neutral Sect and Horoscope pre-pull, are entirely situational depending on whether that much heal/shield prep has any actual value that early in the fight. Realistically, just the regular GCD shields along with Earthly Star are usually overkill for what damage is coming out near the start of the fight. This is just to illustrate some options that you have in the event that there’s a fight that has a large amount of damage coming out in the first 20-30 seconds.

## The Pull

Thanks to the Sleeve Draw rework in Patch 5.3, our opener has never been friendlier. It now follows a straightforward priority system in which you simply use Lightspeed to enable double weaving for card manipulation, put up Combust, and begin playing cards naturally, working your way toward three unique Seals for Divination at a reasonably early time.

This is neatly illustrated by this flowchart, which also displays the probabilities of each potential outcome, depending on how many Redraws it takes to get your second unique Seal before using Sleeve Draw for the final Seal and using Divination at full strength.

![Astro Opener](https://saltedxiv.com/wp-content/uploads/2020/09/Astro_Full_opener_1_03.png)

For accessibility purposes, here is a text version, excluding most pre-pull actions detailed above:

* **\-30	Draw**
* **\-3	Mind Potion**
* **\-1.5	Precast Malefic**

  * Weave 1 - Lightspeed
* **1	Combust**

  * Weave 1 - Play card from pre-pull
  * Weave 2 - Draw
* **3.4	Malefic**

  * Weave 1 - Play
  * Weave 2 - Sleeve Draw
* **5.8	Malefic**

  * Weave 1 - Play
* **8.2	Malefic**

  * Weave 1 - Divination

This is the basic framework of the opener. If you Draw a duplicate Seal, you simply replace the subsequent oGCD windows with Redraws as many times as necessary until you get a new Seal. Once you have your second Seal, you are free to use Sleeve Draw to guarantee the third Seal, then Play the card and use Divination.

Note that in the scenario above, where no Redraws are required, you could use Divination as early as around 6 seconds, which may be too early for many party comps, which is why it’s delayed here until the next GCD. This also means that some Redraws are tolerated without delaying Divination from this timing, but even if it is delayed a further GCD to 10.6 seconds, that’s usually fine. The optimal timing will vary depending on your party composition and burst timings.

## Outdated Opener for Posterity

This is the opener from before the 5.3 rework of Sleeve Draw. It is no longer relevant. I am leaving it here as a testament to a fallen behemoth, so that future generations of Astrologians can look back into the abyss at the Lovecraftian nightmare with which we wrestled even in the deepest recesses of our minds, in our waking hours and in the inner sanctuaries of our dreams.

If you ever feel that the modern opener is too complex… gaze into the abyss herein, and from it, summon your strength. Steel your resolve and steal your determination from its unfathomable depths. Then, walk once more under the light of the heavens, and carry us into a brighter future still.

### The Abyss

This is where things start to look very complicated. It's unrealistic to accurately present how to handle cards in the opener entirely through text, so I've composed a visual representation. Instead of trying to spell out an opener, I'll just explain the principles behind the flowchart so that hopefully you can see the method to the madness.

[Here is a link to the OLD opener flowchart](https://i.imgur.com/4yO9zGZ.png)

The sequence of the opener branches depending on if/when you draw duplicate seals. The guiding principles that determine how the sequence changes are as follows:

I assume you can't realistically evaluate and play multiple immediately consecutive cards, considering what card you drew, whether you need the seal, who doesn't already have a card, and which available recipient makes the best card target. Therefore, the opener attempts as much as possible to avoid having you distribute more than one card in any given double weave (e.g. Play + MA) by spacing them out with a GCD between each card.

If you draw a seal you don't already have, you Play the card on the appropriate target at the earliest opportunity, then watch carefully for what card pops up next and simply try to make a yes/no call on whether you already have that seal. If you already have that seal, then you Redraw at the earliest opportunity, which may be in the same double weave window where you Played the previous card. Again, make a yes/no call on if you got a needed seal from the Redraw. If you did, Play it on an appropriate target at the earliest opportunity.

Sometimes, it'll take more than one try to pull the right seal. When it does, the grouping of oGCDs becomes a concern. Redraw itself has an internal cooldown that makes it impossible to double weave back-to-back Redraws without causing clipping, but that's where the new and improved Minor Arcana comes in. Because you have 5 total cards to play in the opener, assuming you started the pull with one card prepped and Draw back off cooldown, and Divination only requires 3 seals, you will generally be using 2 MAs somewhere in the opener. Now that there's no additional oGCD bloat when using MA, it can be used in the opener as a poor man's Redraw.

You can see in the flowchart how it might be used. On the first split in the chart, if we get unlucky and draw a duplicate seal, we use MA instead of Redraw in order to not push back Sleeve Draw by a GCD, which would severely disrupt the oGCD grouping of the rest of the opener and inevitably delay Divination even further. MA allows us to dump the unwanted seal at this point while preserving the carefully balanced timing of all the cards to follow.

The rest of the time, MA is used as a backup Redraw to be weaved immediately after a Redraw if you find yourself in a situation where you are Redrawing on the first weave space in a double weave window. In these cases, if you Redraw and still don't get the seal you needed, you may use MA to simply push through and force the next card earlier to get another shot at the right seal, rather than waiting until the next GCD to try to Redraw again.

Redraw can't give you the same card you have in hand, so it has slightly better odds than MA, which simply forces the next card and can give you the same card you just had. This is why Redraw is prioritized before MA for fishing for seals, because getting the right seal earlier means you're more likely to finish the entire opener earlier, which is better for rDPS altogether. It's important to keep in mind, however, that you may only use a maximum of 2 MAs during the opener, because you need 3 seals in order to use Divination at all.

**TL;DR** - Play cards with needed seals, Redraw cards with duplicate seals. If you Redraw into another duplicate seal, you can immediately double weave MA if the oGCD grouping lines up that way. For example:

* Grouping which enables MA usage:

  * Sleeve Draw (bad seal appears) > Malefic > Redraw (bad seal appears) + MA: (bad seal appears) > Malefic > Redraw (good seal appears) + Play
* Grouping which does not enable MA usage:

  * Sleeve Draw (good seal appears) > Malefic > Play (bad seal appears) + Redraw (bad seal appears) > Malefic > Redraw (good seal appears) + Play

- - -

# Miscellaneous Stuff You Should Know

Astrologian has a few quirks that you kiiiind of have to know in order to play the job to its fullest potential. Some of them are nice little tricks that will only come in handy every once in a while, but others are somewhat vital to your success.

## Strange Interactions

1. Earthly Star is technically a pet. It counts as a unique, separate entity from ourselves, but it scales with our stats as a pet would. Somewhere in the spaghetti code, they’ve made the Earthly Star “pet” closely match player scaling, so the numbers you see match up with the listed potencies as though they were player potencies, unlike the reduced pet scaling observed with actual pets. This doesn’t currently have any pragmatic effect on us, and we hope it stays that way, but it has in the past.
2. Essential Dignity calculates its heal value based on the missing health of the target at the beginning of the skill, rather than at the end, when the animation completes and the heal is delivered. This can be a good or a bad thing.

   * If you cast Benefic II and seamlessly follow it up with Essential Dignity, the Essential Dignity calculates its heal potency based on the health the target had before the Benefic II landed, because Essential Dignity’s execution began just before the heal from Benefic II was registered. This can be somewhat finicky based on your connection, and it is less reliable with Aspected Benefic due to the difference in animations.
   * On the flip side, if you press Essential Dignity simultaneously as a tank buster is going through, even though the animation delay causes the heal to land after the tank buster, Essential Dignity will calculate its heal potency based on the HP the tank had before he took the hit, potentially leaving you with a \~500 potency heal instead of an \~800+ potency heal.
3. Playing a non-Minor Arcana card immediately after your first hit that puts you in combat will sometimes not grant you the appropriate seal, because the game has not registered you as being in combat yet due to animation and threat table update speed shenanigans.

## Choosing a Sect

I touched on this briefly in the general healing guide, but let me spell it out here. **Regens. Are. Better. Than. Shields.** It is simply a fact of the game design. Regens are inherently more MP efficient *and* more GCD efficient than shields. The purpose of shields is not to be efficient, but rather to do something that regens can’t do: increase your maximum effective hit points (eHP).

This is primarily used as a safety net for learning to be able to cover for mistakes with upfront, brute force healing and mitigation, and to allow the group to meet HP checks during progression when you don’t have enough gear to comfortably survive unavoidable damage without the shields. (Those of you who are thinking, “what about shields for Limit Break cheese?” We’re just not going to talk about it. It’s bad, and Square Enix should feel bad that it exists to this extent.)

Shields may not be aiming to be efficient, *but we sure as hell are*, and we have free access to more efficient regens in the form of Diurnal Sect. Therefore, we generally only use Nocturnal Sect when shields are genuinely necessary. If nothing in the fight hits so hard that you legitimately need shields in order to survive it, you’re better off just sticking with Diurnal Sect and saving yourself the MP and GCDs so that you and your cohealer can contribute more damage to the group.

In fact, now that Celestial Intersection and Neutral Sect exist, even a Diurnal Astrologian has limited access to powerful shields. In most encounters, shields aren’t genuinely necessary with so much frequency that you need access to on-demand shielding throughout the fight, and tanks and ranged physical DPS have plenty of access to party mitigation. Even White Mage has access to party mitigation through Temperance, so having many sources of limited access to party mitigation may often prove more than enough to negate the need for on-demand shields from Nocturnal Sect in a decently coordinated group or a fight that doesn’t have frequent lethal raid damage that requires mitigation.

Shields are inherently situational. Regens are inherently efficient, making them almost universally desirable. If you can afford to, it’s generally more efficient to opt for on-demand regens with limited shielding rather than on-demand shielding with limited regens. But, in fights with so little raid damage that you barely even have to use GCD heals in the first place, the difference between sects becomes virtually nonexistent. In that context, Nocturnal Sect might even be better due to its higher passive contribution to tank upkeep through Celestial Intersection.

Diurnal remains generally very efficient, but thanks to Celestial Opposition and Celestial Intersection, Nocturnal Sect’s reliance on GCD healing is reduced (which is where Nocturnal Sect primarily falls short of Diurnal). And frankly, Nocturnal Celestial Intersection is very strong. The gap in overall efficiency between Diurnal and Nocturnal Sect is still quite significant, but that shouldn't put you off of using Nocturnal Sect when the situation calls for it.

**Prog with a WHM cohealer is a situation that calls for it.** Numerical efficiency is lovely and all, but the safety and margin for error provided by having access to on-demand shielding in prog cannot be overstated. Living through more things more often means seeing more of the fight more often, which means learning the fight faster. That's worth far and away more than a few GCDs you might theoretically save by going Diurnal if the shields aren't completely necessary, so please, in the name of Yoshi-p, just go Noct if you're progging with a WHM.

To put some numbers to it:

* Diurnal Aspected Benefic is 1200 total potency for 500 MP.
* Nocturnal Aspected Benefic is 700 total potency for 900 MP.
* Diurnal Aspected Helios (and Celestial Opposition) is 700 total potency.
* Nocturnal Aspected Helios (and Celestial Opposition) is 450 total potency.
* Diurnal Celestial Intersection is 600 total potency.
* Nocturnal Celestial Intersection is 950 total potency.

Notably, Nocturnal Aspected Benefic and Benefic II are both 700 total potency for 900 MP. The only difference is that Aspected Benefic is an instant cast and part of it is a shield, so it can be used to create an additional buffer on top of someone’s max HP.

Of course, if you happen to be in a party with another Astrologian (my condolences), your regens and shields don’t stack if you’re in the same sect, so one of you will have to use Nocturnal Sect. Similarly, your Nocturnal GCD shields will not stack with Scholar shields, as Nocturnal Field will always overwrite Galvanize, and vice versa, regardless of the strength or duration of either shield. Don’t be that guy who stays in Nocturnal Sect with a Scholar. Don’t do it. Do not.

### Sect Swapping/Stance Dancing

In dungeons, you can swap to Nocturnal Sect just as the last enemy in a pull dies, apply a shield to the tank in preparation for the next pull, and then swap back to Diurnal Sect. This gives you a nice buffer for the tank’s HP while he gathers the mobs, giving you more time to DPS or do whatever else before you need to heal the tank.

## Secondary Stats

The most up to date Astrologian best-in-slot (BiS) set(s) can always be found in the #ast_resources channel on [The Balance Discord.](https://discord.gg/thebalanceffxiv)

Secondaries for Astrologian follow the same convoluted explanation given in the [general healing guide.](http://bit.ly/FFXIVHealerGuide) TL;DR crit is usually king, determination and direct hit are basically interchangeable, and spell speed is… its own beast. There are no relevant stats that are especially bad on Astrologian, really.

Things have taken quite the turn for Astrologian since Patch 5.3, when Draw and Sleeve Draw were changed to restore 800 MP on use. For quite some time, we struggled significantly with MP compared to White Mage and Scholar, which meant we needed a combination of more piety and less spell speed than what they could get away with. Those days are now behind us.

Astrologian is now a seemingly limitless font of MP, at least compared to what it used to be. We still need some piety, but rather than being concerned with how to gain it, we often find ourselves concerned with how to *drop* excess piety in the most efficient ways.

It’s not necessarily the most efficient thing to simply avoid all piety on gear. That approach often loses out to taking advantage of large amounts of spell speed in order to leverage the amount of piety we have. You see, more spell speed means more spells cast in the same amount of time, which means more MP spent. It’s a damage gain with a cost. And in many cases, it ends up being more efficient to simply spend more MP than trying to have less of it in the first place.

This is why you’ll often see very fast Astrologian gearsets. Crit is usually still the focus, but we leverage quite a lot of spell speed as well to get value out of our generous MP engine. The caveat to this is that if you play with relatively high latency, probably 100+, you may need to test for yourself whether you can effectively utilize certain faster gearsets without your latency causing you to clip your GCD when you single weave on Malefics. Sets as fast as 2.30s or even 2.26s GCDs might be unfeasible depending on your connection, so we will usually try to have competitive options that aren’t quite so fast.

As always, try it out for yourself, and **if you’re testing to see if you clip at a certain speed, make sure you test inside an instance.** Instance servers are significantly more responsive than overworld servers, and you will likely get noticeably different results between the two.

- - -

# Contact Stuff

I’m Zyrkhan Dar’locke on Gilgamesh. You can find me as Zyrk#8529 on The Balance Discord, as an admin and Astrologian mentor, for feedback, questions, comments, etc. Feel free to contact me directly for things relating to the guide, but as always, The Balance Discord is open for gameplay questions, guidance, and discussion.