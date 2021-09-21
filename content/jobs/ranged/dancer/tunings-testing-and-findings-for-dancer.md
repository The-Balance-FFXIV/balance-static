---
title: Tunings, Testing and Findings For Dancer
---
Tunings, Testing and Findings For Dancer
---Ellunavi, Balance Discord Moderator---



--This sheet is currently being updated to reflect the 5.1 changes. I will post a changelog at the top when everything is finalized.--
-- 5.1 will increase a DNCs personal DPS by roughly 3.7%--
--Other changes from the 5.1 Buff--
While AoEing 4+ Mobs, it is inadvisable to use standard step on CD, just use it to maintain the buff.
The priority for our procs has changed a bit since the AoE procs were boosted:
Fountainfall = Bloodshower > Rising Windmill > Reverse Cascade
The choice between prioritizing Fountainfall over Bloodshower will involve whether you are in combo or if you need to use a melee GCD in fear of not being able too later.
All charts and graphs have been updated to relevant 5.1 values. Our average GCD value has gone up and because of that non-average things have gone down in relation. This change is reflected throughout this write-up.
I will make an effort to update the Dancer Partner charts once other sim creators have finished making changes, expect an update sometime next week.
Added a “Reopening” section under Devilment placement to discuss possible options when re-opening or entering your next Technical Window.

---I will update this document if I get more questions and answers---
---This is not a Guide---
---We are still testing Esprit rates so this all subject to change, all is subject to change---
---Special thanks to the DNC_Lounge in The Balance for helping with research, reading through sim logs, and providing useful testing scenarios---
--BiS links and other useful information can be found on the Balance Discord--

Key Notes
I’d like to start this document off with a few points:

At the time this document is made there are still a few unknowns about DNC. Namely the rate at which Esprit generates. We have a pretty good idea that party members generate around 20% and we generate around 25-30% ourselves.


Any actual damage numbers listed here are using a test formula that is within a 1% variance of expected DPS.


All information here is backed up by a Dancer Simulator that runs through a set opener then follows set logic to determine its actions. The logic the SIM uses can be found in the repo with the SIM. The read me of the SIM will explain it; it will be released at a later date.

The logic listed for the SIM is definitely a good way to play the job, but it’s a bit overly complicated and I will try to simplify the logic later on. That is just what the machine reads before it acts. 

Now that is all said, let’s actually get into the fun stuff!






How Do I Play Dancer?

Dancer is a resource utilization class. They have at their disposal 3 additional resources outside that of GCDs and oGCDs: Feathers, Procs and Esprit (pronounced S-pree). Utilizing these resources to the best of your ability will result in optimal damage. Ideally, you want to avoid overcapping on feathers, dropping procs, and wasting potential Esprit gains, in more or less that order.

Each GCD from your partner (as long as Standard Finish is up on them) has a roughly 20% chance to generate 10 Esprit for you. When under Technical Finish your whole party has a roughly 20% chance to generate Esprit each time they do a weapon skill or magical attack
Each GCD from you has a roughly 25-30% to generate Esprit
50 Esprit is used for Saber Dance (GCD)
Flourish gives us all Flourish Procs (including the two AoE ones and Fan Dance III). You ideally want to try and use the AoE Flourishes when you get them (refer below to see their gain).

In order to do this we need to make note of a few things:

Using Flourished skills does not break your combo
Using Saber Dance does not break your combo
The average GCD value of DNC is 333(without Esprit/Saber Dance) / 347 (with Esprit/Saber Dance) ~ (this is a simulated value created by running the Cascade > Fountain combo multiple times and added up any procs given, including Fan Dance I and III procs and Esprit gauge/Saber Dance usage. This was also backed up through calculations.)
This puts Fountainfall at a 142 potency gain/loss if dropped
Reverse Cascade at a 92 potency gain/loss if dropped
Bloodshower a 142 potency gain/loss if dropped
Rising Windmill 92 potency gain/loss if dropped
Our Combo at a 37.5 potency gain/loss if dropped
Saber Dance is a 53.4 potency gain/loss per 10 Esprit
You will generate roughly ~14 Esprit per GCD in Technical Finish, this number is on the lower end of estimations and varies greatly with your groups GCD
At a 2.5 GCD Standard Finish is a 306 potency gain over our average GCD, this decreases by roughly 2.7 for each GCD tier. IE at 2.4 is potency is 277.08.
It is roughly a 25.5 ~ 22 potency loss to let SF drift a GCD.

While these just look like numbers, we start to learn that procs are king. Your gameplay will be centralized around trying your best to pool your resources for burst windows while not dropping any procs. This sounds easy, but when you can be locked out of doing a GCD for 5s to 7s at a time it can be rather challenging.



Just simply saying “Don’t drop your procs, combos and don’t delay your dances” is a lot easier than what it is in reality. There are two main problems that DNC sort of faces in terms of optimization:

Technical Finish / Devilment is a very busy and bursty window. You want to capture as much potency as you can within Devilment without dropping any of your procs without delaying Standard Step too much and not overcapping on Esprit. This is pretty hard if not impossible in situations where you get lucky with Esprit procs. I will get a bit more into Technical Windows later.
Flourish is a massive DPS loss when used on top of a Proc, but you still want to keep it aligned to your burst windows. This requires some level of thinking ahead and there are a few tricks you can do to keep it aligned.

Flourish
	
