---
title: Red Mage Advanced Guide
---
# Introduction

This guide will cover some Shadowbringers Red Mage optimization concepts and principles that aren’t covered in the basic job guide. The intended audience include:

* RDM players who have the fundamentals mostly down, but are trying to improve (e.g. go from top 10% to top 1%).
* High performing RDM players who get good logs through good GCD uptime and repetition, but wish to augment their theoretical understanding.
* Players who have experience optimizing other jobs, but are trying out RDM.

Some of the content here will cover concepts that are obvious to people who have experience optimizing other jobs. Other aspects of it will be unique to RDM optimization, or touch on job basics. But overall, this guide is meant to provide you an approach to optimization. In a nutshell: 

**RDM optimization is about:**

* Managing your mana to get as many melee combos as possible within a killtime.
* Getting as much potency value as possible from your several oGCDs.
* Aligning your damage with pots and buffs without harming the above.

**The steps:**

1. Understand how mechanics align when you keep perfect GCD casting uptime. Map out the minimum number of required Swiftcasts for this first.
2. Determine your Embolden, Manafication and Potion timings, which will be heavily influenced by killtime ranges.
3. For fights with phase transitions, count the number of Fleche and Contre Sixte uses you can possibly get per phase.
4. Map out your Engagement/Displacement uses to maximize potency with 4 uses per Manafication cycle. More of these should be Displacement if mechanics, healing and mitigation allows. Note that there are rare instances you can get 4 uses of Corps-a-Corps due to phasing or Manafication holds.
5. Other than mechanics, see if an additional planned Swiftcast will be useful anywhere, e.g. for improving oGCD alignment or weaving opportunities.
6. Consider the very niche optimizations. This includes room for intentional oGCD delays (e.g. for buffs or pots), Enchanted Reprise use when high on mana for weaving or gaining an extra GCD via the 2.2 recast timer, or niche Swiftcast uses for procs.
7. Put your final rotation together.
8. Casting Uptime

The most basic of all. With how Dualcast works, we will spend just under half of the fight standing still casting spells.

In a perfect uptime scenario, if you play consistently, this means you will eventually be able to know if a mechanic comes up mid-cast or during your free movement timing. Situations like early pulling, slightly inconsistent boss mechanic timings (e.g. boss turning shenanigans) or spell speed differences (e.g. 2.48 vs 2.50 in E8S) can often change this.

For optimization, you will want a fight-specific rotation that works for you. Therefore, your first step is to identify where you will need Swiftcast for movement on your BiS spell speed, and to ensure you hold it for that mechanic in future. It is important to cut down “movement” Swiftcasts to a minimum if possible, so you may have to “limit test” certain mechanics and casts.

# Embolden, Manafication and Potion timings

Embolden and Manafication are usually somewhat de-synced in our rotation. With that said, we do want to align our burst under potions and buffs, if it doesn’t cost us a melee combo. We decide when these timings are primarily by:

* Encounter design
* Predicted kill time
* Occasionally team composition

Generally, buff timings are discussed with the group. For simplicity, we can start with a practical example with the door fight of Eden's Promise: Eternity (Savage).

* Two minutes is the Junction Shiva phase. It has a lot of movement, a lot of healing, and melees sometimes need to disengage. This phase resolves at 2:30ish.
* Six minutes is the Lions phase, where it is usually even more inconvenient for buffs and burst damage due to how people are spread. This phase resolves at 6:30ish. Many groups choose to hold their buffs, potions, and re-openers until after this phase resolves.
* Therefore, using 2-minute buffs during Shiva phase (2:10ish) or after it resolves (2:30ish) are both viable, because it doesn’t ultimately delay the 6:30 one after Lions.

This is where Manafication timings come in.

* If you are using buffs on cooldown, you should use the X-8 opener, which makes the 2-minute Manafication come up earlier. You use Manafication on cooldown during Shiva.
* If you are holding buffs for 2:30, you should use the X-10 opener, which generates surplus mana by two minutes, meaning you can hold Manafication at two minutes for mana efficiency. A normal melee combo will align with buffs by 2:30.

