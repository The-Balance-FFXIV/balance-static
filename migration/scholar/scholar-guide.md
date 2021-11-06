---
title: Scholar Guide
---
* [Indomitable, A Thourough Guide to Scholar](#indomitable-a-thourough-guide-to-scholar)

  * [Author](#author)
* [Acknowledgements](#acknowledgements)
* [What Does Scholar Do?](#what-does-scholar-do)
* [Actions](#actions)

  * [DPS GCDs](#dps-gcds)
  * [DPS oGCDs](#dps-ogcds)
  * [Healing GCDs](#healing-gcds)
  * [Healing oGCDs](#healing-ogcds)
  * [Utility Spells/Abilities](#utility-spellsabilities)
  * [Fairy Abillities](#fairy-abillities)
  * [Other Abilities](#other-abilities)
  * [Role Actions](#role-actions)
* [All About DPS](#all-about-dps)

  * [Opener](#opener)
  * [How DoT's Work](#how-dots-work)
* [The GCD and Weaving](#the-gcd-and-weaving)
* [How the Fairy Works](#how-the-fairy-works)

  * [Problems With The Fairy](#problems-with-the-fairy)
* [Opportunity Costs](#opportunity-costs)

  * [Opportunity Costs for CoHealers](#opportunity-costs-for-cohealers)
  * [Single Target Healing Priority](#single-target-healing-priority)
  * [AoE Healing Priority](#aoe-healing-priority)
* [Healing with White Mage](#healing-with-white-mage)
* [Healing with AST](#healing-with-ast)
* [How Shielding Works](#how-shielding-works)

  * [When to Shield](#when-to-shield)
* [How Healing Buffs Work](#how-healing-buffs-work)
* [Deployment Tactics](#deployment-tactics)
* [Summon Seraph](#summon-seraph)
* [Recitation](#recitation)
* [Dissipation](#dissipation)
* [MP Management](#mp-management)
* [Movement](#movement)
* [How Mitigation Works](#how-mitigation-works)
* [Party Mitigations](#party-mitigations)
* [Raid Buffs](#raid-buffs)

  * [Buff Alignment](#buff-alignment)
* [Stat Priorities](#stat-priorities)

  * [Weapon Damage](#weapon-damage)
  * [Main Stat](#main-stat)
  * [Piety (PIE)](#piety-pie)
  * [Critical Hit (Crit)](#critical-hit-crit)
  * [Spell Speed (SPS)](#spell-speed-sps)
  * [Determination (DET)](#determination-det)
  * [Direct Hit (DH)](#direct-hit-dh)

    * [Determination Vs. Direct Hit](#determination-vs-direct-hit)
* [Macros](#macros)
* [General Tips](#general-tips)
* [Additional Resources](#additional-resources)

# Indomitable, A Thourough Guide to Scholar

## Author

**Tobio Okuma**

This is a guide for the Scholar (SCH) Job in FFXIV. The goal of this guide is to give insight into how the job is operating in our current raid environment. I will go over all of the job’s skills and describe their usage, as well as break down how Scholar interacts with other healers. I will go through small optimizations, useful macros, and more. This guide is oriented towards people of any level of play.

Of course there will be some general “how to heal” in this guide, as it is vital to point out the style that SCH uses in its healing. This guide will also cover some in depth healing things. A lot of this will be assuming you are in an organized group and can coordinate with your cohealer.

I will also be addressing certain inefficiencies in Scholar gameplay in hopes that they will allow people to avoid common mistakes.  I will include sections on useful tips/tricks that can improve your overall experience playing Scholar. 
This guide will have a LOT of information in it. Feel free to jump around it as necessary to things that are relevant to you. The table of contents will be color coded for easier navigation, as a document this size can be overwhelming.
This guide will continue to be updated through 5.0.

Feel free to drop by [The Balance](https://discord.gg/thebalanceffxiv) discord to ask any questions regarding Scholar or any other job. The mentors and members will gladly help with anything from general questions to log analysis. You can also feel free to message me on discord, Crimson#3427 as well.

# Acknowledgements

A massive thanks to Snes Ambros’ia for the work they put in to make this guide possible. The writing, editing, and support was a massive help in getting this finished. Without you, this would not have been completed. I can not thank you enough.

A special thanks to Momo Sama for his help, especially on the section regarding raid buff alignment and opportunity costs. He also made the graph of party mitigation. On top of that, he also proofread this behemoth of a document. Check out his [Twitch](https://www.twitch.tv/ffxivmomo) and [YouTube](https://www.youtube.com/user/JebasuFX).

Huge thank you to Ahri for their help with the guide in general. They did the opener section particularly. Big fan, of all their hard work helping out, big fan!

Thanks to Zyrkhan Dar’locke for his help in translating my ramblings into English and proofreading my spreadsheets. His AST guide was also a great guideline into how I could approach writing this kind of guide.

Alevia Rohan for proofreading and editing. She was a big help in doing corrections to make the guide more legible. Without her, the guide would not look as nice as it does. Also she puts up with my booli. Check out her [Twitch](https://www.twitch.tv/saltedlevity/). 

The Theory Jerks for their spreadsheets. Everything we know is because of the hard work you do theorycrafting. Math is hard, but you make it semi-understandable.

Video Games, for writing the original SCH guide at the start of 4.0.You inspired me to write this guide. You can watch him play SCH on his [Twitch](https://www.twitch.tv/videosch).

Thanks to all the groups and people I’ve run with who have made me the player I am today. Thank you for putting up with my endless memes and terrified screeches. 

Everyone on [The Balance](https://discord.gg/thebalanceffxiv) for teaching me what I know and helping me to get better at the game. Without you I would be nowhere near where I am today.

# What Does Scholar Do?

At first glance, Scholar appears to be a hard job, especially for people who are just attempting to get into healing for the first time. Scholar hotbars are often extremely full and give off the impression of being an overly complicated job. In reality, many of them do not see much use in current content.

Scholar’s main identity revolves around the usage of its fairy, which has two forms: Selene and Eos. The fairy passively heals in what is essentially a mini-regen, which enables Scholars to pump out incredible damage. On top of this, Scholar has many tools that allow them to quickly heal incoming damage, most of which are off the global cooldown. This enables their cohealer to do their maximum possible damage at minimal loss.

As a Scholar, you will be juggling a resource known as “Aetherflow”. You get three stacks every 60s, and they give you access to your most powerful abilities. These are your bread and butter abilities that will cover the overwhelming majority of your healing in raids. Each Aetherflow ability we use grants 10 Fairy Gauge, which can then be used to execute extra fairy abilities.

We also have many tools that can be used to mitigate incoming damage, though most of the time this is unnecessary. There are specific circumstances in which shielding is useful, which will be addressed later in this guide. 

The combination of its powerful healing options and raid utilities make it a force to be reckoned with. There are virtually no circumstances in current content that Scholar is a bad choice for a healer slot. It is consistently powerful through early progression, weeklies, as well as speed kills. Scholar has been present in the majority of world first clears, which really speaks to the power of the job.

Basically, this job is absolutely bonkers when played properly. And getting good value out of its skills doesn’t require you to be a top tier player. There are a few core basics that will push you to become a solid player. This guide will address those, as well as more advanced things for those seeking to push their gameplay to the next level.

# Actions

## DPS GCDs

![Broil3](/img/jobs/healers/scholar/Broil3.png)\
**Broil III**

This is your predominant spell that you will cast most often during any given encounter. This is your filler DPS spell that you cast when your DoT is already ticking and nothing else needs to be done.

![ArtOfWar](/img/jobs/healers/scholar/Art_Of_War.png)\
**Art Of War**

This is the spell for AOE DPS. It has a base potency of 160. This is better than Broil III if there are two or more targets. It is instant, which gives you a little less than 2.5s to throw in things like Sacred Soil or Excogitation. Be wary of the MP cost associated with this though, as it adds up fairly quickly.

![Ruin2](/img/jobs/healers/scholar/Ruin2.png)\
**Ruin II**

Ruin II is your primary tool for weaving. It is an instant cast GCD, which means that you can use it to weave oGCDs. Generally, this gets used if we are forced to do extended movement away from the boss, or if oGCD skills need to be used that don’t align with our DoT reapplication. Using this instead of a Broil III cast is a 90 potency loss, so ideally we only use it to weave if the oGCD weaved saves a GCD heal for us or our cohealer. If you are going to Ruin II for the sake of a healing oGCD, it is good to try to also weave an Energy Drain in that specific GCD as this helps negate some of the  DPS loss.

![Biolysis](/img/jobs/healers/scholar/Biolysis.png)\
**Biolysis**

This is SCH’s DoT skill. The net potency of this over 30s is 700. It should be almost always ticking on the boss, with a few exceptions (more on this later). It is instant cast, which means the cast of it can be used to reposition yourself for incoming mechanics, and to weave. This must tick for 15s to have done more damage than a Broil III. For the sake of movement, clipping this DoT early at that 15s point can, in theory, be a gain, but it is preferred to allow it to tick for its full duration whenever possible. Every missed tick is 70 potency lost. Clipping it too many times can result in more than a Broil III lost in potency over a fight.

## DPS oGCDs

![EnergyDrain](/img/jobs/healers/scholar/Energy_Drain.png)\
**Energy Drain**

Energy Drain is our primary tool for "dumping" excess Aetherflow stacks; we trade them in for damage and mana. As our only offensive oGCD, maximizing DPS means using this as often as you safely can in between instant cast spells like Biolysis or Ruin II. Give priority to non-Aetherflow cooldowns when possible to reduce your Aetherflow usage. 
Any stacks that are not used on NECESSARY healing should be used on Energy Drain to maximize possible damage. Losing an Energy Drain for an Indom that saves you or your cohealer a GCD based heal is an absolute gain.

## Healing GCDs

![Physick](/img/jobs/healers/scholar/Physick.png)
**Physick**

This is your first heal, a carry over from being an Arcanist. This is probably the worst heal in the Scholar kit and should be avoided, if at all possible. The only time this should be used is when you don’t have other options available at the given time, and you’re out of MP. It has a 1.5s cast time, which means that it also allows one oGCD to be weaved after it with no loss or GCD clip.

![Adloquium](/img/jobs/healers/scholar/Adloquium.png)\
**Adloquium**

Often referred to as “Adlo,” this is one of the most influential abilities Scholar has. This spell heals the target for 300 potency, then adds a shield, called Galvanize, equaling 125% of the amount healed (so, 375 shield potency). A critical Adloquium will then also apply an additional shield, called Catalyze, which is equal to an additional 125% of the value healed (thus, another 375 potency). In total, a critical Adlo does 300 healing potency and 750 shield potency. The Galvanize shield can be deployed to the entire party, while the Catalyze shield cannot. It is generally not worth fishing for a critical Adloquium.

MP wise, this ability is pretty pricey. Notably, the Galvanize shield does not stack with Astrologian’s Nocturnal Field, however, the Catalyze shield does. If you have a 10,000 hp Galvanize shield, it will be overwritten by a 500 hp Nocturnal shield applied after it. The Catalyze will remain untouched, however.

There are specific circumstances that using Adlo is fantastic, but generally we attempt to avoid using this skill if at all possible. It is harsh on our MP, and generally the mitigation from shields is not required for survival, making it a total loss.

In progression, it can be used to cushion tank busters, especially before tanks have their cooldowns properly mapped out. Other than that, its generally only used as a tool with Deployment Tactics. Rarely, spreading an Adlo can be used to “cheese” mechanics that your party would otherwise die from. Even in this case, fishing for a crit Adlo (Critlo) CAN be done, but it is generally not advised, as it results in a lot of lost damage and costs a ton of MP. 

Recitation can be used to force a critical Adloquium, which can then in turn be used to deploying the larger Galvanize. However, forcing a critical Adlo requires not only casting a GCD heal instead of a Broil, but also requires the two oGCD weaves, Recitation and Deployment tactics, to be executed in two separate weave windows.

![Succor](/img/jobs/healers/scholar/Succor.png)\
**Succor**

This is Scholar’s only GCD heal for AoE healing. It is also a fairly weak heal, with only 180 raw healing potency. That said, it provides a 225 potency shield on top of its raw healing. In total Succor provides 405 potency of healing, and when used with Emergency Tactics it becomes 405 potency of raw healing. Spamming this too often is extremely taxing on both your MP and DPS. 

Ideally, Succor should be avoided in favor of other less costly options, such as Indomitability. However, there are times where shielding is necessary. Some examples of this are when the party won’t survive without shielding, or when the party has to be at 100% HP. It also is beneficial for mechanics that drop players to one HP, as those do not eat shields like they do player HP. 

As of Shadowbringers, with the addition of Seraph, we now have an oGCD option that can potentially replace Succor. And, with this current state of the job, there are many options that are outright better than Succor, such as Consolation or Sacred Soil. Both of these are comparatively only a 90 potency loss (This loss is from using a Ruin II to weave, instead of a Broil III). This beats out the cost of using Succor, which loses the Scholar 290 potency from losing an entire Broil III.

## Healing oGCDs

![Lustrate](/img/jobs/healers/scholar/Lustrate.png)\
**Lustrate**

This is a single target heal that is off the global cooldown. It increases your fairy gauge by 10, as using any Aetherflow ability does. This is a 600 potency heal, which is fairly powerful. This only heals a single target, but has more potency than any of your GCD-based single target heals. However, generally it is preferred that Excogitation be used over Lustrate, as Excogitation has a greater potency. Lustrate is still a powerful button in case someone takes an unnecessary hit, or you need some emergency tank healing when alternatives are on cooldown. 

Lustrate is still very useful. It has the added benefit of a 1.00s recast, which means it is possible to spam multiple in quick succession if such a scenario demands it, and you have the Aetherflow for it. (Ideally this doesn’t happen often, but mistakes do happen). 

This is also the go-to button for burning unnecessary Aetherflow stacks during downtime for free gauge. 

![Indomitability](/img/jobs/healers/scholar/Indomitability.png)\
**Indomitability**

This skill is one of the reasons why Scholar is such a powerful job. It increases your fairy gauge by 10, and it costs an Aetherflow stack to use. The net heal from this is 3,200 potency across an entire entire person party -- 400 raw healing potency done per person. This is extremely powerful, and with a short 30s cooldown, it is available for most raidwide hits. 

This is your strongest source of AOE burst healing. It is vastly superior to casting Succor. As an oGCDs it only needs to be weaved with Ruin II or clipped into Broil for minimal DPS loss. Since Indom is instant, when the skill is weaved, it allows you to heal while moving. You still lose potency from not using Energy Drain with that Aetherflow stack, but that becomes a gain if it saves a GCD heal from either healer.

![Excogitation](/img/jobs/healers/scholar/Excogitation.png)\
**Excogitation**

Excogitation, or Excog for short, is one of the most powerful single target heals in Scholar’s entire kit. As another aetherflow-tied heal, it again increases your fairy gauge by 10 when used. This ability heals for 800 potency when procced, and the proc occurs when your target drops below 50% of their health, or automatically heals them if the timer runs out. This is an incredibly useful tool and virtually foolproof. Unless the tank is full health, you will ALWAYS get something out of Excog. This is useful for healing tanks out of Holmgang or Living Dead, as well as immediate healing after a large tank buster. If a tank is at low health, Excog can be used to quickly give a large burst of HP. 

Excogitation is interesting in that it can be used pre-emptively to heal something that is expected to happen within 45s of its use. You don’t have to use it after damage has happened, but can plan it well in advance. This is advantageous because you can potentially weave it on a Biolysis to avoid having to Ruin II to weave it.

It is also worth noting that this will not proc and heal someone through a hit that will kill them, a “one shot.” If they have 51% health and take a tank buster that is more than 51% of health, Excog will not stop their death. In such a case, opt to use Lustrate beforehand to get their health up. 

![EmergencyTactics](/img/jobs/healers/scholar/Emergency_Tactics.png)\
**Emergency Tactics**

Emergency Tactics has a worse reputation than it deserves. This skill turns your next cast of Succor or Adlo into a completely raw heal. The healing potency that would have cone to the shield becomes direct healing, as long as it is cast within the 15s duration of this buff. This means that it essentially turns Adlo into a 675 potency heal and Succor into a 405 potency heal. This is fairly useful if your cohealer dies during progression and you need to utilize back to back succors - the first one can be a normal succor, while you use ET on the second to get the full potency of the heal without losing any potency to shielding that already exists on the party. Paired with Adlo, it can be used to assist in breaking a Dark Knight out of Walking Dead.

Another added benefit of Emergency Tactics is that by turning the shield into a direct heal, the potency is applied immediately to party members. Shields have a small delay before they register, Emergency Tactics converts that shield to extra healing, which doesn’t have that delay.  This is very important at times where the heal window is very tight before damage goes out, such as multi-hit raid busters.

This is also extremely good for instances of mechanics that bring the party to one hp; it can be combined with an Indom for a rather insane burst heal. This and Indom are the primary methods of burst AOE healing for Scholar. The name really describes this skill; it is used in emergencies for a burst heal.

![AetherpactFeyUnion](/img/jobs/healers/scholar/Aetherpact_&_Fey_Union.png)\
**Aetherpact & Fey Union**

These two go together because they are quite literally the same ability. Aetherpact is the command from the Scholar and Fey Union is the ability executed by the Fairy. This will tether Eos/Selene onto your target, funneling a powerful heal over time onto them while draining 10 gauge every three seconds. While it’s listed as 400 potency, this heal is subject to pet scaling, which means it’s actually worth about 256 potency per tick. 

This is a useful tool that can be used to greatly cut down on healer GCDs that are required. It is generally used to heal tanks through auto attacks, as the ticks from Fey Union are stronger than Embraces. If the whole party is at low health this can also be used to funnel the fairy’s healing on the tank instead of other party members; Eos/Selene will heal ANYONE below 100% health and using Fey Union allows you to force her into healing the desired target. 

Note that using any of the fairy’s other abilities will break the tether. Another way to cancel Fey Union early is to cast Aetherpact again. Aetherpact is subject to an oGCD slot. Notably, the fairy cannot move while casting this ability, but if it is cast on a target that is out of range, the fairy will move into range to execute this skill.

![FeyBlessing](/img/jobs/healers/scholar/Fey_Blessing.png)\
**Fey Blessing**

Fey blessing has a resource lock similar to Fey Union, as it costs 10 fairy gauge. It heals for approximately 224 potency in a 20y area around the fairy. (224 potency is the adjusted pet scaling potency). While seemingly weak, it’s very effective due to its lower opportunity cost. If you need an AOE burst heal for fast healing, pairing this with Indomitability will be strong. It will also be useful if Indom is on cooldown. Outside of that, this isn’t a major priority. 

Blessing also has the advantage of a massive range. At 20y, it can hit everyone almost anywhere in the arena from the middle. 

Think of Fey Blessing as a supplementary heal. Its best usages are when paired with other oGCD options. It is useful if you need to save something like Sacred or Whispering Dawn for later. 

![Consolation](/img/jobs/healers/scholar/Consolation.png)\
**Consolation**

This is an ability for Seraph. It is cast by the Scholar in much the same way that Fey Blessing and Fey Union are. Its adjusted potency is actually 192 due to pet scaling, while listed as 300 listed potency. This action will also erect a barrier equaling the amount of HP restored. (192 potency). Thus, the total heal potency of the skill is 384. This barrier is different from Galvanize and Catalyze, and thus stacks with other shields, including shields from Astrologian.

This skill has two charges with a 20 second recast time. You have a 20 second window to use these charges every two minutes which is the cooldown on Summon Seraph. However, using these charges for the sake of using them will most likely be a loss. The most common use for this is ability is for when you need a small heal, as well as a shield for an upcoming mechanic.

This action is useful for saving a GCD that would have otherwise been a Succor. This mainly applies for large AOE attacks that would oneshot the party. It does require two oGCD weaves to get a single Consolation, and an additional weave/clip for the second Consolation. This uses oGCD space that could go to Indomitability and Sacred Soil, which are higher healing potency and thus those are generally a higher priority to heal with.

## Utility Spells/Abilities

![Resurrection](/img/jobs/healers/scholar/Resurrection.png)\
**Resurrection**

Fairly self explanatory, the function of this action is something possessed by every healer as well as Red Mage and Summoner. Generally, you want to avoid slow casting Resurrection if at all possible, instead pair with Swiftcast to minimize the cast time loss. That said, don’t leave a DPS down for a significant portion of your time waiting for your swiftcast to come back. 
MP wise this is also really pricey. If you have a RDM/SMN, see if they can get the raise first, especially in progression settings, as it really snowballs your MP to cast raises.

![SacredSoil](/img/jobs/healers/scholar/Sacred_Soil.png)\
**Sacred Soil**

Sacred Soil is another use for your Aetherflow stacks. Using it increases your fairy gauge by 10. This skill was massively reworked in terms of use and effectiveness in Shadowbringers. It now provides 600 potency of healing over time, including the 100p initial tick and a 10% mitigation for 15s. Plus, it’s recast time is a very short 30s. This means that you could, in theory, have 50% uptime on a powerful HoT and damage mitigation skill. This ability is also useful to use on duo tank busters for mitigation and maintenance afterwards. 

Sacred Soil in Shadowbringers now is just really good. That said, there are still a few downsides to using it. For example, if the party is going to have to leave the radius of the bubble, you would have been better off using other tools, such as Whispering Dawn. However, it’s also not worth it to go out of your way to use it on cooldown. If you have a free oGCD slot, the only downside to throwing out a sacred is losing an Energy Drain. The potency of this ability outweighs that of Whispering Dawn, which is pretty bonkers.

![DeploymentTactics](/img/jobs/healers/scholar/Deployment_Tactics.png)\
**Deployment Tactics**

This is one of the strongest tools in Scholar’s kit. This can be used to spread the effect of a Galvanize from one target to the rest of the party. (Assuming they are within a 10y radius of the target). I will not spread a Catalyze buff. This skill is used to heavily mitigate incoming damage, usually by casting an Adlo onto someone like a tank with healing up buffs, or a DPS or yourself, and then sending it to the entire party.

![ChainStratagem](/img/jobs/healers/scholar/Chain_Stratagem.png)\
**Chain Stratagem**

This skill is fairly self explanatory. This increases the rate at which the boss will take crits from your entire party (or alliance) by 10%. This is another aspect of Scholar’s kit that makes it so powerful. This skill gets used in the opener, and then is used on cooldown, with rare exceptions. With a 120s cooldown, it lines up naturally with Trick Attack and every other major raid buff. Be sure to communicate with your team when this skill is coming up. There are some niche times that Chain gets delayed, which will be discussed later. It should be noted that this increases the rate at which you have a chance to crit, but it does not affect the multiplier on critical hit damage.

![SummonSeraph](/img/jobs/healers/scholar/Summon_Seraph.png)\
**Summon Seraph**

This action summons Seraph while removing Eos or Selene for the duration Seraph is on the field for. It is primarily used for Consolation, which can be used to replace Succor casts. Seraph also has a more powerful version of Embrace called Seraphic Veil. At the end of the duration, Seraph leaves and Eos/Selene return without having to be resummoned.

## Fairy Abillities

**Note that all Fairy abilities originate from the Fairy, but must be command as an oGCD from the Scholar.**

![Embrace](/img/jobs/healers/scholar/Embrace.png)\
**Embrace**

This is your pet’s primary ability. Embrace got a fairly significant potency reduction this expansion, making it much less effective healing wise. The fairy is programmed to spam this ability every 3s on anyone below 100% health.  It will prioritize the Scholar over anyone else, as their death kills the fairy. This ability is subject to pet scaling. The actual potency on this ability is around 96. 

![WhisperingDawn](/img/jobs/healers/scholar/Whispering_Dawn.png)\
**Whispering Dawn**

This ability is a very useful AOE heal over time action. It has seven ticks of 120 potency over 21s, for a total of 840 potency. This is subject to fairy scaling though, which means it has an actual potency of 537.6. This is useful for healing the party during mechanic lulls if there is no raid damage coming. 

Whispering Dawn is now considered an oGCD for the Scholar, which means that it must be weaved.. Because other AOE healing options cost an Energy Drain, Whispering Dawn is the “Free-est” AOE heal that Scholar has. It costs 90 potency from a Ruin II weave, but that can be negated when you can weave it in a Biolysis window. Whispering Dawn will likely be the go to choice if other options are down and/or the party is required to move for mechanics as the buff stays on party members regardless of their location, unlike sacred soil.

![FeyIllumination](/img/jobs/healers/scholar/Fey_Illumination.png)\
**Fey Illumination**

This increases the amount of healing from healing spells (GCDs only) done by those who receive this buff. Having the fairy execute this action will buff all eight party members AND the fairy. However as said, this does not buff oGCD heals so it does not affect abilities such as Lustrate, Excog, Fey Union, or Indom. It also reduced party magic damage taken by 5%.

This ability doesn’t buff many heals in the SCH’s kit, but is very useful for buffing your cohealers GCD heals, and it will buff your Fairy’s auto heal, Embrace or Seraphic Veil. Communicate the best usages of Fey Illumination with your team to maximize its benefit. It can be stacked with other heal increases such as Mantra for a multiplicatively powerful shield or regen. Under high pressure of lethal AOE damage, this ability will be very useful to boost your succor or adloquium values, while also providing a small amount of additional mitigation.

![SeraphicVeil](/img/jobs/healers/scholar/Seraphic_Veil.png)\
**Seraphic Veil**

Seraphic Veil replaces Embrace when Seraph is active. It is a 200 potency heal with a shield that equals the amount healed. Due to pet potency, the actual value of the heal is around 128. This means that the total combined potency per Seraphic Veil is 256. The shield from this spell does stack with Galvanize and Catalyze but NOT with Consolation. 

You can somewhat think of Seraphic Veil as a temporarily buffed embrace. However, the main problem with Seraphic Veil is the same as the one with Embrace; you can not choose who she uses Seraphic Veil on. This means that after a raid wide hit, she may choose anyone to Veil, even if the previous shield isn’t used.

![AngelsWhisper](/img/jobs/healers/scholar/Angels_Whisper.png)\
**Angel’s Whisper**

This is literally the same as Whispering Dawn.

![SeraphicIllumination](/img/jobs/healers/scholar/Seraphic_Illumination.png)\
**Seraphic Illumination**

This is literally the same as Fey Illumination.

Note that the reason why they are of the same value is to give accessibility to the user to use fairy actions aside from Consolation when Seraph is active.

## Other Abilities

![Aetherflow](/img/jobs/healers/scholar/Seraphic_Illumination.png)\
**Aetherflow**

This ability does not heal or DPS directly, but enables your entire kit to function by giving you stacks of Aetherflow. This also restores 1000 MP, so it also functions as an MP management tool. All stacks should be used before recasting Aetherflow. This ability should always be on cooldown as holding onto it for too long becomes a DPS loss.

![SummonEos](/img/jobs/healers/scholar/Summon_Eos.png)
![SummonSelene](/img/jobs/healers/scholar/Summon_Selene.png)\
**Summon Eos / Selene**

This spell summons the fairy to your side, in either her Selene or Eos stance. Both do exactly the same thing. Choose whichever you think looks prettier.

![Dissipation](/img/jobs/healers/scholar/Dissipation.png)\
**Dissipation**

Dissipation functions as the way Scholars can increase the healing on their GCD heals. It will also grant three stacks of Aetherflow. Once Dissipation is cast, you will not have access to the Fairy for 30s, but will have 20% higher healing on your GCD based heals. After 30s, the fairy will automatically return to your side. If you need a strong Adlo or Succor barrier, Dissipation will be the primary way that scholars are able to buff it.  

However, losing the fairy can be detrimental. At most, you can lose 1,050 potency over the course of 30s from having no fairy to auto cast its heal, plus you cannot use any fairy abilities. It is important to weigh the costs of using Dissipation for this reason.

The fairy returning automatically after 30s also means that this works as a DPS tool.  Dissipation can be cast almost on cooldown for damage.

![Recitation](/img/jobs/healers/scholar/Recitation.png)\
**Recitation**

Recitation is a new ability from Shadowbringers. Using this oGCD will guarantee that your net Succor, Adloquium, Excogitation, or Indom will land as a crit. This ability also guarantees that they will consume no resources, neither mp nor Aetherflow stacks. 

Ideally, Recitation this should be used on oGCD heals such as Indom and Excog. This is because while Recitation negate the mp cost of Adlo and Succor, they still require a GCD to cast, and thus cause the loss of a potential Broil III cast. However, it makes Critical Adloquium consistently available instead of an RNG chance. There will be times that it is optimal to use this for a guaranteed crit Adlo or crit Succor, but oGCD options are greatly preferred. 

Recitation Adlo is also useful for the case of Deployment Tactics. Outside of a deploy situation, Recitation Succor is better than Recitation Adlo in terms of raw potency.

Recitation does take up an oGCD slot to use. Ideally to use it, aim to weave it on a natural window. 

## Role Actions

![Repose](/img/jobs/healers/scholar/Repose.png)\
**Repose**

This puts an enemy to sleep. It does not work on any notable bosses, and enemies are awakened after a single hit. This can be safely removed to free hotbar space. The only time this is really applicable is in Eureka or in overworld content.

![Esuna](/img/jobs/healers/scholar/Esuna.png)\
**Esuna**

This has usages inside of dungeons more than anything. It can be used to cleanse certain debuffs that have a white bar with the debuff icon. This is relatively niche in a raid setting, used only for key mechanics.

![LucidDreaming](/img/jobs/healers/scholar/Lucid_Dreaming.png)\
**Lucid Dreaming**

This is your primary way of regenerating MP. It will slowly tick up mana over its duration. MP will tick every 3s, on the server tick. Use it on cooldown with your second Biolysis refresh and on cooldown afterwards. Remember that Ruin 2 and Broil 3 do consume your MP as often as your other spells do. Under heavy healing with Succors and Adloquiums, this ability needs to be on cooldown to minimize the lack of MP or the need to meld Piety.

![Swiftcast](/img/jobs/healers/scholar/Swiftcast.png)\
**Swiftcast**

Swiftcast is one of your most important role actions. This allows you to instantly cast the next spell. This is a tool for movement, and weaving. Using it after a Ruin II for long movement allows you to avoid using a second Ruin II. It is also used to create even more opportunities to weave. If used after Ruin II, the next Broil  cast can also allow for a double weave. Potentially, this action can save a Ruin II use. It should also be used to quickly revive a fallen ally and can be used to quickly get a heal out before a coming mechanic.

![Surecast](/img/jobs/healers/scholar/Surecast.png)\
**Surecast**

Surecast can be used to prevent most knockback and pull effects. This will prevent you from being interrupted  during most knockback mechanics. (Or prevents you from having to use Ruin II as you get knocked back to minimize the loss).

![Rescue](/img/jobs/healers/scholar/Rescue.png)\
**Rescue**

This is an interesting role action. There are some fight strategies designed to require it, such as Unreal Hello, World in Final Omega. This will pull the target party member to your position. There are a few more usages for this skill that will be touched upon later. 

It has some optimization uses, such as saving people uptime by pulling them back to the boss after a knockback. (Assuming their knockback prevention isn’t up). There is a slight delay between usage and the actual pull effect, so be cautious about timing when using it.

# All About DPS

There is an old joke that Scholar is a green DPS. Oddly enough, that isn’t far from the truth. All of the healers in this game have great damage potential. Instances of incoming damage to party members in this game are very spread out, which allows healers to abuse their powerful oGCD healing tools to handle healing while they DPS. The amount of incoming raid damage is consistently decreasing as expansions progress. This allows healers to push their DPS numbers ever further. Healer DPS is very important. It can be the difference between clearing and wiping to a hard enrage, especially in earlier weeks. 

In a lot of ways, healers are the most influential jobs in any party. Two good healers can seriously carry the party’s raid DPS if their DPS players are lacking, or they can push their group even further beyond fight requirements, allowing them to skip mechanics. High healer DPS can also provide a safety net in the unfortunate event that a DPS or tank dies. (As long as the death wasn’t because of healers DPSing).

Healer DPS is very important. I can not emphasize this enough. Fights in this game are extremely scripted, with a constant stream of auto attack damage on the tanks and spikes in overall raid damage going out. The amount of damage the party takes is also fairly scripted, with around a 5% damage variance, it is still extremely consistent. Fights work on a timeline; certain mechanics always happen at certain times. Some fights have multiple possible timelines but can still have healing plans that consistently cover their damage.

You can abuse the fact that these fights are so scripted to increase your own damage. After a massive raid wide, there are often large gaps before the next instance of party wide damage. If there is a large amount of time before the next set of raid damage, do not heal the party to full. Allow regens or off global cooldowns such as Indom, Earthly Star, Collective Unconscious, or Asylum handle the healing.  During this downtime, you only need to keep the tank healed, which can generally be handled with single target heals from your AST/WHM and your fairy’s healing. 

When people ask how to increase their DPS. The biggest problems are either a low CPM or too much/inefficient healing. CPM stands for “casts per minute”. Ideally this number should be as high as possible (without spamming oGCD heals to cheese it, of course). Anything less and you are losing casts throughout the course of an encounter, which harms your DPS significantly. In an eight minute encounter, a person doing 21 CPM is losing 24 casts compared to someone doing 24 CPM. If all of those were Broil IIIs, that results in over 6,960 lost potency. 

The line most people use is “Always Be Casting.” If you are doing nothing, you are losing either DPS or HPS. Literally anything is better than doing nothing. There is no excuse to be idle. Again, low CPM and unnecessary healing are the primary contributors to low healer DPS. 

There are a few things to know in regards to maximizing your damage potential and getting the most casts off during an encounter. If you finish casting a Broil III, and the boss is going to go untargetable in one or two seconds, using a Ruin II is absolutely better than getting nothing. In the given scenario, it is impossible to get a Broil III off, so any potency is better than none. 

Bosses teleporting or jumping across the map works in a very similar fashion. Most of the time, it will break your cast when they teleport, as they are no longer targeted. If your Broil III cast is going to be cancelled by them teleporting, opt into Ruin II. This will guarantee you get at least SOMETHING out of that missing GCD. When the boss is going to disappear for an extended period of time, it can be used to get one last instance of damage as it leaves. It is not a giant gain, but it can add up. 

## Opener

Scholar’s kit has a few select tools whose usage dictates how the rest of the opener operates: namely Dissipation and Chain Stratagem. Where to use these skills optimally is less determined by a Scholar’s own kit - being that the rotation is simply a DoT and Broil - and more so determined by where the rest of the raid is using their own raid buffs to line up with each other’s rotations. Stacking multiple raid buffs has a multiplicative effect.

Chain Stratagem is varied, it has several factors that impact its usage within a raid setting. Usually, it is dependent on composition, but may also need to be adjusted for fight timings, though these situations are fairly rare. 

Dissipation’s alignment in the opener is set up in such a way that we ideally do not suffer unnecessary extra R2 casts, and also so that we get to use more Energy Drains under raid buffs. The question is moreso of whether or not the user wants to use it in the given situation, being that the usage of Dissipation prevents us from using any of our fairy skills for upwards of 30 seconds. Some fights have big incoming damage in the opener that require the fairy resources within this timeframe. However once optimized, you will find this is usually limited to fourth tier fights, and sometimes Ultimates, since smart prepull usage will better cover this damage. In general, it is almost always a good optimization goal within statics in every fight to begin using Dissipation, but be wary of it during progression and with pick-up-groups (PUGs).

The best SCH openers are as follows:

4th GCD Chain:

![Opener4thGCDChain](/img/jobs/healers/scholar/Opener_4th_GCD_Chain.png)

3rd GCD Chain:

![Opener3rdGCDChain](/img/jobs/healers/scholar/Opener_3rd_GCD_Chain.png)

Deciding which is more optimal for your group will depend on what your party composition is. 

Prefer 4th GCD chain- NIN, SAM, RDM, DRK, PLD

Prefer 3rd GCD chain- DNC, MNK, DRG, MCH

No preference: BRD, SMN, BLM, GNB

Now there are two more important things to talk about, one which does not affect our opener and one which does. 

If you are not comfortable using Dissipation, there is an opener that does not use it. This is absolutely suboptimal, but can be useful for comfort if you are uncomfortable with your cohealer or an encounter, or are doing first time progression.

![OpenerSuboptimal](/img/jobs/healers/scholar/Opener_Suboptimal.png)

The first is eloquently labeled as “Prepull Stuff”. There are three key actions to keep in mind for prepull preparations:

* Recitation
* Seraph
* Mind boosting Potion/Infusion/Tincture

Recitation allows us to use either a prepull crit Excog (since Recitation allows the use of the action without Aetherflow to spare it), or a prepull crit Adlo which we can then Deploy. Which one provides more gains is usually dependent on your group’s cooldown usage and the encounter, but just be wary that using Recitation prepull also means it will not be available for the first 75-80 seconds of a fight, depending on how snappy you are using it. Also keep in mind that using a Deploy prepull does NOT require a crit Adlo, and very frequently it is a better idea to simply Deploy prepull with some small crit fishing so that Recit is still up for a later damage intake within the first 80 seconds.

Seraph is a niche prepull action to consider since it requires some weird timing to still allow the user to Dissipate. It’s also combined with not allowing us to re-summon Seraph for the first bit of the fight. However, with that said, there are still conditions with a lot of party damage that happens early in a fight, but said fight then doesn’t have additional burst incoming damage for a while afterward that allows us to consider this. 

Lastly, potions. Use these at -4s prepull so that the animation lock is resolved accordingly and we can begin casting Broil prepull. As of the last update to this guide, the current best potion for Scholars to use are Grade 2 Tinctures of Mind.

## How DoT's Work

FFXIV revolves entirely around server ticks. Every three seconds, the game will apply the damage from DoTs that you have ticking. This is why DoTs that are applied at different times tick at the same time. Generally, we tend to “clip” our DoTs. Clipping in this context means to reapply them before the entire duration on the target has ended. Your goal is to cast your dot when there is about 1s left on the duration, as the game will take about 1s to apply the DoT debuff to the target. However, having the DoT overwrite early by 1s, or fall off for 1s, are the same potential damage lost. So, if your GCD doesn’t align smoothly with your dot reapplication, choose when to refresh based on which GCD of application will have the lowest amount of time lost.. A good rule of thumb when it comes to reapplying DoTs is If your DoT has 3s or more left, Broil and then Biolysis. If it has 2s or less , reapply Biolysis. Ideally, with a proper GCD recast time, it will align in such a way that your DoT will fall off right when you can reapply it. Scholar BiS sets are designed around having the appropriate Spell Speed tier to hit this GCD.

 DoTs also have a feature we call snapshotting. This means that DoTs retain any buff (or debuff) that was out when the DoT was applied, even after said buff falls off. For example,if Biolysis is used under the effect of Trick Attack, the DoT will retain the 10% increase in damage even after Trick falls off the enemy. If Trick Attack is applied AFTER Biolysis, Biolysis will not gain any damage from the Trick Attack. This applies to any damage increase, meaning Chain Stratagem, Battle Litany, Trick Attack, or even Potions. It will also apply to any damage down debuff you recieve. Heal over time effects work in the same way in regards to buff and debuff snapshotting.

> **DoTs almost never tick when the boss is untargetable.**

If the boss is about to leave the arena, it can be more beneficial to allow your DoTs to fall off. There are a few exceptions to this, such as O5S, but for the most part this is a consistent rule.

* Biolysis must tick for 15s for it to be worth more than a Broil III.

This means that if your DoT can not get 15s duration before the boss leaves, it is not worth it to refresh. If you can’t get that time, then opt into pure Broil III spam. This is a small thing, but it adds up, especially when there are numerous times during an encounter when the boss leaves the arena.

# The GCD and Weaving

FFXIV has a base of 2.5s for its global cooldown (GCD). This recast time is the time between starting one cast before you’re allowed to do another. It is affected by Spell Speed. The main reason this is mentioned is some skills are off the global cooldown. These oGCDs are not tied behind the GCD recast, but have individual cooldowns.

Clipping your GCD is when you cast an oGCD after a casted GCD whose cast time is equal to the recast time or close enough to still create a clip. This time causes a delay before you can execute your next action. It results in fewer casts in an encounter, thus is a DPS loss. However, the loss isn’t enough to warrant never clipping your GCD. It’s generally preferred that we avoid clipping, but sometimes it is necessary to optimize.

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

The fairy is one of the primary draws to Scholar. She provides a constant passive single target heal, essentially a regen, at no cost to the Scholar. She offers mitigation and a party wide heal over time, which can save numerous healer GCDs.

The fairy has what is called “Pet Scaling.” The fairy heals at about 64% of the potency of their Scholar. Because of this, the potencies on her skills are less than what is advertised on the tooltips. The 150 potency of Embrace is actually closer to 96.  Whispering Dawn is closer to 76.8 potency/tick, or 537.6 total potency. 

The fairy is also boosted by potions and food that the Scholar consumes. She keeps the stats that the Scholar had when they were summoned, meaning that Embrace will remain at full power even after the Scholar has removed all of their gear (until they re-summon her). Please note that this stat snapshotting does not include the aforementioned potion and food buffs, those will be mirrored from you to the fairy in real time (so please don’t waste a pot just to summon fairy). Every time Seraph enters or leaves the battlefield and every time the fairy returns after Dissipation counts as the fairy being re-summoned, so there is no value in any sort of “fairy summoning set” to be used before pull, even if it wasn’t a trivial amount of healing that could be gained. 

The Fairy’s Embrace will automatically target anyone in your party below 100% health. This can be a bit of a hassle as she will heal unwanted targets before she heals the tank, even if the party is in no other danger of death. To prevent this, you can use Fey Union after a raidwide to guarantee her healing is funneled on to the desired target. 

Treat the fairy’s skills like they are an extension of your own tool kit. You aren’t micromanaging anything. You’re using your extra skills. This makes understanding how to use Eos or Selene much easier.

> **Fairy actions are equivalent to SCH oGCDs.**

With the exception of Embrace, all fairy skills should be weaved as if they are your own oGCDs. Embrace is done automatically when she’s not casting anything else, and we have absolutely no control over it. Weave  fairy skills with Ruin II like you would any other oGCD.

> **It is good practice to place Eos/Selene on the tank at the start of a pull.**

Having the fairy following the scholar has the potential to lead her out of range of healing the rest of the party for some mechanics. To the best of our knowledge, the fairy heals on a mixed priority system. She seems to prioritize healing the person closest to her, so keeping her placed on the tank is good practice. Health percentage may play a role, but based on testing, it seems the distance of a party member to the fairy is extremely important. Generally, when placed on top of a tank she should be able to heal just about anyone, unless a player is out of range due to a mechanic. Placing her on the tank should make the majority of her embraces go to the Tank. 

You can use this macro to place the fairy on the tank: /pac "Place" `<2>` `<wait.3>`

You do not have to weave this, you can use it during your GCDs at no loss. Remember though that the fairy does not heal while moving, so use it cautiously. Adjust the “2” with whatever number in your party list is currently the main tank Or use `<t>` and select the tank from the party list as you normally would target them to heal. You can also manually place. 

> **DO NOT MACRO FAIRY SKILLS TO YOUR GCDs.**

I may seem like a good idea, but absolutely abysmal in practice. Macros can not be queued. This means that there is a delay between macro’d GCDs that costs you a significant amount of DPS. Macros are extremely clunky in this game. There are a few that can be useful, such as mouseover macros for Deployment Tactics, but in practice everything can be executed just as well, if not better, without macros.

## Problems With The Fairy

The fairy’s programming isn’t perfect. It has a lot of flaws that can make using them feel like a clunky mess. This section will list off a lot of their flaws to help you avoid them.

One of the biggest offenders is Seraph. If you order the fairy to execute an action like Whispering Dawn, then summon Seraph, the ability will go on cooldown, but the fairy will not use it. This can happen with all fairy actions and is extremely annoying when it does.

It is not uncommon for Fey Blessing to ghost when weaved with Fey Illumination of Fey Union. There are also problems with Fey Union not going off when used. 

The fairy will wait to finish movement before she casts the ability you commanded. This usually isn’t too much of a problem if you place her. If you don’t, it can cause a few seconds delay before she executes the action you commanded her to do.

If you double weave fairy actions, the second can take a long time to execute. This can be used in your favor, but is often just an annoyance. There are times when you double weave where the second action will take upwards of four seconds to execute. 

# Opportunity Costs

To truly describe how healing functions within this game, one must first understand the idea of opportunity costs. An opportunity cost what is sacrificed when a choice is made. This is extremely prevalent in healing, and makes up the basis for how healing decisions are made.

Every Succor, Physick, or Adloquium has not only the MP cost associated with them, but they also cost you the 290 potency that would have come from casting Broil III. This is the opportunity cost of using a GCD heal. This is also one of the biggest losses for all healers. Too many GCD heals will cost a lot of DPS over the course of a fight. This is why one of the biggest causes of low healer DPS is unnecessary and inefficient healing.

Generally, oGCD heals are much more efficient than related GCD heals. Scholar’s entire kit revolves around what is called Aetherflow. Nothing is free. Using Ruin II to weave fairy heals is an 90 potency loss, which is the difference between it and a Broil III. Indomitability costs 100 potency, the damage lost from not using Energy Drain.

That is not to say that using Indom is bad. Actually, it’s quite the contrary. The 90 potency lost weaving Ruin II and 100 loss from losing Energy Drain could translate to saving a GCD that would have been a Succor. Eating the 90+100 from using a Ruin II->Indom can become a 290 potency Broil III, which results in a net 100 potency gain. 

This gain applies to any GCD heal you can replace with an oGCD. They are always more efficient than using GCDs to heal. Everything has a cost. People like to believe that fairy heals are free, when they actually have a hidden cost, that of weaving.

For more on opportunity costs, I recommend checking out Momo Sama’s [Healer Optimization Guide](https://www.youtube.com/watch?v=SclS5tbtWNc).

## Opportunity Costs for CoHealers

Before this guide is continued, let one thing be absolutely crystal clear. 

> **There is no “Main Healer” and “Off Healer.”**

This definition is a relic of the past and should not exist now. Both healers have one combined kit that is used to heal the raid together. This interaction is important; many players act as though they are the only healer, or as if they aren’t supposed to heal because they are a Scholar. This couldn’t be further from the truth. 

It is important for you as a Scholar to understand some of the basics of your cohealer. It will give a lot of insight into how their kit functions.

Both healers should be working together to maximize the overall contribution to raid DPS. This means using whatever has the lowest opportunity cost to benefit you and your cohealer. Taking a potency loss from using an Indom can result in a net gain if it prevented your cohealer from casting a GCD to heal.

If forced to do a Ruin II weaved Aetherflow heal, a Scholar loses 190 potency, a very sizable amount. This is 90 potency from Ruin II and 100 from losing Energy Drain. That being said, it is still better to do this if it saves an AST a GCD heal, as gaining a whole malefic is a 60 potency swing in their favor. (250 potency Malefic-190 Ruin II+Indom).

Healing is all about minimizing losses. On Scholar, eating the 100 potency loss from Energy Drain can result in a gain for your cohealer, which in turn is a gain for overall raid DPS. With both healers minimizing losses, the increase in raid DPS is massive. This results in much better kill times and more comfortable clears. 

That being said, Ruin IIs add up to a LOT of missed potency if they are done too much, so ideally you should work with your cohealer to drop unnecessary healing to minimize those losses and only heal when it is necessary. 

AST has a lot of oGCD tools for healing that can be weaved for free whenever. Unlike Scholar, their filler GCD Malefic allows them a free weave after every cast. Conversely, WHM loses a lot of damage for their non-lily based GCD heals. Their Afflatus heals are superior to a SCH using AF stacks on heals, but only if they get an Afflatus Misery out of it. This does assume they will get the Afflatus Misery cast and won’t need the lilies for movement/weaving elsewhere. WHM Afflatus heals have a lengthy list of opportunity costs to consider too, that won’t be covered in the scope of this guide.

## Single Target Healing Priority

Healing is all about following a priority system. oGCDs with no cost are usually the first to be used, with the ones with the highest cost, GCDs, being a last resort. Below is a list of all single target heals, listed based on their damage potency lost, while not accounting for potential loss from clipping GCDs.

![STHealingPriority](/img/jobs/healers/scholar/ST_Healing_Priority.png)

This chart provides a good example of what healing priorities look like. Your goal as a team of healers is to minimize costs, which will in turn maximize your potential damage. There is a system of priorities used to determine what heal should be used at any given time. The priority is of course scaling down from whatever costs the least to what costs the most. GCD heals have the lowest priority, though there are some circumstances in which a GCD can outweigh an oGCD as discussed later.

This is more or less the priority system used to judge what single target heals should be used in a given situation. The only reason Cure II is could be prioritized over  Physick is raw potency. Casting a Physick isn’t going to heal enough in most circumstances, even though the 1:1 GCD cost is less per Physick cast. It would likely require you to cast another heal, which is why it is lower on the priority system.

While it isn’t listed, proper usages of White Mage’s Divine Benison can save heals throughout the course of the fight. If it were put on the list, it would be around where Fey Union is. White Mage’s will freely apply this with their DoT refresh whenever they can, but keep in mind this shield isn’t designed to be heavily coordinated with mechanics, instead it’ll save the total amount of single target healing needed over the span of an encounter.

Unless your cohealer is holding Benediction for a Holmgang or Living Dead, it should be one of your highest priority heals. It has quite literally the highest potency of any heal in the game and should be treated as such.

When organizing and optimizing heals, you’re generally going to use this priority system for determining what heals are necessary for a situation. There are some niche situations that can also apply with AOE regens. Which will be addressed later. 

Keep in mind that Fey Union may need to be held as a tool for forcing Eos/Selene to focus on your tank when the party is low.  Be wary of all the cooldowns, GCDs are generally a last resort for healing, as they cost the most in terms of damage potency, however are also the most readily available tools.

## AoE Healing Priority

It took more columns to make a chart to map out how effective oGCDs are. It requires more information in general to get the full picture. Because of this, adding a full picture with the chart ended up looking awful. The charts for both single target, AOE, as well as the math for later topics such as Deployment Tactics are on this [spreadsheet](https://docs.google.com/spreadsheets/d/1zHEUN5WXReg9FC9MOzt0DV5kjT6OVyVmR0UBZX2Mw64/edit?usp=sharing). 

Assize has a special case because it is a DPS tool first, and it should be treated as such. Its 45s cooldown means that significant delays will result in a very large DPS loss and will misalign it from raid buffs. It is not worth it to hold this as the loss in DPS is generally not worth the healing. However, depending on an encounter’s design, it may be possible to have it both heal and DPS properly. Making it fall out of raid buffs is a loss for the rest of the encounter, every usage after will lose potency. Misaligning it from Dia also results in it having to be either clipped or weaved with Lily heals, which can stack to a net loss as well.

An uncharged Earthly Star can be a gain over using an Indom even though uncharged it does less DPS and less healing. Earthly Star only loses 50 damage potency for being uncharged, whereas a usage of Indom is 100 potency lost (190 if used in a forced Ruin II weave). This isn’t a very common application, but it can be useful if you’re looking to Min/Max your DPS potential. If Earthly comes off cooldown a few seconds before a raidwide, it can be beneficial to place Earthly and immediately Detonate it if it will get you above the HP threshold for survival and save the SCH an oGCD cast.

Aspected Helios or Medica II can potentially be a gain over using an Indomitability as well. They have more potency than Indom. If the potency of an Indom won’t get the party to the threshold to survive an incoming raidwide, but Aspected Helios or Medica II would,  either can be a gain over using Indom  if indom would still require an additional GCD or other opportunity cost heal to put the party over that needed HP threshold. In this case, Indom would have likely forced you to use another AoE healing tool. Medica II/Aspected Helios beat it if the alternative was a GCD heal with Indom. This is also a relatively niche thing, but it can again be important when considering how to maximize your healing potential.

When there are no raid wide instances of damage incoming, it is fine to let skills like Whispering Dawn, Collective Unconscious, or asylum tick the party to full during lulls of incoming damage. This is superior to using Indom or a GCD heal. Using collective to mitigate a raid wide and letting it tick to heal the party is incredibly useful during these times as well. 

Cure III is also generally better than Succor in this case. The reasoning for this is that the raw healing potency from Cure III can make it better than a Succor, even though a WHM’s damage GCD is more potent than Broil III. If you’re trying to top the party before an AOE, Cure III will generally do the job better than a Succor. If you need a small amount of healing before a raidwide, opt into Succor instead.

# Healing with White Mage

When preparing to heal with a WHM in an optimized setting, you need to first see where their Assize healing will line up with raid damage. Assize is 400 healing and damage potency with a 45 second cooldown. Because of its absurd potency, it first priority is to use it on cooldown for damage. Delaying too much pushes it outside of raid buffs, and in a worse scenario can lose a usage. 

Outside of that WHM also has access to Asylum, a ground based regen that functions in very much the same way as Sacred Soil, but with 10% increased healing to all who stand inside. This is a 90 seconds oGCD for WHM, and can be weaved in accordingly. The increased healing potency received whilst standing within Asylum’s range can be used potentially to buff GCD AND notably also oGCD healing actions/spells. For example, Sacred Soil will get 10% more potency when placed upon an Asylum being used, this also applies to whispering dawn and other oGCDs like Indom. 

WHM loses a lot of damage from using GCD based heals. Conversely their Afflatus heals are extremely powerful as they actually give a portion of the damage loss returned with Misery, as long as Misery is able to be cast. Misery, while being a general DPS loss versus their primary damage spell spell-- Glare, is still incredible because it offers WHM opportunities to move and weave. This is important to understand for Scholars. While technically lilies are better than using Aetherflow heals, the WHM has places they NEED to use those lilies, WHM does not have a Ruin II equivalent to tackle moving without dropping casts. They aren’t infinite either. They only gain one lily every 30 seconds. WHM needs them to avoid clipping when using oGCDs. It also allows WHM to avoid having to clip their DoT when moving.

Sometimes, in optimized settings, lilies can also be used in downtime for incredible gains. Three lilies used in downtime allows the White Mage to negate the DPS loss on using their Afflatus skills. Because there is nothing to target in downtime, they do not lose Glare casts for using them. Three lily abilities in downtime becomes a net 600 potency DPS gain once Misery is used. This assumes that the White Mage doesn’t need to use them for movement/weaving after the downtime. Because of this, downtime usages are a serious consideration for WHM players, and should be taken into account when creating healing strategies.

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

This is important because you could have a 50,000 shield on someone and a 500 Noct shield would override it. It is extremely frustrating that this interaction exists, but it has been like this AST’s addition to the game. Unlike when overwriting your own Galvanize shield, the shield size is irrelevant when it comes to Noct and Galvanize overwriting. NOCT/SCH don’t go well together unless the group has a set plan for shielding that prevents this interaction from happening.

**Conversely, Celestial Intersection, Celestial Opposition, and Neutral Sect shields all stack with Scholar’s Galvanize/Veil. They are not nocturnal fields.  These can all be stacked for massive shielding on the party.**

## When to Shield

A common mistake that new Scholars often make is an excess of shielding. This is common even into the middle levels of Scholar play. Many Scholars attempt to shield incoming damage, especially large instances of damage. While comfortable for first time progression, this is not always necessary, and is often a loss. Shielding is generally not needed for most raidwides. Consider only shielding if:

1. The party will not survive without shielding.
2. Shielding one instance of damage prevents having to heal another.
3. You have no oGCD options for AOE healing.

An example of scenario one include Ion Efflux spam at the end of Final Omega (Savage) or Tumult & Voice of the Land spam at the end of Titan (Savage). These mechanics generally require some kind of shielding to survive comfortably. This is especially true during early clears, as your defense stats and health haven’t scaled to their maximum yet. 

The second example is if shielding a mechanic could save you an additional GCD heal. This is especially prominent in instances where a deployed Adloquium is used.

The third scenario ideally never happens. Casting Succor or Adloquium to cover not having an oGCD heal is unfortunate, and rarely happens, but there are some times that we have to take the loss and use it, especially if our co-healer has fallen.

# How Healing Buffs Work

Healing buffs, such as Dissipation and Fey Illumination, increasing the amount your healing spells will heal. Scholars do not have a buff in their own kit to buff the potency of healing oGCDs. If the ability says that it increases healing received “via healing actions,” it will increase the healing received by both GCD heals and oGCD heals. If it specifies “healing magic potency,” it will only increase healing that comes from GCD based heals. Both Fey Illumination and Dissipation’s buff has the latter phrasing.

Healing Buffs that affect only GCD heals-

1. Dissipation (Scholar)
2. Fey Illumination (Scholar, applies to the whole party, including the fairy)
3. Neutral Sect (Astrologian)
4. Temperance (White Mage)

Healing Buffs that affect all healing

1. Mantra (Monk)
2. Nature’s Minne (Bard)
3. Improvisation (Dancer)
4. Asylum (White Mage, ground AOE players must be inside of)
5. Thrill Of Battle (Warrior)

Dissipation’s healing increase is only for healing magic potency, not actions. Because of this, it only benefits Succor, Adlo, and Physick. 

These can be categorized by who uses them and who they benefit. Monk, Warrior, Bard, Tanks, and Healers all have ways to increase healing received, while all healers have a way to increase the amount of healing from their own GCD heals.. 

Healing increases, such as Fey Illumination, scale multiplicatively, not additively. This means that stacking these will result in massive heals, which can be extremely helpful when you want to maximize the potency of your healing. 

For example, Adloquium is 300 potency. When used with Dissipation, the healing potency becomes:

300+(300*.2)=360

If we decide to add in Nature’s Minne from a Bard, another 20% increase, then we get:

360+(360*.2)=432

It is important to know the difference between them being additive and multiplicative. If they WERE additive, the potency would have been 420. The more percentage increases you add, the more the math begins to stray from the actual value. 

This is all important because this also scales into how you can address certain mechanics. Your shields will scale based on how much you heal. This means that stacking Mantra, Dissipation, Nature’s Minne, and Thrill can result in an Adloquium with a potency of 622.08. This Adlo has a higher healing potency than your Lustrate, and provides a shield equalling 125% of that value. This shield being Deployed to the entire party can negate entire mechanics.

The loss from casting this Adloquium is still 290, the lost Broil III, and potentially an additional 90 from weaving the deploy. That being said, this shield can prevent another heal from having to be used, negating that loss entirely.

Being able to stack these healing increases results in some insane numbers in terms of shielding. If you are going to have to use GCDs to heal, it is worthwhile to use these to maximize the value of your GCDs. If you’re going to be forced to take a loss, it’s better to get the most out of it.

# Deployment Tactics

Deployment Tactics at face value is fairly simple. It will deploy the effect of Galvanize off of the target and spread it to anyone in a ten yalms. This does not deploy Catalyze. When reading the tool tip, the general idea behind this skill is obvious. You cast a shield, such as Adloquium, then spread the strong shield to the party. 

This will spread the current value of the shield to the party. This is important to note. If you put a shield on the tank and that tank then gets hit by an auto attack, the shield will be smaller by the amount of damage done from that auto. A surprising amount of Scholars make the mistake of casting an Adlo onto the main tank and deploying a weaker shield because of autos. Generally, you’ll try to deploy off of the tank that is not tanking the boss at the time, or yourself if you know you’ll be safe and properly positioned.. 

Deployment Tactics still incidentally costs the loss of a Broil III to use. As such, it is avoided if at all possible. That said, it is still very strong for mitigating massive hits. A strong Adlo can potentially save your cohealer a GCD heal resulting in a net gain for the party’s combined raid damage. There is a strategy for handling a mechanic in Ultima Weapon’s Refrain (Ultimate) where the Predation  phase can be started with a buffed deployed shield allowing the entire party to be hit by one of Ifrit’s dashes. This is extremely heavy hitting, and requires high shielding to survive, but lets the party ignore this part of the mechanic entirely. It’s a valuable tool for progression and can be one for DPS uptime as well. 

It is also worth knowing that if you attempt to use Deployment Tactics too early, it will have no effect. This is caused by the inherent delay to shield application discussed earlier. This can be a problem if your strategy for healing requires a shield. It’s unfortunate if this happens; communicate the mistake to your team and compensate by doing extra heals. It sucks when this happens, so attempt to avoid it. 

You can also deploy the shield from Succor, though this tactic is extremely niche. This was more commonly applicable in 4.0, when you could deploy off of your pet who avoided being hit by most mechanics. One of the few times it is very useful is when one/two members of the party don’t get hit by an AOE. For example, Kefka’s Optimized Fire III hits 6/8 party members. A Succor shield can be deployed off of the target that didn’t get hit for some fairly nice value.

# Summon Seraph

If Seraph had to be described in one word, it would be versatile. There are many possible usages for her. She is a very flexible tool in aScholar’s kit. Your goal with Seraph is not necessarily to maximize your usage, but rather to get the most out of the usages you do get with her. Each potential use has some kind of drawbacks. A few usages for her are:

1. Pre-pull.
2. During long auto attack segments.
3. To replace a Succor cast.
4. When you need AOE oGCD healing.

Using Seraph pre-pull is a good way to get a Consolation on the party before an encounter begins. This can be combined with an Adloquium deploy for some massive mitigation in the case of an opening AOE on a fight. The downside to this is that you lose Seraphic Veils when counting down for the pull, so you won’t get full value out of her. You can time this in such a way that you still get dissipation in your opener.

Seraph also has the advantage of acting as a sort of buff to the fairy’s auto heal. However, using her after a party-wide AOE can result in her using Veil on random party members, rather than the main tank. Seraph during times where the boss is doing auto attacks alone allows you to get a lot of value out of her Seraphic Veil. This does mean that Consolation will lose some value on the party at large, but it is generally fine to use Seraph in this way.

The final usage will be one of the most common in optimization settings. Seraph’s Consolation is essentially a miniature Succor. This means that you can double weave Seraph and Consolation after Ruin II and potentially save a GCD that would have been a Succor cast. This results in a 200 potency swing in your favor, which adds up in the long run.

Finally, she can be used as another source of oGCD based healing. You can treat her very much the same as other cooldowns, especially if you don’t specifically need her shield. If there is ever a time that your other major healing cooldowns are currently unavailable, Consolation is a very good AOE heal.

Seraph is not without her downsides, however. The main problem with her is that she is an oGCD to summon and so too are her abilities. This means that to get Consolation out, you must double weave. During her duration, you also do not have access to Fey Blessing, Fey Union, or Dissipation. Using Seraph when you are supposed to get use Dissipation for additional stacks could potentially push those Dissipation stacks out of raid buffs, as well as POSSIBLY losing a usage entirely, although unlikely. Using Seraph must be balanced with these downsides to be aware of what you lose before casting her. Avoid using her during raid burst damage windows.

# Recitation

Recitation (Recit) is a new skill added in 5.0. Using this will guarantee a critical hit for the  HP restored on Succor, Adloquium, Indomitability, or Excogitation. In addition, that skill will not cost any resources. Adlo and Succor having no mp cost when used with Recit is very nice for MP conservation. Recitation will rarely if ever be used for this purpose, but it is an aspect of the ability.

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

This is, of course, unless you need the shielding from Succor or Adlo to survive, in which case they take precedence. In terms of prepull, you get more healing value out of Recite Excog over Recite Adloquium. You can readily fish for a critlo prepull, too. Furthermore, because you don’t get the value out of the base heal on Adlo prepull, Excog ends with ~60 potency more value.

# Dissipation

Dissipation is an interesting ability. It sacrifices your pet fills your Aetherflow gauge with three stacks. It also grants a 20% increase to healing spells for 30s. During this 30s you can not resummon Eos or Selene. The healing increase buff from this cannot be clicked off. 

Dissipation more than anything is a DPS tool. It is used in the optimal opener and also aligns with every three minute raid buff window if used on cooldown. The three Energy Drains gained from Dissipation aren’t massive towards DPS, but it is DPS positive to use it. Each Energy Drain, even when weaved with Ruin II, is a 10 potency gain. (100 from Energy Drain - 90 From a Ruin II weave). 

Dissipation can be held for specific situations, as long as you aren’t losing a usage of it. For example, if you need to do extended movement, holding dissipation and being able to weave Energy Drain on your forced Ruin II weaves is an acceptable plan. If the 20% healing increase can save a GCD heal, it is better to hold it for that instead of using it on cooldown. This again assumes you do not lose a usage. This will be an extremely rare occurrence, but there are mechanics that this could come into play for.

Do not use Dissipation if you are uncomfortable going 30s without your fairy. In progression, it is recommended to hold off on using Dissipation until you need to push for damage, as Dissipation also doubles as a healing tool. Dissipation is also very useful if you need to do emergency Lustrates. This isn’t a problem in later clears, but is very helpful in progression raiding.

The major downside of Dissipation is the loss of all fairy skills. Assuming that the fairy would have gotten 10 full embraces during the 30s downtime, you’re missing out on ~1,050 net potency on the tank. Usually, this doesn’t matter, as both WHM and AST have tools to potentially cover that loss, but do communicate with your co-healer about it.

This skill also locks you out of Seraph, which is one of SCH’s most powerful tools. All of this information must be considered when thinking about when to use Dissipation. Try to time it so that you won’t need Seraph during the time you Dissipate. If you need Seraph when Dissipation is coming up, it is better to Seraph if you can save Succors using Consolation.

# MP Management

MP management isn’t the worst on Scholar. We have a lot of options to regenerate our MP and a pretty constant flow of MP between Aetherflow, and we also have Lucid Dreaming, a 21s MP refresh on a 60s cooldown.

Aetherflow should be used as soon as it comes up. Each stack that goes into Energy Drain is a returned 500 MP, which makes up for more than a Broil/Ruin II in MP. It ends up being MP positive for every stack used on Energy Drain. It is also MP positive to use your stacks on Healing instead of GCD healing

There isn’t particularly an “optimal” time to use Lucid Dreaming, as its really dependent on how you’re healing a fight. Depending on differing strategies, different people could need it at various places. With that being said, don’t hold Lucid for half of an encounter. Ideally you would want to get as many uses out of it as possible, while holding it when it is needed for a specific portion of the encounter. If you get an open spot to weave it, feel free. It’s really dependent on a person-to-person basis.

Having problems regarding MP is often due to too many Succors. Succor is not very MP efficient, which is yet another reason to avoid using it if at all possible. The 1,300 MP cost is extremely significant especially if it is being spammed for AOE healing. 

Dissipation is also positive for MP management, as it results in a +300 MP gain on every usage.

# Movement

Movement is another place that many Scholars struggle to master. Scholar has a lot of strong options for moving. We aren’t quite the mobility gods that ASTs are, but we’re no slouch.

There are several options to handle movement in a raid setting. What you should use will vary depending on various factors. For example, how quickly you need to move, and how far, will play a big role in deciding which movement option will be best suited for a given situation. In terms of movement, Scholar has, in no particular order, Art Of War, Biolysis, Ruin II, and Swiftcast. These are all tools that need to be considered when movement is coming. 

Art of War is only really used for movement if there are two or more targets that you have to move away from. For example, if there are two adds that you are using AoW on, and you need to move, an Art Of War gives you 2.5s after it is cast to move partially to your desired location.

One trick for movement is called “Slidecasting”. This is abusing the spaghetti coding of the game to get casts off as you move. To do this, you simply move when the duration of your cast is less than .5 from completing. The game cancel your cast at this point. Doing this over and over lets you slowly move across the map while maintaining DPS. This will take some getting used to, and you can lose casts if you aren’t careful. That being said, this is good for slow movement and when executed properly do do not lose any DPS while slidecasting.

Ruin II is a very good option for movement. For bursts of movement farther than you can reach in one GCD, it is possible to Ruin II->(Swiftcast)->Broil III instead of using two Ruin IIs. Ideally we avoid using Ruin II if at all possible, but it’s much worse to lose casts while running.

Sprint also makes a difference when it comes to movement. Covering more distance on any given GCD window can possibly result in preventing a Ruin II usage. If you’re going to Ruin II anyway, try using sprint to see if it can save a GCD. There is no downside to it other than that sprint needs to be weaved. Notably sprint also takes up TWO oGCD slots to weave properly (you can’t use another single weave after it).

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

Everything being used on one AOE means that there will be nothing left for the next hit. Using too much on one attack can mean that an extra heal might be necessary for future damage.

It is important to map out everyone’s mitigations to maximize the effectiveness of them while not wasting them. Using a Sacred Soil when there are already numerous mitigations stacked on an AOE will likely not save a heal. Communicate with your party when things should be used to maximize their uses and effectiveness.

# Party Mitigations

Everyone in your party now has some form of party mitigation tool. This was a change made from Heavensward (3.0) into Stormblood (4.0). The developers wanted to take some of the responsibility off of the healers, and give a bit more responsibility to the rest of the party. Because of this, every job now has something they can use to reduce incoming damage taken.

If a tank drops dead after a buster, it is worthwhile to check and make sure that these mitigation tools were present. Especially in fights like O10S, Feint can make a MASSIVE difference in the damage that a tank will take from the tank buster.

Make SURE your DPS are using their mitigation tools. This is important for all healers, including Scholar, as your party members using their tools is essential for you to maximize your potential damage output. Proper usage of these tools can result in a fairly significant gain for healer DPS.

Treat party members like children. They will absolutely never do what you need, where you need it, unless you tell them to. As a healer, you need to be vocal and specify where mitigation will save you a heal. For example, if an AOE requires shielding, it can be better to have a Warrior use Shake It Off to save a Succor cast.

Bloodbath is also important when it comes to saving GCD heals. Proper usage of these skills can save healing over the course of an encounter. Bloodbath essentially heals the user for 22% of all damage dealt for the entire duration. Across all skills used and auto attacks, this results in a fairly large amount of healing. This can be used to cut healing, especially if the DPS only needs a small amount of extra health to survive a hit.

Things like Feint almost always have some purpose in an encounter. If all of the tank busters are magical, Feint can be used on heavy auto attack segments of the fight to help ease healing. Do not underestimate how much healing is saved through auto attack Feints throughout the course of an encounter.

Ask your DPS where they are using these skills, and if you think there is a better place, tell them. Check logs to make sure they are actively using their skills, if they aren’t, tell them where to put them. This is not negotiable. They have these skills for a reason, and need to use them. If they aren’t, they are not maximizing their effectiveness and are holding the entire group back. You can clear while not using these abilities, but it makes the entire run infinitely harder than it has to be. Some of the skills to look for include, Feint, Addle, Reprisal, Troubadour, Tactician, Shield Samba, and more.

# Raid Buffs

Raid buffs are one of the most important aspects of raiding in FFXIV. The meta of XIV revolves around stacking raid buffs for massive burst windows. Most DPS jobs, bar Samurai and Black Mage, have an ability that increases DPS for the party. Tanks lack direct raid DPS increases, as WHM does as well. These raid buffs are always on cooldowns with multiples of 30s, which means they will all eventually line up if used properly on cooldown.

Raid buffs, like most other % increases, scale multiplicatively. This means that a Broil III under Trick Attack (10%) and Divination (6%) is around 326 potency. Stacking these is the best way to maximize their benefits. Again, notice that all of them are on a multiple of thirty second cooldown. This means that when they are used properly, they will naturally align, causing strong burst windows that will be your biggest DPS phases. These burst windows are critical for maximizing party raid DPS to increase damage and speed up kill times.

Scholar has one raid buff. Chain Stratagem increases the rate at which the target takes critical strikes by 10% for 15s.

![RaidCDsSheet](/img/jobs/healers/scholar/Raid_CDs_Sheet.png)

> Image Courtesy of Jahadaunt

## Buff Alignment

Generally, raid buffs should be used on cooldown, and when you’re running with a pick-up group, you should aim to use them on cooldown. This is because everything will naturally align if they are used properly. However in a static and speed running environment, these can be better planned for greater gains, especially when you know your expected kill time. Here is a graphic showing off exactly how it looks when raid buffs are used on cooldown. This is done with only NIN/BRD/SCH/DRG for the sake of making a smaller chart. The choice to use 0s for the sake of this chart was to more easily demonstrate how raid buffs align. They each have a specific time that they go out during the opener but will overlap.

![RaidBuffs12](/img/jobs/healers/scholar/Raid_Buffs12.png)

This is assuming a 12 minute pull. This shows exactly how all of these buffs will naturally look when used on cooldown. Again, buffs don’t actually happen at 0 seconds, and sometimes a fight has downtime during normal buff windows that will need to be pushed back.

Raid buffs should almost always be used on cooldown. Holding on to raid buffs for extended periods of time can deny usages throughout the course of an encounter. This is a very large loss in most circumstances. With that being said, there are a few instances where raid buffs can be held. Listed out, they are-

1. The buff comes up during an add phase.
2. Slightly delaying a buff can allow for better uptime without losing a usage.
3. Holding it can allow for a better re-opener on a later phase.
4. Using it on cooldown will result in a usage where you can not get good value.
5. There will not be time for another usage, so delaying it allows for a greater burst window.

The first is the most common. Gaining extra burst damage on the boss is almost always superior to using it to damage an add. Certain raid buffs, like Trick Attack, can often be used on adds because they have a short cooldown. For the sake of Scholar, it is safe to always hold Chain during adds for the burst window when the boss returns. 

The second instance is less common, but is still useful to take note of. There are certain times in encounters where there is limited uptime for some party members. This can be problematic, as it limits the gain you can get out of your buffs. During scenarios like this, it can be beneficial to slightly delay usages to get the full duration out of the buffs. This is, of course, if you won’t lose a usage because of the delay.  This entirely depends on your group’s kill time if you will lose a usage.

![RaidBuffsClip](/img/jobs/healers/scholar/Raid_Buffs12_Clip.png)

For an example of scenario #3. This applies for specific kill times. If the kill occurs at under 7:00, but over 6:15, when the last set of buffs fell off, there is around 40s worth of time that raid buffs COULD potentially be delayed if necessary without losing any uses.

In the past, there have been several times this methodology has actually been applied. During the fourth floor of Deltascape Savage, Exdeath, Chain Stratagem came up during the Black Holes phase - a phase that required a heavy amount of movement. This was awful for uptime, as multiple people were being forced to move during the mechanic, and was followed by a mechanic that required healers to top the party to full health. Holding Chain here to get it during the later Meteor cast, where there was no other outgoing damage, was a pretty sizable gain.

Another example of this is the second Celestriad in God Kefka, the eighth floor of Stormblood’s savage raids. This mechanic forced the party to break away from the boss and move into positions that weren’t friendly for positionals. Delaying Trick and Chain here resulted in better usage.

The third scenario mainly applies to Ultimate raids. The structure of all Ultimate tier raids released so far have been  multiple mini-bosses before a final encounter. These minibosses tend to be extremely short; for example, Twintania in the Unending Coil of Bahamut (Ultimate) had about a three minute enrage. While you could use the second Chain Stratagem on her, using it there would mean that it wouldn’t be up for the Nael opener, which was a significant loss. The same concept applied for Garuda and Ifrit, the first two mini bosses in the Ultima Weapon’s Refrain (Ultimate).

The fourth scenario also happens frequently, and mainly involves instances where you can’t get the full value out of a usage. These include where the boss will go untargetable in the middle of the duration or if the boss will die during or immediately after a usage.

![RaidBuffs8](/img/jobs/healers/scholar/Raid_Buffs8.png)

Take for instance, this eight minute pull. If the boss dies at 8:00-8:10, you aren’t getting the full value out of the final Chain. In this instance, you will be getting four full usages of all two minute raid buff cooldowns, and three full usages of three minute raid buff cooldowns. Because you’re not going to get the full value out of the last Chain, it is worthwhile to hold earlier usages for different alignment. This results in one less Chain over the course of the encounter, but it allows for three full burst windows with Trick + Chain + Litany. The lost chain isn’t that much of a loss due to how gimped it was going to be anyway. This does require the DRG to hold their second Litany for 60s as well.

![RaidBuffs8DRGHold](/img/jobs/healers/scholar/Raid_Buffs8_DRG_Hold.png)

This basically guarantees three massive burst windows, which is effective for increasing raid DPS. Of course, this is all subject to change based on party composition. Having 90s raid buffs changes the timings in such a way that it allows for full use of the 90s buff windows. Below is an example of one such setup  using MNK. This setup has the same three major burst windows, but loses a Trick Attack through the course of the pull.

![RaidBuffs8Mnk](/img/jobs/healers/scholar/Raid_Buffs8_MNK.png)

The fourth and final instance of holding raid buffs is easier. If you are not going to get another usage of raid buffs during the encounter, it is best to get that last usage when other buffs are active. 

![RaidBuffs8Clip](/img/jobs/healers/scholar/Raid_Buffs8_Clip.png)

If this pull ends at 9:20-9:59, there is no possible way to gain another Chain Stratagem during the course of the encounter. The final Chain used only falls under Trick Attack. Holding this Chain an additional minute to get it with Battle Voice and Litany will result in higher damage overall than if it was used properly on cooldown with trick attack.

Again, these changes need to be communicated with the party, as a delayed Chain will not be as effective if the party does not know that it is happening. This can be especially important for BRD, which wants to snapshot its DoTs in raid buffs.

# Stat Priorities

Your priority as you attempt to gear up is always going to go something like this:

1. Weapon Damage
2. Main Stat
3. Piety (to threshold needed to heal an encounter)
4. Crit
5. Direct Hit or Determination
6. Spell Speed
7. Piety

Use this as your main priority stat wise. The above list applies heavily to when gearing up and attempting to work towards your BiS set. During progression, generally you will take whatever has the most item level, as the main stat difference is extremely important, plus the added Vitality, and def and m.def on left side pieces, can help you survive mechanics more readily. The difference between the high quality crafted chest piece and the Omega Coat of Healing is 37 Mind. Almost no amount of substat will make up for that loss of main stat. 

There are some very niche situations where you will hold on to a lower item leveled item. The main situation this is considered for, is when the higher item leveled piece has a large amount of unneeded Piety. If getting the capped ilvl coat costs you 271 piety from your crafted coat, it can be beneficial to hold on to the crafted coat until you’ve made up for the Piety loss elsewhere in your set.

## Weapon Damage

Weapon Damage is the most important stat for every class in terms of damage. For healers, there are some niche situations where a higher item level weapon will be worse due to inferior substats, but generally only when the item level differs by 5. This is incredibly rare, and often only applies to specific gear sets.

## Main Stat

Main stat is generally the second most important stat. It plays a massive part in how much damage we deal, as well as how much we heal. For healers, our main stat is Mind. We usually opt into whatever the highest item level gear is because it has more of this main stat. There are rarely some BIS sets that opt into crafted accessories. The high amount of substats that can be obtained through overmelding on crafted accessories can make them a valuable option. The overmelds on these pieces can often meet substat tiers that couldn’t have been otherwise, which can be a sizeable increase to DPS.

## Piety (PIE)

People vastly underrated how useful Piety is as a stat. People often say “Piety is a dead stat”. This is both true, and untrue at the same time. If you run out of MP, you will be unable to DPS or heal. Because of this, Piety is actually the most important substat for healers up until a certain threshold. Once you get to the threshold required to get through a fight without running out of MP, Piety becomes a useless and dead stat. 

Many people think that because there are sets that run extremely low MP it is a useless stat. The extreme speedkill sets that go with almost no piety are meant to be used in groups that will do everything they can to reduce healing and have everything planned out to the GCD. Playing with a low PIE set is extremely risky in groups that aren’t attempting to optimize.

Finding the right amount of PIE for yourself takes a lot of trial and error; it is useful to keep other pieces available so that you can sub in more piety if it is needed. This is also incredibly important for progressing in Ultimate Raids and upper floors of savage tiers.

Piety increases the amount of mana regenerated naturally in battle.  A certain value of this will always be necessary. Lower Piety will generally result in higher DPS as long as you have the MP to do DPS.

## Critical Hit (Crit)

Critical Hit is our most influential stat when it comes to DPS and healing. The more of this stat that you get, the more crits will happen, and the harder they will scale. Because of this, crit scales quadratically. The more of it we stack, the greater returns. 

While crit is the best substat, there are a few rare times that we opt out of gear that has Critical Hit on it. This mostly happens when the gear is Crit + Piety with more Piety than there is Crit on the piece.

## Spell Speed (SPS)

Spell Speed is a double edged sword, particularly for healers. In a vacuum, spell speed is a powerful substat as it increases the frequency of auto attacks, the damage on damage over time (DoT) attacks, and the healing done from healing over time (HoT) spells, while also reducing your cast and recast time. In theory this last point means you can attack (cast) more often. However, it is important to note that there are two “tiers” to spell speed scaling: One of these tiers impacts your DoT/Hot and AA damage scaling, while the other is your GCD tier’s recast time.  In BiS calculations, SPS melds are generally done to meet GCD tiers rather than the very small DoT/AA scaling tiers. 

For multiple reasons, the largest benefit of spell speed (GCD reduction) is also the greatest detriment. First, substats function as a “zero-sum game.” This means that any stats you put into Spell Speed are taken away from other damage gaining stats such as Determination, Critical Hit, and Direct Hit. Consider that the largest gain to spell speed is gaining GCDs to deal more damage. By reducing the impact of your other stats in favor of gaining more casts, you’re also directly increasing the dps losses from losing casts due to movement, clipping, canceled casts, or boss mechanics. It’s important to figure out if the additional casts netted from higher Spell Speed are offset by these other losses. As a result, optimizing higher spell speed requires much greater attention to positioning for mechanics to minimize unnecessary movement and canceled casts. It also requires more thorough planning of your GCDs and oGCDs to minimize clipping.

The second reason is that casting GCD spells more often also means it may be necessary to have more piety to maintain your mana economy.  Piety, while a very important stat for healers, is also the only “zero dps” substat. Again, recall that substats are a zero-sum game. Any stats put into piety are being taken directly from critical hit, determination, and direct hit. This means that if a spell speed meld or piece of gear forces you to add piety to compensate, you are likely taking an overall hit to your dps vs utilizing another substat instead. 

Finally, reducing GCD can also create clipping issues for oGCD heavy classes.  Scholar is in a unique situation where it is heavily reliant on oGCDs and reducing the GCD too significantly can create serious clipping concerns. As your GCD decreases, the time available to fit in double weaves also decreases, which can create clipping issues when double weaving oGCDs. Clipping your GCD is a direct potency loss, and if your spell speed tier means clipping is inevitable you will want to consider going with a slower GCD to make weaving more viable.

For high level optimization, you ideally want enough Spell Speed to get around a 2.41 GCD, as this allows for optimal refreshes of Biolysis.

## Determination (DET)

This stat increases damage dealt and healing dealt, much like a small direct potency gain. The damage gain from Determination is linear. This means that it does not scale quadratically like critical hit in terms of damage gain. 

Determination is not a bad stat. It just does not scale as well as Critical Hit. DET is a consistent increase in damage/healing, whereas Crit is an RNG gain. Crit will likely always be better, but DET is still solid. It is the “base” substat, even utilizing a lower base value from other substats.

## Direct Hit (DH)

Direct hit functions as sort of a “mini crit”. It is a flat 25% increase to damage when you get a Direct Hit. It scales linearly. The damage gain is consistently 25%, but the more DH you obtain the more likely they are to occur. When going for maximum damage sets, it is mathematically better to opt into direct hit over spell speed or determination.

Direct Critical Hits are the real star of having DH. Both of these occurring on the same hit can result in massive Broil IIIs. These are fairly common in the opener, when all crit buffs are stacked together and Battle Voice is coming out from the Bard.

### Determination Vs. Direct Hit

Since Determination affects healing potency, and Direct Hit does not, many healers hesitate to stack DH over DET. Most DHIT builds have less than 1% higher damage than those with DET, and have less than 4% reduced healing. In all honesty, you won’t feel the difference either way. For maximum DPS for speed kills and optimized runs, DHIT is mathematically better DPS wise, and the healing gain on DET isn’t likely to make a life or death difference, although it can. That being said, the difference is so tiny between either that you really won’t be able to tell. Pick whichever you prefer, and stop arguing about which is better.

# Macros

Generally, macros are frowned upon. Macros are not handled well in FFXIV. If you macro your healing/DPS spells they cannot be queued. This means there is an extra delay before the next cast, which will add up to a DPS loss. However, there are a few useful macros that improve quality of life. Repeated lines in macros will improve responsiveness. No macro is mandatory, but they can make life easier.

There are a few different types of Macros. `<tt>` will target whatever has aggro on what you have selected, “target of target.” `<t>` will target whatever you have targeted. Mouseover `<mo>` will go on whatever you are hovering your mouse over.

Macros are only really used for very niche things, such as mouseover macros for using oGCD heals while not tabbing off the boss. It can also help controller players place ground targeted skills, like Sacred Soil, a bit more quickly.

# General Tips

There are lots of small things that can be really helpful for playing any job, especially healing. A lot of these were already mentioned earlier, but it is worthwhile to repeat them to drill them home.

Keep your GCD rolling. If you have 3s where you didn’t do anything, that is a Broil III cast lost. Your CPM, or casts per minute, is one of the most important parts of playing this game. Most people who come asking why their DPS is low are simply not casting enough, resulting in a ton of lost DPS.

Don’t be afraid to trust HoTs like Whispering Dawn and Sacred Soil to heal the party. It is a massive amount of healing. Avoid using other heals during the HoT’s duration if possible, as its ticks are wasted if you use an Indom to cap the party while the HoT is ticking.

Communicate with your party. Always let your party members know what you are doing. Let your cohealer know that they don’t need to heal if you are going to Indom. Let the party know you are going to delay a Chain Stratagem. Communication is absolutely key when playing in a raid setting. You need to be vocal about things that will make the raid easier. If moving a Divine Veil will save a healing GCD, let the PLD know. They can not make your life easier if they don’t know what will help you. The same applies to all DPS mitigation tools. Tell them where to put things.

# Additional Resources

These are some additional resources that are useful for anyone attempting to further their play. There will be guides for general healing, AST (and soon WHM), as well as optimization guides. It is worthwhile to look into these, as they are useful guides from talented players.

[Zyrk's Bullshit Guide to the Principles of Healing](https://docs.google.com/document/d/1yoq1zU2VgMJQ53PaJHaUtwA3S2aSz1C69qkLDaOmZY8/edit#heading=h.ls1qn6qewmw7)

A general guide to the principles of healing by Zyrkhan Dar’locke. It is a fairly long read, but if you’ve managed to slog through 70 pages of Scholar, it is also a worthwhile read. It has many of the concepts discussed here, but in much greater detail. It also goes much further beyond the scope of this Scholar guide. I highly recommend reading it. 

[Healer Optimization Guide](https://www.youtube.com/watch?v=SclS5tbtWNc)

This video guide by Momo Sama is incredibly useful for learning how to optimize with your cohealer to push for higher dps. This video is the holy grail of information in regards to optimizing. This is a MUST watch for anyone wanting to learn how higher level play operates. The information regarding potencies of abilities is outdated, but the fundamentals are still very good to know.

[Intro to Astrologian](https://docs.google.com/document/d/1DtB6WBzufUTEG5-ManJ9wYUsawgvcUQgkN6bGjFsq6o/edit#heading=h.6t6shfxi1z)

A guide to Astrologian by Zyrkhan Dar’locke. Reading this as a Scholar can be useful, as it gives insight into how their kit operates. Knowing your cohealer’s tools well is important for maximizing the effectiveness of your own play.

[TheoryJerks Website](http://theoryjerks.akhmorning.com/)

Large spreadsheets done by Nemekh and Allagan Studies (formerlly known as the TheoryJerks). Useful for seeing how much of a substat will net a certain gain, but remember to not compare stats in a vacuum. Has all substats at 80 which is useful for figuring out melds.

[Momo’s Dungeon healing Guide](https://youtu.be/wE1Ay8mmVB8)

Useful healing guide for new players looking to do dungeons.

Healing Analysis: [O9S](https://youtu.be/3WLq8c8tg00) [O10S](https://youtu.be/GUeuoDza84E) [O11S](https://youtu.be/hXfVOg047GQ)

A video of Momo going through two encounters from Omega: Alphascape speed runs and analyzing their healing strategies. Very useful if you want to see the mentality and thought process behind high level healers. The information is a bit dated, given the potency values have changed since Stormblood, but the idea behind the optimization is very much the same.

[Healer spreadsheets](https://docs.google.com/spreadsheets/d/1zHEUN5WXReg9FC9MOzt0DV5kjT6OVyVmR0UBZX2Mw64/edit?usp=sharing)

My spreadsheets that were used in the process of making this guide.