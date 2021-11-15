---
title: Black Mage Basic Guide
authors:
  - Balance-BLM-Staff
patch: "5.58"
lastmod: 2021-10-26T01:47:17.671Z
changelog:
  - date: 2021-10-26T01:47:44.292Z
    message: Added page
---
My IGN is Caro Kann, and I’m a BLM main (now SCH (AND NOW AST)) and this is my guide for playing 5.X BLM. In this guide, I go over the basics of the BLM rotation and offer some potential optimizations.

## General Info

- - -

### Abilities

If you’re in game, look at your Actions & Traits page. Read your tooltips. Read your traits, they alter tooltips sometimes. If you’re not in game, look at SE’s [Job Guide](http://na.finalfantasyxiv.com/jobguide/blackmage/) page or the Balance [Skills Overview](https://guides.xivresources.com/jobs/casters/black-mage/skills-overview/) page.

### Abbreviations

* **F1, F2, F3, F4**: Fire Spells
* **F3P**: Firestarter (F3 Proc)
* **B1, B3, B4**: Blizzard Spells
* **T3, T4**: Thunder Spells
* **T3P, T4P, TC**: T3 Proc, T4 Proc, Thundercloud
* **AF, UI**: Astral Fire and Umbral Ice buffs. The number refers to how many stacks.
* **LL**: Ley Lines
* **GCD, oGCD**: Global Cooldown (Spells), off-Global Cooldown (Abilities)
* **SpS**: Spell Speed
* **AM / BtL**: Aetherial Manipulation and Between the Lines
* **MF**: Manafont
* **DoT**: Damage over Time
* **DPS / PPS**: Damage Per Second and Potency Per Second
* **Instant**: An instant-cast Spell

### AF and UI

[Astral Fire](https://ffxiv.consolegameswiki.com/wiki/Astral_Fire) and [Umbral Ice](https://ffxiv.consolegameswiki.com/wiki/Umbral_Ice) do a lot of things. Skim over and make sure you’re not working with misconceptions, particularly about damage buff values. ([Imgur Mirror](http://imgur.com/a/2OYR3))

### Weaving and Clipping

[See this Infographic](https://cdn.discordapp.com/attachments/583967082132275200/622194213987156038/GCD_BLM_ed.png). Whenever possible, weave oGCDs rather than clipping with them. For BLM, this means using at most one oGCD after the fast-cast F3 / B3 when swapping between AF3 / UI3. Each clip costs you roughly ~140 potency.

## Openers

Openers should put abilities on cooldown, fit strong spells within buff windows, and minimize clipping. All openers assume there is a pull countdown and the boss is pulled at 0. If your group pulls earlier, adjust them as necessary. Use the highest tier Tincture / Infusion / Potion of Intelligence available.

With all openers being very close in estimated output over the course of the entire encounter, it is instead recommended to choose your opener based on your current spellspeed, with consideration towards potential fight-specific requirements.

<div align="center">

![](https://cdn.discordapp.com/attachments/592613187245834260/812071330458370078/unknown.png)

</div>

### JP Opener

<iframe width="1000" height=560"" src="https://www.youtube.com/embed/u6HBt-b7yrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![](/img/jp.png)

**Precast**: Sharp at -12s and F3 at -4s.

This is a reliable opener for especially high spellspeed sets, because it does not rely on having a polyglot stack available in time for Xeno for filler at the end that other openers utilize. However, in order to ensure that the Thundercloud proc will last long enough to use instead, 3600+ SpS is required. Below this threshold, the Thundercloud proc can fall off losing you a chunk of damage.

### Modified JP Opener

{{< youtube uLLVuOGWlXY >}}

![](/img/modjp.png)

**Precast**: Sharp at -12s, LL at -4s, and F3 at -3s.

This is an extension of the JP Opener which utilizes pre-pull LL use to lower the spellspeed requirement while still taking advantage of not having Xeno available in time for UI filler that you need for other openers. While technically possible around the 1929 SpS tier this variant is mostly recommended as an option for the 2500-3600 SpS range.

### No B4 Opener

{{< youtube WnUV4DNW35M >}}

![](/img/nob41.png)

**Precast**: Sharp anywhere between -12s and -5s, and B3 at -4s.

This opener is viable at low to moderate spellspeed values, and is usually the most recommended opener to use in the 558-2500 SpS range. Below around 1421 SpS you will need to weave in Swift under Triple in order to get to the Despair in time, as shown here:

{{< youtube 6hQWWvF3S5M >}}

![](/img/nob42.png)

Above 2500 SpS, you begin to run into the issue where Xeno will not be available at the end of the opener as pictured, even when not using Swiftcast.  At this point, it is still viable to use the No B4 opener by using F3 immediately after the B4 instead of waiting on Xeno. Depending on MP tick timing, sometimes you will only get one MP tick here, and sometimes you will get two ticks, resulting in a variable second AF cycle. Extending out the openers to include these two possibilities:

One tick:

![](/img/nob41tick.png)

This abbreviated F4x4 -> Despair AF cycle is a bit more immobile/tight on AF timing and might not work out well in a given fight.

Two ticks:

![](/img/nob42tick.png)

With two MP ticks you have enough MP to do a standard AF cycle.

### Double Sharp Opener

{{< youtube ZECevqeprik >}}

![](/img/doublesharp.png)

**Precast**: Sharp at -12s, and B3 at -4s.

Good general purpose opener to fall back on, if other openers are not as viable, for whatever reason. The opener is long enough that there is no issue with Xeno being available in UI in time.

### Variations

The openers above aren’t absolute. Alter them to fit fight requirements. Add Swift after an instant to cover an extra F4 / Despair or hold for fight mechanics. 

Do not precast Swift or Triple. This puts you behind a GCD, due to waiting for the Recast before your next Spell. If there’s no pull countdown or you’re unable to precast, then precast Swift is fine.

## Single Target Rotation

- - -

### Base Rotation

![](/img/st.png)

Base rotation before procs. This can be split into two parts: the Ice Phase and the Fire Phase. Thunder and Xeno placement are less clearly defined. **The empty GCDs represent filler: B4, T3, and/or Xeno.**

### Thunder

Thunder should be kept up as much as possible, unless the target will die or phase. T3 can be freely cast in either Ice or Fire Phase. Refrain from refreshing T3 unless the DoT will run out.

If you end UI with a T3 and don’t get a mana tick before F3 finishes casting, avoid casting a second non-proc T3 in AF. Doing so will lose you a F4 or Despair cast.

Use a Thundercloud proc if one of two conditions are met:

1. The DoT will run out on the boss.
2. The proc will run out.

Avoid losing procs. If you have no other movement options, procs can be used early for movement.

### Ice Phase

Use the Ice Phase to gain Umbral Hearts and recover MP. Use B3 to enter UI, and cast one to two filler Spells to allow MP to regenerate. Filler is typically B4 followed by either Xeno or T3. If you get a fast MP tick, you may also cast only one filler Spell.

#### Examples

**Standard**

![](/img/ui_standard.png)

Use this for all usual Ice Phases. T3 can be cast before B4 if you get a fast MP tick. Xeno can replace T3 if the DoT is still ticking.

**No Xeno or T3 filler**

![](/img/no_xeno_or_t3.png)

If the T3 DoT is still active when finishing the B4 cast and you don’t have Xeno for UI, wait up to ~1 second for the MP tick. See the [Appendix](#appendix) for an alternative option.  

**Phase Transition**

![](/img/phase_transition.png)

Use this if the enemy would die or phase before a full Fire Phase.

### Fire Phase

The Fire Phase consists of 6 F4s, a F1, and Despair. You can generally fit 4 non-Despair GCDs on either side of F1.

Try to always cast 6 F4 while also not letting any procs expire. If movement / mechanics / mistakes cause you to be at risk of dropping AF3 and Enochian, downgrade a F4 to F1 and figure out how to avoid the situation next time. If you are in the latter half of the Fire Phase, consider casting Despair.

Use Firestarter procs for movement, to extend AF3, or to weave a Swift / Triple to be used on F4 / Despairs. Use F3P at the end of a Fire Phase rather than saving it to enter AF. If you know for absolute certainty that the F3P will replace a stronger spell, click it off instead of using it in UI.

#### Examples

**No Procs**

![](/img/no_procs.png)

Standard Fire Phase if no procs.

**Thunder Reapplication / Proc Usage**

![](/img/thunder_reapplication.png)

Thunder reapplication is not strict. You can move the cast / proc between any two GCDs in the Fire Phase.

### Xenoglossy

Use Xeno as a filler Spell for UI, to weave oGCDs, or for raid buffs (but not at the cost of uptime). Do not overwrite Xenos; when at two Polyglot stacks, use Xeno before one is overwritten.

### Sharpcast

Try to use Sharpcast on cooldown without clipping. Sharpcast has the most value when paired with a T3 / T3P, but is still a gain to use on F1. Holding Sharp specifically for T3 is a loss when compared to using it on whichever Spell is next (F1 / T3).

### Manafont

Use Manafont to extend Fire Phases, ideally weaved during an instant after Despair. MF gives enough MP to cast a F4, T3, and Despair. If you have no instant to weave MF in, hold it for the next rotation. Only clip to use MF if you will otherwise lose a use.

#### Examples

**Ideal MF Usage**

![](/img/ideal_mf.png)

Using Xeno to gain maximum value out of Triplecast and Manafont.

**MF Without Triple / Swift**

![](/img/mf_without_triple.png)

Xeno in this figure is any instant.

### Surecast and Manaward

When paired with Manaward, Surecast can often allow you to “eat” mechanics to keep casting. This is considered bad practice if it costs a healer a GCD; these things can usually be mitigated by improved planning and/or slidecasting.

### Addle

This translates to a 10% mitigation tool for magical damage. Use on magical raidwides / tank busters as necessary. Weave this if possible, but oftentimes it is an unavoidable hard clip.

### Transpose and Lucid Dreaming

Use Transpose as a last resort to maintain Enochian if AF / UI would be dropped. See the [5.X Hypermeme Rotation Guide](https://docs.google.com/document/d/1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw) for some advanced optimizations using these. Also see the [Balance Advanced Black Mage Guide](https://guides.xivresources.com/jobs/casters/black-mage/advanced-non-standard-blm-guide/) for optimization.

### Scathe

Don’t use this ability. It is usually preferable to move and cast nothing than cast a Scathe for movement. There are two scenarios in which it is acceptable to use Scathe:

1. You can’t finish one GCD before the boss dies or phases, and you have no instants available.
2. You can’t finish movement in one GCD’s worth of time, and you have no instants available.

A hard-clipped Swiftcasted Spell is preferable to Scathe.

### Freeze

Only use single-target Freeze for recovery purposes. If at full MP, skip Freeze and instead cast F3.

## Recovery and Reopeners

- - -

### Recovery

If you die or drop Enochian, follow this list of priorities:

1. Swiftcast Freeze to regain UI3.    
2. Recast Enochian.
3. Reapply T3 (if the DoT isn’t running).
4. F3 into a shorter Fire Phase, and continue as normal.
5. Figure out how to avoid this situation in the future.

#### Example

**Recovering with Freeze**

![](/img/recovering_with_freeze.png)

The Umbral Heart from Freeze allows a 5x F4 + Despair Fire Phase. Note that this is only for recovery. It is not a DPS gain, nor is it a sustainable rotation.

### Reopeners

During downtime, use Umbral Soul to maintain UI3 with 3 hearts. From there, you can T3 and continue the rotation as normal. Use Xeno before downtime as necessary to avoid overwriting a Polyglot stack.

## AoE Rotation (3+ Targets)

- - -

### General Info

The AoE rotation is free-flowing and should be adapted to the encounter. The same concepts of the Ice and Fire Phases apply to the AoE rotation. 

The Ice Phase includes one filler Spell, usually Foul or T4. Unlike single-target, use procs freely rather than waiting out the proc / DoT timer. Use Sharp on T4, or on T3 single-target in preparation for adds. If possible, hold Foul or T4P until after Freeze to keep casting while waiting for MP.

Use Swift on Flare. Use Triple on Flares with the “Hot Flare” variation, even at high enemy counts.
The rotation should be adapted to the scenario and will vary on the mob count and HP. The Cold Flare and Hot Flare variations have similar dps.

### Hot Flare

![](/img/hot_flare.png)

Use at 3-4 enemies, or if the mobs will die just after both Flares. **The empty GCD represents a filler: T4, T4P, or Foul.**

### Cold Flare

![](/img/cold_flare.png)

Use at 5+ mobs, or if the mobs will die before the second Flare of the “Hot Flare” variation. **The empty GCD represents a filler: T4, T4P, or Foul.**

#### Example

**Quad Flare (in AF3, at least 1 Umbral Heart)**

![](/img/quad_flare.png)

## Movement and Uptime

- - -

BLM has no damaging oGCDs and a very simple rotation. To maximize DPS, always be casting (ABC) and minimize uptime loss due to handling movement and mechanics.

### Slidecasting

You can start moving when a cast is close to finishing and still have the cast complete. The timing is ~0.5s before the cast ends, but varies based on latency and hardware. Practice slidecasting on a dummy to determine your personal threshold.

Slidecast to move short distances or dodge AoEs when you don’t have a proc or instant available. You still lose some time between casts, but it is better than not casting at all.

### Positioning

Many mechanics can be handled by preemptively being where you need to be. If you wait until a mechanic starts before moving into position, you’ll feel rushed and end up burning a lot of movement options. Instead, slidecast or leverage instants to move into position at your leisure.

In general, try to stay near your party. Being in AoE heal range helps your healers. More importantly, it keeps you in range of AoE party buffs (Battle Litany, Battle Voice, Divination, etc).

### Triplecast

Triple has the most value paired with some combination of F4 and Despairs. If you clip to use Triple, most of the benefit is negated. It will often naturally line up with mechanics. Use on cooldown until you identify fight-specific sections where holding Triple is better. 

### Swiftcast

Swift is a marginal DPS gain and ends up as a DPS loss if it causes clipping. It’s often better to hold for mechanics / movement / panic purposes. 

### Ley Lines

Ley Lines should be used on cooldown where possible. If you can’t gain full LL value, it’s still worth using if holding would cost you a LL use over the course of the fight.

You’ll often be able to handle mechanics (stack / spread markers, AoEs) while never leaving LL by taking advantage of its radius. You can also leave LL for mechanics and then BtL back in, ideally during an instant.

For reference, clipping LL is approximately equal to losing 5s of its buff. See Appendix for optimization options.

### Aetherial Manipulation and Between the Lines

AM and BtL are useful tools for long distance movement in a short window. Slidecast or pre-position instead where possible. The animation lock is highly dependent on ping and software, try not to use this after a fast F3 / B3. This should *not* be the primary form of movement.

## Spell Speed Thresholds

- - -

With the increase of AF and UI timers to 15 seconds, the standard rotation is doable at nearly all Spell Speeds. Play at whatever Spell Speed you find comfortable.

## Leveling Rotations

- - -

The following is a list of the Rotations a BLM should use if they are at the listed level, be it while synced or because they are leveling.

### Single-Target

Sub-40: 
{F1 spam} Transpose T1 {B1 until max MP} Transpose

40-59: 
B3 T3 {optional B1 for MP tick} F3 {F1 spam until low MP} repeat
Use F3p and T3p as you get them, but don't cancel casts to use procs

60-71: 
B3 B4 T3 F3 F4x3 F1 F4x3 repeat
Foul whenever

72+: 
B3 B4 T3 F3 F4x3 F1 F4x3 Despair repeat
Same as 60-71 with Despair at the end
Same as 80 just without Xeno. See guide for better details

### AOE

18-34: 
{F2 spam} Transpose {B2 until max MP} Transpose repeat
Keep up T2 dot

35-49: 
Spam Freeze. Keep up T2 dot

50-59: 
Freeze T2 F3 F2 F2 Flare Transpose repeat

60-67: 
Freeze T2 F3 {F4 2-3 times} Flare Transpose repeat
Save 800 MP for Flare. Use 50-59 AOE Rotation at 5+ enemies

68-71: 
Freeze T4 F3 Flare Flare Transpose repeat

72+: 
Freeze T4 F3 Flare Flare repeat
Same as 80. See the AOE section for a better explanation.

For all aoe, use Thundercloud procs on T2/T4 as you get them. Swift/Triple Flares. Manafont for an extra Flare. Foul after Transpose or Freeze

## Macros

- - -

BLM doesn’t really use any macros anymore except for macroing Aetherial Manipulation. The macro for this can look like the following:

```
/merror off
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/ac "Aetherial Manipulation" <mo>
/micon "Aetherial Manipulation"
```

`<mo>` stands for mouseover and you will jump to the person your mouse points to, on either their character or the party list. The repeating lines simulate some form of queueing since macros in this game don’t queue.

You can replace `<mo>` with eg `<2>` to always jump to the 2nd person in your party list, but in general this is not recommended, unless you are absolutely sure the person is always where you want them to be, when you want them to be. The `<mo>` is way more flexible, but you need to target it. 

## About Gear

- - -

Optimizing substats gives the least return on DPS when compared to being proficient at your job, having high uptime, handling mechanics efficiently, etc.

BLM has no bad substats. Infinite resources and lack of damaging oGCDs makes Spell Speed a strong stat. More SpS can make the job feel smoother to play and make Fire Phases less strict. Aim for higher iLvl gear and get SpS to personal preference and comfort level. After that, worry about your performance rather than gear.

If you need mathematical backing, [this sheet](https://docs.google.com/spreadsheets/d/1p_bF2q8xADYoCs0IrgKc7bIoGJYFF7YYhR6WJENc248/edit#gid=654212594) lists different BiS sets and can be used to determine BiS for new gear, or what the correct upgrade path is when choosing gear purchase / upgrade priority. 

The biggest takeaway is that as long as your gear is max iLvl and fully melded, the difference between best and worst sets for BLM is less than 1%.

## Appendix

- - -

### No Xeno or T3 Filler

![](/img/no_xone_or_t3.png)

A possible line if you enter UI with no Xeno **and** over \~12s on your DoT. This is not a prescription to overwrite thunder under 12s in UI. This \~12s rule only applies to this particular line. If interested in this playstyle, see my [5.X Hypermeme Rotation Guide](https://drive.google.com/open?id=1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw). Avoid hardcasting T3 in AF if choosing this line. May lead to a DPS loss if you do not have Xeno or T3P for the next UI.

If you have a T3P that will fall off before the next UI, use the proc and leverage Triple or Swift to complete the rotation. If Triple and Swift are unavailable in this scenario, it would have been better to do the aforementioned [No Xeno or T3 filler](#examples).

This can be used after the [No B4 Opener](#no-b4-opener) to save Xeno for later movement or raid buffs.

### Ley Lines Optimization

![](/img/ll_opti.png)

Under Ley Lines, you may opt to skip B4 and F1 in your rotation. This requires ~1450 SpS to execute reliably, less with instants. This requires 2 mana ticks in UI3, adjust your Ice Phase accordingly.

### About

This guide is currently maintained by the Mentors of the Balance Discord.

Big thank you to Caro Kann of Exodus of Primal of Earth, CaroKann#1234 on Discord; for the hard work he put into making this.

Special thanks to Laqi Thish for making the original 4.X BLM guide and providing resources to improve on BLM play. Without him, I would not be the player I am today. Also, I shamelessly stole his doc as a baseline for this one. Further thanks to Fürst Blumier for helping with the mathematical calculations and being an all-around bro.

Shoutout to every BLM on the Balance Discord.