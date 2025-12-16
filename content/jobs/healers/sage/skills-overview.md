---
title: Skills Overview
authors:
  - Balance-SGE-Staff
  - wynn
patch: "7.3"
lastmod: 2025-08-05T03:02:20.457Z
changelog:
  - date: 2022-01-24T08:39:05.371Z
    message: Added page
  - date: 2022-03-17T02:23:47.239Z
    message: Updated
  - date: 2022-03-24T05:42:09.732Z
    message: Fixed Heading Levels
  - date: 2022-04-12T19:59:56.557Z
    message: Removed trick attack
  - date: 2022-08-26T19:29:14.372Z
    message: Updated for 6.2
  - date: 2022-11-03T01:57:39.258Z
    message: Updated for 6.28
  - date: 2023-05-30T23:38:06.800Z
    message: Update for 6.4
  - date: 2024-07-26T08:33:49.813Z
    message: 7.0 update
  - date: 2025-08-05T03:02:16.283Z
    message: updated for patch 7.3
---
# Before you Start: Eukrasia

![Eukrasia](https://xivapi.com/i/003000/003658_hr1.png)

First, a note about skills with "Eukrasian" in the name. These are upgraded versions of other skills that you would access by using the "Eukrasia" skill first. For example, to cast Eukrasian Dosis, first cast Eukrasia, then cast Dosis. Eukrasia itself is a 1-second, instant cast Global Cooldown (GCD) and the buffed ability will become a 1.5-second, instant-cast GCD. Neither of these cast times are affected by spell speed, so any Eukrasian GCD will always be 2.5 seconds. Additionally, unlike a real 2.5 second instant GCD, you will only be able to weave one oGCD without clipping.

If you press Eukrasia by mistake, you cannot press it again to turn it off. However, you can use a `statusoff` macro
like so:

```
/statusoff "Eukrasia"
```

# Offensive Skills

While Sage does not offer a raid buff, it makes up for it by having the highest personal DPS of all the healers. The general formula is similar, but Sage is the only healer to have a burst GCD (Phlegma). In addition, every offensive GCD provides free healing to your Kardion target. Let us take a look at how Sage's offensive skills mesh with each other:

## Dosis

![Dosis III](https://xivapi.com/i/003000/003680_hr1.png)

This is your main filler offensive GCD. When you have nothing higher priority to cast, use this. At 380 potency, it is the most powerful of all the healer single target filler GCDs.

## Eukrasian Dosis

![Eukrasian Dosis III](https://xivapi.com/i/003000/003682_hr1.png)

Eukrasian Dosis is your damage over time skill. Like the other healers, it lasts 30 seconds. DoT (and HoT) effects in FFXIV operate on "server ticks," once every three seconds. On each of these ticks, DoTs and HoTs will apply their listed potency. Thus, the total potency of Eukrasian Dosis is 850 (10 ticks of 85 potency). Typically, it should be re-applied as closely as possibly to when it would expire. To keep 100% uptime, you need to factor in the one second needed to cast Eukrasia, but the debuff application itself is instant.

## Dyskrasia

![Dyskrasia II](https://xivapi.com/i/003000/003683_hr1.png)

Your spammable area-of-effect (AoE) cooldown. With 170 potency per target, compared to 360 on Dosis, It becomes a gain on three targets. It is also an instant cast, so it can be used while moving. Ideally, it would never be used on a single target, but it *can* function as a last resort movement skill.

## Phlegma

![Phlegma III](https://xivapi.com/i/003000/003681_hr1.png)

Phlegma is unique as it is the only healer offensive GCD that operates on a charge system while still being a DPS gain. It deals 600 damage to the main target and 255 on other targets within a five-yalm radius of the primary target. The range is only six yards, so you will need to be somewhat close to the target. It is your most powerful single-target *and* AoE ability.

Due to having two charges, it does not have a strict alignment need like you would get out of other GCDs with a cooldown.
The general priority for when to use Phlegma charges is:

1. AoE, when needed. Hitting even just one additional target puts it at +50% potency.
2. Two-minute burst windows. On a full-uptime fight, you will be able to use two charges in the opener and then again at: Two, six, eight, and twelve minute marks.
3. Movement. Phlegma is an instant GCD, so it allows free movement for its entire recast time.
4. Dump any remaining charges to avoid overcapping, or before a boss goes untargetable for a long enough period of time to make you overcap.

For dungeons, the priority would be to use them on packs once the tank has finished pulling all the mobs together. Make sure that you're targeting a mob that is within range of all the others, otherwise it may not hit everything if the mobs are a bit more spread out.

## Pneuma

![Pneuma](https://xivapi.com/i/003000/003686_hr1.png)

Pneuma is a combination damage and healing ability. It is damage-neutral compared to Dosis, with the same 380 potency on the main target. For multiple targets, it is 216p on each target, making it fall behind only Phlegma for AoE. The 600p heal is already decent, but it is best used with Zoe for a 900p damage-neutral AoE heal.

Due to it being an AoE, it is also useful for dungeons and situations such as P3S where it might be possible to hit multiple targets.

## Toxikon

![Toxikon II](https://xivapi.com/i/003000/003684_hr1.png)

Toxikon is an instant cast 380 potency single target GCD. This makes it a damage neutral movement tool for single target encounters. However, it consumes Addersting charges (which are gained from your Eukrasian Diagnosis shield being consumed fully), meaning you will need to plan out your uses. For AoE scenarios, it behaves similarly to Dyskrasia, but has different scaling, giving it more overall damage in all practical scenarios.

In order to use this, you will need to use Eukrasian Diagnosis, which unfortunately is a GCD heal. However, you start the instance with three charges. Apart from the three freebies, it is best charged during downtime so that it remains DPS-neutral.

# Addersgall Heals

The heals in this section have a few things in common:

* They all require one Addersgall charge (indicated on the top of the job gauge).
* They restore 7% of your maximum MP when used.
* They are oGCD.

You get an Addersgall charge every 20 seconds, and can store up to three. Since these give mana, you can and should use them liberally even if it would be overheal.

## Kerachole

![Kerachole](https://xivapi.com/i/003000/003666_hr1.png)

AoE mitigation plus regen

* AoE 10% mitigation and 100p regen for 15 seconds (500p over five ticks)
* 30 second cooldown
* Mitigation does not stack with Taurochole

Functionally, very similar to Scholar's Sacred Soil, but it does not need to be placed (for better or for worse). Its 30 second cooldown means it can be up half the time, and the 500p total healing is more than Ixochole. Generally, this should be your go-to ability for incoming AoE damage. Does not stack with Taurochole. Unlike Asylum, this does **not** have a free tick on application.

### Kerachole Usage

Since Kerachole has both regen and mitigation, it is ideal to use it shortly before damage. This will allow you to make use of the mitigation while still missing no more than a single tick of the regen. Being a 15-second mitigation on a 30 second cooldown, Kerachole has very good uptime. If you need to catch two instances of damage with less than 15 seconds between them, you can do so with a single Kerachole. If the two instances are between 15 and 30 seconds apart, you can catch both by casting the first one early so that it will come off cooldown before the second.

## Ixochole

![Ixochole](https://xivapi.com/i/003000/003667_hr1.png)

AoE heal

* 400p AoE heal
* 30 second cooldown

As Ixochole offers less healing than the regen on Kerachole, and does not offer any mitigation, Kerachole is usually preferable. However, Ixochole still has many uses, such as:

* You will need Kera's mitigation for something else in the next 30 seconds
* You plan to use both Ixochole and Kerachole
* The 15-second regen would not deliver the healing fast enough

## Taurochole

![Taurochole](https://xivapi.com/i/003000/003671_hr1.png)

Single target heal plus mitigation

* 700p single target heal, plus 10% mitigation for 15 seconds
* 45 second cooldown
* Mitigation does not stack with Kerachole

The healing is upfront rather than over time, so it should ideally be used when both the mitigation and healing will come into play. For example, if faced with a raid-wide into a tankbuster, the upfront healing will heal off the raidwide, while the mitigation will work nicely for the tankbuster.

## Druochole

![Druochole](https://xivapi.com/i/003000/003664_hr1.png)

Single target heal

* Heals target for 600p
* No cooldown

It is less potency that Taurochole, but has the advantage of no cooldown.

# Other oGCD heals

Next up, your other oGCD heals. These do not cost anything other than the cooldown itself, so they should be your second priority for healing, behind Addersgall heals.

## Kardia

![Kardia](https://xivapi.com/i/003000/003653_hr1.png)

Kardia places the Kardion buff on the target. Kardion is an indefinite buff, similar to Dance Partner. After applying it to a party member it will remain on them for the duration of the raid (persisting through wipes). Kardion causes the target to receive a small healing every time you use an offensive GCD.

* The potency of each heal is 170.
* The Kardion heal and the damage ability that triggered it function independently. 

  * Damage buffs will not increase the heal.
  * The damage and healing can crit independently.
  * The small variance inherent to all healing and damage is also rolled independently.
* AoE spells must hit something to trigger it, but will only trigger it once per cast.
* Individual DoT ticks do **not** trigger a heal.
* Kardion can only be on a single target at a time. Applying it to another target will remove it from the first.
* There is a small cooldown of five seconds when switching targets, but no cooldown on the healing effect.
* The heal effect has a 60y range limit (significantly longer than the 30y range for *applying* the buff), which is large enough to generally be a non-issue.
* Unlike Dance Partner, Kardia can be used on oneself.
* If there are multiple Sages in the party, multiple Kardions on the same target will stack.

## Physis

![Physis II](https://xivapi.com/i/003000/003670_hr1.png)

AoE regen and healing boost.

* AoE regen - 650p total over 15 seconds (five ticks of 130p each).
* Places a buff on each target for 15 seconds that increases healing received by 10%.

  * This affects oGCD heals and includes heals from other players.
  * If you are going to cast other heals in addition to Physis, try to use Physis first so it can amplify those other heals.

## Haima and Panhaima

![Haima](https://xivapi.com/i/003000/003673_hr1.png)
![Panhaima](https://xivapi.com/i/003000/003679_hr1.png)

Haima is a shield that repeatedly re-applies itself when absorbed (up to five times, not including the initial shield).
Each shield is 300 potency, so the best case scenario is 1800p total absorbed. When it expires, it also applies a heal of 150p per stack remaining.

* Single target
* 300p per shield
* Shields will reapply for up to 15 seconds (see details below)
* Shields last up to 15 seconds
* 150p heal per remaining stack when it expires

Panhaima is the same, but AoE. Its potency is lower - 200p shields, and 100p heal per stack remaining. Panhaima and Haima do stack.

* AoE version of Haima with lower numbers
* 200p per shield
* 100p heal per remaining stack when it expires

### Details

Haima (and Panhaima, hereafter just Haima) has several intricacies that are worth knowing.

Haima has two separate buffs that it applies. One of them has a stack number, the other does not. The one without the stack number is the shield itself. The one with the number indicates how many more times the shield will automatically re-apply. The initial application does not consume a stack, so six shields total can be applied. This buff is what applies the healing effect when it expires.

The duration of each buff is 15 seconds. The 15 seconds for the shield buff is reapplied every time the shield is consumed, so while you will not get any more refreshes past the 15 seconds, the final shield buff linger for up to 15 seconds longer.

Both Haima and Panhaima snapshot their potency on the initial cast, so it can be used with Krasis or Physis even if it would not last the entire duration. This includes the heal when the buff expires.

## Holos

![Holos](https://xivapi.com/i/003000/003678_hr1.png)

AoE healing and mitigation

* AoE 300p heal and 300p shield
* Applies 10% mitigation
* Stacks with Taurochole/Kerachole

Roughly the AoE equivalent of Taurochole, but a normal cooldown rather than Addersgall. It applies a 300p heal, and a 10% mitigation for 20 seconds.

Like Taurochole, it is ideal if you can make full use out of every aspect (healing, shielding and mitigation). If you only need the mitigation, consider using Kerachole. However, if you do need to use it purely for mitigation, the heal being only 300p means it isn't the end of the world. 

## Philosophia

![](/img/jobs/sge/ffxiv-philo.png)

Philosophia grants a raidwide regenerative buff called Eudaimonia that heals players for 150p for each spell that the Sage casts and buffs GCD heals by 20% for 20s. This is a button that is exceptionally useful in a number of ways, and is on a 3m cooldown as a result.

Combined with Eukrasian Prognosis and Zoe, Philosophia can output a significant shield and heal and function as a Holos that costs a GCD heal. If you choose to not mix it with a GCD shield, this still serves as a free regen that heals the party as you do damage similar to a raidwide Kardia.



# GCD Heals

Excluding Pnuema as discussed in the Offensive GCD section, GCD heals should be your last resort. They cost damage, and Sage's GCD heals are not particularly effective compared to those of other healers.

If the situation is so dire that you need a non-shield GCD heal (due to damage that has already snapshotted), consider using the Eukrasian version anyway, and converting the shielding to healing using Pepsis.

In terms of co-healer planning, Sage should be the absolute last priority for GCD healing. It has the least effective GCD heals, and has the highest opportunity cost due to having the hardest-hitting offensive GCDs.

## Diagnosis

![Diagnosis](https://xivapi.com/i/003000/003652_hr1.png)

Single target 450p heal. Rough equivalent of Physick/Cure I/Benefic I - that is, something to be avoided except during downtime or when you have insufficient mana for anything larger.

## Eukrasian Diagnosis

![Eukrasian Diagnosis](https://xivapi.com/i/003000/003659_hr1.png)

Single target 300 potency heal plus 540 potency shield (840p total). Similar to Adloquium, applies another shield on top if it crits (another 540 potency, bringing the total potency to 1380). However, since Sage does not have a way to force a crit, the crit shield is not something that should be relied upon.

Eukrasian Diagnosis *should* be used during downtime as it gives Toxikon charges when absorbed.

## Prognosis

![Prognosis](https://xivapi.com/i/003000/003654_hr1.png)

AoE 300 potency heal. Extremely low numbers with no benefit make this a very rare ability in practice, especially given that Eukrasian Prognosis only costs 100 more mana.

## Eukrasian Prognosis

![](/img/jobs/sge/e-prog-ii.png)

AoE 100p heal plus 360p shield. As with the base version of this spell, it simply does not have very good numbers. However, it can be mixed with Sage's heal buffs, including Physis, Zoe, and Philosophia to greatly increase raidwide survivability.

# Utility

## Icarus

![Icarus](https://xivapi.com/i/003000/003663_hr1.png)

* Gap closer
* Can target a party member or an enemy
* 45 second cooldown
* No damage or other effects, so should be used when needed rather than on cooldown
* 25-yalm range is fairly big, but will not span the entire width of many arenas

You are the only healer who has a gap closer, so make use of it.

## Soteria

![Soteria](https://xivapi.com/i/003000/003662_hr1.png)

* Boosts Kardion healing by 50%
* Lasts 15 seconds
* 60 second cooldown

Useful for when you need a little extra free single target healing, or general tank upkeep.

## Zoe

![Zoe](https://xivapi.com/i/003000/003668_hr1.png)

* Increases the potency of the next GCD heal by 50%
* Must be used within 30 seconds
* 90 second cooldown

This would be unimpressive if not for the fact that Pneuma is considered a GCD heal. This effectively gives you a damage-neutral 900p AoE heal.

## Pepsis

![Pepsis](https://xivapi.com/i/003000/003669_hr1.png)

* Converts shields from your GCD heals that are currently applied into raw healing
* 450p heal for E.Diagnosis shields
* 350p heal for E.Prognosis shields
* Shields are removed when used
* 30 second cooldown

Like Scholar's Emergency Tactics, but in reverse (you use the heal first, then use Pepsis). Due to the way snapshotting works, it is possible to have an instance of damage consume the shield *and* get healing from Pepsis. To do this, you need to use Pepsis between the damage snapshotting and resolving.

## Rhizomata

![Rhizomata](https://xivapi.com/i/003000/003677_hr1.png)

* Gives you a charge of Addersgall
* Still subject to a limit of three, so don't use it if you already have two or three charges.
* Since Addersgall heals give mana, this can help with MP management even if the healing is not needed.
* 90 second cooldown

## Krasis

![Krasis](https://xivapi.com/i/003000/003685_hr1.png)

* Increases healing received by a target by 20%
* 10 second duration
* 60 second cooldown
* Cast this on the target that you want to heal, not yourself/ or your co-healer

## Role Actions

![Egeiro](https://xivapi.com/i/003000/003655_hr1.png)

## Egeiro

"Raise" equivalent.

* Resurrects target to a weakened state
* No cooldown
* 2400mp cost
* Eight second cast time - use Swiftcast with it

## Lucid Dreaming

![Lucid Dreaming](https://xivapi.com/i/000000/000865_hr1.png)

* Recovers MP over time (3850 MP over 21s)
* Use when below 8000 MP

## Swiftcast

![Swiftcast](https://xivapi.com/i/000000/000866_hr1.png)

* Makes your next GCD spell instant cast.
* The buff is not consumed when using instant cast GCDs.
* If progging or in an inconsistent party, save Swiftcast for Egeiro (Raise).
* Otherwise, use it in the opener and for movement.

## Surecast

![Surecast](https://xivapi.com/i/000000/000869_hr1.png)

* Prevents most knockback and movement effects and prevents casts from being canceled.
* Use to avoid knockbacks.

## Rescue

![Rescue](https://xivapi.com/i/000000/000890_hr1.png)

* Pulls a target party member to your location.
* Mostly used on party members who are about to fail mechanics, but occasionally finds use in optimized strategies.
