---
title: Dancer Basic Guide
card_header_image: /img/jobs/dnc/basic.png
authors:
  - Ringabel-Dim
patch: "5.58"
lastmod: 2021-10-26T02:04:23.722Z
changelog:
  - date: 2021-10-26T02:04:43.843Z
    message: Page created
---
Comprehensive Guide for DNC in Endwalker


By: Ringabel Dim of Excalibur
Last Updated: December 23, 2021
(Current as of Patch 6.01)























# Purpose and Introduction

The purpose of this guide is to be a comprehensive gameplay guide for how to play and optimize the DNC rotation. This guide goes over the fundamentals and job basics while also looking into advanced tips and tricks that experienced players may not know. Due to the randomness of the proc, feather, and esprit generation, DNC has a dynamic playstyle where no two pulls are ever the same. Hopefully after reading this guide, you will have a better understanding of how to play DNC to its fullest.



With the release of Endwalker, several adjustments were made to DNC, specifically with regards to esprit generation. Much of this guide retains information from the original Shadowbringers guide, but many things were updated or removed to account for these changes in Endwalker.



If you plan on referencing anything in this guide in your own published work, I ask that you give proper credit / reference to this guide.





























DNC Overview



## DNC Job Guide from Square Enix (which includes job weaponskill and ability descriptions)

### Short Version:
Dancer is a ranged physical DPS job with low personal DPS but high contribution to others’ DPS using raid buffs. It has “Dances'' that require executing the right dance steps in order to perform powerful finishing moves. Its main weaponskill GCDs revolve around a simple combo that has a chance to generate stronger proc GCDs which have a chance to generate feathers which can be used for oGCD damage abilities.



### Long Version:
Dancer is a ranged physical DPS job (along with BRD and MCH) which has a pretty straightforward style to its gameplay. Their primary damage stat is dexterity (DEX). DNC is the DPS job that does the least amount of personal damage; however, it makes up for it by providing high damage increasing buffs to your raid group. Part of DNC’s rotation is keeping a buff up called Standard Finish that increases your damage by 5%. Additionally, DNC has two two minute cooldown abilities: Technical Step and Devilment. Technical Finish (which occurs after successfully completing the Technical Step dance) will provide a 5% damage up buff to the whole party for 20 seconds while Devilment provides the DNC with a 20% crit hit rate and 20% direct hit rate boost for 20 seconds. DNC can also choose someone to be their Dance Partner in a fight with the ability Closed Position which will duplicate the Standard Finish 5% damage up buff and the Devilment buff on this target party member. Additionally, DNC provides raid utility in the form of a small AoE heal called Curing Waltz, an AoE channeled regen called Improvisation, an AoE shield called Improvised Finish, and a party wide damage reduction ability called Shield Samba. Despite doing low personal damage overall, DNC offers incredibly powerful burst damage in a 20 second window every 2 mins with its Technical Step and Devilment abilities.



The rotational flow of DNC is a simple combo / proc GCD system coupled with two dance abilities, Standard Step and Technical Step, on a 30 second and 2 min cooldown respectively. When beginning a dance, your normal GCDs are replaced with dance steps in order to unlock a finishing move (aptly named Standard Finish and Technical Finish). These dance steps do not do any damage, however, the dance finishes themselves are some of the strongest damage abilities in the game at 720 and 1080 potency respectively. These dance finishes damage all enemies within a 15y radius of you. The closest enemy will be hit for the full damage (720 and 1080 potency respectively) while all other enemies will be hit for 75% reduced damage (180 potency for Standard Finish and 270 potency for Technical Finish). Technical Finish also generates a proc called Flourishing Finish which allows for the action Tillana to be used, which is a 360 potency (on first target, 180 on all other targets) Finish that does not require any dance steps to be executed.



Outside of these dances, your normal GCDs include a set of basic 1 → 2 combo weaponskills called Cascade and Fountain. Cascade and Fountain each have a 50% chance to proc separate slightly more powerful weaponskills called Reverse Cascade and Fountainfall respectively. Cascade has a 50% chance to proc “Flourishing Symmetry” which will allow access to the weaponskill Reverse Cascade. Fountain has a 50% chance to proc “Flourishing Flow” which will allow access to the weaponskill Fountainfall. Additionally, every time your dance partner performs a weaponskill or spell while under the effect of Standard Finish, you have a chance (approximately 20%) to generate 10 esprit. Everytime the DNC performs a weaponskill, they will generate a guaranteed amount of esprit (5 per Cascade/Fountain, 10 per Reverse Cascade/Fountainfall). Your esprit gauge can hold a maximum of 100 esprit. Every 50 esprit can be spent on a weaponskill called Saber Dance, which is one of your strongest GCD actions at 480 potency on primary target and 240 potency to all nearby enemies close to the target. Using Saber Dance, Reverse Cascade, Fountainfall, or your dances will not interrupt your Cascade → Fountain combo. Using Cascade while you have a Flourishing Symmetry proc or using Fountain while you have a Flourishing Flow proc will override this proc if the proc would have successfully been generated.



Additionally, you have 4 more GCDs that mirror the way Cascade, Fountain, Reverse Cascade, and Fountainfall work in an AoE setting called Windmill, Bladeshower, Rising Windmill, and Bloodshower. All four of these weaponskills are AoEs in a circle around you (5y radius). Windmill combos into Bladeshower while Rising Windmill and Bloodshower are slightly stronger procs from the combo weaponskills. Rising Windmill is available upon getting a Flourishing Symmetry proc from Windmill (or Cascade). Bloodshower is available upon getting a Flourishing Flow proc from Bladeshower (or Fountain).



Every time you use a proc’d weaponskill (Reverse Cascade, Fountainfall, Rising Windmill, or Bloodshower), you have a 50% chance to generate a Fourfold Feather. You can hold a maximum of 4 feathers. These feathers can be used for oGCD abilities called Fan Dance (150 potency single target) and Fan Dance II (100 potency in an AoE around you on multiple targets). Additionally, when using a fan, it has a 50% chance to generate a proc called Threefold Fan Dance which allows you to use Fan Dance III (200 potency to primary target and 100 potency to all nearby enemies close to the target).



DNC has a 1 min cooldown called Flourish which immediately grants them each of their weaponskill procs (Flourishing Symmetry and Flourishing Flow), a proc of Threefold Fan Dance (for Fan Dance III), and a proc called Fourfold Fan Dance which allows access to Fan Dance IV (this proc is only generated from Flourish).



At level 90, in addition to increasing Crit% and DH%, Devilment also generates a proc called Flourishing Starfall which grants access to Starfall Dance, a weaponskill with a potency of 600 that is guaranteed to Crit and Direct Hit.



The basic flow of the DNC GCDs on a single target encounter revolves around keeping your dances, Devilment, and Flourish off cooldown without drifting these abilities too much (if at all) and using weaponskills in between dances. The way DNC’s damage can be optimized is through a combination of maximizing the amount of damage you do (especially during buff windows), maximizing the amount of damage gained by your buffs to party members through optimal buff timings and Dance Partner choice, and minimizing losses in resource management (such as overcapping on esprit / feathers, or overriding a proc).



## Range of Actions and Abilities
| Action/Ability | Range/Radius |
|-|-|

| Cascade, Fountain, Reverse Cascade, Fountainfall, Saber Dance, Fan Dance, Fan Dance III (primary target) | 25y |

Fan Dance IV
15y range and radius (conal)
Starfall Dance
25y range and radius (straight line in front of you)
Saber Dance (AoE effect), Fan Dance III (AoE effect)
5y (radius of AoE around the center of the target it was used on)
Windmill, Bladeshower, Rising Windmill, Bloodshower, Fan Dance II
5y (radius of AoE around the DNC)


Standard Finish, Technical Finish, Tillana, Devilment
Damage Range: 15y radius around DNC (all Finishes)
Buff Range: 
15y for Technical Finish buffs
30y for Standard Finish / Tillana / Devilment buffs















Understanding Standard Step / How to do Dance Steps

Standard Step is a DNC ability with a 30 second cooldown (cooldown starts from the moment Standard Step begins) that is on the GCD. When activating Standard Step, your Cascade, Fountain, Reverse Cascade, and Fountainfall GCDs will be replaced with steps (Emboite, Entrechat, Jete, Pirouette) that are also color coded (red, blue, green, yellow). Standard Step is a two step sequence of 2 of these random dance steps. The step sequence can be in a random order, but it will never repeat the same step twice in the same sequence. The step sequence is displayed on your Step Gauge, but the correct steps will also light up on your hotbar in the order you need to press them. After successfully pressing the required steps, the Standard Finish icon will be highlighted which when pressed will finish the dance and return your skills back to normal.
      
Before initiating a dance						
	
 Once you press Standard Step       …. 	     Step Gauge appears
				
After pressing the first dance step

After pressing the second step

When starting Standard Step, it initiates a 1.5s GCD. When hitting the specific dance steps (Emboite, Entrechat, Jete, Pirouette), they initiate a 1.0s GCD. The final Standard Finish triggers a 1.5s GCD. Altogether, that sequence (and timings) should look like this:

