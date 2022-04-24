---
title: Monk Advanced Guide
card_header_image: /img/jobs/mnk/advanced.png
authors:
  - Perfect-Balance
patch: "6.1"
lastmod: 2021-11-15T21:07:21.818Z
changelog:
  - date: 2021-11-15T21:07:56.881Z
    message: Added page
  - date: 2022-04-23T16:13:41.661Z
    message: Moved everything from the Basic guide that needs to be here.
---
# Advanced Monk Gameplay Techniques: Reaching Enlightenment

- - -

# Opener Variations

The two basic opener choices are not going to work perfectly in every situation. As such, we can modify our openers quite easily in order to better suit our needs.

## Early Openers

An early opener is exactly what it sounds like. By skipping past the Opo GCD straight into a Twin Snakes, we are able to get our buffs on cooldown sooner. These openers are generally used in situations where a phase or fight would end while we are still in a buff window in order to squeeze more effective usage out of those buffs. If, for instance, an encounter ends at 6:20 and we are using a standard opener timing, we will only be able to leverage roughly 16 seconds out of Riddle of Fire, and 12 seconds of Brotherhood. By doing an early opener, we would instead be able to get the full usage of both buffs.

### Early Lunar Solar

![](https://i.imgur.com/ARMMArp.png "Early Lunar Solar Opener")

### Early Double Solar

![](https://i.imgur.com/bq5YNEX.png "Early Double Solar Opener")

## Double Lunar

It goes without saying, but the Double Lunar opener is *incredibly* fight specific. It's a much slower opener than any of our other options, with Riddle of Fire not being used until after the 4th GCD. Ideally for *us*, Brotherhood would also come out later to better cover our burst, however the slight gains that we would personally get from this do not outweigh the negative effect it would have on our teammates. 

Generally the only reason for using this opener is going to be if the delayed blitzes hit multiple targets where standard timings would not. Potential pitfalls to keep in mind when considering where to use this opener include being slightly desynced from raid buffs, being forced into Double Solar even windows hence potentially losing a Phantom Rush, and potentially losing time on Riddle of Fire.

![](https://i.imgur.com/xq9uRlJ.png "Double Lunar Opener")

- - -

# Useful Plugins

| Plugin                    | Description                                                              | Link / Info                                                                                                                                                                                                                                                                                                                                                |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| ------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Triggernometry            | Many triggers we typically use hinge on Triggernometry to function       | [GitHub](https://github.com/paissaheavyindustries/Triggernometry/releases)                                                                                                                                                                                                                                                                                 |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| Auto-Attack timer         | Displays a bar showing your auto-attack timer                            | [XML Guide](https://cdn.discordapp.com/attachments/166036664341364737/920290186762534932/auto_timer_guide_edition.xml)                                                                                                                                                                                                                                     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| Missed positional trigger | Says "miss" when you miss a positional. (Doesn't require Triggernometry) | Go to Custom Triggers in ACT and import XML.  Change "NAME HERE" to your character's name and copy below to your clipboard: <Trigger R="^A[^ ]* 15:[^:]+:NAME HERE:((38428(CFD2)5F3\\\\\[EF]DE\\\\\[B24]64AC1D3\\\\\[9A]):[^:]+:[^:]+:[^:]+:(73\\\\\[9ADF]46)(DEB58):[^:]+:[^:]+:[^:]+:(3644))" SD="Miss" ST="3" CR="F" C=" General" T="F" TN="" Ta="F" /> |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |

&nbsp;

- - -

# Cursed Knowledge

## Double Weaving

You'll likely have noticed that across the basic guide I say "if you're able to double weave without clipping" a lot. Realistically, you probably can't do this unless you're living right next to the servers. For those of us that don't sleep in a nice warm server room, you can use XIVAlexander to mitigate your problems. XIVAlex works by effectively simulating a low ping environment by removing some animation lock, which should enable double weaving on a worse connection. If your connection is laughably bad, i.e., you're playing on NA from EU, this probably isn't going to be good enough, but if you're playing on the right server and your internet by itself just isn't good enough, this should definitely help.

As with all 3rd party programs you should not discuss it in-game, and although to my knowledge no one has been banned for its use as of yet, I do want to say **use at your own discretion.**
You can download it [here](https://github.com/Soreepeong/XivAlexander).

## RoF Holding - Double Blitz

RoF holding is exactly what it sounds like; strategically holding your Riddle of Fire. The general advice for Monk so far has been to keep things strictly on cooldown, both for the sake of reaching maximum potential CD uses while staying in sync with raid buffs. That being said, in an optimised scenario with a pre-planned killtime, we have the option of holding our RoF in order to fit an extra blitz into odd RoF windows. Generally you would hold the odd RoF anywhere from 10-20 seconds depending on where the natural Demolish refresh occurs in order to fit the 2nd blitz into the tail end of RoF. On the following Even window, another delay of a similar duration is required in order to allow both PB charges to cool down again.

This concept provides the Monk rotation with even further freedom, allowing us a way to safely (depending on killtime) drift our RoF if needed to avoid mechanics/downtime, while simultaneously ensuring that we will not end a fight with RoF on cooldown while having a PB charge available.

The example provided demonstrates two different practical applications of RoF holds in order to leverage more buffed blitzes without losing RoF time. The 2nd example demonstrates how you can avoid having to “re-drift” to realign on the following even window, in cases where your group holds their 2 minute burst effectively allowing for a 2 blitz odd window into a 1 blitz odd window into an even window.

![](https://i.imgur.com/lwgYkRU.png)

Keep in mind that since this is putting an extra blitz into an odd window, it has the added effect of pushing your Phantom Rush “back” a window, either knocking you into or out of Double Solar even windows. Generally, you want a double blitz odd window to be Double Lunar; this is because it will set up following Even windows to be Solar - Lunar sequences, allowing for greater freedom of entry than doing a Lunar - Solar sequence where you are forced into doing a Solar sequenced Phantom Rush. That being said, as always everything is fight, comp, and killtime specific, as this kind of optimisation doesn’t have any one solution that is going to be correct 100% of the time; experimentation is key to find what’s right for you.

## Triple Blitzing

Triple Blitz windows are reliant on long periods of downtime in order to leverage the 20 second durations of both Perfect Balance + Masterful Blitz in order to charge up a Blitz, then hold it into your next Riddle of Fire where the 40 second cooldown of Perfect Balance will have refreshed, allowing for an additional Blitz in an Even Riddle of Fire window at no cost. This is doable due to the fact that AoE skills will grant a Beast chakra even if they don’t hit a target.
Given the freedom Monk’s rotation allows, and the penchant it has for bending the rules when optimising, there are 4 potential entry states for an extra blitz window depending on your nadi.

### 0 Nadi

Given that you go into this window with no Nadi, you are provided with options on how you structure this window. Starting with Elixir Field; starting with Rising Phoenix - whatever you pick, the way that you progress within the window will have to be different to accommodate your choice. As for which one to choose - it depends. Demolish usage will be different depending on which you use, either clipping or falling off, resulting in subsequent Demolish uses being in different places following each burst window.  As a result, phase timing can push one option ahead of the other in terms of DPS. Listed are two potential reopener sequences.

![](https://i.imgur.com/ikn50Fd.png)

Following this your rotation is going to have to change to accommodate your new Nadi alignment, as you will be entering even windows with a single Lunar nadi built up. This means all subsequent Even windows become a strange Optimal Drift/Double Solar hybrid, whereby you have to do Rising Phoenix -> Phantom Rush. This is fine initially as you’re doing RoF+BH 1 windows, but when you start to hit RoF+BH 3s it gets awkward. Again though, this is such a specific technique that when using it you should be planning out your entire rotation anyway, and as such will have to come up with your own solutions to the problems you find arising in whatever scenario ends up accommodating Triple Blitzes that follow on from an Optimal Drift start, as there are too many variables to apply a one-size-fits-all solution.

### 1 Nadi: Lunar

As you are beginning with a Nadi already, you are relatively locked in as to how the rest of the window is sequenced. We are able to leverage the freedom afforded to us by Phantom Rush and Rising Phoenix for favourable Twin/Demo reapplications.

![](https://i.imgur.com/8AwsAdn.png)

This is much simpler than the previous examples, and essentially lets your rotation continue entirely unmolested.

### 1 Nadi: Solar

Much like the single prepped Lunar, having a Nadi already generated leaves us without too much room for how to interpret this window.

![](https://i.imgur.com/D2OOOSV.png)

### 2 Nadi

As with the 0 Nadi triple blitz, this window offers us options. The main difference between the 2 suggested windows here are again, the Demolish timings, where subsequent phase length is going to dictate which option is the better choice.

![](https://i.imgur.com/hb1bnYK.png)

Key things to keep in mind regardless of which route you choose to follow when attempting a Triple Blitz is that it starts quite late relative to other jobs reopeners. As such you might have to modify your burst to better catch your groups timings and to have the ability to place Brotherhood in a better spot for your team. This means potentially doing an early reopener variant, starting on Twin snakes and inverting all following Opo GCDs. 
Also, due to the specific conditions required to execute a Triple Blitz window it’s going to be incredibly rare that you actually have an opportunity to implement this technique, and given the particular nature of these windows each will likely require some additional fine tuning/planning to account for the specific encounter therein. There are a myriad of potential tweaks that could be made to better fine tune these burst windows to specific encounters, from adjusting Demolishes to swapping Blitzes around entirely. I cannot stress enough that what is presented here are in no way universal solutions to the ways these windows will occur in real encounters, and they will require meticulous planning if you want to squeeze out the absolute most potency possible.

## Dragon Kick Spam

Dragon Kick spamming is a way to pull tiny potency gains out of our core rotation at the end of a phase/fight. Assuming that a fight is coming to an end, you aren’t in a burst window, and all of your PB charges are off cooldown, you may be used to timing an SSS as your final GCD and think no more of it than that. However, we can take advantage of the fact that an uncomboed Dragon Kick is higher upfront potency than any of our other six core GCDs. We have a priority checklist to keep in mind that determines how long you can spam DK for at the end of a phase:

* Any remaining Leaden Fist procs should be spent on a Bootshine with Form bonus if possible.
* Disciplined Fist cannot fall off.
* SSS should be the final GCD.

Once any remaining Leaden Fists are spent and you have enough time left on Disciplined Fist, you can simply press Dragon Kick up until the penultimate GCD of the phase. Sometimes this might result in just getting a single extra DK before using SSS, other times it might mean getting multiple, it depends on where your rotation is at the end of a fight.

At the other end of the spectrum, once you understand and can apply this to the *end* of a fight, you can look back to to the opener and use it at the *beginning* of a fight too. Assuming you have mapped out every GCD of a phase and know that the phase/fight will end with filler GCDs, you can replace all of the filler following your opener while your potion is still active with Dragon Kicks. This is the exact same principle as above, but requires a perfectly mapped fight in order to squeeze even more miniscule potency amounts out of your opener tincture.

## Brotherhood Chakra Application

![Ghosting Ranking](/img/jobs/mnk/mnkguide_0013_ghostrank.png "Ghosting Ranking")

![Damage Application](/img/jobs/mnk/mnkguide_0014_damageapp.png "Damage Application")

These images show the damage application on a number of Monk skills. It's called the "Ghost Ranking" because if you press the button and the boss goes invulnerable in a shorter amount of time than is displayed, the damage will not apply, it will "ghost".

This is relevant to Brotherhood because Brotherhood Chakra are granted upon damage application too. This means that if you have four Chakra opened, Brotherhood on, and you press Demolish, you won't get a Chakra until 1.604 seconds after you've pressed that Demolish. Effectively this means that by the time you do receive your 5th Chakra, it's too late and you have to press your next Opo GCD now, forcing a Chakra overcap.

## Brotherhood: Damage vs Chakra

Brotherhood is split into two halves; the 5% damage buff, and the Meditative chakra gain buff. Awkwardly, these two halves function differently to one another. The 5% buff aspect works the same as every other buff in the game; if the buff is active when your action snapshots, the 5% damage up will be applied. This is not the case for Chakra generation, which instead occurs on damage application - for both your actions and the actions of your group. 

What this means practically is that if you were to press the notoriously slow Demolish with 0.1s of Brotherhood left on its duration it will gain the +5% damage, but it will not generate a Chakra. Inversely, if you press Brotherhood then Demolish, it will generate a Chakra but will not have the +5% damage applied.

Generally it is advised to early weave Brotherhood. This is because Brotherhood is an AoE buff, and AoE buffs take around 0.75s to apply to yourself as opposed to single target personal buffs like Riddle of Fire which are instant. What this means is that if you weave Brotherhood late, there is a good chance it won’t apply until after your next action, thereby losing the +5% damage on that GCD. It is worth keeping in mind, however, that even if +5% damage is missed on that GCD, hitting an additional damage application in Brotherhood is now worth 20% of a Forbidden Chakra. On average, this outperforms getting the +5% damage buff on an extra GCD.

At a 1.94 GCD, an early weave Brotherhood leaves roughly 0.7s of Brotherhood duration left after the final GCD you use in Brotherhood. That’s not enough to catch the damage application of anything other than Six-Sided Star, which will not be a particularly common action to be used there. However, a late weave Brotherhood has a whole 1.4s left there, which is enough to catch the damage application of anything but Demolish. This means that late weave Brotherhood generally outperforms early weave Brotherhood now.

You may be feeling confused, upset, or even lied to here, as all of the openers listed in this guide contain an early weave Brotherhood. This is because at the end of the day Brotherhood is a raid buff, and while we can adjust it all we like to the perfect spot for us, the damage we would gain is quickly outweighed by placing Brotherhood in a worse spot for the rest of the party. That being said, the damage application on Demolish is so slow that an early weave Brotherhood will actually still catch the additional Chakra generation; which would be ideal were we able to place Brotherhood before Demolish in our opener. Nonetheless, just because we aren’t able to do the “perfect” Brotherhood in the opener is not the end of the world; there are still avenues open to us to take advantage of this mechanic in actual encounters, where mechanics, kill timings, and composition can allow us certain freedoms with how we place Brotherhood.

With all of this in mind, here are the three possible ways a Brotherhood window can go:

* Eight snapshot, seven chakra Brotherhood: Happens when you early weave Brotherhood after anything but Demolish. Buffs the damage of the next eight GCDs, but only has 0.7s duration remaining after the final Brotherhood GCD so it will not get chakra from it unless it’s Six-sided Star (very unlikely).
* Seven snapshot, eight chakra Brotherhood: Happens when you late weave Brotherhood and your final Brotherhood GCD is anything but Demolish (pretty likely, you’re generally in the PB window to prepare for using Phantom Rush there and would like to be spamming Dragon Kick and Bootshine), but you miss the damage snapshot of the GCD directly after Brotherhood. Better on average than eight snapshot, seven chakra Brotherhood.
* Eight snapshot, eight chakra Brotherhood: The king of all Brotherhood windows. Happens when you early weave Brotherhood after Demolish or you perform the legendary Brotherhood “middle weave”, using it just late enough to have time for Brotherhood to apply to yourself (this weave would be just a tiny bit earlier than your standard Riddle of Fire late weave) but leaving as much extra Brotherhood duration as possible to catch the final GCD’s damage application (except if it’s Demolish, but that’s rare). One concern with this is that Dragon Kick takes a whole 1.3s to apply its damage and Dragon Kick is your final GCD pretty frequently. However, this being a possible window to hit has already been tested ingame with a bit below 100ms leeway at 1.94 GCD. 

By the way, you’re at the absolute worst losing around 35 potency by just settling for seven snapshot, eight chakra Brotherhood windows every time, not to mention that this is looking at Brotherhood in a vacuum for your own GCDs when there’s a high chance the truly best optimal time to pop it in a high-end optimization context will be relative to where your entire group’s GCDs generally fall each pull. You’ve already lost more time of your life by reading this section than you’ll ever get back in the total time saved killing bosses with perfect Brotherhood play over the entire expansion.

## Auto-attacks

We have a very minor optimization available to use through Riddle of Wind, where the placement of RoW between auto-attack swings can gain additional autos overall. Again, this is incredibly minor and you can likely expect less than additional two autos compared to someone who is just pressing RoW on CD, but nevertheless this is an option if you so choose to push Monk to the absolute limit.

![Auto-Attack Usage](/img/jobs/mnk/mnkguide_0015_autos.png "Auto-Attack Usage")

This image from Aya demonstrates in slightly more detail what the auto-attack timer you'll see in-game is. It essentially shows the best and worst times to press RoW. Green is the best, Red is awful, and orange is fine. The closer to green the orange is the better, the further away from green orange is, the worse. It is not worth holding RoW multiple GCDs for more favorable auto-attack timer alignment; this is simply to be used to identify a better injection point in the early/late weave window.

Upon installing the plugin via Triggernometry, it should look something like this:

![Auto-Attack Trigger](/img/jobs/mnk/mnkguide_0016_aatrigger.png "Auto-Attack Trigger")

If you click on the !README and then click Edit, you'll see a "Move me" action. This can be used to move the element wherever you would like on your screen.

## Sub-90 Play

Until some poor soul goes back and dedicates time to 70/80 Ultimate resources, the best generic advice we can give is to just play Lunar Solar opener. Double Solar struggles as Flint Strike is weaker than Rising Phoenix is at Level 90. Lunar Solar also offers greater flexibility in the two minute windows.

There have been some questions regarding Double Lunar as a low-level option, but the way things stand currently, it looks unlikely to ever be the case. Double Lunar has to make too many compromises in both the opener and its two minute windows due to lack of flexibility caused by fitting in so many Opo GCDs, and so probably isn't ever worthwhile.

## FPS Locking

In memoriam.\
Dead tech made redundant by the \[REDACTED] plugin.