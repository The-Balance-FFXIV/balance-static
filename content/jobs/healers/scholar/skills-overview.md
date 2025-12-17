---
title: Skills Overview
authors:
  - tealjaker
  - potato
patch: "7.4"
lastmod: 2025-12-16T10:14:59.286Z
changelog:
  - date: 2021-10-26T21:37:23.610Z
    message: Article Created.
  - date: 2022-03-08T16:38:31.778Z
    message: Updated for Endwalker
  - date: 2023-01-19T16:45:29.795Z
    message: Patch update 6.3
  - date: 2023-05-30T23:50:56.442Z
    message: Patch Update 6.4
  - date: 2024-07-27T20:34:55.660Z
    message: Updated for Dawntrail
  - date: 2025-08-07T04:11:01.488Z
    message: updated for 7.3
  - date: 2025-12-16T10:15:07.116Z
    message: update for 7.4
---
# Notable Dawntrail Changes

* New skills: Baneful Impaction and Seraphism
* Swiftcast cooldown reduced to 40s with a trait.
* Potency increases for Broil IV and Biolysis with a trait.
* Succor upgraded to Concitation with a trait. 
* Recitation cooldown reduced to 60s with a trait.
* Chain Stratagem duration increased to 20s.
* Summon Seraph and Consolation can be assigned to separate hotkeys if desired.

# Damage

## GCDs

