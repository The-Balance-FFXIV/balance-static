---
title: Summoner Basic Guide
card_header_image: /img/jobs/smn/basic.png
authors:
  - argen
patch: "6.08"
lastmod: 2022-04-02T03:25:18.702Z
changelog:
  - date: 2021-11-15T21:19:02.069Z
    message: Added page
  - date: 2022-04-02T03:25:18.157Z
    message: Updated for Endwalker.
---
# Introduction

This guide will cover Summoner changes, rotations and ability usage in the Endwalker expansion. The core foundation of Summoner has changed significantly, most notably with the complete removal of damage over time abilities (dots) and the newly added primal arcanum system (gems). The basic flow and idea of Summoner’s rotation can be simplified as follows:

* Use Searing Light in alignment with party raid buffs
* Summon Bahamut and use all abilities to refresh your primal gems
* Go through three primal phases
* Summon Phoenix and use all abilities to refresh your primal gems
* Go through three primal phases
* Repeat

Within that framework, there is additional nuance such as optimizing damage into raid buffs, moving certain spells around based on movement requirements, and making effective use of Summoner’s various utility tools. These will be covered more extensively in below sections. 

Overall, Summoner is considered one of the easiest to pick up and play at a basic level given its straightforward rotation and high degree of mobility for a caster, with only a few hardcasted spells per minute. The combination of simplicity and party utility Summoner brings makes it a popular choice for newer players getting into endgame raiding.

If you have questions after reading the guide, please visit #smn_questions on The Balance server. Additional resources can be found in the #smn_resources channel.

# Resources and Job Gauges

Summoner’s resources are displayed on two gauges: the Aetherflow Gauge and the Trance Gauge. The Aetherflow Gauge indicates the number of available Festers and Painflares. On the Trance Gauge, the availability of the Demi is shown as well as its duration. In addition, the status of Egi summons can also be seen with their corresponding colors. 

1. Aetherflow Gauge
2. Demi status
3. Trance timer
4. Gem status
5. Primal Elemental Attunement timer 

![](/img/jobs/smn/1.png)

&nbsp;

When a certain resource is available, the indicator for said resource becomes brightened. Conversely, they are dimmed when unavailable. In this image, two stacks of Aetherflow and Bahamut are available to be used, whereas the Primal summons are unavailable. The type of Demi is also indicated and changes upon summon.

In this image, the Elemental Attunement is shown with its available amount of uses. 

![](/img/jobs/smn/2.png)

&nbsp;

Same principles apply to simplified gauge, just with a slightly different visual. 

![](/img/jobs/smn/3.png)

&nbsp;

In addition to the gauges, the readiness of Ruin IV can be seen on the buffs bar (middle), The amount of available Aetherflow stacks can also be seen on the buffs bar (left). Each Primal summon also provides special actions used via Astral Flow, and their readiness can also be seen with a buff (right). 

![](/img/jobs/smn/4.png)

&nbsp;

# Basic Rotation

The overall rotation involves a relatively static loop consisting of several short phases. As mentioned in the introduction, the general flow is as follows:

* Use Searing Light in alignment with party raid buffs
* Summon Bahamut and use all abilities to refresh your primal gems
* Go through three primal phases
* Summon Phoenix and use all abilities to refresh your primal gems
* Go through three primal phases
* Repeat

![](/img/jobs/smn/5.png)

# Opener and Bahamut Phase

There are two main openers we choose from based on the situation.

## General Purpose Opener:

![](/img/jobs/smn/6.png)

&nbsp;

