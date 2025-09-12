---
title: Basic Guide
card_header_image: /img/jobs/ast/basic.png
authors:
  - Balance-AST-Staff
  - Ahriqi
patch: "7.3"
lastmod: 2025-08-07T19:32:31.710Z
changelog:
  - date: 2021-10-26T19:28:39.310Z
    message: Created article.
  - date: 2022-04-12T05:46:41.933Z
    message: Updated for Endwalker
  - date: 2024-08-11T19:32:35.627Z
    message: Updated for Dawntrail
---
# Introduction

This is the Basic Guide for Astrologian. This will cover enough ground to get you started with AST, being able to handle this relatively high-input job in content at level 90. It is intended to be well-suited for any player, and if you take the advice and techniques from this guide you should be able to handle yourself well-enough in endgame content.

As this guide is relatively basic and does not go into any of the complexities of Astrologian, there will, of course, be gaps of knowledge, and some aspects of this fairly high-intensity job will be glossed over. That is okay, the skills here will still be foundational and fundamental, and a player can use these tools to advance their own gameplay.

# How the Job Plays

Astrologian is a pure healer. This means the job’s healing capabilities are focused on strong GCD heals with Heal over Times (HoTs) attached, and a simple Damage Over Time (DoT)-nuke rotation for DPS. Unlike its counterpart, AST is not a job balanced around forced GCD healing, and has a litany of oGCDs to supplement its kit. As such, your main focus as you play will actually be using your oGCDs primarily to cover as much healing as possible.

If there is one way to think about "Astrologian as Healer", it would be that the job has a focus on Investment. Click button now, get value later. WHM gives you immediate value, lending it to rather reactive healing profiles. SCH has actions that simultaneously conflict and enhance each other, leading to a carefully thought-out plan for the next two or so minutes. AST wants you to use an action before you need its full potential.

Astrologian has an important ability called Earthly Star. You will want to be getting as many uses of this ability as you can. It should form the backbone of your healing plan in a fight.

As a Caster (yes, Caster) in FFXIV, your main goal is to maintain as high an uptime as possible. A vast majority of your spells should consist of Fall Malefic, with keeping as close to 100% Combust uptime as you can. Good play is going to mainly come from this uptime discipline.

Astrologian has an alternative gimmick mechanic to its kit, known officially in game as "Arcana", but most often referred to as "cards". While a shadow of their former selves, learning how to use these tools can still be important for their party damage-enhancing capabilities, effectively using the job in leveling and criterion dungeons, and future-proofing a skillset if they ever make the actions more impactful.

# Resources and Job Gauge

Astrologian has four resources present on their job gauge: they are the currently held 4 cards from the most recently opened pack via Astral or Umbral Draw. One of these cards focuses on damage enhancement, one focuses on curative effects, and one focuses on defensive effects. The final is our "Minor Arcana": a card that is used like an oGCD ability rather than a buffing tool.

