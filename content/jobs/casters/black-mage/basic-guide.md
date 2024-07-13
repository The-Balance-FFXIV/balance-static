---
title: Black Mage Basic Guide
card_header_image: /img/jobs/blm/basic.png
authors:
  - Balance-BLM-Staff
  - rika-vanih
patch: "7.0"
lastmod: 2024-07-13T22:52:59.125Z
changelog:
  - date: 2021-10-26T01:47:44.292Z
    message: Added page
  - date: 2022-01-29T17:09:28.490Z
    message: 6.X Guide initial version
  - date: 2023-05-28T19:39:48.130Z
    message: 6.4 Adjustments
  - date: 2024-07-13T22:53:02.661Z
    message: Updated for 7.0
---
# **7.x Black Mage Guide**

By: Rika Vanih

# **Job Overview**

Black Mage is a caster specializing in high, steady personal damage in place of providing party buffs. The job maintains a cyclical flow of expending MP via long, powerful casts in Astral Fire then swapping to refresh MP in Umbral Ice. While the rotation itself is somewhat simple, utilizing its movement tools and the flexibility built into its rotation to their fullest is key to maintaining uptime and maximizing damage as a Black Mage.

## **Basic Concepts/Resources**

**Astral Fire** grants a damage bonus to all fire-aspected spells while doubling their MP cost. Ice-aspected spells have no MP cost in Astral Fire and deal less damage. At three stacks of Astral Fire, ice-aspected spell cast times are reduced by half. Astral Fire prevents MP regen, though things which grant MP directly like Manafont and Ethers still work.

![](/img/jobs/blm/af-effects.png "Astral Fire Effects")

**<br />Umbral Ice** decreases the damage of fire-aspected spells, and casting ice-aspected spells replenish MP depending on current number of stacks. While in Umbral Ice, ice-aspected spells have no MP cost, and at three stacks of Umbral Ice fire-aspected spell cast times are reduced by half.

![](/img/jobs/blm/ui-effects.png "Umbral Ice Effects")

**<br />Unaspected Spells** like **Foul**, **Xenoglossy**, **Paradox**, and **Scathe** do not count as fire-aspected or ice-aspected and so do not gain any damage bonus/penalty from either Astral Fire or Umbral Ice.

**Enochian** provides a personal passive bonus to all damage dealt, and is active while in either Astral Fire or Umbral Ice. It also remains active while swapping between Astral Fire and Umbral ice (even via **Transpose**), and is only lost upon completely dropping Astral Fire or Umbral Ice.

**Umbral Hearts** are a resource gained from casting **Blizzard IV**, **Freeze** (level 58+), or **Umbral Soul**. One Umbral Heart is consumed with each fire-aspected spell casted in Astral Fire (other than **Flare** and **Despair**), negating the increased MP cost. **Flare** instead will consume all current Umbral Hearts, and reduce the MP cost of the Flare by 1/3. This interaction is not present with **Despair**, which will use all remaining MP and not consume Umbral Hearts.

**Polyglot** is a resource gained every 30 seconds that Enochian is active. At level 80+, a maximum of two polyglot stacks can be held at a time. At level 98+, a maximum of three polyglot stacks can be held at a time. If the polyglot timer completes while at maximum stacks, no additional polyglot stack is gained, and the timer restarts at zero again. If Enochian is dropped the polyglot stacks remain, but the timer is reset to 0.

**Paradox** is a resource and spell available at level 90. When you have the resource, Paradox replaces **Fire** on your hotbars. As of Dawntrail, **Paradox** can only be used in Astral Fire. It replaces the **Fire** cast to refresh your Astral Fire timer, is instant-cast, and generates a guaranteed Firestarter proc. You gain a **Paradox** marker on your job gauge by transitioning from Umbral Ice III with three Umbral Hearts to Astral Fire.

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

<br />

![](/img/jobs/blm/simple-gauge-labels.png "Simple Gauge")

## **General Gameplay**

