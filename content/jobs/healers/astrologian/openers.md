---
authors:
  - Balance AST Staff
patch: "5.58"
lastmod: 2021-10-26T20:51:11.063Z
changelog:
  - date: 2021-10-26T20:51:46.607Z
    message: Article Created.
---
# Opener

The most up to date Astrologian opener(s) can always be found in the #ast_resources channel on The Balance Discord. Keep in mind that Astrologian openers are extremely flexible and depend almost entirely on the circumstances of the fight, the timings of the planned raid DPS bursts, and party composition. Any premade Astrologian opener is a generic framework, not a universally optimal opener.

We've taken a lot of care to evaluate as many of the variables as we reasonably can and identify the core methodology of the most statistically successful opener with regard to when most DPS jobs burst the hardest and when other raid buffs should be coming out, assuming everyone is doing a proper opener. The framework is as follows, with the caveat that the card manipulation skills you use (Redraw, Minor Arcana) will depend on what you draw and when.

## Pre-Pull

**Most of this is optional and fight-dependent**, but it is almost always recommended to prep a card 30 seconds pre-pull so that Draw comes back up, place Earthly Star somewhere pre-pull, and use Aspected Benefic, Celestial Intersection, and your Mind Potion/Tincture starting at -5s to lead into your precast Malefic.

* Pre-pull Earthly Star (up to -20s depending on fight; -12s to -8s optimal for damage)
* **\-30 - Draw** (opener assumes you pull with a card in hand and Draw ready)
* \-20 - Nocturnal Sect, Neutral Sect, Horoscope
* **\-12.5 - (Nocturnal) Aspected Helios**
* **\-10 - (Nocturnal) Aspected Benefic, Diurnal Sect**
* \-7.5 - (Diurnal) Aspected Helios
* **\-5 - (Diurnal) Aspected Benefic, (Diurnal) Celestial Intersection**
* **\-3 - Mind Potion**
* **\-1.5 - Malefic precast**

The bolded sections are considered fairly standard. The rest, especially using cooldowns like Neutral Sect and Horoscope pre-pull, are entirely situational depending on whether that much heal/shield prep has any actual value that early in the fight. Realistically, just the regular GCD shields along with Earthly Star are usually overkill for what damage is coming out near the start of the fight. This is just to illustrate some options that you have in the event that there’s a fight that has a large amount of damage coming out in the first 20-30 seconds.

## The Pull

Thanks to the Sleeve Draw rework in Patch 5.3, our opener has never been friendlier. It now follows a straightforward priority system in which you simply use Lightspeed to enable double weaving for card manipulation, put up Combust, and begin playing cards naturally, working your way toward three unique Seals for Divination at a reasonably early time.

This is neatly illustrated by this flowchart, which also displays the probabilities of each potential outcome, depending on how many Redraws it takes to get your second unique Seal before using Sleeve Draw for the final Seal and using Divination at full strength.

For accessibility purposes, here is a text version, excluding most pre-pull actions detailed above:

* **\-30 Draw**
* **\-3 Mind Potion**
* **\-1.5 Precast Malefic**

  * Weave 1 - Lightspeed
* **1 Combust**

  * Weave 1 - Play card from pre-pull
  * Weave 2 - Draw
* **3.4 Malefic**

  * Weave 1 - Play
  * Weave 2 - Sleeve Draw
* **5.8 Malefic**

  * Weave 1 - Play
* **8.2 Malefic**

  * Weave 1 - Divination

This is the basic framework of the opener. If you Draw a duplicate Seal, you simply replace the subsequent oGCD windows with Redraws as many times as necessary until you get a new Seal. Once you have your second Seal, you are free to use Sleeve Draw to guarantee the third Seal, then Play the card and use Divination.

Note that in the scenario above, where no Redraws are required, you could use Divination as early as around six seconds, which may be too early for many party comps, which is why it’s delayed here until the next GCD. This also means that some Redraws are tolerated without delaying Divination from this timing, but even if it is delayed a further GCD to 10.6 seconds, that’s usually fine. The optimal timing will vary depending on your party composition and burst timings.

## Outdated Opener for Posterity

