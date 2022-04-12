---
title: Black Mage Basic Guide
card_header_image: /img/jobs/blm/basic.png
authors:
  - Balance-BLM-Staff
  - rika-vanih
patch: "6.1"
lastmod: 2022-04-12T09:47:09.978Z
changelog:
  - date: 2021-10-26T01:47:44.292Z
    message: Added page
  - date: 2022-01-29T17:09:28.490Z
    message: 6.X Guide initial version
---
# **6.x Standard BLM Guide**

By: Rika Vanih

# **Job Overview**

Black Mage is a caster specializing in high, steady personal damage in place of providing party buffs. The job maintains a cyclical flow of expending MP via long, powerful casts in Astral Fire then swapping to refresh MP in Umbral Ice. While the rotation itself is somewhat simple, utilizing its movement tools and the flexibility built into its rotation to their fullest is key to maintaining uptime and maximizing damage as a Black Mage.

## **Basic Concepts/Resources**

**Astral Fire** grants a damage bonus to all fire-aspected spells while increasing their MP cost. Ice-aspected spells are 0MP cost in Astral Fire and deal less damage. At three stacks of Astral Fire, ice-aspected spell cast times are reduced by half. Astral Fire prevents MP regen, though things which grant MP directly like Manafont and Ethers still work.

![](/img/jobs/blm/AF.png)

**Umbral Ice** grants increased MP refresh, while decreasing the damage of fire-aspected spells. At three stacks of Umbral Ice, ice-aspected spells are zero MP cost, and fire-aspected spell cast times are reduced by half.

![](/img/jobs/blm/UI.png)

**Unaspected Spells** like Foul, Xenoglossy, Paradox, and Scathe do not count as fire-aspected or ice-aspected and so do not gain any damage bonus/penalty from either Astral Fire or Umbral Ice.

**Enochian** provides a personal passive bonus to all damage dealt, and is active while in either Astral Fire or Umbral Ice. It also remains active while swapping between Astral Fire and Umbral ice (even via Transpose), and is only lost upon completely dropping Astral Fire or Umbral Ice.

**Umbral Hearts** are a resource gained from casting Blizzard IV, Freeze (level 58+), or Umbral Soul. One Umbral Heart is consumed with each fire-aspected spell casted in Astral Fire (other than Flare and Despair), negating the increased MP cost. Flare instead will consume all current Umbral Hearts, and reduce the MP cost of the Flare by 1/3. This interaction is not present with Despair, which will use all remaining MP and not consume Umbral Hearts.

**Polyglot** is a resource gained every 30 seconds that Enochian is active. At level 80+, a maximum of two polyglot stacks can be held at a time. If the polyglot timer completes while at maximum stacks, no additional polyglot stack is gained, and the timer restarts at zero again. If Enochian is dropped the polyglot stacks remain, but the timer is reset to zero.

**Paradox** is a new resource and spell available at level 90. When you have the resource, Paradox replaces both Fire and Blizzard on your hotbars. In Astral Fire, it replaces the Fire cast to refresh your Astral Fire timer, and can similarly proc Firestarter. In Umbral Ice, it is a strong instant cast spell. You gain a Paradox marker on your job gauge by doing one of the following:

* Transition from Astral Fire III to Umbral Ice
* Transition from Umbral Ice III with three Umbral Hearts to Astral Fire

## **Job Gauge**

1. Astral Fire/Umbral Ice stacks
2. Duration of Astral Fire/Umbral Ice
3. Umbral Hearts
4. Polyglot stacks
5. Polyglot timer
6. Paradox marker

![](/img/jobs/blm/extendedgauge.png)

![](/img/jobs/blm/simplegauge.png)

## **General Gameplay**

In Astral Fire, the goal is to use all of your MP on Fire IV casts, and end in Despair. However, Fire IV does not refresh the Astral Fire timer, so Paradox is used once in-between the Fire IV spam to maintain Astral Fire.

In Umbral Ice, Blizzard IV is used to obtain three Umbral Hearts (as well as produce a Paradox marker when entering Astral Fire again). Paradox is used here as well, since it is both a strong spell, and helps to guarantee enough time is spent in Umbral Ice to get sufficient MP to sustain the rotation.

