---
layout: post
title: "Tips to submit a good issue on GitHub"
date: 2018-12-01
tags: linux shell programming bash
---

In this article I would like to show you my proposition on submitting a good issue on GitHub. It originates from a page (already non-existing) in the Wiki of my project [silvuss-example-jsgame](https://github.com/silvuss/silvuss-example-jsgame).

## Four disclaimers before we start

**I consider the below tips as "tips".** They are my opinion and you should not treat it as requirements nor expectations. It is always up to you to follow them or not.

**This article is not intended to be a manual or a guide.** In case of any doubts, prior to this article one should refer to standards, manuals and official guidelines of particular websites, issue tracking systems, utilities or programs.

**This article is not intended to be comprehensive on any subject**, especially neither on writing nor on submitting issues. I might have forget about some important things or aspects of things, or just missed them when reading various documentations. Additionally, there might be cases that I did not forget about a thing being important **objectively**, but not decided to describe it because I have not found it important **subjectively**.

Lastly, **please be aware that I am not an expert in writing nor submitting issues.** I might have made typos, mistakes and errors describing the subject (although I tried not to make any).

## Introduction

In this article:
- I assume that you have a problem with a project hosted on GitHub.
- I assume that you have read the documentation and other issues, and therefore you are aware whether you can or cannot see your problem described here.
- I assue that you have done four things mentioned [in this BetterCloud article about IT tickets](https://www.bettercloud.com/monitor/how-to-request-helpdesk-support-it-ticketing/): 1) asked others, 2) searched online (and offline), 3) restart the application(s) (or: reload the website(s)), 4) restart the device(s).
- I assume that neither of them worked.

### Issues on GitHub

Issues, more formal [GitHub's Issues](https://guides.github.com/features/issues/), are the GitHub's [_issue tracking system_](https://en.wikipedia.org/wiki/Issue_tracking_system)<sup>1</sup>. Every repository on GitHub has functionality of this system.

### The potential of a GitHub's issue

A GitHub's issue is able to contain the following formally specified information:

1. Its title.
2. Its description (visually, it is a type of comment).
3. Its labels.
4. A milestone that it is a part of.
5. Its assignee.
6. Comments to it.

What is more, in the description and comments a GitHub's issue is able to contain the following formally specified information:

7. @mentions of users.
8. References to other issues.
9. Information about events that it received.
10. Text formatted with [GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/) (headers, bold and italic text, quotes, code, links, images, lists, emojis etc.).
11. Task lists (also allowed by GitHub Flavored Markdown).
12. Files attached to it.

### A GitHub's issue in general

I would say that a GitHub's issue may contain three types of elements. I present them in the table below.

|No.|Name|Description|What sort of information does it include?|Where is it included?|An example|
|-|-|-|-|-|-|
|1|The case|This describes what has made you submitting an issue. Most probably, this would be the main infomation that you are about to communicate. Sometimes, it is not communicated directly.|It includes the answer for the question: **what** (= what is happening).| Most probably, it is included in the issue's title.|"The search engine is not working."|
|2|The context|This describes every other information that is in any way related to the case.|It includes answers for the following questions: where, how, why. Sometimes it includes also answer to the question: when, what for ("what for" would be used e.g. if you are about to propose an improvement). It usually include your configuration and environment (e.g. the operating system that you use). It may utilize @mentions of users and references to other issues.|Most probably, it is included in the issue's description, sometimes in the title.|"If I enter text in the search box and press enter, nothing is happening."|
|3|The environment|This describes various things related to the issue, added directly by you or later by maintainers of the issue.|It includes your username, labels, milestone, assignee, events or other not formally specified, similar information.|It is included either in the issue description, in comments, or in a formally defined place.||

In the tips, I use the term "project" as an synonim for the term "repository". But, it is good to remember that "project" on GitHub may be used in the sense of a "[project board](https://help.github.com/articles/about-project-boards/)".

---

<sup>1</sup> Apart from the term "issue tracking system", there is also used the term "[bug tracking system](https://en.wikipedia.org/wiki/Bug_tracking_system)" (or "bugtracker"). According to Wikipedia, sometimes bug tracking system is a kind of issue tracking system, and sometimes these terms are interchangeable.

### Types of issues

I would say that there might exists three types of issues on GitHub. I present them in the table below.

|No.|Name|Description|
|-|-|-|
|1|"Bug/error/invalid" issue|It occurs in case you want to tell about a bug / an error. It means that you know that something is not working, and you know what it is. Sometimes it may be good to split this type into two subtypes: 1) you know what should be the expected behavior (most probably, it is described in the project's documentation); 2) you do not know what should be the expected behaviour (most probably, it is not described in the project's documentation).|Inform what happens, e.g. "Searching does not work". Just use normal sentences. If you decided to use labels, you may use "bug", "error" or similar.|
|2|"Improvement/enhancement/feature request" issue|It occurs in case you want to tell about an improvement or an enhancement of a thing. It presumes that the thing you want to describe is working **as expected**. The description of this thing in the project's documentation **should not contradict** the actual behavior. The project documentation may lacks the description of this thing.|
|3|Other|It occurs in case you want to tell about something that does not fit neither of the above. You are not sure whether something could work different or better, but you want to tell about it anyway.|

## Tips on how to write an issue

- Try to replicate the behavior that you want to describe. It may depend on several factors that you even do not know that exist (so, you do not know whether you may accidentally have biased the results). For example, you may close another application or website, or a thing happens only the first time after rebooting the device.
- Be clear. Project's maintainers do not always know you and do not always may be able to guess what you are about to communicate – especially if the project is big (e.g. like Microsoft's [Visual Studio Code](https://github.com/Microsoft/vscode) project).
- Be descriptive. In the case of issues, it is better to use too many words than to little.
- If you are not sure whether two aspects of a problem should be separated, write about both. Do not guess. Do not worry if they seem to be two issues; just write in a detailed way about both of them. In my opinion, it is up to project maintainer's to analyse the case, not the submitter.
- The above involves that you should not generalize the problem on your own. Provide information about what happend in you particular case – even if, at first glance, most of the information seems obvious or says nothing about nothing.
- Do not forget about the context. If you do something in a certain way, it does not mean that project's maintainers do this in the same way. Something that you describe may allow for two different ways of achieving the same result. Even if project's maintainers will know what does not work and how to achieve it, they might not be able to reproduce the wrong behavior. For example, there may be no way that they would guess what configuration you are using – especially if talking about e.g. text input, which may be able to contain thousands of different combinations of characters.
- Since GitHub's Issues do not formally specify the _priority_ of an issue, if it is applicable, it is up to the submitter to include it in the title, description, comments or labels. In my opinion, the first thing to utilize should be labels. I think that project's mainteners most frequently categorize issues in a way: "bug – more important", "improvement – less important", or similar.
- Issues differs among types. A bug is something different than improvement. A problem related to a bug may be able to be resolved even if there is less information than expected by project maintainer's. A proposal of improvement usually will not be able to be resolved in such a case.

## Summary

In my opinion, it is better to have too much information than too little. If some of the issues cannot be served in the time the submitters think that it should, it is less a problem of having too much issues, and more of having too little information about them.

## Sources that I used

- https://github.com/
- https://guides.github.com/features/issues/
- https://en.wikipedia.org/wiki/Issue_tracking_system
- https://en.wikipedia.org/wiki/Bug_tracking_system
- https://retailops.zendesk.com/hc/en-us/articles/203232499-Tips-for-Submitting-Effective-Ticket-Requests
- https://www.bettercloud.com/monitor/how-to-request-helpdesk-support-it-ticketing/
https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612