---
layout: post
title: "[living] My Git workflow"
date: 2020-04-18
tags: Git Workflow Software-development
---

In this article I'm writing about a workflow that I follow (try to follow) using the [Git version-control system]((https://en.wikipedia.org/wiki/Git)).

**Important:** This document is a [living document](https://en.wikipedia.org/wiki/Living_document) — that is, it may be changed in the future. For the list of changes, see particular commits involving changes to this article [on this page]({{ site.baseurl }}/blob/master/_posts/2020/04/18/living-my-git-workflow).

## Preface

### Who is this article for?

Writing this article, I'm assuming two things about you, the reader:

1. You know what Git is and have some practice with it.
2. You know what GitHub is.
2. You known any particular workflow using Git; you will then (better) see whether there are any incosistencies or flaws in my approach.

## Introduction

Already, there exist various flavours of a Git workflow — e.g., [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) and [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow). Nonetheless, I chose to create my own one — to fit my needs best.

This article is a second attempt to create my own Git workflow. The first one is described in the article "[The conventions for GitHub projects that I use]({{ site.url }}/2019/09/07/the-conventions-for-github-projects-that-i-use.html)" on this blog. The reason for making a second attempt is, I've come to the conslusion that the first one is not comprehensive. Also, the article containing the first attempt describes both my Git and my GitHub workflows, and I wanted to separate them for better clarity of their specifications.

I designed the workflow solely for my own purposes. Therefore, it's not designed for more than one person; however, I didn't evaluate for how many people it **could** work.

I've grouped the workflow's description into 4 sections: the first section covers commits; the second section covers branches; the third section covers tags; finally, the fourth section covers pulling and pushing changes.

**The workflow intentionally doesn't cover all of the Git functionalities.** It's because I don't know all of them, let alone knowing how to use them. I tried to concentrate on functionalities that I know of and that seem to be most useful for my day-to-day work with Git.

## Specification of the workflow

### Commits

#### General

1. A commit is to consists of the results of all of the smallest possible individual parts of work, of which at least one part is disallowed to be committed separately from at least one other part of them by the tool used to committing. <a id="1top" href="#1bottom">[1]</a>

#### Creating commits

1. A commit is to be created:
    1. When? — as soon as all of the work that the commit embraces the result of is done.
    2. With what message?
        1. In case of the title (subject) of the commit: the title is to fulfil all of the following conditions <a id="2top" href="#2bottom">[2]</a>:
            1. It is about 70 <a id="3top" href="#3bottom">[3]</a> characters long or less. <a id="4top" href="#4bottom">[4]</a>
            2. It consists of a list containing one or more elements separated by the string ", " (comma-space), where each element describes one and only one part of work from all of the parts of work that the commit embraces the results of.
            3. The first element of its list starts with a capital letter.
            4. Each of the elements of its list, if possible, is written in the imperative mood.
            5. For each of the elements of its list, if the element corresponds to an issue <a id="5top" href="#5bottom">[5]</a>, it consists of a string "fix #_n_" (with uppercase "f" letter if the section is at the beginning of the title of the message), where _n_ represents the ID of the issue.
            6. Each of the elements of its list is meaningful for the part of work that the element describes.
            7. Each of the elements of its list, if possible, represents the intentions for doing the part of work that the element describes.
            8. Each of the elements of its list, if the description of the issue that the element corresponds to does not corresponds 1:1 to the part of work that element describes, the element, if possible, describes the mapping between the description of the issue and the description of the part of work.
        2. In case of the part of commit message beyond the commit's title: this part is to fulfil all of the following conditions:
            1. It consists of a list containing zero or more elements, but no more than the list within the commit's title; the _ith_ element of this list corresponds to the _ith_ element of the list within the commit's title.
            2. Each of the elements of its list starts with a capital letter.
            3. Each of the elements of its list ends with a dot.
            4. Each of the elements of its list, if possible, is written in the imperative mood.
            5. Each of the elements of its list represents a longer <a id="6top" href="#6bottom">[6]</a> description of the part of work that is described by the corresponding element of the list of the commit's title.
            6. Each of the elements of its list is meaningful for the part of work that is described by the corresponding element of the list of the commit's title.
            7. Each of the elements of its list, if possible, represents the intentions for doing the part of work that is described by the corresponding element of the list of the commit's title.

#### Changing/deleting/removing/replacing commits

1. A commit is not to be changed/deleted/removed/replaced in any case — no matter whether the change/deletion/removal/replacement has been initiated by the `git-amend` command, the `git-rebase` command or any other Git command.

### Branches

#### General

1. One and only one branch is to have a name "master"; a branch with this name is to be always present in a project.
2. A branch other than the "master" branch corresponds to one and only one release.

#### Creating branches

1. A branch other than the "master" branch is to be created:
    1. When? — before starting the development of the release.
    2. From what branch? — from the "master" branch.
    3. With what name? — "release-_n_", where _n_ is the version number of the version of the software, the result of the work on which version the branch represents. <a id="6top" href="#6bottom">[6]</a>

#### Merging branches

1. A branch other than the "master" branch is to be merged:
    1. When? — as soon as there is no part of work that the version of the software, the release of which the branch corresponds to, is to contain the result of, such that its result is not contained within any commit within the branch.
    2. With what branch? — with the branch it is created from.

#### Deleting branches

1. The "master" branch is not to be deleted in any case.
2. A branch other than the "master" branch is to be deleted after merging it without any conflicts.

### Tags

#### General

1. Only lightweight tags are to be created.
2. A lightweight tag corresponds to one and only one version of the software.

#### Creating tags

1. A lightweight tag is to be created:
    1. When? — as soon as the branch that corresponds to the release that corresponds to the version of the software that the tag corresponds to is merged and deleted.
    2. On what commit? — the commit that has been created last within the branch that corresponds to the release that corresponds to the version of the software that the tag corresponds to.

#### Deleting tags

1. A lightweight tag is to be deleted in case the release that corresponds to the version of the software that the tag corresponds to is discarded.

### Pulling and pushing

#### Pulling

1. Changes are to be pulled just before creating a new branch from the "master" branch.

#### Pushing

1. New commits within the "master" branch are to be pushed immediately after tagging a commit.
2. New commits on a branch other than the "master" branch are never to be pushed.
3. A lightweight tag is to be pushed as soon as the commit that the tag is created on has been pushed.

---

<a id="1bottom" href="#1top">[1]</a> _By a "tool used to committing" I understand either Git itself (i.e., the `git-commit` command), or any tool that facilitates using Git commands by some "abstractions" built on top of them (e.g., Visual Studio Code)._

<a id="2bottom" href="#2top">[2]</a> _One may notice that I'm defining the conditions for a commit message as a mix: conditions for its meaning and conditions for its formatting. There are two reasons for that: a) in terms of [character encoding](https://en.wikipedia.org/wiki/Character_encoding) those two things may be considered the same; b) I think that it will increase simplicity of the structure of the specification._

<a id="3bottom" href="#3top">[3]</a> _I chose the number "70" only because I've seen it in some of the sources on the topic of good commit messages in Git._

<a id="4bottom" href="#4top">[4]</a> _The fewer the better._

<a id="5bottom" href="#5top">[5]</a> _I'm aware that the term "issue" is sometimes (or often?) used specifically in the context of the GitHub platform. Nonetheless, I use it throughout this article in the sense of a general concept of [issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system)._

<a id="6bottom" href="#6top">[6]</a> _The shorter the better._

<a id="7bottom" href="#7top">[7]</a> _For details on the version numbers, see the article "[My GitHub workflow (TODO)]" on this blog._

## Sources

Not all of the following sources directly influence the shape of my Git workflow.

- own experience with Git
- https://www.endoflineblog.com/gitflow-considered-harmful
- https://www.endoflineblog.com/follow-up-to-gitflow-considered-harmful
- https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow
- https://guides.github.com/introduction/flow/
- https://www.atlassian.com/git/tutorials/comparing-workflows
- https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow