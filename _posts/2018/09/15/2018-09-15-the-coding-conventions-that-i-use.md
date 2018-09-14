---
layout: post
title: "the coding conventions that i use"
date: 2018-09-15
---

there are many [coding conventions](https://en.wikipedia.org/wiki/Coding_conventions) out there. in this article i attempt to tell you about mine. take note that when it comes to some tips on the coding style and some of the best coding practices (that i try to use), i have already written [an article](https://silvuss.github.io/2018/07/10/the-things-that-every-blogging-developer.html).

i cover my coding conventions of the following languages:
- HTML
- CSS
- javascript

since i usually use the auto-formatting option in IDEs, if any of the rules below that apply to formatting is different than the one that is used by the IDE that i use currently, i try to follow the IDE convention (this means that i try not change the IDE's default formatting options).

## my HTML coding conventions

- **i write tag and attribute names in lower cases.**

- **i indent HTML code by the length of the default number of spaces that the IDE that i use set as one TAB key press.** it nearly never makes a problem, since 1) i treat every project independently, and 2) i have used to make every project in the same IDE (by the way, writing this article i use [visual studio code](https://code.visualstudio.com/)).

- **i indent additional code snippets, and plain text that i am placing inside HTML, the same as i would indent HTML that would appear in place of it.** for example, in source code of this website you can find liquid language snippets indented.

- **in the case when i have to write multiple HTML attributes with long values, i put them in separate lines and indent every line once.**

- **i try to put HTML attributes in similar order across all the tags in the project**. (but i probably rarely succeed).

- **i try to put CSS classes in similar order across all the tags in the project.** (but, also, i probably rarely succeed).

- **i do not use inline CSS if i can.** i think that inline code mostly clouds the CSS. if i have to write inline CSS code, or if i consider it better than put CSS in a separate tag or file, i try to write it the most shortly and clearly as i can. for example, this project (that is, this version of my blog) uses bootstrap so that i decided not to use CSS at all. but as i want the website look as similar as it can be to the former version (not built with bootstrap), this turned out as not possible, so for clarity and simplicity i have decided to use inline CSS.

## my CSS coding conventions

- **i use [BEM](http://getbem.com/) methodology.** i do not know if this methodology is compliant with any "non-naming" CSS methodology that one would like to use, but for me it is just great because of its simplicity and clarity.

- **i divide CSS (CSS 3, actually) declarations inside each rule into 5 groups, depending on the properties of the HTML element that the properties apply to:**
    1. declarations containing properties relating to the appearance of the element (e.g. `background-color`, `font-size`);
    2. declarations containing properties relating to the size of the element (e.g. `width`, `margin)`;
    3. declarations containing properties relating to the position of the element on the page and relative to other HTML elements (e.g. `position`, `z-index`, `display` – excluding `display: flex` and `display: grid`);
    4. declarations containing properties relating to the CSS flexbox layout of the element (e.g. `display: flex`; `justify-content`);
    5. declarations containing properties relating to the CSS grid layout of the element (e.g. `display: grid`, `grid-row`).

- **although, depending on the project and its structure, i put `@media` rules either separately or into individual rules, i tend to put it separately.** that way i understand better the CSS structure.

- **i tend to create a separate file for every "template" page or "specific" page (let us call them so) that my website has.** for example, in the version of this website built with plain CSS there are the following CSS files:
    - `default.css` with rules relating to the `default` layout in my website (a "template" page);
    - `header.css` with rules relating to the code of my website header that i `include` to other pages (a fragment of a couple of "template" and "specific" pages);
    - `index.css` with rules relating to the code of the main page of my website (a "specific" page);
    - and so on.

## my javascript coding conventions

- **i try to create as many files as possible in order that a file have one well defined scope of responsibility.** that scope depends on the project.

- **i try to write code as briefly as it still seems readable to me.** this includes, for example, creating as many variables as i would not get lost managing them. i would rather have too many variables instead of too little.

- **i write the declaration of every variable in a separate line.**

- **i try to use the newest possible features where it is appropriate.** for example, if a variable is constant, i declare it by `const`. if it is not, i declare it by `let`.

- **if only it is possible and increases clarity, i write `this` and `super` keywords in front of a variable name.**