Initiating Standard Step, both dance steps, and executing Standard Finish take up a total of 5.0s (this time is not influenced by skill speed at all, it will always be exactly 5.0s). That means if we are at a 2.50 GCD tier, using Standard Step is equal to the same amount of time it takes to use 2 regular weaponskill GCDs. This is important when considering how Standard Step interacts with Flourish (see section on “Understanding Flourish”).

Successfully executing the correct number of steps will determine how much potency Standard Finish does on the primary target (closest target to the DNC) and any additional targets as well as how much damage% buff will be received by you and your dance partner with the Standard Finish 60s buff. You can hit Standard Finish at any point after starting Standard Step to end the dance sequence. Depending on how many successful steps you did will affect Standard Finish’s potency and damage% buff.

# of Steps properly executed
Potency of Standard Finish on closest target hit
Potency of Standard Finish on additional target(s) hit
Damage% Buff (you and partner)
2 Step Successful
720
180
5%
1 Step Successful
540
135
2%
0 Step Successful
360
90
0%


As you can see from the table above, missteps during Standard Step can result in significant losses in damage as well as a significant loss in the damage% buff. If you hit an improper dance step, the step you were supposed to dance will continue to be lit and the step gauge will not progress. You will still have a chance to press the correct step, however, this misstep will delay your rotation by 1.0s. Let’s look at some examples of what this would look like.

If your step gauge says your dance step order should be Entrechat followed by Pirouette (blue then yellow), but you accidentally press Entrechat, Entrechat again, Pirouette (blue - blue - yellow), your dance sequence would look like this:



This sequence of events will give you the full potency of Standard Finish (720 potency) and the 5% damage up buff, but it took 1.0s longer to perform due to that extra unnecessary step.

If you do not complete the targeted sequence before hitting Standard Finish, you will not get the maximum potency and damage% up buff from Standard Finish. An example of this (using the same step gauge example from before with Entrechat, Pirouette or Blue, Yellow) would be if we were to do Entrechat and then Jete (blue then green) before doing the Standard Finish




This step sequence results in only doing 540 potency with Standard Finish and providing you and your partner with only a 2% damage buff as opposed to 5% because only 1 proper step was done before executing the Standard Finish.

After hitting Standard Step, you have a total of 15 seconds to execute all steps and complete the Standard Finish before the dance is automatically cancelled and your hotbar is automatically reverted back to its normal weaponskills. This is important when considering downtime of fights, or portions where the Boss is untargetable. If you know the exact time the boss will be targetable again, you can initiate Standard Step 15 seconds before the boss comes back. This allows you to do the Steps during a time in the fight where you can’t hit the boss anyways saving you 3.5s worth of GCD time on the boss. This is also important to consider for openers, where we will want to start our Standard Step 15 seconds before the boss is pulled in order to have Standard Step come up as soon as possible after the boss has been engaged.

In addition to providing the Dancer and their Dance Partner with a damage% buff, both players will also receive an esprit generation buff. When executing a weaponskill or spell with this buff on, the DNC will have a fixed and guaranteed esprit generation rate while their Dance partner has ~20% chance to generate 10 esprit per weaponskill or spell. Both of these buffs last for 60 seconds upon successfully casting Standard Finish. The buffs are only applied to your Dance Partner if they are within 30y of you when Standard Finish goes off. If Standard Finish is cast while the buffs are active, the timer of both buffs will be refreshed to 60 seconds. With Standard Step having a 30 second cooldown, both of these buffs should theoretically be up 100% of the time on both you and your partner when keeping Standard Step off cooldown as much as possible. The exception to this is phases of fights with incredibly long downtime where the buffs may naturally fall off before you have to perform your “reopener”.















Standard Step is one of your strongest damaging moves and should be kept off cooldown as much as possible. At 720 potency over the course of 5 seconds of dancing, this ability does 360 potency per GCD’s worth of time. With your average weaponskill GCD being valued at approximately 296 potency per GCD, Standard Step is a gain over our average single target GCDs and should be used for the potency damage (not just refreshing the 5% damage up buff).

Drifting Standard Step by 1 GCD is a loss of approximately 10.6 potency. There will be times (such as under Technical Step / Devilment) where we might drift Standard Step due to other priorities over Standard Step under these buffs (such as ensuring procs don’t drop and using as many Saber Dances under the buffs) to minimize overall losses.

Special Notes:
You DO continue to do auto attacks while dancing. However, if the boss was de-selected (i.e. phase change and the boss reappeared), you will not automatically start auto attacking until you perform an offensive attack on the target (such as Standard Finish) OR manually re-initiate auto attacks (i.e. right click the boss).
In addition to not being able to use weaponskills, you won’t be able to use any oGCD abilities with the exception of En Avant and Role Actions (such as Second Wind and Arm’s Length) until you execute “Standard Finish” or until the Standard Step 15 second timer expires.
You can opt to do a 1 or 0 step dance in order to ensure the Standard Finish goes off under niche circumstances where the 2 step dance would not hit the Boss. Situations like this very rarely occur, examples would be the very last second of the fight before the boss dies if you are mid dance or a particular phase transition where you wouldn’t be able to get the 2 step dance off before the boss becomes untargetable. In your normal rotation, it is never worth it to do less than 2 steps.
Tillana (which is a finishing dance move available after completing Technical Finish) also applies the Standard Finish buff to you and your dance partner, which just grants another possibility for applying or refreshing the buff which can be useful in niche circumstances.




Understanding Technical Step

Technical Step is very similar to Standard Step in how the steps are executed, with one big difference. Technical Step requires 4 successful steps in order to have the maximum amount of damage come from your Technical Finish. Technical step is also on a 120 second cooldown (starting from when Technical Step first gets initiated). When activating Technical Step, your Cascade, Fountain, Reverse Cascade, and Fountainfall GCDs will again be replaced with steps (Emboite, Entrechat, Jete, Pirouette) that are also color coded (red, blue, green, yellow). The step sequence will be a random order of these 4 steps, and it will never repeat the same step twice in the same sequence. The step sequence is displayed on your Step Gauge, but the correct steps will also light up on your hotbar in the order you need to press them (same as Standard Step). After successfully pressing the required steps, the Technical Finish icon will be highlighted which when pressed will finish the dance and return your skills back to normal. You have a total of 15 seconds after using Technical Step to do the steps and use Technical Finish before the dance effect expires.

Example Step Gauge for Technical Step


The Technical Step sequence looks like this:


Altogether, Technical Step (1.5s GCD), the 4 steps (1.0s each), and Technical Finish (1.5s) will take a total of 7.0s. Depending on how many steps were correctly danced will affect how much damage Technical Finish does and how much of a damage bonus you and your party members receive:

# of Steps properly executed
Potency of Technical Finish on closest target hit
Potency of Technical Finish on additional target(s) hit
Damage% Buff (all party members)
4 Step Successful
1080
270
5%
3 Step Successful
900
225
3%
2 Step Successful
720
180
2%
1 Step Successful
540
135
1%
0 Step Successful
350
87.5
0%

All players within a 15y radius of the DNC when they execute Technical Finish receive a 5% damage Technical Finish buff and an esprit generation buff (note: for you and your dance partner, this esprit generation buff does not stack with the normal Standard Finish esprit generation buff, but the 5% damage buff from Technical Finish does stack with Standard Finish’s damage buff). Both of these buffs last for 20 seconds upon successfully casting Technical Finish. Given that all players affected by Technical Finish will temporarily have the esprit generation buff during this time, esprit generation is significantly increased during this period.











At level 82, DNC gets an action called Tillana, which is a continuation dance to Technical Finish. After successfully completing Technical Finish, the DNC will get a proc called “Flourishing Finish” which will allow the execution of Tillana. This action can be executed any time within 30 seconds. Tillana can also be used for niche partner swaps to minimize the loss of the esprit buff on your dance partner if used outside of Technical Finish and Devilment. More info on Tillana can be found in the Understanding Tillana section.


Special Notes:
You DO continue to do auto attacks while dancing. However, if the boss was de-selected (i.e. phase change and the boss reappeared), you will not automatically start auto attacking until you perform an offensive attack on the target (such as Technical Finish) OR manually re-initiate auto attacks (i.e. right click the boss).
In addition to not being able to use weaponskills, you won’t be able to use any oGCD abilities with the exception of En Avant and Role Actions (such as Second Wind and Arm’s Length) until you execute “Technical Finish” or until the Technical Step 15 second timer expires.
Unlike other raid buff abilities, Technical Finish needs 5.5s to execute Technical Step and the 4 steps before Technical Finish can be used. This delay makes it a little harder to plan when to use raid buffs in a coordinated environment. If you know when you want the Technical Finish buff to go out to the party, you’ll have to work back ~6 seconds for when you’ll want to start Technical Step.
In the case of a party with two or more dancers, Technical Finish’s 5% party-wide damage buff will not stack if performed at the same time; however, each dancer will maintain their own separate esprit generation buffs.


Understanding Fan Dance (and weaving oGCDs in general)

Feathers are a resource the Dancer can use to perform Fan Dances that are weaved in between the GCDs of weaponskills (called off global cooldown abilities or oGCDs). You have a 50% chance to earn a feather upon successfully landing a hit with any of your proc GCDs (Reverse Cascade and Fountainfall for single target GCDs, Rising Windmill and Bloodshower for AoE GCDs). You can hold up to 4 feathers. How many feathers you have can be seen on your Fourfold Feather gauge:







      
(Showing the DNC holding 4 feathers)

