---
title: Bard Advanced Guide
card_header_image: /img/jobs/brd/advanced.png
authors:
  - TKCetonis
patch: "6.08"
lastmod: 2022-01-25T23:01:35.417Z
changelog:
  - date: 2021-10-26T02:38:08.428Z
    message: Created page
---
Hello! In this guide, you'll find a series of details and optimizations for Endwalker Bard. 

This builds on the \[/jobs/ranged/bard/basic-guide](Bard Basics Guide), and expects you to be familiar with Bard's skills, general priorities, opener, and song cycle.

Topics are ordered based on some mix of importance and flow. It's a little all over the place, but such is the nature of a kit like Bard's.

- - -

# The two-minute burst

Like many jobs, Bard's kit revolves around a big damage burst every two minutes. In this case, alongside a powerful duo of party-wide buffs, Battle Voice and Radiant Finale.

Adding Raging Strikes to this, Bard buffs their own damage by ~28% for 15 seconds. Your party should be using any buffs they have at the same timing, making the total boost even larger.

You want to pile as much damage into this window as you can!

## Preparation & Things to Know

### DoT Snapshotting

Damage over time skills "lock in" any buffs and debuffs that are active at the time the DoT is applied. If you use Iron Jaws under Raging Strikes, the full 45s of DoT ticks will have +15% damage, even after RS wears off. This is often referred to as "snapshotting".

Because of this, you want to press Iron Jaws at some point while the full stack of buffs is running. You've already seen this in the opener. Doing so is well worth the small inefficiency of using an Iron Jaws a bit early each cycle.

### Bloodletter pooling

During Army's Paeon, you want to start saving up Bloodletters with about 30s remaining. This is to make sure you can use three BLs under your burst.

Depending on how many procs you got during Mage's Ballad, your BL cooldown can be in one of two places. 

In one case, it will be about halfway to a charge around the 30s mark on the AP timer. In the other, the next charge will be just about to fill. For this second case, don't use that charge - you can use it as a fourth BL under Raging Strikes later.

### Army's Muse

The level 78 trait Enhanced Army's Paeon gives us ten seconds of faster GCDs at the start of Wanderer's Minuet. You want to use five GCDs under that Army's Muse buff.

To make this happen, you can't press WM immediately after a GCD. That will start the buff too early. You'll use a GCD at 1.4s, 3.6s, 5.8s, 8s, and then the buff will run out before your 10.2s GCD.

You need to late weave WM - to use it at the end of the oGCD window, but not so late that it delays the next GCD. One good way to time it is to wait for the cooldown spinner to pass the bottom left corner of the icons.

When done right, your first GCD will be ~0.7s into WM, giving you about a half second of leeway. Double-weaving during Army's Muse can delay the GCD slightly if you have some ping, so this leeway helps. It also means you can be a touch early on the WM and it's fine.

## Skill sequence

So, going into the two-minute mark, you'll late-weave Wanderer's Minuet. After your first GCD, double-weave Raging Strikes and then Empyreal Arrow. 

If you've kept on top of it, EA should come off of cooldown right on time here. And thanks to Army's Muse, even though you use Raging first here, you'll still be able to get nine GCDs buffed by it. 

> Like with the five GCD Muse, you have some leeway here. Even if your ping causes a small GCD delay on your Muse double-weaves, in most cases it should be fine.

After the next GCD, if you were on the 4x Bloodletter side of the 50-50, you'll have a Bloodletter to use. Otherwise it's a free space. If you drifted EA, late-weaving it here will put it at a good timing.

Then after your third GCD in WM, use Radiant Finale and then Battle Voice. The next six GCDs, and the oGCD window that follows, will be fully buffed.

During this time, you'll want your six GCDs to be:

* Apex Arrow
* Blast Arrow
* A Barrage'd Refulgent Arrow
* Burst Shot or Refulgent Arrow
* Burst Shot or Refulgent Arrow
* Iron Jaws

These can be in any order. But while learning, or progging, using the above as a rough go-to order can help make things easier. 

