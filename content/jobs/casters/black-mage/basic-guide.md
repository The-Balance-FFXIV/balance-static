---
title: Black Mage Basic Guide
card_header_image: /img/jobs/blm/basic.png
authors:
  - Balance-BLM-Staff
  - rika-vanih
patch: "7.15"
lastmod: 2024-12-21T04:01:23.607Z
changelog:
  - date: 2021-10-26T01:47:44.292Z
    message: Added page
  - date: 2022-01-29T17:09:28.490Z
    message: 6.X Guide initial version
  - date: 2023-05-28T19:39:48.130Z
    message: 6.4 Adjustments
  - date: 2024-07-13T22:53:02.661Z
    message: Updated for 7.0
  - date: 2024-08-09T00:30:21.569Z
    message: Updated for 7.05
  - date: 2024-12-21T04:01:29.135Z
    message: Updated for 7.15
---
# **7.x Black Mage Guide**

By: Rika Vanih

# **Job Overview**

Black Mage is a caster specializing in high, steady personal damage in place of providing party buffs. The job maintains a cyclical flow of expending MP via long, powerful casts in Astral Fire then swapping to refresh MP in Umbral Ice. While the rotation itself is somewhat simple, utilizing its movement tools and the flexibility built into its rotation to their fullest is key to maintaining uptime and maximizing damage as a Black Mage.

## **Basic Concepts/Resources**

**Astral Fire** grants a damage bonus to all fire-aspected spells while doubling their MP cost. Ice-aspected spells have no MP cost in Astral Fire and deal less damage. At three stacks of Astral Fire, ice-aspected spell cast times are reduced by half. Astral Fire prevents MP regen, though things which grant MP directly like Manafont and Ethers still work.

![](/img/jobs/blm/af-effects.png "Astral Fire Effects")

**<br>Umbral Ice** decreases the damage of fire-aspected spells, and casting ice-aspected spells replenish MP depending on current number of stacks. While in Umbral Ice, ice-aspected spells have no MP cost, and at three stacks of Umbral Ice fire-aspected spell cast times are reduced by half.

![](/img/jobs/blm/ui-effects.png "Umbral Ice Effects")

**<br>Unaspected Spells** like **Foul**, **Xenoglossy**, **Paradox**, and **Scathe** do not count as fire-aspected or ice-aspected and so do not gain any damage bonus/penalty from either Astral Fire or Umbral Ice.

**Enochian** provides a personal passive bonus to all damage dealt, and is active while in either Astral Fire or Umbral Ice. It also remains active while swapping between Astral Fire and Umbral ice (even via **Transpose**), and is only lost upon completely dropping Astral Fire or Umbral Ice.

**Umbral Hearts** are a resource gained from casting **Blizzard IV**, **Freeze** (level 58+), or **Umbral Soul**. One Umbral Heart is consumed with each fire-aspected spell casted in Astral Fire (other than **Flare** and **Despair**), negating the increased MP cost. **Flare** instead will consume all current Umbral Hearts, and reduce the MP cost of the Flare by 1/3. This interaction is not present with **Despair**, which will use all remaining MP and not consume Umbral Hearts.

**Polyglot** is a resource gained every 30 seconds that Enochian is active. At level 80+, a maximum of two polyglot stacks can be held at a time. At level 98+, a maximum of three polyglot stacks can be held at a time. If the polyglot timer completes while at maximum stacks, no additional polyglot stack is gained, and the timer restarts at zero again. If Enochian is dropped the polyglot stacks remain, but the timer is reset to 0.

**Paradox** is a resource and spell available at level 90. When you have the resource, Paradox replaces both **Fire** and **Blizzard** on your hotbars. It is a strong spell that is instant-cast, providing a window for movement/weaving abilities. In Astral Fire, it also generates a guaranteed Firestarter proc. You gain a **Paradox** marker on your job gauge by transitioning from Umbral Ice III with three Umbral Hearts to Astral Fire, as well as from Astral Fire III to Umbral Ice.