In Astral Fire, the goal is to use all of your MP on **Fire IV** casts, and end in **Despair** followed by **Flare Star**. However, **Fire IV** does not refresh the Astral Fire timer, so **Paradox** is used once in between the **Fire IV** spam to maintain Astral Fire.

In Umbral Ice, **Blizzard IV** is used to obtain three Umbral Hearts (as well as produce a **Paradox** marker when entering Astral Fire again), as well as refresh MP for the next Astral Fire cycle.

In either stance, keeping the **High Thunder** DoT up is important, as well as utilizing polyglot stacks for **Xenoglossy** for movement/weaving/damage as needed.

# **Opener**

## **Fire III Opener**

![](/img/jobs/blm/black-mage-tentative-blm-opener.png)

<br />The standard opener for BLM. Note that this opener is tentative, and is likely to change at least slightly depending on exact application timing for raid buffs. This opener has a rough bare minimum GCD (recast) of 2.45s, though most people will likely want some more Spell Speed than this for consistency in execution. If running a slower set and/or otherwise having issues with Astral Fire timing out, consider double weaving **Ley Lines** with the INT pot usage in the opener.

The initial **Fire III** cast should start around 4 seconds prepull (to land at the same time the boss is pulled). The second **Fire IV** is hardcasted with the expectation of raid buffs landing just before the cast goes off.

Additional notes:

* Despite missing out on a second **Flare Star** usage by starting in Astral Fire, it is still generally a gain to do so rather than have to cast relatively weak **Blizzard IV** then **Fire III** in Umbral Ice III. Having a slower start with an Umbral Ice opener will likely also result in pushing some stronger spells out of buffs.

Using Flare for the extra Astral Soul stacks to enable an additional **Flare Star** in the opener before the **Manafont** is not worthwhile. Even if the **Flare** is instant-cast, it is too weak of a spell to justify using it for single-target to use over **Despair**, particularly when considering the lost potency from **Flare** is during raid buffs and the extra **Flare Star** usage occurs after buffs expire.

# **Single Target Rotation**

## **Rotation Overview**

![](/img/jobs/blm/black-mage-single-target-rotation.png "Single Target Rotation")

<br />The standard format for the single target rotation loop is as above, following directly after the second **Despair** in the opener. Both **Xenoglossy** and **High Thunder** have no set place in the rotation, and instead are used as needed. The guaranteed Firestarter proc from **Paradox** has some flexibility in use as well. All of these will be further explained in later sections.