Flourish plays a huge role in our DPS. It’s main purpose is to generate feathers for future burst windows, but it also allows us to fill buff windows with higher potency GCDs (avoiding Cascade if at all possible). 

So first how did we decide that using procs over keeping flourish on CD was better?

It’s better to see Flourish as cooldown with a potency that isn’t realized until 4 GCDs. If we add up the gains from each proc GCD(142 for Fountainfall and for Bloodshower and 92 for  Reverse Cascade, 92 for Rising Windmill) and add in the FDIII bonus Flourish comes to a whopping total of 668 potency. This is a number that we can sort of work with to figure out the gain / loss of holding Flourish or fitting it into burst windows.

Depending on our GCD it is a~27 potency loss per GCD we delay Flourish. Overwriting a proc is the same as dropping the proc therefore we can assume that at all points it is worth it to use the proc and then delay Flourish. At least in a vacuum. We definitely need to consider how a well timed Flourish can replace a Cascade in our burst window, albeit it giving us a Cascade out of the burst window. Im’hotep Rah looked a bit more into this and came to the following conclusion:

Lastly, as long as you didn’t have a delayed Technical Step during the encounter and if you open up with an earlier Technical you can delay Technical, at most one GCD before you start dancing during raid buffs.The highlighted information is currently a bit outdated. If you haven’t drifted Technical step throughout a fight and Flourish has drifted one GCD, it is ideal and mostly optimal to drift Technical Step a single GCD and go into that window doing Technical > Devilment > Saber Dance > Flourish. This sequence is only recommended if Flourish does drift a single GCD.

As such, Flourish is incredibly nice during our burst window and something we want to have in there, but it is by no means married to it. If, for whatever reason, Flourish drifts outside of buffs because you were prioritizing procs this is still a DPS gain overall. You may want to look at what you are doing before Flourish to end up in that situation.

So how do we handle Flourish and keep it at bay or from drifting:

The first and most obvious rule is to spend your procs as Flourish is coming back up. If you want the easy solution it is to just exhaust your procs as you get them.
Cascade > Reverse Cascade > Fountain > Fountainfall 
This type of playstyle will ensure that Flourish will only get delayed on GCD at most. There is a strong argument to try and push FF into raid buffs but most raid buffs line up on the 60s timer, after you have exhausted Flourish.

I wouldn’t recommend walking into an odd numbered Flourish (ones not in Technical) at 3 feathers and sub 50 esprit, especially if you will be using it after an ability that gives you feathers. Because if you get a 4th feather you will need to spend one before clicking a flourished GCD and that may proc causing you to delay Flourish again. Though, if you do find yourself in that situation if you have enough Esprit you can do the following:
/Flourish GCD > Flourish > FDIII > Saber Dance > FD1 > /Flourish GCDs.

If you can’t do this for whatever reason, you then need to make the most out of a loss/loss situation. We know that delaying Flourish is 29.7-28 DPS. If you have average ping, the delay from clipping is about 0.3/0.4s which would be a 41.64p at a 2.5 GCD up to a 57.5p at a 2.4 GCD. Since we have a 50% chance to delay Flourish, an additional GCD, we should look at that risk as such. Therefore its better to clip at any tier above a 2.47 and just let it drift at any GCD tier below 2.46. See the chart below for Risk comparisons



Lastly you can use Saber Dance on odd numbered flourishes to ensure you don’t get a proc before you click it. The main situation you would want to do this is on odd numbered flourishes (The ones not in Technical Finish). Its when you have no procs, 50 Esprit and Flourish can be used within the next GCD. Instead of using Cascade and potentially getting a proc you simply use Saber Dance to fill that GCD gap and get flourish out on time. This effectively trades a Cascade and Saber later on in your rotation, so you aren’t losing out and the chances of you spending Esprit on Saber in between the odd number and technical is pretty high. This strategy has a bit of a loss when playing with a Ninja though because you potentially lose out on a Saber during the odd numbered Trick attacks.

Priorities

When we are discussing priorities we need to break it up into at least two different windows: Outside and inside of Technical Finish.

Single Target Priority - Out of Technical
GCD Priorities:
Fountainfall,  Bloodshower, Reverse Cascade, or Rising Windmill if they will fall off and you won’t lose a Standard Step in the fight
Standard Step on cooldown
Saber Dance if Esprit is above 80 (to reduce the risk of overcapping) or at 50 if Trick Attack or other raid buffs are up)
Fountainfall if available
 Combo’ed Fountain if we have been running our combo for awhile
Bloodshower
Rising Windmill
Reverse Cascade
 Combo’ed Fountain
Cascade
oGCD Priorities:
Flourish if we have no procs
Devilment if we are in Technical  t(see opener section and Technical Section for more info)
Fan Dance III if available - Hold this for raid buffs if at all possible
Fan Dance I if there are raid buffs rolling. Devilment and/or Trick are the biggest ones
Fan Dance I if we are at 3 feathers and Flourish will be used after the next GCD AND the next GCD is a Flourished one
Fan Dance I if we are at 4 feathers
Ok let’s talk about these priorities for a bit so we can get a better understanding of why everything is where it’s at:
The first line is mostly ensuring that not dropping our procs is our top priority. In reality, you should never be in a situation where you need to make the decision of dropping a proc vs. using Standard Finish on CD, but it may happen with wonky add phases or jumps. When it comes to jumps and phasing, you are better of prioritizing SF if the boss will be gone for ~15 seconds or if you know it will cost you a usage in the fight. As a dropped proc is nothing compared to a lost Standard.
The next few lines are pretty obvious, its nearly impossible to overcap Esprit going into SF at 80 Esprit, unlikely at 90 and still less than a 50% chance to happen at 100, at least when we aren’t under Technical Finish. Furthermore dropping a proc will always result in a higher DPS loss in this priority as opposed to overcapping Esprit.
oGCD priorities are bit lengthy, but I really want to stress how important Fan pooling is. You can safely take this chart and assume that sitting on two fans is safe but in lieu of raid buffs, favorable Flourish usage and add phases pooling up to three to four will always produce better results. We also want to try and push Fan Dance III into any buff window for a bit more damage.

