You can use a feather by using either Fan Dance (single target ability that does 150 potency) or Fan Dance II (AoE around you that does 100 potency to all targets hit). Successfully landing a hit with either of these abilities has a 50% chance to grant you the ability to use Fan Dance III (200 potency to selected target and 100 potency to all targets in an AoE around your target).

It is important to save these feathers as much as possible for opportunities when you have strong buffs to increase their damage (such as your Technical Finish / Devilment window). However, overcapping on feathers is a considerable loss to your DPS. Using a proc GCD when you are already capped on feathers is on average a loss of 125 potency (on single target encounters) due to missed potential of generating a feather from that proc and missed potential that feather had for generating a Fan Dance III proc. Using Fan Dance when you already have a Fan Dance III proc is on average a loss of 100 potency due to potentially missing an opportunity to use the Fan Dance III proc that could have been generated from that feather.

When you have no feathers, Fan Dance and Fan Dance II are grayed out and unavailable
/			
When you have at least 1 feather, Fan Dance and Fan Dance II will be highlighted like this showing that these actions are able to be used. In a fight, feathers do not expire unless you die.
/


When Fan Dance III procs, you get a buff that lasts for 30 seconds that allows you to use Fan Dance III called “Flourishing Fan Dance”. This will change the Fan Dance III ability from being grayed out to being highlighted and usable.
/					
When using feathers during Technical Finish / Devilment, you’ll want to weave as many Fan Dances and Fan Dance IIIs as possible. The best way to do this is through double weaving (weaving two oGCDs in between two GCDs). Depending on your ping, you may not be able to properly weave 2 oGCDs in between GCDs without clipping your GCD. If you are clipping when double weaving like this, consider using a VPN to reduce your ping. If using a VPN is not an option or doesn’t help prevent clipping when double weaving, your best option is to only single weave to prevent significant clips. Although playable, it is suboptimal since you won’t be able to weave as many oGCDs as possible in buff windows.

When weaving oGCDs, you can double weave 2 oGCDs in between 2 regular weaponskill GCDs, but you will only be able to weave 1 oGCD after Standard Finish, Technical Finish, or Tillana due to these GCDs only being 1.5 seconds as opposed to your normal weaponskill GCD (base 2.50 sec). Generally speaking, when weaving feathers in buff windows, you’ll want to use Fan Dance and immediately queue up Fan Dance III in the double weave window (or vice versa if you already have a Fan Dance III proc). 

Theoretically, you can use Fan Dance and then wait to see whether Fan Dance III procs and if it doesn’t proc use Fan Dance again as your second oGCD. However, because Fan Dance has a 1 sec cooldown while animation lock of oGCDs is 0.8 sec, double weaving Fan Dance into Fan Dance is not recommended for all players due to increased likelihood of clipping the GCD (ping dependent) as well as relying on reaction time to decide whether you need to press Fan Dance III or Fan Dance as your second oGCD. Additionally, depending on your ping, there might be a delay of your client registering if your Fan Dance III ability procs and displaying it which could delay your response time in figuring out which oGCD to use if considering doing a double Fan Dance weave. Therefore, it is recommended to do Fan Dance and then hit the Fan Dance III button regardless of whether the ability procs. If it procs, you will have done Fan Dance into Fan Dance III. If it doesn’t proc, you will do the Fan Dance and then move into your next GCD without doing another oGCD.

Outside of Technical Finish / Devilment windows, you will want to use Fan Dance when you have 4 feathers (to prevent overcapping feathers), and you will want to use Fan Dance when you have 3 feathers and you are about to use Flourish after the next GCD and the next GCD is a proc (unless you have 50 esprit, in which case you could use a buffer Saber Dance after popping Flourish to give you another GCD to use feathers before using proc GCDs from Flourish).

You can also use feathers during non-Technical Finish / Devilment buff windows (specifically odd-minute Trick Attacks). Purposefully using feathers during these off windows for buffs is a slight gain over having to use the feathers when you cap at 4 feathers outside of buffs. Keep in mind that on average you will generate approximately 2-3 feathers in a 45 second period of time (i.e. the time between when the off minute Trick Attack expires and the Trick Attack under Technical Finish / Devilment comes up), so you’ll likely be able to restock the feathers for your next Technical Finish / Devilment. It is recommended to end these off-minute Trick Attack windows with 1 feather unused.

Other than Fan Dance and Fan Dance III, DNC has several other oGCD offensive abilities such as Flourish and Devilment and several utility oGCDs from DNC specific actions (Curing Waltz, Shield Samba, Closed Position / Ending, Improvisation, Improvised Finish) to role actions (Arm’s Length, Head Graze, Leg Graze, Foot Graze, Second Wind). All of these oGCDs do not have any serious animation locks and are all able to be double weaved. However, if using Closed Position in combat, it is recommended to use a macro for this action only due to potential loss of an auto attack that would happen when deselecting the boss to switch Dance Partner (see section “Dance Partner Swapping” for more information). When using a macro like this, you do not want to double weave.

Keep in mind when weaving Flourish, it will generate a Fan Dance III proc. Therefore, you will never want to double weave Flourish into Fan Dance since you lose the potential of using a Fan Dance III proc that would come from this feather.

At Level 84, DNC gets access to another oGCD move called Fan Dance IV which is only available after the execution of Flourish through granting a buff called “Fourfold Fan Dance”. The buff lasts for 30 seconds which gives you plenty of time to make sure you weave this under optimal raid buffs. It is important to note that you will want to prioritize using Fan Dance and Fan Dance III over Fan Dance IV when you risk overcapping feathers. However, you will also want to make sure you get Fan Dance IV in as many raid buffs as possible because it is a lot of potency.

When using a potion, you will want to not use any other oGCDs in the same weave as the potion because of the significant animation lock of using the potion. The best time to use a potion is fight dependent, but generally works best to use the GCD before going into Technical Step so the entire Technical Finish / Devilment window is captured under the potion. If using a potion during a reopener, it is recommended to hard clip the potion after the 4th step of Technical Step for maximum gains with the potion.

Double+ weaving on the oGCD of a Standard/Technical Finish and Triple+ weaving for regular GCDs should never be done due to the severe clipping of your GCD which would cause losses in the number of GCDs you execute in a fight as well as potentially drifting certain abilities because of these clips.





Esprit Generation

Esprit has a chance to be generated for the DNC by party members whenever anyone with the Standard Finish or Technical Finish buffs perform a weaponskill or spell (GCDs for the most part). Not all actions that party members perform are able to generate esprit.

Actions that DO Generate Esprit:
All offensive “weaponskills” or “spells” that are on the global cooldown
This also includes weaponskills and spells that are on the GCD but have a cooldown for using it such as:
GNB’s Gnashing Fang Combo GCDs and Sonic Break GCD
RDM’s enchanted melee combo GCDs, Enchanted Moulinet, and Enchanted Reprise because they are classified as “weaponskills” (the non-enchanted weaponskills also generate esprit)
Healer Role Action “Repose” and Caster Role Action “Sleep”
Chocobo Companion and NPCs in duties (such as battle instances in the MSQ) when they perform offensive weaponskills or spells with the esprit buff

Actions that DO NOT Generate Esprit:
All oGCD “abilities”
Healing spells and other non-damage dealing weaponskills or spells (such as BLM’s Umbral Soul and MNK’s Form Shift)
“Abilities” that are on the GCD including
NIN’s Ninjutsus/Mudras including Kassatsu Ninjutsu and Ten Chi Jin Ninjutsus
SAM’s Tsubame-gaeshi (the Kaeshi Iaijutsus) including Kaeshi: Namikiri and Meditate
MNK’s Meditation and Form Shift
DNC’s Standard / Technical Step, Standard / Technical Finish, and all intermittent dance steps
“Weaponskills” and “Spells” cast by pets (since the pets do not gain the esprit buff)
MCH’s Automaton Queen’s 2 “weaponskills” (Arm Punch and Roller Dash)
SMN’s Pet actions that are classified as spells (Wyrmwave and Scarlet Flame will not generate esprit) as well as SMN Spells “Summon Bahamut” and “Summon Phoenix”
NIN’s Bunshin GCD effects
DRK’s Living Shadow

Based on early testings watching how much esprit is generated on a job by job basis, it was estimated the esprit generation rate is approximately 20% to generate 10 esprit per weaponskill or spell. This esprit generation rate is an assumption and has not been 100% confirmed. Recent tests for esprit rates of RPR and MNK were done at the beginning of Endwalker showing RPR to have a 20% esprit generation rate while MNK had a rate closer to 16.8%. Whether different jobs have slightly different esprit generation rates is still not fully known. In order to confirm this information, large amounts of data would need to be collected for many runs of different jobs. The underlying assumption is that jobs that have a faster recast such as MNK, NIN, and SAM may have a smaller esprit generation rate to normalize the total esprit the DNC generates. It is unclear if this difference in esprit generation is based on a function of the jobs GCD (where having more spell speed / skill speed to lower your GCD may also lower the esprit generation) or if it’s a static rate based on the job itself, or if individual actions will have an independent rate of of esprit generation based on that specific actions recast time (as might be the case for jobs such as MCH and RPR that have some weaponskills at a fixed 1.5 sec recast). Additionally, it is also assumed that whatever the esprit generation rate is will be the same under Standard Finish’s esprit buff and Technical Finish’s esprit buff. More testing needs to be done, but it is safe to say that a job’s chance to generate esprit would be somewhere between 16 and 20% per weaponskill.

