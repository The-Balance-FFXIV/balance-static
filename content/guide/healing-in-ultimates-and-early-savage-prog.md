---
title: Healing in Ultimates and Early Savage Prog
---
# Healing When You Actually Need to Heal

In Ultimates and early Savage prog, healing is significantly different than in an optimized run. It's easy to get so
used to optimized healing, especially if you're doing repetitive parse runs, that you can forget what it feels like to
actually heal. On top of that, especially if you prog relatively fast, you simply won't be in that situation for very
long in Savage fights. Furthermore, the weaker DPS checks in Ultimates can give people the wrong idea about how much
they should be optimizing. You should absolutely still be optimizing your healing, rather than writing it off as
unnecessary.

This guide will go over some of the basics of optimizing your healing during Ultimates. Most of it will also apply to
early Savage prog, since squeezing out that extra DPS can be the difference between an enrage and a kill.

### Stylistic Note

You may see names like "Cure I" or "Medica I" even though the in-game wording is just "Cure" or "Medica". This is done
intentionally in order to more clearly differentiate it from other versions of the spell.

If you see '*' after a potency number, it indicates that the heal in question is a HoT. The two things to note here are
that you will lose some efficiency if you re-up it early, though in some cases this is still okay (especially with
Medica II). The second is that the effective potency will be higher (relative to direct heals) if you have Spell Speed.

![](/img/kait_wynn_1_cropped.jpg)

## Plan With Your Co-Healer

Almost any heal planning guide will be useless if your co-healer is not cooperative. Nobody cares about your parse in an
ultimate. However, it can still be advantageous to kill bosses faster. Thus, you should care the most about maximizing
healer combined DPS. This makes it important to prioritize and plan with your co-healer.

This does not necessarily mean every healer will be doing the same amount of healing. For example, if you could handle a
mechanic with two AST GCD heals, two SGE GCD heals, or one of each, it is most likely better for the AST to pick up both
heals, since AST loses less damage output if they need to GCD heal.

However, this needs to be balanced against making your co-healer dip into less efficient heals. For example, instead of
a WHM using a Medica II and a Medica I, while the SGE does nothing, you would get slightly higher heal potency out of a
Medica II and a Eukrasian Prognosis.

In addition, you have to consider MP drain. Making one healer do all the GCD healing may lead to them using unrealistic
amounts of mana. While additional piety can cover some amount of increased GCD healing, it is generally not recommended
to place the entire burden on one healer.

None of this works unless you coordinate. If you drop a heal, but your co-healer has to do another GCD heal to
compensate, you may not have actually gained anything. Planning out heals can be as formal or informal as needed -
different things will work best for different groups. Generally, you should start with a plan that works, and optimize
from there. You can experiment with cutting out some heals during raid, but be sure to coordinate with your co-healer so
that you don't both try to cut something out and cause a wipe. After raid hours, be sure to take a look at logs and find
heals that can be cut out, or shift GCD heals around.

## You Will Be Using GCDs To Heal

Once you've been reclearing a raid tier for a while, it's easy to forget about how to optimize GCD heal usage, since
optimization typically involves removing all or nearly all of them. However, once you're thrown into an an ultimate, you
won't just be GCD healing because you're still progging the fight - even an optimized run of an ultimate is going to
involve quite a bit of GCD healing.

### GCD Shields

Another use of GCD heals is as another layer of mitigation for preventing oneshots. This becomes important, as there are
a significant number of raidwides in ultimates, and even pre-BiS savage, that will oneshot if not mitigated. It can also
be important for LB generation in the level 70 ultimates.

## GCD versus oGCD planning

In optimized savage gameplay, you would reach for oGCDs before GCDs.

In ultimates, you will not be able to heal using only oGCDs. In addition, there may be heal checks where you need to use
both GCDs and oGCDs. This means that planning heals is more important, as using oGCDs prematurely may leave you without
the healing or mitigation tools you need for a heal check.

## GCD Priority

Not every GCD heal is equally effective. You should map out how much healing potency your GCDs provide, as well as those
of your co-healer. You'll also want to look at your offensive GCDs to get an idea of opportunity cost. Your goal is
still to lose as little damage as possible. You may also be surprised at what certain AoE heals are capable of, even
when only one or two targets needs healing.

Let's take White Mage for example:

For single-target healing, our GCD priority would look something like this:

1. Regen (1500p*)
2. Medica II (1000p*, but costs more mana)
3. Cure II/Afflatus Solace (800p)
4. Cure I (500p, only applicable if on low mana)

For multi-target healing, the priority would look like:

1. Medica II (1000p*)
2. Cure III (600p*)
3. Medica I/Afflatus Rapture (400p)

It might surprise you that Medica II is actually your second most powerful *single-target* heal - however, you need to
take the mana cost into account.

## Combining GCDs and oGCDs

Under most circumstances, oGCDs strictly take priority over GCD heals. In Ultimates and prog scenarios, this is not
necessarily the case. There will be scenarios where you *would* use a GCD in order to conserve an oGCD. Consider a
mechanic where there is so much damage that you need both a GCD heal and an oGCD - if you spend the oGCDs, you won't
have them when you need them. Such scenarios are very rare in optimized Savage encounters, so this may seem
contradictory with general healing advice.

![](/img/morgan_wynn_edited.jpg)

### Don't "Focus One Tank"

Two of the three ultimates have phases where both tanks will need to be actively healed. Often times, newer healers will
fall into the trap of each healer focusing on one tank. This is highly inefficient and does not make it easier to heal.

This applies to all of the healers. With our White Mage example, our best two-target heal is Medica II, for 2000p. Next
up would be a regen on both tanks, for another 1500p each. This brings us to a total of 5000p over time, while spending
only three GCDs. Finally, if even more healing is needed, and the tanks are stacked, a single Cure III will deliver
another 1200p.

However, if you were to instead primarily focus one tank, you'd need to dip into less efficient heals. Cure II would
only deliver 800p per cast - far less efficient. Your co-healer would also suffer from a loss of efficiency, making it
even more difficult to keep the tanks alive.

Take Scholar as another example. For two target scenarios, both Succor (2x520p) and Adloquium (1380p for a crit, 840p
otherwise) are great options. If you needed ridiculous amounts of tank healing, you could use Adloquium, alternating
targets on each cast. Since you're not healing the same tank every GCD, this gives the shield more time to be absorbed.
However, if you were to focus all of your GCD heals on one tank, there likely would not be enough time for the shield to
be fully consumed, meaning you'd have to use Physick between casts of Adloquium. This kills your healing efficiency,
because Physick has a pitiful 450 potency.

### Downtime

During hard downtime (i.e. boss not targetable), priority goes out the window. Feel free to use Cure I and similar
spells, as it will save you mana and doesn't carry any of the usual disadvantages in such a scenario.

## Mana Management

### Piety

You'll likely need more than base piety for ultimates. Don't overestimate the damage loss from grabbing piety. In
addition, some of the tips in this guide encourage using heals that put out more healing, at the cost of mana (e.g.
Medica II or Adloquium). It is better to get more piety than to lean on "Mana Saving" abilities like Cure I or Physick.

### Lucid Dreaming

Don't sleep on Lucid Dreaming. You'll typically be using it immediately when it comes off cooldown. In its current
version, it offers 3850 MP per use. You cannot ignore it, or you will run out of mana.

### MP-Efficient Heals

If you find yourself needing to use GCD heals which are MP-efficient but not GCD-efficient (such as Cure I, Prognosis,
or Physick), you should re-evaluate your heal plan and piety level. It's not the end of the world if you need to use it
in an emergency (though ideally you'd still want a bit of a buffer), but you should not plan to use these.

### Mana Potions

It is okay to hold off on using damage potions (Tinctures) in favor of MP potions such as Super-Ethers. This is
particularly useful after dying and other exceptional circumstances. If you frequently find yourself needing more MP
under normal circumstances, you need more piety.

## Optimize As You Go

When you see a new mechanic, start out by healing it in a very safe manner. Start cutting heals out once you're
comfortable with resolving the mechanic. It will take you a while to prog an ultimate, so there's plenty of time to
optimize earlier mechanics that you've progged past already. However, don't get too comfy - you may have to replan a bit
if it turns out that the *next* mechanic is going to require more cooldowns than you had planned for.

![](/img/kait_wynn_2_edited.jpg)

## Credits

Guide written by Wynn, with help from Morgan and other balance mentors and helpfuls. Photos courtesy of Thea Sealticge
(Siren) and Morgan.