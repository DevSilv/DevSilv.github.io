---
layout: post
title: "The conventions for GitHub projects that I use"
date: 2019-09-07
tags: GitHub Software-development Projects
---

**UPDATE:**

I wrote a new article about my Git workflow; you can read it [here]({{ site.url }}/2020/04/18/living-my-git-workflow.html). It extends and improves the Git workflow described in this article.

**Important:** the workflow described in this article is effectively becoming superseded with the workflow described in the new article. If you need to refer to the description of my workflow, **please refer only to the new article**.

---

In this article, I attempt to tell you about my conventions while working with projects that are to be published on GitHub (speaking differently, that are to be **public** on GitHub). They are to be read as "conventions that are to be obeyed within my personal projects".

These conventions are already written in the developer documentation of my project "[bracket-string-validator](https://github.com/silvuss/silvuss-bracket-string-validator)". I have decided to describe them again here, in a new blog post, to gain some clarity and consitency across all of my projects on GitHub. Comparing with the original one, the description is slightly changed, but significantly added to.

However, it's worth mentioning that I already have some projects on GitHub that **do not** follow all (in some cases, maybe even any) of these conventions. This is to be changed in the future, since I aspire to gain uniformity across all of my public projects on GitHub. Projects marked as "ARCHIVED" are not to be changed.

## Git

### Workflow

My workflow using Git is a simpler version of [One Flow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow). Main differences:
- I name branches differently.
- Since most of the time I relate one release to one new feature, I do not use feature branches; instead, I use only release branches. This involves that a release branch may contain work on more than one feature.
- I do not name any branches "_hotfix branches_"; instead, these issue branches that are created directly from the main branch are to be considered as such.

In particular, among others, this means that:
1. One and only one branch is to be named `master`; this is the main branch.
2. **Creating branches.**
    - When? — A branch is to be created:
        - in case of a release: before starting the development of the release; such a branch is called "release branch";
        - in case of an issue: before starting the development of the issue; such a branch is called "issue branch".
    - From what branch? — A branch is to be created:
        - in case of a release: from the main branch;
        - in case of an issue: from a release branch or from the main branch.
3. **Removing branches.** A branch is to be removed:
    - in case of a release branch:
        1. after finishing the development of the release related to the branch,
        2. AND after merging the branch into its parent branch;
    - in case of an issue branch:
        1. after finishing the development of the issue related to the branch,
        2. AND after merging the branch into its parent branch.
5. **Rebasing.** A branch is to be rebased onto its parent branch:
    - in case of a release branch: after finishing the development of the release related to the branch;
    - in case of an issue branch: after finishing the development of the issue related to the branch.
4. **Merging.** A branch is to be merged into its parent branch after rebasing the branch onto its parent branch.
5. **Pulling.** A "complete" pull (i.e., code, branches, tags etc.) is to be done when:
    - in case there is only one contributor to the project:
        1. before starting the development of the project for the first time,
        2. AND when necessary;
    - in case there are multiple contributors to the project:
        1. before starting the development of the project for the first time,
        2. AND before starting the development of the project at a given day,
        3. AND before each push,
        4. AND when necessary.
6. **Pushing:**
    - A push-with-tags-and-branches (i.e., branches, tags, code, etc.) is to be done (the number of contributors does not matter here):
        - in case of a release:
            1. at the end of the day that the development of the release is started on,
            2. AND when the development of the release is finished;
        - in case of an issue:
            1. at the end of the day that the development of the issue is started on,
            2. AND when the development of the release is finished.
    - A push-without-tags-and-branches (i.e., code etc.) is to be done:
        - in case there is only one contributor to the project: when necessary;
        - in case there are multiple contributors to the project:
            - in case of an issue:
                1. at the end of each day of the development of the issue,
                2. AND when necessary.
            - in case of a release:
                1. at the end of each day of the development of the release,
                2. AND when necessary.

### Tags

#### Tags and release branches