For the DNC themselves, they will generate a guaranteed amount of esprit based on the weaponskill they are using:
Cascade, Fountain, Windmill, and Bladeshower will all generate 5 esprit.
Reverse Cascade, Fountainfall, Rising Windmill, and Bloodshower will all generate 10 esprit (Note: this is with the level 84 trait. Prior to level 84, these actions generate 5 esprit)
Saber Dance will consume 50 esprit.
Starfall Dance will generate 0 esprit.

During Technical Finish, the other 6 party members who do not have the Standard Finish buff will gain an esprit generation buff for 20 seconds. You and your dance partner will retain the normal amount of esprit generation you had before. Under Technical Finish, instead of 2 people contributing to your esprit generation, there are 8 people contributing to your esprit generation (effectively quadrupling this generation rate for 20 seconds).

The amount of esprit your party members generate for you will affect how many saber dances you will be able to do. The more saber dances you execute, the less esprit you yourself will generate due to saber dance being a GCD that consumes 50 esprit as opposed to your other GCDs which generate esprit. Your total esprit generation will have slight variations based on your composition (specifically, some jobs will execute more spells / weaponskills under your esprit buffs compared to other jobs). This is calculated on the DNC Gear Calculator (an example screenshot can be found below):





Understanding Flourish

Flourish is a 60s cooldown oGCD ability that grants 4 procs: Flourishing Symmetry (which can be used on either Reverse Cascade OR Rising Windmill), Flourishing Flow (which can be used on either Fountainfall OR Bloodshower), Threefold Fan Dance (which can be used on Fan Dance III), and Fourfold Fan Dance (which can be used on Fan Dance IV). Whenever you naturally proc one of these abilities, you gain a buff that lasts for 30 seconds that allow you to use that specific proc’d action. When you use Flourish, you will gain a proc for all 4 of the actions that each last for 30 seconds.

Using Flourish while any of these procs are already active is a significant DPS loss. Using Flourish when the Fan Dance III proc is already active is a loss of 200 potency. Losing a Flourishing Flow Proc for Fountainfall is a 141.1 potency loss over our average GCD potency. Losing a Flourishing Symmetry proc for Reverse Cascade is a 81.1 potency loss over our average GCD potency. It is better to use your proc and delay Flourish by 1 GCD than using Flourish to override the proc. The cost of delaying Flourish by 1 GCD is approximately 30.1 potency in a vacuum.

However, there are ways that we can avoid delaying Flourish while not losing any procs. When doing your rotation normally before Flourish, you can do:

Cascade → use Reverse Cascade if procs → Fountain → use Fountainfall if procs → Cascade…
 




This will help reduce the potential of having proc(s) going into Flourish coming off cooldown.

To prevent going into Flourish with a Fan Dance III proc already active, weave that Fan Dance III before using Flourish. If the Fan Dance III procs on the last oGCD of the GCD before you use Flourish, you can double weave the Fan Dance III → Flourish in that order.












In order to avoid losing a proc while also using Flourish on cooldown, we can intentionally save esprit to use a Saber Dance to help buffer our GCD in preparation for Flourish. Thinking 2 GCDs ahead of Flourish, we will want to consider the following:


(image courtesy of Io Whitespirit of The Balance - Discord server)

You have 30 seconds to use all of your procs before they expire. 

If Flourish has been delayed to the oGCD after Standard Finish, you can prepare yourself going into that Flourish the same way as above, except do the preparatory 2 GCDs before you start your Standard Step (i.e. at the picture on the top of this page, you would do Cascade → Reverse Cascade → Standard Step → 2 Steps → Standard Finish (Flourish) → continue...  ).













Understanding Starfall Dance

At level 90, DNC gets access to a new action called Starfall Dance that is available after using Devilment. Devilment grants the Flourishing Starfall buff which lasts for 20 seconds to allow for the execution of Starfall Dance. Starfall Dance is straight line aoe that does 600 potency to the first target hit (150 potency for all remaining targets), but it is also guaranteed to crit and direct hit. Since this action procs from the buff Devilment (which grants +Crit% and +DH%), it somewhat goes against our optimization around Devilment since it is unaffected by this +Crit% / +DH% due to being 100% to crit and DH already. However, Starfall Dance is a very hard hitting weaponskill that we will not want to drop and thus are forced to use it under Devilment.

If there are additional crit/DH buffs raid buffs (such as Chain Stratagem, Battle Litany, and Battle Voice), it may become more likely you’ll want to move Starfall Dance outside of these 15 second raid buffs in order to move another GCD that could benefit from these crit/DH buffs. However, if you also have several +damage% raid buffs occurring at the same time, there will be a breakpoint where it would be better to keep Starfall Dance in these 15 sec buffs despite not benefiting from the crit/DH due to the high damage it does that would benefit from the +damage% buffs. In order to determine this for your specific raid composition, enter in your party comp in the DNC Gear Calculator. After entering in your stats and party composition, the calculator will determine whether it is optimal to use Starfall Dance in the 15 sec raid buffs or during the 5 seconds outside of these raid buffs but before Devilment and the Flourishing Starfall buffs wear off.























Understanding Tillana

At level 82, DNC gains access to Tillana which is a follow up finishing dance move that is usable after executing Technical Finish. Technical Finish grants a buff called “Flourishing Finish” which makes Tillana available. Tillana is not assignable to your hotbar, but instead replaces the Technical Step / Technical Finish button after technical Finish is used. You will be able to use Tillana within a 30 second window of gaining this buff.

Tillana is a 1.5 sec GCD for 360 potency. For perspective, this is the same ratio of potency per second as a 600 potency action being done on a 2.5 sec GCD (which compared to Saber Dance potency of 480, Tillana is very strong on a potency per second basis). Additionally, because of the 1.5 sec recast, we are able to do 6 weaponskill GCDs + 1 Standard Step (along with the individual steps and Finish) + 1 Tillana while under the 20 seconds of buff duration of Devilment. If we did not use Tillana under Devilment, we would not be able to get another action under Devilment (aside from an extra oGCD weave of a Fan Dance or Fan Dance III) due to Tillana being a 1.5 sec recast and our regular weaponskill recast being 2.5 sec base. In other words, using Tillana under Devilment allows us to add an extra 360 potency under Devilment at the cost of at most 1 oGCD slot (Fan Dance is 150 potency).

Because of the 1.5 sec GCD recast of Tillana, you will only want to weave at most 1 oGCD in this GCD time otherwise you will significantly clip your GCD.

Tillana also applies the +damage% buff and esprit buff that Standard Finish applies. This enables Tillana to be used in cases where reapplying Standard Finish after long periods of downtime may not be feasible due to a reopener in a fight you cannot pre-step dance steps to. In such a case, you could start the reopener with Technical Step into Technical Finish and then use Tillana to grant you and your partner the Standard Finish buff.

Additionally, because Tillana does not require dance steps, it can be used in niche dance partner swap circumstances by using Ending on your current dance partner and then Closed Position on a new dance partner right before using Tillana. This means using Tillana for a dance partner swap instead of Standard Step will reduce how much downtime there is of the Standard Finish buff by approximately 3.5 seconds. If wanting to use Tillana for a dance partner swap to switch from a high bursting dance partner while under Technical Finish / Devilment to a higher sustained dps partner, you would be unable to use Tillana for a partner swap under Technical Finish / Devilment without having Devilment drop from your original dance partner. But by pushing Tillana outside of Devilment, you lose damage that was gained from squeezing in additional potency in your buffs as mentioned before. As mentioned in the Dance Partner Swap section of this guide, dance partner swaps are generally for very marginal gains (if there are any gains to be had) and can often lead to significant losses if improperly executed.



DNC “Rotation”

Because much of what GCDs DNC uses depend on their luck in generating procs and esprit, DNC doesn’t have a “rotation” in the sense of a consistent execution of weaponskills in a specific order. The general flow of DNC in a Single Target encounter is performing a dance, followed by weaponskills until the dance comes off cooldown:


where the “GCD” boxes can represent any of Cascade, Fountain, Reverse Cascade, Fountainfall, or Saber Dance. For which GCD to use in which box, that depends on our GCD priority list in the next section. But ultimately, the simple form of the DNC rotation outside of Technical Finish / Devilment can be summed up as 10 GCDs in between Standard Steps.

In terms of a cyclic 121 second rotation, our repeat cycle of our rotation looks holistically like this: 

It is important to note this is a very crude, holistic look at the DNC rotation. Actions will drift in normal fight circumstances due to downtime, Flourish drifts due to not wanting to override a proc, and Standard Step can drift due to GCD priority under Technical Step prioritizing Saber Dances under the buffs over Standard Step. Just note that the portion from when you start Technical Step to when Technical Finish and Devilment buffs wear off are the busiest part of your rotation.