In either stance, keeping the Thunder III DoT up is important, as well as utilizing polyglot stacks for Xenoglossy for movement/weaving/damage as needed.

# **Opener**

## **Fire III Opener**

![](/img/jobs/blm/BLM_ew_opener.png)

The standard opener for BLM. Sharpcast used around 12 seconds prepull (though using it earlier or later than that will generally be fine), with the initial Fire III starting around 3-4 seconds prepull (to land at the same time the boss is pulled).

Note that the initial Triplecast is intentionally clipped in this opener, to allow for weaving opportunities. The Xenoglossy and Thundercloud proc at the end of the opener are used to catch the potion and other raid buffs before they fall off.

When newer to a fight, or otherwise know that Triplecast may be needed for movement within the first minute, it can be useful to push the first Triplecast usage back one GCD and save the extra use, as so:

![](/img/jobs/blm/blm_opener_variant.png)

As long as uses of Triplecast are not missed over the course of a fight from delaying and then holding onto two charges of it for a longer period of time, there is minimal loss in being conservative with Triplecast usage. There is also potential to save the Xenoglossy use near the end of the opener if needed for movement, instead of using it under raid buffs.

# **Single Target Rotation**

## **Rotation Overview**

![](/img/jobs/blm/singletarget.png)

The single target rotation follows after the opener, with the entry point being the Fire III. Pictured above is the standard format for the rotation, which is very similar to the single target rotation from Shadowbringers BLM. The main change is the addition of Paradox, which serves as an additional filler spell for Umbral Ice, as well as replacing the Fire cast in your Astral Fire cycle. We can break this up into Astral Fire and Umbral Ice phases for further explanation.

Note that, while not pictured here, both Thunder III and Xenoglossy are used. Instead of having a set place in the rotation, they are used more specifically when needed. This usage is detailed in the following Xenoglossy and Thunder III sections.

## **Astral Fire Phase**

![](/img/jobs/blm/afphase1.png)

A standard Astral Fire phase begins with Fire III to grant Astral Fire III, followed by six Fire IV casts with a Paradox to refresh your Astral Fire timer, then finally ends in a Despair cast. Typically there will be three Fire IV casts on each side of the Paradox, since it provides the most leeway on the Astral Fire timer. However, even at base spellspeed, there is sufficient time to fit in an extra cast on both sides without dropping Astral Fire. Here is an example with four Fire IV casts on the front half of Astral Fire:

![](/img/jobs/blm/afphase2.png)

This also allows for some flexibility to use other spells as needed, like Thunder III and Xenoglossy, wherever they may be needed. An example:

![](/img/jobs/blm/afphase3.png)

Finally, the Paradox cast has a 40% chance to generate a Firestarter proc for a zero MP, instant Fire III cast. This can be used to help with movement, refreshing your AF timer, or potentially for weaving oGCD abilities. If none of these options are specifically needed, the proc can be used at any point in Astral Fire for damage, or potentially more specifically for small optional optimizations–an example is included within the Basic Optimizations section.

## **Umbral Ice Phase**

![](/img/jobs/blm/uiphase.png)

In order to get enough MP to sustain the standard rotation, two MP ticks are required. For this purpose, at least two spells are needed in Umbral Ice to act as “filler” spells. Therefore, a standard Umbral Ice phase begins with Blizzard III to grant Umbral Ice III, then includes Blizzard IV to obtain three Umbral Hearts and a Paradox to act as a filler spell (which is also overall a strong cast). Optionally/situationally, Thunder III and Xenoglossy may also be used in Umbral Ice if needed. However even they are, you will still want to use both Blizzard IV and Paradox–there is no issue or loss with using additional casts as needed in Umbral Ice.

## **Xenoglossy**

With Paradox available in Umbral Ice for filler, there is full flexibility with both Thunder III and Xenoglossy usage without relying on potentially requiring them for filler. Therefore, they do not have a set place in the rotation, but instead can be moved throughout the rotation wherever they may be needed.