Single Target Priorities - Under Technical
GCD Priorities:
Fountainfall, Bloodshower, Reverse Cascade and Rising Windmill if they are about to expire
Saber dance if we are at 80 Esprit
Standard Step if available
Saber Dance if we have 50 Esprit
Fountainfall
Combo’ed Fountain if you have been in combo for awhile
Bloodshower
Rising Windmill
Reverse Cascade
Combo’ed Fountain
Cascade
oGCD priority remains the same as above

Ok so why are things different under Technical?

The first and most obvious difference is that spending Esprit becomes more impactful. On average we will generate 14+ Esprit per GCD under Technical. Dancing at 80 Esprit could easily result in you overcapping 20-30+ Esprit resulting in a bigger DPS loss than just delaying SS.
You may also notice that Rising Windmill is much lower on the list. This is mostly because when we are under Technical finish, we are also under Devilment and the impact of our GCDs and abilities are higher overall. Just to go a bit more in depth here using RW is on average a +75 gain over our normal GCD rotation dropping it means we are losing 75p somewhere down the line (the time you have to hit cascade most likely). Overcapping 10 esprit is a 60p loss, given our averages if you use it at 80, on average you won’t overcap but you still have a relatively high chance to and we need to examine the impact of that. 10 Esprit is 60p but this Esprit will be used within Devilment and Technical. Making it roughly worth roughly 72p (60x1.05x1.05(DH)x1.1025(Crit)). If we are pooling properly the effect of the RWs feather most likely has no impact on our buff window so, in my opinion, we don’t need to consider that potency as boosted. Therefore it’s a 72p vs. 75p trade which is close enough to where I think we err on the side of good luck. Ultimately if you are doing a Flourish post Technical, this problem doesn’t exist but if you do it before you will face this dilemma a lot.
The objective here is to get as much potency in our buffs as we possibly can without dropping any resources.


Openers
Let’s talk about Open Position

Before we get into the actual openers that we have listed / tried and that work to some degree I wanted to spend a bit of time talking about they why. First we should start by examining the overall goal of the opener:

Maximize our total Raid DPS Contribution

Ok great, now that we went over that let’s go into what all of that entails:

How much DPS does our partner gain or lose from our Devilment timing?
How much DPS do I lose or gain from the Devilment timing?
How much DPS does the raid gain or lose from Technical timer?
How does our opener set up our CDs throughout the fight?
How does our CDs throughout the fight effect our partner and the raid?
Are we fully utilizing our kit in the opener?


As a Dancer a good bit of our overall damage is baked into the damage our group is doing, so that always needs to be weighed against what we gain and lose from adjusting our CDs, namely Devilment and Technical Step. And as you will see in this section - that makes things super complicated.

Let’s examine what is better for our DPS first:

Flourish after Technical. This is first because it’s probably the biggest one. This has an impact on not only our opener but also how we handle flourish throughout the fight. If it is after Technical it is very hard for us to drop Rising Windmill, if it is used before we are very likely to drop it.
Devilment after Technical is better for us. This may come as a surprise, because it did to me as well but the simulation agrees with this assessment and after further examination - I do too. While Technical is a huge potency gain over our other GCDs it also provides more Esprit for us and it only gets stronger the longer it is up. You could easily be trading away 2-3 GCDs under Devilment. Furthermore you open up an additional 7 seconds under Devilment where you can dump your feathers. Over the course of a 6:30 fight the Sim, on average, gets 30-40 DPS more from a Devilment after Technical than before. That being said, 30-40 DPS isn’t a huge hit so Devilment pre-Technical is something we can still utilize if need be.
Precasting a Dance. In any opener you should be precasting one of our two dances, period. Precasting Technical is objectively worse, but not terrible. Displacing the time we spend dancing to something out of combat we can see a gain in 2-3 GCDs. The main problem is that the 0.5s timing of the buff is pretty terrible for openers and hits a lot of dead time and wind up time. It also produces less Esprit for us because of that. You also only want to precast the dance at 5s because you gain nothing from the extra 10s on the pull (We aren’t going to use Technical at 105, that is terrible for raid buffs). Precasting Standard on the other hand can be done at the 15s mark on a countdown allowing us a Standard at 0s and another one to begin at ~15.5s mark. This gives us two Standards under potion and puts the second one right in the middle of our raid buffs. The simulator has precasting Standard thoroughly above any precast Technical opener. Though there may be timelines where having an extra Technical may be better for the raid.



Next we really need to examine how the timings effect raid DPS. It's more important to examine this gain over a fight. Since when we press our buttons is when we will press them 120s laters and so on.

