---
title: Scholar Basic Guide
card_header_image: /img/jobs/sch/basic.png
authors:
  - Balance-SCH-Staff
patch: "5.58"
lastmod: 2021-10-26T21:33:14.000Z
changelog:
  - date: 2021-10-26T21:53:11.912Z
    message: Article Created.
---
# Indomitable, A Thorough Guide to Scholar

## Author

**Tobio Okuma**

This is a guide for the Scholar (SCH) Job in FFXIV. The goal of this guide is to give insight into how the job is operating in our current raid environment. I will go over all of the job’s skills and describe their usage, as well as break down how Scholar interacts with other healers. I will go through small optimizations, useful macros, and more. This guide is oriented towards people of any level of play.

Of course there will be some general “how to heal” in this guide, as it is vital to point out the style that SCH uses in its healing. This guide will also cover some in depth healing things. A lot of this will be assuming you are in an organized group and can coordinate with your co-healer.

I will also be addressing certain inefficiencies in Scholar gameplay in hopes that they will allow people to avoid common mistakes.  I will include sections on useful tips/tricks that can improve your overall experience playing Scholar. This guide will have a LOT of information in it. Feel free to jump around it as necessary to things that are relevant to you. 

Feel free to drop by [The Balance](https://discord.gg/thebalanceffxiv) discord to ask any questions regarding Scholar or any other job. The mentors and members will gladly help with anything from general questions to log analysis. You can also feel free to message me on discord, Crimson#3427 as well.

# Acknowledgements

A massive thanks to Snes Ambros’ia for the work they put in to make this guide possible. The writing, editing, and support was a massive help in getting this finished. Without you, this would not have been completed. I cannot thank you enough.

A special thanks to Momo Sama for his help, especially on the section regarding raid buff alignment and opportunity costs. He also made the graph of party mitigation. On top of that, he also proofread this behemoth of a document. Check out his [Twitch](https://www.twitch.tv/ffxivmomo) and [YouTube](https://www.youtube.com/user/JebasuFX).

Huge thank you to Ahri for their help with the guide in general. They did the opener section particularly. Big fan, of all their hard work helping out, big fan!

Thanks to Zyrkhan Dar’locke for his help in translating my ramblings into English and proofreading my spreadsheets. His AST guide was also a great guideline into how I could approach writing this kind of guide.

Alevia Rohan for proofreading and editing. She was a big help in doing corrections to make the guide more legible. Without her, the guide would not look as nice as it does. Also she puts up with my booli. Check out her [Twitch](https://www.twitch.tv/saltedlevity/). 

The Theory Jerks for their spreadsheets. Everything we know is because of the hard work you do theorycrafting. Math is hard, but you make it semi-understandable.

Video Games, for writing the original SCH guide at the start of 4.0. You inspired me to write this guide. You can watch him play SCH on his [Twitch](https://www.twitch.tv/videosch).

Thanks to all the groups and people I’ve run with who have made me the player I am today. Thank you for putting up with my endless memes and terrified screeches. 

Everyone on [The Balance](https://discord.gg/thebalanceffxiv) for teaching me what I know and helping me to get better at the game. Without you I would be nowhere near where I am today.

# What Does Scholar Do?

At first glance, Scholar appears to be a hard job, especially for people who are just attempting to get into healing for the first time. Scholar hotbars are often extremely full and give the impression of being an overly complicated job. In reality, many of the buttons do not see much use in current content.

Scholar’s main identity revolves around the usage of its fairy, which has two forms: Selene and Eos. The fairy passively heals in what is essentially a mini-regen, which enables Scholars to pump out incredible damage. On top of this, Scholar has many tools that allow them to quickly heal incoming damage, most of which are off the global cooldown. This enables their co-healer to do their maximum possible damage at minimal loss.

As a Scholar, you will be juggling a resource known as “Aetherflow”. You get three stacks every 60s, and they give you access to your most powerful abilities. These are your bread and butter abilities which will cover the overwhelming majority of your healing in raids. Each Aetherflow ability we use grants 10 Fairy Gauge, which can then be used to execute extra fairy abilities.

We also have many tools that can be used to mitigate incoming damage, though most of the time this is unnecessary. There are specific circumstances in which shielding is useful, which will be addressed later in this guide. 

The combination of its powerful healing options and raid utilities make Scholar a force to be reckoned with. There are virtually no circumstances in current content that Scholar is a bad choice for a healer slot. It is consistently powerful through early progression, weeklies, as well as speed kills. Scholar has been present in the majority of world first clears, which really speaks to the power of the job.

Basically, this job is absolutely bonkers when played properly. And getting good value out of its skills doesn’t require you to be a top tier player. There are a few core basics that will push you to become a solid player. This guide will address those, as well as more advanced things for those seeking to push their gameplay to the next level.

# All About DPS

There is an old joke that Scholar is a green DPS. Oddly enough, that isn’t far from the truth. All of the healers in this game have great damage potential. Instances of incoming damage to party members in this game are very spread out, which allows healers to abuse their powerful oGCD healing tools to handle healing while they DPS. The amount of incoming raid damage is consistently decreasing as expansions progress. This allows healers to push their DPS numbers ever further. Healer DPS is very important. It can be the difference between clearing and wiping to a hard enrage, especially in earlier weeks.

In a lot of ways, healers are the most influential jobs in any party. Two good healers can seriously carry the party’s raid DPS if their DPS players are lacking, or they can push their group even further beyond fight requirements, allowing them to skip mechanics. High healer DPS can also provide a safety net in the unfortunate event that a DPS or tank dies. (As long as the death wasn’t because of healers DPSing).

Healer DPS is very important. I can not emphasize this enough. Fights in this game are extremely scripted, with a constant stream of auto attack damage on the tanks and spikes in overall raid damage going out. The amount of damage the party takes is also fairly scripted, with around a 5% damage variance, it is still extremely consistent. Fights work on a timeline; certain mechanics always happen at certain times. Some fights have multiple possible timelines but can still have healing plans that consistently cover their damage.

You can abuse the fact that these fights are so scripted to increase your own damage. After a massive raid wide, there are often large gaps before the next instance of party wide damage. If there is a large amount of time before the next set of raid damage, do not heal the party to full. Allow regens or off global cooldowns such as Indom, Earthly Star, Collective Unconscious, or Asylum handle the healing. During this downtime, you only need to keep the tank healed, which can generally be handled with single target heals from your AST/WHM and your fairy’s healing.

When people ask how to increase their DPS. The biggest problems are either a low CPM or too much/inefficient healing. CPM stands for “casts per minute”. Ideally this number should be as high as possible (without spamming oGCD heals to cheese it, of course). Anything less and you are losing casts throughout the course of an encounter, which harms your DPS significantly. In an eight minute encounter, a person doing 21 CPM is losing 24 casts compared to someone doing 24 CPM. If all of those were Broil IIIs, that results in over 6,960 lost potency.

The line most people use is “Always Be Casting.” If you are doing nothing, you are losing either DPS or HPS. Literally anything is better than doing nothing. There is no excuse to be idle. Again, low CPM and unnecessary healing are the primary contributors to low healer DPS.

There are a few things to know in regard to maximizing your damage potential and getting the most casts off during an encounter. If you finish casting a Broil III, and the boss is going to go untargetable in one or two seconds, using a Ruin II is absolutely better than getting nothing. In the given scenario, it is impossible to get a Broil III off, so any potency is better than none.

Bosses teleporting or jumping across the map works in a very similar fashion. Most of the time, it will break your cast when they teleport, as they are no longer targeted. If your Broil III cast is going to be cancelled by them teleporting, opt into Ruin II. This will guarantee you get at least SOMETHING out of that missing GCD. When the boss is going to disappear for an extended period of time, it can be used to get one last instance of damage as it leaves. It is not a giant gain, but it can add up.


## How DoTs Work

FFXIV revolves entirely around server ticks. Every three seconds, the game will apply the damage from DoTs that you have ticking. This is why DoTs that are applied at different times tick at the same time. Generally, we tend to “clip” our DoTs. Clipping in this context means to reapply them before the entire duration on the target has ended. Your goal is to cast your dot when there is about 1s left on the duration, as the game will take about 1s to apply the DoT debuff to the target. However, having the DoT overwrite early by 1s, or fall off for 1s, are the same potential damage lost. So, if your GCD doesn’t align smoothly with your DoT reapplication, choose when to refresh based on which GCD of application will have the lowest amount of time lost.. A good rule of thumb when it comes to reapplying DoTs is If your DoT has 3s or more left, Broil and then Biolysis. If it has 2s or less , reapply Biolysis. Ideally, with a proper GCD recast time, it will align in such a way that your DoT will fall off right when you can reapply it. Scholar BiS sets are designed around having the appropriate Spell Speed tier to hit this GCD.

DoTs also have a feature we call snapshotting. This means that DoTs retain any buff (or debuff) that was out when the DoT was applied, even after said buff falls off. For example, if Biolysis is used under the effect of Trick Attack, the DoT will retain the 10% increase in damage even after Trick falls off the enemy. If Trick Attack is applied AFTER Biolysis, Biolysis will not gain any damage from the Trick Attack. This applies to any damage increase, meaning Chain Stratagem, Battle Litany, Trick Attack, or even Potions. It will also apply to any damage down debuff you recieve. Heal over time effects work in the same way in regard to buff and debuff snapshotting.

> **DoTs almost never tick when the boss is untargetable.**

If the boss is about to leave the arena, it can be more beneficial to allow your DoTs to fall off. There are a few exceptions to this, such as O5S, but for the most part this is a consistent rule.

> **Biolysis must tick for 15s for it to be worth more than a Broil III.**

This means that if your DoT cannot get 15s duration before the boss leaves, it is not worth it to refresh. If you can’t get that time, then opt into pure Broil III spam. This is a small thing, but it adds up, especially when there are numerous times during an encounter when the boss leaves the arena.

# The GCD and Weaving

FFXIV has a base of 2.5s for its global cooldown (GCD). This recast time is the time between starting one cast before you’re allowed to do another. It is affected by Spell Speed. The main reason this is mentioned is some skills are off the global cooldown. These oGCDs are not tied behind the GCD recast, but have individual cooldowns.

Clipping your GCD is when you cast an oGCD after a casted GCD whose cast time is equal to the recast time or close enough to still create a clip. This time causes a delay before you can execute your next action. It results in fewer casts in an encounter, thus is a DPS loss. However, the loss isn’t enough to warrant never clipping your GCD. It’s generally preferred that we avoid clipping, but sometimes clipping is necessary to optimization.

Weaving is when you use an oGCD after an instant GCD. For example, you can use Ruin II, which is an instant GCD, to weave two oGCD actions. Weaving is ideal for maximizing your DPS. To double weave means to use two oGCDs between your GCDs.

All of this is very important to Scholars because most of our healing is off the global cooldown.

Generally, your priority for weaving is:

1. Natural Biolysis Refresh + Double Weave
2. Natural Biolysis Refresh + Single Weave
3. Ruin II + Double Weave
4. Ruin II + Single Weave
5. Broil III Clip

In encounters with multiple targets to AoE, weave between casts of Art Of War.

Clipping Broil can be better than single weaving with Ruin II depending on your latency, but it’s hard to give a set “If you have X ping, clip” rules. You’re pretty much always safe to Ruin II single weave though. The difference between the two is very small.

Biolysis allows you to weave, but it’s a lot less flexible than these other options. Weave with it when you’re naturally applying the DoT. You should generally never hold it to give yourself an opportunity to weave. However, when it is going to fall off of the boss and needs to be renewed, it takes first priority for weaving.

Swiftcasting Broil III can be used to give yourself an extra slot to weave. Doing Ruin II (any ability + Swiftcast)-> Broil III (any ability + any ability) is extremely useful for maximizing your potential damage. It effectively turns a double weave into a chance to weave three oGCDs between those two skills.

# How the Fairy Works

The fairy is one of the primary draws of Scholar. She provides a constant passive single target heal, essentially a regen, at no cost to the Scholar. She offers mitigation and a party wide heal over time, which can save numerous healer GCDs.

The fairy has what is called “Pet Scaling.” The fairy heals at about 64% of the potency of their Scholar. Because of this, the potencies on her skills are less than what is advertised on the tooltips. The 150 potency of Embrace is actually closer to 96. Whispering Dawn is closer to 76.8 potency/tick, or 537.6 total potency.

The fairy is also boosted by potions and food that the Scholar consumes. She keeps the stats that the Scholar had when they were summoned, meaning that Embrace will remain at full power even after the Scholar has removed all of their gear (until they re-summon her). Please note that this stat snapshotting does not include the aforementioned potion and food buffs, those will be mirrored from you to the fairy in real time (so please don’t waste a pot just to summon your fairy). Every time Seraph enters or leaves the battlefield and every time the fairy returns after Dissipation counts as the fairy being re-summoned, so there is no value in any sort of “fairy summoning set” to be used before pull, even if it wasn’t a trivial amount of healing that could be gained.

The Fairy’s Embrace will automatically target anyone in your party below 100% health. This can be a bit of a hassle as she will heal unwanted targets before she heals the tank, even if the party is in no other danger of death. To prevent this, you can use Fey Union after a raidwide to guarantee her healing is funneled onto the desired target.

Treat the fairy’s skills like they are an extension of your own tool kit. You aren’t micromanaging anything. You’re using your extra skills. This makes understanding how to use Eos or Selene much easier.

> **Fairy actions are equivalent to SCH oGCDs.**

With the exception of Embrace, all fairy skills should be weaved as if they are your own oGCDs. Embrace is done automatically when she’s not casting anything else, and we have absolutely no control over it. Weave fairy skills with Ruin II like you would any other oGCD.

> **It is good practice to place Eos/Selene on the tank at the start of a pull.**

Having the fairy following the Scholar has the potential to lead her out of range of healing the rest of the party for some mechanics. To the best of our knowledge, the fairy heals on a mixed priority system. She seems to prioritize healing the person closest to her, so keeping her placed on the tank is good practice. Health percentage may play a role, but based on testing, it seems the distance of a party member to the fairy is extremely important. Generally, when placed on top of a tank she should be able to heal just about anyone, unless a player is out of range due to a mechanic. Placing her on the tank should make the majority of her Embraces go to the Tank.

You can use this macro to place the fairy on the tank: ``/pac "Place" <2> <wait.3>``

You do not have to weave this, you can use it during your GCDs at no loss. Remember though that the fairy does not heal while moving, so use it cautiously. Adjust the “2” with whatever number in your party list is currently the main tank or use `<t>` and select the tank from the party list as you normally would target them to heal. You can also manually place.

> **DO NOT MACRO FAIRY SKILLS TO YOUR GCDs.**

I may seem like a good idea, but absolutely abysmal in practice. Macros can not be queued. This means that there is a delay between macro’d GCDs that costs you a significant amount of DPS. Macros are extremely clunky in this game. There are a few that can be useful, such as mouseover macros for Deployment Tactics, but in practice everything can be executed just as well, if not better, without macros.

## Problems With The Fairy

The fairy’s programming isn’t perfect. It has a lot of flaws that can make using them feel like a clunky mess. This section will list off a lot of their flaws to help you avoid them.

One of the biggest offenders is Seraph. If you order the fairy to execute an action like Whispering Dawn, then summon Seraph, the ability will go on cooldown, but the fairy will not use it. This can happen with all fairy actions and is extremely annoying when it does.

It is not uncommon for Fey Blessing to ghost when weaved with Fey Illumination of Fey Union. There are also problems with Fey Union not going off when used.

The fairy will wait to finish movement before she casts the ability you commanded. This usually isn’t too much of a problem if you place her. If you don’t, it can cause a few seconds delay before she executes the action you commanded her to do.

If you double weave fairy actions, the second can take a long time to execute. This can be used in your favor, but is often just an annoyance. There are times when you double weave where the second action will take upwards of four seconds to execute.

# Opportunity Costs

To truly describe how healing functions within this game, one must first understand the idea of opportunity costs. An opportunity cost is what is sacrificed when a choice is made. This is extremely prevalent in healing, and makes up the basis for how healing decisions are made.

Every Succor, Physick, or Adloquium has not only the MP cost associated with them, but they also cost you the 290 potency that would have come from casting Broil III. This is the opportunity cost of using a GCD heal. This is also one of the biggest losses for all healers. Too many GCD heals will cost a lot of DPS over the course of a fight. This is why one of the biggest causes of low healer DPS is unnecessary and inefficient healing.

Generally, oGCD heals are much more efficient than related GCD heals. Scholar’s entire kit revolves around what is called Aetherflow. Nothing is free. Using Ruin II to weave fairy heals is an 90 potency loss, which is the difference between it and a Broil III. Indomitability costs 100 potency, the damage lost from not using Energy Drain.

That is not to say that using Indom is bad. Actually, it’s quite the contrary. The 90 potency lost weaving Ruin II and 100 loss from losing Energy Drain could translate to saving a GCD that would have been a Succor. Eating the 90+100 from using a Ruin II->Indom can become a 290 potency Broil III, which results in a net 100 potency gain.

This gain applies to any GCD heal you can replace with an oGCD. They are always more efficient than using GCDs to heal. Everything has a cost. People like to believe that fairy heals are free, when they actually have a hidden cost, that of weaving.

For more on opportunity costs, I recommend checking out Momo Sama’s [Healer Optimization Guide](https://www.youtube.com/watch?v=SclS5tbtWNc).

## Opportunity Costs for Co-Healers

Before this guide is continued, let one thing be absolutely crystal clear.

> **There is no “Main Healer” and “Off Healer.”**

This definition is a relic of the past and should not exist now. Both healers have one combined kit that is used to heal the raid together. This interaction is important; many players act as though they are the only healer, or as if they aren’t supposed to heal because they are a Scholar. This couldn’t be further from the truth.

It is important for you as a Scholar to understand some of the basics of your co-healer. It will give a lot of insight into how their kit functions.

Both healers should be working together to maximize the overall contribution to raid DPS. This means using whatever has the lowest opportunity cost to benefit you and your co-healer. Taking a potency loss from using an Indom can result in a net gain if it prevented your co-healer from using a GCD to heal.

If forced to do a Ruin II weaved Aetherflow heal, a Scholar loses 190 potency, a very sizable amount. This is 90 potency from Ruin II and 100 from losing Energy Drain. That being said, it is still better to do this if it saves an AST a GCD heal, as gaining a whole Malefic is a 60 potency swing in their favor. (250 potency Malefic | 190 Ruin II + Indom).

Healing is all about minimizing losses. On Scholar, eating the 100 potency loss from Energy Drain can result in a gain for your co-healer, which in turn is a gain for overall raid DPS. With both healers minimizing losses, the increase in raid DPS is massive. This results in much better kill times and more comfortable clears.

That being said, Ruin IIs add up to a LOT of missed potency if they are done too much, so ideally you should work with your co-healer to drop unnecessary healing to minimize those losses and heal only when it is necessary.

AST has a lot of oGCD tools for healing that can be weaved for free whenever. Unlike Scholar, their filler GCD Malefic allows them a free weave after every cast. Conversely, WHM loses a lot of damage for their non-Lily-based GCD heals. Their Afflatus heals are superior to a SCH using AF stacks on heals, but only if they get an Afflatus Misery out of it. This does assume they will get the Afflatus Misery cast and won’t need the Lilies for movement/weaving elsewhere. WHM Afflatus heals have a lengthy list of opportunity costs to consider too which won’t be covered in the scope of this guide.

## Single Target Healing Priority

Healing is all about following a priority system. oGCDs with no cost are usually the first to be used, with the ones with the highest cost, GCDs, being a last resort. Below is a list of all single target heals, listed based on their damage potency lost, while not accounting for potential loss from clipping GCDs.

![STHealingPriority](/img/jobs/healers/scholar/ST_Healing_Priority.png)

This chart provides a good example of what healing priorities look like. Your goal as a team of healers is to minimize costs, which will in turn maximize your potential damage. There is a system of priorities used to determine what heal should be used at any given time. The priority is of course scaling down from whatever costs the least to what costs the most. GCD heals have the lowest priority, though there are some circumstances in which a GCD can outweigh an oGCD as discussed later.

This is more or less the priority system used to judge what single target heals should be used in a given situation. The only reason Cure II is could be prioritized over Physick is raw potency. Casting a Physick isn’t going to heal enough in most circumstances, even though the 1:1 GCD cost is less per Physick cast. It would likely require you to cast another heal, which is why it is lower on the priority system.

While it isn’t listed, proper usages of White Mage’s Divine Benison can save heals throughout the course of the fight. If it were put on the list, it would be around where Fey Union is. White Mages will freely apply this with their DoT refresh whenever they can, but keep in mind this shield isn’t designed to be heavily coordinated with mechanics, instead it’ll save the total amount of single target healing needed over the span of an encounter.

Unless your c-ohealer is holding Benediction for a Holmgang or Living Dead, it should be one of your highest priority heals. It has quite literally the highest potency of any heal in the game and should be treated as such.

When organizing and optimizing heals, you’re generally going to use this priority system for determining which heals are necessary for a situation. There are some niche situations that can also apply with AoE regens. This will be addressed later.

Keep in mind that Fey Union may need to be held as a tool for forcing Eos/Selene to focus on your tank when the party is low. Be wary of all the cooldowns, GCDs are generally a last resort for healing, as they cost the most in terms of damage potency, however are also the most readily available tools.

## AoE Healing Priority

It took more columns to make a chart to map out how effective oGCDs are. It requires more information in general to get the full picture. Because of this, adding a full picture with the chart ended up looking awful. The charts for both single target, AoE, as well as the math for later topics such as Deployment Tactics are on this [spreadsheet](https://docs.google.com/spreadsheets/d/1zHEUN5WXReg9FC9MOzt0DV5kjT6OVyVmR0UBZX2Mw64/edit?usp=sharing).

Assize has a special case because it is a DPS tool first, and it should be treated as such. Its 45s cooldown means that significant delays will result in a very large DPS loss and will misalign it from raid buffs. It is not worth it to hold this as the loss in DPS is generally not worth the healing. However, depending on an encounter’s design, it may be possible to have it both heal and DPS properly. Making it fall out of raid buffs is a loss for the rest of the encounter, every usage after will lose potency. Misaligning it from Dia also results in it having to be either clipped or weaved with Lily heals, which can stack to a net loss as well.

An uncharged Earthly Star can be a gain over using an Indom even though uncharged it does less DPS and less healing. Earthly Star only loses 50 damage potency for being uncharged, whereas a usage of Indom is 100 potency lost (190 if used in a forced Ruin II weave). This isn’t a very common application, but it can be useful if you’re looking to min/max your DPS potential. If Earthly comes off cooldown a few seconds before a raidwide, it can be beneficial to place Earthly and immediately Detonate it if it will get you above the HP threshold for survival and save the SCH an oGCD cast.

Aspected Helios or Medica II can potentially be a gain over using an Indomitability as well. They have more potency than Indom. If the potency of an Indom won’t get the party to the threshold to survive an incoming raidwide, but Aspected Helios or Medica II would, either can be a gain over using Indom if Indom would still require an additional GCD or other opportunity cost heal to put the party over that needed HP threshold. In this case, Indom would have likely forced you to use another AoE healing tool. Medica II/Aspected Helios beat it if the alternative was a GCD heal with Indom. This is also a relatively niche thing, but it can again be important when considering how to maximize your healing potential.

When there are no raid wide instances of damage incoming, it is fine to let skills like Whispering Dawn, Collective Unconscious, or Asylum tick the party to full during lulls of incoming damage. This is superior to using Indom or a GCD heal. Using Collective to mitigate a raidwide and letting it tick to heal the party is incredibly useful during these times as well.

Cure III is also generally better than Succor in this case. The reasoning for this is that the raw healing potency from Cure III can make it better than a Succor, even though a WHM’s damage GCD is more potent than Broil III. If you’re trying to top the party before an AOE, Cure III will generally do the job better than a Succor. If you need a small amount of healing before a raidwide, opt into Succor instead.

# Healing with White Mage

When preparing to heal with a WHM in an optimized setting, you need to first see where their Assize healing will line up with raid damage. Assize is 400 healing and damage potency with a 45 second cooldown. Because of its absurd potency, the first priority is to use it on cooldown for damage. Delaying too much pushes it outside of raid buffs, and in a worst case scenario can lose a usage.

Outside of that WHM also has access to Asylum, a ground based regen that functions in very much the same way as Sacred Soil, but with 10% increased healing to all who stand inside. This is a 90 seconds oGCD for WHM, and can be weaved in accordingly. The increased healing potency received while standing within Asylum’s range can be used potentially to buff GCD AND notably also oGCD healing actions/spells. For example, Sacred Soil will get 10% more potency when placed upon an Asylum being used, this also applies to Whispering Dawn and other oGCDs like Indom.

WHM loses a lot of damage from using GCD based heals. Conversely their Afflatus heals are extremely powerful as they actually give a portion of the damage loss returned with Misery, as long as Misery can be cast. Misery, while being a general DPS loss versus their primary damage spell spell-- Glare, is still incredible because it offers WHM opportunities to move and weave. This is important to understand for Scholars. While technically Lilies are better than using Aetherflow heals, the WHM has places they NEED to use those Lilies, WHM does not have a Ruin II equivalent to tackle moving without dropping casts. They aren’t infinite either. They only gain one Lily every 30 seconds. WHM needs them to avoid clipping when using oGCDs. It also allows WHM to avoid having to clip their DoT when moving.

Sometimes, in optimized settings, Lilies can also be used in downtime for incredible gains. Three Lilies used in downtime allows the White Mage to negate the DPS loss on using their Afflatus skills. Because there is nothing to target in downtime, they do not lose Glare casts for using them. Three Lily abilities in downtime becomes a net 600 potency DPS gain once Misery is used. This assumes that the White Mage doesn’t need to use them for movement/weaving after the downtime. Because of this, downtime usages are a serious consideration for WHM players, and should be taken into account when creating healing strategies.

# Healing with AST

The main advantage to Astrologian (AST) is their powerful oGCD healing options. Because of their 1.5s cast time on Malefic, they rarely have to go out of their way to weave. Because of this, AST can use their Earthly Star, Horoscope, Celestial Opposition, and Collective Unconscious at just about any time.

Healing with an AST mostly revolves around prioritizing their free oGCD options. Earthly Star and Celestial Opposition are two of the best cooldowns for healing in the game. Collective, while not a lot of healing, can be very impactful, and Horoscope has a wide array of uses both when charged and uncharged. Scholars will still need to use their tools, namely the free/low cost options such as Whispering Dawn and Fey Blessing. Taking AST in a more optimized setting should result in less Aetherflow heals required.

Earthly Star, while it is 200 damage potency at full charge, can be beneficial even when uncharged. If Star comes up before damage, it can be better to detonate a “baby” Star and take the 50 potency loss rather than forcing the SCH into an 90 potency loss from Ruin weaving or 100 from using an Aetherflow heal.

Abuse the 30s duration on Horoscope. Healing during downtime has no loss other than MP. Doing Horoscope and then a Helios (preferably Neutral if it isn’t being used elsewhere) can allow the AST to have a 400 potency heal ready for the next damage. Even an uncharged Horoscope is a fair bit of free healing.

If GCD based healing is required, it is usually better for the AST to do it as opposed to the Scholar, as they lose 240 potency to Scholar’s 290. This is especially true if Neutral Sect is up, as the raw healing from a GCD under it is massive.

AST’s AOE oGCD heals are far superior to what Scholars bring. There are times that they won’t have any tools available, and it is the Scholar’s job to fill those voids with their tools.

# How Shielding Works

Shielding in its most basic sense acts as an extension of our own health. This means that when we take damage, the shield will be absorbed before our actual HP bars drop in health. For example, if we have 10,000 health, and a 2,000 shield, a 3,000 hit would leave us at 9,000 health. Multiple shields stack additively, meaning a 6,000 Succor Shield and an 8,000 Shake It Off results in 14,000 net shielding.

For Scholar, we have several methods of shielding. Adloquium heals for 300 potency and then provides a shield equalling 125% the amount healed. If it crits, an additional shield is applied for an extra 125% of what was healed. Succor shields for 125% of the value healed, so a 180 heal and a 225 potency shield. A succor that heals for 4,500 will have a 5,625 shield, whereas an Adloquium that heals for 10,000 will only have a 12,500 shield, unless it crits. Consolation and Seraphic Veil each apply shields equaling their respective values.

Shielding has a few interesting aspects to note. One of which is the delay before a shield actually applies to party members. This can be to both the Scholar’s benefit or their detriment. If Succor is cast too late, the delay on the shield may mean that it won’t take effect until after damage has already happened. For extremely hard hitting mechanics such as Ion Efflux in O12S, a shield can be life or death for the survival of the party. Heals and shielding do not apply at once They roll out based on the distance of the target from the Scholar. This can result in server ticks killing people when the last person to get the shield doesn’t have it registered when the raidwide happens. This can result in a death, so make sure your shields are applied early enough for outgoing damage.

This delay in itself is not always a hindrance. If there are two back-to-back raid wide instances of damage, it is possible to time a Succor so that the heal will get the party before the first hit, and the shield will register after the damage. Heals apply as soon as the cast completes (though they do not hit everyone at once).

> **Aspected AST Shields override SCH shields, they do not stack.**

This is important because you could have a 50,000 shield on someone and a 500 Noct shield would override it. It is extremely frustrating that this interaction exists, but it has been like this since AST’s addition to the game. Unlike when overwriting your own Galvanize shield, the shield size is irrelevant when it comes to Noct and Galvanize overwriting. NOCT/SCH don’t go well together unless the group has a set plan for shielding that prevents this interaction from happening.

**Conversely, Celestial Intersection, Celestial Opposition, and Neutral Sect shields all stack with Scholar’s Galvanize/Veil. They are not Nocturnal fields. These can all be stacked for massive shielding on the party.**

## When to Shield

A common mistake that new Scholars often make is an excess of shielding. This is common even into the middle levels of Scholar play. Many Scholars attempt to shield incoming damage, especially large instances of damage. While comfortable for first time progression, this is not always necessary, and is often a loss. Shielding is generally not needed for most raidwides. Consider only shielding if:

1. The party will not survive without shielding.
2. Shielding one instance of damage prevents having to heal another.
3. You have no oGCD options for AoE healing.

An example of scenario one include Ion Efflux spam at the end of Final Omega (Savage) or Tumult & Voice of the Land spam at the end of Titan (Savage). These mechanics generally require some kind of shielding to survive comfortably. This is especially true during early clears, as your defense stats and health haven’t scaled to their maximum yet.

The second example is if shielding a mechanic could save you an additional GCD heal. This is especially prominent in instances where a deployed Adloquium is used.

The third scenario ideally never happens. Casting Succor or Adloquium to cover not having an oGCD heal is unfortunate, and rarely happens, but there are some times that we have to take the loss and use it, especially if our co-healer has fallen.

# How Healing Buffs Work

Healing buffs, such as Dissipation and Fey Illumination, increasing the amount your healing spells will heal. Scholars do not have a buff in their own kit to buff the potency of healing oGCDs. If the ability says that it increases healing received “via healing actions,” it will increase the healing received by both GCD heals and oGCD heals. If it specifies “healing magic potency,” it will only increase healing that comes from GCD based heals. Both Fey Illumination and Dissipation’s buff has the latter phrasing.

Healing Buffs that affect only GCD heals:

1. Dissipation (Scholar)
2. Fey Illumination (Scholar, applies to the whole party, including the fairy)
3. Neutral Sect (Astrologian)
4. Temperance (White Mage)

Healing Buffs that affect all healing:

1. Mantra (Monk)
2. Nature’s Minne (Bard)
3. Improvisation (Dancer)
4. Asylum (White Mage, ground AoE players must be inside)
5. Thrill Of Battle (Warrior)

Dissipation’s healing increase is only for healing magic potency, not actions. Because of this, it only benefits Succor, Adlo, and Physick.

These can be categorized by who uses them and who they benefit. Monk, Warrior, Bard, Tanks, and Healers all have ways to increase healing received, while all healers have a way to increase the amount of healing from their own GCD heals.

Healing increases, such as Fey Illumination, scale multiplicatively, not additively. This means that stacking these will result in massive heals, which can be extremely helpful when you want to maximize the potency of your healing.

For example, Adloquium is 300 potency. When used with Dissipation, the healing potency becomes:

300+(300*.2)=360

If we decide to add in Nature’s Minne from a Bard, another 20% increase, then we get:

360+(360*.2)=432

It is important to know the difference between them being additive and multiplicative. If they WERE additive, the potency would have been 420. The more percentage increases you add, the more the math begins to stray from the actual value.

This is all important because this also scales into how you can address certain mechanics. Your shields will scale based on how much you heal. This means that stacking Mantra, Dissipation, Nature’s Minne, and Thrill can result in an Adloquium with a potency of 622.08. This Adlo has a higher healing potency than your Lustrate, and provides a shield equaling 125% of that value. This shield being Deployed to the entire party can negate entire mechanics.

The loss from casting this Adloquium is still 290, the lost Broil III, and potentially an additional 90 from weaving the deploy. That being said, this shield can prevent another heal from having to be used, negating that loss entirely.

Being able to stack these healing increases results in some insane numbers in terms of shielding. If you are going to have to use GCDs to heal, it is worthwhile to use these to maximize the value of your GCDs. If you’re going to be forced to take a loss, it’s better to get the most out of it.

# Deployment Tactics

Deployment Tactics at face value is fairly simple. It will deploy the effect of Galvanize off the target and spread it to anyone within ten yalms. This does not deploy Catalyze. When reading the tool tip, the general idea behind this skill is obvious. You cast a shield, such as Adloquium, then spread the strong shield to the party.

This will spread the current value of the shield to the party. This is important to note. If you put a shield on the tank and that tank then gets hit by an auto attack, the shield will be smaller by the amount of damage done from that auto. A surprising amount of Scholars make the mistake of casting an Adlo onto the main tank and deploying a weaker shield because of autos. Generally, you’ll try to deploy off of the tank that is not tanking the boss at the time, or yourself if you know you’ll be safe and properly positioned.

Deployment Tactics still incidentally costs the loss of a Broil III to use. As such, it is avoided if at all possible. That said, it is still very strong for mitigating massive hits. A strong Adlo can potentially save your co-healer a GCD heal resulting in a net gain for the party’s combined raid damage. There is a strategy for handling a mechanic in Ultima Weapon’s Refrain (Ultimate) where the Predation phase can be started with a buffed deployed shield allowing the entire party to be hit by one of Ifrit’s dashes. This is extremely heavy hitting, and requires high shielding to survive, but lets the party ignore this part of the mechanic entirely. It’s a valuable tool for progression and can be one for DPS uptime as well.

It is also worth knowing that if you attempt to use Deployment Tactics too early, it will have no effect. This is caused by the inherent delay to shield application discussed earlier. This can be a problem if your strategy for healing requires a shield. It’s unfortunate if this happens; communicate the mistake to your team and compensate by doing extra heals. It sucks when this happens, so attempt to avoid it.

You can also deploy the shield from Succor, though this tactic is extremely niche. This was more commonly applicable in 4.0, when you could deploy off of your pet who avoided being hit by most mechanics. One of the few times it is very useful is when one/two members of the party don’t get hit by an AOE. For example, Kefka’s Optimized Fire III hits 6/8 party members. A Succor shield can be deployed off of the target that didn’t get hit for some fairly nice value.

# Summon Seraph

If Seraph had to be described in one word, it would be versatile. There are many possible usages for her. She is a very flexible tool in aScholar’s kit. Your goal with Seraph is not necessarily to maximize your usage, but rather to get the most out of the usages you do get with her. Each potential use has some kind of drawbacks. A few usages for her are:

1. Pre-pull.
2. During long autoattack segments.
3. To replace a Succor cast.
4. When you need AoE oGCD healing.

Using Seraph pre-pull is a good way to get a Consolation on the party before an encounter begins. This can be combined with an Adloquium Deploy for some massive mitigation in the case of an opening AOE on a fight. The downside to this is that you lose Seraphic Veils when counting down for the pull, so you won’t get full value out of her. You can time this in such a way that you still get Dissipation in your opener.

Seraph also has the advantage of acting as a sort of buff to the fairy’s auto-heal. However, using her after a party-wide AoE can result in her using Veil on random party members, rather than the main tank. Seraph during times where the boss is doing auto attacks alone allows you to get a lot of value out of her Seraphic Veil. This does mean that Consolation will lose some value on the party at large, but it is generally fine to use Seraph in this way.

The final usage will be one of the most common in optimization settings. Seraph’s Consolation is essentially a miniature Succor. This means that you can double weave Seraph and Consolation after Ruin II and potentially save a GCD that would have been a Succor cast. This results in a 200 potency swing in your favor, which adds up in the long run.

Finally, she can be used as another source of oGCD based healing. You can treat her very much the same as other cooldowns, especially if you don’t specifically need her shield. If there is ever a time that your other major healing cooldowns are currently unavailable, Consolation is a very good AoE heal.

Seraph is not without her downsides, however. The main problem with her is that she is an oGCD to summon and so too are her abilities. This means that to get Consolation out, you must double weave. During her duration, you also do not have access to Fey Blessing, Fey Union, or Dissipation. Using Seraph when you are supposed to get use Dissipation for additional stacks could potentially push those Dissipation stacks out of raid buffs, as well as POSSIBLY losing a usage entirely, although unlikely. Using Seraph must be balanced with these downsides to be aware of what you lose before casting her. Avoid using her during raid burst damage windows.

# Recitation

Recitation (Recit) is a new skill added in 5.0. Using this will guarantee a critical hit for the HP restored on Succor, Adloquium, Indomitability, or Excogitation. In addition, that skill will not cost any resources. Adlo and Succor having no MP cost when used with Recit is very nice for MP conservation. Recitation will rarely if ever be used for this purpose, but it is an aspect of the ability.

The main draw of Recitation is to save Aetherflow stacks that can in turn be used on Energy Drain. Weaving Recitation and Indom costs 90 potency to weave but gains an Energy Drain, which results in a net swing of 70 potency in the SCH’s favor.

If you need to force strong shields for mitigation, a crit Adlo for deployment is very strong, and a crit Succor is still fairly high value. In terms of burst healing, Recitation Succor is a lot of healing, though it does come at the cost of a GCD used for the heal and an oGCD weave for Recitation.

The problem with Recitation is that it costs an oGCD slot to use in the first place. If you need AOE healing, you’re better off using Indom + Whispering Dawn in terms of raw healing potency. However, you do lose 100 potency from doing Indom instead of Energy Drain for this. It can also be used in downtime to negate the oGCD slot loss, but that also assumes that you’ll need to use a stack within the next ~15s anyway.

The preferred usage of Recitation is as follows-

* Single Target

  * Excogitation
  * Adloquium

* AOE

  * Indomitability
  * Succor

This is, of course, unless you need the shielding from Succor or Adlo to survive, in which case they take precedence. In terms of pre-pull, you get more healing value out of Recite Excog over Recite Adloquium. You can readily fish for a critlo pre-pull, too. Furthermore, because you don’t get the value out of the base heal on Adlo pre-pull, Excog ends with ~60 potency more value.

# Dissipation

Dissipation is an interesting ability. It sacrifices your pet and fills your Aetherflow gauge with three stacks. It also grants a 20% increase to healing spells for 30s. During this 30s you can not resummon Eos or Selene. The healing increase buff from this cannot be clicked off.

Dissipation more than anything is a DPS tool. It is used in the optimal opener and also aligns with every three minute raid buff window if used on cooldown. The three Energy Drains gained from Dissipation aren’t massive towards DPS, but it is DPS positive to use it. Each Energy Drain, even when weaved with Ruin II, is a 10 potency gain. (100 from Energy Drain - 90 From a Ruin II weave).

Dissipation can be held for specific situations, as long as you aren’t losing a usage of it. For example, if you need to do extended movement, holding Dissipation and being able to weave Energy Drain on your forced Ruin II weaves is an acceptable plan. If the 20% healing increase can save a GCD heal, it is better to hold it for that instead of using it on cooldown. This again assumes you do not lose a usage. This will be an extremely rare occurrence, but there are mechanics that this could come into play for.

Do not use Dissipation if you are uncomfortable going 30s without your fairy. In progression, it is recommended to hold off on using Dissipation until you need to push for damage, as Dissipation also doubles as a healing tool. Dissipation is also very useful if you need to do emergency Lustrates. This isn’t a problem in later clears, but is very helpful in progression raiding.

The major downside of Dissipation is the loss of all fairy skills. Assuming that the fairy would have gotten 10 full Embraces during the 30s downtime, you’re missing out on ~1,050 net potency on the tank. Usually, this doesn’t matter, as both WHM and AST have tools to potentially cover that loss, but do communicate with your co-healer about it.

This skill also locks you out of Seraph, which is one of SCH’s most powerful tools. All of this information must be considered when thinking about when to use Dissipation. Try to time it so that you won’t need Seraph during the time you Dissipate. If you need Seraph when Dissipation is coming up, it is better to Seraph if you can save Succors using Consolation.

# MP Management

MP management isn’t the worst on Scholar. We have a lot of options to regenerate our MP and a pretty constant flow of MP through Aetherflow, and we also have Lucid Dreaming, a 21s MP refresh on a 60s cooldown.

Aetherflow should be used as soon as it comes up. Each stack that goes into Energy Drain is a returned 500 MP, which makes up for more than a Broil/Ruin II in MP. It ends up being MP positive for every stack used on Energy Drain. It is also MP positive to use your stacks on Healing instead of GCD healing

There isn’t particularly an “optimal” time to use Lucid Dreaming, as its really dependent on how you’re healing a fight. Depending on differing strategies, different people could need it at various places. With that being said, don’t hold Lucid for half of an encounter. Ideally you would want to get as many uses out of it as possible, while holding it when it is needed for a specific portion of the encounter. If you get an open spot to weave it, feel free. It’s really dependent on a person-to-person basis.

Having problems regarding MP is often due to too many Succors. Succor is not very MP efficient, which is yet another reason to avoid using it if at all possible. The 1,300 MP cost is extremely significant especially if it is being spammed for AoE healing.

Dissipation is also positive for MP management, as it results in a +300 MP gain on every usage.

# Movement

Movement is another thing many Scholars struggle to master. Scholar has a lot of strong options for moving. We aren’t quite the mobility gods that ASTs are, but we’re no slouch.

There are several options to handle movement in a raid setting. What you should use will vary depending on numerous factors. For example, how quickly you need to move, and how far, will play a big role in deciding which movement option will be best suited to a given situation. In terms of movement, Scholar has, in no particular order, Art Of War, Biolysis, Ruin II, and Swiftcast. These are all tools that need to be considered when movement is coming.

Art of War is only really used for movement if there are two or more targets that you have to move away from. For example, if there are two adds that you are using AoW on, and you need to move, an Art Of War gives you 2.5s after it is cast to move partially to your desired location.

One trick for movement is called “Slidecasting”. This is abusing the spaghetti coding of the game to get casts off as you move. To do this, you simply move when the duration of your cast is less than .5 from completing. The game will not cancel your cast if you move after this point. Doing this over and over lets you slowly move across the map while maintaining DPS. This will take some getting used to, and you can lose casts if you aren’t careful. That being said, this is good for slow movement and when executed properly do do not lose any DPS while slidecasting.

Ruin II is a very good option for movement. For bursts of movement farther than you can reach in one GCD, it is possible to Ruin II->(Swiftcast)->Broil III instead of using two Ruin IIs. Ideally we avoid using Ruin II if at all possible, but it’s much worse to lose casts while running.

Sprint also makes a difference when it comes to movement. Covering more distance on any given GCD window can possibly result in preventing a Ruin II usage. If you’re going to Ruin II anyway, try using Sprint to see if it can save a GCD. There is no downside to it other than that Sprint needs to be weaved. Notably Sprint also takes up TWO oGCD slots to weave properly (you can’t use another single weave after it).

# How Mitigation Works

Mitigation is one of the most important aspects to raiding. Reducing the damage taken by an attack reduces the healing required, which then increases the amount of DPS healers can do. It is important to know how mitigations work, and how much mitigation is needed for any given mechanic.

Mitigation buffs, similar to % healing increase buffs, scale multiplicatively downward. This means that they are subject to diminishing returns. Each % mitigation you stack reduces incoming damage by less than the last used.

For example, if the party is going to take a 100,000 hit, a PLD using Reprisal will reduce the damage of this by 10%, or 10,000.

(100,000-(100,000*.1))=90,000

This means the hit is now 90,000. If the Scholar also uses Sacred Soil, it will reduce the 90,000 damage by 9,000, making the new value 8,100.

90,000-(90,000*.1)=81,000

Another 10% mitigation will further reduce the benefit.

81,000-(81,000*.1)=72,900

The damage reduction will continue on this downward curve. This is what is called diminishing returns. A few of them graphed out looks like the below chart. Note that this is showing how much damage will be taken with all of these actions stacked together.

![DRExample](/img/jobs/healers/scholar/DR_Example.png)

This means that stacking too many of these reductions is a loss over using them on separate instances of damage. In the current raid tier there are no mechanics that absolutely require all mitigation to be stacked at once. The closest mechanic we’ve encountered to this is Morn Afahs in the final phase of the Unending Coil of Bahamut (Ultimate). Even then, you only need three 10% mitigations and a Succor shield to survive.

Everything being used on one AoE means that there will be nothing left for the next hit. Using too much on one attack can mean that an extra heal might be necessary for future damage.

It is important to map out everyone’s mitigations to maximize the effectiveness of them while not wasting them. Using a Sacred Soil when there are already numerous mitigations stacked on an AoE will likely not save a heal. Communicate with your party when things should be used to maximize their uses and effectiveness.

# Party Mitigations

Everyone in your party now has some form of party mitigation tool. This was a change made from Heavensward (3.0) into Stormblood (4.0). The developers wanted to take some of the responsibility off of the healers, and give a bit more responsibility to the rest of the party. Because of this, every job now has something they can use to reduce incoming damage taken.

If a tank drops dead after a buster, it is worthwhile to check and make sure that these mitigation tools were present. Especially in fights like O10S, Feint can make a MASSIVE difference in the damage that a tank will take from the tank buster.

Make SURE your DPS are using their mitigation tools. This is important for all healers, including Scholar, as your party members using their tools is essential for you to maximize your potential damage output. Proper usage of these tools can result in a fairly significant gain for healer DPS.

Treat party members like children. They will absolutely never do what you need, where you need it, unless you tell them to. As a healer, you need to be vocal and specify where mitigation will save you a heal. For example, if an AoE requires shielding, it can be better to have a Warrior use Shake It Off to save a Succor cast.

Bloodbath is also important when it comes to saving GCD heals. Proper usage of these skills can save healing over the course of an encounter. Bloodbath essentially heals the user for 22% of all damage dealt for the entire duration. Across all skills used and autoattacks, this results in a fairly large amount of healing. This can be used to cut healing, especially if the DPS only needs a small amount of extra health to survive a hit.

Things like Feint almost always have some purpose in an encounter. If all of the tank busters are magical, Feint can be used on heavy autoattack segments of the fight to help ease healing. Do not underestimate how much healing is saved through autoattack Feints throughout the course of an encounter.

Ask your DPS where they are using these skills, and if you think there is a better place, tell them. Check logs to make sure they are actively using their skills, if they aren’t, tell them where to put them. This is not negotiable. They have these skills for a reason, and need to use them. If they aren’t, they are not maximizing their effectiveness and are holding the entire group back. You can clear while not using these abilities, but it makes the entire run infinitely harder than it has to be. Some of the skills to look for include Feint, Addle, Reprisal, Troubadour, Tactician, Shield Samba, and more.

# Raid Buffs

Raid buffs are one of the most important aspects of raiding in FFXIV. The meta of XIV revolves around stacking raid buffs for massive burst windows. Most DPS jobs, bar Samurai and Black Mage, have at least one ability that increases DPS for the party. Tanks lack direct raid DPS increases, as WHM does as well. These raid buffs are always on cooldowns with multiples of 30s, which means they will all eventually line up if used properly on cooldown.

Raid buffs, like most other % increases, scale multiplicatively. This means that a Broil III under Trick Attack (10%) and Divination (6%) is around 326 potency. Stacking these is the best way to maximize their benefits. Again, notice that all of them are on a multiple of thirty second cooldown. This means that when they are used properly, they will naturally align, causing strong burst windows that will be your biggest DPS phases. These burst windows are critical for maximizing party raid DPS to increase damage and speed up kill times.

Scholar has one raid buff. Chain Stratagem increases the rate at which the target takes critical strikes by 10% for 15s.

![RaidCDsSheet](/img/jobs/healers/scholar/Raid_CDs_Sheet.png)

> Image Courtesy of Jahadaunt

## Buff Alignment

Generally, raid buffs should be used on cooldown, and when you’re running with a pick-up group, you should aim to use them on cooldown. This is because everything will naturally align if they are used properly. However in a static and speed running environment, these can be better planned for greater gains, especially when you know your expected kill time. Here is a graphic showing off exactly how it looks when raid buffs are used on cooldown. This is done with only NIN/BRD/SCH/DRG for the sake of making a smaller chart. The choice to use 0s for the sake of this chart was to more easily demonstrate how raid buffs align. They each have a specific time that they go out during the opener but will overlap.

![RaidBuffs12](/img/jobs/healers/scholar/Raid_Buffs12.png)

This is assuming a 12 minute pull. This shows exactly how all of these buffs will naturally look when used on cooldown. Again, buffs don’t actually happen at zero seconds, and sometimes a fight has downtime during normal buff windows that will need to be pushed back.

Raid buffs should almost always be used on cooldown. Holding on to raid buffs for extended periods of time can deny usages throughout the course of an encounter. This is a very large loss in most circumstances. With that being said, there are a few instances where raid buffs can be held. Listed out, these are:

1. The buff comes up during an add phase.
2. Slightly delaying a buff can allow for better uptime without losing a usage.
3. Holding it can allow for a better re-opener on a later phase.
4. Using it on cooldown will result in a usage where you can not get good value.
5. There will not be time for another usage, so delaying it allows for a greater burst window.

The first is the most common. Gaining extra burst damage on the boss is almost always superior to using it to damage an add. Certain raid buffs, like Trick Attack, can often be used on adds because they have a short cooldown. For the sake of Scholar, it is safe to always hold Chain during adds for the burst window when the boss returns.

The second instance is less common, but is still useful to take note of. There are certain times in encounters where there is limited uptime for some party members. This can be problematic, as it limits the gain you can get out of your buffs. During scenarios like this, it can be beneficial to slightly delay usages to get the full duration out of the buffs. This is, of course, if you won’t lose a usage because of the delay. This entirely depends on your group’s kill time if you will lose a usage.

![RaidBuffsClip](/img/jobs/healers/scholar/Raid_Buffs12_Clip.png)

For an example of scenario #3. This applies for specific kill times. If the kill occurs at under 7:00, but over 6:15, when the last set of buffs fell off, there is around 40s worth of time that raid buffs COULD potentially be delayed if necessary without losing any uses.

In the past, there have been several times this methodology has actually been applied. During the fourth floor of Deltascape Savage, Exdeath, Chain Stratagem came up during the Black Holes phase - a phase that required a heavy amount of movement. This was awful for uptime, as multiple people were being forced to move during the mechanic, and was followed by a mechanic that required healers to top the party to full health. Holding Chain here to get it during the later Meteor cast, where there was no other outgoing damage, was a pretty sizable gain.

Another example of this is the second Celestriad in God Kefka, the eighth floor of Stormblood’s savage raids. This mechanic forced the party to break away from the boss and move into positions that weren’t friendly for positionals. Delaying Trick and Chain here resulted in better usage.

The third scenario mainly applies to Ultimate raids. The structure of all Ultimate tier raids released so far have been multiple mini-bosses before a final encounter. These minibosses tend to be extremely short; for example, Twintania in the Unending Coil of Bahamut (Ultimate) had about a three minute enrage. While you could use the second Chain Stratagem on her, using it there would mean that it wouldn’t be up for the Nael opener, which was a significant loss. The same concept applied for Garuda and Ifrit, the first two mini bosses in the Ultima Weapon’s Refrain (Ultimate).

The fourth scenario also happens frequently, and mainly involves instances where you can’t get the full value out of a usage. These include where the boss will go untargetable in the middle of the duration or if the boss will die during or immediately after a usage.

![RaidBuffs8](/img/jobs/healers/scholar/Raid_Buffs8.png)

Take for instance, this eight minute pull. If the boss dies at 8:00-8:10, you aren’t getting the full value out of the final Chain. In this instance, you will be getting four full usages of all two minute raid buff cooldowns, and three full usages of three minute raid buff cooldowns. Because you’re not going to get the full value out of the last Chain, it is worthwhile to hold earlier usages for different alignment. This results in one less Chain over the course of the encounter, but it allows for three full burst windows with Trick + Chain + Litany. The lost chain isn’t that much of a loss due to how gimped it was going to be anyway. This does require the DRG to hold their second Litany for 60s as well.

![RaidBuffs8DRGHold](/img/jobs/healers/scholar/Raid_Buffs8_DRG_Hold.png)

This basically guarantees three massive burst windows, which is effective for increasing raid DPS. Of course, this is all subject to change based on party composition. Having 90s raid buffs changes the timings in such a way that it allows for full use of the 90s buff windows. Below is an example of one such setup using MNK. This setup has the same three major burst windows, but loses a Trick Attack through the course of the pull.

![RaidBuffs8Mnk](/img/jobs/healers/scholar/Raid_Buffs8_MNK.png)

The fourth and final instance of holding raid buffs is easier. If you are not going to get another usage of raid buffs during the encounter, it is best to get that last usage when other buffs are active.

![RaidBuffs8Clip](/img/jobs/healers/scholar/Raid_Buffs8_Clip.png)

If this pull ends at 9:20-9:59, there is no possible way to gain another Chain Stratagem during the course of the encounter. The final Chain used only falls under Trick Attack. Holding this Chain an additional minute to get it with Battle Voice and Litany will result in higher damage overall than if it was used properly on cooldown with Trick Attack.

Again, these changes need to be communicated with the party, as a delayed Chain will not be as effective if the party does not know that it is happening. This can be especially important for BRD, who want to snapshot their DoTs in raid buffs.

# General Tips

There are lots of small things that can be really helpful for playing any job, especially healing. A lot of these were already mentioned earlier, but it is worthwhile to repeat them to drill them home.

Keep your GCD rolling. If you have 3s where you didn’t do anything, that is a Broil III cast lost. Your CPM, or casts per minute, is one of the most important parts of playing this game. Most people who come asking why their DPS is low are simply not casting enough, resulting in a ton of lost DPS.

Don’t be afraid to trust HoTs like Whispering Dawn and Sacred Soil to heal the party. It is a massive amount of healing. Avoid using other heals during the HoT’s duration if possible, as its ticks are wasted if you use an Indom to cap the party while the HoT is ticking.

Communicate with your party. Always let your party members know what you are doing. Let your co-healer know that they don’t need to heal if you are going to Indom. Let the party know you are going to delay a Chain Stratagem. Communication is absolutely key when playing in a raid setting. You need to be vocal about things that will make the raid easier. If moving a Divine Veil will save a healing GCD, let the PLD know. They cannot make your life easier if they don’t know what will help you. The same applies to all DPS mitigation tools. Tell them where to put things.

# Additional Resources

These are some additional resources that are useful for anyone attempting to further their play. There will be guides for general healing, AST, WHM and healing optimization guides. It is worthwhile to look into these, as they are useful guides from talented players.

[Zyrk's Bullshit Guide to the Principles of Healing](https://docs.google.com/document/d/1yoq1zU2VgMJQ53PaJHaUtwA3S2aSz1C69qkLDaOmZY8/edit#heading=h.ls1qn6qewmw7)

A general guide to the principles of healing by Zyrkhan Dar’locke. It is a fairly long read, but if you’ve managed to slog through 70 pages of Scholar, it is also a worthwhile read. It has many of the concepts discussed here, but in much greater detail. It also goes much further beyond the scope of this Scholar guide. I highly recommend reading it.

[Healer Optimization Guide](https://www.youtube.com/watch?v=SclS5tbtWNc)

This video guide by Momo Sama is incredibly useful for learning how to optimize with your co-healer to push for higher dps. This video is the holy grail of information in regards to optimizing. This is a MUST watch for anyone wanting to learn how higher level play operates. The information regarding potencies of abilities is outdated, but the fundamentals are still very good to know.

[Astrologian Basic Guide](/jobs/healers/astrologian/basic-guide/)

A guide to Astrologian by Zyrkhan Dar’locke. Reading this as a Scholar can be useful, as it gives insight into how their kit operates. Knowing your co-healer’s tools well is important for maximizing the effectiveness of your own play.

[White Mage Basic Guide](/jobs/healers/white-mage/basic-guide/)

A guide to White Mage written by Balance mentor Pyre. It can give you a greater understanding of how WHM operates and help you cooperate well with a WHM co-healer.

[TheoryJerks Website](http://theoryjerks.akhmorning.com/)

Large spreadsheets done by Nemekh and Allagan Studies (formerlly known as the TheoryJerks). Useful for seeing how much of a substat will net a certain gain, but remember to not compare stats in a vacuum. Has all substats at 80 which is useful for figuring out melds.

[Momo’s Dungeon healing Guide](https://youtu.be/wE1Ay8mmVB8)

Useful healing guide for new players looking to do dungeons.

Healing Analysis: [O9S](https://youtu.be/3WLq8c8tg00) [O10S](https://youtu.be/GUeuoDza84E) [O11S](https://youtu.be/hXfVOg047GQ)

A video of Momo going through two encounters from Omega: Alphascape speed runs and analyzing their healing strategies. Very useful if you want to see the mentality and thought process behind high level healers. The information is a bit dated, given the potency values have changed since Stormblood, but the idea behind the optimization is very much the same.

[Healer spreadsheets](https://docs.google.com/spreadsheets/d/1zHEUN5WXReg9FC9MOzt0DV5kjT6OVyVmR0UBZX2Mw64/edit?usp=sharing)

My spreadsheets that were used in the process of making this guide.