You may have noticed that the rotation says 121 seconds instead of 120 seconds despite Technical Step and Devilment being 120 second cooldowns. This is due to the summation of all of the recasts of these actions. For all of your dances combined, this adds up to 28.5 seconds of dancing every 120 seconds.

Technical Step + 4 steps + Technical Finish = 7 seconds
Tillana = 1.5 seconds
Standard Step + 2 steps + Standard Finish = 5 seconds (x 4 casts in 120 seconds) = 20 seconds total
7 + 1.5 + 20 = 28.5 seconds total

The remainder to get to 120 seconds total is 91.5 seconds (120 - 28.5 = 91.5 seconds). Because this amount of time is not divisible evenly by our base GCD of 2.50, we can either perform 36 weaponskills at 2.50 second recast per weaponskill and then hold our GCD for 1.5 seconds to use Technical Step right as it comes off cooldown, or we can perform 37 weaponskills and do Technical Step 1 second late. The latter tends to be a personal DPS gain for the DNC of approximately 0.5% of our total damage. However, if a fight requires very strict timings for raid buffs in a coordinated effort, it may be worthwhile to hold the GCD for Technical Step (which results in a 120 second cyclic rotation as opposed to a 121 second rotation).














General Single Target GCD Priority List

This GCD priority list was determined by identifying what would have the biggest loss to your DPS and preventing that from happening. The value of an average GCD is 296 potency. The average GCD value of the proc GCDs is then compared to this average GCD value to determine what is the loss of dropping that proc as well as the average GCD value of Saber Dance to determine what is the loss of dropping 5 or 10 esprit that could have gone to a Saber Dance GCD. Finally, the value of a combo’d Fountain was looked at to determine what the loss in potency is for dropping the combo. The following is the result in the comparisons:

Losing Fountainfall proc (“Flourishing Flow”) is a 141.1 potency loss.
Losing Reverse Cascade proc (“Flourishing Symmetry”) is a 81.1 potency loss
Losing 10 esprit due to overcapping is a loss of 36.8 potency per 10 esprit.
Losing 5 esprit due to overcapping is a loss of 18.4 potency per 5 esprit.
Losing the combo’d Fountain is a loss of 45 potency
Cost of delaying Standard Step by 1 GCD (not factoring pushing it out of buffs): 10.6 potency
Cost of delaying Flourish by 1 GCD (not factoring pushing it out of buffs): 30.1 potency

The single target GCD priority list below was made by figuring out how to minimize these potential losses as best as possible. The result for GCD priority was: 

**Starfall Dance if not using it would otherwise let that proc fall.
Fountainfall if not using it would otherwise let that proc fall. Note: Procs last 30 seconds.
Reverse Cascade if not using it would otherwise let that proc fall. Note: Procs last 30 seconds.
Saber Dance (if >= 85 esprit) - You’ll want to use Saber Dance if >=85 esprit in case your Dance Partner would generate 10 esprit at the same time you could potentially be generating 5 or 10 esprit during a non-Saber Dance GCD resulting in overcapping of esprit gauge.
Fountainfall (to allow for a combo’d Fountain to be used if it would otherwise be dropped without accidentally overriding a Flourishing Flow proc)
Combo’d Fountain if it would otherwise drop. Note: After pressing Cascade, you have 30 seconds to use Fountain counted from the moment you use Cascade in order to get the combo’d Fountain effect.
Tillana
Saber Dance if under the effect of Technical Finish and Devilment and Esprit >= 50.
Standard Step
Fountainfall
Reverse Cascade
Combo’d Fountain if you have no procs.
Cascade

**Note: For Technical Finish / Devilment considerations, you will also need to factor in when you are using Starfall Dance. For more information about optimal Starfall Dance timings, check out the Understanding Starfall Dance section and use the DNC Gear Calculator for more precise timings.

AoE Rotation 

Whenever you are able to hit more than 1 target, you should make the following changes to your rotation based on how many targets you can hit:

2 Targets
Replace Cascade → Fountain with Windmill → Bladeshower for your filler combo
Replace Fan Dance with Fan Dance II when using feathers, continue using Fan Dance III as it procs
Continue to use Standard Step / Technical Step / Flourish / Devilment on cooldown
Use Fan Dance IV, Tillana, and Starfall Dance as they become available
Use Rising Windmill and Bloodshower as your spenders of the Flourishing Symmetry and Flourishing Flow procs whether these procs are from using your combo or from using Flourish.
Continue to use Saber Dance

3 Targets
Same as 2 targets, except only use Standard Step to refresh the Standard Finish buff. Standard Step on 3+ targets is a loss compared to average AoE GCD potency + potential potency gains from the feathers that could be generated in those GCDs.


Special note: 
Windmill and Bladeshower will cancel the effect of a combo’d Fountain (i.e. if you do Cascade → Windmill, you will lose the combo’d Fountain effect). Similarly, Cascade and Fountain will cancel the effect of combo’d Bladeshower (i.e if you do Windmill → Cascade, you will lose the combo’d Bladeshower effect). 
In situations where the number of targets you can hit changes (i.e. being able to hit 2 targets but then having to move away for a mechanic and can now only hit 1 target or vice versa), it is better to use your combo’d Fountain before using Windmill when going from 1 to 2 targets. When going from 2 to 1 targets, it is either on par or better to drop the combo’d Bladeshower in lieu of switching to single target Cascade. Remember to save your Flourishing Symmetry / Flourishing Flow procs for when you can hit 2 targets as much as possible (unless it would otherwise overwrite the proc).










Opener
The opener is important for DNC’s rotation since it sets up all of their cooldowns and dance timings for the rest of the fight by executing these actions in a certain order. In the opener, DNC does not have any esprit or feathers, and will have to begin the process of building these resources. It is recommended that you use a countdown timer of at least 16 seconds in order to properly time the pre-pull action sequence. 


