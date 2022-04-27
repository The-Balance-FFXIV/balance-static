---
title: White Mage Basic Guide
card_header_image: /img/jobs/whm/basic.png
authors:
  - meru
patch: "6.10"
lastmod: 2022-04-18T18:47:43.857Z
changelog:
  - date: 2021-10-29T03:52:37.749Z
    message: Created page
  - date: 2022-03-19T04:17:34.002Z
    message: Updated for Endwalker.
  - date: 2022-04-18T18:47:46.059Z
    message: Updated for patch 6.1
---
# Introduction

This guide aims to provide a basic overview of White Mage and offer guidelines on how to use each skill in its toolkit effectively in any environment. As healers do not have a strict healing rotation, this guide will focus on highlighting what makes each skill unique and explain some common use cases. 

White Mage is considered by many people to be the most beginner friendly healer, and rightfully so. It offers a very straightforward healing kit that meshes well with the ‘press button to make HP bars go up’ mindset, and a plethora of powerful tools to salvage almost any situation. It brings high personal damage with no convoluted job specific mechanics, making it a comfortable healer to start on and become proficient at in a short time.

# Glossary

* WHM: White Mage
* CD (Cooldown): The time it takes before you’re able to cast an action again.
* GCD (Global Cooldown): Spells that share the same base recast time. On WHM, these are anything categorized as “Spell” on the official job guide. This guide will also categorize skills based on whether they’re GCDs or not.
* Instant (Instant Cast): GCD Spells that do not have a cast bar.
* oGCD (Off Global Cooldown): Abilities that don’t share the 2.5s base recast time and therefore can be used while GCD spells are on cooldown. These abilities are also explicitly categorized in this guide as such.
* Weaving: Using oGCDs in between GCDs. To avoid delaying your GCD, you can safely weave 2 oGCDs after an instant cast GCD, or one oGCD after Glare.
* HoT (Heal over Time)/Regen: Actions that heal the target over a period of time. These actions heal for their listed potency once every three seconds.
* DoT (Damage over Time): Actions that damage the target over a period of time. These actions deal damage for their listed potency once every three seconds.
* AoE (Area of Effect): Actions that affect every target in a specified area. AoE heals heal all allies in a circle around their source. AoE damage abilities affect all enemies in an area specified by the ability; enemies can perform AoE attacks too.

# Job Gauge: Lilies



![alt_text](/img/jobs/whm/lily-gauge.png "image_tooltip")



![alt_text](/img/jobs/whm/lily-gauge2.png "image_tooltip")

WHM’s job gauge displays two resources, blue Healing Lilies and red Blood Lily stacks. Healing Lilies are naturally accumulated over time once you unlock the job gauge at level 52. Every 20 seconds, a Healing Lily is automatically added to your job gauge, capping out at three stacks. Note that Healing Lily only charges while you are in combat, and the gauge is paused outside of combat. This distinction is mostly relevant in dungeon content, as the majority of raids and trials will consider you to be in combat as soon as the boss is pulled until the instance is completed. 

Healing Lilies allow you the use of Afflatus Solace (Lv. 52) and Afflatus Rapture (Lv. 76), healing spells that each consume one Healing Lily upon use. These spells will be expanded upon in the healing section, but they share the following characteristics:

* GCD spells
* Consumes one Healing Lily
* 0 MP cost
* Instant-cast, so you can weave two oGCDs after each Afflatus spell
* Grants you one Blood Lily stack (post-Lvl. 74)

Unlocked at level 74, Blood Lily stacks are generated when you use Afflatus Solace or Afflatus Rapture, up to a maximum of three, which allows you to execute Afflatus Misery, a targeted AoE damaging GCD that costs three Blood Lily stacks. Unlike Healing Lilies, Blood Lily stacks can be charged outside of combat when you use any Afflatus healing spell. However, make sure to not use any Healing Lilies when you have three Blood Lily stacks so you don’t overcap on Blood Lily stacks. Aim to use Afflatus Misery first before starting a new Lily set. 

# Damage Overview

## GCD

### **Glare III (“Glare” for simplicity)**