As always, don't Barrage if you have an RA proc already. Apex Arrow and Blast Arrow can't proc RA, so if you have the proc going in here you can RA (Barrage) - AA - BA - RA.

As for oGCDs, you will have:

* Barrage
* Sidewinder
* 3x Bloodletter
* Empyreal Arrow
* Pitch Perfects

Make sure to dump any remaining Pitch Perfect stacks in the last oGCD window, before buffs run out. You could also have a two-stack usage prior - this will be covered in [proc handling](#proc-handling) below.

To put things together, an example of a two-minute burst sequence could look like this. Note **this is merely an example**, you will not have this exact sequence every time:

[![Bard 2-minute burst](/img/jobs/brd/brd_burst.png "Bard 2-minute burst")](/img/jobs/brd/brd_burst.png "Bard 2-minute burst")

## Proc handling

There are two elements based on random procs that you'll need to manage for the two-minute burst. 

The first is the potential use of a two-stack Pitch Perfect. The other is Soul Gauge management, to ensure you have an 80+ Apex Arrow when buffs come around.

### Pitch Perfect 2

The timing of Empyreal Arrow runs it up close to the song tick timings, creating a threat of wasted procs. 

It's not worth delaying Empyreal Arrow to avoid this. EA is too valuable, and keeping it on time all the more so. If you have two stacks of Pitch Perfect and Empyreal is coming up, use PP first. 

Specifically, when everything is on time this should occur when the timer is reaching 27 and 12. To minimize EA drift, it's best to be on the lookout in advance, and be ready to hit PP right after the 30 or 15 tick. This way you don't have to delay the EA that's coming up as a first weave the GCD after.

### Soul Gauge

Because Bard's buff stack is so large, it's a damage gain to make sure you land Apex Arrow and Blast Arrow under burst. Even if it means sitting at 100 gauge for an uncomfortable amount of time.

The best way to go about this is to set a "deadline" for your in-between uses. For starting out, the 18s (on the song timer) tick in Mage's Ballad is a good line to draw. That is, you want to use Apex Arrow before then - with 21-19s remaining in Mage's Ballad at the latest. Sidewinder can help as a reference point in most cases.

This gives you a 97.67% chance to have 80+ gauge at the start of the burst window. And makes the odds of not being able to 80+ Apex under burst at all near-zero.

You're free to use your between-burst Apex whenever the gauge hits 100, if it does so early. This only makes it even more likely to be fully charged for your burst. The only reason to hold it is if you have a Ninja (Trick Attack should go up before the deadline).

> On your first cycle, the gauge is more likely to fill fast, because you get two bonus ticks at the very start of the fight. You may hit 100 with a lot of time left in Army's Paeon - sit it out anyway. Remember that the first cycle's gauge will not be the norm. This is a one-time cost to get two big hits under buffs for the whole fight.

- - -

# Empyreal Arrow and Cycle Length

If you've played Bard at a variety of skill speeds, chances are you've noticed a couple of things. One is Empyreal Arrow proving difficult to use on time. The other is Wanderer's Minuet sometimes being off cooldown for a bit before you can late-weave it.

You can mitigate both issues, to a degree, with the right choice of SkS and some good timings.

## Empyreal Arrow

There are a lot of forces complicating any effort to keep Empyreal Arrow strictly on time. The natural drift of a 15 second cooldown vs. a 2.4x GCD, Army's Paeon & Muse, and proc collisions. 

But you definitely want it to stay on time. Each GCD of drift means a 1 in 6 chance to lose an EA over the course of the fight. That's a big loss - not only 200 potency, but also a repertoire proc and the soul gauge that comes with it.

Moreover, if it drifts on top of your Radiant Finale + Battle Voice timing, you'll need to delay it another GCD. And once it's that far off the rails, you're due for more forced delays down the road.

![Drifting Ea](/img/jobs/brd/driftingea.png "Endwalker Bards' Mascot :)")

So, you want to use Pitch Perfect at [two stacks](#pitch-perfect-2) if it's threatening your Empyreal Arrow timing. Also, don't be afraid to delay a GCD by one or two tenths of a second to fit EA in. When in doubt, hit the Empyreal button.

The choice of a 2.48s GCD, and EA's placement in the burst setup, makes keeping EA in line as easy as possible.

> Your second EA in the cycle will end up delayed a small bit by a GCD animation. But then your third, fourth, and fifth land deeper into the oGCD window. This is due to the 2.48s GCD bringing each post-EA GCD 0.12s closer to your EA.
>
> This means that on the sixth - where you want to weave AP+EA - you won't be delaying EA by very much to do this.
>
> The seventh EA (second in AP) can have a small delay if you didn't get a perfect AP. But that's okay, because the whole cycle will move along with it. The eighth should always be clear. 
>
> And then it will be ready after Raging Strikes once again. There's a chance of a small GCD clip there, but not enough of one to cause issues.

You can find mappings of the GCD/song/EA cycles discussed in this guide (many later) here: [Endwalker Bard cycles](https://bit.ly/3Ij53Fu)

As a bonus to this timing, it turns out that a second GCD late-weave EA is pretty good too. That means if you do mess up and drift one GCD, you can fall back on this plan without disaster. Late-weave Raging Strikes instead of RS+EA, then in the next window do BL+EA / or just a late EA. 

This backup timing won't lead to major delays later, but any more drifting will. On top of the initial cost of delaying EA, you also lose a buffed Bloodletter on one side of the [coin flip](#bloodletter-pooling). As some consolation, it recoups a bit by getting you out of EA+PP collisions.

## Cycle Length

The other reason for a 2.48s GCD is to keep the song cycle close to a clean 120 seconds. It doesn't have to be perfect, in practice most players drift by at least a fraction of a second. But you certainly don't want to be doing 121-121.5 second cycles every time.

51.2% of the time, you will get procs on your first three ticks in Army's Paeon. Adding in an Empyreal Arrow, this is a "perfect" AP, the fastest buildup you can get. Since this occurs a small majority of the time, it makes sense to plan for perfect APs - as long as imperfect APs don't cause issues. 

A 2.48s GCD keeps a tidy 120.15s cycle on perfect AP, a touch longer in reality due to frame delay. Longer APs shift everything cleanly, including the EA mentioned before.

A 2.47s GCD (523-546 Skill Speed) with AP still going to 2.08, gives you the best chance to stick as close to 120s as possible. However, this is not an efficient use of substat points. You'd be adding SkS to not even affect over a third of your cycle.

- - -

# Adjusting to Fights

## Tincture (Potion) Timing

When using a tincture pre-pull, simply use it right before your initial Stormbite. If using one in the middle of the fight, fit it into the oGCD window before your last Army's Paeon GCD. So GCD (Tinc) GCD (.. WM) GCD (RS+EA) etc.

Unless a fight allows for three tinctures, the ideal is to use them at 2:00 & 8:00, or 2:00 & 6:30 (if there's a 30s burst delay). This way they're both on fully-powered burst windows with an Apex Arrow + Blast Arrow.

If neither of those work, tincture pre-pull and then at 6:00. If the fight is too short even for that, your group may be doing a 5:00 burst and you'll have to cope. 

This is a good segue to talk about burst delays. Bard's song cycle is fairly inflexible, so what do you do?

## 30-Second Burst Delays

Groups will often plan to delay a party burst by 30 seconds. This could be to avoid troublesome mechanics, to catch a tincture, or to work around downtime. Bard can adjust to this, though that adjustment has a lot of parts.

### Extended Song Cycle

To make sure your full burst stays within Wanderer's Minuet despite the delay, you can do a longer song cycle. Leave Mage's Ballad at three or less seconds, instead of 12 or less.

If you're vigilant, this cycle can take as little as 128s while getting all 42 possible song ticks. Then your x:30 burst will start about 20 seconds into WM, and wrap up before it ends. You won't get nine GCDs in Raging due to coming after Army's Muse, but that's the only guaranteed loss.

### Apex Arrow Rush

Less guaranteed is Apex Arrow. When you have 30 more seconds to fill, you don't want to be sitting at full gauge that whole time. So while it can fail, it's better to aim for three 80 gauge Apex Arrows instead.

To help set this up, in the burst prior to your long cycle, use Apex as the first buffed GCD (so long as it's 80+ of course). Normally you might wait if the gauge isn't full, but you want as many ticks as possible for the 80x3 gamble.

After the delayed burst, make sure to adjust your Apex Arrow deadline by the same amount. Sidewinder can be a good reference point, unless you need to use it out of buffs / on-cooldown to get an extra use. (One extra SW use isn't always worth getting; it's fight and party comp dependent)

### Second Cycle & Empyreal Arrow

The other catch with an extended cycle is that it sends Empyreal Arrow into a rough timing. You can fix this with a second extended cycle. EA will re-align at the start of Army's Paeon and you'll be back to normal EA alignment (at the cost of a song tick). 

You can see this mapped out on the [Endwalker Bard cycles sheet](https://bit.ly/3Ij53Fu) from earlier. Just be wary of doing the repeat cycle if it could cost you total WM time over the course of the fight.

## 60-Second Burst Delays

Delaying a burst for a full minute, barring downtime getting involved, is much easier. Since you can't get it into WM, you just hold all your two-minute skills and burst in Mage's Ballad.

You'll still have almost everything you have in a two-minute burst. The only major loss is that you downgrade your song procs. 

Even if that feels bad, remember that if your party wants to odd-minute burst, there's a reason. The party-wide gains should far outweigh your loss of Pitch Perfects under buffs. 

## Downtime song handling

Fights will often have some pure downtime with nothing to target. There are so many possible forms and timings, that there's no one answer on handling this. 

When you get a chance between raid sessions, you can sit down with the timings and work out a plan. Or, look for some tips from The Balance or other trusted sources.

In the moment though, or if a fight is very new and not a lot is worked out for it, here are some general tips:

* It's okay to be in Wanderer's Minuet for up to ~9-12 seconds of downtime. So long as you burn Pitch Perfect beforehand, you don't lose value unless you get 4+ procs while the boss is gone.
* It's also fine to be in Mage's Ballad for similar reasons. Oddly, Army's Paeon (once stacked) is the most costly song to be in for a short downtime.
* The extended 128s cycle is a good option to keep in mind. 
* For longer downtimes, your party may be deviating from standard burst timings. Try to plan your songs to match that if you can.
* Don't be afraid to change to a longer Mage's Ballad / shorter Army's Paeon, if it helps.



![](/img/jobs/brd/brd-basic-job-guide.jpg)

- - -

# Miscellany

## End of a phase or fight

As alluded to above, even if you don't have 80 gauge, it can be good to fire off Apex Arrow before a fight ends. A 60 gauge Apex is better than a Refulgent Arrow, and 45 gauge beats Burst Shot.

If the fight is ending or an enemy is about to die or vanish for a while, it can be a small gain to let your DoTs fall off. You need to be able to get three ticks (nine seconds) for Iron Jaws to be as good as a filler GCD.

As for low-HP adds, and whether to DoT them at all, Stormbite needs six ticks (18 seconds) and Caustic Bite five ticks (15 seconds) to beat out filler. If you can hit two enemies, the DoTs need 24 and 21 seconds to beat AoE filler. If you can hit three or more, they need close to a full duration to be worthwhile.

## Death recovery

Deaths on Bard can be very punishing. There's only so much you can do to recover, but here are some general tips.

If you did not miss a song application while you were dead, you don't have much choice. Get your next song up when it's available / when you'd use it normally. 

If you missed a song application, it's best to go ahead and get it up. Then delay future songs as needed to keep a 120s cycle rolling. 

For example, if a death made you put up Mage's Ballad 12 seconds late, shift your cycle by 12 seconds. Note that if the late song is Army's Paeon, you can do a 33-39 second AP to keep WM more on time, and extend MB later.

Don't be afraid to keep your 2-minute burst on time in whatever song it lands in. As with the 60-second delay, you're only losing Pitch Perfects, so it's not a total disaster. Matching the party's burst is far more important.

If you're dead at a time that was supposed to have a burst, it can be tricky. Try to do the best you can without losing total skill uses. Usually either it'll be too late and a set of uses is already lost, or you can safely delay them to the odd minute, or you need to use them as soon as possible. You may need to disjoint Battle Voice in the latter case.

## Targeting macros

Nature's Minne and The Warden's Paean both target a party member. The act of doing this normally can take some time, will de-target the boss, and could delay an auto-attack. 

This is the one combat situation where macros can help us - targeting. You don't need to worry about the macro delay slowing your GCD since they're abilities. And pragmatically, the delay is less than you'd have using the skills the hard way.

For The Warden's Paean, you can set it to a mouseover macro. 

`/ac "The Warden's Paean" <mo>
/ac "The Warden's Paean" <mo>
/ac "The Warden's Paean" <mo>
/micon "The Warden's Paean"`

The `<mo>` stands for mouseover. You can hover someone on the party list, click your macro'd button or keybind, and it will use Warden's on that member. Listing the skill multiple times is just insurance to make sure it goes off. It's possibly more superstition than anything, but doesn't hurt.

For Nature's Minne, you can do a similar mouseover macro. Or, you can bind multiple macros for specific common targets like tanks. (or, do both) This is what's going on when you see a Bard that has four to six Minne buttons on their bar.

As an example, if your role sort (Character Config -> UI Settings -> Party List) puts tanks first, this will Minne the top tank on the list:

`/ac "Nature's Minne" <2>
/ac "Nature's Minne" <2>
/ac "Nature's Minne" <2>
/micon "Nature's Minne"`

The `<2>` targets the second person on the party list. You can have a macro like this for each tank, a mouseover macro, and a regular bind to use on yourself or someone else. 

If you have another slot, you can add one to target Scholars. They often Deployment Tactics off of themselves, and you almost always want to Minne deploys. Go into your Role Sort Settings in that same menu to make sure Scholar is always the first or last healer on the list.

- - -

# Micro-optimizations

These are either small gains, or highly situational, or both. You shouldn't worry about them until you're comfortable with everything else in this guide. A few involve making your two-minute burst more difficult.

## Apex Arrow at Known Kill Times

It takes an extremely rare situation for taking Apex Arrow + Blast Arrow out of the party buff stack to be a good idea. Unless you see a specific fight tip about it, always seek to have them under buffs.

What can happen though, is a kill time that comes ~90-110 seconds after a burst. In these scenarios, it's a gain on average to aim for 2x 80 gauge Apex Arrows following your burst. 

You don't lose out if you come up a little short, since you'd spend 45-50+ gauge at the end of a fight over a Burst Shot anyway. If you use an Apex at 80 and end the fight at 70, that's no different from 100 and 50.

The bad outcomes are coming up more than a few procs short, or getting more than 100 gauge after using the first 80. But 38-42 ticks + EAs (about 100s), plus or minus about ten seconds, gives you a good chance of coming out ahead.

## Early Iron Jaws

It's typically a gain to use Iron Jaws one GCD early in your burst, or in AP. This is to avoid wasting a Refulgent proc. 

If you corner yourself into using IJ as your last GCD, you don't get to use an RA proc if you get one on the Burst Shot before. You must IJ and risk an overwrite. Of course if you have RA as your next-to-last GCD, use that and then IJ after as usual.

This is a very small gain - so much so that it's not worth doing this in Mage's Ballad and cutting out a buffed DoT tick. It's a bit bigger mid-burst though, since the RA you're looking to gain will have buffs.

Note that sometimes (usually due to a [30-second burst delay](#30-Second-Burst-Delays)) you can't afford to use Iron Jaws early.

There's also an added edge case, if your target is leaving or dying within ~30 seconds of your burst. In such a situation, it's free to use Iron Jaws as early as possible under buffs to get more buffed ticks. 

## Delayed Empyreal Arrow

If you remember from [earlier](#Empyreal-Arrow), one GCD of EA drift makes it a late-weave in the GCD after Raging Strikes. This has a benefit - it gets the EA timing off of your song tick, so you won't be forced into two-stack Pitch Perfects.  

The risk of losing an EA use is worse than the upside, in a vacuum. It's also a loss if you're on the 4x Bloodletter side of the [coin flip](#Bloodletter-pooling). 

Still, if you know it won't cost a use (due to i.e. the boss leaving soon), and you're on the 3x Bloodletter coin flip, you can delay EA here for potential gain.

## Maximizing Soul Gauge

You can minimize soul gauge waste by being willing to use Apex Arrow and Blast Arrow deep into your burst window. 

If you're prepared to wait as long as the 5th and 6th GCDs, that gives you three song ticks to flex around. Use Apex as soon as buffs go up if you're at 100 already. Go into buffs with 70 gauge and get the last two procs mid-burst before Apex+Blast. Sit on Apex at 90 for a couple ticks, holding out for 100.

Giving yourself this room to react to the gauge on the fly means you can also move your MB Apex deadline back. Instead of aiming to Apex by 21-19 on the MB timer, you can wait as long as 15-13 if you're planning to do a flexible burst.

Note that if you go into burst with a mind to wait on Apex, you'll want to also flex your Iron Jaws earlier. If possible, enough earlier to use an RA proc under buffs if it gives you one. But you may be forced to abandon that to use Barrage without waste. 

You can ease yourself into this flexible burst a little bit. Start by moving your deadline back to 18-16 seconds in MB, and give yourself until the third or fourth GCD to use Apex. This way you can keep Iron Jaws last or next-to-last. Then take the next step once you're used to doing that much.

## Long Mage's Ballad Cycle

> **Disclaimer**: This relies on the specific nature of the 6.05 BiS set, and the i600 gear options available. If you are not BiS, or it's patch 6.2 or later and this hasn't been updated, disregard this section.
>
> **Disclaimer 2**: This is more of an academic note than a useful tip. The gain is less than direct hitting an extra auto-attack, for an unreasonable effort. It's mainly for the curious, and for any Mage's Ballad die-hards out there.

If:

* You're in a static with a Warrior, and
* You can count on your party to consistently maintain uptime

It is a *very* small gain (5-9p / 1.5-3 dps depending on comp) at i600 to do a 42s Mage's Ballad and a 33s Army's Paeon instead of the norm. To repeat, this is less of a gain than direct hitting an extra auto-attack. 

Under normal circumstances, a Warrior will be using at least a couple of its big auto-Crit+DH hits during that x:18-x:27 timespan. The Army's Paeon party passive does not affect this at all, so the Mage's buff is a bigger gain on those hits than usual.

In order for this cycle to work out, you want a 2.49s GCD. The cycle mapping is at the far right of the \[cycles spreadsheet)[https://bit.ly/3Ij53Fu] (it works fine for extended cycles too). You can find the BiS set for 2.49s [here](https://etro.gg/gearset/28491a8f-2bed-43c9-9696-44e82fea3b00). 

Due to the gear available, this set increases your raw damage vs. the 2.48 BiS by more than usual. As miniscule as substat gaps are, we're relating to an also-small 0.275%-ish party buff gap. So, there's an amplified effect.

You MUST use this set - if you take the 2.48 BiS set and swap food, you'll wipe out the gain. You need to adjust the melds and commit to this set. Though you can start with this set and swap food to have a slightly (about -4 dps) suboptimal 2.48 set. 

Along the same lines, cooking up a random 2.49 set while gearing up is not likely to lead to similar gains. And there's no guarantee that future level cap BiS sets will either.

Again, all of this is very trivial. Without a Warrior (but with the 2.49 BiS), you should lose about 3-7p per cycle; even more meaningless than the gain. So it won't be optimal, but if you just *want* to spend more time in MB, it's unlikely to hurt enough to matter in 6.05-6.1. 

- - -

# Credits

Sana Cetonis \[Mateus] - Primary author

Verzell Varion \[Adamantoise] - Theorycrafter

Yumiya Nagatsuki \[Behemoth] - Theorycrafter

Elya Kura \[Ragnarok] - Theorycrafter

Stephia Deleva \[Goblin] - Contributor

Khemi Nawilo \[Behemoth] - Contributor

Jisoo Choi \[Lamia] - Contributor