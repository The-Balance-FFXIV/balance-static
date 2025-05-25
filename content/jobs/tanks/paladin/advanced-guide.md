---
title: Paladin Advanced Guide
card_header_image: /img/jobs/pld/advanced.png
authors: []
patch: "7.2"
lastmod: 2024-07-14T01:05:24.234Z
changelog:
  - date: 2021-10-27T17:21:01.212Z
    message: Created
  - date: 2022-09-19T01:41:13.642Z
    message: Updated for 6.2
  - date: 2024-01-18T07:24:50.874Z
    message: Removed out-of-date guide
  - date: 2024-07-14T01:05:12.292Z
    message: Reviewed and updated for 7.0
---
# PALADIN IN DAWNTRAIL

Ever since Paladin was reworked in Endwalker Patch 6.3, it has become a job that boasts flexibility and utility to a degree that most other tanks cannot match. Due to Oath Gauge being entirely defensive focused, with the addition of a second party-wide mitigation tool, Paladin has a clear focus on being the shield of the party. Despite this, our offense does not suffer. Paladin offers high burst damage and a cooldown-focused rotation, allowing techniques to be both flexible and applicable to many scenarios. In this guide, I’ll go over general optimizations that exist, as well as how to apply them to real encounters.

# HARDCASTED HOLY SPIRIT

On paper, hardcasting a Holy Spirit is a strict potency loss. Our average filler combo GCD is 430 potency per GCD*, and each hardcast only deals 370 potency, due to the one second cast time costing us one second of auto-attacks. Despite this, there are still several applications in which hardcasting a Holy Spirit is worthwhile, ranging from fairly broad situations you may encounter frequently, to more niche applications that may only pop up occasionally.

So, what does hardcasting actually do? When you hardcast a Holy Spirit, you are using a ranged, non-combo GCD, that does not break combo. What this means is that ALL your future combo actions will be delayed by a GCD for the rest of the encounter. How can we use this to our advantage?

The most common use for hardcasting is replacing a Fast Blade, Riot Blade, or full Royal Authority combo at the very end of a fixed length of time. Replacing these actions is a potency gain only if you cannot use any resources gained by that full Royal Authority combo. If the boss would become untargetable, and we are consistently ending on any part of the Royal Authority combo, we may insert hardcasted Holy Spirits at any point before the phase ends to push those actions later, and out of the uptime phase entirely.

For example, if you were to end a phase after using Royal Authority, and you are unable to use Atonement or Divine Might Holy Spirit when a target returns, you could instead hardcast three Holy Spirits at any point beforehand. Where you choose to place these extra Holy Spirits is more dependant on fight circumstances, but some common places you could choose to place a hardcast are as follows:

1. If you are required to leave melee range earlier in the encounter, you could opt to hardcast at range.
2. You may hardcast to delay potentially stronger filler GCDs into an upcoming Fight or Flight window.
3. To delay when your next combo action is used, to carry combo through a downtime segment of 29 seconds or less, where doing anything else would force a combo break.

Other circumstances where hardcasting a Holy Spirit exist, but are much less common and are not worth mentioning in this guide due to how fight-specific and niche they are. For encounter-specific information, check The Balance Discord’s encounter channels.

# BLADE OF HONOR SMUGGLING

Dawntrail has continued Endwalker’s trend of emphasizing the even-minute burst window. Normally, we would not have anything to save for even-minute windows, however by delaying Blade of Valor for as long as possible, and doing the same with Blade of Honor, we can contribute to party buffs more than we’d be able to normally. This is Blade of Honor smuggling.

It’s worth noting that this is worse for your own personal damage on FFLogs, or rDPS. This is because we are strictly lowering the potency of our odd-minute Fight or Flight windows, and whether or not we gain enough back by placing Valor within party buffs depends on our party composition. As tanks, our rDPS does not include damage we gain from placing skills within party buffs, so we strictly lose damage if attempting to optimize for rDPS. However, aDPS does include damage we gain from placing skills within party buffs, so this technique is best used when attempting to optimize your aDPS, or for speedruns.

To smuggle a Blade of Honor, you must enter Fight or Flight with a very specific setup:

* Imperator should be used a full GCD after Fight or Flight. While this isn’t strictly necessary, it gives the user a little bit of wiggle room, and tiny mistakes like clipping won’t cause you to entirely drop Honor.
* Royal Authority must be used within Fight or Flight, but cannot be the first filler GCD used.
* Four filler GCDs must be used before using Confiteor.
* All resources (Atonement and its followup actions, Divine Might Holy Spirit) must be used after fight or flight is over to stall Blade of Valor as long as possible without breaking combo.

There are two ways to go about smuggling Blade of Honor into party buffs. The first is to simply insert smuggled Blades of Honor into your standard rotation, when it’s possible you do it, and when it isn’t, you don’t. The second is to force a two-minute loop by inserting hardcasts into your standard rotation. 

## Natural Loop

As stated above, this is simply inserting smuggle windows into your standard rotation whenever possible. To determine when it is possible, I have created a spreadsheet of Paladin’s natural 7-minute loop, which due to being an odd number, brings it to a 14-minute loop when we consider smuggling Blade of Honor.

![](/img/jobs/pld/smuggle14.png)

(talk more in detail about this lmoa)

## Forced two-minute loop

When we look at all possible smuggle windows above, we can see that only the nine-minute window doesn’t use any weak filler GCDs at all, compared to both the one-minute and five-minute window forced to use one or both of Fast Blade and Riot Blade to make it work. If we insert hardcasted Holy Spirits into our rotation, we can force the 9-minute window into the 10-minute burst every single time.

![](/img/jobs/pld/smuggle2.png)

(more detail more detail)

# FIXED TIMELINES

Use this section to talk about squeezing the most out of a known timeline. Talk about application delay and flexible Fight or Flight timing (as the previous guide had sections for), with the focus on teaching the reader how to create their own optimized windows.

# CLEMENCY

(maybe merge this section with cover too)
Discuss Clemency’s use in a prog setting as well as an optimized damage-focused environment. For prog, hammer home how damage does not matter for a while, and encourage readers to work with their healers to use Clemency to ease some burden early on. For an optimized damage-focused setting, discuss using it to allow healers more leeway during downtime mechanics. This section doesn’t have to be super in-depth, but I’d like to include it.

# COVER

Discuss Cover’s usage in both a progression setting and a more optimized setting, its relationship with other gauge cooldowns, and how you can and should be using the skill in multiple different examples. This section will probably include the most math to attempt to convince the reader that this skill is worth using more than most people would have you believe.