With **Paradox** now being instant-cast in Dawntrail, it is recommended to default to having four **Fire IV** casts before **Paradox**. This provides similar leeway to Endwalker, allowing one extra cast on either half of the Astral Fire cycle. This can be used to shift **Fire IV** casts around and/or use **Xenoglossy**/**High Thunder** as needed anywhere in the cycle.

When possible, it can be advantageous to frontload five **Fire IV** casts before the **Paradox**, giving you even more room in the second half. You will need a bit higher Spell Speed and/or leverage **Triplecast**/**Swiftcast**/**Ley Lines** in order to execute this without dropping Astral Fire. Here is a more extreme example of using two **Xenoglossy** and one **High Thunder** while still being able to complete the full Astral Fire cycle:

![](/img/jobs/blm/black-mage-single-target-rotation-frontloaded-astral-fire-example.png "Single Target Rotation - Frontloaded Astral Fire Example")

## **High Thunder**

Replacing the previous Thunder/Thundercloud system in previous expansions is the new Thunderhead system. Thunderhead is granted from gaining Astral Fire or Umbral Ice from either neutral or swapping between the two. The Thunderhead buff lasts for 30 seconds, allowing the user to cast either their single target or AoE Thunder spell and consuming the buff in the process. At level 100, these spells are **High Thunder** and **High Thunder II**, respectively.

In general, the goal for single target is to use **High Thunder** when the DoT is about to fall off (less than 3s remaining on the DoT timer). Since one cycle through Astral Fire and Umbral Ice is longer than 30 seconds, the refresh timing will not have a set place in your rotation, and instead will naturally drift.

A few important notes:

* A large portion of the damage from **High Thunder** comes from the DoT damage, with less on the initial hit compared to procs from last expansion. As a result, letting the DoT fall off for a while and losing DoT ticks or conversely having enough early refreshes to result in an extra refresh is fairly costly and should be generally avoided or otherwise accounted for when making situational decisions.
* While a fresh Thunderhead buff is obtained from every transition between Astral Fire and Umbral Ice, other than potentially for two-target situations it is not expected to use every proc, and instead just focus on refreshing when the DoT is falling off.

## **Xenoglossy**

**Xenoglossy** is a powerful instant-cast spell that can be leveraged for movement or weaving as needed, in Astral Fire and/or Umbral Ice. With the ability to hold a third polyglot stack, it is now even easier to be more flexible with uses, with the potential to save stacks to use with raid buffs. This can be generally good practice, but movement considerations take priority, as well as ensuring that your Astral Fire timer is not at risk due to using an excess of **Xenoglossy** at a given time.

## **Firestarter**

**Paradox** now grants a guaranteed Firestarter proc upon execution, which allows for a free instant-cast **Fire III**. There are two primary considerations for using Firestarter procs–extending your Astral Fire timer by using the proc in Astral Fire III, or using it to re-enter Astral Fire after the Umbral Ice phase.

### Astral Fire III

Using your Firestarter proc in Astral Fire III, typically referred to as “AF3 F3P”, allows for extra flexibility in your Astral Fire timer, as well as extra mobility. Pictured below is a baseline version of using the proc for this purpose, allowing for the maximum leeway in your Astral Fire timer:

![](/img/jobs/blm/black-mage-firestarter_-astral-fire-iii.png "Firestarter: Astral Fire III")

<br />This is just an example though–as needed, you can easily shift around any of the **Fire IV**/**Paradox** casts then use the Firestarter proc when your Astral Fire timer is getting low. Situationally, if you will not be able to complete all of your six **Fire IV** casts before Astral Fire drops, it will generally be the largest priority to use your Firestarter proc to refresh your timer. Guaranteeing the **Flare Star** is often going to be more important than other potential usage for the Firestarter proc.

### Astral Fire I

Whenever possible, it is generally recommended to carry your Firestarter proc through Umbral Ice and use it when transitioning back into Astral Fire, typically referred to as “AF1 F3P”, as below:

![](/img/jobs/blm/black-mage-firestarter_-astral-fire-i.png "Firestarter: Astral Fire I")

</br >While using the Firestarter proc in Astral Fire III is still a reasonably strong spell, using the proc this way replaces a relatively weak **Fire III** casted in Umbral Ice III with one used in Astral Fire I and as a result provides more of a gain.\
\
This is not without drawbacks though—in order to weave the **Transpose**, it is required to use a “filler spell” (High Thunder or **Xenoglossy**), or less ideally have your **Blizzard IV** be instant-cast via **Swiftcast**/**Triplecast**. Furthermore, it is important to note that the Firestarter proc applies Astral Fire III sooner than a regular cast of **Fire III** would apply it, which will result in a slightly stricter Astral Fire timer to work with.

# **AoE Rotation (3+ targets)**

## **Rotation Overview**

![](/img/jobs/blm/black-mage-aoe-rotation.png "AoE Rotation")

<br />The AoE rotation has a fairly straightforward flow—**High Blizzard II** to enter Umbral Ice III and **Freeze** for 3 Umbral Hearts as well as refilling MP, then **High Fire II** to enter Astral Fire III. Due to the lowered potency compared to Endwalker, it is no longer worthwhile to use **High Fire II** any additional times, and instead use **Flare** twice followed by **Flare Star**.

**Foul** can be used for movement, weaving oGCDs, or just generally as a strong AoE spell. **High Thunder II** should generally be refreshed when the DoT timer is low on the targets (less than 3s remaining), unless the mobs are going to die soon.

**Manafont** can be used for an additional two **Flare** casts followed by another **Flare Star**. Using any ether that grants at least 800 MP can be used for an additional **Flare** in dungeons and can still be worthwhile even though it will not enable an additional **Flare Star** by itself. Leveraging **Swiftcast**/**Triplecast** to make **Flare** and/or **Flare Star** casts instant is very valuable due to their long base cast time.

