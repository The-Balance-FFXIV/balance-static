---
title: Monk Advanced Guide
card_header_image: /img/jobs/mnk/advanced.png
authors:
  - Perfect-Balance
patch: "6.3"
lastmod: 2023-03-06T14:29:47.038Z
changelog:
  - date: 2021-11-15T21:07:56.881Z
    message: Added page
  - date: 2022-04-23T16:13:41.661Z
    message: Moved everything from the Basic guide that needs to be here.
  - date: 2023-03-06T14:29:48.655Z
    message: Added Macromania.
  - date: 2023-06-11T15:12:35.402Z
    message: Updated Macromania section. Added The Nuclear Option and adjusted
      Mouseover Macroed GCDs section.
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

| Plugin                    | Description                                                              | Link / Info                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Triggernometry            | Many triggers we typically use hinge on Triggernometry to function       | [GitHub](https://github.com/paissaheavyindustries/Triggernometry/releases)                                                                                                                                                                                                                                                                                   |
| Auto-Attack timer         | Displays a bar showing your auto-attack timer                            | [XML Guide](https://cdn.discordapp.com/attachments/166036664341364737/920290186762534932/auto_timer_guide_edition.xml)                                                                                                                                                                                                                                       |
| Missed positional trigger | Says "miss" when you miss a positional. (Doesn't require Triggernometry) | Go to Custom Triggers in ACT and import XML.  Change "NAME HERE" to your character's name and copy below to your clipboard: `<Trigger R="^A[^ ]* 15:[^:]+:NAME HERE:((38428(CFD2)5F3\\\\\[EF]DE\\\\\[B24]64AC1D3\\\\\[9A]):[^:]+:[^:]+:[^:]+:(73\\\\\[9ADF]46)(DEB58):[^:]+:[^:]+:[^:]+:(3644))" SD="Miss" ST="3" CR="F" C=" General" T="F" TN="" Ta="F" />` |

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

The example provided demonstrates two different practical applications of RoF holds in order to leverage more buffed blitzes without losing RoF time. The 2nd example demonstrates how you can avoid having to “re-drift” to realign on the following even window, in cases where your group holds their two minute burst effectively allowing for a two blitz odd window into a one blitz odd window into an even window.

![](https://i.imgur.com/lwgYkRU.png)

Keep in mind that since this is putting an extra blitz into an odd window, it has the added effect of pushing your Phantom Rush “back” a window, either knocking you into or out of Double Solar even windows. Generally, you want a double blitz odd window to be Double Lunar; this is because it will set up following Even windows to be Solar - Lunar sequences, allowing for greater freedom of entry than doing a Lunar - Solar sequence where you are forced into doing a Solar sequenced Phantom Rush. That being said, as always everything is fight, comp, and killtime specific, as this kind of optimisation doesn’t have any one solution that is going to be correct 100% of the time; experimentation is key to find what’s right for you.

## Triple Blitzing

Triple Blitz windows are reliant on long periods of downtime in order to leverage the 20 second durations of both Perfect Balance + Masterful Blitz in order to charge up a Blitz, then hold it into your next Riddle of Fire where the 40 second cooldown of Perfect Balance will have refreshed, allowing for an additional Blitz in an Even Riddle of Fire window at no cost. This is doable due to the fact that AoE skills will grant a Beast chakra even if they don’t hit a target.
Given the freedom Monk’s rotation allows, and the penchant it has for bending the rules when optimising, there are four potential entry states for an extra blitz window depending on your nadi.

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

As with the 0 Nadi triple blitz, this window offers us options. The main difference between the two suggested windows here are again, the Demolish timings, where subsequent phase length is going to dictate which option is the better choice.

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

# Macromania - By guest author Mantra Bot

Hello monks, my name is Mantra Bot and I am here to tell you all about the wonderful applications of macros when they aren’t being used for crafting rotations and fancy collapsable hotbars. Special thanks to Speedy Ben for discovering mouseover macro GCDs with me, Neiru Salwa for their macro queue diagrams, Andy Lee for being a good lab rat, Aya Liz for knowing all of this tech better than I do already, and the plethora of people who gave suggestions on my WIPs you know who you are.

## Macro Queuing

When you press most actions anytime in a 0.5 second window before they’re able to be cast, the game will “queue” the input for you. That is, after animation lock ends and the cooldown on the action is complete, the action will be cast.

Something this action queue does not apply to is macros, macros execute independently of anything else. So your 4 line suiton macro with ten chi and jin lines will still go off even if you’re in the middle of the GCD roll, doing utterly nothing as the animation lock is not yet complete–the lines of the macro attempt to execute, but are not able to. Time it slightly less incorrectly and maybe you’ll do a hyoton.

What this section will instead try to explain is how you can emulate the normal action queue for a single ability, spell, or weaponskill through the use of properly written macros.

To start, the lines of a macro are executed every frame. That is, let’s say you have a macro where the first 14 lines are /ac “Leg Sweep” and the final line is /micon “Leg Sweep” in order to track its cooldown.

This macro will attempt to input Leg Sweep every single frame for 14 frames. This means that if you press this macro anytime in the 14 frame window before the animation lock from your last ability or weaponskill is over, it will cast Leg Sweep on the first frame on which you’re able to. Conversely, if you had only used a single line of ‘/ac “Leg Sweep”’, you would have to be frame perfect on your macro press in order to cast Leg Sweep on the first frame on which animation lock is over. 

Because the normal 0.5s action queue also executes your action on the first frame on which it’s able to, the 14 line macro queue is functionally the same, albeit with a much smaller timing window.

“action queue comparison” by Neiru Salwa

![](https://lh6.googleusercontent.com/OUwBNX_pBqHNUOIsvG7VljYVwd3F_maoqHBEREihXemt72so9LZlZTwqco4Un6f1A2dZzWPGasnCFQgrj3s1IDilMs8u0RxJvA5bTVJj3lmQN-98LUTCWnyB9c5XNoL8IiZrnIibHamX_-N_O-FMsbo)

The diagram above by Neiru Salwa attempts to visualize how the normal 0.5s action queue and the 14 frame macro queue can be considered to be functionally the same. With the knowledge that the lower green portion is when the action is cast, notice that the normal Leg Sweep and the 14 line macroed Leg Sweep are cast at exactly the same time–the frame after animation lock completes. The 1 line macroed Leg Sweep has no queue time at all and therefore does not cast the action when used at the same time as the other two–a frame perfect input would have had to be executed in order to use Leg Sweep the frame after animation lock completed.

However, do understand that higher framerates will make this 14 frame window much tighter. At 60 fps, a 14 frame window is roughly 0.25 seconds of queue time. Increase your framerate to 120 and suddenly that queue time is halved to roughly 0.125 seconds. The reverse is as expected: at 30fps the 14 frame window takes up almost a full 0.5 seconds. At all framerates, the normal 0.5 second action queue stays constant.

![](https://lh5.googleusercontent.com/hROtrDcqteSdt__iQl4Tg0U0c01FbXC0oLQEF8dWHym3canj9eXi6RwLy3n9SNiBxt0LlptUp1qgVVk53P1fiRVw0qI624xOTzk7CvOFEyVZnRYE3XQYjv44-Cijmd2Nxlh8RFKo1FL-SDjiT1MyDUs "Chart")

The importance of this information is more in how it applies to abilities such as DRG’s Dragon Sight or DNC’s Closed Position, allowing you to use a mouseover macro for instance while still being able to double weave it with other abilities. This also explains why our mouseover Thunderclap macro is written the way it is.

### Applications

Where macro queuing truly shines is how it can be used to queue inputs when you normally cannot. Take the situation where a boss becomes targetable after a period of downtime (P5S’s Devour, P8S’s High Concepts, etc). You can’t actually use the normal 0.5 second action queue here, as there’s nothing to target. This means that with normal button presses, you’ll be stuck in the same situation as the single line macro: to cast your gcd on the frame on which the boss becomes targetable, you must be frame perfect with your input. We can fix this issue through the use of macro queuing: the lines of the macro will always attempt to execute even if the conditions to use your GCD are not met. Therefore, press your shiny first GCD macro in the 14 frame window before the boss becomes targetable and you will cast your GCD on the very first frame on which the boss is targetable.

“targetability queuing” by Dr. Salwa

![](https://lh5.googleusercontent.com/-T2vlYG3DIJCsPUuruolAsPQfZnJvO5oPpY_hebCS1RJNiDfbC4ROSVTJAGrPaZPEHnrWfVegwaG8gWdOS02HMq3gNAGBmZz7HQ6ZUttHTGRXLRCpdtXp-RufRDNxCwVmlnWpAgnJfwbdxz1A4k9408)

Note that the use of a macro queue in this scenario is pretty much a more ethical version of a third party tool, such as an AutoHotKey script, that spams your buttons every single frame.

As a side note, you also have to address the problem of actually targeting the boss. The easiest solution here is to turn on auto-target in the character configuration. This option has no downsides, at least from my experience–your macro will both target and execute your GCD as soon as it’s pressed. If you still refuse to yield, know that holding tab will also target on the first frame; as opposed to mashing tab, which falls into the same trap as the normal action queue when a boss goes targetable.

Macro queuing also applies to any scenario in which your animation lock and GCD are over but you can’t actually use anything due to stuns, knockups, etc (i.e. the stuns in P6S, the knockup in P7S). Similarly, in these cases you can’t queue your next action using the normal action queue due to the evil “cannot execute at this time” message. Instead, you can use the macro queue to cast immediately after the said stun or knockup finishes.

Additionally, this applies to moving back into a skill’s range after your GCD roll and animation lock are finished. In this case, there isn’t an actual timer or status you’re trying to queue your input on, rather you cannot use the normal action queue while outside of the range of a skill: You’re using the macro queue to cast on the first frame you get back in range. On Monk, this applies to moving back into melee range to use a weaponskill or ability, as well as moving back into the 20y Thunderclap range.

However, don’t leave this guide and convert your entire hotbar to macroed abilities and GCDs. At most, all you gain is very, very slight consistency on where your cast is at the start of a phase, maybe frame 1 versus frame 7. Not to mention the smaller queue time inducing possible GCD clips if you’re not pressing the macros at the correct times. What I personally recommend if you want to use this tech is to have separate buttons for the GCDs that you want to macro, ideally bound to a key that you can spam comfortably (dare I say it, even a clicked macro could work here 😬). 

The last place where the macro queue was truly helpful was the mythical “ripple GCD” of Dragonsong’s Reprise (Ultimate) during the rewind phase. Because the stun from Grinnaux had propagation delay as it applied to each player–closest were stunned first, farther players received the stun last–you could actually hit Charibert right before the stun applied to you. However, because of Charibert only being targetable as the stun initially goes out, hitting this GCD as the anything but the 8th person to receive the stun propagation was difficult. The macro queue alleviated this problem as a way to consistently hit the GCD and remove the overreliance on being the 8th person in line for the stun propagation–you could go as far as the 5th person in line and still hit the GCD. ![](https://lh5.googleusercontent.com/4mrBofkc8uZnIYrX0velIYpOBIzFXSg8LD8p09Dlwui7GZWK5dry4zReGUkh3QukgwHjDulc8lFe1ZSfEji956Dfk5R2Y9RU0FV9Q3cBJtdEkkHfFxLbNHuctMM83LSxmN7NLdYsHZ_KwHDRT94kaJs)

(non-macroed farthest person away clip: <https://streamable.com/sl7cce>) 

**Addendum: The <t>echnology**

Thanks to the efforts of Nyan Pls, there is now another application of the macro queue. It turns out that adding <t> to a /ac line will force you to have a target in order to execute the action.

This means that, for example, if you hold tab and spam a 14-line /ac Rockbreaker <t> macro, it will macro-queue the Rockbreaker for when the boss is targetable. Obviously this doesn’t really apply to Monk, as in most scenarios you’ll start post-downtime with an Opo or Twin - 1st GCD post-downtime blitz is usually avoided. This is much more important on jobs such as Dancer, as it allows you to queue something like Standard or Tech Step out of downtime.

## Macrochakra

Now that you understand how macro queuing works thanks to the last section, we can now lessen the burden of chakra as a mechanic.

![](/img/jobs/mnk/6_meditation-macro-lines.png)

If you’ve played Monk, you’ve definitely felt a sort of “clunkiness” when it came to mashing your Forbidden Chakra button during Brotherhood. That awkwardness can be blamed on the fact that you can’t queue TFC when not at 5/5 chakra. There’s another problem too: mashing too hard on a late chakra proc and queuing a Meditation instead. This is because of how long the 0.5s action queue is compared to Mediation and TFC’s shared 1s recast time.

(note: an /ac “Meditation” macro line will execute The Forbidden Chakra when at 5/5 chakra)

A macro solves both of these problems. TFC being unqueueable when outside of the 5/5 chakra state is the same situation that has been solved in the previous macro queue applications–by using a macro you have a 14 frame queue on whenever you get 5/5 chakra within the GCD. The problem of queuing a Mediation is also alleviated because of the much smaller 14 frame queue (at normal framerates) leading to less accidental queues. But this is also because of how the normal action queue takes precedence over macro lines when queuing an action–if you’ve already queued your next weaponskill and attempt to use a macro in that 0.5s window, it will ignore the macro actions entirely and queue the weaponskill cast.

Although this seems like nothing but a gain because of dodging most of the chakra overcaps during Brotherhood, there is one important caveat: you must work with a 14 frame queue for every single Forbidden Chakra cast. This means that if you’re in the situation of 5/5 chakra during animation lock (e.g. hitting Bootshine at 4/5) you must adjust your TFC cast time such that the 14 frames overlap with the completion of the animation lock. Essentially, you are accelerating your progression to carpal tunnel status because of the obligation to spam this Meditation macro anytime you approach 5/5 chakra. 

While you can use both a macroed TFC and a normal TFC button at the same time, consider that you’d have to adjust on the fly to which button to use at the right time–normal TFC’s during animation locks and macroed TFC’s outside of animation locks during Brotherhood. An easier, less brain intensive and muscle memory shattering fix is to lower your framerate to get a relatively longer 14 frame queue window. If you’re still sticking to the 2-button chakra solution, consider remapping mousewheel to your macro keybind similar to how source games bind jump to mousewheel in order to bhop.

If you use ReAction, you might be wondering about how sundered chakra plays into this. Actions that do not meet their requirements to be used cannot be queued, therefore even after splitting TFC into a separate button you can’t use the normal action queue to queue the 5/5 chakra state during Brotherhood. A consequence of chakra sundering is that the /ac “Meditation” lines won’t use TFC when at 5/5 chakra anymore. Because you cannot macro actions that cannot be assigned to your hotbar, the only solution here (barring finding a plugin that allows macroed TFC) is to turn off chakra sundering.

### Early and Late Queues

With the information that macro line actions essentially stop working once you’ve queued an action, there is a certain rotational choice we can use to further guarantee less chakra overcap. 

As soon as you use an action inside of the normal 0.5s action queue window, it is “locked” into being cast at the end of animation lock. Macro queues do not possess this quality and can be said to have a “lower priority” than other actions. For example if you were to use your TFC macro 14 frames before animation lock completes then queue a PB cast say 12 frames later, even though you “cast” your TFC first, the PB input will take priority and be cast instead of the TFC. Take the other extreme where you queued your PB input a full 0.5s before animation lock completed and then spammed the living hell out of your TFC macro. In this case, the PB input is already locked into the action queue–even if you do attain 5/5 chakra during the 0.5s normal action queue, nothing can be done to use that chakra.

“the early early weave vs. the late early weave”

![](https://lh3.googleusercontent.com/J11nG__fur_EFzOQoDOFontzlVR2RxzM1-hXRQcZof_l9NfsBRA8j6pOA_tJshF5HwZQTdbI0u2yrMNZQFEM0-i3UB2vTE6_VlC9z7A_PZKaEMIpxzGkmGZU2pOewpRC8AAPmRnbT2KIfvc-E7Nu9ig)

With the concept of the action queue lock in mind, there is a very small but meaningful rotational adjustment we can make to play around it during Brotherhood. By delaying any first weave oGCD queues until as late into animation lock from your GCD as possible, you leave yourself the option to early weave TFC and reduce the amount of time you're sitting on 5/5 chakra during Brotherhood in the event you reach 5 chakra during the previous GCD's animation lock.

Ideally this is just another tool used during Brotherhood in tandem with any personal chakra proc prediction/gambling methods that you’ve built up while playing monk.

### Going Cyberpsycho

Another concept born from the knowledge of the action queue lock and Brotherhood chakra procs is the complete automation of Brotherhood chakra procs as a mechanic. First, use the Dalamud plugin NoClippy to increase the normal action queue size from 0.5s to 0.6s (or 0.7s if you’re scared). This means that with proper button mashing of both your GCDs and your Meditation macro, even the worst case scenario of reaching 5/5 chakra at the beginning of the normal action queue won’t result in you clipping your next GCD due to animation lock on TFC. Next, find a way to mash your Meditation macro keybind constantly during Brotherhood’s duration (mashing outside of Brotherhood could potentially ruin a Perfect Balance + Riddle of Fire weave). An toggleable AutoHotkey button spam script works here, with a more ethical version being binding your mousewheel to your macro keybind then [using a pressurized air can on your unlocked Logitech mouse scroll wheel](https://youtu.be/dap5lEuS5uM).

If you refuse to use AutoHotkey and are too poor to buy compressed air, a worthy alternative that still results in complete chakra automation during Brotherhood is to use the Dalamud plugin Macro Chain. With the usage of /nextmacro lines you can increase the number of frames a single meditation macro queue covers–all the way up to a potential 1399 frames if you’re willing to commit ritual sacrifice and convert one of your entire macro pages to meditation macros. Unfortunately this only covers the entire of Brotherhood while at 93 FPS or below, so if you’re a 144hz gamer you might have to press the macro a 2nd time during BH 😔

“average Macro Chain enjoyer”

![](https://lh5.googleusercontent.com/ZW2QTEHunadEC32QZah94emcXFsvgrQnuGpI7aaZf3L236VVdlI8-Lp_d8bNrgt3grG1nQjlc04C-IqpTeyMLdAgTFOeelhZe2yssAibUhrVwaa6-nLiWK81CaLCKEBRGYVHdHCtCye7LwZLCA99Ko0)

One of the downsides of chakra automation would be the situation of planning to late-weave an action during Brotherhood and getting a mid-weave 5/5 chakra. Realistically, the only time where a late-weave would be “required” while already inside Brotherhood would be unfortunate Riddle of Wind or Feint timing. Otherwise, usual chakra prediction methods and late queuing of normal oGCDs still apply even in the world of automated chakra and high speed mousewheel gaming.

### The Nuclear Option

ReAction has a configuration setting for enabling turbo hotbar keybinds. The usage of which allows you to spam a particular keybind with a certain millisecond delay between presses as long as you hold the button down. While this does allow you to reach the same effect of queueing 5/5 chakra during Brotherhood it does not fix the problem of accidental meditation usage in uptime—proper usage of this feature requires you to either sunder chakra or use a macro. The results are frightening: by simply holding down your chakra keybind while pressing your other buttons any and all TFC casts during Brotherhood are automatically dealt with. Your hands free and safe from the threat of carpal tunnel due the requirement of having to press chakra 10 times per second at 140 fps being abolished.

Personally I’m against the usage of this feature. Automating your own inputs to this degree feels a little too close to botting, however I cannot deny that in the long run your hands will thank you. Ethical considerations aside, the end result of queued chakra is exactly the same. How you get there, whether it’s through the 1500 line macro chain or dual macrochakra binds on separate buttons, is entirely up to you.

## Mouseover Macroed GCDs & Application Delay Adjustment

Another wacky application of macros is exploiting how a mouseover action can execute a weaponskill on a target without queuing an auto, allowing you to delay your first damage application.

To actually dig into this, I have to first explain how initial boss aggro–the start of an encounter–actually works. The usual suspect is aggro range: when a person stands within a specific radius of the boss and the magical invisible and impossible to predict (for now) aggro ticks automatically aggro the boss to that person. The other even more usual suspect is the first instance of threat generation, usually the first damage application by anyone in the party. 

Notice however that this is specifically the damage application and not the cast: theoretically if you timed your first cast before the pull started such that the application delay lined up perfectly with the countdown hitting zero, you’d pull on time, e.g. pressing Dragon Kick at -1.29 seconds. This is pretty much the same idea as a wizard’s precast, barring the fact that they are also dealing with their own application delays.

“the auto attack limiter”

![](https://lh5.googleusercontent.com/jrWjpksY0FB9ERetXykDkd8G6VWORDy-YmyQ5HbvSuZNOzwAsXcHZbwTko_TnHa7vtj3OdGGfoxhEdKuGq-MVX-Mdy2BZGyRec4GCpeQK5eX0PL9FTpp-LmBuVB5SBg7fPVb3XJSArU00Zg-SsU5FbU)

Unfortunately, using a weaponskill with the boss targeted while in melee range will also cast auto attack which has an application delay of around ~0.53 seconds. This means we’re limited by this auto application delay, unless we were to miraculously find a way to cast a weaponskill on a target without queuing an auto…

As it turns out we have our savior in the form of a mouseover macroed action:

![](https://lh6.googleusercontent.com/Wl6OAg7t57YSKzTBbDlzP4WY6ZdEMORtEQcRXXyEOQpYa8ENcR0L50NJR59MhQ0MmneiN-bzhXzj9k7J98OxBM810e8or-g45pHBPE_tIYy0Z1Y5KKc52pc_QkqdO_ialEMrAZegU2Nd8ZsNRfOIVwc)

A mouseover will execute our action, Dragon Kick, without the need to target the boss and it happens that using such a mouseover action without the boss targeted will cast the weaponskill without queuing an auto.

We have almost reached the promised land, but there is one last very important thing we need to take care of: applying the same application delay adjustment on our first auto. We must time our first auto attack cast such that the auto damage application will happen at exactly the same time as Dragon Kick’s damage application. If you timed your Dragon Kick correctly this means queuing an auto at around -0.53 seconds: 0.76s after your initial Dragon Kick.

“the promised land”

![](https://lh3.googleusercontent.com/e0KYoJ-fnLv_goHV25Vkoo_IPKsrdmxYycdxP_p93fBosy14x1M3F6gxr5aIg7bfQGWGQxTtQjTem6YbOoddG4tZkG32StiVbeGRQFWpUWc9dmgaXLX_m-p3pLFI3nWlkZPkL02JJD5H1hwQwZYUAm4)

To cast this auto, either you can right click on the boss from an untargeted state which is my recommended method as you’re already doing a mouseover action, or you can press your “confirm” keybind twice: once to target the boss, and the other to start autos. A good visual/audio cue for when to time the auto is on the 2nd “swing” of the Dragon Kick animation: <https://streamable.com/jnxzr4>

If you’re doing a normal lunar solar opener this means weaving your tincture in while doing these wacky inputs. Because cybernetic augmentations that do these inputs for you do not exist (unless you make them yourself), you’re on your own here–with enough practice it becomes very consistent.

While this tech does apply to every job’s first gcd, a given job has to have an application delay long enough to actually gain anything out of it. For example, Samurai’s Gekko has an application delay of around 0.76s so they would only start around 0.23s faster compared to normal auto application. Wizards have it rather easy, as their casts do not start autos and damage those autos do are rather negligible: if they weren’t already adjusting for application delay they stand to gain a huge amount of time from application delay adjustment, compounded with their actual precast times. Black Mage, for instance, has an application delay of \~1.29 on Fire III, the same as Dragon Kick. Also consider the special case of White Mage, wherein you can exploit Holy III’s \~2.14 application time and full GCD cast time to precast it in AOE range if and only if you don’t lose a Glare III cast compared to the timeline where you just precasted and application delay adjusted a Glare III instead. In an organized party setting, ideally you would have everyone “reverse ripple” their application delays–syncing their first casts such that every damage application occurs at the same time.

Not all parties are created equally of course, and finding yourself paired with a machinist early pull demon who presses Air Anchor at -1.2s which pulls the boss 0.76 seconds later due to machinist auto attack application delay might be inevitable. If an exorcism isn’t viable, consider adjusting your own application delay adjustment to be for their first damage application (in the case of the machinist demon, a -1.73 Dragon Kick to be in line for their first auto application at -0.44)

### The FFLogs Accord

Starting in patch 6.4, FFlogs has changed from starting fights at first prepares to starting fights at initial boss aggro. Previously, a -1.29s Dragon Kick would just end up adding 1.29 seconds to the fight time, meaning that it was wholly worthless outside of situations where you could 100% gain an extra gcd before downtime.

![Screenshot of FFLogs events tab](/img/jobs/mnk/image-1-.png "He did not queue auto")

Now, any prepare lines that happen before the initial boss aggro are not counted towards the encounter time. However do note that currently this seemingly only applies to actual clear logs. Wipe logs will still have the old behaviour.

### Applications for Monk

Realistically, a mouseover macro Dragon Kick can be used on any fight where you start within melee range of the boss. In Anabaseios, this includes Pandaemonium and Pallas Athena. Both are rather boring full uptime wall bosses so the actual effects of a mouseover macroed start will be left as an exercise for the reader.

## Sub-90 Play

Until some poor soul goes back and dedicates time to 70/80 Ultimate resources, the best generic advice we can give is to just play Lunar Solar opener. Double Solar struggles as Flint Strike is weaker than Rising Phoenix is at Level 90. Lunar Solar also offers greater flexibility in the two minute windows.

There have been some questions regarding Double Lunar as a low-level option, but the way things stand currently, it looks unlikely to ever be the case. Double Lunar has to make too many compromises in both the opener and its two minute windows due to lack of flexibility caused by fitting in so many Opo GCDs, and so probably isn't ever worthwhile.

## FPS Locking

In memoriam.\
Dead tech made redundant by the \[REDACTED] plugin.