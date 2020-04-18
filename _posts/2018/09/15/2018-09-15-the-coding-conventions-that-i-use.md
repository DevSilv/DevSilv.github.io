---
layout: post
title: "The coding conventions that I use"
date: 2018-09-15
tags: Software-development
---

There are many [coding conventions](https://en.wikipedia.org/wiki/Coding_conventions) out there. In this article I attempt to tell you about mine. Note that when it comes to some tips on the coding style and some of the best coding practices (that I try to use), I have already written [an article]({{ site.url }}/2018/07/10/the-things-that-every-blogging-developer.html).

I will cover my coding conventions of the following languages:
- HTML
- CSS
- JavaScript

Since I usually use the auto-formatting option in IDEs, if any of the rules below that apply to formatting is different than the one that is used by the IDE that I use currently, then I try to follow the IDE convention (this means that I try not to change the IDE's default formatting options).

## My HTML coding conventions

- **I write tag and attribute names in lower cases.**

- **I indent HTML code by the length of the default number of spaces set as one TAB key press by the IDE that I use.** It nearly never makes a problem, since: 1) I treat every project independently; 2) I used to make every project in the same IDE.

- **I indent additional code snippets, and plain text that I am placing inside HTML, the same as I would indent HTML that would appear in place of it.** For example, in source code of this website you can find Liquid language snippets indented.

- **In the case when I have to write multiple HTML attributes with long values, I put them in separate lines and indent every line once.**

- **I try to put HTML attributes in similar order across all the tags in the project** (but, I probably rarely succeed).

- **I try to put CSS classes in similar order across all the tags in the project** (but also, I probably rarely succeed).

- **I do not use inline CSS if I can.** I think that inline code mostly clouds the CSS. If I have to write inline CSS code, or if I consider it better than put CSS in a separate tag or file, I try to write it the most shortly and clearly as I can. For example, this project (that is, this version of my blog) uses bootstrap so that I decided not to use CSS at all. But, as I want the website look as similar as it can be to the former version (not built with Bootstrap), this turned out as not possible, so for clarity and simplicity I have decided to use inline CSS.

## My CSS coding conventions

- **I use [BEM](http://getbem.com/) methodology.** I do not know whether this methodology is compliant with any "non-naming" CSS methodology that one would like to use, but for me it is just great because of its simplicity and clarity.

- **I divide CSS (CSS 3, actually) declarations inside each rule into 5 groups, depending on the properties of the HTML element that the properties apply to:**
    1. declarations containing properties related to the appearance of the element (e.g. `background-color`, `font-size`);
    2. declarations containing properties related to the size of the element (e.g. `width`, `margin)`;
    3. declarations containing properties related to the position of the element on the page and relative to other HTML elements (e.g. `position`, `z-index`, `display` – excluding `display: flex` and `display: grid`);
    4. declarations containing properties related to the CSS flexbox layout of the element (e.g. `display: flex`; `justify-content`);
    5. declarations containing properties related to the CSS grid layout of the element (e.g. `display: grid`, `grid-row`).

- **Although, depending on the project and its structure, I put `@media` rules either separately or into individual rules, I tend to put it separately.** That way, I understand better the structure of the CSS code.

- **I tend to create a separate file for every "template" page or "specific" page (let us call them so) that has the website that I am working on.** For example, in the version of this website built with plain CSS there are the following CSS files:
    - `default.css` – with rules relating to the `default` layout in the website (a "template" page);
    - `header.css` – with rules relating to the code of the website header that I `include` to other pages (a fragment of a couple of "template" and "specific" pages);
    - `index.css` – with rules relating to the code of the main page of the website (a "specific" page);
    - and so on.

## My javascript coding conventions

- **I try to create as many files as possible in order that a file have one well defined scope of responsibility.** That scope depends on the project.

- **I try to write code as briefly as it still seems readable to me.** This includes, for example, creating as many variables as I would not get lost managing them. I would rather have too many variables instead of too little. I find it more secure to get lost in variables than to let a variable have too big responsibility.

- **I write the declaration of every variable in a separate line.**

- **I try to use the newest possible features where it is appropriate.** For example, if a variable is constant, I declare it by `const`. If it is not, I declare it by `let`.

- **If only it is possible and increases readability/clarity, I write `this` and `super` keywords in front of a variable name.**