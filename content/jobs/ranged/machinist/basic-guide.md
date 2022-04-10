---
title: Machinist Basic Guide
card_header_image: /img/jobs/mch/basic.png
authors:
  - dook
  - lynn-nuvestrahl
  - Balance-MCH-Staff
patch: "6.08"
lastmod: 2022-04-09T07:26:36.327Z
changelog:
  - date: 2021-10-25T21:57:19.219Z
    message: Created page
  - date: 2021-12-07T00:19:45.145Z
    message: Updated for Endwalker
  - date: 2022-01-09T08:26:28.226Z
    message: Updated.
---
# Basic Machinist Guide

Welcome to the Basic Machinist Guide! Within this document, you'll find all the information you'll need to play the job well. The links below can be used as teleports to other pages if you need the information while learning the job. Any questions can be directed to the Machinist channels in our Discord.

[Openers ](https://www.thebalanceffxiv.com/jobs/ranged/machinist/openers/)

Advanced Guide (WIP)

[Meld Priority](https://www.thebalanceffxiv.com/jobs/ranged/machinist/) (Listed on the landing page.)

[Gearing](https://www.thebalanceffxiv.com/jobs/ranged/machinist/best-in-slot/)

[Skills Overview](https://www.thebalanceffxiv.com/jobs/ranged/machinist/skills-overview/)

[Frequently Asked Questions](https://www.thebalanceffxiv.com/jobs/ranged/machinist/faq/)

# Job Overview

Machinist is a fast-paced physical ranged job that excels at quick burst damage and has the added benefit of free movement. While the base rotation for this job is somewhat strict, Machinist excels in dumping burst into raid buffs with flexible use of its gauge system. This guide’s aim is to break down the job’s rotation into something easy to digest while providing good practices to follow for overall gameplay.

If you’re new to the job and would just like a basic overview of Machinist during the leveling process, [click here](/jobs/ranged/machinist/leveling-guide/).

## Machinist Heat & Battery Gauge 

Machinist comes with two gauges. The Heat Gauge (top) is used to Hypercharge which costs 50 Heat. The Battery Gauge (bottom) is used to summon your Automaton Queen to fight alongside you for a specified amount of time based on the amount of Battery you had at the time of summoning. You must accrue at least 50 Heat or Battery to use their respective abilities, and neither should be allowed to overcap if possible.

![](https://lh4.googleusercontent.com/QsQSG5c79EfLZe3wXkwZWsagFAlYmyeyZY0wC_ksPDFeXCjSY8Nr8g80biSCUpKrFhZLK1PSJbjY9lvhao3vGgi4mGbZUZCOf7kzXyc8ybUQnO6dPRPtdD5CMEyO5PpBz80hQntS)

# The Two-Minute Loop and Rotational Theory

While reading this guide, the following image can be referenced to get a better grasp of what's being talked about.

![](/img/jobs/mch/mch-ew-rotation.jpg)

The most basic description of the level 90 rotation can be broken down by following these rules:

* Not drifting Drill, Air Anchor, Chainsaw, or Wildfire
* Not overcapping resources. This includes Heat, Battery, and Gauss Round / Ricochet charges
* Using your flexible burst inside of raid buffs as much as possible.

The base rotation for Machinist revolves around two minute windows starting and ending with Wildfire application. Wildfire and Barrel Stabilizer are outliers in our kit as the cooldown does not scale with skill speed. While Heat and Battery will not loop perfectly due to differing Hypercharge windows in these segments, Wildfire can still be used as a landmark in the rotation for tracking other cooldowns in our kit, mechanics or even just used to help reset our rotation in case mistakes were made with some of the more strict timers.

In between your burst windows, you will default to pressing your combo actions (Heated Split Shot, Heated Slug Shot, and Heated Clean Shot) in order to build resource gauge and maintain uptime on the enemy while also ensuring your Multi-Tool actions (Drill, Air Anchor, and Chain Saw) are used immediately as they are available.

![](/img/jobs/mch/2022-01-03_16-03-43-500_okamiazure.png)

## Piecing Together The Multi-Tool and Heat System

As of 6.0, the timer before combo actions break has been increased to 30 seconds. Prior to Endwalker, Machinist required spacing between its burst windows to allow the combo to continue without breaking, working around Hypercharge. That is no longer the case, and while it's still possible to break combo, it requires a very specific string of actions consisting of Air Anchor, two Drills, Chainsaw, and three Hypercharge windows. In a standard burst window with two Hypercharge segments carrying over the Heated combo will not be an issue.

A full segment of Hypercharge is exactly three GCDs worth of time, or 7.5 seconds. Because of this, you should never enter Hypercharge if Chainsaw, Drill or Air Anchor has less than eight seconds on their cooldown timers. Doing so will cause the Chainsaw, Drill or Air Anchor cooldowns to drift, which leads to a loss of DPS and will more than likely cause issues down the line in your rotation when you reach your rotational reset at Wildfire.

One of the themes in our level 90 Generalized Opener is maintaining three GCDs worth of Heated actions in a row. What this does is allow us to replace that three-string segment of Heated actions (Split, Slug, and Clean) with a Hypercharge window and burst even more inside of raid buffs every two minutes. This replacement of Heated actions also allows us one other thing; Using Barrel Stabilizer on cooldown. To avoid overcap it should be used inside of the first Hypercharge segment to prepare for the following Wildfire window. A standard buff window, following the General Raid Opener, can be seen in the reopener section of the Cheat Sheet.

![](/img/jobs/mch/mchrobot.png)

## Automaton Queen and Flexible Burst Usage

The three things that make up Machinist’s flexible burst are the Heat gauge, the Battery gauge, and the charges of Gauss Round Ricochet, and Reassemble. The first rule for these resources is to never allow them to overcap if possible. The second rule is to use as many of them as you can before an encounter ends, preferring to end a fight with these gauges as close to zero as possible.

Automaton Queen is Machinist’s most flexible burst and is also the most powerful of the three. Automaton Queen’s damage scaling is linear to the amount of battery she was summoned at. For every 10 Battery, the summon is worth 260 potency, with Pile Bunker being 65 potency and Crowned Collider being 75 potency per 10 gauge. At maximum Battery, Automaton Queen will last 21s and is worth 2600 potency, with 650 of that coming from Pile Bunker and another 750 coming from Crowned Collider. Below is a chart listing all Battery levels and their information.

| Battery Amount | Battery Timer | Actual Time Active | Punches | Potency Per Battery | Pile Bunker Potency | Crowned Collider Potency | Total Normalized Pet Potency |
| -------------- | ------------- | ------------------ | ------- | ------------------- | ------------------- | ------------------------ | ---------------------------- |
| 50             | 12.5 seconds  | 15.5 seconds       | 5       | 26                  | 325                 | 375                      | 1157                         |
| 60             | 14 seconds    | 17 seconds         | 6       | 26                  | 390                 | 450                      | 1388                         |
| 70             | 15.5 seconds  | 18.5s              | 7       | 26                  | 455                 | 525                      | 1620                         |
| 80             | 17 seconds    | 20 seconds         | 8       | 26                  | 520                 | 600                      | 1851                         |
| 90             | 18.5 seconds  | 21.5 seconds       | 9       | 26                  | 585                 | 675                      | 2082                         |
| 100            | 20.5 seconds  | 23.5 seconds       | 10      | 26                  | 650                 | 750                      | 2314                         |

Queen’s summon should be delayed if scripted downtime is about to happen. Using Overdrive is always a loss and should be avoided unless a fight is ending and you have no other option to get the Pile Bunker and Crowned Collider off. Ultimately, you should be planning your Battery usage in such a way Queen’s finishers go off naturally, and so that you end a fight with as little excess Battery as possible.

While the Heat gauge may not be as flexible as the Battery gauge, there is still some finesse that can be had around its timings to make sure that you get the most out of your Hypercharge windows. Hypercharge windows can be chained together, but require a single GCD in between each window. Not only is this a good way to avoid overcapping heat during certain parts of the rotation, but it is also an excellent way of making the most out of raid buffs that may be lingering longer than a full Hypercharge window.

Reassemble comes on a charge system, stacking up to two charges. Since Drill, Air Anchor and Chainsaw are all the same potency and Reassemble is no longer on a strict timer, we can place Reassemble on any three of these GCDs depending on our opening alignment, the raid buffs we have in our party, down time, and kill time. 

![](/img/jobs/mch/2022-01-03_15-35-21-553_okaminightlight.png)

## Multi-Target Rotation and Optimization

The basic AoE priority is as follows:

**Two Targets**

* The Heated Combo is a gain over Scattergun
* Heat Blast should still be used over Auto-Crossbow
* Bioblaster is a gain over Drill as long as the entire duration of the DoT will tick
* Reassemble priority is on Chainsaw

**Three Targets**

* Flamethrower > Scattergun 
* Auto-Crossbow becomes a gain over Heat Blast while in Hypercharge

**4-6 Targets**

* Reassemble priority after Chainsaw is Scattergun, overcoming Drill and Air Anchor

**7+ Targets**

* Same as above, except you should delay Air Anchor until there’s less enemies.

If making the choice between what to Reassemble between Drill, Chainsaw, and Air Anchor on 2 target fights, Chainsaw should be what’s chosen, followed by Air Anchor as a second choice. You’ll never be forced to use Reassemble on Drill anymore when at 90.

Auto Crossbow should only be used on three or more enemies since, unlike Heat Blast, Auto Crossbow does not generate Gauss Round or Ricochet charges.

As far as Flamethrower is concerned, it’s equal in potency to a 3-target rotation using Auto Crossbow. The graph below shows a side by side comparison of Flamethrower and Auto Crossbow.

![](/img/jobs/mch/mch-heat-vs-ft.png)

There are some niche cases where Flamethrower is a small gain on two targets but it’s heavily reliant upon phasing and current Heat and Battery gauge levels. Two target Flamethrower is something that needs to be mapped out on a per-fight-basis and should not be the standard. 

# Gearing and Stat Allocation

As far as stats are concerned, the priority is as follows:\
\
Weapon Damage > Dexterity > Critical Hit > Determination > Direct Hit > Skill speed

The reasoning for determination being higher priority than direct hit is how these stats interact with Reassemble and Wildfire. Since Reassemble guarantees a critical/direct hit, it loses any gain from the direct hit stat due to the damage boost of direct hit damage always being 25%. On the opposite end of the spectrum, Wildfire cannot be a critical or direct hit. Both abilities still scale off Determination, which is why Determination is worth more to us.

Potions: Highest Grade of Dexterity available

Food: Listed inside gearing pages

![](/img/jobs/mch/mch-fight-tips.jpg)

# High Ping and What You Can Do About It

You may have noticed parts of the Machinist rotation feeling somewhat unresponsive to your button pushing. This is a common occurrence that can happen for a multitude of reasons, almost always related to poor connection to the server. What you’re experiencing is referred to as “clipping”, due to prolonged animation lock that happens when your ping exceeds the allotted time the game gives you between GCDs to use your oGCDs. Machinist suffers more than most other jobs simply because of the Hypercharge window forcing a 1.5 second GCD and also requiring you to weave between Heat Blasts. There are a few ways to handle this:

* If possible, ensure you are using a wired connection. WiFi can be spotty and result in packet loss.
* If playing on an older computer, lower graphics settings and turn off particle effects to increase your framerate. This only matters when your frame rate is so low that it is visibly affecting your gameplay.
* Utilize a gaming VPN. Occasionally, ISPs will route your connection inefficiently, and a VPN can correct the issue by lowering packet loss and ping, creating a more stable connection to the server. Listed below are VPN options.
* * Mudfish
  * ExitLag
  * WTFast
  * Pingzapper
  * NoPing
  * BattlePing

Mudfish can be configured for FFXIV using [this guide](https://docs.google.com/document/d/1lOrglaY6D1E_LRMUDyQLETNzH-KL4XOSkWYFZJI3OPg/edit). The best VPN for you will differ based on location and ISP. It’s suggested that you try all possible options before deciding on one since they do cost money to use on top of your sub. Most, if not all of these should come with free trials so you can see if they help your connection.

After attempting to fix these issues with the above suggestions, the only thing you can really do without the use of illegal ToS breaking software, is adjust your rotation in a way that won’t have you doing double Hypercharge windows. This lessens the need to weave between Heat Blasts. As long as you’re capable of getting all 6 GCDs in Wildfire while also not overcapping on Gauss Round and Ricochet, you should have no issues playing the job. 

If you’re on a PC, and you’re okay with the morality issues of injection based programs, [QuickLauncher](https://github.com/goatcorp/FFXIVQuickLauncher) has a plug-in called [NoClippy](https://github.com/UnknownX7/NoClippy) that will help your clipping issue. This program will simulate a low ping environment specifically for the animation lock of combat actions. This will not actually lower your ping or make your connection to the servers any more stable than it already is or isn’t. The instructions on how to enable NoClippy are listed on the GitHub page. While I’ve not heard of anyone being punished by Square Enix for using programs like this, the reality of the situation is they could potentially endanger your service account. Please keep this in mind if you decide to use QuickLauncher and any plug-in associated with it.