Xenoglossy has use as an instant cast for movement, weaving oGCDs, and just generally is our strongest spell. It is important to not miss out on uses of Xenoglossy, either due to overcapping the polyglot gauge, using Amplifier while already at two stacks, or not using all polyglot stacks before the end of a fight.

## **Thunder III**

For Thunder III, the goal is to maximize uptime on the DoT while minimizing hardcast (non-proc) refreshes. With this in mind, the general recommendation for Thunder III refresh timing is:

* Thundercloud proc: use when the DoT is falling off on the target
* Hardcast Thunder III (non-proc): use just after the DoT has completely fallen off on the target

Since the DoT lasts 30 seconds and the standard rotation is generally slightly longer than 30 seconds, the refresh timing will naturally drift throughout the rotation. Thus, it is generally expected to refresh the DoT in Astral Fire if the DoT falls off of the target at that time.

# **AoE Rotation (3+ targets)**

## **Rotation Overview**

![](/img/jobs/blm/aoephase.png)

The AoE rotation follows a similar flow to the single target rotation. High Blizzard II grants Umbral Ice III, Freeze grants three Umbral Hearts, Thunder IV applies the DoT to all enemies around your target.

Following this, the first High Fire II grants Astral Fire III. The second High Fire II grants the buff “Enhanced Flare” which lasts until Astral Fire ends, increasing the potency of all subsequent Flare casts. It is generally worthwhile to cast a third High Fire II for damage.

Finally, with the single Umbral Heart remaining, the MP cost of Flare is reduced, allowing for the use of a second Flare.

Foul can be used for movement, weaving oGCDs, or just generally as a strong AoE spell.  Consider skipping a High Fire II cast if mobs will die before finishing the second Flare, or when using Triplecast.

Manafont and/or any ether that grants at least 800MP can be used for additional Flare spells before reentering Umbral Ice with High Blizzard II. Pictured is an example utilizing Triplecast, Swiftcast, Manafont, and an ether for four instant Flares within one Astral Fire cycle:

![](/img/jobs/blm/aoevariant.png)

While Paradox will be available with each swap, it will generally be ignored for AoE other than potential for movement, high HP targets, or when there are only two targets remaining.

## **2-Target Situations**

For 2-Target situations, the standard single target rotation is used, with a few adjustments. Use Foul over Xenoglossy for a polyglot spender, and use High Blizzard II/High Fire II instead of Blizzard III/Fire III.

Use Thunder III on each target. Flare can be a gain over Despair if you can make it instant cast (via Swiftcast or Triplecast), even without the Enhanced Flare buff.

# **oGCD Abilities**

Whenever possible, oGCD abilities should be weaved to avoid delays in casting. One oGCD ability can be used after Fire III/High Fire II from Umbral Ice III, and after Blizzard III/High Blizzard II from Astral Fire III. Up to two oGCD abilities can be weaved after instant-cast spells (Xenoglossy/Foul, Paradox in Umbral Ice, Thundercloud/Firestarter procs, or spells made instant via Swiftcast/Triplecast).

In case of emergency to prevent deaths (using Addle/Manaward/panic Aetherial Manipulation), or to keep uptime where it otherwise would not be possible, it situationally can still be good to use oGCD abilities even without weaving them. However, it is recommended to later figure out a better way to deal with the situation without relying on clipping oGCD abilities.

Below are general recommendations for usage of various oGCD abilities for BLM.

## **Ley Lines**

Standing within Ley Lines grants the user the buff Circle of Power, reducing the cast time and recast time of all spells. Since Ley Lines affects all GCDs and lasts for 30s, it does not need to be specifically lined up for use in Astral Fire, but instead should generally be used off cooldown at the next available weaving window.

Fight-specific mechanics/timings may warrant specific positioning or potentially small delays in order to maximize overall uptime within Ley Lines.

## **Triplecast/Swiftcast**

Using Triplecast and Swiftcast on spells that are longer than base GCD (notably Fire IV, Despair, High Fire II, and Flare) will instead make them instant, saving a small amount of time and eventually resulting in additional casts over the course of a fight. For example, on a Fire IV cast, instead of taking the \~2.8s before starting the following cast, it is instead subject to the base 2.5s GCD, saving \~0.3s. In general, the ideal is to get maximum uses out of Swiftcast, and especially Triplecast, in a fight.