## **Transpose Optimization**

With the nerf to **High Blizzard II** and **High Fire II**, it is usually beneficial to use Transpose to skip them entirely.

![](/img/jobs/blm/black-mage-aoe-with-transpose.png "AoE with Transpose")

<br />Even at the cost of having only the Astral Fire I bonus on the first **Flare**, it is more worthwhile to skip the **High Fire II** cast. The **Freeze** cast in Umbral Ice I grants enough MP to use both **Flare** casts in the following Astral Fire. The filler spells (**Foul**/**High Thunder II**) are used to weave **Transpose**, though if the **Flare Star** at the end of an Astral Fire cycle is instant via **Swiftcast**/**Triplecast**, the filler after it is unnecessary. Prioritize using **High Thunder II** for filler only when the DoT timer is lower to get the most value out of the DoT.

In a situation where you are running out of filler spells, prioritize using **Transpose** to skip **High Blizzard II** over **High Fire II**, as the latter still provides a damage bonus to the first **Flare**. Clipping **Transpose** can still be a gain over using **High Blizzard II**/**High Fire II**, though note that due to the cooldown of **Transpose** it is not possible to clip twice without waiting or otherwise using a filler spell anyways in Umbral Ice.

## **2-Target Situations**

For 2-target situations, use **High Thunder II** instead of **High Thunder** if you can hit both with it, otherwise DoT one with **High Thunder** and apply it to the other target when you swap between Astral Fire/Umbral Ice naturally in your rotation.

# **oGCD Abilities**

Whenever possible, oGCD abilities should be weaved to avoid delays in casting. One oGCD ability can be used after **Fire III**/**High Fire II** from Umbral Ice III, and after **Blizzard III**/**High Blizzard II** from Astral Fire III. Up to two oGCD abilities can be weaved after instant-cast spells (**Xenoglossy**/**Foul**, **Paradox**, **High Thunder**/**High Thunder II**, Firestarter procs, or spells made instant via **Swiftcast**/**Triplecast**).

In case of emergency to prevent deaths (using **Addle**, **Manaward**, or panic **Aetherial Manipulation**) or to keep uptime where it otherwise would not be possible, it situationally can still be good to use oGCD abilities even without weaving them. However, it is recommended to later figure out a better way to deal with the situation without relying on clipping oGCD abilities.

![](/img/jobs/blm/blmweaving.png)

<br />Below are general recommendations for usage of various oGCD abilities for BLM.

## **Ley Lines/Between the Lines/Retrace**

Standing within **Ley Lines** grants the user the buff Circle of Power, reducing both the cast time and recast time of all spells. Since **Ley Lines** affects all GCDs and lasts for 30s, it does not need to be specifically lined up for use in Astral Fire, but instead should generally be used off cooldown at the next available weaving window. Since the recast time is also reduced for spells used within **Ley Lines**, even instant-cast spells gain value.

Fight-specific mechanics/timings may warrant specific positioning or potentially small delays in order to maximize overall uptime within **Ley Lines**. However, there are some options for flexibility for mechanics without having to delay usage:

1. It can be beneficial to stand at one edge of your **Ley Lines** by default. Many AoEs or other targeted mechanics are not large enough to cover them entirely, so by standing on one edge you may be able to dodge to the opposite edge.
2. If you need to leave your **Ley Lines** for a short time, consider using an instant cast spell within them, moving out to dodge/handle a mechanic, and then use **Between the Lines** to return to them. If you are able to return before your next cast starts, you do not lose any effective uptime.

If you need to move out of your **Ley Lines** for a longer duration, such as a persistent ground AoE lingering where you had initially placed them, you can consider using **Retrace** to reposition them at your new location after moving away, once per **Ley Lines** duration.