**Astral Soul** is a resource available at level 100. Successful casting of **Fire IV** generates one Astral Soul stack, casting **Flare** grants three Astral Soul stacks. Generating the maximum of 6 stacks of Astral Soul allows for the user to cast **Flare Star**. Stacks are consumed upon casting **Flare Star**, and expire upon leaving Astral Fire.

## **Job Gauge**

1. Astral Fire/Umbral Ice stacks
2. Duration of Astral Fire/Umbral Ice
3. Umbral Hearts
4. Polyglot stacks
5. Polyglot timer
6. Paradox marker
7. Astral Soul Stacks

![](/img/jobs/blm/standard-gauge-labels.png "Standard Gauge")

<br>

![](/img/jobs/blm/simple-gauge-labels.png "Simple Gauge")

## **General Gameplay**

In Astral Fire, the goal is to use all of your MP on six **Fire IV** casts and end in **Flare Star** and **Despair**. Somewhere within the phase, **Paradox** should be used for both damage as well as generating a Firestarter proc.

In Umbral Ice, **Blizzard IV** is used to obtain three Umbral Hearts (as well as produce a **Paradox** marker when entering Astral Fire again), as well as refresh MP for the next Astral Fire cycle. The **Paradox** generated upon entering Umbral Ice from Astral Fire III is also used in this phase.

In either stance, keeping the **High Thunder** DoT up is important, as well as utilizing polyglot stacks for **Xenoglossy** for movement/weaving/damage as needed.

# **Opener**

## **Standard 5+7 Opener**

![](/img/jobs/blm/7.1-black-mage-fire-iii-opener.png)

<br>The standard opener for BLM. This opener skips a **Despair** cast pre-**Manafont** as well as a **Paradox** cast post-**Manafont** in order to cast 12 total **Fire IV** casts (5 before and 7 after **Manafont,** thus the name "5+7"), enabling two uses of **Flare Star**.

The initial **Fire III** cast should start around 4 seconds prepull (to land at the same time the boss is pulled). **High Thunder** should be refreshed just before raid buffs are falling off, which may shift depending on spell speed and party buff timing.

Additional notes:

* The second charge of **Ley Lines** can be flexibly used at any point after the opener, with the goal of using it during a window where its full duration can be used.
* **Triplecast** and **Swiftcast** usage is fairly flexible as needed in the opener for movement, but should still ideally be weaved after an instant-cast spell. At very low spell speeds, **Swiftcast** will come off cooldown to be available for the Umbral Ice I **Blizzard III** usage as pictured.
* This opener does not generate a Firestarter proc due to skipping the **Paradox** in Astral Fire. As a result, in order to consistently generate the proc for stronger reentry into Astral Fire III you should continue to use **Paradox** as your first spell in Astral Fire until at least the next **Manafont** cycle.

## **Alternative Single-Target Flare Opener**

![](/img/jobs/blm/7.1-black-mage-fire-iii-opener.png)

<br>This alternative opener leverages **Flare** to generate sufficient Astral Soul stacks for a second **Flare Star** in the opener. The initial **Fire III** cast should start around 4 seconds prepull (to land at the same time the boss is pulled). **High Thunder** should be refreshed just before raid buffs are falling off, which may shift depending on spell speed and party buff timing.\
\
While a minor loss compared to the Standard opener, this opener allows for casting **Paradox** post-**Manafont**. This generates a Firestarter proc for use in the following Astral Fire cycle, allowing for more flexible **Paradox** usage in subsequent cycles compared to the Standard opener.

If you were to use the Standard opener and would want or otherwise need to regain this flexibility by casting **Fire III** from Umbral Ice III instead of the recommended **Astral Fire I** -> **Paradox** -> **Firestarter**, you will lose less from swapping to this Alternative Opener to begin with.

Additional notes:

* The second charge of **Ley Lines** can be flexibly used at any point after the opener, with the goal of using it during a window where its full duration can be used.
* **Triplecast** and **Swiftcast** usage is fairly flexible as needed in the opener for movement, but should still ideally be weaved after an instant-cast spell.
* This opener can sometimes be referred to as "Potato Rotato" as homage to an old Stormblood BLM optimization nicknamed "Potato Rotato", similarly leveraging **Triplecast** for single-target **Flare** and Umbral Ice I **Blizzard III**.

# **Single Target Rotation**

## **Rotation Overview**

![](/img/jobs/blm/7.1-black-mage-single-target-rotation.png "Single Target Rotation")

<br>The standard format for the single target rotation loop is as above. We have some measure of flexibility with reordering these spells, especially due to the removal of Astral Fire/Umbral Ice timers in Patch 7.2, but overall in some order plan to do the following each loop:

* Enter Astral Fire III via Firestarter proc used in Astral Fire I
* Cast six **Fire IV** casts to generate sufficient Astral Soul stacks to cast **Flare Star**
* Use **Paradox** in both Umbral Ice and Astral Fire (generating a Firestarter proc in Astral Fire)
* Cast **Flare Star**
* Cast **Despair** after all of your **Fire IV** and **Paradox** casts
* Enter Umbral Ice III via **Blizzard III** (ideally in Umbral Ice I, made instant via **Swiftcast** or **Triplecast**)
* Cast **Blizzard IV** in Umbral Ice III to get back to full MP

In the situation where you do not have a Firestarter proc from the previous Astral Fire phase when entering a new one, such as after the Standard opener, the **Paradox** should specifically come at the start of Astral Fire:

![](/img/jobs/blm/7.1-black-mage-single-target-rotation.png "Single Target Rotation")

When doing this, you are running on a sort of "Firestarter deficit", needing to continue to generate a new proc at the start of each Astral Fire phase until the following **Manafont** cycle where you can regain flexibility with **Paradox** usage once more.

Separate to the main rotational loop but still important, **High Thunder** should be maintained and **Xenoglossy** should be utilized, as detailed in the following sections.

## **High Thunder**

Replacing the previous Thunder/Thundercloud system in previous expansions is the new Thunderhead system. Thunderhead is granted from gaining Astral Fire or Umbral Ice from either neutral or swapping between the two. The Thunderhead buff lasts for 30 seconds, allowing the user to cast either their single target or AoE Thunder spell and consuming the buff in the process. At level 100, these spells are **High Thunder** and **High Thunder II**, respectively.

In general, the goal for single target is to use **High Thunder** when the DoT is about to fall off (less than 3s remaining on the DoT timer). Since one cycle through Astral Fire and Umbral Ice is longer than 30 seconds, the refresh timing will not have a set place in your rotation, and instead will naturally drift.

A few important notes:

* A large portion of the damage from **High Thunder** comes from the DoT damage, with less on the initial hit compared to procs from last expansion. As a result, letting the DoT fall off for a while and losing DoT ticks or conversely having enough early refreshes to result in an extra refresh is fairly costly and should be generally avoided or otherwise accounted for when making situational decisions.
* While a fresh Thunderhead buff is obtained from every transition between Astral Fire and Umbral Ice, other than potentially for two-target situations it is not expected to use every proc, and instead just focus on refreshing when the DoT is falling off.

## **Xenoglossy**

**Xenoglossy** is a powerful instant-cast spell that can be leveraged for movement or weaving as needed, in Astral Fire and/or Umbral Ice. With the ability to hold a third polyglot stack, it is now even easier to be more flexible with uses, with the potential to save stacks to use with raid buffs. This can be generally good practice, but movement considerations take priority.

# **AoE Rotation (3+ targets)**

## **Rotation Overview**

![](/img/jobs/blm/black-mage-aoe-rotation.png "AoE Rotation")

<br>As adjustments to other elements of the job continue to lower the value of **High Fire II** and especially **High Blizzard II**, it is especially recommended to aim to skip these with **Transpose** whenever possible.