Your standard damage filler spell that you should aim to cast whenever possible, Glare does 310p per cast and has a 1.5s cast time assuming base recast of 2.5s. This allows you to weave one oGCD per hardcasted Glare without clipping your next GCD. At lower levels, “Stone” variants will be your filler spell.

### **Dia**

An instant cast DoT spell that deals 60p upfront and then ticks for 30s, dealing 60p per tick for a total of 660p if allowed to run its full duration. As this is a gain over your standard Glare filler, this DoT should be maintained on the boss at all times, unless it is about to die in less than 15s. This also applies if the boss is about to disappear, as DoTs don’t tick on untargetable bosses for the vast majority of cases. At lower levels, “Aero” variants will be your DoT spell. 

### **Holy III (“Holy” for simplicity)**

An AoE centered on you that damages enemies within 8y by 150p and applies a stun effect. Enemies who are susceptible to the stun effect do build resistance to it, halving its duration with each application until they become temporarily immune to stun. This spell is very strong in dungeons where the cumulative 7s of stun helps mitigate a significant amount of tank damage in trash pulls. In raid scenarios, Holy is rarely used as it requires hitting three enemies to beat a Glare cast, though it can be used in niche optimization scenarios where you precast a Holy to hit the boss right as they come back from an untargetable phase. 

**Afflatus Misery (Lily spell)**

An instant-cast GCD that deals 1240p damage to the primary target and 620p to enemies around it within 5y. Afflatus Misery requires three Blood Lily stacks to use, which in turn requires the use of three Afflatus healing spells. From a pure potency perspective, Afflatus Misery is neutral in single target scenarios as it costs four GCDs to execute - three Afflatus healing spells and one Afflatus misery - and deals 1240p, same as the 1240p that you would’ve dealt replacing all those Afflatus casts with Glares. However, it can be an overall DPS gain if Afflatus Misery is placed under raid buffs and/or potion. 

Afflatus Misery quickly becomes more of a potency gain when downtime and multi-target scenarios are involved. As using Afflatus healing spells during downtime does not cost you any DPS, you should proactively ‘dump’ any available Healing Lilies without overcapping on your Blood Lily stacks so you have an Afflatus Misery at your disposal for when the boss comes back. In multi-target scenarios, if Afflatus Misery can even hit one additional target, it becomes a gain to proactively use Afflatus healing spells beforehand to prepare an Afflatus Misery.

Always aim to finish any partial Lily sets before a fight ends, since Afflatus healing spells being potency neutral requires the execution of Afflatus Misery. 

## oGCD

**Presence of Mind**

A 15s buff on a two minute cooldown that grants you a haste buff that speeds up all your GCDs by 20%. As this buff is simply a GCD modifier and does not affect your spell speed substat, it has no effect on your DoT damage. The haste buff reduces the length of the weave window between hardcasted Glares, and may cause problems with weaving at certain ping levels. 

**Assize**

Assize recovers 500MP per use, deals 400p of damage and also heals allies within range for 400p. It is a damaging oGCD that happens to do healing, but unlike your actual healing oGCDs, there isn’t much leeway to move Assize around for healing purposes as delays can risk losing an entire Assize usage in a fight, which is a significant potency loss. On top of that, Assize is also integral to WHM’s MP sustain, and should be used on cooldown in pretty much all scenarios. Assize can be delayed for multi-target scenarios even if it means losing a use, as it only needs to hit two targets to break even, and quickly becomes a gain at higher target counts. 

However, you can and should take advantage of Assize’s healing portion by structuring your other healing oGCDs around it. For example, if you know that Assize naturally aligns to heal before an upcoming raidwide, you can delay your Asylum to heal the party at a later point in the fight. Assize’s 45s cooldown means that it’ll align with useful healing opportunities more often than not, but only if you let it do its work.  

# Healing & Mitigation Overview

## GCD

### Single Target Spells

**Cure**

A basic healing spell that heals the designated target for 500p. It is by far the least utilized spell in your kit at higher levels due to its weak potency. Outside of level synced content where you do not have access to better healing spells, you won’t be using this outside of emergency situations where you don’t have Healing Lilies for Afflatus Solace and MP for Cure II, and all your oGCD options are unavailable. It does have a slightly faster cast time compared to Cure II, which _may _save someone in a pinch. Other than these very niche situations, Cure should not be used at all. 

