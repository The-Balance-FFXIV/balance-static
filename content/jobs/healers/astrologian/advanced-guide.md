---
title: Astrologian Advanced Guide
card_header_image: /img/jobs/ast/advanced.png
authors:
  - Balance-AST-Staff
patch: "5.58"
lastmod: 2021-10-26T21:00:38.570Z
changelog:
  - date: 2021-10-26T21:00:57.155Z
    message: Article Created.
---
So, you're (hopefully) comfortable with the fundamentals of Astrologian. Now, it’s time to talk details: quirky mechanics, important interactions, and optimization. We’ll start with the most straightforward topics and work up to the more complicated ones.

## Sect Swapping/Stance Dancing

In dungeons, you can swap to Nocturnal Sect after the last enemy in a pull dies, apply a shield to the tank in preparation for the next pull, and then swap back to Diurnal Sect. This gives you a nice buffer for the tank’s HP while they gather the mobs, giving you more time to DPS or do whatever else before you need to heal the tank.

## Strange Interactions

1. Earthly Star is technically a pet. It counts as a unique, separate entity from ourselves, but it scales with our stats as a pet would. Somewhere in the spaghetti code, they’ve given Earthly Star its own special modifier to bring it up to ~95% of player potency, unlike the significantly reduced pet scaling observed with actual pets. This doesn’t currently have much pragmatic effect on us, and we hope it stays that way, but it has in the past.
2. Essential Dignity calculates its heal value based on the missing health of the target at the beginning of the skill, rather than at the end, when the animation completes and the heal is delivered. This can be a good or a bad thing.

   * If you cast Benefic II and seamlessly follow it up with Essential Dignity, the Essential Dignity calculates its heal potency based on the health the target had before the Benefic II landed, because Essential Dignity’s execution began just before the heal from Benefic II was registered. This can be somewhat finicky based on your connection, and it is less reliable with Aspected Benefic due to the difference in animations.
   * On the flip side, if you press Essential Dignity simultaneously as a tank buster is going through, even though the animation delay causes the heal to land after the tank buster, Essential Dignity will calculate its heal potency based on the HP the tank had before he took the hit, potentially leaving you with a \~500 potency heal instead of an \~800+ potency heal.
3. Using Play immediately after your first hit that puts you in combat will sometimes not grant you the appropriate seal, because the game has not registered you as being in combat yet, due to some shenanigans with the animation and how quickly the threat table updates.

## How Your Buffs Work Together

Cards and Minor Arcana do not stack with themselves or each other, including from different Astrologians. However, Divination does stack with any existing card or Minor Arcana buff, and it stacks multiplicatively. This means that instead of being 6% + 6% = 12% damage buff, it’s actually 1.06 * 1.06 = 12.36% damage buff. This doesn’t seem significant on its own, but the same kind of multiplicative buff interaction is compounding with all other active raid buffs, and everyone is aligning the highest burst damage portions of their rotations with these stacking raid buffs, and it quickly becomes quite significant. This is the basis of coordinated raid burst, and it’s a huge part of what makes Astrologian good instead of okay.

Because card buffs only last 15 seconds, we also want to do this on a smaller scale whenever we’re playing regular cards by trying to play your cards on the right person at the right time. Part of this decision is made for you based on what you draw and what Seals you do or don’t need, but you still have the freedom of deciding when you play your card within a nearly 30-second window, because there’s no penalty for holding onto a card as long as you play it before you need to draw another one.

Optimizing your card usage like this can be daunting, and it’s not the most important thing about playing Astrologian by a long shot, but it’s definitely something to be aware of. The value of your card buffs can vary hugely (literally double in some cases) depending on whether you’re giving out cards during people’s individual burst or if you’re giving people cards when they’re in the lower DPS valleys of their cycles. For instance, you don’t want to give a Summoner a card right after they’ve refreshed their DoTs and are just going to be spamming Ruin for the next 15 seconds; you want to give them a card when they’re going to refresh their DoTs with the card active or when they’re going into Trance.

Sleeve Draw and Divination align in the opener and at the six minute mark in the fight. In the opener, we use Sleeve Draw to get Seals for Divination quickly so we can have Divination and multiple single target cards out during the opening raid burst. At the six minute burst, it’s essentially the same thing, but less hectic since you should have seals ready for Divination ahead of time. But all the same, you want to be dishing out several cards quickly and overlapping them with Divination and other raid burst as well as you can manage. You may even hold the card from your 5:30 Draw to have an additional card partially overlapping with the six minute burst. In that case, you’d optimally use Draw at 5:30, Play/Minor Arcana your held card around 5:55, Draw again, Play/Minor Arcana that card on someone, activate Divination when it comes up, and then dish out another with Sleeve Draw.

## Divination Timing

Your entire opener revolves around collecting three unique Seals so you can use a max strength Divination at the ideal time. When things go smoothly, it’s possible to use Divination as early as the 3rd GCD, but that’s actually too early in most cases. When you’re still getting used to the opener, it can feel like you’re scrambling to get Divination out fast enough, but you want to make sure you’re not rushing *too* much.

Our standard recommendation is to aim for a 4th GCD Divination (not counting the precast Malefic), which has it coming out at around the 10-second mark. If you’re forced into multiple Redraws, using Divination as the 1st weave after the 5th GCD is also generally acceptable, as long as you don’t have a particularly slow GCD (2.45s and up). This is because it takes most jobs a few GCDs to ramp up before getting their buffs out and beginning their burst in earnest.

However, early is always better than late, because a late Divination in the opener will be late for every subsequent Divination window until the group holds their burst for something or the fight ends. That’s why we tend to stress the importance of getting Divination out quickly.

