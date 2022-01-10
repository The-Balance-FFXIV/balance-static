---
title: Paladin Basics Guide
card_header_image: /img/jobs/pld/basic.png
authors:
  - nikroulah
patch: "5.5"
lastmod: 2021-10-27T08:23:35.725Z
changelog:
  - date: 2021-10-27T17:21:54.665Z
    message: Added
---
Welcome to the Basics Guide for Paladin! Whether you are a fresh level 90, a returning player, or just need a refresher, this guide will get you started and hit the ground running.


Since this is a basic introduction to level 90 Paladin, this guide will not go into many nuances and topics that are tied to high-end optimization. If you are looking for such information, you may find it in one of the dedicated guides below:

* Leveling Guide (Coming Soon!)
* [Openers](/jobs/tanks/paladin/openers)
* Advanced Guide (Coming Soon!)
* Fight Tips (Coming Soon!)
* [Stats and Materia](/jobs/tanks/paladin/stats-and-materia)
* [Gearing](/jobs/tanks/paladin/best-in-slot)
* Skill Overview (Coming Soon!)
* [Frequently Asked Questions](/jobs/tanks/paladin/faq)

- - -

## Paladin Playstyle

The Paladin rotation revolves around its two main buffs: Fight or Flight, which heavily buffs all physical damage, and Requiescat, which buffs spells and enables the use of Confiteor. Defensively, Paladin has strong party mitigation as well as targeted mitigation for your co-tank or party members.

## Core Concepts

There are a few key concepts that are fundamental to the game and carry over between jobs.

* Keeping your GCD on cooldown is one of the most important parts of playing any job. Pressing something wrong is almost always better than pressing nothing at all.
* As a primarily melee job, it's important to know how to keep melee uptime on the boss. This includes knowing when mechanics snapshot and where you can greed for extra GCDs before and after disengaging for mechanics.
* Keep oGCDs on cooldown. Damaging oGCDs should be used roughly as they come off cooldown, as long as using them wouldn't delay your next GCD due to animation lock.

## The Basic Rotation

### The Opener

Goals for the opener include:
* Apply Goring Blade early
* Use damaging off-global cooldowns (oGCDs) inside tincture and raid-buff windows. Most raid-buffs will come out shortly before the 4th GCD).

