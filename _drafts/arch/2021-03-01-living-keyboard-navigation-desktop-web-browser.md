---
layout: post
title: "[living] Keyboard navigation on this website using a desktop web browser"
date: 2021-03-01
tags: This-project UX
---

In this article I woudl like to describe how you can navigate on this website using only the keyboard and a desktop web browser.

---

**Info:** This document is a [living document](https://en.wikipedia.org/wiki/Living_document) — that is, it may be changed in the future. For the list of changes, see particular commits involving changes to this article within the project's repository.

## Mozilla Firefox

**Important:** As per [[1]](#1):

> The shortcuts only work if they are not used by the desktop environment or window manager.

---

### Shortcuts working between pages

To navigate to the page visited previously, press <kbd>ALT</kbd>+<kbd>LEFT ARROW</kbd>. To navigate back to the last visited page, press <kbd>ALT</kbd>+<kbd>RIGHT ARROW</kbd>.

### Shortcuts working within a page

#### Moving to the browsing context of the website

Right after loading the website (either in a new tab or a new window), to move to its [browsing context](https://developer.mozilla.org/en-US/docs/Glossary/browsing_context), either:

- press <kbd>F6</kbd> twice,
- or press <kbd>SHIFT</kbd>+<kbd>F6</kbd> once.

It is required to press the <kbd>F6</kbd> shortcut twice because in Firefox, if pressed once, the URL bar is focused.

#### Moving between elements on a page

To move forward and backward between links (by focusing them), use the <kbd>TAB</kbd> and <kbd>SHIFT</kbd>+<kbd>TAB</kbd> keyboard shortcuts, respectively.

To move forward and backward between a link and the search field (by focusing them), use the same shortcuts as for moving between links: <kbd>TAB</kbd> and <kbd>SHIFT</kbd>+<kbd>TAB</kbd>, respectively.

Specifically, either right after loading the website (either in a new tab or a new window), or being in the website's browsing context, to focus a link:

- that is first on the page (counting from the top): press <kbd>TAB</kbd> once;
- that is last on the page: press <kbd>SHIFT</kbd>+<kbd>TAB</kbd> once.

#### Opening links

To open a focused link in the current tab, press <kbd>ENTER</kbd> once.

## Sources

<span id="1">[1]</span> https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly

## Other useful links

- https://www.chromium.org/user-experience/keyboard-access
- https://support.apple.com/guide/safari/keyboard-and-other-shortcuts-cpsh003/mac
- https://support.google.com/chrome/answer/157179?hl=en
- https://support.microsoft.com/en-us/help/4531783/microsoft-edge-keyboard-shortcuts
- https://html.spec.whatwg.org/multipage/browsers.html#browsing-context