## Card Optimization

Optimizing the value of your cards is what defines optimization for Astrologian as a whole. Everything up to this point is basically “solved.” The optimal thing is either a known quantity, or it can be easily solved for, given your specific circumstances. It’s just a matter of knowing the correct answer ahead of time and being able to press the buttons to execute it.

That’s how pretty much every other job functions. Every GCD and oGCD, every cooldown, and every pixel of movement in a given encounter, solved. Every inch of the job is mapped, from beginning to end, inside and out. It’s comforting, in a way, to know that there’s a relatively tidy answer out there waiting to be found for every situation you can think of… for *other* jobs.

Not for Astrologian. Not for cards. This is what high-level optimization is all about for us. This is what separates an exceptional healer from an exceptional *Astrologian*.

Disclaimer: it's completely unnecessary to worry about this level of optimization unless you're playing in a highly competitive environment (or you're a big nerd like me and you just *like* it). You can still get 99s on FFLogs just following the basic card guidelines and having very good healer fundamentals.

### Target Selection

It's no secret that some jobs do more damage than others. Notably, "selfish DPS" that provide no damage buffs usually contribute more raw damage themselves. Assuming equal gear and skill, they would be topping the damage meter, and you might expect them to be the best card target, because they're doing the most DPS.

But you would be wrong. At least, sometimes. If there's a huge DPS disparity and one person is doing 50% more DPS than everyone else, they obviously have card priority. But we're here to talk about optimization, where one would assume that's not the case.

You see, the key flaw of simply basing your card targets just on the DPS meter is that the meter reports the average DPS across the entire fight, while a card is only active for 15 out of 30 seconds. You shouldn't be asking who's doing the most DPS; you should be asking who's doing the most damage **in this 15-second window.**

For example, a Black Mage might be doing the most DPS overall, but they don't have particularly significant damage spikes. Their damage is much more evenly distributed than most jobs. In contrast, a Dancer will usually have the lowest personal damage out of all the DPS, but a significant amount of their total damage is condensed into their two-minute burst windows. That can easily make them a better card target than a Black Mage for that window. In fact, due to their lack of significant burst windows, Black Mages are often the *worst* DPS to card during coordinated party burst windows.

In general, you prefer to play melee cards, because melee DPS generally have higher personal DPS *and* have bigger burst windows. The occasional exception to this is Summoner, specifically because of how their DoTs snapshot. Their DoTs are a large portion of their damage, and when you card them during a burst window, they will be snapshotting their DoTs with your card (unless you're late).

At that point, you're buffing everything they're doing for that 15-second window *and* an extra 15 seconds of their DoTs. Their DoTs contribute almost as much to their overall damage as Ruin III, their primary filler spell, so you're getting a lot of extra value with that snapshot.

### Card Timing

While selecting your card target is important, much of that is decided for you based on what cards you draw and what Seals you need. The thing you have direct control over is *when* you card someone, and that's the variable that determines the optimal target in the first place.

Summoner makes an excellent example the importance of timing. In the most common opener, Summoner snapshots their DoTs at around 11 seconds, right after all the party buffs should be in place. Those DoTs last 30 seconds, and they're so beefed up that carding the Summoner right before their DoT application can result in almost *twice as much damage* gained from the card, compared to carding them a single GCD later and missing the DoT application.

That's an extreme example, but not an entirely unrealistic one. Every job's DPS has peaks and valleys. If cards lasted longer, the disparity between properly and improperly timed cards wouldn't be so dramatic, but cards only cover a handful of GCDs. Unfortunately, that makes it very easy to "whiff" a card completely, only catching the lowest damage portion of someone's rotation.

We've discussed that when choosing a target, you should be asking who is doing the most damage in that 15-second window. But, beyond the opener, you have the freedom to hold cards for almost 30 seconds without delaying your next Draw. The 15 second window isn't the whole picture, because *it's not just the one 15-second window*. It's any possible 15-second window that begins within the 30-second window between Draws.

The 30 seconds you have to use a card is called a "**Draw window**," and the 15 seconds of the card buff is called a "**card window**." So, the real game here is to identify the highest damage card window within each Draw window, between all potential recipients of whatever card you have.

That involves understanding the ebb and flow of your party members' rotations and learning how to keep tabs on them throughout the encounter, sometimes down to the exact GCD. Ideally, you would have a solid understanding of other jobs' rotations in order to do this.

But, even without being intimately familiar with how each DPS is played, you can still learn to catch individual burst windows with a combination of studying your group's logs for each encounter, good communication during the fight, and/or watching for certain cues that help you track and predict burst windows.

Almost every ability in the game has a cooldown that is a multiple of 30 seconds. That makes it relatively simple to keep track of people's burst cycles by knowing the length of their main cooldowns and measuring them out by counting your Draws. In doing so, you'll find that most DPS operate on 60-second and 120-second burst cycles, which should be easy to keep track of: every other Draw, and every Divination window, which you're already playing around.

To keep a frame of reference, it can also be helpful to watch the DoT timers on the boss, particularly if you have a Samurai or Summoner, as it's especially important that you cover their DoT refresh when you card them.

At the highest level, in a very consistent group, card optimization can be planned in advance, albeit with considerable effort. In order to map out every Draw window in advance, you would analyze logs of your group in that specific encounter and identify the ideal melee and ranged card target and timing for every single Draw window.

You would then have to keep track of those targets and specific timings and act accordingly based on what you draw in each window. For example, if you get a melee card at 4:30, maybe it's best to play it immediately on the Monk to catch their Brotherhood window, and if you have to play a ranged card instead, maybe it's best to hold it until close to 5:00 so you can buff the Summoner's Firebird Trance.