Neither of these decisions badly impact a standard double melee combo re-opener at 6:30. The 4:00ish vs 4:30 buff timing doesn’t make a difference because no mechanics are happening in either case. They also don’t meaningfully change your melee combo count within this timeframe. This is an example of shifting your Manafication timing to better align with planned buff timings, without losing a use.

The exception is, of course, top-ranked speedrun groups that kill this boss at around 6:40 or faster. These groups want to use 2-minute buffs closer to 6:00, so 2:30 buffs are not an option.

## Manafication Reminder

Remember that mana does not strictly = DPS. It is only DPS when converted into enchanted melee abilities that would be a DPS gain over Dualcasting (i.e. our melee combo in most situations, Enchanted Moulinet for AOE on 3+ targets, and very rarely Enchanted Reprise). When analyzing mana gains/losses with your Manafication timings, a more practical way to understand it is the number of Dualcasts gained or lost in building up melee combos.

If you Manafication at 40/40, you gain 40/40 mana. This means you casted around four Dualcasts (20 seconds) to build 40/40 mana, assuming procs up. You would normally have to cast four more to build up to a combo, but Manafication doubling your mana from 40/40 to 80/80 cuts that out. You are now “20 seconds ahead” of someone who is purely Dualcasting.

Overcapping simply means you have spent time casting spells that do not contribute to building up a melee combo. The delay may mean you “lose a potential use” of melee combo depending on the killtime (or depending how much you overcap), but there is no innate damage loss.

This clarification is also important to understand why we don’t go out of our way to “dump” mana with Enchanted Reprise. Dumping mana from 60/60 down to 50/50 doesn’t actually help you build up a combo faster. It does the opposite by pushing your Manafication back, while not gaining you any mana in return.

# Team Composition

In an optimized static, you can plan or customize buff timings and loosely predict kill times. You do this by knowing your team raid buff and burst windows. As a recap of the basics, in a fight with a kill time of 7:30:

* RDM, SAM, DNC and NIN will be happy with buffs lining up at 2-minute intervals. Embolden can be used off cooldown at 0-2-4-6.
* But RDM, DRG, BRD and SMN would be better with 0-3-5-7. Their 3-minute buffs (Battle Litany, Battle Voice and Devotion) can sync with the group’s other buffs three times here (0-3-7, missing 5), but only twice in the previous (0-6, missing 2 and 4).

As for your rotation and Manafication timings, you will need to get a feel for the encounter and common killtime ranges to decide what is best. Just remember to avoid significant overcapping, know how different openers affect mana (X-8 surplus at four minutes, X-10 surplus at 2 minutes), and get an idea for how many Scorches you can get by your estimated killtime based on different openers and Manafication holds.

# High Level Considerations: GCD-Perfect Buff and Combo Timings

After deciding where your buff and Manafication timings are, GCD-level precision on Embolden is encouraged. This depends on composition, but you will generally want to align it around where most of the burst is. For simplicity’s sake, we’ll assume a RDM, SAM, DNC, DRG composition, where you generally play around the SAM’s rotation and 2-minute burst.

* Coordinate with your group so that Embolden goes out slightly before Tech Step.
* Have all 2-minute buffs out by the time the Samurai does a double Midare or equivalent burst (this will be fight specific).

In this example in Eden's Verse: Fulmination (Savage), the agreement was “Three GCDs after knockback”, and involved a Samurai doing a custom rotation for 7:10ish killtimes.