(Mirror of opener infographic that can be zoomed in: https://i.imgur.com/AvOuHDs.png )
Opener Infographic courtesy of Moth and Yumiya

A 16 second countdown timer works best for DNC due to the tight timing of the Standard Step that is done after the 3rd GCD after Technical Finish. This is because when activating Standard Step, it gives you the buff “Standard Step” which allows for the execution of dance steps and Standard Finish. Despite the tooltip saying 15 second duration to use steps / finish, this buff actually lasts for approximately 15.9 seconds. Since the Standard Step that is used after Technical Finish would be started at exactly 15.0 seconds into the fight, we would need Standard Step pre-pull to start at exactly -15.0 seconds or earlier. Therefore, our window for when to start Standard Step pre-pull can be anywhere between -15.9 seconds and -15.0 seconds, which is why a 16 second countdown timer works very well for us. If the countdown timer used in an instance is less than 16 seconds or if you accidentally start your Standard Step a little too late, you can fix this just by doing an extra GCD before Standard Step comes up and delaying Standard Step by 1 GCD in the opener.

Additionally, due to the damage delay that is present in Standard Finish, optimal time for using Standard Step is actually at -0.5 sec of the pull. The damage delay is the difference in time from when you execute the action vs. when the damage (and resultant enmity) gets applied. However, it is important to make sure you are not early pulling as well. If timing this correctly, the damage application of Standard Finish should come out no earlier than a tank’s first damage application (of Tomahawk, Lightning Shot, etc…).

Hypothetically, Tillana can be used after Technical Finish in the opener and Flourish weaved in the oGCD of Tillana. This could be beneficial in raid compositions where it would be better for Starfall Dance to be outside of 15 sec raid buffs if they are primarily +crit% or +DH% buffs which do not benefit Starfall Dance. However, certain raid compositions with +damage% 15 sec buffs that are done at the same time as the +crit% buffs will make it more worthwhile to place the Starfall Dance under all these buffs, even if it doesn’t benefit from the +crit%. Using Tillana in the first GCD after Technical Finish can allow for this Starfall Dance to be placed later in the opener.

However, due to DNC’s interaction with RPR’s Early Gluttony Opener, DNC would need to perform a weaponskill early enough in the opener for RPR to gain an extra 40 potency on their Plentiful Harvest skill. With the timings of both of these openers, the DNC would have to be very on point with using Standard Finish right at -0.5 so they will be able to queue the Starfall Dance in time for the RPR to gain this Plentiful Harvest stack. Since Tillana is not a weaponskill, it cannot grant the Plentiful Harvest Stack for RPR. Due to this potentially being a loss for some raid compositions which may have +crit% buffs, an alternative is to use Flourish in the oGCD after the first Standard Finish before Technical Step and then using Fountainfall as your first GCD after Technical Finish while delaying Starfall Dance to where it needs to be for optimal gains. However, this is highly ping reliant due to not being able to queue Flourish properly when using Standard Finish like this because Flourish cannot be used out of combat and there is some delay before the game will let you use Flourish after you enter combat. If unable to do this reliably, it is not worth potentially clipping your first GCD and delaying your rotation.

A tentative reopener for fights (in circumstances where you would not be able to pre-dance your dance steps after an extended period of downtime which would have caused your Standard Finish buff to expire) looks like the following:

Technical Step → 4 steps (hard clip Tincture after the 4th step if using Tincture here) → Technical Finish (Devilment) →
	If at 85 or more esprit: Saber Dance (Flourish) → Tillana
	If at 80 or less esprit: Tillana (Flourish) → Saber Dance
		→ continue with normal GCD / oGCD priorities

This reopener can be adjusted depending on fight requirements / timings which necessitate different things regarding your buffs. We can take advantage of Tillana granting us the 5% damage buff that is also granted by Standard Finish by getting the Standard Finish buff as quickly as possible in the opener while also getting the Technical Finish and Devilment buffs out there.









Stat Tiering and Itemization for Dancer

Determining what gear to wear can have an impact on the damage you do. Itemization is a very important topic for any DPS role because wearing a more optimal gear set can increase your damage without changing anything with regards to your rotation. Essentially, proper itemization increases your DPS before you even step into the fight.

Generally speaking, the damage increase you get from stats as DNC is ranked in order of:

Weapon Damage > Dexterity > Crit > Det >= DH >>>> Skill Speed
Melding Priority: Crit > Det > DH

Description of these stats are as follows:

Weapon Damage: Found on your weapon, is an independent contributory factor to the damage formula
Dexterity: DNC’s primary stat that is found on all of its gear, 1 point in dexterity adds 1 point in attack power which has its own function in the damage formula
Crit: DNC’s most desired secondary stat, increases the chance of success in landing critical hits and increases the crit damage multiplier when you successfully land a critical hit
Direct Hit: secondary stat, increases the chance of success in landing a direct hit (Note: Direct Hits do a static 25% increase in damage)
Det: secondary stat, flat damage% increase which is its own separate function in the damage formula.
SkS: secondary stat, decreases the global cooldown timer (base 2.50 for all DNC weaponskills) and increases the damage auto attacks do

*Special Note: Abilities can both crit and direct hit at the same time, in which case they get both the crit damage multiplier and the 1.25 multiplier from direct hit when the action both crits and direct hits.

By aiming to just increase ilvl of gear, you will (under most circumstances) increase your expected damage output simply by the sheer amount of dexterity you would be gaining and the amount of overall secondary stats you would acquire. Additionally, weapon damage can be increased by obtaining a higher ilvl weapon, and will more often than not be a DPS increase for DNC.










To understand how these stats affect your damage, it’s important to understand how stat tiering works in FFXIV. Let’s look at Determination for a second. The Determination secondary stat is a simple damage% increase stat. When thinking about this stat, you might think the graph of it would be a straight line where the more Determination you have, the higher the damage% increase is, like so:















However, most stats in FFXIV work in tiers, meaning you will only see the increase in the stat’s effect when you reach that next tier. The actual graph of Determination vs Damage% increase actually looks more like a staircase:















What this means is that when you are at a specific tier (step), adding 1 point in Determination will have no effect on your damage unless it moves you to the next tier (step). Any points in Determination added beyond this stat tier starting point are considered “wasted” unless it helps you reach a new stat tier. Generally speaking, we should only worry about these steps/tiers when determining what our BiS gear set is, which may involve changing around materia melds to ensure there are as few wasted secondary stat points as possible.


Weapon Damage and Dexterity

Weapon Damage and Dexterity are the simplest of stats with regards to DNC DPS, especially since all gear pieces have Dexterity. The easiest way to increase these stats is simply by upgrading gear pieces for higher ilvl items that provide more DEX and higher ilvl weapons with more Weapon Damage. Weapon Damage is the only stat that is not tiered. Dexterity increases your damage through stat tiers as well (in Endwalker, DEX tiers for every 2 points of DEX on even values of Dexterity). Considerations in gearing based on different amounts of DEX is only generally ever looked at when considering wearing a lower ilvl item with less Dexterity that might have more overall secondary stats or more beneficial secondary stats (such as not having skill speed) that end up netting a slightly higher DPS. When considering items of the same ilvl, they will have the same amount of DEX, so this will most often not be a factor that needs to be examined.

Crit vs Det/DH

Crit is highly valuable for DNC because of how Crit scales and because of how the Crit stat interacts with our Devilment buff. Since the Crit secondary stat increases the success rate of landing a critical hit while also increasing the damage multiplier of critical hits, stacking large amounts of Crit will result in larger damage% gains per Crit stat tier.

Additionally, in buffs windows where you have +% chance to Crit buffs (specifically Devilment, Chain Stratagem, Battle Litany), the points you have in Crit become more impactful due to how the Crit stat increases your crit damage multiplier. Since a large amount of your damage occurs during buff windows (specifically under Technical Finish and Devilment), this heavily weighs Crit to become more and more valuable over DH and DET which have a stagnant damage% increase during these windows.

Starfall Dance scales linearly with the Crit stat as opposed to exponentially like other abilities due to having 100% crit rate and not being affected by the +crit% chance from the Crit stat. However, it still benefits from the crit multiplier from the Crit stat making it a strong stat for the skill.

Determination vs DH

Determination and DH are similarly valued for DNC. However, at level 90, DNC gains the action Starfall Dance which is guaranteed to Crit and Direct Hit. Because Starfall Dance does a lot of damage and because it does not benefit from the Direct Hit stat, Det becomes slightly more worthwhile over DH.

Skill Speed… and Why it is not good on DNC

The skill speed stat has 2 effects for DNC: lowering the global cooldown timer for weaponskills (2.50 base GCD) and increasing the damage of auto attacks.

The damage% increase Skill Speed gives to auto attacks has slightly worse scaling than DET. Additionally, auto attacks are only about 13-15% of our total damage.

The other effect skill speed has is lowering the global cooldown for weaponskills. However, this does not lower the cooldown of our Standard Step or Technical Step, nor does it decrease the time it takes to start Standard Step / Technical Step, perform the individual dance steps, or execute the Standard Finish / Technical Finish. Below is a visual that examines the difference between a 2.50 GCD tier and a 2.48 GCD tier.


At a 2.50 GCD tier, Standard Step becomes available at the precise end of a GCD provided you do not clip your GCD in the above image (Standard Step = 1.5s, dance steps (x2) = 1.0s x2 = 2.0s, Standard Finish = 1.5s, each weaponskill GCD is 2.5s per GCD x 10 GCDs = 25s. The result is 1.5 + 2 + 1.5 + 25 = 30.0s). The rotation at this GCD tier feels very smooth to play.

At a 2.48 GCD tier, a gap is created between the last GCD and when Standard Step becomes available again. This gives the DNC two options: either do another GCD which will end up delaying the next Standard Step by 2.28s (2.48 - 0.20 = 2.28s) or wait for 0.2 seconds and then begin Standard Step when it is available. These choices are referred to as “drifting” and “holding” respectively. At this specific GCD tier, it is actually worth it to hold your GCD and wait those 0.2 seconds in order to keep Standard Step off cooldown. At faster GCD tiers, it may become better to perform that 11th GCD resulting in a drift of Standard Step. 

The end result of Skill Speed lowering our GCD is that only at certain GCDs tiers may it be a slight gain to drift Standard Step in order to use the time saved from faster GCDs to earn an extra weaponskill usage. Most of the time, it is better to hold the GCD so Standard Step does not drift. Therefore, when you are holding your GCD like this, you actually gain no value from the fact that Skill Speed is decreasing your GCD (aside from very small gains only seen by the handful of GCDs before Technical Step reducing the Technical Step Drift of your rotation). If this is the case, the biggest thing Skill Speed is actually providing for you is the damage% increase to your auto attacks (which makes it effectively no better than 13-15% as good as Determination based on how much % of our damage comes from auto attacks).

The following section was theorized back when media tour information came out regarding DNC and has not been examined too extensively since. Additionally, as current potency values stand, there is merit to drifting Standard Step out of Technical Finish altogether to make room for more proc GCDs and feathers to get more overall potency under Technical Finish / Devilment (which was not examined much while doing this analysis).


Sometimes due to the gear available (especially if it is the start of the raid tier and you are using crafted items), you may be forced to have a lot of skill speed due to these limited gear options. The above table shows the optimal choice for whether to hold or drift Standard Step based on your GCD.

One last thing about Skill Speed is that certain fights may have different phases or periods of time where the Boss is untargetable. Having a faster GCD tier may allow you to gain an extra GCD before the Boss jumps or changes phase. Generally speaking, the gain in this extra GCD is not worth the loss of the Crit, DH, or Determination stats you could have in place of the Skill Speed.
Optimizing Stats Overall

With all of this taken into consideration, optimal stat distribution would entail doing these four things in this order:

Maximizing ilvl / DEX / weapon damage
Minimizing Skill Speed
Maximizing Crit
Prioritizing DET over DH

There may be some circumstances where you gain more damage by taking a lower ilvl item in an effort to dodge excessive skill speed on gear.

If you get to a point where you have maximized your ilvl, avoided all pieces with skill speed as much as possible, and maximized Crit, the only other aspect to optimize would be DET vs. DH. The graph below shows the relative damage gains based on how much DET and DH you have (assuming the total amount of DET + DH is constant and we had freedom to switch these stats freely, such as through melding).


The maximum of this graph occurs when approximately 77% of our DET + DH is the DET stat. In a realistic setting, we would have limited choices when it comes to the stats on the gear, but we can still try to aim for as close to this maximum as possible while melding our gear. Ultimately, this analysis is what determines the precise BiS (and specifically, what melds would be optimal).


Gear and Best in Slot (BiS)

“Best in Slot” refers to the best possible combination of gear for a specific piece of content. These gear sets were determined by using the damage formula and stat considerations mentioned in the previous section and were confirmed using simulations to figure out which gear set has the highest expected damage.

Information regarding best in slot gear set and starting gear sets if you are just starting off or just starting a raid tier can be found in The Balance #dnc_resources channel and will be updated on The Balance website soon.

BiS for UCoB, UWU, and TEA: For these level and ilvl synced fights, no official “BiS” will be maintained. You do not benefit from materia melds on the gear you bring into these fights. The best items will be items that cap both of the item’s secondary stats when synced down and have Crit and one of either Det or DH. The ilvl gear you need to cap both stats for the fights are:

UCoB: ilvl 470
UWU: ilvl 500
TEA: ilvl 600 (currently not available until 6.05)

Additionally, for all of these fights, the best weapon to use is currently the ilvl 535 Relic Weapon from the Save the Queen Shadowbringers Relic since you can customize the stats to cap on as many of these secondary stats as possible. The ideal stat allocation on this relic weapon for these fights is:

UCoB: DH = 123, Crit = 127, Det = 127, SkS = 90
(4 points from DH moved to SkS to match with a 2.46 GCD tier)

UWU: DH = 132, Crit = 136, Det = 136, SkS = 63 
(4 points from DH moved to SkS to match with a 2.47 GCD tier)

TEA: DH = 99, Crit = 184, Det = 184, SkS = 0









Considerations for Selecting a Dance Partner

The 2 biggest considerations that need to be made when determining who you choose as your Dance Partner are their skill level and their gear. For example, you may have two players who have very similar skill levels at their respective jobs, but one player might have considerably better gear. The player with the better gear may be the better player to choose as your Dance Partner in this situation due to them being better able to maximize the DPS gain from having your buffs. Additionally, you may have 2 players with similar gear, but one performs exceptionally better at their job than the other. In order to determine who would be better to Dance Partner, the easiest thing would be to use ACT (damage parsing tool) to determine who is doing more damage.

Now assuming we’re in a skill and gear vacuum (i.e. everyone is BiS and is at the same skill level), there are 3 main considerations to think about when selecting a Dance Partner:

Amount of damage they do in total (affects how much DPS they gain from Standard Finish 5% damage up buff)
Amount of damage they do during Devilment Windows that can be buffed by crit/dh% rate (some abilities are already guaranteed to crit/dh so jobs with these kinds of abilities will not benefit as much from Devilment). Additionally, does this job gain anything from having higher crit/dh% rate (i.e. MNKs can gain extra Chakras due to Devilment increasing their crit% rate)
Amount of esprit they’ll likely generate for the DNC outside of Technical Finish windows resulting in potentially more Saber Dances over the fight

The first point is pretty straight forward, whoever does the most damage will gain the most from Standard Finish buff. The second point is a little bit trickier figuring out since it’s not a direct damage % increase and instead a crit/dh hit rate % increase. The damage formulas can account for the crit rate and dh rate changes to calculate what is the expected damage % increase with the extra 20% crit/dh rate. Typically this will be roughly a 15% damage increase for the duration of the Devilment buff when you factor in the gains from the crit/dh buffs. When stacking more raid buffs on top of this, the expected damage increase will go up considerably due to the multiplicative gains of stacking raid buffs. Therefore, it is very important that a job can do a high amount of damage during the 20 seconds Devilment is up.

For the third point, let’s look at how much esprit your dance partner generates for you. Although certain jobs execute more weaponskill or spell GCDs than others due to buffs that increase their speed, this generally isn’t as impactful on our personal DPS when compared to the amount of DPS our Dance Partner gains from having our Standard Finish damage% buff and Devilment crit/dh% buff. Part of this is because this independent esprit generation effect only matters for the parts of the fight outside of Technical Finish due to everyone contributing to your esprit during that buff window. These differences in esprit generation between potential dance partners can potentially mean getting 1-2 extra Saber Dances over the course of the fight. However, the personal DPS gain for the DNC from these extra Sabers Dances is significantly smaller compared to the DPS contribution you give to your Dance Partner from Standard Finish and Devilment.

Dance Partner Priority List (assuming gear and skill vacuum)

A Dance Partner Priority list will be maintained in The Balance Discord server in the DNC channels along with on The Balance website. This list currently is not available and likely won’t be available until 6.05 comes out with jobs being adjusted with balance changes and new raid fights where damage potential of party members can fully be assessed. Additionally, Hint’s Dance Partner Calculator is currently being updated (with a goal to be released sometime within the first few weeks of Pandaemonium Savage release) for Endwalker compatibility and is a very important tool for determining these Dance Partner priorities.

The Dance Partner Priority list will rank party members based on who will benefit from Dance Partner the most based on their job in a gear and skill vacuum. Remember: gear and skill will generally be a better indicator of who will do more damage with the buffs than the job they play.

In some fights, it may be optimal to switch Dance Partners for different phases or based on certain party members gaining more from being able to hit multiple targets at the same time.

Dance Partner Swapping

In most cases, Dance Partner Swapping in regular uptime fights results is a minimal gain at best, and a significant loss of dps at worst if done during a fight. There are phases of fights / mechanics in fights that enable better time for swapping partners where gains may be more noticeable. For the most part, Dance Partner Swapping should only be done in high end environments such as optimized speed kills.

Dance Partner swapping is when you change your Dance Partner partway through a fight. In order to accomplish this, you’ll have to remove Closed Position from your original partner first and then give your new partner Closed Position. When you remove Closed Position, it will remove your Standard Finish buffs from your original partner (including esprit generation) and it will also remove the Devilment buff if it is currently running. It will not remove the damage buff and esprit generation buff you have on yourself. You cannot use or remove Closed Position while you are dancing. When Closed Position is active, the Closed Position hotkey will change to an action called “Ending” which triggers a 1 second cooldown for Closed Position when used. This action will remove the Closed Position buff from your partner and all of the buffs mentioned previously. Because of this 1 second cooldown, it is difficult to double weave Ending with initiating Closed Position on a new partner because this delays the animation of initiating the new Closed Position causing a clip to your GCD. Therefore, if swapping, the best practice would be to use Ending on a separate GCD from when you Closed Position your new partner.

While swapping partners, unless you are reliably able to weave Ending on old partner and Closed Position on new partner in the same GCD window (which may be difficult due to the forced 1.0 sec recast similar to weaving Fan Dance → Fan Dance), the best time to use Ending would be 2 GCDs before you use Standard Step so that the Standard Finish buff can be applied to your new partner as soon as possible. What this would look like is:










When reapplying Closed position, you can use a macro that targets a specific party member and casts “Closed Position” on them. An example UI is shown below that has a hotbar setup next to the player list that has 7 macros for Closed Position (one for each party member).

The macros have the text:

/micon "Closed Position"
/ac "Closed Position" <2>

/micon "Closed Position"
/ac "Closed Position" <3>

/micon "Closed Position"
/ac "Closed Position" <4>


etc...




In an effort to hasten how fast the Closed Position action gets queued when using a macro, you can brute force it by using multiple lines of texts in the macro command for the same action as follows:

/ac “Closed Position” <2>
/ac “Closed Position” <2>
/ac “Closed Position” <2>
/ac “Closed Position” <2>
etc…
/micon “Closed Position”      ← This is line 15 of the macro

This will queue the Closed Position action multiple times onto Player #2 in your Party List, which will result in a higher likelihood it will queue the action faster when using this macro.

When using macros, there is an inherent delay that is caused by the macro in using the oGCD ability. Therefore, you do not want to use other oGCDs when using this macro otherwise you will clip your GCD. The alternative to using a macro would be to select the party member and manually use the Closed Position ability. However, when you deselect the boss doing this, you will lose an auto attack during that period of time. This loss of an auto attack can potentially make it not worth it to deselect the boss, even if it allows you to double weave during that GCD.


An alternative to the partner swap over 2 GCDs is to double weave Ending on old partner and Closed Position on new partner in the same GCD weave space. This reduces the amount of time Standard Finish is missing from your dance partner. However, executing this is ping dependent and requires you to deselect the boss (since using 2 macros to weave Ending / Closed Position in the same GCD guarantees a clip). A visual of what this partner swap looks like can be seen below:


Graphic courtesy of Io Whitespirit (DNC Mentor on The Balance)

What this all means is that there can be a delay of approximately 5-7 seconds from when you hit Ending and remove the Standard Finish buffs from your original partner to when Standard Finish gets applied to your new partner. During this downtime, your partner does not have the 5% damage buff and your partner does not have the esprit generation buff. If doing a planned Dance Partner swap, you should consider whether this loss of the damage buff and loss of the esprit buff for 5-7 seconds is worth giving a different party member the buff.

I would only ever consider doing planned Dance Partner swaps if you have one DPS who does high overall damage but not great damage in Devilment window and another DPS who does great burst damage under Devilment but is low in overall damage while the 3rd DPS is mediocre in both. In order to accomplish this, you would start the fight with Closed Position on the job that bursts for more in the opener. Then, on the Standard Step that occurs after Devilment wears off, switch to the partner who does more overall damage but does not burst as well. On the Standard Step that happens before the next Devilment, switch back to the high bursting DPS. Overall, this would require swapping partners every minute on the Standard Steps before and after Devilment. However, this would mean you are losing the esprit generation for your partner for 7 seconds every minute and no DPS has the 5% damage up buff for 7 seconds every minute. You have to be certain that the DPS that is gained by having Devilment on the higher bursting job is worth the loss of the Standard Finish buff for this amount of time. One of the only party DPS composition I might consider doing this dance swap would be if the DPS jobs were DNC, NIN, BLM, and the 4th is either DRG, RDM, BRD, or MCH. In this case, I may consider partnering the NIN during Devilment while switching to the BLM in the off-Devilment windows. Even then, any potential gains from doing this Dance Partner swap will be minor given the losses to your esprit and the fact that Dance Partner buffs will not be up 100% of the time. To objectively assess this, consider uploading a log to Hint’s Partner Calculator once it has been updated for Endwalker.

If your Dance Partner dies during a fight, it is very important to swap to a living partner as soon as you can, especially if Devilment is about to come up. The 25% primary stat reduction with the Weakness debuff is a significant loss in damage and will make that party member an unideal Dance Partner for 100 seconds. Once their Weakness debuff wears off, figure out an ideal time in your rotation to repartner them in order to be buffing the strongest partner possible.

With Endwalker, DNCs now have the option to use Tillana as part of their Dance Partner swap. This will reduce the downtime of the esprit buff from 5-7 seconds when swapping after Technical Finish / Devilment wears off to a downtime of approximately 2.5 seconds. NOTE: This only reduces the time of lost esprit buff for the swap that occurs AFTER Technical Finish / Devilment.



















DNC Utility

Dancer has several abilities that can help with mitigation, healing, or otherwise help with handling certain mechanics in a fight. This section highlights how to best use some of these abilities:

Shield Samba

Shield Samba is a 90 second cooldown ability that provides a 10% damage reduction buff to all party members within a 20y radius around the Dancer for 15 seconds. The best time to use this ability would be for raid wide AoE damage. If playing DNC in a coordinated environment, communicate with healers and tanks to figure out when the best time would be to use Shield Samba when planning out your raid groups party mitigation tools. Because of the duration, it might be possible to mitigate more than one mechanic in a fight with the same cast of Shield Samba (such as mitigating a raid wide damage ability as well as a tank buster that happens shortly after). Sometimes the timing is tight but doable where you use Shield Samba near the end of the cast of a Boss’ action to also hit a later mechanic.

This ability does not stack with BRD’s Troubadour or MCH’s Tactician (both of which have the same effects of 10% damage reduction for 15 seconds on a 90 second cooldown). However, one key thing to point out about Shield Samba is that it cannot be used while you are dancing. If you are trying to time Shield Samba at a precise time to cover a specific mechanic, it may be difficult to get the precise GCD for the cast you want if you are doing a dance during this time.

Curing Waltz

Curing Waltz does a very small AoE heal on you and everyone in a 3y radius of you. Additionally, this AoE heal will be duplicated on whoever is your Dance Partner. If you stand directly on top of your Dance Partner when you use Curing Waltz, both you and your Dance Partner as well as anyone standing in that radius will be hit by 2 instances of the heal. Overall, the amount of healing done by getting healed by both Curing Waltz effects is comparable to a non-crit Indomitability from a SCH. Because of its very short cooldown (60 seconds), this ability can be used very frequently throughout a fight. It pairs well with topping the party off before or after raid wide damage occurs. However, if you are at a part of the fight where there is little raid wide damage, you can consider running on top of the tank (if it is safe to do so) and casting it on them to give them a very small, free spot heal. Additionally, this can be used as a small self-heal if needed to help survive a mechanic.

Improvisation

Improvisation is a 120 second cooldown channeled ability that grants a heal over time effect to yourself and anyone who enters a small circle you form around you (8y radius). The heal over time effect lasts for 15 seconds but the duration is refreshed during the channeling effect of Improvisation. While Improvisation is being channeled, you can use an ability called Improvised Finish which ends the effect of Improvisation and applies a damage absorbing shield to yourself and all nearby party members. Any action used while Improvisation is occurring (including Improvised Finish) will end the effect of Improvisation, including moving or any combat action. Improvised Finish grants a larger shield based on how long Improvisation had been channeled (as seen by the stacks of Rising Rhythm you gain during the channel every 3 seconds for a maximum of 4 stacks)

Improvisation and Improvised Finish can be used during downtime to help apply a heal and shield to the party. It can also be flashed quickly during active uptime parts of the fight to get the AoE regen heal as well as a weak shield for you and the party members who are close to you. In order to get the shield effect while keeping uptime on the boss, you will have to weave Improvisation as the 2nd oGCD weave in between weaponskills. Due to the delay in starting the channel timer for Improvisation, you can potentially hit the next GCD before the channel starts which allows you to weave the Improvised Finish as your first oGCD of the next GCD. The success rate of this is somewhat RNG and is somewhat based on the server timer as well as your ping in order to execute. In other words, getting this shield is not very reliable to do while not losing an attack action. However, the 5% shield is rather minor compared to the heal over time you get (which currently heals for about 14% of your hp for 15 seconds worth of heal over time ticks). Just weaving Improvisation for the heal over time effect can still be rather useful.

Head Graze

Head Graze is a role action for ranged physical damage dealers that will interrupt the targets cast (i.e. “silence”). This ability is not always needed in Savage fights. So far in Shadowbringers, the savage fights that needed an interrupt were E1S (for the “Mana Boost” ability during add phase), E7S (for the “Advent of Light” abilities cast by the Idolatry adds), and E8S (for the “Stoneskin” ability cast by Earthen Aether adds). For E1S and E7S, both tanks should be able to interrupt these abilities with their Interject ability. However, for E8S, the tank on the West side of add phase will not be able to silence both Earthen Aether adds, which then requires a ranged physical damage dealer to be on that side as well in order to cover all of the silences needed for add phase. Head Graze has a 30 second cooldown. Since this is a role action, it can be used during a dance if need be.

Arm’s Length

Although not a support ability, this role action prevents you from being knocked back for 6 seconds (120 second cooldown for the ability). There are some mechanics where this will not prevent the knockback effect, but it is useful for preventing knockbacks in a lot of situations. Since this is a role action, it can be used during a dance if need be.

Second Wind

Second wind is a useful self heal oGCD that is on a 120 second cooldown. It can heal for approximately 12% of your max hp (non-crit). It is a useful ability to use when you don’t know whether you have enough health to survive the next raid wide damage. In certain fights, such as ultimates, it can be helpful to plan when to use Second Wind and coordinate with your healers to help figure out how you can use this ability to best maximize your chance of surviving certain mechanics.

Peloton

Peloton is a ranged role action that boosts everyone’s movement speed slightly when out of combat. This is useful for dungeons when you are going between pulls to help everyone run faster. The movement speed boost from Peloton does not stack with Sprint (Sprint’s movement speed boost will take priority since it is a faster movement speed buff). Additionally, if used in combat, it will have no effect on boosting anyone’s movement speed since the buff automatically disappears if you are in combat. This can be used pre-pull in a raid fight to help the party run to the boss faster right as the countdown hits zero. When using it pre-pull in a fight, you can use it at any point before the boss is pulled since the buff lasts 30 seconds and can be used while dancing.

En Avant

En Avant is a movement ability that DNCs can use to quickly dash 10y in the direction they are facing. It can be useful for quickly dodging AoEs, or just in general to help with movement while handling a mechanic. En Avant is on a charge system where you can have a maximum of 3 charges of the ability. As long as you have charges, you can use this ability. When you have less than maximum charges, a charge will be replenished every 30 seconds. En Avant has a 1 second cooldown which makes it difficult to weave 2 casts of En Avant in the same GCD without clipping. En Avant can be used while dancing if need be.




















About the Author

Hello there! My name is Ringabel Dim of Excalibur. I have played FFXIV for more than 7 years and have been a DNC raiding main since the launch of Shadowbringers. I have done raid progression and fight specific optimizations on DNC for all of the Eden Savage Raids, The Epic of Alexander, and plans for Endwalker Raid content as DNC with my raid group on the Primal data center (“Monkeys with Typewriters”). I am also a DNC mentor on The Balance - Discord server, which is a good source of information pertaining to FFXIV and raiding. If you have any questions regarding DNC, there is a #dnc_questions channel there which is a great place to ask anything with regards to DNC!








Special Thanks

Rah, Io, Schmali, Yumiya, Infinitestory (other Mentors on The Balance)
Resilla, Rai Nagisei, Joncho (Helpful DNCs on The Balance who contributed to this guide and helped look over for errors)
Ellunavi (Moderator on The Balance, and contributed much to DNC early Shadowbringers Theorycrafting resources)
Moth for helping with the creation of the opener infographic template and Yumiya for arranging the actions in the infographic
Morcale Primerain and Got Woo from Excalibur for helping me test Esprit generation rates for various jobs
Allagan Studies - useful information regarding stat tier and damage formula
My static, “melees fkn sukMonkeys with Typewriters”, for letting me put up the axe and become a DNC main =)





Changelog
December 23rd, 2021 - Guide heavily revised from Shadowbringers version of the guide and adapted for Endwalker
