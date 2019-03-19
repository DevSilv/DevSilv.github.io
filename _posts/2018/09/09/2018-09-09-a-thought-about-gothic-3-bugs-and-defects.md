---
layout: post
title: "A thought about Gothic 3 bugs and defects"
date: 2018-09-09
tags: Games
---

[Gothic 3](http://www.Gothic3.com/), a 2006 role-playing PC game developed by [Piranha Bytes](https://www.igdb.com/companies/piranha-bytes), may be considered [good](http://www.metacritic.com/game/pc/Gothic-3). This means that it contains bugs and defects, as well as advantages. I find this game very playable, so I decided to write this series of two thoughts, in which I will describe some advantages, as well as bugs and defects that Gothic 3 has.

I realize that the game is not new, it has passed 12 years, so possibly all the bugs and defects that I have found have already been encountered and described by someone. The reason that I am describing them today is that I still play the game and much enjoy it. And, the reasons that I still play it are that it is one of the few games which I got that I enjoy playing, and that let me install themselves on linux (using Wine, on Fedora).

Gothic 3 version that I am playing: **pb/cpt/sb rvc1.6 iv1.60.29**. The lists could be updated.

## The bugs and defects

The bugs and defects that I decided to describe have had to fulfil two conditions:
1. I have discovered / encountered them myself while playing;
2. I consider them as rather-easy to fix (or sometimes just improve) (I am a programmer, although I do not develop games).

I divided the bugs and defects into two groups: "gameplay" and "visual". Each group consists of four aspects: "environment", "characters", "hero" and "all other things".

### A. Gameplay bugs and defects

#### A.I Environment

1. **Some characters bodies disappear with time.** I put it in the gameplay bugs, because it affects the possibility of gathering the character items.

2. **You can see the characters from a longer distance using the bow than using the sword.** This may not be a bug, but a presumption of the game. Without it, the fights will possibly be too hard to balance: you would need to very good hear or very good see a character (personally, not in a game) to have a good chance to hit it. On one hand, the sound is possibly similar on different devices and drivers, but on the other one the display could be very different – just think of a bad lighting in the room, or a lower game details setting.

3. **In the mine to the south-west of Geldern there is no source of light.**

4. **Sometimes items in chests do not correspond to the place the chests are located.** For example, I can find an apple in the chest located in the tomb in Nordmar.

#### A.II Characters

1. **The Characters health is recovered to full after saving.** Most possibly both the normal save and the quick save. It may be helpful in case of friends, but is annoying in case of enemies (e.g. tough creatures like shadowbeasts). It could be a part of a broader feature (not a bug) of resetting properties of the world and characters after saving.

2. **When the nameless hero (or any character?) goes over the embers or the fireplace, the health is not lost.**

3. **The characters may get hit through walls, if they stay too close to them.** I understand that some of the walls are thin in reality (like wooden and fabric ones). But, as long as they cannot be damaged, they should not let the bullets and blades through. I also understand that it probably results from a bug of bodies (not bullets) passing through the walls – and most probably not exactly bodies, but their, say, "hit zone" (as it could be wider than they are).

4. **You can go through the bodies of killed characters.** Although probably you can sometimes move them by that.

5. **You cannot ask NPCs for directions.** Sometimes it is easy to get lost in a much differentiated land (e.g. in the forests of the Middle Lands or the valleys of Nordmar).

6. **The bodies of killed characters do not disappear from people's and orcs' houses and camps.** Maybe creatures should not remove it, but people and orcs should.

7. **When you attack a character from a group of people or orcs, the rest of the group sometimes do not react.** Of course, it is very helpful in the attack – it lets you draw a character away and fight alone. I think that it might be just a presumption of the game.

8. **When attacked from a certain direction/side, characters sometimes do not move – that is, with their normal moving.** It is uncertain for me whether this is a defect to describe. Maybe it is just the result of animals position against obstacles – and it is more or less clear for me that the positions are hard to predict.

9. **When attacked, characters sometimes move through obstacles – that is, slide over the surface.** This bug is related to the defect about characters not moving when attacked.

10. **When a characters got hit by a friend character, they start to fight with each other.** it is uncertain for me whether this is a bug or defect. Maybe it is a game presumption to make it more real. On the other hand, I do not know whether such a fight ends with death, or just with stealing.

11. **When you try to kill a character that have to live according to the plot, you cannot kill he/she/it.**

12. **Some characters hold items in their inventory that they are not likely to have, according to their profession or current status in their life.** For example, an NPC in the woods holds several thousands coins.

13. **In the "kill the lurkers" quest in Faring, when I tried to attack the lurkers from Faring – but I did not go on the river, as the quest description suggested – people started to attack me.**

14. **When I tried to go upstairs or downstairs on the tower over the pass to Nordmar, the Hero was blocking himself.** I had to jump to be able to go.

15. **Sometimes in the fight my opponents are standing when I am attacking them, instead of moving around or attacking me.** Although they are brandishing their swords and so on.

#### A.III The Hero

1. **When the Hero (or any character?) goes over the embers or the fireplace, the health is not lost.**

2. **You can switch a weapon for the crossbow, but not in reverse.**

3. **Some actions should not be possible to perform after another.** E.g., you should not be able to trade or ask for teaching an NPC after fighting with him/her/it.

4. **If you are holding a torch and start extraction (e.g. of gold), after the extraction the Hero takes out a new torch (so the number of torches that you hold is decreased).**

5. **When you try to buy armors from the Rebels in Okara, there is no information about how many points of reputation you need to have to be able to buy it.** The message only says that you need to have a certain percent of reputation points, and does not tell about the needed amount of them.

#### A.IV Other things

1. \-\-\-

### B. Visual bugs and defects

#### B.I Environment

1. **After you finish the quest of rebuilding Gotha, the cobwebs in the doors and windows do not disappear, whilst there are people already bustling about in the stronghold.**

#### B.II Characters

1. **While attacked, the skeletons and zombies are bleeding.**

#### B.III The Hero

1. **In a house in Vengard, the Hero has to go through an alchemist's bench when you click on it trying to make a potion and he stays on the wrong side of it.** In a "normal moving", the bug does not exist (he cannot go through this bench).

2. **The animation of roasting does not depend on whether I have something to roast or not.** If I have got a raw meat, the Hero brings out a roast, and if I have not, the Hero also brings out a roast.

3. **When you are picking up items from the dead characters body, there is no picking animation.** There could be an animation like when you are picking up herbs.

#### B.IV Other things

1. \-\-\-

### C. Other observations

#### B.I Environment

1. \-\-\-

#### B.II Characters

1. \-\-\-

#### B.III The Hero

1. \-\-\-

#### B.IV Other things

1. **I do not understand why the tasks are getting done even if I had not got them.** For example, after "liberating Nordmar" (killing orks from 5 camps), the five "Liberate Nordmar!" tasks are done, even if I had not got them, because I did not complete "The Power of the Ancestors" task (if I did, they would be given to me by Kerth).

2. **Certain lines of dialogues do not reflect the emotions that the characters express (or should express, according to the situation).**

## Some sources

- <http://pl.Gothic.wikia.com/wiki/Gothic_i_ArcaniA>
- <http://www.worldofGothic.com/>
- <http://Gothicworld.wikia.com/wiki/Gothic_Wiki>
- <http://www.metacritic.com/>
- <http://www.Gothic3.com/>
- <https://www.igdb.com/>