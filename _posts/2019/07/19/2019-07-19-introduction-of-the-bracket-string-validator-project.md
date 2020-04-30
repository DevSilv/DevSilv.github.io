---
layout: post
title: "Introduction of the bracket-string-validator application"
date: 2019-07-19
tags: Application GitHub
---

In this article, I am glad to introduce my new application: bracket-string-validator.

Although this is not the first application of mine that I have made available publicly, of this GitHub project I have greater expectations than of the other ones (at least it seems to me).

The project may be reviewed [here on GitHub](https://github.com/devsilv/devsilv-bracket-string-validator). As all of the other projects of mine on GitHub, it has no license. But still, if you want – you may, among others, fork the repository (it is allowed by the [GitHub Terms of Service](https://help.github.com/en/articles/github-terms-of-service)). For details on what you may do with the project, see the section "[5. License Grant to Other Users](https://help.github.com/en/articles/github-terms-of-service#5-license-grant-to-other-users)" of the GitHub Terms of Service.

The project contains one application of the same name. The current release of the application has the following three functionalities:
1. it lets to validate a "bracket string" – using one of several algorithms;
2. it lets to unit-test the validation algorithms;
3. it lets to benchmark the validation algorithms.

A "bracket string" is, as the project [README](https://github.com/devsilv/devsilv-bracket-string-validator/blob/master/README.md) states:
> ...a string that consists only of properly closed brackets (be it `()`, `[]` or `{}`); what is more, brackets of each type must be closed properly in relation to all of the other types that exist in the string. Examples of bracket strings: `()` or `({()})[]`. Examples of "non-bracket strings": `)(` or `([)]`.


The current release is 1.1.0, and there is planned the release 1.2.0. 

You can read more details about the application in its [README](https://github.com/devsilv/devsilv-bracket-string-validator/blob/master/README.md), or in its documentation within the [/docs directory](https://github.com/devsilv/devsilv-bracket-string-validator/tree/master/docs). In case of any doubts, refer to the source code.

## Ambitions and expectations

I realise that the usability of the current release of the application is **scant**. Nonetheless, I have some ambitions and expectation about this project.

### A showcase of mine

I wish that one day this project will become my showcase. In particular, the project would:
- have closed all of those issues that describe bugs or invalid behavior;
- have the releases well-described; releases would have the changes divided reasonably through themselves; for example, for a set of new features, there would be multiple releases with one or two features each instead of one "big" release with all the new features.

The application itself would:
- have its code and comments formatted and written in a clear and concise way; also, they might utilize some good practices of writing code and comments; my current motto for the code is "self-documenting";
- have fixed its most obvious vulnerabilities (I do not mean here the vulnerabilities of external software);
- be well-tested in terms of some testing models and good practices;
- be available on multiple platforms; I mean, one could use the application equally e.g. on Windows, Linux, MacOS and/or Android; this could be achieved also by implementing some interface available through the internet and compatible across different browsers;
- have its interfaces effortless to use;
- be available for multiple users; it shall embrace e.g. those who use screen readers and/or other [assistive technology for using the computer](https://en.wikipedia.org/wiki/Assistive_technology#Computer_accessibility);
- have the documentation describing, in a readable way, all the necessary things to use the application; users would not need to wonder where to find particular information.

Additionally, it would be nice if the application would:
- utilize on production some third-party software for a good reason; it could be e.g. a routing library and/or GUI framework;
- utilize for development some third-party software for a good reason; it could be e.g. a testing framework;
- utilize more than one programming language; although this hope is already fulfilled (the logic is implemented in JavaScript, and the CLI in Bash), I think that it could still be enhanced in the future.

The above points are, of course, only an overview of my ambitions and expectations. The future will show which are reliable.

### Help with another project

I am currenly having trouble with learning the basics of the [Angular web framework](https://en.wikipedia.org/wiki/Angular_(web_framework)). I hope that I could use this project to incorporate in it an interface written in Angular; therefore I would be able to make my first Angular application.

## More concrete plans

If you want to see my most concrete plans about this project, see [the project issues](https://github.com/devsilv/devsilv-bracket-string-validator/issues). I try to describe there, in a readable way, what is going to be done. Currently, I do not maintain another design of, or specification for the future functionality of the application.