It has a 15% chance of proccing Freecure, which allows your next Cure II to be cast at no MP cost, but the trait plays no part in when we choose to use Cure.  

**Cure II**

A stronger version of Cure that costs more MP and heals the target for 800p. This is your best fallback single target healing option for when someone needs healing immediately, and you’re out of Healing Lilies and oGCDs. It’ll be used a decent amount in dungeons during hard-hitting pulls, as well as in raids during progression and recovery scenarios. 

**Regen**

At 1500 total potency, Regen is your most powerful single target GCD heal if you do not need the full healing immediately. Regen is frequently used during big dungeon pulls and progression scenarios with sustained single target damage. In fights with heavy single target damage that cannot be handled solely with oGCDs, Regen can also double as a movement tool due to being an instant GCD.

Despite being a healing spell, Regen does not proc a Paladin’s Divine Veil as it does not have any upfront healing.

**Afflatus Solace (Lily spell)**

An instant cast, 0 MP spell that heals the target for 800p, putting it equivalent to Cure II in terms of healing power. In raid scenarios, it is not used too often compared to its AoE counterpart, Afflatus Rapture, especially since a lot of single target healing can be covered with oGCDs. If you’re in synced content where Afflatus Misery isn’t available (such as level 70 ultimates), Afflatus Solace becomes even lower than Regen in priority unless the full healing is needed immediately due to its lower total potency, and the fact that Regen is also an instant cast GCD. 

### AoE Spells

**Medica**

A basic AoE healing spell that heals all allies within 15y for 400p. It is outclassed by pretty much all of your other GCD AoE healing options and will therefore be rarely used at level cap content. It is only used when your party needs extra healing right now and a) Medica II is already applied, b) you cannot use Afflatus Rapture and c) Cure III is also not an option either due to party positioning or lack of MP.  

**Medica II**

Heals all allies within 20y for 250p and applies a 15s regen of 150p per tick, totaling 1000p healing over its full duration. It is your most powerful AoE healing option provided that you can afford to wait out all its ticks. With one tick, it already breaks even with Medica in healing, and surpasses Medica with just two ticks. It also offers 5y of additional range compared to most AoE healing spells, making it easier for you to hit party members that may be spread out for mechanics.


**Cure III**

A spell that heals allies within 10y for 600p, Cure III offers the most upfront partywide healing out of all healing tools that aren’t limited by a cooldown. It is one of the reasons that WHM excels at recovery, as Cure III spam alone can brute force a large amount of healing checks. Its main drawbacks are its slightly limited range of 10y compared to standard AOE healing spells, as well as a costly 1500MP per cast, though the MP cost can be mitigated via the use of Thin Air. 

While you’ll be using Cure III as a self-originated spell in most cases, Cure III is fairly unique in that it is actually a targeted AoE healing spell - meaning that you can target any party member within 30y and have the spell heal 10y around them. This can come in handy when you’re forced to be away from the party stack and they need a lot of healing for upcoming damage.

Not to be confused for a Cure II upgrade - you never use Cure III in single target healing scenarios. 

**Afflatus Rapture (Lily spell)**

An instant cast, 0 MP spell that heals allies within 20y for 400p. While it heals the same amount as a Medica, Afflatus Rapture is our top priority for AoE GCD healing due to the damage refund of the Blood Lily system essentially making all Afflatus healing spells potency neutral. As an instant cast spell, it often doubles as a movement option for when slidecasting isn’t quite enough.

Afflatus Rapture, and Lily spells in general, also fulfill a less obvious role in our kit, which is that of MP sustain. Even if the healing isn’t strictly needed, you should aim to proactively use Afflatus spells to take advantage of their 0 MP cost, as WHM MP economy is very bad without the use of any Afflatus spells. That said, you can and should structure your healing plan so that Afflatus healing spells are not pure overheal.

## oGCD

### Single Target Abilities

**Benediction**