![](https://lh5.googleusercontent.com/0ANmrSbfeD6RHPRfIpHumTMQhn1JEjWcgMQgg9TTdC6cQ56uUn9nmWjJVp239QioZGrA6XIzMJj72Tc5Jm6N2_HGyqKeXp0pTvJA6RWmqQLLEE-Gl7jkmnE7DgrE5_UmHbc0hwvi=s0)

As for our own rotation, we generally want to adjust our re-opener, if possible, to catch two Scorches under 20 second buffs, like so:

![](https://lh5.googleusercontent.com/k8CTN5ZrAZRTRJJptejNdZrfi26ORqQRLm3fdVVAWmrXDwbI4RLwovu_MUPTtQUVKhs_sW2n6uRNgwxrcGN8kfHjB7SbYHPD377xx9VUXCm_6NUjQsBAebQTxTK9OGG9uBhwB-2u=s0)![](https://lh4.googleusercontent.com/dOMAV8gTMsNU81lBOAfNwl6ovfe5ngXgEDX_uUKuPnYffCU-wcpevK_zmtZ3BZA-0We_MKWO9hGgL6qxIcMRnPrpUtPN7485kE8ibvqkf9wWWZ8QcYXHXV0hznh_pvEoARUIC6AK=s0)

Note: These numbers are from Eden’s Verse.

# Fleche and Contre Sixte Uses Per Phase

Boss jumps and phasing adds an additional layer of optimization to the job in many respects, but one that requires special attention is the number of Fleche and Contre Sixte uses we can get through a fight. Swiftcast/Enchanted Reprise shift our hardcast and instacast window, so we may have to do certain phases without using them at all to ensure we get the maximum number of uses. It is even possible that we have to change our opener to get all uses.

One prime example of this is Eden's Promise: Anamorphosis (Savage), or E11S.

It is only possible to get five uses of Contre Sixte in the first phase of the fight. But if you use the standard opener (Fleche Embolden first) or drift it due to using Swiftcast/Enchanted Reprise, you will lose one use by the end of the phase. Hence, for this fight in particular, we swap Contre Sixte with Fleche’s place in the opener and hold Swiftcast until the end of the phase.

![](https://lh4.googleusercontent.com/Z-v3SeQR3-glwbKz8CPIjBNA6LcAlkR46DQ0-Og9EEk2wx267CB8ZlBACmKGHp-ZFSAuox5ednHufJ3RY4CYRjzCALCzcUBmBDJHP8EE0Lw5bwP3s77rSABLA4R9ixwA0eZkvP1Y=s0)

While not all fights or phases are as strict as this, there are still a number of examples through the tier where drift within a phase can quickly lead to these abilities coming up just after a phase transition starts. Long phase transitions effectively function as “cooldown resets”. A quick basic recap on how oGCD cooldowns interact with downtime:

* If you use Fleche or Contre Sixte one second before the 40 second phase transition, it will be back up at the start of the next phase.
* If these abilities come off cooldown just after the transition starts, that means you will effectively be sitting on Fleche or Contre Sixte with its cooldown up for almost 40 seconds. Hence, a full lost use.

It is common knowledge that phase transitions benefit SMN when it can cut out filler phases. But phases with frequent transitions that line up with Fleche and Contre Sixte can be beneficial for RDM – effectively starting and ending various phases with Fleche and Contre Sixte uses. This adds up to a lot of free potency over time that we would not have in full uptime scenarios.

To count the number of Fleche or Contre Sixte uses you get per phase, you can start with the timestamp for the first use in the opener, and just spreadsheet which seconds it will come up later. If the first Fleche is used at eight seconds in the opener:

| Fleche use (Seconds) | Timestamp |
| -------------------- | --------- |
| 8                    | 00:08     |
| 33                   | 00:33     |
| 58                   | 00:58     |
| 83                   | 01:23     |
| 108                  | 01:48     |

\
If a phase lasts for 01:50 seconds and only allows for two seconds drift, maybe you should hold Swiftcast all the way. But if it lasts until 01:55? That allows more flexibility for using Swiftcast for damage, mechanics or oGCD alignment. That allows seven seconds of drift.

The basic formula for Excel beginners is to input the number of seconds, then do the previous cell +25 each time (left in the table above). For the encounter timestamp, apply the seconds to time conversion formula (=cell/86400). Then compare it to a mechanics timeline. There are undoubtedly more sophisticated timelines or possible tools for cooldown mapping, but this is something anyone can do in less than 5 minutes.

## Contre Sixte and AoE

Basic reminder that Contre Sixte AOE doesn’t have any damage drop-off, hence it’s worth it to hold it for multiple targets if it will not cost you a use (e.g. UWU opener). In a fight such as TEA, whether or not you will hold it for when Liquid Hand spawns will depend on your killtime and if it will cost you a use.

# Displacement/Engagement Mapping (and Corps-a-Corps?)

This is probably one of the more difficult aspects of RDM optimization, and potentially a bit “controversial”, because it may require healer adjustment and increases the risk of wipes/death for a mere 50 potency gain over Engagement – generally not appropriate in prog or PF reclears.

That said, when used over multiple Manafication cycles, Displacement optimization can amount to hundreds of “free” potency. Many required teammate adjustments come at no actual DPS cost, e.g. AST popping star early or using a spare Essential Dignity, DRK TBN during a raidwide without a tankbuster near. However, this is more suited for optimized environments with healers or tanks you know and can communicate with.

## Basics Recap:

* Manafication is 110 seconds. Engagement/Displacement cooldown is 35 seconds.
* You can get four uses within this time, allowing for five seconds of drift, but need at least one Engagement for weaving reasons.
* Four Engagement (4 x 150 = 600) is equal to three Displacement (3 x 200 = 600) in potency.

The obvious play then, is to try to go for four Engagement but replace as many of those as possible with Displacements (max three, usually two).

We also usually delay Manafication at least once per fight to align with your pot window, allowing us to go for quadruple Displacement (200 x 4 = 800) more comfortably there too. Note that five Engagements (150 x 5 = 750) is weaker than four Displacements, so if you’re going for five uses of these abilities you need at least one Displacement to break even.

Since Displacement is highly influenced by encounter design and mechanics, there is no real shortcut other than doing it yourself and practicing within the raid. It is also tied to GCD alignment, making consistent Swiftcast plans important (covered further below). This is often going to be one of the most time consuming parts of RDM optimization.

Be sure to check the Engagement/Displacement tab on xivanalysis.com when reviewing your log. You can be ambitious and aim for something like this on a fight with natural Manafication delays (from E11S):

![](https://lh4.googleusercontent.com/k55zihkoXKbT_l6Ud7gscr82pMXbdDOIUk1nfz1WhKqvW_11RlxWrlcUsVA53KG7VV8dJQE8NtNglFdSdDthzy0OjIIhv6cm0yBdHrulAp3RCY259cYlI4uSAINSRuToCas7eMP8=s0)

You can also aim for something less ambitious if you need to play a bit safer. But ultimately, for high end optimization, you should be aiming to create Engagement/Displacement plans that get you more than the “base” 600 potency as often as possible.

## Corps-a-Corps?

Corps-a-Corps is quite a forgettable ability in optimization, and we generally just get three uses per 110 second Manafication cycle due to its 40 second cooldown. Nonetheless, remember that there can be opportunities to get a fourth use of Corps-a-Corps when delaying Manafication. Some encounters encourage this too. One example is Oracle of Darkness, where we usually hold Manafication until the “Relativity” mechanic is resolved as shown below.

![](https://lh5.googleusercontent.com/XGUluh7X3h-U76R4FvT9b3q15SOk2JGbT-ZrExW5D4_Kfr_cwMEBcW4SqJxOf5Wf9vBls8EqZR3otPcRFO06sLonqGVuCMN92ilnGsDzHhOujf8792tdDwyb42DK08vQmrAcuMS-=s0)

# Planned Swiftcasts for oGCD Alignment

Given the very precise timing and positioning required for maximizing Displacements, you will find that keeping your GCD alignment and Swiftcast uses consistent every pull is important. Note that “GCD alignment” also includes the exact weave slot you use Engagement when starting a new Manafication cycle. 

If you double weave Manafication into Engagement, your next use will come up during your Dualcast weaving window. If you use it after your first or second melee combo hit (Enchanted Riposte), it will come up mid-hardcast and be delayed slightly. To understand why, think of your entire melee combo as two Dualcasts.

* Enchanted Riposte and Enchanted Zwerchau are both 1.5 seconds each.
* Enchanted Redoublement is 2.2 seconds.
* Verflare/holy is 2.5 seconds.
* Scorch is 2.5 seconds.

For your melee hits, 1.5 + 1.5 + 2.2 = 5.2 seconds (effectively one Dualcast with 0.2 seconds added on). For your finishers, 2.5 + 2.5 = 5 seconds (one Dualcast).

This means if you weave anything after Riposte, Zwerchau or Verflare/holy, the next use will come up mid-hardcast later in your rotation unless you use Swiftcast to switch your alignment. Whether this is worth it or not is very situational and is also determined by encounter design.

By now it should be clear why we don’t “freestyle” Swiftcast for procs in optimization. It can easily disrupt our Engagement/Displacement and GCD-perfect Manafication and Embolden plans, all for the sake of a chance at a 20 potency gain.

# Bonus Section: The 2-minute Dilemma

One example of a problematic part of RDM optimization is the first Manafication cycle after a standard 3-8 opener (note: this is usually still the encouraged "default" and other openers have their own pros and cons). Since people who become aware of this are probably deeper into optimization already, I will summarize it in simple terms:

## No Swiftcast

* Using zero Swiftcast between your opener and 2-minute timing means Embolden, Manafication, and your fourth Engagement will come up at the same time assuming full uptime and no oGCD delays. This forces you to delay one ability or triple weave.
* A zero Swiftcast Manafication cycle allows for three Displacement and one Engagement.
* You get a 750 potency Engagement/Displacement plan (1:3), and zero drift to Fleche and Contre Sixte due to no Swiftcast use.

## Two Swiftcast

* Using two Swiftcast between your opener and 2-minute timing means your fourth Engagement can come up one weave slot earlier if you use it during your first melee combo, allowing for the below weave sequence.
* You get a 700 potency Engagement/Displacement plan (2:2), and five seconds drift to Fleche and Contre Sixte due to two Swiftcasts. 
* But you also get ~70 potency due the two Swiftcasts fully replacing a Jolt II or Verfire/stone with another Veraero/thunder, as well as a bit more mana that gets doubled when Manafication is used.

Note the weave sequence on the next page with Swiftcast, Engagement, Embolden and Manafication coming up at the same time.

![](https://lh4.googleusercontent.com/b-eSfU-HkwtWajmYgs4LJ96byuaT6VIOHtJHzEWLtX90S-XH1ZDhng1caMXjWJ1GzsKeqzHV44RM2JgxvCARDTuPlDs7eP918xIExYtMrsgLqgFMbcEkP7lIE0way3ps8cJeQU2J=s0)

We do not spam Swiftcast for DPS because too much drift over a fight can lead to a likely, or even guaranteed lost use of Fleche or Contre Sixte. But if you only use two to three per fight, you can line up your 2-minute cooldowns better and gamble on five to eight seconds of drift not resulting in a lost use – even more so if you become familiar with common fight killtimes.

# Niche and highly situational optimizations

There are a lot of highly niche micro-optimizations you can do depending on the situation. There are no general rules here.

## Basic Optimizations

* Occasionally, you can overcap a little bit to put melee combo finishers under Trick Attack at one minute, or into any 3-minute buffs.
* If there are raids with two targets, awkward killtimes and a large surplus of mana, you can consider dumping with an Enchanted Moulinet. This can occur in BJCC phase of TEA, where you may find yourself overcapping on mana even using a lot of Jolt Impact, but still need to be at 100/100 for an Alexander Prime reopener.
* We rarely intentionally delay Fleche or Contre Sixte purely for potion reopeners, even if it’s “ideal” to get two Fleche and one Contre Sixte within one potion. But it is worth doing if you can predict the killtime, or if a specific phase in a fight is very forgiving on Fleche and Contre Sixte holds (see section 3).

## Enchanted Reprise Techniques

For encounters where you can play with a lot of surplus mana and there’s sufficient boss phasing, Enchanted Reprise’s 2.2 GCD recast timer (as opposed to 2.5 on normal casts) can theoretically be abused to sneak in a final GCD in very specific situations.

Occasionally, I will see people ask “if you use Swiftcast for damage, can you use Enchanted Reprise to fix your GCD alignment?”, to which the answer is we generally don’t do it because it’s equal in potency to Dualcasting, but far less mana. However, there are very rare situations when it can be used to fix GCD clipping. It is arguable whether fixing mistakes counts as high-end optimization, but nonetheless, here is a hypothetical situation where it can be useful. I will once again use E11S as an example:

* You’re raiding in Party Finder, so you did the 3-10 opener due to getting lightning elemental break first. Due to this fight’s general timeline, you will be using 2-minute Manafication no matter what (hence surplus mana from the 3-10 opener).
* You clip your GCD slightly somewhere just after the opener.
* The only Swiftcast you use in this phase is past the 2-minute mark to get the final Veraero/thunder of the phase. Due to clipping your GCD, you risk losing this cast.

The solution here then to “fix” your clipped GCD timeline by 0.3 seconds is to use Swiftcast, then follow it up immediately with Enchanted Reprise. However, it’s an incredibly niche technique because:

* You have to do this combination between Fleche or Contre Sixte uses to ensure they don’t drift.
* You also have to do this between Engagement/Displacement uses so it doesn’t interfere with your plan.
* It can only be done when you have surplus mana for the next planned Manafication. Dualcasting gains you at least 17 mana. A Swiftcast to Enchanted Reprise combo gains you 1 mana (gain 11, lose 10).
* In the E11S example, you have to do it before 01:10. With Swiftcast’s 60 second cooldown timer, if you use it too late, it will not be up for the final GCD at just after 02:10.

This can also occasionally be used to mitigate clipping caused by a triple weave, double weaving potion with Fleche, etc. if needed.

## Swiftcast for Proc Fishing

Swiftcast can occasionally be used for proc fishing, which is to use it more freely for procs (i.e. if Verstone/fire procs aren’t up, one could Swiftcast Verthunder to try and get a Verfire proc). It’s effectively an RNG attempt at a 20 potency and 3 mana gain.

Maximizing our proc usage is a fundamental part of our base rotation. However, using Swiftcast in a “freestyle” manner will misalign several of your other oGCDs, and the cost of doing so outweighs the potential gain from proc fishing. 

It’s not as simple as drifting Fleche and Contre Sixte either. Creating optimized Displacement plans requires very precise timing, as does GCD-perfect Embolden and double melee combos, Manafications, etc. Random Swiftcasting for procs will throw all of this off and make it inconsistent every pull.

With that said, it’s still possible to use Swiftcast for proc fishing in very specific scenarios. For example, in Eden's Promise: Litany (Savage), you may opt to do two Swiftcasts within the first two minutes, for reasons outlined in the Bonus Section: the 2-minute Dilemma above. The second Swiftcast can be used during a double weave as Engagement, Embolden and Manafication all come up at the same time.

As for the first Swiftcast, it can be used anytime after your second Fleche at around 33 seconds (to ensure it lands within your potion window), but before 55 seconds, which is when your second Engagement/Displacement happens. This means that within this specific 20 second window, you can hold Swiftcast for proc fishing, because it has zero effect on any of your other meaningful oGCD alignments.

In short: Your per-fight Swiftcast plan should account for movement comfort and oGCD alignment first. But within that framework, you occasionally will have a few GCDs worth of flexibility to fish for procs.

## Checklist: Putting Your Final Rotation Together

* Can I maintain full GCD uptime, with only a couple of planned Swiftcasts if necessary?
* Do I know what the common killtime ranges are for the fight I’m optimizing for? E.g. speedruns, parse runs, average PF parties, etc.
* How many Scorches can I get within the common killtimes?
* What are my Embolden, Manafication and potion timings? Does my reopener get two melee combos under pots and buffs, ideally catching two Scorches under 20 second buffs? How does it align with other jobs or rotations?
* For fights with phasing, how many Fleche and Contre Sixte uses can I get per phase?
* How much potency am I gaining from Engagement/Displacement (or rarely, Corps-a-Corps) optimization, and am I able to do it consistently? How do I communicate this with my tanks and healers to ensure no DPS loss to the party?
* Can I benefit from any additional Swiftcasts for lining up my other oGCDs at little to no cost to other aspects of my rotation?
* Are there any other niche optimizations that apply to this specific encounter and killtime?

Once you can address all of the above and replicate it in raids, you’re good to go.

- - -

Written by Argen Yin (Ramuh).

Some comments and stylistic edits by Lana White (Leviathan), Mazz Maryoku (Tonberry) and Laille Ormesaing (Balmung).