---
title: Warrior Basic Guide
card_header_image: /img/jobs/war/basic.png
authors:
  - Balance-WAR-Staff
  - Mox-Xinmagar
patch: "6.55"
lastmod: 2024-01-17T20:06:50.441Z
changelog:
  - date: 2022-02-26T14:53:27.569Z
    message: Uploaded the new GDoc guide for EW WAR
  - date: 2022-04-29T21:59:46.536Z
    message: Adjusted things to account for Patch 6.11
  - date: 2022-08-25T16:04:39.829Z
    message: Patch 6.2 adjustments
  - date: 2023-01-10T18:31:20.691Z
    message: Updated for 6.3
  - date: 2023-05-28T14:24:37.838Z
    message: Updated the AoE vs ST damage table
---
# Final Fantasy 14: Endwalker guide for Warrior

By Mox Xinmagar & The Happy Team of Warriors\
@Balance Discord

## Intro

Hello team!
There should be an intro here, but I am bad at writing those.\
Therefore I shall skip the funny talks about the Angriest Healer of FFXIV and let the rest of the guide do the talking.\
This intro is focused on Lvl90 Endwalker Warrior. Please get to level 90 soon.

## Skills

The order of skills is pretty straight forward. Here is an image to visualize it all:

[Long image is looooong](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/skills_by_level.png?raw=true) 

Traits on the left, damaging skills in the middle-ish, and cooldowns/buffs on the right.

Some of the skills are used often enough that we might abbreviate them later on in the guide.\
For ease of reading, the following list entries have their abbreviations first, then the skill name, with special mentions in parentheses.\
*Abbreviation, skill name (special mentions)*  

### GCDs (Global-Cooldowns)

**Single-target Combo pieces**:

* HS, Heavy Swing (combo 1)
* Maim (combo 2)
* Eye/Path, Storm’s Eye/Storm’s Path (combo 3)

**Multi-target Combo pieces**:

* OP, Overpower 
* MT, Mythril Tempest 

**Single-target Gauge Spenders**:

* IB, Inner Beast (Lvl 35) 
* FC, Fell Cleave (Lvl 54, trait upgrades Inner Beast) 
* IC, Inner Chaos (Lvl 80, Infuriate unlocks Inner Chaos) 
* These are all on a single button

**Multi-target Gauge Spenders**:

* Steel Cyclone (Lvl 50) 
* Decimate (Lvl 60, trait upgrades Steel Cyclone) 
* Chaotic Cyclone (Lvl 72, Infuriate unlocks Chaotic Cyclone) 
* These are all on a single button

**Special mention**:

* Rend, Primal Rend (Lvl 90) 
* Has an animation lock, cannot be double-weaved with 

### oGCDs (Off-Global Cooldowns)

**Single-target oGCDs**:

* Uph, Upheaval (Lvl 64)  
* Ons, Onslaught (Lvl 62)  

**Multi-target oGCDs**:

* Orogeny (Lvl 86)

**Damage Buffs**   

* Zerk, Berserk (Lvl 6)  
* IR, Inner Release (Lvl 70, trait upgrades Berserk)  

### Defensive Cooldowns

**Warrior-specific**  

* Thrill, Thrill of Battle (Lvl 30)
* Veng, Vengeance (Lvl 38)
* Holm, Holmgang (Lvl 42)
* RI, Raw Intuition (Lvl 56)
* SIO, Shake It Off (Lvl 68)
* NF, Nascent Flash (Lvl 76)
* BW, Bloodwhetting (Lvl 82, trait upgrades Raw Intuition)  

### Role-specific Actions

**Mitigation**:

* Ramp, Rampart (Lvl 8)
* Reprisal (Lvl 22)
* Arm’s Length (Lvl 32)

**Interruptions**:

* Low Blow (Lvl 12)
* Interject (Lvl 18)

**Aggro Management**:

* Provoke (Lvl 15)
* Shirk (Lvl 48)