Heals the target for 100% of their max HP. As this skill is on a lengthy 180s CD, its usage should definitely be planned out in an encounter. Don’t let this powerful single target oGCD simply sit in your kit for ‘emergency scenarios’. In both dungeon pulls and raid scenarios, this can be used as a planned heal to top off the tank after letting them get extremely low from damage. 

**Tetragrammaton**

A straightforward oGCD that heals the target for 700p. It is on a decently short CD of 60s and should be your top priority when single target healing is needed. It can be used on tanks to heal them during autos, or on other party members that may need spot healing. That said, do not sit on this skill for the sole reason of keeping it available for emergencies.

**Divine Benison**

An oGCD that applies a 500p shield on the target, you get a second charge of this ability at level 88. Due to its short CD of 30s, you can get a lot of usages of this ability throughout a fight. Try to not let this overcap on charges - you’re almost always guaranteed to get value out of this just slapping it on the tank for autos. Be careful when using this for emergency shielding though, as you may sometimes see the target take full damage with the Divine Benison buff and shield active. This is because the shield has a slight delay before being applied to your target, and last-second applications of Divine Benison can often be too late to mitigate damage. 

**Aquaveil**

Applies a 15% mitigation effect to the target for eight seconds, this stacks with any other mitigation such as a tank’s personal CDs. This can aid in mitigating autos and tankbusters, though it should never be *required* for a tank to survive a conventional buster unless they mismanage their CDs. However, Aquaveil can be used as planned mitigation if a tank is taking damage in an unintended way - for example, taking a shared buster solo, or trying to 0 out avoidable damage for uptime purposes. In high damage encounters such as Ultimate fights, Aquaveil can also be a planned substitute tank CD for when the tanks’ personal CDs are spread too thin. Like all of your single target oGCDs, Aquaveil can and should be used on non tank players as well when some single target mitigation is needed.

### AoE Abilities

**Asylum**

Places an 10y radius ground effect at a designated location. Party members within Asylum will be healed for 100p per tick, for 8 ticks over 24s if standing in Asylum for its full duration. However, ground effects such as Asylum have a special effect where they apply an instant tick upon placement to all party members within range, bringing up the total healing to nine ticks of 100p each. 

At level 78, Asylum also applies a 10% healing received buff to allies inside its range. This healing buff works on both GCD and oGCDs, including itself, making Asylum ticks 110p for all intents and purposes. However, this healing buff does not apply to the extra tick upon placement, resulting a total Asylum potency of 8  *100*  1.1 + 100 = 980p. 

The high total potency as well as short CD of 90s makes Asylum your best option for partywide healing in a lot of cases, provided that party members can stand in its range for a prolonged time. Even in scenarios where additional healing is required, the healing received buff Asylum provides in addition to its regen can take a lot of pressure off the healing requirements. In dungeons, use this during trash pulls for an additional regen on the tank instead of saving it exclusively for raidwide damage.

Asylum is a placed skill, for tips on making ground placement less janky, see: 

