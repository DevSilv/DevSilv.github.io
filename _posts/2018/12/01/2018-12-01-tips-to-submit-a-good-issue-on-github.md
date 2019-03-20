---
layout: post
title: "Tips to submit a good issue on GitHub"
date: 2018-12-01
tags: Development
---

In this article I would like to present my proposition on submitting a good issue on GitHub. It originates from a page (already non-existing) in the Wiki of my project [silvuss-example-jsgame](https://github.com/silvuss/silvuss-example-jsgame).

## Four disclaimers before we start

**I consider the below tips as "tips".** They are my opinion and somebody should not treat it as requirements nor expectations. It is always up to them to follow the tips or not.

**This article is not intended to be a manual or a guide.** In case of any doubts, prior to this article one should refer to standards, manuals and official guidelines of particular websites, issue tracking systems, utilities or programs.

**This article is not intended to be comprehensive on any subject**, especially neither on writing nor on submitting issues. I might have forget about some important things or aspects of things, or just missed them when reading various documentations. Additionally, there might be cases that I did not forget about a thing being important **objectively**, but not decided to describe it because I have not found it important **subjectively**.

Lastly, **please be aware that I am not an expert in writing nor submitting issues.** I might have made typos, mistakes and errors describing the subject (although I tried not to make any).

## Who is this article for?

This article is mainly for those who start to submit issues – either to projects on GitHub, or just to any project that supports issues. It is also for those who sumbit issues for some time, but want to do it better. Lastly, it is for all of issue submitters to refresh their view on submitting.

## Introduction

**Note:** In this article, I use the term "project" as an synonim for the term "repository". But, it is good to remember that "project" on GitHub may be used in the sense of a "[project board](https://help.github.com/articles/about-project-boards/)".

In this article:
- it is assumed that the issue's creator has a problem with a project hosted on GitHub;
- is is assumed that they have read the project's documentation and similar issues for the project;
- it is assumed that they have done four things mentioned [in this BetterCloud article about IT tickets](https://www.bettercloud.com/monitor/how-to-request-helpdesk-support-it-ticketing/): 1) they have asked others, 2) they have searched online (and offline), 3) they have restarted the application(s) (or: reloaded the website(s)), 4) they have restarted the device(s).
- it is assumed that neither of the aforementioned steps worked.

## GitHub's Issues

### What is an issue on GitHub (a GitHub's issue)?

[GitHub's Issues](https://guides.github.com/features/issues/) are the GitHub's [_issue tracking system_](https://en.wikipedia.org/wiki/Issue_tracking_system)<sup>1</sup>. Every repository on GitHub can use this system.

---

<sup>1</sup> Apart from the term "issue tracking system", there is also used the term "[bug tracking system](https://en.wikipedia.org/wiki/Bug_tracking_system)" (or "bugtracker"). According to Wikipedia, sometimes bug tracking system is a kind of issue tracking system, and sometimes these terms are interchangeable.

---

### The potential of a GitHub's issue

A GitHub's issue is able to contain the following formally specified information:

1. title of the issue;
2. its description (visually, it is a type of comment);
3. its labels;
4. a milestone that it is a part of;
5. its assignee (understood as who are responsible for the issue);
6. comments to it.

What is more, in the description and comments a GitHub's issue is able to contain the following formally specified information:

7. `@mentions` of users;
8. references to other issues;
9. information about events that the issue received;
10. text formatted with [GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/) (formatting for headings, bold and italic text, quotes, code, links, images, lists, emojis etc.);
11. task lists (also allowed by GitHub Flavored Markdown);
12. files attached to the issue.

### Type of information in a GitHub's issue

One could say that a GitHub's issue may contain the following three types of information:

1. The case

    This describes what has made one submitting an issue. Most probably, this would be the main infomation that they are about to communicate.
    
    It includes the answer for the question: "what" (= what is happening). Most probably, it is included in the title of the issue.

    Example: "The search engine does not search any text."

2. The context

    This describes every other information that is in any way related to the case, but is not an information about the issue's environment (see below).

    It includes answers for the following questions: "where", "how", "why". Sometimes it includes also answers to the questions: "when" and "what for" ("what for" would be used e.g. if you are about to propose an improvement). It usually includes description of one's configuration and/or environment (e.g. the operating system that one uses). It may utilize `@mentions` of users and references to other issues.

    Most probably, it is included in the description of the issue, sometimes in the title.

    Example: "If I enter text in the search box and press enter, nothing is happening."

3. The issue's environment

    This describes various things related to the issue, added automatically by GitHub, or manually – either directly by the issue's creator, or later by the issue's maintainers.

    It includes the username of the issue's creator, labels, milestone, assignee, events, or other not formally specified, similar information.

    It is included either in the issue description, in comments, or in a place formally defined by GitHub (specific to the type of information).

### Types of a GitHub's issue

One could say that there exist the following three types of a GitHub's issue:

1. "Bug / error / invalid" issue

    It occurs in case one want to tell about a bug or an error in the project. It means that they know that something is not working, and they know what it is.

    One informs what happens – e.g. "The search engine does not search any text." They use normal sentences. If they decided to use labels, they may use "bug", "error", "invalid" or similar.
    
    Sometimes one may distinguish two subtypes of this type:

    1-A) one **knows** what the expected behavior should be (most probably, it is described in the project's documentation);
    
    1-B) one **does not know** what the expected behaviour should be (most probably, it is **not** described in the project's documentation).

2. "Improvement / enhancement / feature request" issue

    It occurs in case one wants to tell about an improvement or an enhancement of a thing in the project. It is assumed that the thing that they want to describe **is working as expected**, and that the description of this thing in the project's documentation (if it is an already existing thing) **does not contradict** the actual behavior.

3. Other

    It occurs in case one wants to ask or tell about something that does not exactly fit neither of the above. One is not sure what the correct behavior of a thing is, so they want to ask, or just tell about it.

## Tips on how to write a GitHub's issue

### 1. Replicate the behavior.

Try to replicate the behavior that you want to describe. When and where the case occurs may depend on multiple factors that you even do not know that they exist. This means, you may not know whether you might accidentally have biased results of some situation when it happened.

For example, just before the problem occured, you may have closed another application or website, and ome of these "closings" caused the problem. Another situation would be, when a thing happens only once after each reboot of the device.

### 2. Be clear.

Project's maintainers do not always know you, and they do not always may be able to guess what you are about to communicate. This case may exist especially if the project is big (e.g. like Microsoft's [Visual Studio Code](https://github.com/Microsoft/vscode) project).

If you are not sure whether your description is clear enough, just be descriptive and use more words than little (see also below).

### 3. Be descriptive.

Let your description answer the following questions:
- "what" – what happens;
- "where" – what part of the project the problem affects –  if you may provide it;
- "how" – what are the steps that lead to it – if you may provide them;
- "why" – what are the **possible** causes – if you may provide them;
- "when" – what is the environment that the problem happens in; in most cases, that means your operating system version, software version that the problem occurs in, and/or something similar;
"what for" – if you propose an improvement; how the proposed change improves the project.

There is no need to always provide answers to all of them, but ensure that you provided answers to those that you can.

### 4. Describe just the case.

If you are not sure whether two aspects of a problem should be separated or not, write about both – together. Do not guess. Do not worry if they seem to be two issues; just write in a detailed way about each of them. In my opinion, it is up to project's maintainers to analyse the case, not the submitter.

### 5. Describe every detail.

In the case of issues in general (not just GitHub's issues), it is better to use too many words than to little. Provide information about what **exactly** happend in your particular case – even if, at first glance, most of the information seems obvious or says nothing about nothing. In my opinion, it is up to project's maintainers to understand the behavior that is implemented in the project, not the submitter.

### 6. Do not forget about the context.

If you do something in a certain way, it does not mean that project's maintainers do this in the same way. Something that you describe may allow for two different ways of achieving the same result. Even if project's maintainers will know what does not work and how to achieve it, they might not be able to reproduce the wrong behavior. For example, there may be no way that they would guess what configuration you are using. This case may exist especially if talking about e.g. text input – it may be able to contain thousands of different combinations of characters, so searching for the one wrong would be very inconvenient.

### 7. If possible, add labels.

Since GitHub's Issues do not formally specify the _priority_ of an issue, then if it is applicable, it is up to the submitter to include it – in the title, description, comments or labels. In my opinion, the first thing to utilize should be labels. I think that project's mainteners most frequently categorize issues in a way: "bug – more important", "improvement – less important", or similar.

**Note:** Since issue labels on GitHub are freely editable by project's maintainers (they may add new, and remove any label), adding appropriate labels may not be possible in case of every project. If you cannot find any appropriate label, do not add any (so that the project's maintainers would not be confused).

### 8. Remember about issues' types

Issues differ among types. A bug is something different than improvement. A problem related to a bug may be able to be resolved even if there is less information than expected by project's maintainers. In contrast, an improvement proposal usually will not be able to be resolved in such a case.

## Summary

In my opinion, it is better to have too much information than too little. If some of the issues cannot be served in the time that the submitters think that it should – then most probably, it is less a problem of having too much issues, and more of having too little information about them.

## Useful sources

- <https://www.drupal.org/issue-queue/how-to>
- <https://guides.github.com/features/issues/>
- <https://en.wikipedia.org/wiki/Issue_tracking_system>
- <https://en.wikipedia.org/wiki/Bug_tracking_system>
- <https://retailops.zendesk.com/hc/en-us/articles/.203232499-Tips-for-Submitting-Effective-Ticket-Requests>
- <https://www.bettercloud.com/monitor/how-to-request-helpdesk-support-it-ticketing/>
- <https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612>