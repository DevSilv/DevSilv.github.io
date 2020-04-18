---
layout: post
title: "The introduction of releases in the project"
date: 2020-Apr-18
tags: This-project
---

In this article I'm writing about releases in this project. Specifically, I'm mentioning about the versioning scheme.

## Preface

### Definitions of terms

1. In this article by a **"release"** I understand the process, or: act, of distributing a specific version of a software. See also the second meaning of a "release" in English Wiktionary [on this page](https://en.wiktionary.org/wiki/release#Noun).
2. In this article by **"releasing a version of this website's sources"** I understand "labelling some «subset» of the website's sources (either published before a while or some time ago) with a version number". Thus, here by "releasing" I do not necessarily mean publishing any **new** sources. I've come to the conslusion that such understanding will be the least confusing included the fact that I publish on GitHub. GitHub allows to publish sources without making a "release" in terms of GitHub's functionality of "releases"; and, the other way round, it allows to "label" already published sources with a version number, effectively making a release (in terms of GitHub's functionality of "releases"). I think that both of these actions may be defined as "releasing".

## Introduction

### Why such article?

I think information in this article might be helpful for anyone that aims to understand this project.

## How has versioning the sources been introduced to this project?

Before 2020-04-14 (+00:00) — as far as I can recall, and if I have obtained the date correctly from the `git reflog` command's output — there were no releases made in this project.

On 2020-04-14, I released the versions 2.0 and 2.1 of the website's sources. In the following days, I released the versions 2.2, 3.0 and 3.1. On 2020-04-17, I released the version 1.0.

As the version 2.1 I released the sources that contained new commits as of the day of releasing. On the other hand, as the versions 2.0 and 1.0 I released the sources that didn't contain new commits as of the day of releasing; they contained only commits that were done before that day.

## Why making releases at all?

The reasons for not making any releases at all in this project before is, I didn't feel like both I and the visitors of this project would benefit from this.

Of course, from time to time I still wanted to "separate" a version of the sources, specifically when the change to the sources was significant. But this was possible to do another way, not by releases. On GitHub, it's very easy to clone a repository. And cloning a repository effectively separate the old "version" of the sources in the repository from the new "version" of them. Thus, before starting making releases I was cloning and "archiving" the created copies (i.e., just marking them with the word "ARCHIVED"). By today, I've made two such copies — you can view it [here](https://github.com/silvuss/ARCHIVED-silvuss-thoughts-plain-css) (the first one, plain CSS styles) and [here](https://github.com/silvuss/ARCHIVED-silvuss-thoughts-bootstrap) (the second one, Bootstrap styles). (Unfortunately, they're not working as expected on GitHub Pages because of broken links caused by changing the names of the repositories. For now I don't know whether to fix it or not.)

The reasons for starting making releases are:

1. I wanted to formalize the process of "releasing" in this project;
2. I felt that the complexity of the changes that I wanted to introduce fit better into the framework of "formalized" releases.

## Why starting making releases from such versions?

I've come up with the idea of releasing when there were already some sources of the website developed and published. Because of that, I had to determine:

1. what version I should release the last created commit as;
2. if this version wouldn't be numbered 1.0, what commits will be the best to relate to what versions in the range from the version number 1.0 (inclusive) to the starting version number (exclusive). (For details on version numbers, see the section "[A new versioning scheme](#A-new-versioning-scheme)" in this article.)

From the beggining I would have liked to start releasing from the version 1.0; it didn't matter for me whether I would start releasing from new or already existing commits. I would have also liked to incorporate the most significant changes made so far to the sources into the idea of releasing. Because of those two points, I decided to release the last commit of already existing sources as version 2.0. (Therefore, new commits would need to start from version 2.1 or 3.0; refer to the section "[A new versioning scheme](#A-new-versioning-scheme)" in this article for details on why such version numbers.)

The reason for choosing the version 2.0 was, I recognised that there were two commits that have been introducing significant changes to the sources during their development (I've mentioned them in this article already). The first one was the last commit created before introducing Bootstrap styles to the website. The second one was the last commit created before introducing plain CSS styles again (that is, the last commit created before starting making releases).

The reason for releasing the version 2.0 — and consecutive versions — before the version 1.0 was, starting making releases I didn't know yet what commit the version 1.0 should start with.

## A new versioning scheme

There is already an article published on this blog, "[The conventions for GitHub projects that I use]({{ site.url }}/2019/09/07/the-conventions-for-github-projects-that-i-use.html)"; it contains my own rules about my own projects. Particularly, it states that:

> To version the releases, Semantic Versioning is to be used.

I can't recall today my exact intentions the time I was writing this. Nonetheless, treating that statement literally, from my current point of view it seems not to fit best this project's needs. This project consists mainly of graphical UI, and it seems that Semantic Versioning doesn't let to easily version such interfaces (at least it seems for me). It turned out that the main problem here was that I cannot easily isolate a public API within the interface of this website.

So, I concluded that I need to use another versioning scheme. I made a little search in the web, but found no established versioning schemes for graphical UI. Therefore, I've concluded that for this project it would be best to create a new scheme.

The scheme that I've created defines a version number as having two "fields" separated by a dot. The first "field", before the dot, is an integer from the range [0,infinity). One may say it designates the main part of the version number. It relates to changes in functionalities; that is, it changes when there happens at least one of the following situations:

- the version introduces a removal of a functionality;
- the version introduces a deprecation of a functionality;
- the version introduces a new functionality.

The second field, after the dot, is an integer from the range [1,infinity). One may say it designates the secondary part of the version number. It relates to any other changes that was introduced to the project.

## A note about release notes

For now, there's yet a little problem to solve when it comes to making releases in this project. The scheme of Semantic Versioning was easier for me to map on release notes than the new scheme that this project uses. That is, it's easier for me to write release notes based on rules of Semantic Versioning; in case of this new scheme, I have yet to come up with a good way of doing that.

Because of this problem, release notes of the versions released so far have slightly different format compared to each other. During the few next releases I'm going to assess what shape of the format will represent the best mapping from this new scheme onto release notes. So, the format may vary.