## **Triplecast/Swiftcast**

In general, the ideal is to get maximum uses out of **Swiftcast**, and especially **Triplecast**, in a fight. Note that these abilities are not used up on instant cast spells like **Xenoglossy**, **Paradox**, and **High Thunder**. There are a few options for usage of these abilities:

### Movement/Weaving

The instant casts from **Triplecast** and **Swiftcast** are valuable for weaving other oGCD abilities, as well as continuing casting while moving for mechanics. With the ability to hold up to two charges of **Triplecast**, it can be very beneficial to hold onto one charge if it may be needed for movement, while still being able to avoid missing uses. Being able to keep casting in situations where it would be impossible otherwise provides much more benefit than any other option, and should be the primary consideration.

### Gaining Time

Using **Triplecast** and **Swiftcast** on spells that are longer than base GCD (notably **Fire IV**, **Despair**, **Flare Star** and **Flare**) will instead make them instant, saving a small amount of time and eventually resulting in additional casts over the course of a fight. For example, on a **Fire IV** cast, instead of taking the \~2.8s before starting the following cast, it is instead subject to the base 2.5s GCD, saving \~0.3s. Saving time over the course of an encounter will result in additional casts that you would have not gotten otherwise.

### Instant Blizzard III

An additional consideration for **Swiftcast** or **Triplecast** is usage along with Transpose to increase the damage of Blizzard III. When casted in Astral Fire III, Blizzard III takes a 30% damage penalty, so using **Transpose** to enter Umbral Ice before using it removes this penalty. The **Triplecast**/**Swiftcast** makes the **Blizzard III** instant so it is not subject to the otherwise slow cast time in Umbral Ice—without this, it is not worthwhile over just casting the spell in Astral Fire. Gaining time from making **Despair** and **Flare Star** instant is often more valuable than instant **Blizzard III**, but it’s a solid option especially if you need movement on that GCD, and can be especially valuable with a late weaved **Triplecast**:

![](/img/jobs/blm/black-mage-triple-despair-fs-b3.png "Triple Despair FS B3")

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
3. For especially long downtime, a Thunderhead buff you may initially obtain may not last long enough. In these cases, you can consider using **Transpose** to head back into Astral Fire, then **Transpose** back into Umbral Ice, using **Umbral Soul** to build back up to Umbral Ice III with three Umbral Hearts before you have uptime again. You will generate a fresh Thunderhead buff with each transition, so you can time this to ensure the proc lasts long enough to reapply immediately when possible.

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

In a less controlled environment and looking at a more generalized average, it can be worthwhile to refresh even up to around 10 seconds early to facilitate AF1 F3P. This also has the added benefit of not having to refresh in the tighter first half of your Astral Fire phase following the Firestarter proc. To stress again, however, it is important to not overly rely on early **High Thunder** refreshes, and they should instead be more considered as a situational alternative to utilize when needed.

## Pre-Manafont Considerations

With **Manafont** now granting full resources including a **Paradox**, normally we will end up with a spare Firestarter proc pre-**Manafont** that we need to burn in Astral Fire III before we generate a new one with the second **Paradox**. While the proc used in Astral Fire III is still fairly solid, it’s not as valuable as it would be otherwise since we cannot use it to enable AF1 F3P.

This can lead way towards justifying an alternative setup pre-**Manafont** that does not generate this Firestarter proc since it is otherwise “wasted” in Astral Fire III, and can also potentially help adjust alignment for an earlier **Manafont** usage.

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
* Pot: Main stat (Intelligence) potion, current strongest option is HQ Grade 1 Gemdraught of Intelligence

## **Acknowledgements**

Big thanks to my fellow mentors Fürst Blumier and Reina Leigh for their work and support, as well as all of the BLM Helpfuls.

And also to all the various BLM players on the Balance–whether you’re one of the bigger names who help teach others or otherwise just hang out, one of the newer players asking questions to help learn and improve, or anyone in between, know that you’re very much appreciated <3