However, these instant casts are also valuable for weaving other oGCD abilities, as well as continuing casting while moving for mechanics. With the ability to hold up to two charges of Triplecast, it can be very beneficial to hold onto one charge if it may be needed for movement, while still being able to avoid missing uses. Being able to keep casting in situations where it would be impossible otherwise provides much more benefit than the time savings from simply making longer casts instant.

## **Sharpcast**

Sharpcast grants a 30s buff. Using Fire (or Paradox in Astral Fire), Thunder, or Scathe will consume this buff and cause the “additional effect” listed on the tooltip to occur, granting a Firestarter proc, Thundercloud proc, or double potency Scathe respectively.

The main recommendation is to use Sharpcast primarily with Thunder. Since the Thunder III DoT lasts 30s, Thundercloud proc lasts 40s, and Sharpcast is on a 30s cooldown, the goal is to refresh the DoT every 30s with a Sharpcasted Thundercloud proc. On average this is the strongest use of Sharpcast.

Occasionally extra effort will be required in order to use Sharpcast on Thunder III without the Astral Fire Paradox consuming it, notably if the DoT is falling off on the second half of Astral Fire. Pictured below are some examples of utilizing the leeway present in Astral Fire to weave Sharpcast and refresh Thunder III without losing any other casts:

![](/img/jobs/blm/sharpthunder1.png)

![](/img/jobs/blm/sharpthunder2.png)

The second charge of Sharpcast allows for one additional usage over the course of the fight, often spent early on with a Paradox in Astral Fire for a Firestarter proc. Additionally, the average difference between Sharpcast on Paradox vs Thunder III is relatively small so if the Firestarter proc may be situationally beneficial (or if the Thunder III DoT will fall off for multiple GCDs in order to use Sharpcast with it) it may be better to Sharpcast Paradox instead.

## **Miscellaneous**

Manafont: for single target, Manafont is weaved after a Despair, for use on an additional Fire IV and Despair. It can be a strong consideration to weave Triplecast near the end of an Astral Fire phase for use alongside Manafont for instant Fire IV + 2x Despair, like so:

![](/img/jobs/blm/manafont.png)

For AoE, Manafont can be used for a third Flare before the High Blizzard II.

**Amplifier**: used roughly on cooldown, as long as it will not overcap the polyglot gauge and waste a stack.

**Aetherial Manipulation**: movement tool used when a party member is in a position to move to, in order to reposition for a mechanic or whatever else may be required. Mostly useful when the distance required to travel is larger than a slidecast or current available movement tools will allow for.

**Manaward**: solid personal shield which can be used proactively to help with mitigation, or reactively if needed to survive a mechanic.

**Transpose**: used primarily when bosses become untargetable/die while in Astral Fire, in order to swap to Umbral Ice to allow use of Umbral Soul . Can also be used in the case of larger mistakes where Astral Fire will drop otherwise, to swap to Umbral Ice and maintain Enochian. There is also potential for use in small optional optimizations–a simple example is listed in the Basic Optimizations section.

**Addle**: used to lower damage dealt by the target, more effective on magic-based damage. Consider planning uses in a static environment, otherwise use when available to help mitigate raidwide damage.

**Surecast**: used to nullify knockback/draw-in effects in order to help keep uptime

**Lucid Dreaming**: Astral Fire prevents MP refresh effects like Lucid Dreaming, and Umbral Ice III grants enough MP without the aid of Lucid Dreaming to sustain the rotation. Other than some more niche advanced optimizations, Lucid Dreaming will generally not be used.

# **Recovery Options**

Inevitably when learning a fight (and the job itself), there will be situations where maintaining the rotation perfectly will not be possible. In these cases, learning how best to maintain Astral Fire, or how to recover in cases where it is dropped completely, is important.

## **Maintaining Astral Fire/Umbral Ice**

The most common situation to encounter is running out of time on the Astral Fire timer. In order to try to prevent dropping Astral Fire entirely, there are a few options to consider:

![](/img/jobs/blm/b1recovery.png)

* Pre-emptively using Sharpcast on the Astral Fire Paradox, then using the Firestarter proc to later refresh the Astral Fire timer to make it possible to finish the phase without losing any Fire IV casts or the Despair cast
* Using Triplecast and/or Swiftcast in order to speed up the Astral Fire phase, making Fire IV casts and potentially the Despair instant. Since instant Despair refreshes Astral Fire sooner than a casted Despair, this will sometimes allow for finishing the phase properly.
* If other options are not available, using Despair early to prematurely end the phase will generally be stronger than casting Fire to refresh the Astral Fire timer, then finishing off the phase

If all else fails, attempt to salvage things by using Blizzard III prematurely, or as a last ditch effort, use Transpose to switch to Umbral Ice and consider the following sequence to recover before returning back to the standard rotation:

Using Transpose to swap from Astral Fire III to Umbral Ice will grant the Paradox. Paradox in Umbral Ice will give another Umbral Ice stack, so only Blizzard is required to build up to Umbral Ice III.

A small note for Umbral Ice – if there is some potential for dropping Umbral Ice during uptime due to using several filler spells or other delays, keep in mind that the Umbral Ice Paradox can be used to refresh the timer.

## **Dropped Astral Fire/Umbral Ice**

If Astral Fire/Umbral Ice are completely dropped, the best course of action generally depends on the amount of MP available. With 2800 MP or more, consider using Fire III into a shortened Astral Fire phase (Fire IV casts until low MP, then Despair). With less than 2800 MP, the better option will generally be to use Blizzard III and restart with the standard rotation.

If Swiftcast or Triplecast are available to make the Fire III/Blizzard III instant, they should generally be used here for recovery.

# **Basic Optimizations**

## **Transpose Usage**

![](/img/jobs/blm/af1f3p.png)

When receiving a Firestarter proc from the Paradox cast in Astral Fire, there is generally a small gain to do the above in order to use the proc in Astral Fire I instead of using Fire III from Umbral Ice III. The empty space designates an additional filler spell (Thundercloud proc or Xenoglossy), which depending on MP tick timing may be necessary to guarantee both MP ticks to get to full since Transpose grants Astral Fire earlier compared to a non-proc Fire III. Weaving Transpose late into the recast timer is recommended as well.

Additionally, since the Firestarter proc applies Astral Fire III at the start of the GCD instead of at the end, the first half of the Astral Fire phase is tighter. Other than having high spell speed and/or using instant casts, this allows for only three Fire IV casts before the Paradox instead of the standard leeway to fit four casts.

There are further optional optimizations utilizing Transpose which are covered separately in the Advanced guide, for both single target and AoE.

## **Optimizing for Downtime/End of Fight**

When approaching downtime or the end of a fight, there are options to consider in order to maximize damage within the time remaining, replacing weaker casts with stronger ones.

Outside of rare exceptions, DoTs do not deal damage during downtime (and of course will not deal damage after the target is dead). Therefore, it can sometimes be a better option to skip refreshing Thunder III before downtime, particularly for a non-Thundercloud refresh, if it will allow for a stronger, more direct damaging spell. For reference, Thundercloud proc needs to result in at least 12 seconds of additional DoT uptime in order to do more damage than a Fire IV.

When unable to finish off a full Astral Fire cycle before downtime, prioritizing ending Astral Fire on Despair, even at the cost of a Fire IV, is a gain. Skipping a Blizzard IV in the last Umbral Ice phase for a shorter Astral Fire phase may also be a consideration depending on when the downtime occurs, since the GCD saved from not casting Blizzard IV may result in a stronger GCD in its place (like Fire IV).

Some other things to consider include:

* Use polyglot stacks as needed before downtime to prevent overcapping before the boss is targetable again. For the end of the fight, ideally use all polyglot stacks, as Xenoglossy is the strongest spell.
* An instant cast frontloads its damage at the start of the GCD, so it is good practice to plan to end on an instant cast before the downtime/end of fight. This can result in a last tap of damage where a normal cast would not have been able to finish otherwise.
* Since Paradox is a strong spell, sometimes it can be valuable to Transpose after a Despair instead of Blizzard III to get a Paradox off before the downtime.

