---
title: Scholar Basic Guide
card_header_image: /img/jobs/sch/basic.png
authors:
  - tealjaker
  - potato
patch: "6.08"
lastmod: 2022-04-10T21:33:14.000Z
changelog:
  - date: 2021-10-26T21:53:11.912Z
    message: Article Created.
---
This guide is intended for players who are looking to play Scholar in level 90 trials and raids. For information about playing Scholar while leveling, please see our Leveling Guide.

# Quick Glossary

* SCH: Scholar
* CD (Cooldown): The time it takes before you’re able to cast an action again.
* GCD (Global Cooldown): Spells that share the same base recast time. On SCH, these are mostly spells with about 2.5s recast time, plus Resurrection. 
* Instant (Instant Cast): GCD Spells that do not have a cast bar.
* oGCD (Off Global Cooldown): Abilities that don’t share the 2.5s base recast time and therefore can be used while GCD spells are on cooldown.
* Weaving: Using oGCDs in between GCDs. To avoid delaying your GCD, you can safely weave 2 oGCDs after an instant cast GCD, or 1 oGCD after your casted damaging GCD.
* HoT (Heal over Time): Actions that heal the target over a period of time. These actions heal for their listed potency once every 3 seconds.
* Regen: Another word for HoT
* DoT (Damage over Time): Actions that damage the target over a period of time. These actions deal damage for their listed potency once every 3 seconds.
* AoE (Area of Effect): Actions that affect every target in a specified area. AoE heals heal all allies in a circle around their source. AoE damage abilities affect all enemies in an area specified by the ability; enemies can perform AoE attacks too.
* AF (Aetherflow): The level 45 SCH ability. The resource stacks it grants and the abilities that cost Aetherflow are often called “AF stacks” and “AF abilities”.
* HP (Health Points): Your life. Don’t let this hit 0.
* MP (Mana Points): The resource that allows you to cast spells. Also don’t let this hit 0.

# Job Gauges

## Aetherflow Gauge

![](/img/jobs/sch/afgauge.png "Aetherflow Gauge")

The Aetherflow Gauge displays your current Aetherflow stacks, with a maximum of three AF stacks held at once. This gauge will first be displayed upon unlocking Aetherflow at level 45. Using Aetherflow or Dissipation will fully fill your Aetherflow Gauge, so avoid using these when you still have stacks remaining. These stacks can be used either on AF healing abilities or Energy Drain. The abilities which consume Aetherflow will be noted in the sections below, and usage of Aetherflow stacks will be expanded upon later in the guide.

## Faerie Gauge

![](/img/jobs/sch/faeriegauge.png "Faerie Gauge")

![](/img/jobs/sch/seraphgauge.png "Seraph Faerie Gauge")

The Faerie Gauge displays your current amount of fae aether. It will first be displayed upon unlocking the Aetherpact ability at level 70, and fae aether is solely used to fuel this ability. Aetherpact initiates the fairy ability Fey Union, which consumes 10 fae aether per tick, and fae aether is accumulated whenever an AF ability is executed while the fairy is on the field (whether by consuming an AF stack or through the usage of Recitation). Upon unlocking Summon Seraph at level 80, the Faerie Gauge will also display the amount of time Seraph will remain on the field while she is active.

# Damage Actions

## GCDs