- A release branch is to contain one and only one tag.
- The tag for a release branch is to be lightweight. However, the [git-tag documentation](https://git-scm.com/docs/git-tag) says, as of 2019-july-20, that:
    > Tag objects (created with -a, -s, or -u) are called "annotated" tags; they contain a creation date, the tagger name and e-mail, a tagging message, and an optional GnuPG signature. Whereas a "lightweight" tag is simply a name for an object (usually a commit object).
    > 
    > Annotated tags are meant for release while lightweight tags are meant for private or temporary object labels. For this reason, some git commands for naming objects (like git describe) will ignore lightweight tags by default.
    
    Nonetheless, this quote does not explain to me why the annotated tags would be better in my case. Of course, I may start to use them in the future.
- The tag for a release branch is to be named the same as this release branch, but without the letter "v" at the beginning. For example, if the name of a release branch is "v1.1.1", then the name of the tag for this branch is to be "1.1.1". This is due to avoiding errors of some Git refs being the same. Such errors occured to me in the past (but I do not know the exact reasons why).

## GitHub

### Issues

- Issues are to store the actual project state (what is to be done) and its history (what has been done). Therefore, they may be created even after the actual changes have been done (in the code, in the project's configuration etc.) to keep the history of the changes.
- An issue is to correspond to one and only one commit. Nonetheless, there may be cases when closing/fixing one issue involves closing/fixing multiple other issues. In such case, there will be multiple commits made; among them, only the last commit corresponds to this issue.

#### Issues with some information missing

These issues are to be labeled with the label "question".

#### Issues describing enhancements, improvements and updates

These issues are to be labeled with the label "enhancement".

#### Issues referring to documentation

These issues are to be labeled with the label "documentation".

#### Issues not to be fixed

Some issues might seem ambiguous (after some analysis), or might be found referring to problems assumed as "non-fixable". This may be especially true if the project is maintained by more than one person.

These issues are to be labeled with the label "wontfix".

#### Issues describing bugs

Issues desribing bugs are to describe a behavior:
- the expected result of which either is **explicitly** described in the documentation, or **directly** results from it;
- the expected result of which differs from its actual result in any way.

These issues are to be labeled with the label "bug".

#### Issues describing invalid behavior

Issues describing invalid behavior are to describe a behavior:
- the expected result of which **indirectly** results from the documentation;
- the expected result of which differs from its actual result in any way.

These issues are to be labeled with the label "invalid".

#### Issues describing deprecation and removal of functionalities provided by the public API

- For the deprecation of a functionality, a separate issue is to be created.
- For the removal of a functionality, a separate issue is to be created. This issue cannot be created when there is no issue for deprecation of this functionality. This issue has to be scheduled in the next minor-or-major release, starting from the issue with the deprecation of this functionality.

These issues are to be labeled with the labels, respectively, "public API deprecation" and "public API removal".

### Releases

- Releases are not to be made with any schedule.
- To version the releases, [Semantic Versioning](https://semver.org/spec/v2.0.0.html) is to be used.
- A release is to be of one of three types: major release, minor release and patch release. These types are dedicated to correspond more or less to the version numbers in Semantic Versioning. Additionally, a release of any type may be marked as unstable. 
- The version number of a release are not to indicate that this release is unusable, contains bugs, invalid behaviour or similar. This means that **all** of the releases **may** be unusable, contain bugs, invalid behaviour and similar. 
- Releases are to be named the same as their version numbers.
- There is to be **no differentiation** for critical, major and minor bugs in a release (e.g. neither in its title, in its description nor in its version number). In particular:
    - a bug that could be considered as / named critical (or similar) is to be named "bug";
    - a bug that could be considered as / named major (or similar) is to be named "bug";
    - a bug that could be considered as / named minor (or similar) is also to be named "bug".

#### Major releases

Major releases are those releases which versions have the major version number increased. Such releases are made when there have been made backward-incompatibile changes to the public API.

#### Minor releases

Minor releases are those releases which versions have the minor version number increased. Such releases are made when either:
- there have been introduced new features to the public API;
- there have been made some greater additions or changes to any part of the code (not just the public API);
- any part of the public API has been deprecated.

The deprecation of the public API is to be one-minor-or-major-release long. For example: if a feature is deprecated from the release 1.0.0 on, there may occur one and only one of the following situations:
- If no parts of the public API have been deprecated in the last release, this feature will exist for the next release 1.1.0 and will be removed in the release 2.0.0. Due to the deprecation, no release with the version of the form 1.2.x will be made (for details why is that, see the [point 7 of the specification of Semantic Versioning, v2.0.0](https://semver.org/spec/v2.0.0.html#spec-item-7))
- If any parts of the public API have been deprecated in the last release, this feature will exist for the next release 2.0.0 and will be removed in the release 3.0.0. Due to the deprecation, no release with a version of a form 2.y.x will be made.

#### Patch releases

Patch releases are those releases which versions have the patch version number increased. Such releases are made when there has been fixed at least one issue describing at least one bug or one invalid behavior.

A release may introduce more than one patch for more than one bug; in such case, the bugs have been found related to each other (more or less closely).

Bugs and invalid behavior are fixed immediatelly as they are discovered (and as soon as it is feasible, of course :) ).

#### Unstable releases

An unstable release, in particular:
- may have new features added (either to the public API or not);
- if it introduces new features, may have some or all of these features removed (either that which are to be introduced to the public API or not);
- may have some existing features made deprecated (from the public API).

An unstable release is to be indicated by putting a postfix at the end of its version number, in a form of `-beta` or `-beta.1`, `-beta.2` and so on.

## Git in relation to GitHub

### Releases and release branches

- A release is to correspond to one and only one release branch, and a release branch is to correspond to one and only one release.
- A release branch is to be named almost the same as the corresponding release; the only change is that the name of the release branch is to contain an additional letter "v" at the beginning. For example, if the name of a release is "2.1.2", then the name of the branch for this release is to be "v2.1.2".

### Commits and issues

A commit is to correspond to zero or one issue.




https://developer.github.com/v3/#rate-limiting