[Full Size](https://cdn.discordapp.com/attachments/909930068359409684/924578178708668477/smn_ew_opener.png)

This is the general go-to opener for Summoner and uses Titan as the first primal. The initial Searing Light weave will clip your GCD slightly, but this is an acceptable clip. You can also shift Searing Light to one GCD later if you need to avoid this clip for any reason.

You also have the option of cutting the second Ruin III and doing Bahamut immediately. Be warned that this runs the risk of ghosting Searing Light, particularly on higher ping, and may cause a forced delay for Bahamut and Searing Light alignment later in an encounter, depending on your spell speed. However, it can be better to do this adaptation in the opener in some circumstances. Note that if you are changing any timings, an optimal Searing Light GCD sequence will change from what is displayed here. Adjust accordingly to whatever timings you choose to pursue.

## Fast Garuda Opener

![](/img/jobs/smn/7.png)

&nbsp;

[Full Size](https://cdn.discordapp.com/attachments/583967277825785869/958533088453992538/fastgaruda.png)

This opener uses Garuda as the first primal, prioritizing Swiftcast to fit Slipstream into your party's raid buffs. This is a gain when your group is heavy in 15s buffs, as a Swiftcasted Slipstream will barely fit and “snapshot” into the end of these buffs.

The adjustments mentioned in the general opener are also valid for this opener, though again be aware that any changes in timings or GCD use will change the exact optimal sequence you may use.

# Abilities in the Opener

**Summon Bahamut** initiates the Bahamut phase, which will also grant elemental gems for subsequent primal phases.

**Searing Light** is Summoner’s partywide damage buff. Searing Light has a recast timer of 120 seconds and buffs all damage done by yourself as well as all party members by 3% for 30 seconds. Searing Light can only be activated while the Carbuncle is summoned, which renders its use unavailable during Demi phases as well as immediately after a primal summon. Searing Light should be used on cooldown to align with all other two minute party buffs, unless a specific buff delay is agreed upon by the entire party. Aligning with other party buffs should be prioritized over aligning with your own burst phases.

Note that the Searing Light buff comes from your pet, and not your character. The pet will also not cast Searing Light if it is moving. As such, we can use a place command macro as follows to ensure the pet is stationary where we want it before casting: 

Placing the pet under the boss: 

`/petaction “place” <t>`

Placing the pet where we are standing: 

`/petaction “place” <me>`

Either macro will cover the majority of situations to ensure Searing Light is cast properly.

**Astral Impulse** is a powerful instant casted GCD that replaces Ruin III while Bahamut is summoned. While not shown in the opener, **Astral Flare** (which replaces Tri-disaster) is simply the AoE equivalent for three or more targets.

**Energy Drain** has a one minute cooldown and will generally be weaved early in the opener to reduce the risk of losing a use due to kill times or boss phasing. In addition to doing a bit of damage (200 potency), this ability gives us two charges of Fester, and one charge of Ruin IV. The AoE equivalent for three or more targets is **Energy Siphon**.

**Fester** is a flexible oGCD ability with two charges per Energy Drain usage. This ability should always be used in raid buffs where possible. The AoE equivalent for three or more targets is **Painflare.**

**Deathflare**, which replaces Astral Flow on our hotbar during Bahamut phase, **and** Enkindle Bahamut (Akh Morn) are both very highly damaging oGCD abilities. They can only be cast when Bahamut is summoned. In general, they should be used under raid buffs. For subsequent uses, it will depend on your party’s buff alignment or whether you are running critical hit or spell speed-based gear sets.

# Primal Phases

After every demi-summon phase is complete (including Bahamut phase in the opener), you will have elemental gems available corresponding to each primal pet. This allows you to summon **Ifrit, Titan** or **Garuda.** Note that the summon itself is an AOE spell that does 700 potency, with 60% drop-off on additional targets.

Our suggested openers prioritize Titan or Garuda first for damage. But for subsequent windows, you can swap the order around depending on encounter design requirements. What happens for every primal phase is:

**Gemshine** will change into a single target “Rite” spell.

**Precious Brilliance** will change into an AoE “Catastrophe” spell.

**Astral Flow** will change into a unique ability for each primal.

During each primal summon, your priority is to utilize all of their abilities without casting Ruin III or Tri-disaster. This means consuming all the attunement stacks (i.e. using our modified Gemshine and/or Precious Brilliance), and using our unique primal ability (the modified Astral Flow). 

# Titan, Garuda and Ifrit Phases

While each primal phase follows a similar logic, there are some important differences between them.

**Titan phase** does the most damage and has no hardcasts. This means we try to use this under raid buffs, but it can also be useful if used for movement-heavy mechanics. 

Its main spells, **Topaz Rite** and **Topaz Catastrophe**, are both instant casts. We cast four of these spells during the phase.

Titan’s Astral Flow equivalent, **Mountain Buster**, is an oGCD proc that is made available after each cast of Topaz Rite or Topaz Catastrophe. You should weave each proc immediately when you gain one, otherwise you will lose a use/”overwrite” it on the next cast of Topaz Rite or Topaz Catastrophe.

**Ifrit phase** damage is lower than Titan but higher than Garuda. Notably, Ifrit has the most movement restrictions. It is generally best to use this during parts of an encounter where it is safe to be in melee range and there are no movement-heavy mechanics.

Its main spells, **Ruby Rite** and **Ruby Catastrophe**, are both hard casts. The cast time is slightly longer than the recast time (e.g. assuming no spell speed, the cast will be 2.8 seconds with a 2.5 recast time). We cast two of these spells during the phase.

Ifrit’s Astral Flow equivalent is a 1-2 melee combo. The first ability, **Crimson Cyclone**, also functions as a gapcloser. The second ability, **Crimson Strike**, needs to be used in melee range. Note that this combo can be broken, so do not cast any other GCD spell between both hits.

**Garuda phase** does the least damage, and has only one hardcast (Slipstream).

Its main spells, **Emerald Rite** and **Emerald Catastrophe**, are both instant casts with a recast timer of 1.5 seconds. We cast four of these spells during the phase. Due to the short recast timer, we can only weave one oGCD after them.

Garuda’s Astral Flow equivalent, **Slipstream**, is a hardcasted spell with a cast time of three seconds, and a recast time of 3.5 seconds. It also creates an AoE damage over time windstorm around the target that lasts for 15 seconds, dealing damage to any enemies who enter (30 potency per dot tick).

While not as restrictive as Ifrit, you should still keep potential movement restrictions in mind for Garuda phase.

After going through three primals, you should be about five seconds away from being able to initiate the next demi-summon phase. This is where our Ruin spells come in:

**Ruin III** usage should be minimized as much as possible. As such, outside of the opener, we aim to only cast one of them between each demi-summon. Tri-disaster is the AoE equivalent.

**Ruin IV** is given as a proc from Energy Drain and lasts for one minute. This does more potency than Ruin III and is also an instant cast. When compared to Ruin III, Ruin IV is a gain in both single target and AoE scenarios. We also aim to only cast one of them between each demi-summon. Do not cast Ruin IV when a demi-summon is active.

Essentially, we aim to cast one Ruin III and one Ruin IV between each demi-summon phase. The key thing to note here is that we can use our one cast of Ruin III and Ruin IV **any time between demi-summon phases** (except during the 1-2 melee combo during Ifrit phase). We do not have to do it after all three primal phases are complete.

For example, during Garuda phase, you may find yourself about to cast Slipstream, but a mechanic is coming up that requires you to move away. You can use your one charge of Ruin IV to do this, then hardcast Slipstream for your next GCD.

# Phoenix Phase

After cycling through the primals and the two additional Ruin casts, **Summon Phoenix** should become available. This functions similarly to Bahamut with comparable damage potencies, with some minor differences.

Phoenix will automatically cast **Everlasting Flight**, a passive AoE regen with healing potencies on par with various healer abilities. 

Moreover, instead of Deathflare (a damage oGCD), we gain **Rekindle** instead as the Astral Flow equivalent. Rekindle is a single target healing ability. More information on these abilities will be covered in the utility and support section.

Phoenix’s other abilities are otherwise comparable to Bahamut. Summon Phoenix will also grant us elemental gems for subsequent primal phases.

**Enkindle Phoenix (Revelation)** is a very hard hitting oGCD, much like Enkindle Bahamut (Akh Morn). We also get new instant cast GCDs over Ruin III and Tri-disaster during the phase: **Fountain of Fire** for single target, and **Brand of Purgatory** for AoE.

While Bahamut has an extra damaging oGCD (Deathflare), the potency from Phoenix’s other attacks are slightly stronger than Bahamut’s, resulting in them being very close in terms of total damage potency output. 

Phoenix is usually summoned during odd minutes, so if buffs are available, you should also use Enkindle Phoenix within them (e.g. Trick Attack, Astrologian cards, or modified raid buff windows done for optimization or specific killtimes). Fester from your odd minute Energy Drain can be used during these buffs, but can also be saved for 2-minute buff windows as long as they are used before the next Energy Drain.

# After Phoenix Phase (Primal Phases)

From this point onwards, the loop will repeat. We go through the three primal phases, use two Ruin casts, then Summon Bahamut will become available with Searing Light.

One important disclaimer here is that **Summoner can either run critical hit or spell speed as its prioritized sub stat, and this will affect your demi-summon alignment with Searing Light**. 

With high spell speed builds, subsequent Summon Bahamuts will become available before Searing Light and raid buff windows, causing them to misalign. This is because “Summon Bahamut” and “Summon Phoenix” abilities also scale with spell speed. For spell speed builds, this is expected, because the entire purpose of the spell speed build is to eventually gain more demi-summon phases over the course of a fight. Do not delay your demi-summons by inserting additional Ruin III casts to fill the gaps; at that point you are running a strictly worse critical hit build.

If you are running a critical hit build, Searing Light will become available just before Summon Bahamut. Your demi-summon should naturally align with raid buffs.

## Potion Windows

Outside of the opener, we generally aim for subsequent potion windows to be during our 6-minute demi-summon and party raid buff window. 

For certain encounters, we may opt to use our first potion at two minutes instead, which allows us to buff more Festers, but this is very encounter and kill time dependent because it will delay our second potion. For fights longer than nine minutes, we generally use potions as close to on cooldown as possible to ensure maximum uses, even if it can mean missing demi-summon phases or buff windows.

Outside of the opener, we try to catch four Festers, one demi-summon, and two primal summons within a potion window for maximum potency. The first demi-summon should be Titan, while the second can be Garuda or Ifrit depending on the encounter or killtime. In a vacuum or for general situations, Garuda with 1 Emerald Rite followed by a Swiftcasted Slipstream does slightly higher damage.

**Garuda example:**

![](/img/jobs/smn/8.png)

&nbsp;

**Ifrit example:**

![](/img/jobs/smn/9.png)

&nbsp;

## Phase Transitions and Downtime

There are situations where boss phase transitions can result in eventually having both primal gems and demi-summons available. In this scenario, we follow this decision making flowchart:

*Will I lose a use of a demi-summon by delaying?*

**Yes:** Do not delay demi-summon.
**No:** Use primals and demi-summon.
**Unsure:** Do not delay demi-summon.

There are also middle ground situations where you can “rush” through your primal summons casting only two spells for each. This allows you to benefit from the primal summoning damage (700 potency) while also compensating for the downtime by cutting out weaker spells. In endgame raiding, there are a lot of variables that surround this, making it a more advanced technique that is better done with precise timeline planning. However, it is common to do this in dungeons due to the frequent downtime between mob pulls.

# Critical Hit vs Spell Speed Summoner Builds

As mentioned, Summoner can either run low Spell Speed (2.48 or 2.46 GCD) or high Spell Speed (2.20 or 2.25 GCD). The low Spell Speed/high Critical Hit build tends to be better for most situations, as the spell speed build’s effectiveness is more subject to encounter timelines. However, you can choose to run the spell speed build blindly and perform adequately regardless.

Note that a 2.48 GCD (474 Spell Speed or higher) is the slowest we can use to ensure we get six Astral Impulse/Fountain of Fire casts during demi-summon phases. Do not attempt to run 2.49 or 2.50 GCD, as that will result in a significant DPS loss.

When choosing between builds, one key consideration is whether you intend to play other caster jobs. Red Mage is more compatible with little to no spell speed, while Black Mage is more compatible with high spell speed values. This makes Summoner arguably the best choice for being a “second caster” due to this gearing flexibility.

# Utility and Party Support

FFXIV raid encounters are designed in such a way that DPS are sometimes required to assist the party with defensive utility from role skills or unique individual abilities. This is one area where Summoner truly excels, with an often-underrated arsenal of defensive abilities that can save the party during progression or help healers with optimization.

## Recovery

Summoner has three abilities that can be used to effectively help with recovery. They can appear inflexible and limited at first, but it is important to understand that there are two approaches to using utility.

During progression, DPS doesn’t matter until you see enrage and are going for the clear. The priority is to stay alive and practice more mechanics. Not being concerned with DPS increases the flexibility as to when Summoner’s recovery tools are used.

In kill attempts or optimization, Summoner’s recovery tools become less flexible. They are still powerful, and in coordinated parties, can be very useful for both survival and optimization.

## Resurrection

This spell allows you to revive a fallen party member to a weakened state much like healers can. Resurrection is actually inherited from Arcanist, making it the same as Scholar’s Resurrection both in function and flavor. Due to the eight-second casting time, it is generally paired with the Swiftcast role action to minimize DPS loss -– ideally outside of demi-summon phases. If raiding with people you know, proactive communication here is important to ensure you don’t Swiftcast Resurrection on the same target as a healer.

### Reviving Party Members in Progression

Summoners should always be ready to help revive party members in progression. While casters are classified as DPS, it is important to remember that healer MP pools are more valuable, particularly when the goal is to see/practice more mechanics and damage doesn’t matter yet.

Even if MP wasn’t an issue, there are scenarios where it may be inconvenient for the healer to revive party members even if they had Swiftcast ready, such as during mechanics with a heavy healing requirement. Swiftcast is also not “necessary” in Summoner’s base DPS rotation, meaning it can be held for reviving party members even outside of progression, like in reclears or boss kill attempts.

While it may not feel good to do so, do not be afraid to hardcast Resurrection if needed to save a run –- especially during progression when DPS doesn’t yet matter. Seeing more mechanics so you can practice them is often more important than doing damage.

### Reviving Party Members in Farm or Kill Attempts

During kill attempts or farm, there are many situations where it would still be better for Summoner to revive party members. But a more case-by-case approach where you can read the situation and communicate with your healers or Red Mage co-caster is best.

There are many situational considerations, such as healer MP and Swiftcast availability, upcoming mechanics, whether we’re in a demi-summon phase, severity of DPS check, a Red Mage’s melee combo timings (if raiding with one), and more.

If in a static, always coordinate with your healers or Red Mage co-caster. You should be ready to share the load and cover for each other as needed. In a Party Finder environment, default to Swiftcast raising if it can help save the run or the healers are handling heal checks, but consider allowing your healers to Swiftcast raise if they are able to and there is no immediate urgency.

## Everlasting Flight

During our Phoenix demi-summon phase, Phoenix will automatically cast Everlasting Flight, which is a party-wide regen. Everlasting Flight’s regen has a cure potency of 100 per regen tick over 21 seconds. This is comparable to many healer abilities, such as Scholar’s Whispering Dawn (80 potency per regen tick over 21 seconds) or White Mage’s Asylum (100 potency per regen tick over 24 seconds, plus a boost on healing actions within a more limited area).

Pet scaling is slightly weaker than player character scaling, but the point is that Everlasting Flight’s strength as a “free” heal is on par with healer abilities, making it valuable in both progression and optimization.

In progression, Everlasting Flight can be a strong form of insurance. In optimization, it can reduce the healer’s workload to the point of being able to cut a heal from their rotation. This can sometimes mean resources saved for other harder-hitting phases or more healer damage on the boss – both of which are positive for the party.

## Rekindle

When in the Phoenix demi-summon phase, Astral Flow changes into Rekindle, a single target oGCD healing ability. Casting this on yourself or a party member applies an on-hit 400 potency heal in addition to a regen effect (200 cure potency per regen tick across 15 seconds). The regen effect is triggered by the target’s HP dropping below 75%. If the target’s HP doesn’t drop below 75%, it will be triggered automatically when the Rekindle buff expires (30 seconds after application).

Much like Everlasting Flight, this ability also has comparable potencies to single target healer abilities. It can be particularly useful for healing tanks through auto attacks. It can also be used situationally to heal another DPS or healer if, for example, they missed a heal or have a vulnerability up stack before or after a raidwide. Rekindle should always be used because it benefits the party for free at no DPS cost to ourselves.

For those who have trouble quickly targeting party members mid rotation, you can use a Rekindle macro:

`/ac “Astral Flow” <>` 

Between <> you can put “TT” for the target holding boss aggro at the time of cast, but you can also put a number between 1 to 8 for a specific party member if you wish.

### Note on Phoenix Utility: Progression vs Optimization

The key thing to note about Phoenix utility is that, when doing our normal rotation, both Everlasting Flight and Rekindle are completely free, with one being a passive effect. If you are consistent with your rotation, skilled healers will be able to note when Everlasting Flight is available, and take it into consideration when mapping out a healing or party mitigation plan.

It should be noted that in progression situations where damage doesn’t matter (i.e. practicing mechanics and not yet ready to clear), Summon Phoenix can be held purely as a form of “healing insurance” to get through certain phases as a temporary solution. This is more of an advanced technique for players who are looking to optimize their progression speed and practice rate.

### What About Physick? Isn’t That a Healing Spell?

Physick – another spell we inherit from Arcanist – scales off Mind and not Intelligence, making the heal extremely weak given how our equipment works. This is even before we consider the DPS “loss” (by way of opportunity cost) from casting it as a GCD. While Physick has value as an Arcanist in Sastasha keeping beginner tanks alive when the healer is dead, there is no standard use for it in endgame raiding.

# Mitigation

Summoner has two abilities that can be classified as forms of mitigation.

## Addle (Role Action)

A targeted debuff on an enemy that lowers physical damage dealt by 5% and magic damage dealt by 10% for ten seconds. Addle cannot be used on untargetable sources. The primary purpose of Addle is to mitigate hard-hitting magical attacks, but there may be instances that the physical damage reduction can be useful too; for example, mitigating physical boss autoattacks on top of a magical raidwide.

With Summoner’s rotation having so many instant casts, we will have plenty of opportunities to use Addle to help the party survive incoming damage at no cost to our own rotation. Ideally, your healer will tell you where it will be most useful. If you are playing with more passive healers or on party finder, you should try to proactively use it multiple times across a fight.

## Radiant Aegis

Creates a barrier around self that absorbs damage totaling 20% of your maximum HP. This ability has two charges with a cooldown of 60 seconds, but can only be used when Carbuncle is summoned. This means it cannot be used at all during demi-summon phases, and cannot be used for a few seconds after each primal summon. There may be times your shield is not immediately available for a reactionary “panic” use. 

However, the shield lasts for up to 30 seconds. This means that when used more proactively, it is fairly easy to have a shield up on yourself for any hard hitting mechanic or raidwide you want. This ability, being a free oGCD, also has no DPS cost for us.

A 20% shield of our maximum HP can often be the difference between life or death, especially in situations where mistakes are likely or healing is not yet optimized. While a personal shield sounds more like a “selfish” skill than party utility, it is important to remember that one of Summoner’s most important roles in raiding is to help revive fallen party members, thus preventing wipes. And as a caster capable of reviving fallen allies, our survival is more important than other DPS in the party. 

Viewed from that perspective, Radiant Aegis is not only a selfish survival tool, but one that gives Summoner additional value for the party in progression.

# Other Abilities

The following are additional abilities that Summoner has access to.

## Swiftcast (Role Action)

Ensures the next spell can be cast immediately. Swiftcast on Summoner has three main functions in order of usage priority: 

1. Used on Resurrection to instantly revive a teammate. This should be the primary usage in progression as well as anytime when extra damage is not necessary.
2. The second most important use is to keep GCD uptime during movement when it would otherwise be impossible or very risky to slidecast. This is generally preventable with better fight planning due to how many instant casts Summoner has, but it is a valid way to use Swiftcast if needed.
3. Lastly, when used on certain spells, Swiftcast can situationally result in a small DPS gain. The primary use for this is snapshotting Garuda’s Slipstream under buffs, such as during certain potion windows or in the fast Garuda opener. The other one is Ruby Rite (or Castrophe for AOE), which has a \~2.8s cast time, but a \~2.5 recast time at base spell speed. This means that using Swiftcast on Ruby spells repeatedly can theoretically lead to a gained GCD or so by the end of an encounter, but this is highly situational and can cause other issues with demi-summon alignment with Searing Light. As such, it is not recommended for general practice.

## Sleep (Role Action)

A new role action in Endwalker, formerly belonging to Thaumaturges (and thus Black Mages) only. Raid bosses are generally immune to all status effects, and using Sleep on dungeon mobs tends to be impractical because sleeping mobs will wake up upon taking damage. However, Sleep can have situational value in certain types of solo content, such as deep dungeons or Eureka.

## Surecast (Role Action)

Nullifies most knockback and draw-in abilities from enemies. This tends to be used for surviving specific mechanics in endgame content, and also prevents our casts from being interrupted. Some mechanics explicitly ignore Surecast, but there is no good way of knowing this ahead of time.

## Lucid Dreaming (Role Action)

Gradually recover MP, totaling 3850 MP restored over its full duration (550 MP per three seconds over 21 seconds total). Summoner’s rotation is not particularly stressful on MP, especially if Resurrection isn’t used repeatedly, but its full uptime rotation is still MP negative and you will run out of MP eventually. If running a Critical Hit/low Spell Speed build, the general recommendation is to press it when you have around 70% MP remaining. If running high Spell Speed builds, you should try to press it on cooldown.

## Primal Effects in Battle

For some, the visual presence of summons can be distracting due to their size. You can modify the sizes of summons you see in battle with the following commands: 

`/petsize \[summon] \[size]`

Replace \[summon] with:

* Demi-Bahamut
* Demi-Phoenix
* Ruby Ifrit
* Topaz Titan
* Emerald Garuda
* all

Replace \[size] with:

* large
* medium
* small

For example, a complete command would look like:

/petsize "Ruby Ifrit" "small"

All of the command arguments can be done with auto-translate.