This is the opener from before the 5.3 rework of Sleeve Draw. It is no longer relevant. I am leaving it here as a testament to a fallen behemoth, so that future generations of Astrologians can look back into the abyss at the Lovecraftian nightmare with which we wrestled even in the deepest recesses of our minds, in our waking hours and in the inner sanctuaries of our dreams.

If you ever feel that the modern opener is too complex… Gaze into the abyss herein, and from it, summon your strength. Steel your resolve and steal your determination from its unfathomable depths. Then, walk once more under the light of the heavens, and carry us into a brighter future still.

### The Abyss

This is where things start to look very complicated. It's unrealistic to accurately present how to handle cards in the opener entirely through text, so I've composed a visual representation. Instead of trying to spell out an opener, I'll just explain the principles behind the flowchart so that hopefully you can see the method to the madness.

[Here is a link to the OLD opener flowchart](https://i.imgur.com/4yO9zGZ.png)

The sequence of the opener branches depending on if/when you draw duplicate seals. The guiding principles that determine how the sequence changes are as follows:

I assume you can't realistically evaluate and play multiple immediately consecutive cards, considering what card you drew, whether you need the seal, who doesn't already have a card, and which available recipient makes the best card target. Therefore, the opener attempts as much as possible to avoid having you distribute more than one card in any given double weave (e.g. Play + MA) by spacing them out with a GCD between each card.

If you draw a seal you don't already have, you Play the card on the appropriate target at the earliest opportunity, then watch carefully for what card pops up next and simply try to make a yes/no call on whether you already have that seal. If you already have that seal, then you Redraw at the earliest opportunity, which may be in the same double weave window where you Played the previous card. Again, make a yes/no call on if you got a needed seal from the Redraw. If you did, Play it on an appropriate target at the earliest opportunity.

Sometimes, it'll take more than one try to pull the right seal. When it does, the grouping of oGCDs becomes a concern. Redraw itself has an internal cooldown that makes it impossible to double weave back-to-back Redraws without causing clipping, but that's where the new and improved Minor Arcana comes in. Because you have five total cards to play in the opener, assuming you started the pull with one card prepped and Draw back off cooldown, and Divination only requires three seals, you will generally be using two MAs somewhere in the opener. Now that there's no additional oGCD bloat when using MA, it can be used in the opener as a poor man's Redraw.

You can see in the flowchart how it might be used. On the first split in the chart, if we get unlucky and draw a duplicate seal, we use MA instead of Redraw in order to not push back lSeeve Draw by a GCD, which would severely disrupt the oGCD grouping of the rest of the opener and inevitably delay Divination even further. MA allows us to dump the unwanted seal at this point while preserving the carefully balanced timing of all the cards to follow.

The rest of the time, MA is used as a backup Redraw to be weaved immediately after a Redraw if you find yourself in a situation where you are Redrawing on the first weave space in a double weave window. In these cases, if you Redraw and still don't get the seal you needed, you may use MA to simply push through and force the next card earlier to get another shot at the right seal, rather than waiting until the next GCD to try to Redraw again.

Redraw can't give you the same card you have in hand, so it has slightly better odds than MA, which simply forces the next card and can give you the same card you just had. This is why Redraw is prioritized before MA for fishing for seals, because getting the right seal earlier means you're more likely to finish the entire opener earlier, which is better for rDPS altogether. It's important to keep in mind, however, that you may only use a maximum of two MAs during the opener, because you need 3 seals in order to use Divination at all.

**TL;DR** - Play cards with needed seals, Redraw cards with duplicate seals. If you Redraw into another duplicate seal, you can immediately double weave MA if the oGCD grouping lines up that way. For example:

* Grouping which enables MA usage:

  * Sleeve Draw (bad seal appears) > Malefic > Redraw (bad seal appears) + MA: (bad seal appears) > Malefic > Redraw (good seal appears) + Play
* Grouping which does not enable MA usage:

  * Sleeve Draw (good seal appears) > Malefic > Play (bad seal appears) + Redraw (bad seal appears) > Malefic > Redraw (good seal appears) + Play

<!--EndFragment-->