![Standard Opener for Paladin](https://xiv.sleepyshiba.com/pld/img/standard-opener.png)

**Text version:** prepull Holy Spirit at -2s > Fast Blade + late weave Fight or Flight > Riot Blade + Tincture > Goring Blade + Circle of Scorn > Fast Blade + Expiacion + Intervene > Riot Blade + Requiescat + Intervene > Royal Authority > Atonement > Atonement > Atonement > Fast Blade > Riot Blade > Goring Blade > Holy Spirit > Holy Spirit > Holy Spirit + Circle of Scorn > Holy Spirit + Expiacion > Confiteor > Blade of Faith > Blade of Truth > Blade of Valor

![](https://xivapi.com/i/020000/020710_hr1.png)

The potion used is whatever the current tier's Strength potion is (as of Savage release in patch 6.05, it is the Grade 6 Tincture of Strength).

**High Latency Adjustments:**\
At high latency, if double weaves would cause your GCD to clip, move oGCDs around to stick to single-weaving.

**Opener notes:**  

* We pull with a precast Holy Spirit as a medium-potency GCD that only costs half a GCD (due to precasting). Pulling with Shield Lob would be less potency and starts the GCD rolling later while pulling with Intervene moves an Intervene out of Fight or Flight.
* Since the Requiescat oGCD itself does damage, and the Requiescat buff lasts for a long time, we use Requiescat early in the opener to put it under raid-buffs like Bard's Battle Voice or Dancer's Technical Finish.

### Rotation Loop

Following Blade of Valor, the Paladin rotation enters into a loop with three phases, with a short filler phase before repeating the Fight or Flight and Requiescat windows as in the opener.

![Paladin Rotation Loop](https://xiv.sleepyshiba.com/pld/img/loop.png)

**Text Version:** Loop Start > Fast Blade > Riot Blade > Royal Authority > Atonement > Atonement > Fast Blade + late weave Fight or Flight > Riot Blade > Goring Blade > Fast Blade > Riot Blade > Royal Authority > Atonement > Atonement > Atonement > Fast Blade > Riot Blade > Goring Blade + Requiescat > Holy Spirit > Holy Spirit > Holy Spirit > Holy Spirit > Confiteor > Blade of Faith > Blade of Truth > Blade of Valor

During the filler phase, only two out of three Atonements are used because the natural rotation is approximately 64 seconds long. Dropping a GCD minimizes the natural drift on the 60-second cooldown Fight or Flight and Requiescat and is the best option in a vacuum.

Damaging oGCDs like Circle of Scorn and Expiacion should be used on cooldown, ideally with two charges of Intervene being pooled for Fight or Flight. Requiescat can be used any time after the fourth Fight or Flight GCD for the buff to last until Confiteor.

### Using Fight or Flight

With a 25-second duration, at most common skill speeds, it is possible to fit 11 GCDs in the Fight or Flight buff window. In the standard rotation these GCDs will be Riot Blade, Goring Blade, a Royal Atonement combo and three Atonements, and another Goring Blade combo. The buff on Goring Blade's damage-over-time effect (DoT) will persist as long as Goring Blade itself was buffed by Fight or Flight.

![](https://xiv.sleepyshiba.com/pld/assets/fofgcd.png)

In order to fit all 11 GCDs in the buff window, Fight or Flight must be weaved late in the GCD timer. The approximate timing is two-thirds of the way into the GCD after Fast Blade, though the timing may vary depending on your latency and skill speed. As long as the buff icon is on your buff bar when your last GCD is cast, then it was buffed. The in-game battle log and floating damage text are inaccurate for determining whether the last GCD was buffed or not.

Each Fight or Flight window should also contain one Circle of Scorn and one Expiacion. Using them roughly on cooldown should naturally line them up with Fight or Flight. Intervene is ideally pooled for two uses during Fight or Flight, but should be used to keep melee uptime if needed.

### Multiple Targets

* At three or more targets, replace single target melee combos with Total Eclipse and Prominence.
* At two or more targets, replace Holy Spirit with Holy Circle
* In dungeons use Requiescat before Fight or Flight, since it is stronger in multi-target situations

For prolonged two-target encounters (rarely found outside of Ultimate raids), see the Advanced Guide (Coming Soon!) for more information.

## Notable Utility

![Divine Veil](https://xiv.sleepyshiba.com/pld/assets/skill-divineveil.png)

Divine Veil provides a party-wide shield and heal (excluding yourself) after being procced by any healing GCD with an on-hit healing potency (e.g. Holy Spirit, Astrologian's Helios, Scholar fairy's Embrace, and not White Mage's Regen).

![Passage of Arms](https://xiv.sleepyshiba.com/pld/assets/skill-passageofarms.png)

Passage of Arms applies a buff to all party members behind you, granting them a 15% reduction in damage taken. The buff lingers for 5 seconds after you cancel it, so the most common use-case is flashing it onto the party before high raid-wide damage.

![Intervention](https://xiv.sleepyshiba.com/pld/assets/skill-intervention.png)

Intervention gives your target a buff reducing damage taken, as well as providing a small regen effect. The damage reduction buff can be buffed by having either Rampart or Sentinel active when casting Intervention.

![Reprisal](https://xiv.sleepyshiba.com/pld/assets/skill-reprisal.png)

Reprisal reduces the damage dealt by all enemies around you. Generally use this on raid-wide damage.

![Holy Sheltron](https://xiv.sleepyshiba.com/pld/assets/skill-holysheltron.png)
![Rampart](https://xiv.sleepyshiba.com/pld/assets/skill-rampart.png)
![Sentinel](https://xiv.sleepyshiba.com/pld/assets/skill-sentinel.png)
![Hallowed Ground](https://xiv.sleepyshiba.com/pld/assets/skill-hallowedground.png)

Use your other defensive cooldowns to reduce incoming damage and make life easier for your healers.

![Clemency](https://xiv.sleepyshiba.com/pld/assets/skill-clemency.png)
![Cover](https://xiv.sleepyshiba.com/pld/assets/skill-cover.png)

These skills are very niche and infrequently used but have their time and place to shine. Clemency is a _significant_ DPS loss but enables soloing dungeon bosses when the healer is dead or saving runs when progging raids and trials. Cover can be used in niche optimization strategies or for saving a party member from otherwise-lethal damage. Covered damage ignores Hallowed Ground.

- - -

## Helpful Macros

Co-tank macros assume your co-tank is in party slot two (default party sorting)

**Intervention on Co-tank**  
```
/merror off 
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/ac Intervention <2>
/micon Intervention  
``` 

**Mouseover Cover:**
```
/merror off
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/ac Cover <mo>
/micon Cover  
```
<br>

**Shirk on Co-Tank**
```  
/merror off
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/ac Shirk <2>
/micon Shirk  
```

**Why are there so many repeated lines?**
FFXIV macros do not queue, so hitting a macro while in animation lock from another action will cause the macro to not go off. Since macros execute lines sequentially at around one line per frame, repeating the /action lines simulates mashing the ability every frame for ~15 frames and gives the macro a semblance of queuing.

**Mouseover? `<2>`?**\
`<mo>` will attempt to target whatever your mouse cursor is currently hovering over when that macro line is reached, whether it be their physical model or a name on your party list.

`<2>` targets the second player on your party list, which is the other tank by default in 8-man content.

- - -

## Further Reading

For high-end optimization concepts, see the Advanced Guide (Coming Soon!).

For fight-specific optimizations, see the Encounter Optimization Guide (Coming Soon)!


leaving the below here for now while i edit other stuff.

- - -

## Dungeons and Leveling

**Keeping Aggro**\
Turn on Iron Will and never turn it off. As long as you keep hitting the mobs, you will have aggro on them. In multi-target situations, use AoE so that you can keep aggro on all mobs.

**Pulling Mobs**\
There are a variety of ways to ensure you pull all of the mobs in a pack quickly and reliably, without stopping on your way to the next pack of mobs:

* Run up to the mobs so they see and run to you and hit an AoE combo GCD once they are in range to secure aggro.
* Tab through the mobs and use Shield Lob while weaving any damaging oGCDs or Provoke.

Try to position the mobs so that they are in a tight clump: this lets you, your dps, and your healers use their AoE damage more effectively. Pull melee enemies onto ranged enemies so that the ranged enemies are also in the clump. Alternatively, drag mobs around a corner so the ranged enemies are forced to run next to you in order to attack.

**Mitigation**\
Cycle through your mitigation on trash pulls (they hurt more than bosses). Rather than using all your mitigation at once, keeping something up at all times can help your healer keep you alive more easily. More powerful mitigation cooldowns like Rampart, Sentinel, and Arm's Length can be paired with weaker ones like Reprisal or Sheltron.

Hallowed Ground is your most powerful dungeon cooldown and should be used proactively where you expect to be taking the most damage, rather than saving it for emergencies. Aim to get at least 2 uses of Hallowed Ground in a single dungeon.

**Rotation**\
With Holy Circle unlocked, open trash pulls with Requiescat into Holy Circles + Confiteor, then spam Prominence combo under Fight or Flight and until the next Requiescat. On bosses, follow a normal single target rotation.

*Before Lv. 78:*\
Weave Requiescat late into the GCD to ensure it catches the end of your 5th Holy Spirit or Holy Circle, due to the cast time.

*Before Atonement is unlocked:*\
Replace Atonements in the single target loop with a Royal Authority combo.

*Once Goring Blade is unlocked but before Royal Authority is unlocked:*\
Since the base potency of Goring Blade is higher than that of Rage of Halone, Rage of Halone is not used until Royal Authority is unlocked (one Rage of Halone combo can be optionally used after Fight or Flight to avoid overwriting a buffed DoT with an unbuffed one for a minimal potency gain).

- - -

# Frequently Asked Questions

View more FAQs [on this page](/jobs/tanks/paladin/faq/).

## How do Cover, Divine Veil, and Passage of Arms work?

![](https://xivapi.com/i/002000/002501_hr1.png)\
Covered damage calculations ignore the target completely, and are instead based on your own stats, shields, buffs, debuffs, and cooldowns as if you were the original target, with the exception of Hallowed Ground; Hallowed Ground has no effect on covered damage, but you are still immune to personal damage received by regular means while Hallowed Ground is active.

Any debuffs or knockbacks that would have been inflicted on the covered target are often applied on you instead (if the attack hits the entire raid, whether you get two debuffs/knockbacks or one overwrites the other is entirely up to the mercy of the devs). Some things go through cover, and there is no hard and fast rule to determine what goes through cover. As a general rule, enrage-type damage will go through Cover.

![](https://xivapi.com/i/002000/002508_hr1.png)\
Upon using Divine Veil, you get a buff that has no effect unless you receive a GCD heal within the next 30 seconds. All healing spells with an on-hit potency and fairy Embrace will proc Divine Veil, but oGCD healing abilities will not.

Upon receiving a GCD heal, the initial buff on you is removed and all other party members within a 15y radius get a shield equal to 10% of your maximum HP for 30 seconds. This shield stacks with all other shields and will not be removed by additional healing, despite the misleading tooltip.

Divine Veil does not affect the Paladin directly in any way.

![](https://xivapi.com/i/002000/002515_hr1.png)\
Upon using Passage of Arms, you get a buff that blocks all incoming attacks (similar to Sheltron). This buff ends instantly when you stop channeling the ability. Attacking, moving, or using another ability will interrupt the channel. Most of the time, this part of the ability can be ignored; there is little reason to use Passage instead of Sheltron, and can require tricky timing to cover the desired damage while maintaining GCD uptime.

All other party members in an 8y cone behind you get a buff that reduces their damage taken by 15% for 5 seconds. This buff is applied even if the ability isn't channeled, but its hidden 5 second duration is refreshed whenever the server regen tick occurs while channeling (every three seconds on an independent background timer).

Passage of Arms can be channeled for up to 18 seconds if necessary, granting 20 to 23 seconds of party mitigation, depending on the alignment of the regen tick timer.

Passage of Arms snapshots your position and facing when its effects are applied, regardless of the client animation, which can make it appear to miss the party if you are moving or turning upon use (buffs will be displayed correctly on affected party members).