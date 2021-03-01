---
layout: post
title: "[living] Keyboard navigation within this website in a desktop web browser"
date: 
tags: This-project
---

In this article I'm describing how you can navigate within this website using keyboard in a desktop web browser.

---

**Info:** This document is a [living document](https://en.wikipedia.org/wiki/Living_document) — that is, it may be changed in the future. For the list of changes, see particular commits involving changes to this article within the project's repository.

## Update notes

### 2020-04-24

Because of certain limitations — mostly technology- and time-related — for now I have tested the navigation only within two web browsers: Mozilla Firefox and Chromium. For other web browsers I include only links to their documentation.

## [Mozilla Firefox](https://en.wikipedia.org/wiki/Firefox)

**Important:** As per [this Firefox documentation's page](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly):

> The shortcuts [in Mozilla Firefox — my mention] only work if they are not used by the desktop environment or window manager.

- To move forward and backward between links, use the <kbd>TAB</kbd> and <kbd>SHIFT</kbd>+<kbd>TAB</kbd> keyboard shortcuts, respectively.
- To move forward and backward between a link and the search field, use the <kbd>TAB</kbd> and <kbd>SHIFT</kbd>+<kbd>TAB</kbd> keyboard shortcuts, respectively.


After loading the website (either in a new tab or a new window):

- To move to the website's [browsing context](https://developer.mozilla.org/en-US/docs/Glossary/browsing_context) [1], either:
    - press <kbd>F6</kbd> twice [2];
    - press <kbd>SHIFT</kbd>+<kbd>F6</kbd> once.

Either after loading the website (either in a new tab or a new window), or being in the website's browsing context:

- To focus a link [3]:
    - that is first on the page (counting from the top): press <kbd>TAB</kbd> once;
    - that is last on the page: press <kbd>SHIFT</kbd>+<kbd>TAB</kbd> once.

- To open a focused link in the current tab, press <kbd>ENTER</kbd> once.

---

[1] _Note that there is only one browsing context defined within the website; therefore, I'm always referring to "a website's browsing context", not to "website's browsing contexts"._

[2] _It is required to press this shortcut twice because in Firefox, pressed once, this shortcut focuses the URL bar._

[3] _A focused link is highlighted according to [this CSS stylesheet](https://github.com/silvuss{{ site.baseurl }}/silvuss.github.io/blob/master/css/default.css)._

### Sources

- [https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly)

## [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser))

### Sources

https://www.chromium.org/user-experience/keyboard-access

## [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser))

### Sources

https://support.apple.com/guide/safari/keyboard-and-other-shortcuts-cpsh003/mac

## [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome)

### Sources

https://support.google.com/chrome/answer/157179?hl=en

## [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)

### Sources

https://support.microsoft.com/en-us/help/4531783/microsoft-edge-keyboard-shortcuts
