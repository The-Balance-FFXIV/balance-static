---
title: Bard Advanced Guide
card_header_image: /img/jobs/brd/brd-advanced.jpg
authors:
  - Balance-BRD-Staff
patch: "5.58"
lastmod: 2021-10-26T02:37:55.677Z
changelog:
  - date: 2021-10-26T02:38:08.428Z
    message: Created page
---
> From the full BRD guide, located [here](https://guides.xivresources.com/jobs/ranged/bard/the-pursuit-of-comfiness-bard-guide-5-x).

## RS Alignment Choice

![raging strikes](https://xivapi.com/i/000000/000352_hr1.png)

After the opener (i.e. starting from the second RS), you can elect to either align RS with the beginning of WM or the end. The tradeoff is that WM tends to have back-loaded damage, but Army’s Muse makes it easier to deal nine GCDs under RS.

Aligning RS with the beginning of WM is the **easiest choice, but is slightly worse for damage**. It ensures that you get nine GCDs under RS without needing any special delays, due to the speed buff from Army’s Muse. In particular, this plan is probably a good choice at low skill speeds. It’s also the easiest to remember.

You can float RS, using it two GCDs into WM and letting it slide farther back if your Barrage is forced back by natural RA procs. **I recommend this option. It’s still pretty easy but is a significant gain over using it at the very start of WM, and is almost as good as the hardmode option.** This catches some of the more valuable time of WM, while still easily hitting nine GCDs in RS due to partial help from Army’s Muse. You will still need to delay RS within the GCD.

Aligning RS with the ending of WM is the **hardest and riskiest choice, also requiring some minimum skill speed.** The end of WM, especially with the very last DoT tick, tends to have more PP usages, and you can also catch the 100 potency cast of MB itself. To do this, you use RS about 12 seconds into WM (around when it has 18 seconds remaining), in the second oGCD window of a GCD. If you do it early within the GCD, you risk missing the 9th GCD under RS, and if you do it late, you risk clipping. If either happens, you wipe out most if not all of the gains. Also, if you lose significant RS time at the end of the fight, that wipes out all the gains as well. Based on some early logs of mine, **it seems that RS now applies to self faster, making it extremely hard/impossible to get nine GCDs under RS at 2.47 or slower GCD** without the help of Muse. If this is the case for you, you should choose another option.

Late RS also has some less obvious tradeoffs with respect to buff alignment. It potentially makes the four minute alignment worse, especially if you drift your song rotation. However, it makes the three minute alignment better, since three minutes is 20s into the third WM. Also, if you have a NIN, doing second RS late gives you a tight window to snap the second and third Tricks, whereas second RS early means you will probably early snap as the second RS is falling off and miss third Trick.

## Iron Jaws

![ij](https://xivapi.com/i/002000/002608_hr1.png)

With the added chance to proc RA, there is now a choice of when to use IJ. If you plan to always use it on the last possible GCD, you risk wasting a RA proc chance. If you plan to use it on the second-to-last GCD, you end up using more IJs over the course of the fight. **It turns out these two plans are almost exactly equal in DPS in a vacuum, but using IJ as late as possible keeps better alignment with party buffs.** So, if you know that an early snap is coming in the future, you should plan to IJ on the second-to-last GCD of DoTs, and if you want to extend DoTs as much as possible to hit a buff window, you should plan to IJ on the last GCD of DoTs.

Deciding whether to snap buffs is a tradeoff between buffing DoTs, which tick for 900 potency over 30 seconds, and using additional IJs, which cost slightly more than 130 potency each (because you lose a buffed BS). **These are general guidelines, and could vary depending on what buffs are coming up later and what buffs are already on your DoTs**:

* Early DoT snapping depends significantly on whether you’re ending the buff window with an RA proc or not.

  * If you DON’T have an RA proc (IJ replacing a BS): **if your DoTs aren’t already buffed, and there are no buffs coming soon, for every 1% of buffs that are about to fall off you can snap your dots 1.5s early.**  So, for example, Brotherhood can be safely snapped for a gain just before it falls off if your DoTs have ~7s or less left on them.  The less time your DoTs have left, the bigger the gain.  If your DoTs already have buffs on them, or there are new buffs coming up soon, it’s less of a gain to early snap.
  * If you DO have an RA proc (IJ replacing a RA): **don’t early snap 5% of buffs, but 10% of buffs can be early snapped by about 10 seconds.**
* If your DoTs don’t already have any buffs on them, you should almost always snap 10% damage buffs or pairs of damage buffs once.  Do this naturally (as your DoTs are falling off) or as the buffs are falling off.
* Even if your DoTs have ~5s left on them when RS goes up, double snapping RS is basically not a gain, partly because you’d be expending two RS-buffed GCD slots that could be BS or even RA. Even if this only causes an extra half an IJ over the fight, it’s about even with adding 6 ticks of RS (compared to single snapping RS). If you have a natural IJ (from DoTs ending) right after RS goes up, and there are no other buffs at all, it’s a small gain to snap RS again just before it goes down.
* Crit buffs can be approximated as being about .5% damage for every 1% Crit chance.  So Chain and Litany are roughly as good as 5% damage buffs.

As a minor note, the devs seem to like putting 25s+ downtimes in fights. In such cases, if you have an RA proc going into the last GCD before downtime, it’s better to RA and then manually reapply DoTs after downtime. Otherwise, IJ on both ends.

## Procs in WM

![wm](https://xivapi.com/i/002000/002607_hr1.png)
![pp](https://xivapi.com/i/002000/002611_hr1.png)

Unlike in Stormblood, there’s no way to raise the proc chance above 60%, so in general you should use Pitch Perfect at three stacks. Like in SB, **use PP2 early if you know you have an EA coming up next GCD concurrently with the DoT tick, or if the song is imminently ending.** This is especially important if your 2nd EA in WM is in the last few seconds, so you have PP available to make use of the guaranteed proc. If you are using EA very close to on cooldown, this will happen during your second WM! Be ready to use a PP2 at ~5s left on that second WM.

Note that because EA should be used on cooldown in every song, the EA timer will not be at the same time during every WM. If you would use an EA < 1s before transitioning from AP to WM, instead hold it for after the WM. This is to prevent you from getting a guaranteed proc and being unable to use it at the end of the song.

There’s no longer a need to triple weave Barrage EA PP. Avoid that triple weave by delaying EA in general, or delaying Barrage if you’re near the end of the fight (it risks delaying twice and messing up alignment due to the chance of a RA proc).

## Procs in MB

![mb](https://xivapi.com/i/002000/002602_hr1.png)
![bloodletter](https://xivapi.com/i/000000/000361_hr1.png)

MB is a delicate dance between not losing procs, using EA on cooldown, and not clipping. At the very least, **it’s important to understand how the DoT timer works relative to the GCD timer.**

DoT ticks happen every three seconds, and the GCD timer is 2.5s or slightly less, so you can think of the tick as happening 0.5s “later” within the GCD every GCD, until it skips one entirely. It’s useful to learn to keep track of where the DoT timer is, relative to the GCD. If possible, try to do this through the WM to MB transition.

Make sure not to mash BL during the last ~1s of a GCD to avoid clipping. If a BL proc were to come up that late, the next GCD may not have a DoT tick at all, so it is perfectly safe to delay the BL to the start of the next GCD.

Using EA in MB can be tricky if you want to avoid losing procs. Here’s where it can be extremely valuable to know the DoT timer. If it’s early, it’s fine to use BL EA BL triple weaved (this is one of the only acceptable triple weaves). If it’s extremely late, you can mash EA BL fast enough that the DoT tick happens later. If the DoT timer is in the middle of the GCD, it’s acceptable to wait up to three GCDs for the DoT timer to move later. You shouldn’t need to wait more, even two GCDs is almost always enough, and the less you have to wait the better. Don’t wait on the first EA in MB if it would push it past the midpoint (i.e. if you would only get one EA in that MB).

## Song Transitions

![WM icon](https://xivapi.com/i/002000/002607_hr1.png) 
![mb icon](https://xivapi.com/i/002000/002602_hr1.png)
![AP icon](https://xivapi.com/i/002000/002603_hr1.png)

Due to the addition of Soul Voice, it’s more important than ever to minimize the amount of songless time, and avoid letting DoT ticks fall in songless time.

### WM to MB transition:

If the DoT tick timer is very close (<.5s) to the end of the song, or you use a PP3 less than three seconds before the song ends, you can transition into MB early if it’s available. This is ping dependent, and at low ping it can be easier to make use of the last DoT tick in WM.

### MB to AP transition:

Unlike the WM to MB transition, MB procs (BL) can be used after the song ends, so avoid cutting it short if there would be a DoT tick at the very end of MB. Other than that, just try to minimize songless time without clipping.

### AP to WM transition:

Weave BS → WM → BS → RS → BS… if you’re doing early RS, or just BS → WM → BS if you’re doing late RS. In either case, do the transition when your MB cooldown is 30s or less, and your AP cooldown is 60s or less. **Wait at least 0.25s between the BS and WM to ensure you get 5 GCDs in Muse. At low skill speed (~2.47 or slower GCD), ideally wait even longer, up to half a second.** This should set up nicely for a PP MB double weave 12 GCDs later on the WM to MB transition, assuming full stacks of Army’s Muse. 

Be careful about double weaving during Army’s Muse.  Depending on your ping, it can cause clipping and cost you GCDs under Muse or GCDs under RS.

To reiterate from above, if you have an EA very close to this transition, save it for after the transition.

## Extending AP

![AP icon](https://xivapi.com/i/002000/002603_hr1.png)

This overlaps somewhat with the [Fight Mapping](#fight-mapping) section, but since this is the most common way to manipulate the song rotation, I wanted to spend some extra time on it.

Extending AP beyond 20s can be used to push back WM/RS/Barrage phases to line up with bursts. **You can think of it as pulling song time from the end of the fight/phase and moving it into the current AP.** You will also effectively move EAs into AP (where they are weakest). If you would end the fight in AP, you can usually do this mostly for free, potentially costing yourself some portion of Muse. Pulling time out of MB is acceptable if it gets you better alignment or some other gain (see below). I do not recommend losing WM/RS time unless you have a very good reason.

As an example, consider a fight that lasts around 7:45. Your party may elect to use three-minute buffs at 0:10, 4:10, 7:10 and 2-minute buffs at 0:10, 2:10, 4:10, 7:10. In this case, you would want to line up WM with both the 4:10 and 7:10 bursts. You can do this by extending AP to the full 30s between four and seven minutes. At the cost of some MB time, you align your last WM/RS/Barrage with a powerful potion window.

Aside from alignment, there are other unplanned reasons to want to extend AP:

* Your BL timer is \~2-3s when you would enter WM. This will cause you to also have a BL timer of \~2-3s when you enter the next MB. But if you extend AP by ~4s to use BL before WM, you can buy yourself almost an entire Bloodletter.
* You aren’t at four stacks of AP at 20s in. The difference between a four stack Army’s Muse and three stack Army’s Muse can be over 100 potency, or even more if it causes you to lose a GCD under RS.
* Your EA comes off cooldown ~19s into AP. You would have to delay EA to avoid having an unusable PP proc. Delaying AP instead can cause you to make the PP usable.
* Your Barrage/RS has somehow drifted very far back within WM.

Note that if you planned your song alignment around raid buffs, extending AP could skew it slightly. But if multiple of the above cases are true, especially the first two (those are much bigger), **it can be worth it to sacrifice some alignment.**

## Refulgent Arrow Procs

![ra](https://xivapi.com/i/002000/002616_hr1.png)

Don’t hold RA procs for even a single GCD to catch upcoming buffs. The difference between a buffed RA and a buffed BS is too small. 

If you have an RA proc as Barrage comes up, delay the Barrage unless it would fall outside of Raging Strikes. With proper gameplay, this shouldn’t happen on a fight of reasonable duration.

While manually applying DoTs, if you get a RA proc from CB, save it and use it after SB.

## Apex Arrow

![aa](https://xivapi.com/i/002000/002619_hr1.png)

Apex Arrow charges to full roughly every 60s (20 DoT ticks, average 4 gauge per DoT tick from both DoTs combined, plus 20 gauge from 4 EA).

While in general, it’s best to use Apex Arrow at 100 gauge, there is some flexibility in its usage. It’s a gain to use early at 90 gauge to hit a 10% buff, or to delay up to two DoT ticks (2 GCDs if you’re not sure) to hit a 10% buff.  This will most commonly occur around Raging Strikes.  Against multiple targets, you can and should use Apex Arrow earlier because of the greater risk of overcapping: at 95 gauge for two targets, 90 gauge for three targets, or 85 for 4+ targets.

Also, if you’re on the last Apex Arrow of the fight (under ~30s left in the fight, so not long enough to charge a worthwhile Apex Arrow), you can delay as long as you like in order to fit it into buff windows.

If a multi-target phase is coming up within \~20s and your Apex Arrow hits full, save it for the start of the phase. As a multi-target phase is ending, use Apex Arrow if you are at more than \~40 gauge (beware of overkill!). These numbers have a LOT of dependence on the wait time, number of adds, lifetime of adds, and the duration of the fight after the adds phase ends. Optimally, it should be mapped out on a per-fight basis. Test it yourself - if you notice yourself waiting nearly long durations and then dumping a low-gauge Apex Arrow at the end of the adds phase, consider burning the Apex Arrow instead of waiting.

Some rules of thumb for applying DoTs vs using Apex at the start of a multi-target phase: if you enter a two target phase with 100 gauge, apply DoTs first and then use the Apex Arrow. With ~3-5 targets, apply a single DoT to each and then Apex. On multi-target phases with a large number of targets, Apex Arrow first, then DoTs. Again, this is fight-dependent, and especially dependent on the duration of the phase.

## Fight Mapping

Mapping a fight involves coming up with song timings and IJ timings to fit downtime, adds phases, and party burst phases. Things to consider:

* In general, the priorities are to avoid going songless, then maximize the amount of time spent in WM, and then maximize the amount of time spent in MB.  If you would end the fight during AP or near the beginning of WM, just go into WM as soon as it comes off cooldown during the last AP.
* The most straightforward way to adjust the song rotation is by extending AP beyond 20s duration. See the Extending AP section.
* MB (and to a lesser extent, AP) should be lined up with adds phases that have at least three targets. WM and MB should be lined up with adds phases that have two total targets.
* If you’re playing in a static that is optimizing, you can usually set all buffs except AST cards to happen at fixed times. This allows you to plan the entirety of your IJs out for the fight.
* If you could gain an extra Barrage by misaligning RS from WM on a short fight (e.g. Kefaust), it’s usually good to do so.
* If at all possible, ensure that 2nd (and 3rd) potions, which will likely be on raid buff windows, line up with both WM and Barrage, unless it costs a use of WM/Barrage.