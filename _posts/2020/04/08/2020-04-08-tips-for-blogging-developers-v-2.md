---
layout: post
title: "Tips for blogging developers v.2"
date: 2020-04-08
tags: Development Blogging Update
---

**Info: this is an updated version of my article "Tips for blogging developers" that was published on this blog on July 10, 2018.**

It has passed some time, I have learned new things; therefore I decided that that article needs some refreshing.

I have fixed some typos, mistakes, inadequacies and inconsistencies. I've added some resources, changed some tips,added one tip and removed one. I restructured the whole text and created groups of tips. Lastly, I've just rephrased some expressions and sentences; I hope now the language I use in the article sounds more natural.

As always, I appreciate if you point out my typos, mistakes and inconsistencies. Also, I appreciate comments and remarks that could make me to look from another perspective at the issues presented in the article.

You can read the previous version of this article under this link: https://silvuss.github.io/2018/07/10/tips-for-blogging-developers.html

---

This article contains tips on how to write a good article, for example on a blog. I wrote it with writing about software development in mind.

(But it may be that it'll be useful also for writing about other subjects.)

As such, it's intended for programmers, software testers, people of similar background or profession, and for people that are just interested in improving their technical writing skills.

(But it may be that it'll be useful also for non-technical-writing bloggers.)

## Four disclaimers before we start

**I consider the below tips as "tips".** They are my opinion and you should not treat them as requirements nor expectations. It is always up to you to follow them or not.

**This article is not intended to be a manual or a guide.** In case of any doubts, prior to this article one should refer to standards, normative documents or regulatory documents of any described concepts.

**This article is not intended to be comprehensive on any subject**, especially neither on writing blogs nor programming. I might have forget about some important things or aspects of things, or just missed them when reading various documentations.

Lastly, **please be aware that I am not an expert in blogging, developing software nor programming.** I might have made typos, mistakes and errors (although I tried not to make any).

## Introduction

I read a lot of articles online (I think so). Many of them talk about programming and code, or just are more or less technical. However, I see that some of them are hard for me to understand.

In case I cannot understand an article, I tend to imagine how it can be improved – rather not in its meaning or subjects, but in its form. And, some time ago an idea come to my mind: to form some "rules" that would make an article **understandable for me**. More specifically: those "rules" could describe how to write such an article.

I've formed them, then I've written them down – in the form of tips in this article. I hope that the tips might be helpful for some people.

In the tips I assume that:

- **one** is writing **an article**;
- the article is to be read by some **readers**;
- the article is to contain **text** and optional **code**, **images**, **videos** and **links**;
- if there's provided code, it means for me that it's usually split into [**listings**](https://en.wikipedia.org/wiki/Listing_(computer));
- the article is to have **its primary subject** (in the tips I refer to it as "the subject");
- the article is to have **some secondary subjects**;
- the article's author **describes** or **writes about** the article's primary subject or secondary subjects;
- usually, there are topics and/or issues described / written about in the article.

Generally, it should not matter what language or languages the article is written in (English, German, etc.) for the meaning of the tips.

**Remember, these tips may not fit all kinds of articles that you write / you want to write. If you are not familiar with some of them, you can make [an issue](https://help.github.com/articles/about-issues/) in [this project](https://github.com/silvuss/silvuss.github.io) on GitHub. Also, if you find any contradictions between any rules, you can make an issue on that.**

The tips are not to be written in any particular order, but I've tried to put some of the most important first.

## The tips

### General tips

#### 1. Write shortly.

It's perhaps widely known tip, not only in the case of writing. But let us concentrate particularly on writing an article. There may be fulfilled one or more of the following conditions:

1. The language of the article is not the language that the readers speak natively;
2. the readers may want to read the article, but be tired;
3. the readers may essentially not want to read the article **for the article iself**; instead, they may have to read it to, e.g., be able to solve a difficult task at their work.

That said, be aware that:

- in case of a long sentence or paragraph, the readers might lost the context of it, or even what subject it describes;
- in case of a long code listing, the readers might not understand how it's related to the issues that it illustrates, or even what issues it illustrates (see also the tip about illustrating a subject).

Consequently, to avoid that, try to write succinctly. If an issue is too complex for a short sentence, paragraph or listing, just provide more sentences, paragraphs or listings.

(Personally, unfortunately, I tend to write long sentences. I try to change it.)

#### 2. Write simply.

I can recall an adage that states: simple problems described in a complex way become complex. It's always good to write simple, clear and short sentences, paragraphs and listings – no matter whether it's the basics or an advanced topic. Readers should try to understand the article's subject, not the article itself. [Maybe Albert Einstein **did not say** "if you can't explain it simply, you don't understand it well enough"](https://skeptics.stackexchange.com/questions/8742/did-einstein-say-if-you-cant-explain-it-simply-you-dont-understand-it-well-en); but, personally I find this rule OK and try to achieve such a level of explanation.

#### 3. Keep YAGNI.

For those who don't know YAGNI, it's the acronym of ["you aren't gonna need it"](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it), a principle of [extreme programming](https://en.wikipedia.org/wiki/Extreme_programming). In terms of programming, it denotes that you should not introduce new functionality to a program until it's necessary.

Speaking about writing, this principle may be related to the following rule: do not describe subjects, topics, issues, aspects or cases that are not related somehow to the main or a secondary subject. If you can't relate something to at least one of them, that might mean that you should create a new article describing this thing.

This tips seems also to fit the [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). For those who don't know, it's a well-known software development principle; it demands that a module or a class be responsible for "one thing" (broadly speaking). From this tip's "point of view", as mentioned above, you should avoid writing about unrelated subjects, topics, issues, aspects or cases.

#### 4. Reasons, reasons, reasons.

Readers should understand, why something is introduced in the article. Therefore, wherever possible, explain why you wrote something. Provide reasons, causes and motives both for all of the most difficult ideas and for the simplest. If you cannot, that might mean that you should create a new article describing this thing.

#### 5. Examples, examples, examples.

Probably it's widely known tip, but let me tell as I see it: the examples are places where the readers might compare the author's ideas with their own view.

Try to provide as much examples as not to make the article overloaded of them. In case there's a limit of words and there's available space yet, maybe you can provide one more example? In case a description just lacks something for you, try as well – maybe it will help.

At least in my case, usually the more (accurate) examples is provided, the more I understand the issues they describe.

#### 6. Examples should speak for themselves.

If you provide examples, try to keep them accurate.

If you cannot keep them accurate, tell the readers about it. Inform every time when it seems to you that an example is poor. It's better when the readers know that they should not expect too much than when they in fact expect too much.

I find this tip in some way related to a software development concept of ["information hiding"](https://en.wikipedia.org/wiki/Information_hiding). In terms of this tip, you should "hide" some parts of the examples that are not related to the main subject. Usually, such "hiding" means just not emphasizing those parts.

#### 7. Compare.

Examples are a very good way to help the readers understand the subject. Nonetheless, it's also useful to compare the issues described in your article to the issues described in other articles (on the internet, in a printed book, etc.). Of course, it will be better if the readers know already the articles that you're referring to.

Usually, the comparisons may be done just by providing a few links (remember about describing each of them). Occasionally, it may be better to write a whole paragraph.

#### 8. If it's not basics, elaborate on it.

Speaking differently: avoid treating superficially anything that's more advanced than basics.

When you treat something superficially, be aware that:

- The readers might think that they should know the described thing. In this case they may get confused if they don't (as I often do).
- The readers might think that the described thing is not important. In this case they may be mistaken if it is.

#### 9. If it's complicated, but cannot be simplified – recap.

This tip essentialy is about making a complex description simpler for the readers.

Suppose you have a description that seems hard to understand for the readers, but for some reasons you cannot write it in a simpler way. Or maybe you have a bunch of already simple descriptions, but it's combining them that seems to be difficult. In such cases it may help to **recap** the main ideas of the description (descriptions) – for example, in one paragraph. You may start with "So, by now we got the idea of...", or "Let me review what we have just learned...", or similar.

Generally, I would like to read articles written in a way that would give me **a piece of information (difficult or not) twice in a row**: firstly in a more "raw", concrete form (the "main" paragraphs), and secondly in a more "smooth", abstract form (the recap paragraphs). From my experience, this is the way that I understand things most efficiently.

When you're, e.g., a software developer, you may feel that this tip somehow **contradicts** the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). For those who don't know, it's the acronym for "don't repeat yourself"; it's a widely known software development principle. It talks about avoiding redundancy in code, data, in general – in information. And now, this tip just talks explicitly about **repeating** information. Unfortunately, by now I have not figured out any explanation for this contradiction.

### Tips involving "assets"

#### 10. Multimedia, code and links should only illustrate a subject, not describe it.

If multimedia (images, videos, etc.), code or links seem to **be as important, or more important** than text, then maybe there's too little text. If they seem to **describe** text, maybe you should split it into more articles.

#### 11. Multimedia, code and links should be as difficult as text.

Multimedia (images, videos, etc.), code or links that are **more difficult** than text could make the readers **confused**; if they are **easier** than text, it could make the readers **wrong**.

#### 12. Multimedia, code and links rarely speak for themselves.

If there's no description provided for a thing, the readers may lost the context of this thing. Always provide an explanation for a listing, an image, a video, a link, etc. If a full-paragraph description seems not suitable for you in a particular case, use just a more extensive comment or caption.

Generally, if it's not a description, but it's used instead of text, it probably needs one.

### Tips involving grammar and vocabulary

#### 13. Keep the vocabulary consistent.

This tip is to ensure that readers understand the text at least similarly to you.

For example, in case of enumeration: if you write "firstly", try not to change the "secondly" for "next", or "later" or similar. Otherwise, the readers will get lost. If it's turning out to be more than three points, enumerate them by numbers instead of words (maybe starting each one from a new line).

#### 14. Contrast cautiously.

By "contrasting" I understand writing pieces of text involving phrases like "but" or "although" (see ["contrasting"](https://dictionary.cambridge.org/grammar/british-grammar/conjunctions-contrasting) in the Cambridge Dictionary). I count as "contrasting" also words like ["however"](https://dictionary.cambridge.org/dictionary/english/however) and ["instead"](https://dictionary.cambridge.org/dictionary/english/instead) (although the Cambridge Dictionary doesn't include them in its definition of "contrasting").

If you write two expressions and join them with one of these phrases, I suppose that readers usually will expect two things at once:

1. both expressions deal with the same subject (not to be confused with the main and secondary subjects of the whole article);
2. the second expression will be in contradiction with the first.

You may write the expressions in one sentence, but you may also create two separate sentences. Whichever the case, consider:

- If you write the first expression not **directly** after the other (i.e. you split it with another one; I've seen it several times), the readers might get confused. They might see the contradiction weaker than you meant it to be.
- If you add a third expression **in contradiction to one of them**, the readers might get confused. They might not know what to contrapose to what.

Consequently, to avoid such situations, try to contrast ideas carefuly combining expressions in a consistent manner.

#### 15. Use modal verbs cautiously.

[Modal verbs](https://en.wikipedia.org/wiki/Modal_verb) are the verbs "may", "might", "can", "could", "must" and "have to" and similar. It may seem that there's nothing wrong with these verbs, but as I see them, they are often confusing in terms of technical description.

If you think they need to be used in your article, see the [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt). This document defines them in the context of writing (technical) specifications, but I believe that their definitions there are general enough to be used elsewhere as well.

_**Tip:** if you are not aware of what RFC (Request for Comments) is, see [the article about RFC on Wikipedia](https://en.wikipedia.org/wiki/Request_for_Comments)._

#### 16. Depict your intentions cautiously

By "depicting intensions" I understand writing pieces of text involving phrases like "believe", "want to" and "seem".

This tip is similar to the tip about using modal verbs: you may see nothing wrong with these phrases, but I think that they are often confusing in terms of technical description.

There are generally two contexts that you can relate these phrases to: (1) you, and (2) other people.

If you speak about yourself, remember that the readers may believe or desire, or something may seem to them **differently** than you believe, desire and something seems to you.

If you speak about other people:

- **If you write "it is believed"**, you probably want to say "they say so, but I am not sure". But be careful whether this doesn't start to mean "nobody is sure, but they say so".
- **If you write "somebody wanted to do something"**, you probably want to say "somebody did something". But be careful whether this doesn't start to mean "somebody wanted to do something, but nobody can say whether they really did".
- **If you write "it seems to be"**, you probably want to say "I think it is, and you can think so, but I'm not sure". But be careful whether this doesn't start to mean "I think it is, but I'm not sure, so you shouldn't think so".

#### 17. Choose words that you already use.

If the article is just a more or less technical document, I find it better to repeat a word (a phrase) four times than to provide four different words instead (assumed each having slightly different collocations or meaning).

Of course, there are articles intended to be written using literary language; probably those shouldn't be changed now ;). In any case, remember about readers whose native language is different from the article's language.

This tip may be loosely realted to the [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). For those who don't know, it's a well-known software development principle; it demands that a module or a class be responsible for "one thing" (broadly speaking). In terms of this tip, at least in my opinion, a single word (or phrase) could be thought of as a "module", and its meaning could be thought of as its "responsibility".

To go even deeper into how the software development may be related to this tip, you can see the concept of ["code reuse"](https://en.wikipedia.org/wiki/Code_reuse) on Wikipedia, or a more general concept of ["reusability"](https://en.wikipedia.org/wiki/Reusability).

### Miscellaneous tips

#### 18. Avoid diminishing the subject.

Speaking differently: try to use phrases like "whatever the case", "it does not matter" or "you should not care" only when necessary.

All of these phrases may mean that the readers should treat the words before (or after) them as **less important** that these words might have seemed to them. It may cause the readers to get confused.

Generally, it may be helpful to imagine a certain relationship between you and the readers. On one hand, you know when to consider a term or a concept less important that it seems to be. On the other hand, the readers don't know it yet.

See also the tip about leaving your blog.



#### 19. If you describe several issues, mind the proportions.

If the article discusses several issues of the main subject, try to keep proportions in the length of their descriptions. For instance, if the first and the second issue are described in one paragraph each, try to include the third and fourth in no more than three each (here, the numbers are just arbitrary examples). Otherwise, some issues may seem to be more important just because you've described them in a more extensive way. Of course, in case that's your goal – do it.

#### 20. Be consistent when telling the readers what is right.

If a paragraph tells the readers that they "should do X", and the next one that they "have to do X", or in reverse, they could be confused, or even sometimes mistaken.

See also the tip about using modal verbs.

#### 21. Don't demand from the readers to leave your blog.

Among other things, readers may want to leave your blog when they don't understand something or they lack of some information. By leaving the blog I mean to temporarily abandon reading the current article in favor of e.g. looking into a dictionary.

Try not to demand it from them; leave it to their own decision, maybe just encourage them. To do this, you may try to fulfil the following points:

- **Inform the readers whether you describe the current "version" of the subject**. E.g., it's particularly desired when you describe a thing that changes fast, like a software library. It seems good to inform them about (1) the "version" that you describe, and (2) whether this "version" is up-to-date (make it clear if it's not).
- **Assume that readers know only the basics of the subject**. If you need to assume that they have any advanced knowledge about the subject, then mention it in the introduction (so that anybody who don't have the proper knowledge may exit early).
- **Assume that this article is the first that the readers read on this subject.** Inform the readers whether the subject is already widely discussed (in the internet, in books, and the like). Summarize it if it is (as far as you can); it it seemed to you to be too much additional information for the article, provide links.





#### 22. Differentiate all the cases that you describe.

If a subject, an issue or a topic has several possibilities to choose from, inform the reader whether all of them may be considered as equivalent or not. If not, make it clear what are the differences and when to use which.

For example, if your article describe a new programming language, and the language has several use cases, ask yourself (and/or inform the readers) about the following things:

- How many of the use cases are you describing? (provide the highest exact number that you can)
- Are there any other use cases that you're not describing? (tell how many if you can)
- May there be any other use cases that you don't know yet about? Might there be in the past any other that you don't know yet about? May there appear new ones in the future?
- Which of all the use cases (those described by you and those not) are similar? Which of them are different? (these are two separate questions)
- Even if they are different, could the language play the same role in them?
- Why to choose this language in which of them?

#### 23. Make clear distinctions between descriptions of different abstraction levels.

By saying that a description has a different "abstraction level" than another one, I mean that the terms it uses are either more abstract or more concrete than the the terms that the other description uses.

For example, suppose one of the paragraphs you wrote describes a topic in a high-level way (i.e., an abstract one); then, the next one is describing the same topic in a more concrete way. In such a case, inform the readers why you chose to put a concrete description next (i.e., close) to a high-level one.

When thinking about this rule, there may come to mind the [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). For those who don't know, it's a well-known software development principle; it demands that a module or a class be responsible for "one thing" (broadly speaking). Speaking about terms: a set of terms on the same level of abstraction may be thought of as a "module" which has a set of classes in it. And, the level of abstraction itself may be thought of as the module's "responsibility".

There's one exception to note here: this tip **is not** to violate  the tip about giving examples (i.e., you should give many examples). I imagine that it may seem so; examples are usually (always?) more concrete than the issues they describe. Of course I agree, that's a part of their purpose. As such, they still can and should be given. One might just try to avoid too big difference between the abstraction level of an example and the abstraction level of the issue it describes; then, it would better show the readers the relation between the example and the issue.

#### 24. Try to describe the background of the subject.

This tip is loosely related to the tip about examples. It might be especially useful in case when the article describes a "new" subject: a concept new to most readers, a recently/currently published specification, a recently created software, a recently established company, etc.

Most probably, the background of a subject may involve:

- its history;
- reasons for creating – of course, only if it has been created (e.g. it's a product);
- reasons, for which one decided to describe it;
- other subjects that are related to it.

For example, if the article is to introduce a new JavaScript library (which is a created thing), fulfilling the above points could boil down to answering the following questions:

- What are its "dates" – that is, dates either: (1) since one started inventing it, (2) since it has been created, and/or (3) since it has been published?
- Who are its authors? Who are its maintainers?
- Who has been owning it? Do they still own it? Was the libary earlier proprietary, and it has become open-source currently (or vice versa)? If so, why?
- What are the reasons, for which it has been created? Are there already similar libraries available? Then, why did one not choose to use them, and instead created a new library?
- Why one describes the library? Wouldn't it be better to describe another library?
- Are there already similar libraries available? If so, what are their names? In what ways are they similar to this library?

#### 25. Try to describe the background of the article.

The background of the article could let the readers better understand it. It would be the case specifically if the article was updated, or is a part of an article series. One could name the background "meta-information" or ["metadata"](https://en.wikipedia.org/wiki/Metadata).

Most probably, the background may involve:

- the article's authors;
- its publish date;
- its classification – if relevant (e.g. in the form of keywords);
- reasons for creating;
- history of its updates – the times that it was being updated, and optionally some description what was updated in the mentioned updates;
- other articles that are intentionally related to it – if relevant (e.g., the article may be a part of an article series on the subject).

#### 26. If it fits the style and the subject of your article, make references.

I find that explicit references help me connect things – and therefore understand them.

That is, for example, imagine that two paragraphs talk about one subject: about hardware. But each of them talks about different thing within this subject: the first about the processor, and the second about the RAM. In such a situation, if I saw in the paragraph about the RAM a reference to the paragraph about the processor, I would find it easier to see that both the processor and RAM belong to the same subject, the hardware (if I didn't know that, of course). Such a reference may look like this: "Next, we are going to talk about another hardware component, RAM..."

Such references may be made not only from a paragraph to a paragraph. They may also be made:

- between two concepts in one sentence; e.g., using "but" or "whereas";
- between two sentences; e.g., using "they" or "the aforementioned...";
- between two sections of the article; e.g., by "While in the previous section we talked about...";
- or between your article and another one; e.g., by "The article X talked about Y. Now, we are also going to talk about Y, but from another perspective..."