![](https://private-user-images.githubusercontent.com/94213043/356900474-259d07cb-13a4-4793-a71f-cc6e96164187.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0MDM4ODksIm5iZiI6MTcyMzQwMzU4OSwicGF0aCI6Ii85NDIxMzA0My8zNTY5MDA0NzQtMjU5ZDA3Y2ItMTNhNC00NzkzLWE3MWYtY2M2ZTk2MTY0MTg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDE5MTMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjYjBkZjQzZWI2Zjg3ODcxMmExZGYyMDc2NzZkZmUwZDhhOTZkNWM5ZTc2YzExMTYzNjRiMzFkNzIyZGY0YzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.u2Oi5qPkPCOnSR0CAa2XJYJD6Ixz8ighdKQSLyg51hE)

The simplified gauge looks like so:

![](https://private-user-images.githubusercontent.com/94213043/356900477-7345282c-ea24-405d-bbcf-5e374d2bd628.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0MDM4ODksIm5iZiI6MTcyMzQwMzU4OSwicGF0aCI6Ii85NDIxMzA0My8zNTY5MDA0NzctNzM0NTI4MmMtZWEyNC00MDVkLWJiY2YtNWUzNzRkMmJkNjI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDE5MTMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE0MmE3YjQyZjlmODNjNDVmYWVjYTM5N2EzNzEzZmY3N2RiNDRmNjQ5ODM1ZDJhZDgzN2Y3NzQ0ZTRlZTY1ZjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.sFTTk8jsW8FjaaJ-FgzxdTtPSnbNEDu1SeipIiQBd_M)

The breakdown of cards, effects, and respective play buttons is as follows (from left-to-right on the job gauge):

The Balance & The Spear - increases damage dealt by party member. 

* The Balance: increases 6% for melees and tanks, 3% for ranged and healers. 
* The Spear: increases 6% for ranged and healers, 3% for melees and tanks.
* Play I

![](https://private-user-images.githubusercontent.com/94213043/356901298-faad6988-86c1-44c3-845d-383c49c1f4b6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0MDQ3NjYsIm5iZiI6MTcyMzQwNDQ2NiwicGF0aCI6Ii85NDIxMzA0My8zNTY5MDEyOTgtZmFhZDY5ODgtODZjMS00NGMzLTg0NWQtMzgzYzQ5YzFmNGI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDE5Mjc0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2MjNjZjFkZGQyOTkwNmEwODNiOGI2NTQzYzQ2YmFkOGVlZWRlMzNhZGViMGZhYjA4ZDA4MTYxYWJhMTJjYzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4rWON2bDPf-2rYKXfsO8LBrq_HJ53n3dmPCqPefEVHs)

The Arrow & The Bole - defensive enhancements on party member

* The Arrow: increases healing RECEIVED (not output) by party member
* The Bole: 10% mitigation on target for 15s
* Play II

![](https://private-user-images.githubusercontent.com/94213043/356901301-86d3f6d8-8431-4b1a-a863-baf3c71ad99a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0MDQ3NjYsIm5iZiI6MTcyMzQwNDQ2NiwicGF0aCI6Ii85NDIxMzA0My8zNTY5MDEzMDEtODZkM2Y2ZDgtODQzMS00YjFhLWE4NjMtYmFmM2M3MWFkOTlhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDE5Mjc0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEwNjA0OTIwMmFlOGY2MjdmMWFlYjIzNTg1NTkzNzQzNDE0MzI3MjI1N2IxMGNmZDc5YzA0Yjg0NmViMDEzNzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.auCwpC_3yYBvPY5UrhAdZ-QG5I2--VyPTORfOV6WVrY)

The Spire & The Ewer - curative effects on party member

* The Spire: 400 potency shield on target for 30s
* The Ewer: 200 potency regen on target for 15s, totaling 1000 potency (stronger than Essential Dignity!)
* Play III

![](https://private-user-images.githubusercontent.com/94213043/356901303-74329c8e-0385-42e4-b175-34ff61076ff8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0MDQ3NjYsIm5iZiI6MTcyMzQwNDQ2NiwicGF0aCI6Ii85NDIxMzA0My8zNTY5MDEzMDMtNzQzMjljOGUtMDM4NS00MmU0LWIxNzUtMzRmZjYxMDc2ZmY4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDE5Mjc0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY0ZjI5YzQyNmE4MzRmYTUyYmYyMzMyMzhiYmI0ZjhlZTY1MzI3NGJlOGQ1MWJiY2FlNWE0ZDFiN2MzNmNhYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.O96vMhSHK7Zf8Aop0m3JNedK24eR6Y1kFHGoIP-25J4)

Minor Arcana | Lord of Crowns & Lady of Crowns - oGCD abilities

* Lord of Crowns - 400 potency AoE damage
* Lady of Crowns - 400 potency AoE heal
* Minor Arcana

I do not have any great ways of memorizing these card effects for new players, so practice is the best way to remember them. Keep in mind, Play I cards are our damage cards, and all the other cards are some sort of weak defensive utility. They are mostly going to be used on tanks.

# Opener

With Dawntrail, our opener will be as follows:

![](https://github.com/Ahriqi/astbalanceimages/blob/main/Astrologian_Dawntrail_Opener_9.png?raw=true)

You can move Lightspeed around anywhere from immediately after the prepull-Fall Malefic to right before the Fall Malefic preceding Div.

Some notes:

* \-2.1s prepull due to how long it takes for Malefic to apply to the boss. Enemies are pulled not when casts are finished, but when casts are **applied**. Malefic takes a LONG time to apply to the boss.
* Star is labeled as -4s because that has become our bread and butter, but it can be anywhere from -4s -> ~ -19s
* Yes, even with buffs being standardized to "2nd" GCD, we still want to use Div right after our 3rd currently.

If you would like to see a general priority list for which jobs to card, there is one provided in the #ast_resources section of [The Balance](https://www.discord.gg/thebalanceffxiv). Once we have a proper graphic constructed to represent this, you will also find this graphic here.

# Divination and Card Rotation

Our rotation with cards has been significantly simplified, and is far more approachable than ever before.

Divination should still be used off-CD the same after the opener, unless a fight's downtime means you are currently not hitting any enemies while it is up.

Make sure to use Oracle while Divination is up! Do not let it expire!

Keep in mind that in dungeons, the trash pulls are part of the content! They still have health bars that need to be completed to finish the dungeon, much the same as bosses! Please use your Divination during trash pulls as well, and not only during boss pulls.

Cards are rather simple as well; as briefed above, there are two damage cards that should be the focus of our damage enhancement rotation: The Balance, and The Spear. Additionally, our Lord of Crowns is a damaging oGCD. In a standard rotation, this means after our opener at 1 minute, we will use Astral Draw and reacquire both The Balance and Lord of Crowns.

Do NOT use these immediately! Hold these actions for another minute until Divination is back!

If you do this, you will notice that the burst window will almost exactly mirror our opener. By bringing The Balance and Lord of Crowns over to the 2m window from our 1m Draw, you will be getting significantly more value out of both these cards and providing more to the encounter.

When dying, we lose all our currently held cards.

Please note: with fight downtime and with unfortunately-timed deaths, our card pack rotation CAN swap: We can be bringing The Spear into our 2m Div window and using Astral Draw halfway through the burst as opposed to normal. This is okay! You simply use The Spear, then use Astral Draw, then use The Balance and Lord, in that order.

# Key Healing Actions

There are 3 main actions in Astrologian's kit that are the most important, primary things to consider when thinking about a heal plan for an encounter:

* Earthly Star
* Neutral Sect
* Macrocosmos

These three actions together will form the core of your plan.

**Earthly Star:** As touched-on above, Earthly Star will form the backbone of the entire plan. This action is an extremely potent heal, but also does a considerable amount of damage (more than Fall Malefic!). Thus, it should be used off-CD as much as possible. This does not mean it should be used for damage and damage alone, but rather our other healing tools should bend *around* Star in order to get the most value out of it.

For example, if the party takes raidwide damage and need healing, but Star is currently on the ground and will be able to be Exploded for maximum potency in time before the party will take more damage, do not use other actions to heal the party immediately. Let Star do the work.

**Neutral Sect:** This is a bewilderingly potent ability. It increases our healing magic potency significantly, and adds a barrier effect to all our GCD actions. Together, this makes this buttons both incredibly powerful for healing the party, and incredibly powerful as a mitigation tool. While of course requiring a GCD to get use out of these effects, it will maximize the efficiency of that GCD unlike anything else. During progression, recovery, and simple reclears of content, this button is our pride and joy.

In Dawntrail, at level 100, pressing Neutral Sect also gives us access to Sun Sign. While flashy, this button is a bit less impactful comparatively. However, it is still a reliable 10% mitigation action, and makes Neutral Sect useful even when you do not want to use any GCDs from it.

**Macrocosmos:** Macrocosmos is a little complicated to write about, but is rather intuitive in practice. It is an AoE GCD Spell that puts a buff on all party members within range. This buff will henceforth store all intake damage incurred for the next 15s while the buff persists (this means that damage done to shields does not get included). At the end of the effect, or when manually read through Microcosmos (the button that replaces Macrocosmos in order to do so), the buff will be consumed, healing everyone for 200 potency + 50% of all damage stored.

Please note that Microcosmos does have a range, much like Horoscope. If someone is out of range, they will not have their Microcosmos read, and will instead need to wait until the buff expires to get the requisite effect.

# Healing and Other Utility

Important oGCD abilities:

* Macrocosmos: Malefic-power spell that accumulates damage taken **directly to HP\_ \_**(post-mitigation damage; note that shielded damage does not count); upon effect timeout or on early execution through Microcosmos, heals the party for 50% of this accrued damage
* Earthly Star: Large-radius ability with significant healing and damage. Upgrades both effects after ten seconds.
* Horoscope: small heal that can be buffed upon execution of Helios or Aspected Helios, increasing its potency and time allowed for execution.
* Celestial Opposition: strong raidwide heal with an attached regen.
* Celestial Intersection: provides a small heal to target alongside a more potent barrier
* Collective Unconscious: strong raidwide regen with attached mitigation.
* Essential Dignity: single target heal that scales with targets missing health, capping out at 30% max HP.
* Neutral Sect: increases healing magic potency (applies to “Helios” and “Benefic”, and their Aspected versions, as well as Benefic II), and adds a shielding effect to all GCD actions.
* Exaltation: single target mitigation with a brief heal upon expiration of the buff.
* The Arrow: increases healing received on a single target.
* The Ewer: regen effect on a single target.

# Defensive:

* Collective Unconscious: 10% raidwide damage mitigation (within ability)
* Exaltation: 10% single target mitigation
* Neutral Sect: applies a barrier on Aspected Helios and Aspected Benefic
* Celestial Intersection: provides a single target barrier
* The Bole: 10% single target mitigation
* The Spire: provides a single target barrier
* Sun Sign: 10% mitigation on all party members in range.

Surecast will be your knockback-prevention skill.

Rescue allows you to pull an ally to your side, but due to its long cooldown and slight delay on activation, it is relatively hard to use.

# Core Concepts

* Slidecasting is an important skill for Astrologians. This is when you move your character near the end of your spell when it is impossible to cancel. You can use this time, as well as the gap of ~1s afforded between Malefic casts, to move your character for mechanics.

  * <https://youtu.be/JNfYQShpXJY> (without sprint)
  * <https://youtu.be/09Cl4T2kzOY> (with sprint)
* Lightspeed now also can be used more freely for movement. 
* ABC is an acronym you will hear often: it stands for “Always Be Casting”. As we touched on earlier, use your spells as often as you can, and minimize the amount of time your GCD is left unused.
* Try to reduce your GCD healing with oGCD healing as much as you can
* Keep your damage cards within buffs, and keep Divination used off cooldown