[Ground Effect Placement](#heading=h.ocwpqov6slrq).

**Plenary Indulgence** 

This ability applies a 10s buff called “Confession” to all party members within 20y. By itself, the buff has no effect. However, when someone with this buff is healed by a Medica, Medica II, Afflatus Rapture or Cure III casted by you, they are healed for an additional 200p. The buff is not consumed when this effect activates, and can be procc’d multiple times over its 10s duration. It is also important to note that Confession’s effect is only activated by the upfront heal of Medica II, and not once per regen tick. Whenever you plan on GCD healing, consider activating Plenary Indulgence beforehand to take advantage of its bonus healing, even if you only proc it once. The short 60s CD means that it’ll likely be off cooldown the next time you want to use it, though you should definitely prioritize using it during heavy heal checks where you plan on using multiple heals in quick succession. 

**Temperance**

This ability has two effects. First, it grants you a 20% outgoing healing buff, which only applies to:

GCD heals. Secondly, it grants any party member within 30y a 10% mitigation buff. Interestingly enough, this mitigation buff is implemented not as a conventional timed buff, but rather an effect that is regularly refreshed as long as they’re within 30y of you. If someone moves too far away from you, they will lose the mitigation buff after a few seconds, though they will regain it if they come in range again later on. This is rarely a detriment as 30y is a huge range and there are very few cases where party members need to be that far from you for an extended period of time. In addition, the mitigation buff of Temperance also applies instantly due to its unique implementation and does not suffer the standard cascading delay that most buffs in this game are plagued with.

Due to the combination of its mitigation and healing buff effects, Temperance is a powerful CD to use in any scenario where the party is taking significant damage that needs to be healed through. However, in optimized scenarios, you may find yourself using Temperance more for its mitigation effect than the healing buff as GCD healing is used very little, if at all. It is on a fairly long cooldown of two minutes, so its usage in a fight should definitely be planned out in advance.

**Liturgy of the Bell**

Places a Liturgic Bell (“Bell” for simplicity) at a designated location and grants you five stacks of a buff called “Liturgy of the Bell”. In the next 15s, every time you (the WHM specifically) take damage, one stack of “Liturgy of the Bell” is consumed and the Bell heals all allies within 20y of its placed location for 400p. The Bell dissipates naturally when all five stacks are consumed or when 15s have passed, whichever comes first. Any remaining “Liturgy of the Bell” stacks will be expended at the end of this 15s to heal allies within 20y for 200p per stack. You can also manually dismiss Bell anytime before its natural expiration to trigger this heal. 

The Bell’s healing effect procs on all forms of damage to the WHM, be it direct damage dealt by an enemy, a DoT effect from a debuff, or even environmental effects such as stepping into poison puddles. It does not proc if the WHM takes 0 damage due to shields or any other factor. 

While Bell’s total healing potency of 2000p may seem very powerful on the surface, it is fairly rare to get its full effect as it requires five separate damage instances on the WHM within 15s. A portion of that healing is ‘refunded’ as the Bell dissipates, but due to its long cooldown of three minutes, you should definitely aim to maximize Bell procs per usage where possible. 

A unique advantage that Bell offers is the ability to place it. The fact that its healing originates from the Bell and not the WHM means that you do not need to worry about your positioning relative to other party members when Bell healing goes off. This is very useful when party members are taking damage but need to spread out to complete a mechanic. The large 20y on Bell’s healing also means that it’ll reach everyone if properly centered, as most circular raid arenas are 20y in radius. 

Bell will share any buffs that the WHM has, regardless of whether they were gained before Bell was placed or after. While this property isn’t too impactful for the most part, it played a significant role in the Fountain of Fire phase of P3S, as Bell can be placed ahead of time and benefit from the significant healing buff the WHM gets during the mechanic. 

Bell is a placed skill, for tips on making ground placement less janky, see 



[Ground Effect Placement.](#heading=h.ocwpqov6slrq)

# Other Actions

### GCD

**Raise**

Your standard resurrection spell. It has a long cast time and should generally be used with Swiftcast and Thin Air to remove both the cast time and MP cost. Unfortunately, this means you’ll often be forced to clip Swiftcast + Thin Air unless you have an instant cast GCD ready to double weave those two oGCDs.

**Repose** (Role Action)

Puts target enemy to sleep. Not very useful outside of being required for the Shadowbringers healer role quest. 

**Esuna** (Role Action)

Removes one random cleansable debuff (as indicated by the white bar above the icon) from the targeted party member. Most debuffs you encounter during the leveling experience are minor annoyances that don’t need to be cleansed, though some DoT debuffs can hit decently hard and should be removed if you’re not confident in healing through them. Cleansable Doom-like debuffs should always be Esuna’d. 



![alt_text](/img/jobs/whm/esuna.png "image_tooltip")

### oGCD

**Thin Air**

A 60s CD on two charges, this ability negates the MP cost of the next spell you cast. It is *not* consumed when you cast a spell with 0MP cost naturally, such as Afflatus spells. Thin Air should be used whenever you need to cast MP costing GCD heals or Raise to negate their heavy MP cost. If neither scenario applies, you *can* use Thin Air on a Glare or Dia to save 400MP, but it is perfectly fine to let it sit at two charges as WHM’s DPS rotation can be sustained entirely without Thin Air. In progression scenarios, saving Thin Air for MP costing GCD heals and raises should be the default approach. 

**Swiftcast** (Role Action)

Makes your next GCD instant. Generally used on Raise, but can also be used for movement in more optimized environments. In dungeons, can be used on the first Holy in a pull to instantly apply the stun effect and line up subsequent stuns better.

**Lucid Dreaming** (Role Action)

Gradually restores MP, a total of 3850MP over its full duration. Lucid Dreaming is critical to WHM’s MP sustain, so get into the habit of using it at around 80% MP and keeping it on cooldown. 

**Surecast** (Role Action)

Prevents most forced movement effects and stops your cast from being interrupted. Use it to maintain casting uptime.

**Rescue** (Role Action)

Pulls a targeted party member towards you. Both you and your target needs to be in combat for this to take effect. This skill is generally not used outside of coordinated environments due to the delay on the movement. You can rescue someone who is animation locked from casting a Limit Break to save them from being hit by mechanics, though this does not let them act or move any sooner. 

# Opener and Rotation

![alt_text](/img/jobs/whm/noswift.png "image_tooltip")

\-3s HQ Tincture of Mind

\-1.5s Glare \
Pull

Dia

Glare

Glare

Presence of Mind

Glare

Assize

Glare

The standard opener that doesn’t use Swiftcast. However, some people might have trouble weaving Assize after a hardcasted Glare under Presence of Mind. An alternative opener that uses Swift can potentially help mitigate this issue.

![alt_text](/img/jobs/whm/swift.png "image_tooltip")

\-3s HQ Tincture of Mind

\-1.5s Glare \
Pull

Dia

Glare

Glare

Swiftcast

Glare

Assize + Presence of Mind

Glare

In this version of the opener, Assize is weaved outside of Presence of Mind, offering a bit more leeway for people on moderate ping as the threshold for a clean double weave is more lenient than a single weave under hardcasted PoM GCDs. The main drawback of this opener is how it leaves you without Swiftcast in the first 60s of the fight, but this should not cause you any significant issues outside of extremely fresh prog. 

In both of the above openers, Assize and Presence of Mind are delayed to align better with raid buffs. Both can be moved earlier if the delay actually causes a loss of use over the fight.

After the opener, WHM’s basic rotation is simply a matter of keeping your DoT up, using Assize and Presence of Mind on CD and then spamming Glares.

# How to Handle Movement

As WHM’s actual rotation is extremely simple, the only challenge to maintaining it will be forced movement sections during actual fights. Here’s an overview of your most common movement choices.

### Slidecasting and Prepositioning

Glare has a base 2.5s recast but a 1.5s cast time, meaning you have over 1s to move with every Glare without clipping your next GCD, accounting for the fact that you can start moving before the 1.5s mark. As you will spend the majority of your time casting Glares, learning how to move in the window between Glares is critical to maintaining casting uptime. A lot of mechanics will require you to move quite far, but very rarely will they require you to cover that distance instantly. Use your Glare slidecast windows to slowly move towards your destination instead of sitting in one place and panic moving at the last second, which can lead to lots of dropped casts. If you’re unsure of when you can safely start slidecasting, you can drag any Emote action on your hotbar and watch for when it lights up - that indicates the timing to begin moving without interrupting your cast. 

Sprint also extends how much distance you can cover with slidecasting quite significantly. Since we have a free weave window with every Glare, you should use sprint proactively to aid with slidecasting if needed.

<https://www.youtube.com/watch?v=JNfYQShpXJY>

*Example of slidecasting without sprint, watch how the emote bar lights up each cast.*

<https://www.youtube.com/watch?v=09Cl4T2kzOY>

*Example of slidecasting with sprint.*

Prepositioning can also help you get the most out of your slidecasts. For example, if a semi-random mechanic requires you to be in one of two locations depending on the telegraph, you can preposition yourself between the two potential safe spots so you have an easy time reaching either of them. 

### Natural Dia Refreshes

Dia is an instant cast GCD which allows you a full GCD of movement, so try to utilize it to cover as much useful ground as possible. If you know a Dia refresh window is coming up, you can afford to greed a few more casts in the danger zone before making a swift escape with Dia. 

### Afflatus Spells

All of your Lily spells are instant cast GCDs, and Lily sets are DPS neutral if fully completed. Since you get one Healing Lily charge every 20s, this means you have four instant casts per minute available including Afflatus Misery, which can cover the majority of movement requirements in any fight. If you know you’ll be using Lilies to move for an upcoming mechanic, try to structure your healing plan so that those Lilies won’t be completely overhealing. 

Ideally, we do want to put Afflatus Misery into raid buffs whenever possible, so if using Misery for movement would prevent you from using it in upcoming buffs, it may be worth considering another lossless movement option in place of Misery. However, do not fixate on putting Misery into buffs if it would otherwise cost you casting uptime.

### Swiftcast Glare

Like natural Dia refreshes, Swiftcast also grants you a full GCD’s worth of movement, though this option is usually reserved for more optimized environments where you do not expect to raise. 

### Regen

While it does not offer any damage refund unlike Lily spells, Regen is not a terrible movement option provided that the healing is genuinely useful. Such opportunities will be somewhat rare in Savage fights, especially in optimized environments, but certain fights such as the infamous Brute Justice & Cruise Chaser phase in The Epic of Alexander (Ultimate) will demand Regen as part of your healing rotation, so you may as well make use of it for movement.

### Early Dia Refresh

For when you’re truly out of options. A single early Dia refresh may not be the end of the world, but over-reliance on Dia spamming for movement will lead to lots of overwritten ticks and lost potency down the drain.

# Recovery from Death

Let’s face it - at some point, you are going to run out of HP, whether by your own mistake or someone else’s. But this does not always mean a party wipe, especially when playing in content with another healer or caster with raise capabilities, and it’s on you to not waste this opportunity. So you get a raise, what next?

## Choose a Raise Timing

The most important part of death recovery is choosing a time where you won’t immediately die after. Many new players fall into the trap of instantly taking a raise, instantly trying to heal themselves and then dying to unavoidable damage. The raise buff stays for a long time, so pick a time to raise when you don’t need to immediately do mechanics or heal yourself. 

On top of having a lot of flexibility in choosing your raise timing, you also get a Transcendent buff that lasts for five seconds after you raise, which makes you invulnerable to most attacks in this game *as long as you don’t take any actions. Moving around, and receiving* healing from other party members are fine, but actions such as using sprint will end your buff early. Take advantage of this buff if you raise into incoming damage. However, there are several attacks that will pierce this invulnerability, which further emphasizes the importance of picking a good timing to raise. Knockbacks tend to also go through this invulnerability, even if they do not do damage to you. A lot of debuffs, such as Vulnerability Up or Damage Down will also apply through res invulnerability.

## Stabilize Yourself

As the healer, you are often one of the most important party members that needs to remain alive. Even if the rest of your party dies, you can salvage a near wipe with a well timed healer LB3. Assuming that you’ve chosen a raise timing where you won’t be in immediate danger, you should still ensure that you have enough HP to survive the next onset of unavoidable damage. Oftentimes, any AoE healing that the party needs will cover your own healing requirements, so you may not need to do anything specifically for yourself. If not, your co-healer (in content where this is applicable) can assist you, or you can simply toss a Regen on yourself.

Your MP is also an important resource to take care of after death. If Lucid Dreaming is not available, you can use a Super Ether HQ to recover some MP. You lose all accumulated Healing Lilies upon death, significantly limiting your healing options, so make sure you have enough MP for any upcoming heal checks. While we want to avoid not casting anything whenever possible, it may be necessary during post death recovery when limited on MP tools. 

# Ground Effect Placement

Many players find it tricky to use ground effects without clipping as it involves two steps - aiming the cursor correctly and then confirming placement. This section offers some options that may help if manual ground placement is causing issues.

## Targeted Macros

While Macros are generally not recommended due to their lack of queueing, ground effects are often an exception as the delay incurred by manual placement can often outweigh the detriments of a macro. A simple targeted macro for Asylum can look like this:

/merror off

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/ac "Asylum" <t>

/micon "Asylum"

This will place Asylum centered around what your current target is. If you want to drop Asylum at your feet, you can replace &lt;t> with &lt;me>. While static target macros can get you very far, it is good practice to keep non macro’d versions of ground effects accessible for the cases where unconventional placement is required.

## gtoff Macros

These macros will drop the ground effect wherever your cursor is. However, given that gtoff is limited to being a macro, this means that its usage is still subject to the standard macro disadvantages in terms of queueing. A gtoff macro for Asylum will look like this:

/merror off

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/ac "Asylum" gtoff

/micon "Asylum"

## Double Tap Placement

![alt_text](/img/jobs/whm/double-press.png "image_tooltip")

This option requires setting up your Character Configuration as shown, but will allow you to confirm ground effect placement using the same keybind for the skill itself, which means that using that keybind twice in succession will drop the ground effect on wherever your cursor is. Unlike the macro options, double tap placement does queue like a normal oGCD and can feel smoother to execute for some.



**What if I’m just a casual roulette player?** 

Unless you’re specifically aiming to drop every shred of piety from your gear set, WHM’s MP issues will not affect you in any significant manner. 

**In conclusion, WHM’s MP is perfectly fine for progression and casual play,** provided you’re not going out of your way to get rid of piety completely with your gear choices**. In optimization, it becomes more restrictive than other healers in terms of gear choice due to its lack of lossless MP sustain tools.** 

# Gearing and Stats

During the leveling process, you should simply equip higher iLvl gear as you obtain them through dungeons, tome currencies or quest rewards. As gear will be replaced every few levels, do not bother melding materia or optimizing substats. 

At level cap, you should generally prefer higher iLvl gear as usual, though the multiple options offered at each iLvl make substats a bigger factor when choosing gear.

In general, WHM’s stat priority is:

Magic Damage >>>>> Mind >>> Piety to required levels > Crit > Direct Hit/Determination > Spell Speed

**Magic Damage** (or “Weapon Damage”) is only found on weapons and is your most impactful stat as it factors *significantly* in both healing and damage calculations. **Mind**, your main stat, also affects healing and damage, though to a lesser degree than Magic Damage. Your Mind increases naturally as you upgrade your gear to higher iLvls. 

 
**Piety** affects your natural MP regen in combat which ticks every three seconds. While the substat itself does not provide a direct damage increase, it is critical that we take enough piety to maintain full casting uptime while fulfilling healing requirements. Running out of MP to cast Glares in the middle of a fight is a significant damage loss, and not having enough MP to GCD heal and raise in prog is being an active detriment to your team. “Enough” piety in this case is extremely context- and player skill-dependent, and very much a variable that will change as you get more comfortable with fights. 

**Critical Hit** increases both our chance to score a critical hit when healing or dealing damage, and how much that critical hit heals or damages for; this includes both direct damage/healing as well as DoTs and HoTs. While it does affect our healing, Crit is preferred due to its impact on our damage output as critical heals should not be part of a healing plan due to their unpredictable nature. 

**Determination** is a flat multiplier on all of our healing and damaging skills that increases as you gain more of the substat, though the expected gain is less than Crit. **Direct Hit** increases the chance that our damaging skills (DoT ticks included) do a “Direct Hit”, dealing 25% more damage than normal. Healing is completely unaffected by Direct Hits. Healers do not have Direct Hit naturally on level cap gear, meaning we have 0 chance of scoring Direct Hits without melds or external buffs.

While Direct Hit offers a marginally greater damage increase on healers than Determination, the fact that it does not affect our healing may lead to some players being uncomfortable with taking large amounts of Direct Hit. While the healing boost Determination will not save you any GCDs, it could offer some additional comfort in progression environments, and the damage loss compared to melding Direct Hit is negligible for the most part (less than 1%). That said, Best-in-Slot sets will almost always meld Direct Hit over Determination as they are optimized for damage.

**Spell Speed** reduces our cast and recast time and increases the damage/healing our HoTs/DoTs do per tick. While it can be a powerful substat damage wise as more Glares in the same time frame = more damage, it can be a dangerous substat to meld blindly as the amount of Spell Speed required to hit new GCD tiers - which is where the main gain from Spell Speed comes from - is nontrivial, and you may be wasting a significant amount of substats that could be allocated elsewhere.