With that it is best to focus on Technical since that has an impact on our raid overall and given its strict 5.5s cast, 6s application we only need to examine a few times: 0.5 (prepull), 7.5 (second GCD), 10 (third GCD),12.5 (fourth GCD). The ones on the GCD time are dependant. 

0.5s - Prepull Technical:

On average there was a reported 14 DPS loss across the board with this timing vs others.
We also lose out on a bit of DPS doing it pre-pull because Standard Finish
Most jobs are winding up during this in the opener meaning we are wasting more time in technical covering slower GCDs.

7.5s - Second GCD:
Allows for prepull Standard
Used when most jobs are done with their wind-up.
Allows us to build up some esprit before trick

10s:
Honestly no benefit to this over 7.5 and 12.5

12.5s:
Technical ends up in Trick
Compared to 7.5s other jobs report a minor loss in DPS, some get a minor gain.
We most likely won’t get a saber in the trick opener
Is prone to drift to the point you are dancing during raid buffs

7.5s and 12.5s are the most favorable times from my observations and from talking with other DPS and how it affects their rotation.

Next we had to figure out what openers we could build around each of those timings and ultimately building an opener around the 12.5s was a lot harder because it either meant doing an earlier Devilment or doing one after Technical, but the one after Technical would result in a big DPS loss for our partner. Therefore we arrived at the conclusion that 7.5s was the best time in practice, for not only our DPS but also the raids DPS.

The next thought comes into where you place Flourish vs. Devilment. We wanted both of them after Technical because they are both a DPS gain after technical and we also wanted Flourish up before we hit our first rotation GCD since the Cascade is relatively low impact in the opener. For a good time we decided Devilment earlier was better because it allowed a later flourish but few ideas where thrown around and eventually Fox propose just using RW as a filler in between. This puts Devilment at around 9.2s which is more favorable for BLM/SAM/RDM and it doesn’t incur a large loss to other DPS (over the course of the fight) if none at all. Thus far this opener has simmed better in all situations.






Opener Information Here
Preferred Opener
 Prepull Standard Step (~15s before fight)
* Pot at 2s in the count down
Standard Finish at 0 (You need to be about 13 yalms in, so pop sprint and take a step forward before clicking)
 ***Optional - Devilment can go here instead of later. Please read below for more information
 Begin Technical Step
Do your four steps
 Use Technical Finish
 Use Flourish
 Use Rising Windmill
 Use Devilment
* If you have a Ninja, wait another GCD before using Fan Dance III + Fans for better trick alignment(Only valid for the opener)
Continue on with your priority system
Footnotes / Deep explanation: 

*** If you do Devilment early make sure you wait and use your second Devilment AFTER Technical

If we are just examining the opener up to the first 45 seconds our placement of Devilment doesn’t matter too much. Here are the sim results. These results portray a full party buff  with no additional party buffs included and ran 5000 times:



This is roughly a 19  DPS increase(As you stack more party buffs the difference between the two lessens), which is really nothing in terms of the first 45 seconds. Hitting Devilment at the right time for another DPS can result in an additional 200-300 DPS in this timeframe. So it’s important that you communicate with your partner and discuss which timing is better. For blind references a DRG prefers it early while most other jobs will prefer it late.

The biggest thing is when we hit our next Devilment. Over the course of a 390s Simulation the gains from hitting Devilment AFTER Technical only seem to get better. Below you can see what the difference looks like:




A +54 DPS swing over the course of 390s is actually huge, especially when JUST comparing how an opener affects our damage. The biggest question is “Why does it work out like this?”

Well during our opener we start off the fight with no feathers and no Esprit. We are in a build phase and the number of oGCD slots we need is far, far less while the number of sabers we get is even more-so less. Because of this we don’t really lose much dancing during Devilment because we aren’t closing off any used oGCD spaces. The opposite is true when we get into midfight. Our second technical we will most likely walk into it with 2-3 feathers and 50-80 Esprit which makes us a lot busier here. So much so that closing up 5 seconds of GCDs and oGCD slots starts to become damaging. This is when the later Devilment gains.

In general our partners are hardly concerned with the later timeline. DRG loses at most 14 DPS over the course of a fight with a later Devilment, while Ninja gains from us pushing it back and other jobs seek to benefit from that as well.

So the main point, if your partner wants the early Devilment then do it, but make sure that you push Devilment back until after Technical for the following one.














Other possible openers - Bear in mind these are slightly worse than the one listed above but may have applicable uses:

Flourish Early:
 Prepull Standard Step (~15s before fight)
Pot at 2s in the count down
Standard Finish at 0 (Within 15 yalm range, the range at which a tank can use their ranged ability)
Flourish
Begin Technical Step
Do your four steps
 Use Technical Finish
Devilment
Use Rising Windmill
Enter Priority System


Prepull Technical(Long precast time):
25s Precast SF
7s Precast (Up to 15s if you would get a usage)
Technical Finish at 0
 Flourish or Devilment
Standard Finish
Flourish or Devilment
Rising Windmill
Bloodshower
Enter Priority

Two GCD Delayed Technical(12.5s):
SF at 0
Flourish
Rising Windmill
Blood Shower
Devilment
Technical Step
FDIII
Proceed with priority system



Devilment Placing
One of the most common questions is why is Devilment after Technical better than before? And I understand the question, if we just look at potency values Technical Finish is a huge chunk of potency that is far and wide our best DPS / GCD cast. The raw explanation is just that we can do more with the other 7 seconds, especially during technical finish and this is mostly due to the massive amount of oGCDs we are dumping into that window. Here is an example below:

As you can see here Anastasia used a post-technical Devilment here. If they had done it prior its cast would have been some time around 2:02:

Meaning that the buff would have worn off as Standard Finishes damage was realized. So let’s examine the potency gained after that fact they get the following abilities off under Devilment:

Fan Dance I x 4 - 600 potency
Fan Dance III x 2 - 400 potency
Fountainfall - 350 Potency
Reverse Cascade - 300 Potency
Saber Dance - 600 Potency
Cascade - 250 Potency
Total: 2500 Potency

Which is a lot greater than buffed 1500 Potency of Technical.

Reopening

One topic that I have not addressed yet is re-opening. This has been something I’ve been examining and testing for a few months now. Ideally when we enter the Technical buff window our first GCD will most likely be Saber Dance. This is because we are storing Esprit for our buff windows. In the standard opener this creates a situation where we want to Saber, before Devilment which isn’t always ideal. When possible by either opening with Devilment Early (Only a gain with certain jobs), or because of specific Technical holds we want to actually flip around the placement of Devilment and Flourish. For instance if you just follow the standard opener your re-opener will look like this:

	Technical Finish > Flourish > GCD >  Devilment > GCD

But if you have the opportunity, by either forcing Technical back a GCD due to mechanic holds, better buff alignment or because you started with a Devilment early opener, it would be a gain to do the following:
	
Technical Finish >   Devilment > GCD >Flourish > GCD

The times I wouldn’t recommend doing this are when you need to hold Technical Step to do this and it would either cause you to be dancing during buffs, or if it would cost you a cast throughout a fight.



Technical Finish Talk
We know when to Technical Finish, but when do we technically start? 

Quick Term Talk(Photo courtesy of Arashi)


So you are probably wondering why there is a whole section dedicated to Technical Finish? Because it's a complicated GCD buff / skill. Technical Step is tied to the GCD and this comes with some problems. At 2.5 GCD, if we were to just GCD without clipping, the moment Technical Finish is ready we would be 1/5th our way into our next GCD meaning we would end up not pressing Technical Finish until 2 seconds after it comes up. This annoying feature is called Drift. This effect varies with Skill Speed and there are some interesting things to note here. So let’s talk about Drift.

Below is an example of what I am talking about(Note these times are using previous openers that are no longer recommended. The effect that charts explain still remains relevant):

2.50 GCD
Table 1	


Actual time is the moment we would end up using Technical Dance based on a GCD of 2.5. This Drift is actually a fluctuation of our GCD. In Table 1, at over 8 minutes, Technical Finish Drifts around ~8s easily out of party buffs. 
2.45 GCD
For another example here is what 2.45 looks like:

Table 2


At a 2.45 GCD we could keep our GCD running and only drift Technical Dance 0.3s over the course of ~8 minutes.

Technical Drift
Here is a sheet that goes over the Drift within each GCD tier up to ~2.38: 
Technical Drift Times at X GCD

As you can see in regards to Technical Drifting, 2.45 is a good GCD but there is another method to handling this Drift. We can just simply clip our own GCD in favor of lining up Technical Dance. This will be pretty noticeable when the delay is ~1s - 1.5s, but at a 2.5 GCD this delay is only 0.5s each clip. On the sheet above you will find this:



So over the course of 8 minutes we lose ~2 seconds worth of GCD time to keep technical aligned. A good trade, right?













Standard Drift
We also need to consider how Standard aligns.

Table 3						2.45 Standard Drift

Table 4						2.5 Standard Drift

Table 3 and 4 is the Standard Step Drift time with 2.4 CD and 2.5 CD respectively while holding for Technical Dance. The only Drift time you see above is because the simulator prioritized keeping procs over going into standard, which can most likely be fixed with a human behind the wheel.
Estimated Best Practices for Each GCD Tier

So what does all of this mean? It means that our playstyle will vary at each different GCD tier in order to minimize potency loss at that tier. There are three deviations: We hold both Technical and Standard, we hold only Technical, or we hold neither. I have taken some time to plan out a base 600s rotation and figure out what methods we should employ. This factors in things like: How much Technical Drift, how much damage we lose employing each method, and Standards in Trick Attack (but came to the same conclusions). Again, this is for a 600s rotation, which won’t happen often and the methodology you employ may change depending on the fight. Jumps, duration, and add phases can all effect if you Hold or Drift; Table 5 represent this.

Important note: If you are using an opener that utilizes a pre 10s Technical Finish then drifting technical isn’t a terrible practice since it would take awhile to fall out of the buff windows. It is recommended that you let Technical drift at 2.44,2.43 and the 2.38 GCDs with said opener.

Table 5





The Standard Holds in the first three GCD tiers will feel almost non-existent at around a 0.1s - 0.3s hold while the holds on Technical will be about 0.5s - 0.75s, which will feel really noticeable and disruptive. If I felt the Drift on Technical was large enough to effect party DPS, I always compared it to the next best option and evaluated from there. For example, at 2.47, the better practice to just let both of them Drift 1.23 seconds but that time can add up in longer encounters, so I felt the ~102 Potency difference (over 600s) was more efficient in terms of raid buff alignment. Though I have no measuring stick for that type of analysis, the answers were mostly obvious. 