The **Freeze** cast in Umbral Ice I grants sufficient MP to use both **Flare** casts in the following Astral Fire. The filler spells (**Foul**/**High Thunder II**) are used to weave **Transpose**. Prioritize using **High Thunder II** for filler only when the DoT timer is lower to get the most value out of the DoT.

**Manafont** can be used for an additional two **Flare** casts followed by another **Flare Star**. Using any ether that grants at least 800 MP can be used for an additional **Flare** in dungeons and can still be worthwhile even though it will not enable an additional **Flare Star** by itself.

In a situation where you are running low on filler spells or otherwise anticipate a much longer time spent doing AoE, consider the following options to maintain skipping **High Fire II**/**High Blizzard II**:

* Use **Triplecast** to make the **Flare** casts and **Flare Star** instant, avoiding needing an additional filler to **Transpose** afterwards
* Consider using **Paradox** in Umbral Ice for a filler spell, particularly at lower mob counts/if there is a mob with higher HP in the encounter
* Clipping **Transpose** after **Flare Star** is only a small clip and allows for conserving filler spells for Umbral Ice, which is needed to wait out the **Transpose** cooldown



## **2-Target Situations**

For 2-target situations where you are able to hit both targets at the same time, use the AoE rotation, substituting **Freeze** with **Blizzard IV**. **Foul** is now a gain in 2-target situations over **Xenoglossy**.

# **oGCD Abilities**

Whenever possible, oGCD abilities should be weaved to avoid delays in casting. One oGCD ability can be used after **Fire III**/**High Fire II** from Umbral Ice III, and after **Blizzard III**/**High Blizzard II** from Astral Fire III. Up to two oGCD abilities can be weaved after instant-cast spells (**Xenoglossy**/**Foul**, **Paradox**, **High Thunder**/**High Thunder II**, Firestarter procs, or spells made instant via **Swiftcast**/**Triplecast**).

Most spells are now base 2 second cast time with 2.5 second recast time. This is not sufficient to allow for weaving without clipping, but if necessary will only lose a small amount of time.

In case of emergency to prevent deaths (using **Addle**, **Manaward**, or panic **Aetherial Manipulation**) or to keep uptime where it otherwise would not be possible, it situationally can still be good to use oGCD abilities even without weaving them. However, it is recommended to later figure out a better way to deal with the situation without relying on clipping oGCD abilities.

<br>Below are general recommendations for usage of various oGCD abilities for BLM.

## **Ley Lines/Between the Lines/Retrace**

Standing within **Ley Lines** grants the user the buff Circle of Power, reducing both the cast time and recast time of all spells. Since **Ley Lines** affects all GCDs and lasts for 30s, it does not need to be specifically lined up for use in Astral Fire, but instead should generally be used roughly off cooldown at the next available weaving window, with the second charge used when there is a window of time to make use of its full duration. Notably, since the recast time is also reduced for spells used within **Ley Lines**, even instant-cast spells gain value.

Fight-specific mechanics/timings may warrant specific positioning or potentially small delays in order to maximize overall uptime within **Ley Lines**. With the addition of the second charge to the ability with Patch 7.1, minor delays are unlikely to cause drift/missed uses over the course of a fight. In addition, there are some options for flexibility for mechanics without having to delay usage:

1. It can be beneficial to stand at one edge of your **Ley Lines** by default. Many AoEs or other targeted mechanics are not large enough to cover them entirely, so by standing on one edge you may be able to dodge to the opposite edge.
2. If you need to leave your **Ley Lines** for a short time, consider using an instant cast spell within them, moving out to dodge/handle a mechanic, and then use **Between the Lines** to return to them. If you are able to return before your next cast starts, you do not lose any effective uptime.

If you need to move out of your **Ley Lines** for a longer duration, such as a persistent ground AoE lingering where you had initially placed them, you can consider using **Retrace** to reposition them at your new location after moving away, once per **Ley Lines** duration.

## **Triplecast/Swiftcast**

In general, the ideal is to get maximum uses out of **Swiftcast**, and especially **Triplecast**, in a fight. Note that these abilities are not used up on instant cast spells like **Xenoglossy**, **Paradox**, and **High Thunder**. There are a few options for usage of these abilities:

### Movement/Weaving

The instant casts from **Triplecast** and **Swiftcast** are valuable for weaving other oGCD abilities, as well as continuing casting while moving for mechanics. With the ability to hold up to two charges of **Triplecast**, it can be very beneficial to hold onto one charge if it may be needed for movement, while still being able to avoid missing uses. Being able to keep casting in situations where it would be impossible otherwise provides much more benefit than any other option, and should be the primary consideration.

### Gaining Time

Using **Triplecast** and **Swiftcast** on spells that are longer than base GCD (notably **Fire IV**, **Flare Star** and **Flare**) will instead make them instant, saving a small amount of time and eventually resulting in additional casts over the course of a fight. For example, on a **Fire IV** cast, instead of taking the \~2.8s before starting the following cast, it is instead subject to the base 2.5s GCD, saving \~0.3s. Saving time over the course of an encounter will result in additional casts that you would have not gotten otherwise.

### Instant Blizzard III

An additional consideration for **Swiftcast** or **Triplecast** is usage along with Transpose to increase the damage of Blizzard III. When casted in Astral Fire III, Blizzard III takes a 30% damage penalty, so using **Transpose** to enter Umbral Ice before using it removes this penalty. The **Triplecast**/**Swiftcast** makes the **Blizzard III** instant so it is not subject to the otherwise slow cast time in Umbral Ice—without this, it is not worthwhile over just casting the spell in Astral Fire. On average this has similar value to making **Fire IV** instant-cast, and can especially be a solid option especially if you need movement on that GCD or if you can weave a **Triplecast** early to catch a **Fire IV**, **Flare Star**, and the **Blizzard III**:

![](/img/jobs/blm/black-mage-triple-f4-fs-b3.png "Triple Despair FS B3")

## **Manafont**

In Dawntrail, **Manafont** grants full MP and Umbral Hearts, refreshes your Astral Fire timer, and provides both a Thunderhead buff and a **Paradox** marker. Therefore, outside of the opener it should primarily be weaved at the tail end of an Astral Fire phase when it is available, in order to get full value of a second Astral Fire phase along with a second **Flare Star**.

Due to the specific placement in the rotation, **Manafont** will rarely line up to be used strictly on cooldown, often incurring some (often significant) delay in usage. Since it is not a burst cooldown and does not have notable value in lining it up with raid buffs, this drift by itself is often not a large issue. However, if the collective drift over the course of a fight results in missing out on an entire usage, it may be worthwhile to look into options for shifting alignment to be able to get maximum uses out of **Manafont**. This will be expanded upon in the Additional Optimizations section, later likely moved to a separate advanced guide.

## **Miscellaneous**

**Amplifier**: used roughly on cooldown, as long as it will not overcap the Polyglot gauge and waste a stack.

**Aetherial Manipulation**: movement tool used when a party member is in a position to move to, in order to reposition for a mechanic or whatever else may be required. Mostly useful when the distance required to travel is larger than a slidecast or current available movement tools will allow for. Consider using a macro for focus target as listed in the Appendix.

**Manaward**: solid personal shield which can be used proactively to help with mitigation, or reactively if needed to survive a mechanic.

**Transpose**: used primarily when bosses become untargetable/die while in Astral Fire, in order to swap to Umbral Ice to allow use of Umbral Soul . Can also be used in the case of larger mistakes where Astral Fire will drop otherwise, to swap to Umbral Ice and maintain Enochian. Can also be used for some small optimizations for both single target and for AoE.

**Addle**: used to lower damage dealt by the target, more effective on magic-based damage. Consider planning uses in a static environment, otherwise use when available to help mitigate raidwide damage.

**Surecast**: used to nullify knockback/draw-in effects in order to help keep uptime.

**Lucid Dreaming**: Astral Fire prevents MP refresh effects like **Lucid Dreaming**, and using an ice-aspected spell in Umbral Ice III grants full MP. As a result, this ability will generally not be used.

# Downtime and Recovery

Inevitably when learning a fight (and the job itself), there will be situations where maintaining the rotation perfectly will not be possible, or otherwise interrupted by downtime. In these cases, learning how best to either maintain Astral Fire or what to do across the downtime is extremely beneficial.

## Maintaining Astral Fire

With the introduction of **Flare Star**, it is even more important than ever to make sure you complete your entire Astral Fire cycle successfully. While some situations can make it much more difficult of a prospect, there are some good habits to keep in mind to set you up for the highest chance of success:

1. Frontloading your Astral Fire cycle with four **Fire IV** casts before the **Paradox** by default, five if possible (usually facilitated via **Ley Lines** and/or **Triplecast**/**Swiftcast**) provides you much more leeway to work with particularly in the second half of your Astral Fire cycle.
2. Particularly in situations where you need to fit in a **Xenoglossy** use or a High Thunder refresh, consider using **Triplecast**/**Swiftcast** wherever best suited to give yourself sufficient leeway on your Astral Fire timer wherever it may be tighter.
3. As previously mentioned, using your Firestarter procs to re-enter Astral Fire is generally the most optimal usage. However, if you have no other options to complete your Astral Fire cycle without it, using the proc to extend your Astral Fire timer is more valuable if it means finishing your cycle off and getting a **Flare Star** where you would not otherwise.

## Recovery After Panic Transpose

If you are unable to complete your Astral Fire phase properly, including leveraging your tools as above, it is generally preferable to **Transpose** out of Astral Fire instead of letting it drop entirely. In this situation we have a recommended recovery option, named after a nickname of one of the BLM Helpfuls “Geiji”: “Geiji Ice Recovery Line” (commonly referred to as GIRL):

![](/img/jobs/blm/black-mage-geiji-ice-recovery-line.png "Geiji Ice Recovery Line (GIRL)")

Using **Transpose** from Astral Fire grants Umbral Ice I, **Paradox** grants Umbral Ice II. The **Blizzard** cast provides the final stack of Umbral Ice to get back to Umbral Ice III, so we can cast **Blizzard IV** to get to full MP and three Umbral Hearts and resume the rotation as normal from there.

There are additional potential use cases for this line, discussed later in the “Additional Optimizations” section.

## Handling Downtime and End of Fight

Depending on the length and type of downtime, there are a few options to consider for prep before/after downtime.

### Before downtime/end of fight:

1. Other than some rare situations, DoTs do not tick while enemies are untargetable (and of course will not deal damage after the target is dead). Unless the DoT ticks nearly fully, it is often less worthwhile to apply/refresh **High Thunder** before downtimes/end of fight/during short uptime phases.
2. Ensure that you will not overcap on polyglot stacks during downtime, and that you use up all of your stacks before the end of a fight. **Xenoglossy** is the strongest BLM spell, so it is important to not miss any uses.
3. Try to prioritize strong spells before downtime. For example, if you are unable to get both **Despair** and **Flare Star** off right before downtime, the **Flare Star** takes priority.
4. An instant cast frontloads its damage at the start of the GCD, so it is good practice to plan to end on an instant cast before the downtime/end of fight. This can result in a last tap of damage where a normal cast would not have been able to finish otherwise.

### Continuing across/after downtime:

1. For short downtime, try leveraging **Triplecast**/**Swiftcast** to help you finish the rest of your Astral Fire phase when you have uptime again. Otherwise, having a Firestarter proc to use to refresh your timer can have pretty large value in short downtimes.
2. For moderate length downtimes, you will often be able to use **Umbral Soul** to get back to full MP with three Umbral Hearts. If you are going to end the uptime phase in Astral Fire, consider dumping the rest of your MP with **Despair**, then using **Transpose** to enter Umbral Ice before using **Umbral Soul**.
3. For especially long downtime, a Thunderhead buff you may initially obtain may not last long enough. In these cases, you can consider using **Transpose** to head back into Astral Fire, then **Transpose** back into Umbral Ice, using **Umbral Soul** to build back up to Umbral Ice III with three Umbral Hearts before you have uptime again. You will generate a fresh Thunderhead buff with each transition, so you can time this to ensure the proc lasts long enough to reapply immediately when possible. You can also similarly generate a **Paradox** for Umbral Ice by building up to Umbral Ice III with three Umbral Hearts before the first **Transpose**.

![](/img/jobs/blm/black-mage-downtime-thunderhead.png "Downtime Thunderhead")

4. Of note, especially for downtime before AoE in dungeons, you can easily Transpose to Astral Fire after all the mobs are grouped together to apply High Thunder II before continuing on with your Flares/Flare Star.
5. Downtime where you are stunned or are otherwise in a cutscene and unable to use Umbral Soul can be especially problematic, regardless of length. In most cases, try to end up in Umbral Ice for the downtime, via Transpose or otherwise to ensure you do not delay getting at least natural MP refresh from having to wait until your Astral Fire timer expires.

## Dropped Astral Fire/Umbral Ice

**Flare Star** creates extra incentive for a full Astral Fire cycle, and the only way to get much MP back is from casting ice-aspected spells in Umbral Ice. Therefore, most of the time if you do end up dropping Astral Fire/Umbral Ice, your best course of action will be to cast **Blizzard III** (ideally using **Swiftcast** to avoid the long cast time), refresh/apply **High Thunder** if needed, then cast **Blizzard IV** and continue on with a normal Astral Fire cycle.

# **Additional Optimizations**

These sections are more preliminary and will likely be added onto/adjusted with more details/options as time goes on. It is likely some if not all of this will be moved over into an advanced guide.

## Single Target Flare Usage

**Flare** has the unique ability to generate three Astral Soul stacks with a single cast, where otherwise only one stack is generated per **Fire IV** cast for the single target rotation. While the spell itself is relatively weak for single target, there is room for some level of viability for it with regards to alignment as well as for end of fight considerations (to generate a **Flare Star** where you wouldn’t be able to otherwise).

## Early/Late High Thunder Refresh

With most of the **High Thunder** damage on the DoT portion and less on the on-hit, it is generally important to try to aim to refresh when the DoT is falling off (less than 3 seconds remaining).

Refreshing the DoT after it has fallen off, especially for a longer period of time, more directly loses damage that you would get from the DoT ticks otherwise. Refreshing the DoT slightly prematurely, however, really only starts to lose more damage if it causes you to have to spend an extra GCD refreshing the DoT to have the same uptime, or if you end up missing ticks before downtime/end of fight that you would have gotten with regular refresh timing.

On average it will be better to refresh slightly early than let it drop off entirely. However, in either case, it is quite possible to have minimal to no loss from an early/late refresh. In an ideal environment and planned uptime lengths/killtimes/casting timeline, it is viable to quantify loss in alternative refresh timings compared to the gains they may facilitate for things like weaving for AF1 F3P, movement, or whatever else.

In a less controlled environment, it can still situationally be worthwhile to refresh slightly early/late, particularly if it helps keep better uptime on the DoT overall or otherwise helps you from having to sacrifice your rotation later in order to refresh the DoT. To stress again, however, it is important to not overly rely on early/late **High Thunder** refreshes, and they should instead be more considered as a situational alternative to utilize when needed.

## Pre-Manafont Considerations

With **Manafont** now granting full resources including a **Paradox**, normally we will end up with a spare Firestarter proc pre-**Manafont** that we need to burn in Astral Fire III before we generate a new one with the second **Paradox**. While the proc used in Astral Fire III is still fairly solid, it’s not as valuable as it would be otherwise since we cannot use it to enable AF1 F3P.

This can lead way towards justifying an alternative setup pre-**Manafont** that does not generate this Firestarter proc since it is otherwise “wasted” in Astral Fire III, and can also potentially help adjust alignment for an earlier **Manafont** usage.

## Additional GIRL Applications

Beyond simply a recovery option after a panic **Transpose** to prevent dropping Astral Fire, GIRL can be used in place of a regular **Blizzard III** cast. By itself, this is a small potency loss, but there are a few use cases for it which can result in a net gain (typically with a weaved **Transpose** usage):

* Using Transpose at the tail end of an Astral Fire cycle grants Thunderhead a GCD earlier than after casting **Blizzard III**. If this results in gaining a DoT tick due to being able to reapply **High Thunder** a GCD earlier, it can end up being a gain. This situation most likely will come up if you refresh your **High Thunder** DoT at the start of an Astral Fire phase, since the DoT may fall off before you reenter Umbral Ice normally.
* A **Paradox** in raid buffs is significantly stronger than a **Blizzard III** in buffs, particularly if casted in Astral Fire III. If you’re in a situation with one GCD left before raid buffs fall off, with the ability to weave **Transpose** at the tail end of an Astral Fire phase to use **Paradox**, it can be a good consideration.
* **Paradox** provides an additional GCD of movement that **Blizzard III** would not grant by itself. While not a direct gain, this can be used to extend movement by an extra GCD for a small loss. If this results in uptime that you would not get otherwise, it can turn into a gain.

# **Appendix**

## **Macros**

Since **Sprint** cannot be properly queued like regular oGCD actions, using a macro to spam the action can help with reliability, with no downside:

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

Manually targeting to use **Aetherial Manipulation** can often result in minor delay due to needing to change targets multiple times. Therefore, a common alternative is to use a mouseover macro for the ability:

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

Hovering over the character model of a party member, or even their name in the party list, and then pressing the macro will use **Aetherial Manipulation** on them without changing target. If the flexibility for regular targeting is desired, the bottom <mo> or two can be replaced with <t>. There is also the option to replace the <mo> with the number of the slot of a specified party member (i.e. <3>) that may be consistently in a good spot to use **Aetherial Manipulation** to (though in this case it is recommended to have a regular version of **Aetherial Manipulation** available for more manual targeting in case another target is situationally preferred).

## **Common Abbreviations**

For this document, full names of spells, buffs, and abilities were used for clarity. However, these are frequently abbreviated in regular discussion. Below are the most common abbreviations for these:

* F1, F2, F3, F4: Fire spells, the number designates the rank (i.e. F1 = Fire, F2 = Fire II, etc.)
* B1, B2, B3, B4: Blizzard spells, the number designates the rank (i.e. B1 = Blizzard, B2 = Blizzard II, etc.)
* T1, T2, T3, T4: Thunder spells, the number designates the rank (i.e. T1 = Thunder, T2 = Thunder II, etc.)
* HT, HT2: High Thunder and High Thunder II, respectively
* FS: Flare Star
* HF2/HB2: High Fire II, High Blizzard II
* AF1, AF2, AF3: Astral Fire, Astral Fire II, and Astral Fire III respectively
* UI1, UI2, UI3: Umbral Ice, Umbral Ice II, Umbral Ice III respectively
* Eno: Enochian
* Xeno: Xenoglossy
* Para: Paradox
* Amp: Amplifier
* LL: Ley Lines
* Triple: Triplecast
* Swift: Swiftcast
* AM: Aetherial Manipulation
* BtL: Between the Lines
* Poly: Polyglot
* MF: Manafont
* Lucid: Lucid Dreaming
* SpS/sps: Spell Speed
* Pot: Main stat (Intelligence) potion, current strongest option is HQ Grade 2 Gemdraught of Intelligence
* GIRL: Geiji Ice Recovery Line, a recovery option to get back into the regular rotation

## **Acknowledgements**

Big thanks to my fellow mentors Fürst Blumier and Reina Leigh for their work and support, as well as all of the BLM Helpfuls.

And also to all the various BLM players on the Balance–whether you’re one of the bigger names who help teach others or otherwise just hang out, one of the newer players asking questions to help learn and improve, or anyone in between, know that you’re very much appreciated <3