![Broil4](https://xivapi.com/i/002000/002875_hr1.png)  

### **Broil IV**

* Single target damage (295 potency), 1.5s cast time
* Can weave one oGCD after it without clipping
* Cast this when you don’t need to do anything else.

![ArtOfWar2](https://xivapi.com/i/002000/002876_hr1.png)  

### **Art Of War II**

* AoE damage in a circle centered around you (180 potency), instant cast
* Can weave two oGCDs after this (or any other instant cast)
* At 2-3 targets, apply your DoT to all enemies before using this. At 4+ targets, skip your DoT application. Do not use on single target.

![Ruin2](https://xivapi.com/i/000000/000502_hr1.png)  

### **Ruin II**

* Single target damage (220 potency), instant cast
* Use only if unable to cast Broil IV due to movement – if possible, slidecast or use Swiftcast + Broil IV instead.

![Biolysis](https://xivapi.com/i/002000/002820_hr1.png)  

### **Biolysis**

* Single target DoT (70 potency, 30s duration), instant cast
* Total potency: 700
* Keep this on all enemies for 1-3 targets and avoid refreshing it early if possible. Do not apply to enemies that are about to die.
* If optimizing:

  * Potency is approximately equal to Broil IV after 12s and beats it at 15s.
  * Clipping Biolysis early for movement may be a DPS gain but should not be considered before other solutions (e.g. slidecasting, better positioning, Swiftcast)

## oGCDs

![EnergyDrain](https://xivapi.com/i/000000/000514_hr1.png)  

### **Energy Drain**

* Single target damage
* Costs 1 Aetherflow stack and increases Faerie Gauge by 10.
* Use this to spend excess Aetherflow stacks on dealing damage. 
* If you need to heal and cannot use a non-Aetherflow oGCD heal, use Aetherflow stacks on healing instead of Energy Drain.

# Healing/Mitigation Actions

## GCDs

![Physick](https://xivapi.com/i/000000/000518_hr1.png)

### **Physick**

* Single target heal (450 potency), 1.5s cast time
* Do not use unless out of MP and oGCDs are unavailable, or in niche scenarios where you need a single target GCD heal and Adloquium would apply healing too late.

![Adloquium](https://xivapi.com/i/002000/002801_hr1.png) 

### **Adloquium**

* Single target heal (300 potency) + shield (180% of heal strength), 2s cast time.
* Applies a shield buff called Galvanize. If critical heal, also applies a second shield buff (Catalyze) of the same strength.

  * Galvanize shields can be spread using Deployment Tactics. Catalyze shields cannot.
  * Galvanize is always overwritten by Sage’s Eukrasian Diagnosis. Galvanize and Eukrasian Prognosis overwrite each other (a newer shield always overwrites an older one). Catalyze neither overwrites nor is overwritten by any other shield.
* Total potency:

  * Non-crit: 300 (heal) + 540 (Galvanize) = 840
  * Crit: \[300 (heal) + 540 (Galvanize) + 540 (Catalyze)] * 1.55 (est. crit multiplier) ≈ 2139
* Weaving an oGCD after this will clip slightly; avoid if possible.
* Use prepull and during downtime with Deployment Tactics to shield the party. This combo can also be used during uptime in place of Succor for a slight healing potency gain, but be sure the shield won’t be damaged before you Deploy.

  * Deployment Tactics can be used immediately after casting Adloquium; however this is not recommended during combat because you will clip your GCD.
* Use if necessary to survive tankbusters or when large party shields are needed, such as for life-threatening raidwides or when cheesing mechanics. Other use is discouraged while other resources are available.

![Succor](https://xivapi.com/i/002000/002802_hr1.png) 

### **Succor**

* AoE heal (200 potency) + shield (160% of heal strength), 2s cast time.
* Applies the same Galvanize buff as Adloquium (and does not stack with it). Does not apply Catalyze. See Adloquium for interactions with Sage’s GCD shields.
* Total potency: 200 (heal) + 320 (shield) = 520
* Weaving an oGCD after this will clip slightly; avoid if possible.
* Use for downtime shielding if Adloquium + Deployment Tactics cannot be used.
* Use if shielding is necessary and oGCD shields like Seraph’s Consolation are unavailable. Other use is discouraged while other resources are available.

## oGCDs

### Free (non-Fairy)

![Recitation](https://xivapi.com/i/002000/002822_hr1.png) 

### **Recitation**

* Removes the cost (MP or Aetherflow stack) of your next Adloquium, Succor, Indomitability, or Excogitation and guarantees it will do critical healing.
* Use on Indomitability for AoE healing whenever possible. Otherwise, consider using it on Excogitation for tank healing.
* In some circumstances, such as early progression or recovery from mistakes, using Recitation on Adloquium + Deployment Tactics can help guarantee your party’s survival by providing a large shield. 
* Do not use prepull to guarantee a critical Adloquium unless Recitation won’t be needed within the first ~75s of the fight. To avoid using Recitation, if a critical Adloquium is necessary, fish for the crit instead.

![DeploymentTactics](https://xivapi.com/i/002000/002808_hr1.png) 

### **Deployment Tactics**

* Copies your Galvanize shield on your target onto everyone near them.
* The copied shield has the same strength and duration as your target’s shield
* Does not work on non-Galvanize shields (including Catalyze) or shields cast by other players.
* Use Adloquium + Deployment Tactics on the tank prepull or during downtime to give the party a bigger shield than Succor’s shield.
* Consider using this over Succor during uptime as it provides slightly more healing potency. Do not do this if the party shields may not be broken, or the shield may be damaged before you can Deploy.
* Situationally: use Adloquium + Deployment Tactics during uptime to cheese mechanics or survive heavy raidwides when other mitigation is unavailable.

![Protraction](https://xivapi.com/i/002000/002877_hr1.png) 

### **Protraction**

* Single target max HP increase (10%) + healing received buff (10%).
* Heals the target for the amount of max HP increased.
* Increases the target’s healing received from all healing actions (both GCD and oGCD).
* Use this to buff prepull Adloquium and Excogitation casts, or during pulls for additional healing. 
* Regens, including Aetherpact, snapshot the healing buff if initiated while the buff is active.

![Expedient](https://xivapi.com/i/002000/002878_hr1.png) 

### **Expedient**

* 20s AoE mitigation (10%) and 10s AoE move speed buff (equivalent to Sprint)
* Move speed buff persists during combat (unlike Peloton)
* Use for long-duration mitigation and/or use the increased move speed for mechanics

![EmergencyTactics](https://xivapi.com/i/002000/002809_hr1.png) 

### **Emergency Tactics**

* Converts the shield from your next Adloquium or Succor into raw healing.
* Use during downtime to top up the party if MP is not a concern.
* Do not use during uptime unless all of the following are true:

  * There is a heal-to-full mechanic (e.g. Living Dead, Heartless Archangel) or life-threatening incoming damage that you (or your Sage cohealer) have already shielded for.
  * You have no other oGCD tools available.
  * Your cohealer has no other oGCD tools available.
  * It is better for you to cast a GCD heal than it is for your cohealer.

### Free (Fairy)

**Note:**

* All effective fairy potencies are scaled down from their listed values by a factor of about 0.89 due to pet scaling. 
* Fairy abilities cannot be used while Dissipation is active.
* Fairy heals originate from the fairy’s location; use the Place pet action to position the fairy at an appropriate location (usually the middle of the arena)

![Embrace](https://xivapi.com/i/002000/002826_hr1.png)

### **Embrace**

* Eos/Selene’s passive single target heal (180 potency).
* The pet heals once every 3s
* See other guides for more information on pet healing priority.

![AetherpactFeyUnion](https://xivapi.com/i/002000/002816_hr1.png) 

### **Aetherpact**

* Orders your fairy to execute Fey Union: Single target regen (300 potency/tick).
* Costs 10 Faerie Gauge per tick.
* Use to focus healing onto a single target, such as the tank. The heal is stronger than Embrace.
* Note: 

  * The fairy won’t cast Embrace, move, or do anything else when Aetherpact is active.
  * Aetherpact can be canceled by either using the skill a second time or by using any other fairy ability.
  * If the target moves out of range, the Faerie Gauge will not drain, but the fairy won’t heal anybody.

![FeyBlessing](https://xivapi.com/i/002000/002854_hr1.png) 

### **Fey Blessing**

* AoE heal (320 potency).
* Use for AoE healing. If AoE healing isn’t needed, use for additional tank healing.

![WhisperingDawn](https://xivapi.com/i/002000/002852_hr1.png) 

### **Whispering Dawn/Angel's Whisper**

* AoE regen (80 potency, 21s duration).
* Total potency: 560.
* Has the same effect for both Eos/Selene and Seraph despite different buff icons.
* Use for AoE healing. If AoE healing isn’t needed, use for additional tank healing.

![FeyIllumination](https://xivapi.com/i/002000/002853_hr1.png) 

### **Fey Illumination/Seraphic Illumination**

* AoE magic damage mitigation (5%) and healing spell buff (10%).
* Increases outgoing GCD healing done by allies with the buff. Does not affect oGCDs or pets.
* Has the same effect for both Eos/Selene and Seraph despite different buff icons.
* Use to buff prepull or downtime shields, if needed.
* Use during the pull to mitigate or to buff GCD heals if using them.

![SeraphicVeil](https://xivapi.com/i/002000/002847_hr1.png) 

### **Seraphic Veil**

* Seraph’s passive single target heal (180 potency) and shield (100% heal strength)
* Total potency: 180 (heal) + 180 (shield) = 360
* The shield does not stack with Consolation but stacks with other shields.
* The pet heals once every 3s.
* See other guides for more information on pet healing priority.

![SummonSeraph](https://xivapi.com/i/002000/002850_hr1.png)![Consolation](https://xivapi.com/i/002000/002851_hr1.png) 

### **Summon Seraph/Consolation**

* Replaces your fairy with Seraph for 22s. The following abilities are changed:

  * Embrace => Seraphic Veil.

    * If the shields are consumed, this doubles your fairy’s effective passive healing
  * Summon Seraph => Consolation: AoE heal (250 potency) + shield (100% heal value).

    * Total potency: 250 (heal) + 250 (shield).
    * 2 Consolation charges are available each time Seraph is summoned.
    * Whispering Dawn and Fey Illumination => Angel’s Whisper and Seraphic Illumination.
    * This is a cosmetic change only.
  * Fey Blessing, Aetherpact, and Dissipation are unavailable.
* Cannot be used if no fairy is summoned or if Dissipation is active.
* Use Summon Seraph and Consolation when AoE healing or shielding is needed, especially if there are multiple raidwides within a short interval. Otherwise, use Seraph (and Consolation) to boost tank healing.

### Aetherflow

All Aetherflow heals cost 1 Aetherflow stack and increase Faerie Gauge by 10.

![Lustrate](https://xivapi.com/i/002000/002805_hr1.png) 

### **Lustrate**

* Single target heal (600 potency).
* Use only if Excogitation and Sacred Soil cannot be used.
* During downtime, if Aetherflow will come off cooldown, use Lustrate to spend any remaining stacks and avoid delaying Aetherflow. If possible, prevent this situation by spending stacks outside of downtime.

![SacredSoil](https://xivapi.com/i/002000/002804_hr1.png) 

### **Sacred Soil**

* Creates a bubble with 10% mitigation and a regen (100 potency, 15s).
* Total potency: 100 (initial potency) + 500 (regen ticks) = 600.
* Do not use if synced below Level 78 unless the mitigation is necessary for survival (ultimates and minimum ilvl content).
* Use instead of Lustrate or Indomitability if the party will remain inside the bubble and there is enough time for the regen to heal – Sacred Soil provides as much healing as Lustrate and also provides mitigation.

![Indomitability](https://xivapi.com/i/002000/002806_hr1.png) 

### **Indomitability**

* AoE heal (400 potency)
* Use with Recitation for burst AoE healing.
* Otherwise, use for AoE healing only if Sacred Soil’s regeneration and mitigation cannot be used.

![Excogitation](https://xivapi.com/i/002000/002813_hr1.png) 

### **Excogitation**

* Delayed single target heal (800 potency)
* The target is healed when their HP drops below 50% or when Excogitation’s buff timer expires. The target can still die if killed in one hit from above 50% HP.
* Use if needed for preemptive tank healing, especially when Holmgang or Living Dead are used.
* Use in emergencies on a target below 50% HP for an instant burst heal.

# Other Actions

## GCDs

![SummonEos](https://xivapi.com/i/002000/002823_hr1.png)![SummonSelene](https://xivapi.com/i/002000/002824_hr1.png) 

### **Summon Eos/Summon Selene**

* Summons your fairy. Please don’t forget it.
* Both fairies behave the same – the difference is cosmetic only.
* The fairy must be resummoned if you die.

![Resurrection](https://xivapi.com/i/000000/000511_hr1.png) 

### **Resurrection**

* Revives a dead player (8s cast time).
* Use with Swiftcast if available.

![Repose](https://xivapi.com/i/000000/000891_hr1.png) 

### **Repose**

* Puts an enemy to sleep.
* Do not use: Most enemies are immune and sleeping enemies wake up when damaged.

![Esuna](https://xivapi.com/i/000000/000884_hr1.png) 

### **Esuna**

* Removes cleansable debuffs (debuffs with a white bar above them).
* Use to remove lethal debuffs (e.g. Doom, Throttle).
* Most other debuffs can be ignored.

## oGCDs

![Aetherflow](https://xivapi.com/i/000000/000510_hr1.png) 

### **Aetherflow**

* Grants 3 Aetherflow stacks and recovers 2000 MP.
* Use on cooldown. Spend Aetherflow stacks before using it – do not overcap.

![Dissipation](https://xivapi.com/i/002000/002810_hr1.png) 

### **Dissipation**

* Removes the fairy for 30s and grants 3 stacks of Aetherflow and a 20% GCD heal buff.
* Can only be used if Eos/Selene is active. Cannot be used if Seraph is summoned or if no fairy is summoned.
* While under the effect of Dissipation, the fairy does not cast Embrace, your Faerie Gauge does not increase, and you cannot use any fairy abilities.
* Use as a damage cooldown or save it for emergencies:

  * Damage: Use as often as possible and spend the Aetherflow stacks on Energy Drain. Avoid using if it forces you or your cohealer to GCD heal.
  * Emergency healing: Use the healing buff to increase your GCD shields, and use the Aetherflow stacks for healing.

![ChainStratagem](https://xivapi.com/i/002000/002815_hr1.png) 

### **Chain Stratagem**

* Raid buff: Increases the crit rate of attacks against the target by 10% for 15s.
* Stacks additively with your base critical chance and with other crit rate buffs (e.g. Battle Litany).
* Use during the opener, then use on cooldown. Only delay its usage if your group is coordinating raid buffs for optimization.

![LucidDreaming](https://xivapi.com/i/000000/000865_hr1.png) 

### **Lucid Dreaming**

* Recovers MP over time (3850 MP over 21s).
* Use when below 8000 MP.

![Swiftcast](https://xivapi.com/i/000000/000866_hr1.png) 

### **Swiftcast**

* Makes your next GCD spell instant cast.
* The buff is not consumed when using instant cast GCDs.
* If desired, save Swiftcast for Resurrection.
* Otherwise, use it in the opener and for movement.

![Surecast](https://xivapi.com/i/000000/000869_hr1.png) 

### **Surecast**

* Prevents most knockback and movement effects and prevents casts from being canceled.
* Use to avoid knockbacks.

![Rescue](https://xivapi.com/i/000000/000890_hr1.png) 

### **Rescue**

* Pulls a target party member to your location
* Does not work if the target has certain debuffs, like Bind, or if the target is using Surecast/Arm’s Length
* Use this to save a party member from failing mechanics
* You can rescue someone who used LB3 to move them into a safe spot; however it doesn't allow them to move or act sooner.

# Standard Opener and Rotation



![](/img/jobs/sch/websitenoswiftopener.png "SCH No Swift Opener")

\-3s HQ Tincture of Mind

\-1.5s Broil IV

Pull

Biolysis

*Aetherflow or Dissipation*

Broil IV

Broil IV

*Chain Stratagem*

Broil IV

*Energy Drain*

Broil IV

*Energy Drain*

Broil IV

*Energy Drain*

Broil IV

*Dissipation or Aetherflow*

Broil IV

*Energy Drain*

Broil IV

*Energy Drain*

Broil IV

*Energy Drain*

## Holding Aetherflow Stacks

It’s important to remember that, while the standard opener uses 6 Energy Drains, that’s not always feasible or advisable in actual play. During prog, you’ll usually start out holding all of your AF stacks. You’ll learn how many stacks you’re able to use on Energy Drain in your opener and, later on, in burst windows throughout the fight. Ideally you’ll be able to use both Aetherflow and Dissipation in your opener after a few pulls, but in some more healing intensive fights you may end up holding Dissipation for later mechanics. See the later section on Healing Efficiently for further information. 

## Dissipation First Openers

While the traditional opener uses Aetherflow first, using Dissipation first instead has several advantages if you’re not holding Dissipation for a later mechanic. This includes extra MP due to using Aetherflow later so it doesn’t overcap, the fairy returning to the field from Dissipation earlier, and aligning your Aetherflow refreshes for future buff windows. This last point will be expanded upon in the next section. Some phase and kill time optimizations do require usage of an Aetherflow First opener, but these are very niche and will be discussed in the Advanced Guide. In general, it’s advisable to do Dissipation First openers if feasible. 

## Chain Stratagem and Buff Windows

As a Scholar you have Chain Stratagem (henceforth Chain), a 2 minute raid buff that increases the crit rate of all attacks against a single target. Proper usage of Chain by the Scholar and utilization by the party is a major portion of Scholar’s raid dps contribution. Chain optimizations will be expanded upon in the advanced guide, but in general it’s important to get the maximum usages of Chain in each fight and to keep it aligned with other 2 minute raid buffs. In many fights, this is achieved by simply using Chain properly in the opener and then hitting it as soon as it comes off of CD throughout the fight. However parties will sometimes delay buff windows in certain fights due to downtime or certain mechanics. It’s important to coordinate these delays with your party so that everyone is able to keep raid buffs and bursts aligned. 

Scholar also has the ability to hold their own resources for 2 minute buff windows in order to improve their own personal dps contribution. This is done by holding the stacks from your odd minute Aetherflows for usage in even minute raid buff windows. For example you can hold the stacks from the Aetherflow usage at 1:15 for the raid buffs 2 minutes into the fight. Doing this requires that Aetherflow itself is delayed somewhat so that it happens midway through raid buffs rather than before them, but doing a Dissipation First opener aligns Aetherflow properly for this right away. It’s still important to note that you don’t need to use all of your AF stacks on Energy Drain, but aligning your 2 minute windows like this will still be advantageous as it allows all of the Energy Drains you do use to fall in buffs. 

# Movement Options

The most important thing you can do to contribute as a healer is maintain your casting uptime. Always Be Casting is the mantra for every job in this game, and as a caster our biggest hurdle to this is often forced movement. As a Scholar you have several methods to deal with forced movements. Remember that each of these methods can be paired with Sprint or Expedient to increase the amount of movement each grants you. 

## Slidecasting and Prepositioning

As a Scholar, our main dps spell is Broil. Broil has a 1.5s cast time meaning you have a \~1s window after each Broil where you aren’t casting and can move freely. On top of this though, you can also freely move during the last \~0.5s of each Broil cast without canceling the cast. This ~0.5s is referred to as the slidecast window. Your slidecast window is dependent on ping, so it won’t be exactly the same for every person, but it’s important that you learn when your slidecast window is to allow yourself the greatest possible amount of movement freedom. One thing that can be helpful for learning your slidecast window is adding an emote to your hotbar. When the emote lights up during your cast, you’re in the slidecast window and free to move. 

While you’ll have to move for many mechanics in most fights, most movements don’t need to be accomplished in a very short period of time. Using slidecasting, as well as some of the other methods that will be mentioned below, you can preposition for these mechanics rather than losing dps by responding reactively to them. Remember that fight mechanics happen in a set order, and while there is randomness involved in some of them, you should alway be prepared for where you’re going to have to be, or what movements you might have to make.

## Natural Biolysis Refreshes

Every 30s you will use Biolysis to refresh the duration of your DoT on the boss. Biolysis is an instant cast GCD meaning that you can freely move during it with no restrictions. It’s important to use these free movement windows as well as you can, to preposition for mechanics or for free movement during mechanics when your Bio refresh naturally lines up with it.

## Swiftcast

Swiftcast makes the next casted spell an instant cast spell instead. Paired with Broil, it allows you to freely move for an entire GCD. This is a vital tool for high movement mechanics that can’t be dealt with or are difficult to deal with using slidecasting or natural bio refreshes. However, Swiftcast is sometimes better saved for a possible usage of Resurrection, especially during prog. Ensure that you weigh the benefits of Swiftcast against the costs of not having it for a future rez.

## Ruin II

Ruin II is a somewhat unique spell among healers. It’s an instant cast spell with no restrictions on its usage, but it deals ~25% less damage than Broil IV. This is your last resort to deal with forced movement, but it’s still a very important tool for maintaining your uptime before you have a fight optimized. During prog, Ruin II makes maintaining uptime easiest for Scholar amongst the healers, but it’s important not to still try to limit its usage when you can. Maintaining cast uptime is always the most important part of your dps contribution, but replacing Ruin IIs with Broil IVs is just after it in importance.

# Healing Efficiently

Scholar has the most stratified healing priority of the healers, though there is still some flexibility to it. Your general healing priority should be Free Healing > Aetherflow Healing > GCD Healing. You can think of each of these categories in terms of how much damage potency they cost you. Free Healing = -0p  > AF Healing = -100p (Energy Drain) > GCD Healing = -295p (Broil IV). There will be instances however where an action in a lower priority category will deal with a mechanic better than higher priority actions. This can happen when you want to save a specific CD or resources for a later mechanic, or because providing mitigation such as a Sacred Soil or a Deployed Adloquium will allow your party to survive a mechanic or make a mechanic significantly easier to deal with. It’s important to coordinate all of your healing and mitigation tools with your party and cohealer, so that both you and your cohealer can heal efficiently. 

# Gearing and Stats

You can find current endgame Savage and Ultimate sets in the Gearing section of the Scholar landing page. Before endgame, it will generally be best to always use the highest ilvl gear you can obtain. Scholar’s stat and melding priority is as follows: Weapon Damage > Mind > Crit > DH >= Det