Also, if your party isn’t in the habit of aligning buffs or they just aren’t a very synergistic party (lots of solo jobs like WHM/SAM/BLM, ect.) then you should always go for the method that loses you the least amount of potency.

But Who Do I Dance With?

There is a good chance that you opened up this write-up and jumped immediately to this topic, and with good reason. Choosing a DNC partner at the beginning of each fight is a tough choice, and making the wrong one could cost you greatly. Next thing you know you are getting yelled at for not washing dishes… Oh, wrong write-up.

I’m actually going to start with the less mathy answer and just be flat out honest. Any conclusion I reach below will be moot for 99% of all players. It is assuming equal skill in an optimal raid scenario. But I will dive down deep into it to examine what jobs get the most from us partnering them and look into the impact of our esprit generation while partnering them.

As for the general answer - Partner whoever is doing the most damage. This benefits us two fold because:
The person doing the most damage will be the one who most likely gets the most gain from our buffs
If they are doing the most damage there is a good chance they are doing their rotation right and will thus provide more Esprit as they are clicking more buttons.

So how do we find out who is doing the most damage? Well the most clear-cut answer is to get a parser. The FFXIV plugin for Advanced Combat Tracker is probably the best place to start. Install it, find a FFXIV overlay that you like and display it on your screen. It’s important to remember that this should never be a tool to bully or belittle someone, it should be a tool used for yourself to determine the best person to partner.

I’m on a PS4 or I don’t want to break the ToS: That’s fair, the next method is too simply look at the aggro bars. Now that aggro reduction skills are removed and pets generate player aggro you can somewhat safely (barring no deaths) assume top DPS by looking there. Feel free to partner the DPS who is higher on the list (Not the tanks or the healers). 
	I am the highest DPS on the list: Idk what to tell you, gamble on the person below you?


Ok now time to dive into the sheets and figure out what DPS gains the most from having us click the Closed Position button on them. As a huge note, read above first! This is in a perfect vacuum and player skill varies greatly! This may provide a good outline on who to partner when you aren’t sure of skill, but I would adjust accordingly if we know the players.



Below are the charts that we will be examining - Huge disclaimer: These charts are based on perfect scenarios with equally skilled players. The chances of you being in this situation are slim. This chart is a great way to tell who to partner in a run where you don’t know the players but if you are partnered with the SAM and the MCH is doing more damage, just switch to them instead! Another Disclaimer is that these charts are based off of 5.0 Numbers, I will be updating these charts for either 5.08 or 5.1 when other DPS finalize their sim tools with the changes! Bear in mind that currently MNK will benefit a lot more than shown here.








Note - I am still waiting on information from the people working on the RDM tools. I will update this as I get an answer. This information is a bit outdated as MNK has received some major changes. I will update this information around 5.08 or 5.1 Depending on the depth of changes
Second Note - Esprit Rates are not final either. I will update this sheet when I feel they are more final. If you want to help please check here to figure out how to contribute.


The first chart shows the average expected gain from partnering a specific job through a 6 minute 30 second fight. The BLM numbers are a generated average and are more-than likely lower than actual expectations. All other results are ran through a sim. It's important to remember that jobs that have Auto Crit / DH mechanics gain much less from Devilments usage. This slightly hampers its effectiveness on DRG, MNK and MCH.

The second chart shows the same thing but within the first 45 seconds.

This assumes equal skill and only one partner the whole fight. So if you aren’t sure what to set, then feel free to use this chart as a reference but please remember that results will vary based on player skill.

We can easily notate some trends such as how some jobs really favor the burst we provide during the 120s windows, and how a job having a CDH buffs makes the buffs a little bit less desirable compared to others. 


The last chart shows what we gain from partnering each job. These numbers are pulled using their average GCD (Like how many weapon skills they use over 60s) and equating that into DPS gain for us. As you can tell here the effect of a different partner is pretty minimal with the biggest increase being around 70 DPS over an encounter (almost nothing).


The Partner Shuffle

It wasn’t an unreasonable thought to think that swapping partners was a possibility. DNC provides a solid 5% DPS buff to at least one member, which is exclusively better on the DPS dealing more overall damage but not at every single point in time. We also need to consider how strong Devilment is as a cooldown. If you noticed in the chart above that Ninja gained almost as much as BLM from our buffs? It’s because how well they synergize with Devilment. So this sort of creates a dilemma for us. BLM takes a bigger advantage of the 5% buff but Ninja just does better when Devilment is up, so the most obvious solution is partner swapping.

Let’s discuss a few issues with partner swapping though:
Whenever you end closed position on another member they immediately lose the Standard Finish buff. This means at minimum we go about 4 seconds without generating esprit and without a member getting a 5% buff. This is a relatively small amount but over the course of a 10 minute encounter this could definitely cost us a single Saber Dance. So we need to make sure the swap is worth it.
Since our swap is tied to when we use Standard Step we have some odd swapping times. Looking at the preferred opener you can swap at 0 > 15 > 45 > 75 > 105 > 135 > 165. Furthermore the 15, 75 and 135 swaps would be in the middle of raids buffs, which are just times where we don’t have oGCDs to spare and furthermore, swapping then is doesn’t help much of anyone. Swapping is also a bit clunky but can be alleviated with some choice macros.

