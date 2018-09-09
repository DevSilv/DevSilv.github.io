---
layout: post
title: "a thought about gothic 3 bugs and defects"
date: 2018-09-09
---

[gothic 3](http://www.gothic3.com/), a 2006 role-playing PC game developed by [piranha bytes](https://www.igdb.com/companies/piranha-bytes), may be considered [good](http://www.metacritic.com/game/pc/gothic-3). this means that it contains bugs and defects, as well as advantages. i find this game very playable, so i decided to write this series of two thoughts, in which i will describe some [advantages](), as well as bugs and defects that gothic 3 has.

i realize that the game is not new, it has passed 12 years, so possibly all the bugs and defects that i have found have already been encountered and described by someone. the reason that i am describing them today is that i still play the game and much enjoy it. and the reasons that i still play it are that it is one of the few games which i got that i enjoy playing, and that let me install themselves on linux (using wine, on fedora).

gothic 3 version that i am playing: **pb/cpt/sb rvc1.6 iv1.60.29**. the lists could be updated.

## the bugs and defects

the bugs and defects i have decided to describe have to fulfil two conditions:
1. i have discovered / encountered them myself while playing;
2. i considered them as rather-easy to fix (or sometimes just improve) (i am a programmer, although i do not develop games).

i divided the bugs and defects into two groups: 'gameplay' and 'visual'. each group consists of four aspects: 'environment', 'characters', 'hero' and all others.

### A. gameplay bugs and defects

ENVIRONMENT|CHARACTERS|HERO|OTHER
-|-|-|-
**some characters bodies disappear with time.** i put it in the gameplay bugs, because it affects the possibility of gathering the character items.|**the characters health is recovered to full after saving.** most possibly both the normal save and the quick save. it may be helpful in case of friends, but is annoying in case of enemies (e.g. tough creatures like shadowbeasts). it could be a part of a broader feature (not a bug) of resetting properties of the world and characters after saving.|**when the nameless hero (or any character?) goes over the embers or the fireplace, the health is not lost.**|**the skill 'large weapons' in polish translation has two different names: sometimes just 'large weapons', and sometimes (loosely translated) 'fighting axe skill'.**
**you can see the characters from a longer distance using the bow than using the sword.** this may not be a bug, but an assumption of the game. without it, the fights will possibly be too hard to balance: you need to very good hear or very good see a character (personally, not in a game) to have a good chance to hit it. on the one hand, the sound is possibly similar on different devices and drivers, but on the other one the display could be very different – just think of a bad lighting in the room, or a lower game details setting.|**the characters may get hit through walls, if they stay too close to them.** i understand that some of the walls are thin in reality (like wooden and fabric ones). but as long as they cannot be damaged, they should not let the bullets and blades through. i also understand that it probably results from a bug of bodies (not bullets) passing through the walls – and most probably not exactly bodies, but their, say, "hit zone" (as it could be wider than they).|**you can switch a weapon for the crossbow, but not in reverse.**
||**you can go through the bodies of killed characters.** although probably you can sometimes shift them.
||**you cannot ask NPCs for directions.** sometimes it is easy to get lost in a much differentiated land (e.g. in the forests of the middle lands or the valleys of nordmar).
||**when the nameless hero (or any character?) goes over the embers or the fireplace, the health is not lost.**
||**the bodies of killed characters do not disappear from people's and orcs' houses and camps.** maybe creatures should not remove it, but people and orcs should.
||**when you attack a character from a group of people or orcs, the rest of the group sometimes do not react.** of course, it is very helpful in the attack – it lets you draw a character away and fight alone. i think that it might be just an assumption of the game.
||**when attacked from a certain direction/side, characters sometimes do not move – that is, with their normal moving.** it is uncertain for me if this is a defect to describe. maybe it is just the result of animals position against obstacles – and it is more or less clear for me that the positions are hard to predict.
||**when attacked, characters sometimes move through obstacles – that is, slide over the surface.** this bug is related with the defect about characters not moving when attacked.
||**when a characters got hit by a friend character, they start to fight with each other.** it is uncertain for me if this is a bug or defect. maybe it is a game assumption to make it more real. on the other hand, i do not know whether such a fight ends with death, or just with stealing.

### B. visual bugs and defects

|HERO
|-
|**in a house in vengard the nameless hero has to go through an alchemist's bench when you click on it trying to make a potion and he stays on the wrong side of it.** in a "normal moving" the bug does not exist (he cannot go through this bench).
|**the animation of roasting does not depend on whether i have something to roast or not.** if i have got a raw meat, the hero brings out a roast, and if i have not, the hero also brings out a roast.

### C. other observations

|OTHER
|-
|**i do not understand why the tasks are getting done even if i had not got them.** for example, after 'liberating nordmar' (killing orks from 5 camps), the five 'liberate nordmar!' tasks are done, even if i did not got them, because i did not complete 'the power of the ancestors' task (if i did, they would be given to me by kerth).
|**certain lines of dialogues do not reflect the emotions that the characters express (or should express, according to the situation).**

## some sources

- http://pl.gothic.wikia.com/wiki/Gothic_i_ArcaniA
- http://www.worldofgothic.com/
- http://gothicworld.wikia.com/wiki/Gothic_Wiki
- http://www.metacritic.com/
- http://www.gothic3.com/
- https://www.igdb.com/