![NishYou's WAR imagery](https://github.com/Moxfi/XIV/blob/main/WAR/WAR_glam/nishyou%20-%202021-09-27_02-58-12-798_EG11%20-%2000%20-%20Shadowbringers%20Gameplay.png?raw=true)

## Warrior Gameplay

Warrior gameplay focuses on gathering resources and maximizing the effectiveness of those resources.\
These resources are Beast Gauge, and with some imagination, our buffs and oGCD stacks.  

First off, the important parts to get your gameplay flowing.

### Openers

Warrior openers are all about catching the party buffs and maximizing potential amount of uses per skill. There is some flexibility, mainly in Potion timings and the use of Primal Rend, but also when IR is used. This means that we are delaying some skills until after all the party buffs are up, while also making sure to get them all on cooldown as soon as possible.\
While exact timings are not often important to 99% of the player base, we will still follow them as Best Practices™.

Assumptions:

* Tomahawk starts the pull at 0.00s. This means that the actual use of Tomahawk is at around -0.7s, right before the pull timer hits 0.
* Skill Speed is at around 532, which translates to 2.47 GCD. Faster skill speed is fine, but the openers listed will be slightly different in practice due to some skills having flat timers (Upheaval at 30s) and our GCD speed being flexible (2.50 to 2.30).
* Potion covers 12 GCDs. It is definitely possible for Potion to cover 13 GCDs, but due to Endwalker Warrior being such a slow-paced job in general, and players having wildly different internet connections, we will show openers with 12 GCD Potions.
* All of the important Party buffs are up after 7.8s into the pull. 

Syntax

* GCDs are on the lower part of the image.
* oGCDs and potions are on the upper part of the image.
* Going forward, all the skills will be listed as *GCD +oGCD1 +oGCD2.*

#### All-Around Opener

Catches party buffs, burns all our resources as soon as possible.  

There is nothing special about this. This is your usual opener. The IR stacks last right until the 3rd Fell Cleave at 2.50 GCD.

![All-Around Opener](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/Openers/WAR_Standard.png?raw=true "All-Around Opener")

The order of actions is:

* Tomahawk +Infuriate
* Heavy Swing
* Maim +Potion
* Storm’s Eye +Inner Release
* Inner Chaos +Upheaval +Onslaught
* Primal Rend +Infuriate
* Inner Chaos +Onslaught
* Fell Cleave +Onslaught
* Fell Cleave 
* Fell Cleave
* Heavy Swing
* Maim
* Storm’s Path
* Fell Cleave +Infuriate
* Inner Chaos
* Heavy Swing
* Maim +Upheaval
* Storm’s Eye

#### Early-IR Opener

Requires a faster set (eg. 2.40 GCD). Expected to do 13 GCD Potion to fit in 3 IC. Does not require a Face Pull, but doing so should fit in 2IC 1Rend to most buffs. If you need to position the boss, start with a Tomahawk. This will push your skills forward by a GCD, possibly causing Rend and IC slip out of the buff window.

This gets Inner Release on cooldown earlier, but any gains are very fight-specific and you need a faster skill speed to pull off the 3IC Potion and to get the 3rd IR Fell Cleave out.

![Early-IR Opener](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/Openers/WAR_EarlyIR.png?raw=true "Early-IR Opener")

The order of actions is:

* Provoke
* Heavy Swing +Infuriate +Inner Release
* Maim
* Storm's Eye +Potion
* Inner Chaos +Upheaval +Onslaught
* Fell Cleave +Onslaught
* Fell Cleave +Onslaught
* Fell Cleave +Infuriate
* Primal Rend
* Inner Chaos
* Heavy Swing
* Maim
* Storm's Eye
* Heavy Swing
* Maim
* Fell Cleave +Infuriate
* Inner Chaos

#### Cursed Prepull IR

The cursed tech of “Prepull IR” refers to getting Inner Release on cooldown before the pull has even started. This has some very big downsides and some very situational up-sides.

Do not use these unless you know what you are doing.

The main reasoning for the opener is to get IR on cooldown faster, gaining extra uses before specific fight phases. An example of this would be a heavy-padding Zodiark Extreme, where the aim is to get Inner Release for the Orbs phase.

Pull timers are:

* IR at -00:09s
* Potion at -00:02s
* Pull at 00:00s

The previews have been removed to force the reader to read the text above, before clicking random links on the internet.

**\-9s IR into Eye**\
[Prepull IR into Eye](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/Openers/WAR_-9s.png?raw=true)

**\-9s IR into Tempest**\
[Prepull IR into Tempest](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/Openers/WAR_-9stempest.png?raw=true) 

**\-29s IR into Rend**\
[Prepull IR into Rend](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/Openers/WAR_-29s.png?raw=true)  

We expect you to do your own adjustments for any fight-specific needs. There is no support for these openers.

### Rotation

The Endwalker Warrior rotation is mostly a priority system with some flexibility baked in. The short version can be summarized as follows:

* Keep hitting things
* Keep the buff up
* Don't overcap on buff
* Storm's Path to gain more gauge
* Don't overcap gauge
* Keep Upheaval on cooldown
* Keep Inner Release on cooldown
* Keep Onslaughts ticking (below three stacks)
* Keep Infuriate ticking (below two stacks)
* Burn gauge/stacks inside party buffs

That is a lot of things that you might not know about, so we will break them down into their own sections.

#### Combos and breaking them

* Thanks to Endwalker, dropping a combo is really difficult now.
* Combo actions last 30 seconds before dropping.
* You can use Tomahawk and Gauge spenders between combo pieces.
* The only way to break the combo is to use a GCD from another combo, or to use the same combo GCD twice, or to use an earlier combo piece.

#### Surging Tempest - The Buff

* +10% damage buff that we keep up.
* Granted by Storm’s Eye combo or Mythril Tempest combo.
* Aim to refresh between 7-15 seconds.
* Stacks up to 60s. Use this to your advantage in fights with forced downtime.
* Inner Release gives +10s to the buff. Keep this in mind when refreshing your buff.

#### Storm's Path and Storm's Eye

* Use Storm's Eye combo to get the buff up.
* Use Storm's Path combo to get more gauge.

#### Beast Gauge

* Used for Fell Cleaves and Inner Chaoses.
* Don't throw the gauge away, try to spend it inside party buffs.
* Don't overcap. Using Storm's Path at 90 gauge gets you to 100 gauge. You can't have 110 gauge.
* Spend all of your gauge inside party buffs. Gather gauge between party buffs.

#### Onslaught

* Very useful as a gap closer, meaning that we can stick to the boss even when knocked back.
* We can stack up to three of them. They are on a 30s timer.
* We can do some fancy optimization around party buffs!
* With the current party buffs being mostly 120s, we aim to do 3-1 cycles of Onslaughts.
* Three Onslaughts into the opener, One Onslaught while waiting for the buffs to come up again.
* Repeat 3-1, 3-1. Three inside even minute buffs, one inside odd minute buffs if available.
* Do not let them sit on full stacks for long. That is a DPS loss.

#### Infuriate

* We get two stacks, on a 60s timer.
* Unlocks Inner Chaos for 30 seconds.
* Spend them in party buffs. That's what they're for.
* It is possible to carry the Inner Chaos for 30 seconds. Do not drop it.

#### Upheaval

* Should be used on cooldown. It is on a 30s timer, meaning that it should hit every party buff.
* As long as those buffs are up every 60/120 seconds, that is.
* Does not matter if it is inside Inner Release or not, as IR only affects Fell Cleave and Decimate now.

#### Inner Release

* Our "Free Fell Cleaves" button.
* Stacks last for 15 seconds. This is is 5-6 GCDs depending on your skill speed.
* Grants Inner Strength, negating some effects such as knockback for 15 seconds.
* Inner Release stacks are used only by Fell Cleave or Decimate.
* Be mindful of using combo GCDs, Rend and ICs during the stacks, as it is easy to drop the third stack.
* Be mindful about the amount of gauge you enter IR with. If you have 60g, you cannot get rid of any gauge until the IR stacks end.
* Using Infuriate during IR lets us use Inner Chaos instead of an IR Fell Cleave. Remember to avoid overcapping gauge.
* Use IR on cooldown. Unless the fight downtime would waste it.

### Area of Effect

Area of Effect refers to using skills that hit multiple targets in one go. The AoE skills themselves have a lower potency than single target skills. So what is the big deal?

For Endwalker Warriors, the options are pretty clear cut. At level 90, the AoE rotation for Warriors is more effective than single target rotation if there are three or more targets to hit.

Here is a nice table comparing various skills and combos and their effective potency at different situations.

![AoE effectiveness](/img/jobs/war/image.png "AoE effectiveness")

That is a bunch of numbers, and Warriors are known to be bad at reading, so let us summarize:

Three or more targets available?

* Overpower + Mythril Tempest
* Decimate or Chaotic Cyclone
* Orogeny

Two or less targets available?

* Storm’s Eye / Storm’s Path
* Fell Cleave or Inner Beast
* Upheaval

![Greg's Warrior imagery](https://github.com/Moxfi/XIV/blob/main/WAR/WAR_glam/greg%20-%20ffxiv_01292022_161109_125.png?raw=true)

## Getting Advanced

That is it for the very basics. Now, you might feel like Warriors do not have a lot of optimization going on, and you would be right. However, there are some tricks in our sleeves that can be used.

### Beast Gauge

Warrior's gauge should not be spent willy-nilly. There must be a reason for using the gauge.

A couple of rules to mention first:

* We cannot reach >=110 gauge. This will be referred to as "overcapping."
* Maim gives +10 gauge.
* Storm's Path gives +20 gauge.
* Storm's Eye gives +10 gauge.
* Surging Tempest cannot reach >60 seconds. This, too, will be "overcapping."
* Infuriate gives +50 gauge.

With those rules in mind, we want to maximize our Beast Gauge generation, as our main sources of damage are locked behind Beast Gauge.

#### Avoiding Overcapping:

* Do not use Storm's Path at 90-100 gauge. Fell Cleave first.
* Do not use Infuriate at 60-100 gauge. Fell Cleave first.
* Do not use Storm's Eye at >31 buff timer. Use other GCDs first.

Some exceptions exist, but if you are reading these notes, you might not know any yet. These are often fight-specific.

You may want to consider emptying your gauge as much as possible, before using Infuriate.\
This will let you use Infuriate and carry the Inner Chaos into a later moment. More about this slightly later in this same section under “Carrying Buffs.”

#### Using Beast Gauge

Beast Gauge does not expire. This means that we can stock up for party buffs and empty it all once there are buffs to take advantage of. You may feel compelled to use that 50 gauge on a Fell Cleave as soon as possible. As mentioned above, there is no reason to do so. You often lose out on free damage that could have been gained by saving that Fell Cleave for buff windows.

You should avoid overcapping as much as possible. This is achieved by using single Fell Cleaves every time your next GCD would make you overcap on your gauge.  

Sitting at 100 gauge and the next combo GCD is Maim/Path/Eye? Better Fell Cleave first.

#### Inner Release and Infuriate timer

It is beneficial to avoid hitting two full stacks of Infuriate, as to gain the full advantage of the timer ticking. Therefore, we may run into moments where our Infuriate would hit two stacks during Inner Release.  

To avoid hitting two stacks of Infuriate, we aim to do the following:

* Enter Inner Release with <=50 gauge, or
* Enter Inner Release and the next Infuriate is >30 seconds away, or 
* Burn gauge before Inner Release, as this gives us free reign over our Infuriates, making it possible to hit 2IC 1Rend 3IRFC inside party buffs.

Setting up the last option takes a bit of planning and depends on the fight and skill speed.

![Larxy Couteau's Warrior imagery](https://github.com/Moxfi/XIV/blob/main/WAR/WAR_glam/Larxy%20Couteau%20-%20image%2020.png?raw=true)

## Staying Alive

Warriors excel at staying alive. We are the outlier in survivability.

### Stacking Cooldowns

Most of the game can be solved by stacking cooldowns in such a way that our “survivability” increases by ~35%.

Consider the following situation:

* Tank buster will hit for 100% of our HP.
* Warrior has all their cooldowns available.
* Thrill of Battle is used. Warrior’s Max HP is now 120%.
* Rampart is used. Tank buster now hits for 80% of the original.

The gap between the new max HP and the new tank buster is now “40%.”

While math does not work this way exactly, it is good enough to paint a mental image of the survivability increase.

![Cooldowns vs Buster](https://github.com/Moxfi/XIV/blob/main/WAR/Resources/hp_vs_buster.png?raw=true "Cooldowns vs Buster")

As another example, consider Bloodwhetting + Rampart.

* Tank buster for 100% of Max HP.
* Rampart reduces it down to 80%.
* Bloodwhetting reduces that down to 64.8%
* 100 x (1 - 0.2) x (1 - 0.19)
* \= 100 x 0.8 x 0.81 
* \= 80 x 0.81
* \= 64.8

The original tank buster of 100% now hits for 64.8% -- a reduction of 35.2%.

#### Usual Sets of Cooldowns

As for practical uses, we assume a good use of the Bloodwhetting, granting us a total of 19% mitigation for four seconds.

##### Sets of Two

* Bloodwhetting + Thrill of Battle
* Bloodwhetting + Rampart
* Bloodwhetting + Vengeance
* \*Bloodwhetting + Reprisal

##### Sets of Three

* Bloodwhetting + Thrill of Battle + Rampart
* Bloodwhetting + Thrill of Battle + Vengeance
* \*Bloodwhetting + Reprisal + Rampart
* \*Bloodwhetting + Reprisal + Vengeance
* \*Bloodwhetting + Reprisal + Thrill of Battle

##### Sets of Four

\*also known as Kitchen Sink\*\*\*

* Bloodwhetting + Thrill of Battle + Rampart + Vengeance
* \*Bloodwhetting + Reprisal + Rampart + Vengeance
* Just Holmgang at this point, honestly.

Anything with a Reprisal *in them is considered* very situational* and should be used with care.\
If you are using Reprisal to survive a tank buster, remember that it might be down for the next raid-wide damage.\
Other sources of 10% mitigation exist, such as Exaltation on Astrologians.

*Kitchen Sink comes from the idiom “Everything but the kitchen sink”.*\
[What does "Everything but the Kitchen Sink" mean?](https://dictionary.cambridge.org/dictionary/english/everything-but-the-kitchen-sink)\
*We are throwing **everything** at the problem.* 

## Healing

Warrior is the third healer of the party. With Bloodwhetting, Equilibrium, Nascent Flash and Shake It Off, we are blessed with the responsibilities of saving people who stand in stupid.  

In this section, we will go over the very basics of Warrior Heals.

### Thrill of Battle

* Affects Storm's Path's healing.
* Affects Shake it Off's healing.
* Affects Equilibrium's main heal and the HoT.
* Does affect the Bloodwhetting's shield.
* Does NOT affect Bloodwhetting heals.
* Weird like that.

### Bloodwhetting

* Get four GCDs in by popping this in the second oGCD slot.
* Heals per hit, very powerful in dungeons.
* May Crit a heal randomly. Luck!
* Primal Rend, Chaotic Cyclone and Inner Chaos always force a Crit heal.
* Inner Release'd Fell Cleaves do NOT force a Crit heal.
* Thrill of Battle does NOT increase the healing from these.
* Initial mitigation is 19% due to diminishing returns (100 x 0.9 x 0.9 = 81).

### Nascent Flash

* Goes on a friend.
* Initial mitigation is 19% due to diminishing returns (100 x 0.9 x 0.9 = 81).
* Gives them the mitigation, much like Bloodwhetting would give to us.
* Save a friend with this!

### Forcing Crits

* Inner Chaos and Primal Rend force a Crit heal.
* This may save a life.
* Be the healer of the party.
* Inner Release’d skills do not force a Crit heal.

![Lars' Warrior imagery](https://github.com/Moxfi/XIV/blob/main/WAR/WAR_glam/lars%20-%20war%20img.png?raw=true)

## Stats and Gear

Welcome to Endwalker Warrior stats and gearing! 
Soon you will have all sorts of confusion and question various things you have heard in various parts of the Internet!

First things first:

* Warriors are strength-based. Vitality is nice, but it always walks hand in hand with strength upgrades. 
* Since Patch 6.2, having Direct Hit melds increases the damage of our 100% DCrit skills.
* Since Patch 6.2, party buffs affecting Crit and DHit rates also boost the damage of our 100% DCrit skills.

### Universal Stat Priorities

Weapon Damage >>> Main Stat >>>> Substats. 

*Very few exceptions have existed before Endwalker.*

### Warrior Substat Priority

*Crit > comfy SkS > DH >= Det > Tnc*\
Also applies to Materia Melds.

#### What happened with Direct Hit not being desirable?

Patch 6.2 made DHit provide bonus damage to skills that have 100% Direct Hit and 100% Critical Hit rates. \
After two full expansions, DHit is good for us again.

#### Skill Speed

We do not deliberately avoid Skill Speed, but we do not prioritize it at all.\
Maybe only for comfy reasons such as fight phasing or oGCD lineups etc.\
oGCD lineups referring to situations where our GCD and oGCDs come up at the same time, forcing us to delay one or the other.  

A rule of thumb is to delay the oGCD in most situations.

#### Why Tenacity?

Tenacity increases all damage dealt, much like Determination.\
While it offers some mitigation bonuses, it is often very little and near impossible to observe due to the game already having a 5% variance in incoming damage.

#### Stats in general (Det vs Tnc example)

To gain +0.1% damage, we need to reach the next breakpoint.\
We will refer to these +0.1% gains as "tiers."\
These tiers are separated from each other approximately as follows:

* 13.57 points of Determination
* 19 points of Tenacity

To extrapolate from this, it follows that Determination gives us more damage than Tenacity, when limited to an arbitrary amount of stat points.  

If we were to have 2000 points to use on either Determination or Tenacity, we would get:

* 2000 / 13.57 = ~147 tiers of Det
* 2000 / 19 = ~104 tiers of Tnc

#### Multi-tank melds

Patch 6.2 brought Direct Hit melds back to WAR!

While WARs try to hit GCD numbers around 2.50, 2.45, 2.40, other tanks might have more specific numbers.  \
While melding for multiple tanks, consider what skill speed you want to use on GNB, PLD or DRK.

![Sunless's Warrior imagery](https://github.com/Moxfi/XIV/blob/main/WAR/WAR_glam/Sunless%20-%20war%20img.png?raw=true)

## Macros

Macros are weird. They are fired off one line per one in-game frame. 15 lines of Macro, 15 FPS in-game? That macro is gone in a single second.
 Macros also don’t queue like normal skills do.

Filling up all the slots with repeating lines sort of simulates queuing. The real reasoning is that macros read one line per each in-game frame. If the macro tries to execute an action while in animation lock (from another action, for example), it has no effect.

```
	Frame 1: /merror off
	Frame 2: /ac "Nascent Flash" <2>
	Frame 3: /ac "Nascent Flash" <2>
	Frame N: ...
```

When you repeat the action inside the macro, you stretch the action activation window.\
Instead of a macro that has a single frame where it attempts to use an action, you have a macro with 13 frames of attempts. This gets around the issue of "animation lock vs macros" where you might not be able to use a skill because of the animation lock.

### Holmgang

Holmgang is weird. If your Holmgang target dies, you lose the effect. Self-cast gets around this. If your target is too far away, you will not be able to cast Holmgang. Self-cast gets around this, too. To achieve both goals, we self-cast using <me> in the macro!

```
	/merror off
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/ac "Holmgang" <me>
	/micon "Holmgang"
```

### Nascent Flash

Nascent Flash goes on a friend. Most often on the co-tank of your eight-person party.\
They are, by default, the second member in your party list, which is what the <2> refers to.\
You may make a mouseover macro by using <mo>, or you may make multiple macros for each of your party member by using <3>, <4>, etc.

```
	/merror off
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/ac "Nascent Flash" <2>
	/micon "Nascent Flash"
```

### Shirk

Shirk the second Party member. Often your co-tank.

```
	/merror off
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/ac "Shirk" <2>
	/micon "Shirk" 
```

## Best-in-Slot aka BIS (Patch 6.31)

### Food and Potions

> Carrot Pudding HQ, or  \
> Sunset Carrot Nibbles HQ.  \
> Grade 7 Tincture of Strength HQ.

### Gear Sets

Please see the Warrior's main page for different gear sets. 
Some of the gear sets have very specific melds, some of which might go against the usual meld priority.

#### What’s the different GCD speeds? Why not just use the one with the highest simulated DPS?

The simulations are made with a simulated infinite rotational loop, which also heavily skews the value of skill speed.\
Fights are not infinite, and often come with downtime.\
Slower GCDs offer some rotational tricks to maximize party buff windows.\
Simulations are also pure math based on our best understanding and knowledge of the game's mechanics. Practice always differs from theory.

## Further Reading

Here be links to other Tank-related guides!

## Credits

Hello team!\
This guide was written by the Happy Warriors of the Balance discord!\
[Discord.gg @TheBalanceFFXIV](https://discord.gg/thebalanceffxiv)\
You can catch all of us in the Warrior channels, either posting Cats or Lizards, or discussing Pokemon cards.