Because of these two issues our ideal times to swap are roughly every 60 seconds starting at the 45s point. Standard Step can also drift based on our prioritization during Technical Finish and our GCD tier, so you more or less want to swap before Devilment and swap after Devilment right before you use Standard Step. We want to get in jobs that get more from Devilment vs. jobs that just deal more damage. If you are playing with equally skilled players, I highly recommend looking at the chart and if a job is getting more benefit from us, but doing less damage than another job that means they are getting higher returns from Devilment. BLM vs. NIN is a pretty easy one to figure out but you should also Consider other jobs on the chart. I think its a safe bet to say that swapping if you have a BLM in your group is entirely possible especially during the Non-Devilment windows. Swapping is a very advanced technique and I only recommend doing it within an organized group where you are sure the gains are worth the losses and its definitely not something I’d stress about while learning a fight. 





AoE Utilization
On the topic of AoE, on Table 6 is the average values of our combos while dealing with multiple mobs (the values are generated from a sim ran 1,000,000 times and compared against averages calculated by members of The Balance Discord’s DNC channel). The first column is to represent when we use our single target combo but use our Fans and Esprit to deal AoE damage.

Table 6


Few things to note about this table. 
The AoE combo takes the lead on even as few as 2 mobs. 
If you use Flourish and there are 2 mobs you will want to use the Fountainfall proc and Reverse Cascade proc that you are given. 
If there are 3 mobs or more you can ignore the Single Target Procs. I would still consider using them here if one of the mobs has higher HP than the rest since they still have cleave potential 
When there are +4 mobs use neither.
If there are 4 +  mobs, do not use Standard Step on CD as it is worse than just doing your AoE combo. Consider doing it next to the mob with the most HP if one target is particularly meaty. Also still use it to maintain the buff on yourself and your partner. Please see the chart below for SS Potency/GCD per GCD tier per unit:





Holding Standard Step
This topic will be much shorter, but I think it needs a topic of its own. The main question posed here is when is it ok to hold Standard in favor of other events or fight elements. In the priority section we already have a general idea of when we can hold it there but we also need to consider other options:

Additional enemies are about the join the fight? Standard Finish has a pretty hard 25% fall off, this means that the closest target to you takes 100% of the damage while any additional enemies take 25% of that damage. If we plug that into a vacuum we could easily conclude that you could nearly hold Standard Step for 27 seconds just to hit four different targets with it, but it just isn’t that simple.
We first need to consider if that hold would really allow us for more DPS, it isn’t unlikely that the adds are up long enough to where you couldn’t use a Standard Finish on them anyway. Most add phases in this game last 30-60 seconds, some even being longer. The best case is to simply try it without holding at first and see how many Standard Steps you get in on the adds and then try it with holding and weight it against that.
The boss is about to jump? This is another question that is a bit hard to answer without actually mapping out the fight. Removing the windup time on Standard is a pretty big DPS gain. In a vacuum you can hold SS for about up to 13s before its a loss, in order to precast its full cast during a boss jump. The more complicated answer is that you need to figure out if you would lose a usage doing that method. If you won’t lose a usage it is a gain 100% of the time, if you would its a net loss.




Improvisation

Our capstone ability may seem pretty underwhelming at first, and then later you realize it actually kind of is. This functions more or less like meditate except your party running out of range makes it worse. In its current iteration it generates 3 Esprit  + 1 Esprit for each member within 6 yalms to a maximum of 10 while in combat per each actor tick (3 seconds). It also provides a 10% healing received increase to members in range.  When you activate this ability it prevents you from auto attacking and if you move or do any action it immediately cancels. Upon initial testing, I have almost always gotten the first tick from it, though I have had one case where I didn’t, and the healing buff hits all party members and seems to remain for roughly 3-5 seconds (Similar to that of PoA). In general we have about 3 use cases for this ability:

The most obvious case is during downtime. You can get at most 50 Esprit from using this ability so if you are going into a phase of long downtime make sure you have sub 50 Esprit so you aren’t wasting some of its effectiveness. The one important caveat is that if you can precast Standard Step in a way that allows Standard Finish to be used right at the start of the next phase, you will want to cancel Improv(Preferably right after a tick). If you start precasting too early, that's ok too since Precasting Standard and using Improv for a tick are roughly the same ~+30p gain over rotational choices, though if the early precast doesn’t give you an extra Standard Step in the fight it's a bit of a loss.
Single tapping it for quick spurts of healing. You can take advantage of the 5 seconds you get from this buff during heavy healing phases by just click tapping on it and then moving. This could be a great tool if utilized during prog at the cost of roughly 1/4th an Auto Attack
Lastly is fishing. Fishing is when we click this button, hope to gain esprit at the cost of a slight delay in our Auto Attack timer. The trick is to move immediately to cancel it so that way you aren’t delaying your auto attack more than the 1/4th that it normally does. If you have some method of tracking your autos, you can time this action to be used in between autos and lose nothing. This is a bit of a gamble because in order to get a usable number you need all 7 members within range. Otherwise the single tap offers you no gain (4-9 Esprit, which is unusable) and costs you roughly 1/4th to 1/6th of an auto. I generally don’t recommend doing this because the gains are abysmal even best case you get 10 Esprit over two minutes resulting in a very minor 15-20 DPS gain but if you want to do it, do the following:

Ensure that all 7 members are in range.
Tap the Improvisation button
Immediately move to cancel
Enjoy your 10 Esprit