![Broil4](https://xivapi.com/i/002000/002875_hr1.png)

### **Broil IV**

* Single target damage (320 potency), 1.5s cast time
* Can weave one oGCD after it without clipping
* Cast this when you don’t need to do anything else.

![ArtOfWar2](https://xivapi.com/i/002000/002876_hr1.png)

### **Art Of War II**

* AoE damage in a circle centered around you (180 potency), instant cast
* Can weave two oGCDs after this (or any other instant cast)
* At 2-4 targets, apply your DoT to all enemies before using this. At 5+ targets skip your DoT. Do not use on single target.

![Ruin2](https://xivapi.com/i/000000/000502_hr1.png)

### **Ruin II**

* Single target damage (220 potency), instant cast
* Use only if unable to cast Broil IV due to movement – if possible, slidecast or use Swiftcast + Broil IV instead.

![Biolysis](https://xivapi.com/i/002000/002820_hr1.png)

### **Biolysis**

* Single target DoT (85 potency, 30s duration), instant cast
* Total potency: 850
* Keep this on all enemies for 1-4 targets and avoid refreshing it early if possible. Do not apply to enemies that are about to die.
* If optimizing:

  * Potency is approximately equal to Broil IV after 12s and beats it at 15s.
  * Clipping Biolysis early for movement may be a DPS gain but should not be considered before other solutions (e.g. slidecasting, better positioning, Swiftcast)

## oGCDs

![EnergyDrain](https://xivapi.com/i/000000/000514_hr1.png)

### **Energy Drain**

* Single target damage (100 potency)
* Costs 1 Aetherflow stack and increases Faerie Gauge by 10.
* Use this to spend excess Aetherflow stacks on dealing damage. 
* If you need to heal and cannot use a non-Aetherflow oGCD heal, use Aetherflow stacks on healing instead of Energy Drain.

![BanefulImpaction](/img/jobs/sch/baneful-impaction-icon.png)

### **Baneful Impaction**

* AoE DoT (140 potency, 15s duration)
* Total potency: 700
* Can only be used while under Impact Imminent, a 30s buff granted by Chain Stratagem. Impact Imminent is consumed when Baneful Impaction is cast.
* Try to ensure that Baneful Impaction is always within raid buffs. 
* It is worth using Chain Stratagem on trash pulls for access to Baneful Impaction. The AoE originates from your target, so try to target a central mob while they're grouped together to ensure all mobs receive the DoT. 

# Healing/Mitigation

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
* Use prepull and during downtime with Deployment Tactics to shield the party. This combo can also be used during uptime in place of Concitation for a slight healing potency gain, but be sure the shield won’t be damaged before you Deploy.

  * Deployment Tactics can be used immediately after casting Adloquium; however this is not recommended during combat because you will clip your GCD.
* Use if necessary to survive tankbusters or when large party shields are needed, such as for life-threatening raidwides or when cheesing mechanics. Other use is discouraged while other resources are available.

![Concitation](/img/jobs/sch/concitation-icon.png)

### **Concitation**

* AoE heal (200 potency) + shield (180% of heal strength), 2s cast time.
* Applies the same Galvanize buff as Adloquium (and does not stack with it). Does not apply Catalyze. See Adloquium for interactions with Sage’s GCD shields.
* Total potency: 200 (heal) + 360 (shield) = 560
* Weaving an oGCD after this will clip slightly; avoid if possible.
* Use for downtime shielding if Adloquium + Deployment Tactics cannot be used.
* Use if shielding is necessary and oGCD shields like Seraph’s Consolation are unavailable. Other use is discouraged while other resources are available.

![Manifestation](/img/jobs/sch/manifestation-icon.png)

### **Manifestation**

* Replaces Adloquium while under the effect of Seraphism
* Single target heal (360 potency) + shield (180% of heal strength), instant cast.
* Just like Adloquium, applies Galvanize normally as well as Catalyze on critical heals. See Adloquium for interactions with Sage’s GCD shields.
* Total potency:

  * Non-crit: 360 (heal) + 648 (Galvanize) = 1008
  * Crit: \[360 (heal) + 648 (Galvanize) + 648 (Catalyze)] * 1.55 (est. crit multiplier) ≈ 2567
* Cannot be used with Recitation, which can make it somewhat awkward to use with Deployment Tactics if you're aiming for a critical shield. 
* As with Adloquium, use if necessary to survive tankbusters or when large party shields are needed via Deployment Tactics, such as for life-threatening raidwides or when cheesing mechanics. Other use is discouraged while other resources are available.

![Accession](/img/jobs/sch/accession-icon.png)

### **Accession**

* Replaces Concitation while under the effect of Seraphism.
* AoE heal (240 potency) + shield (180% of heal strength), instant cast.
* Applies Galvanize just like Concitation. Does not apply Catalyze. See Adloquium for interactions with Sage’s GCD shields.
* Total potency: 240 (heal) + 432 (shield) = 672
* Cannot be used with Recitation.
* Use if shielding is necessary and oGCD shields like Seraph’s Consolation are unavailable. Other use is discouraged while other resources are available.
* Can be useful for brute forcing full hp checks thanks to Seraphism reducing the Emergency Tactics recast timer, but avoid doing this if more efficient methods are available.

## oGCDs

### Free (non-Fairy)

![Recitation](https://xivapi.com/i/002000/002822_hr1.png)

### **Recitation**

* Removes the cost (MP or Aetherflow stack) of your next Adloquium, Succor, Indomitability, or Excogitation and guarantees it will do critical healing.
* Use on Indomitability for AoE healing whenever possible. Otherwise, consider using it on Excogitation for tank healing.
* In some circumstances, such as early progression or recovery from mistakes, using Recitation on Adloquium + Deployment Tactics can help guarantee your party’s survival by providing a large shield. 
* Do not use prepull to guarantee a critical Adloquium unless Recitation won’t be needed within the first ~45s of the fight. To avoid using Recitation, if a critical Adloquium is necessary, fish for the crit instead.

![DeploymentTactics](https://xivapi.com/i/002000/002808_hr1.png)

### **Deployment Tactics**

* Copies your Galvanize shield on your target onto everyone near them.
* The copied shield has the same strength and duration as your target’s shield
* Does not work on non-Galvanize shields (including Catalyze) or shields cast by other players.
* Use Adloquium + Deployment Tactics on the tank prepull or during downtime to give the party a bigger shield than Concitation’s shield.
* Consider using this over Concitation during uptime as it provides slightly more healing potency. Do not do this if the party shields may not be broken, or the shield may be damaged before you can Deploy.
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

![Seraphism](/img/jobs/sch/seraphism-icon.png)

### **Seraphism**

* For 20s, applies a regen (100 potency) to party members and replaces Adloquium and Concitation with Manifestation and Accession respectively.
* The regen applied has a hidden duration of 5s, meaning each party member receives 7 or 8 ticks healing. Total potency is 700 or 800. 
* The range on the regen application is 50y making it impossible to outrange on a standard 8-man boss arena. 
* Also resets the cooldown of Emergency Tactics and changes its recast timers to 1s, providing a consistent source of GCD pure healing if needed.

![EmergencyTactics](https://xivapi.com/i/002000/002809_hr1.png)

### **Emergency Tactics**

* Converts the shield from your next Adloquium or Succor into raw healing.
* Use during downtime to top up the party if MP is not a concern.
* Do not use during uptime unless all of the following are true:

  * There is a heal-to-full mechanic (e.g. Certain doom mechanics that require full hp) or life-threatening incoming damage that you (or your Sage cohealer) have already shielded for.
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

* Your fairy’s passive single target heal (180 potency).
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
* Has the same effect for both base fairy and Seraph despite different buff icons.
* Use for AoE healing. If AoE healing isn’t needed, use for additional tank healing.

![FeyIllumination](https://xivapi.com/i/002000/002853_hr1.png)

### **Fey Illumination/Seraphic Illumination**

* AoE magic damage mitigation (5%) and healing spell buff (10%).
* Increases outgoing GCD healing done by allies with the buff. Does not affect oGCDs or pets.
* Has the same effect for both base fairy and Seraph despite different buff icons.
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

# Other Abilities

## GCDs

![SummonEos](https://xivapi.com/i/002000/002823_hr1.png)

### **Summon Eos**

* Summons your fairy. Please don’t forget it.
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
* Can only be used if the base fairy is active. Cannot be used if Seraph is summoned or if no fairy is summoned.
* While under the effect of Dissipation, the fairy does not cast Embrace, your Faerie Gauge does not increase, and you cannot use any fairy abilities or Seraphism.
* Use as a damage cooldown or save it for emergencies:

  * Damage: Use as often as possible and spend the Aetherflow stacks on Energy Drain. Avoid using if it forces you or your cohealer to GCD heal.
  * Emergency healing: Use the healing buff to increase your GCD shields, and use the Aetherflow stacks for healing.

![ChainStratagem](https://xivapi.com/i/002000/002815_hr1.png)

### **Chain Stratagem**

* Raid buff: Increases the crit rate of attacks against the target by 10% for 20s.
* Grants Impact Imminent, allowing the use of Baneful Impaction.
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
