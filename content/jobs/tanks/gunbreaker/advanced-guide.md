---
authors:
  - Balance GNB Staff
patch: "5.58"
lastmod: 2021-10-25T21:43:01.100Z
changelog:
  - date: 2021-10-25T21:43:14.057Z
    message: Created page
---
# What’s Next After The Basics?

### Raid Buffs

| Job | Icon                                                                                                                                                                                   | Name             | Effect                                               | Cooldown |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------- | -------- |
| NIN | ![icon](https://xivapi.com/i/014000/014857_hr1.png) | Trick Attack     | Target takes 5% more damage <br>15s duration         | 60s      |
| DRG | ![icon](https://xivapi.com/i/012000/012578_hr1.png) | Battle Litany    | Critical rate increased by 10% <br>20s duration      | 180s     |
| MNK | ![icon](https://xivapi.com/i/012000/012532_hr1.png) | Brotherhood      | 5% damage increase <br>15s duration                  | 90s      |
| DNC | ![icon](https://xivapi.com/i/013000/013709_hr1.png) | Technical Finish | 5% damage increase <br>20s duration                  | 120s     |
| BRD | ![icon](https://xivapi.com/i/012000/012601_hr1.png) | Battle Voice     | Direct hit rate increased by 20% <br>20s duration    | 180s     |
| SMN | ![icon](https://xivapi.com/i/012000/012681_hr1.png) | Devotion         | 5% damage increase <br>15s duration                  | 180s     |
| RDM | ![icon](https://lh4.googleusercontent.com/ebXGOdXOLv7jiAEDE59XNd3mrdjBKlvrGY8x5pfGO2xyGS_G7_6LFTpk_O-ZeFCDVBqJxaWoJElvhtjcUEr93DnU4nCQpxdoOggXfgnC1ImMKGu3CICQSoJAkDr0MEj6pWbDCsJN=s0) | Embolden         | Increases physical damage by 10% <br>Decays over 20s | 120s     |
| SCH | ![icon](https://xivapi.com/i/012000/012809_hr1.png) | Chain Stratagem  | +10% critical rate on target <br>15s duration        | 120s     |
| AST | ![icon](https://xivapi.com/i/013000/013245_hr1.png) | Divination       | ~6% damage increase <br>15s duration                 | 120s     |
| AST | Various                                                                                                                                                                                | Cards            | Target gets ~6% damage increase <br>15s duration     | 30s      |

GNB has a damage toolkit that is very well suited for aligning with most raid buffs. With a one minute burst cycle, our **No Mercy** window should fit cleanly into every use of every non-**Brotherhood** raid buff, assuming that buffs aren’t being drifted due to player error or downtime/phase transitions. 

Because our toolkit is extremely flexible, we should change the order of our skills based on what buff composition we have. For example, if Red Mage is present, we try to put **Sonic Break**, **Blasting Zone**, and **Bow Shock** under the maximum **Embolden**. Because raid buffs interact multiplicatively and not additively, we also try to get our strongest abilities under the maximum number of raid buffs active at the same time, and should carefully consider how to fit our biggest potency skills into the most raid buffs. 

Because **Brotherhood** is on a 90s cycle, only every other one will align with our **No Mercy** windows. However, we should still aim to use the **Gnashing Fang** combo, **Blasting Zone**, and **Burst Strike** under **Brotherhood**. Since **Brotherhood** and **Bloodfest** are the same cooldown, we can use **Bloodfest** to get two **Burst Strikes** in **Brotherhood**, while still having two Cartridges ready for the next **No Mercy** window. 

With this said, we do not hold our abilities for long amounts of time to compensate for a player not using their raid buff on time. This can cause us to misalign from the rest of the raid buffs, or cause us to lose uses of our skills. Some fights require us to think critically about whether or not we use skills outside of raid buffs in order to get more uses or DoT ticks. In general, more uses or DoT ticks are worth more than getting something under raid buffs, but this is going to be a fight-specific optimization to look at and will depend strongly on what raid buffs your group has.

## Maximizing Skill Uses

We should always aim to get the maximum number of uses of our skills as possible. Missing a use of an oGCD skill is a direct potency loss. For example, if you do not hit Blasting Zone as close to on cooldown as possible, and it causes you to miss a final use before a transition or before the target dies, you have directly lost 800 potency at minimum (more if it cost a use of it under No Mercy). Maximizing skill uses should come as a natural part of fight optimization, determining which opener to use, as well as how to handle downtime (i.e. hold XYZ for after or try to squeeze it in before). 

## Frequently Asked Questions (FAQs)

**Q: What food and potions should I be using on GNB?** \
A: Highest level strength potions available. Always use HQ. Food will vary from tier to tier based on what foods are available, but usually it will be Crit/Det food or Crit/Skill Speed food.

**Q: Should I be using X opener if Main Tanking (called Primary Tank in some regions)??** \
A: Being Main or Off Tank (Primary or Secondary Tank) does not affect what opener you use. You will almost always be using the standard raid buff opener \[see #gnb_resources] unless there is a fight specific opener for a fight. 

**Q: *Gnashing Fang* is ready earlier and earlier before *No Mercy*, why is this happening?** \
A: Previous GNB guides have thought of the rotation in terms of a 60s/three minute loop. In practice, the GNB rotation is much less a loop and more of a priority system. GNB is more accurately an “if X is ready, do X, else do Y” class. Therefore, after the opener the rotation priority is as follows (with one caveat, mentioned following the priority list):

1. Use **No Mercy** on cooldown.
2. Use **Gnashing Fang**, **Sonic Break**, **Blasting Zone**, **Bow Shock**, **Bloodfest** on cooldown. 
3. Spend all Cartridges inside **No Mercy** where possible. 
4. Use **Rough Divide** twice inside **No Mercy** (unless a use is needed for uptime)
5. Outside of **No Mercy**, only spend Cartridges on **Gnashing Fang** or if you would otherwise overcap on Cartridges.
6. Use **Solid Barrel** combo on 1 target, **Demon Slaughter** combo on 2+ targets if nothing higher on the priority is available. 

* Since **Gnashing Fang** and **Sonic Break** have their cooldown reduced by skill speed, we need to delay them by one GCD every minute by adding a filler GCD. Otherwise they will end up being before No Mercy which is a significant loss. 

Because GNB is more of a priority system than a strict rotation, the rotation is very flexible and can be adjusted to the needs of the encounter and group composition. 

**Q: Do I hold Bloodfest for No Mercy?** \
A: **Bloodfest** should not be held for the next **No Mercy** window. Because it has a cooldown of 90s and **No Mercy** has a cooldown of 60s, **Bloodfest** will naturally be inside **No Mercy** every three minutes. As **Bloodfest**’s cooldown is getting close to finishing, spend Cartridges to avoid delaying **Bloodfest** or overcapping on Cartridges. 