Party Composition Effect
Just a minor section but here is a neat chart that shows you how our party composition effects the personal DPS of a DNC. A few things to note and maybe talk about with your group. It’s pretty obvious that jobs with buffs that align on the 120s Window are huge for us. It makes up a good chunk of damage. Dragon Sight itself should only value to .83% gain over a fight but we easily turn it into a 1.6% buff. I’d definitely talk to your raid and examine logs to see if you may be deserving of the DRG tether.




Q & A
Q. How do you think DNC compares to other ranged DPS? 
A. We’ve had a pretty good idea of the numbers for quite a bit now but now that things are out and people can see the results, I think I will take some time to discuss my opinion on where DNC stands and where ranged DPS stand in general.

Given our current estimations with spreadsheets and sims, DNC is a bit behind BRD and MCH even when including their overall impact of Raid DPS. By a bit behind, in the optimal scenario that a DNC can partner a MNK, they are roughly an estimated 20-30 DPS behind MCH, and another 60-70 behind BRD. Now these numbers are incredibly small, if I were to just look at the simulations I would come to the conclusion that the DPS are really well balanced. DNCs buffs will just get better when you start buff stacking, but MCH will get better as you start stacking buffs too. Regardless the difference is small. Most groups would hardly notice a difference in raid DPS when it comes to bringing one or another. But that isn’t the problem. 
The problem is more of a perception issue, and maybe a site like FFLOGs is to blame but at this point it is apart of our community and we need to accept how it affects things like this. It is really hard to see, if not impossible to see the overall DPS gained by having a DNC and really easy to see that they are just dealing less damage.  Depending on the partner we have DNC giving an estimated 1400-1800 DPS over an encounter, most of that coming from buffing a single player, which is also reflected a bit into the averaged out analytics screen of FFlogs. This problem is exacerbated even more as you climb in the percentiles because higher percentile DPS are more likely to be partnered while the DNC is less likely to be partnered. This creates a skewed perception that DNC is weaker than what it actually is.

That isn’t to say there isn’t some truth to that. Even in the optimal scenario where raid buffs are aligning and DPS are perfected in their rotations DNC still stands to lose a bit, so when we take out the perfection and the raid buff alignment that gap will just widen a bit more. Being reliant on how your party performs is ok to a degree, but at some point the reliance just becomes too much. This is the main problem that DNC will suffer from. DNC does peak higher than both BRD and MCH though, so there is a good chance we will seem them being viable in speedruns.

That being said for 99% of all people reading this document, the ranged DPS you take or play will hardly make a difference on the DPS outcome of the raid. The differences are so minor that you really need a microscope to see them.

It’s really when we get outside of the role that we start to see the main issue. Spreadsheets and Sims currently have ALL ranged DPS a solid 9-10% behind the overall contribution of other DPS. SMN has a similar raid cooldown to bard (in terms of effectiveness) but is proving to be 300-500 better than them with their personal DPS. MCH has no raid buffs and loses handily to both SAM and BLM by a solid 1-1.2k amount and DNC, even with their amazing utility loses to even Ninja in the overall macro of things. The question remains if the 1% stat boost will secure a ranged spot, but the difference - if any, will be minimal. It is personally a bit frustrating that SE designs fights in favor of melee uptime and minimal caster movement, yet still thinks that ranged DPS need a heavy handed tax.





Q. Will you release the SIM? 
A. Current Simulator Source code -- Note, I’m a novice programmer please be gentle:https://github.com/eliroo12/SimulatorSource

Current Simulator "Just Run" Exe: https://github.com/eliroo12/Simulator

Also general spreadsheet work: https://docs.google.com/spreadsheets/d/10I3JZAdKGqtH3Xf_RTanNNKLZHTxr_l5yjQEudlV0fw/edit?usp=sharing

Q. How does the sim work? 
A. It pretty much just travels down a timeline 0.01s at a time. The opener is generated into a table and executed as told, when told, all other objects are handled with a priority system. 

Buffs are given a start time, activation time, duration, and are executed on CD (for other job buffs).

Esprit generation is looked at for each individual party gcd. Currently you have a party of 7 others. During Technical it checks their GCD for Esprit, otherwise it just checks your partner. If rates are different based on jobs, my SIM will be able to replicate that.

It also holds Technical and/or Standard based on your GCD tier.





Credits and Special Thanks

Tsuki / Anastasia Yumi - Theorycrafting, creating a quick FAQ and helping to organize things early on
Fox Dyo - Theorycrafting and lots of rotational play testing
Im’hotep Rah - Theorycrafting, Mathcrafting
Sana Cetonis - Theorycrafting, Mathcrafting
Emmi Risumi - Mathcrafting and early spreadsheet findings.
Theoryjerks / DPS Tools discord members for trying out different buff times and reporting expected DNC gains - 
Jahaudant - SAM/MNK Results
Kaladin - NIN Results
Shalfu - NIN Results
Sheenda - NIN Results
Evie - DRG Results
Galen - MNK Results
Nemekh - SMN Results
Fryte - SMN Results
Turing - RDM Results
Elevation - SMN Results / BLM input
Lynn - MCH Results
Furst - BLM Results
Xenitan - BLM Results
Emiin - Tank Results
Bevin Bevin - Theorycrafting
Zeppe Monado - Theorycrafting
Ilya Kannou - Assisting with sim programming when I got lost
Saerys - Lovely wife who proofread this document.
All the people who submitted Esprit findings, lots of names and you were all a big help!
Anyone else who helped during the Early theorycrafting phases!