## **Preparing Resources during Downtime**

Typically during downtime, the basic plan is to use Umbral Soul during downtime to build back up to Umbral Ice III with three Umbral Hearts (using Transpose beforehand if in Astral Fire). With a longer amount of downtime (~15s or more), Paradox can be obtained by first building up to Umbral Ice III + three Umbral Hearts, Transposing back into Astral Fire, then Transposing into Umbral Ice again, like so:

![](/img/jobs/blm/downtime.png)

This sequence obtains a Paradox and ends with Umbral Ice II with three Umbral Hearts. Using Paradox when the boss returns will grant Umbral Ice III, otherwise for longer downtime Umbral Soul can be used additional times as needed.

Amplifier can also be used during downtime if it is available, as long as it will not cause the Polyglot gauge to overcap before the boss reappears. Sharpcast can also preemptively be used during downtime if needed–since the buff lasts for 30 seconds, it does not need to be used specifically during uptime as long as it is still active when casting the Thunder III (or Astral Fire Paradox) when the boss is targetable once more.

# **Appendix**

## **Macros**

Since Sprint cannot be properly queued like regular oGCD actions, using a macro to spam the action can help with reliability, with no downside:

```
/merror off
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/ac "Sprint"
/micon "Sprint"
```

![](/img/jobs/blm/sprintmacro.png)

Manually targeting to use Aetherial Manipulation can often result in minor delay due to needing to change targets multiple times. Therefore, a common alternative is to use a mouseover macro for the ability:

```
/merror off
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/micon "Aetherial Manipulation"
```

![](/img/jobs/blm/AMmacro.png)

Hovering over the character model of a party member, or even their name in the party list, and then pressing the macro will use Aetherial Manipulation on them without changing target. If the flexibility for regular targeting is desired, the bottom <mo> or two can be replaced with <t>. There is also the option to replace the <mo> with the number of the slot of a specified party member (i.e. <3>) that may be consistently in a good spot to use Aetherial Manipulation to (though in this case it is recommended to have a regular version of Aetherial Manipulation available for more manual targeting in case another target is situationally preferred).

## **Common Abbreviations**

For this document, full names of spells, buffs, and abilities were used for clarity. However, these are frequently abbreviated in regular discussion. Below are the most common abbreviations for these:

* F1, F2, F3, F4: Fire spells, the number designates the rank (i.e. F1 = Fire, F2 = Fire II, etc)
* B1, B2, B3, B4: Blizzard spells, the number designates the rank (i.e. B1 = Blizzard, B2 = Blizzard II, etc)
* T1, T2, T3, T4: Thunder spells, the number designates the rank (i.e. T1 = Thunder, T2 = Thunder II, etc)
* HF2/HB2: High Fire II, High Blizzard II
* AF1, AF2, AF3: Astral Fire, Astral Fire II, and Astral Fire III respectively
* UI1, UI2, UI3: Umbral Ice, Umbral Ice II, Umbral Ice III respectively
* Eno: Enochian
* Xeno: Xenoglossy
* Para: Paradox
* Amp: Amplifier
* LL: Ley Lines
* Triple: Triplecast
* Sharp: Sharpcast
* Swift: Swiftcast
* AM: Aetherial Manipulation
* BtL: Between the Lines
* Poly: Polyglot
* MF: Manafont
* Lucid: Lucid Dreaming
* SpS/sps: Spellspeed
* Pot: Main stat (Intelligence) potion, current strongest option is HQ Grade 6 Tincture of Intelligence

## **Acknowledgements**

Big thanks to my fellow mentors Fürst Blumier and Tsutsumi Tsumi for their work and support. Thanks to Reina Kousaka as well for his work on the Advanced guide and various recommendations for this one (and his patience while I finish the main guide).

And also to all the various BLM players on the Balance–whether you’re one of the bigger names who help teach others or otherwise just hang out, one of the newer players asking questions to help learn and improve, or anyone in between, know that you’re very much appreciated <3