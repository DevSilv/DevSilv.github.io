In this article, I want to present a set of questions that express some software development and JavaScript aspects and ideas that I consider important.

## Disclaimer 

This article is neither intended to contain any tips or advices, nor to be a guide on how to teach or learn. It is not intended to be comprehensive on any subject. Please be aware that I am not an expert in programming, programming languages, web developement, ECMAScript and JavaScript. In case of any doubts, prior to this article refer to standards, manuals and official guidelines of particular concepts, programming languages, websites, services, utilities or systems mentioned in this article.

## Introduction

### 1. What is the purpose of this article?

The purpose of this article is to present a general overview of the JavaScript world in the form of questions. In particular, as stated above, this article is not intended to be comprehensive – instead, it is intended only to outline some general and some specific concepts from the JavaScript world.

### 2. Have you got some tips for using this set of questions?

One may use this set of questions according to their needs – there is no intended use for it. But, as far as I can tell, they might be useful for academic purposes. Also, when someone will decide to use any of these questions, they could modify it if they feel that it would be appropriate.

### 3. Why have you distinguished the "multi-answer questions" and "single-answer questions" groups?

The "multi-answer questions" question group means that for a question within this group one may give several different answers, and they should be treated equally.

The "single-answer questions" question group means that for a question within this group one may give several answers, and they may be treated as generalizations (or specializations) of each other.

### 4. Since you start some questions with "Differentiate..." or "What is...", it's hard to determine whether the answers to these questions are appropriate.

It's true that it may be hard to determine. The presumption of all the questions is that the one who asks is the one who determine the correctness of the answers. If there are any doubts, it's up to the inquirer to decide.

### 5. For every question, you have listed some "sources" (as you name them). How do they exactly relate to the question?

For every question, I have listed some link to websites or other materials available online (e.g. information about books). It doesn't mean that I have read all the content of them. In fact, I haven't read most of them at all (mainly not Wikipedia articles).

Instead, listing them for a question means that they either (a) provide this question themselves, (b) gave me inspiration to coin it, (c) contain part of the answer or the whole answer for it, or (d) holds just a standard/specification defining some concepts that this question involves.

I have named them collectively "sources", because it's for me the most appropriate name for them in the context of my article. In either case, it will always be a benefit for a reader to read them alongside my article.

## Tips for new questions

- A question should ask about things that are common, important and non-trivial in JavaScript programming.
- A question should be answerable, i.e. it should presume that an average JavaScript developer (1) knows what the question asks about, and (2) can answer the question (or at least can find the answer).
- For a question, there should be at least one publicly available source (an online article, a traditional book etc.) that explains what the question asks about, and at least one publicly available source (may be the same) that answers the question. For example, a Wikipedia article should in most cases suffice as both sources.
- A question may ask about things important theoretically as well as those important practically.
- A question may ask about generic things as well as specific things.
- Although there are sections in the following list not directly speaking about JavaScript (e.g. "Main programming concepts"), the questions that are meant for them should ask for concepts and things being generalization of concepts and things used by JavaScript. A "generalization" of a concept or a thing means that JavaScript utilizes this concept or uses this thing either directly or with a set of restrictions (and most probably with changed name). Example: the concept of asynchrony in programming is utilized by JavaScript for example in the case of `async` functions or the `XmlHttpsRequest` object (while none of them is named "asynchrony").

## The questions

### 1. Main programming concepts

**_Multi-answer questions_**

- List three programming languages (or standards), and differentiate them. [[5]](#5)
- List three programming paradigms, and differentiate them. [[53]](#53)
- List three data structures, and differentiate their use cases. [[54]](#54)
- List three software design patterns, and differentiate them. [[55]](#55)
- List three computer science algorithms, and differentiate their use cases. [[56]](#56)
- List three programming languages (or standards) invented before 1990. [[19]](#19)
- List three programming languages (or standards) invented (or first implemented) from 2010 on. [[19]](#19)
- List three reasons why one should test software and/or three why they should not. [[57]](#57)
- List three programming languages (or standards) that supports modular programming. [[58]](#58)
- List three character encodings. [[4]](#4) [[20]](#20)
- Name one feature that every programming language (or standard), which you heard of, has, and argue this choice. If you think that there is no such feature, explain why. [[mine]](#mine)

**_Single-answer questions_**

- Differentiate parallel, concurrent and asynchronous programming.
- Explain what are regular expressions, and list three areas where regular expressions are possibly the best choice – or explain why they are not.
- What are anonymous functions? [[20]](#20) [[24]](#24)
- What are generators?
- What are subroutines?
- What is recursion?
- What are arrays?
- What are first-class citizens?
- What are closures? [[3]](#3) [[20]](#20)
- What is polymorphism?
- What is asynchrony?
- Explain what is type boxing, and list three programming languages (or standards) that supports it.
- What is scope?
- Differentiate the following six terms: character, character encoding, character set, coded character, code point, code unit. [[4]](#4) [[20]](#20)
- Differentiate interpretation and compilation of code. [[18]](#18) [[20]](#20) [[21]](#21) [[22]](#22)
- What are callbacks? [[2]](#2) [[20]](#20)
- What is data-driven programming? [[64]](#64)
- What is a minimal working example? [[66]](#66)

### 2. Object-oriented programming concepts

**_Multi-answer questions_**

- List three programming languages (or standards) that support object-oriented programming.

**_Single-answer questions_**

- Differentiate prototype-based languages and class-based languages.
- What is encapsulation?

### 3. Web development concepts

**_Multi-answer questions_**

- List three programming languages (or standards) that may be used in web developement, and differentiate them. [[27]](#27)
- List three markup languages (or standards), and differentiate them. [[25]](#25)
- List three style sheet languages (or standards). [[23]](#23)
- List three web APIs, and differentiate them. [[30]](#30)
- List three reasons why do you think XML became popular in web development. [[65]](#65)
- Differentiate client-side and server-side rendering (of a web page). [[9]](#9)
- Differentiate the XMLHttpRequest API and the Fetch API. [[34]](#34) [[35]](#35) [[67]](#67)
- Give one example of two origins, between which the same-origin policy disallow interaction, and explain why. [[69]](#69)
    
**_Single-answer questions_**

- What are progressive web applications (PWA)? [[26]](#26)
- What is WebAssembly (Wasm)? [[1]](#1)
- What are service workers? [[14]](#14)
- What is AJAX? [[63]](#63)
- What is Cross-Origin Resource Sharing (CORS)? [[68]](#68)

### 4. The core of the language (ECMAScript)

**_Multi-answer questions_**

- List three programming paradigms that the newest ECMAScript version supports. [[11]](#11) [[12]](#12) [[13]](#13) [[17]](#17)
- List three design patterns that the newest ECMAScript version supports. [[11]](#11) [[12]](#12) [[13]](#13) [[17]](#17)
- Choose three ECMAScript versions, and for each of them name one new feature that it introduced in that version. [[11]](#11) [[12]](#12) [[13]](#13) [[17]](#17)
- List three ways that one can check the type of a variable in the newest ECMAScript version. [[11]](#11) [[12]](#12) [[13]](#13) [[16]](#16)
- List ten reserved words in ECMAScript. [[16]](#16)
- Describe one use case of the `void` operator. [[59]](#59)
- Describe one use case of the URL scheme `javascript:`. [[60]](#60) [[61]](#61)

**_Single-answer questions_**

- Differentiate ECMAScript and JavaScript. [[16]](#16) [[17]](#17) [[20]](#20)
- What organization is maintaining ECMAScript?
- When was ECMAScript created and what year was its newest version published? [[16]](#16) [[17]](#17)
- What is strict mode? [[11]](#11)
- Name all the data types that the newest ECMAScript version has. [[16]](#16) [[17]](#17)
- List all the ways that a variable may be declared in the newest ECMAScript version, and differentiate them. [[11]](#11) [[16]](#16)
- What is variable hoisting? [[11]](#11)
- Why in ECMAScript there are both the (loose) equality operator (==) and the strict equality operator (===)? [[11]](#11) [[16]](#16)
- What types of inheritance does ECMAScript support? [[28]](#28) [[29]](#29)
- What is the async/await construct? [[10]](#10)
- What is the promise construct? [[16]](#16)
- List all loop types in the newest ECMAScript version, and differentiate them. [[16]](#16)
- How-many-based indexing does ECMAScript use? [[16]](#16)
- Explain what the `with` statement does and why its usage might be considered confusing. [[16]](#16)
- Explain what the `eval` function does and why its usage might be considered insecure. [[16]](#16)
- What does the `this` keyword do? [[16]](#16)
- List all of the value properties of the global object in the newest ECMAScript version. [[16]](#16)
- Differentiate the `null`, the `NaN` and the `undefined` values. What are their types? [[16]](#16)
- What is automatic semicolon insertion? [[16]](#16)
- List all the unary operators in ECMAScript. [[59]](#59)
- Explain whether the `void` operator might be considered confusing – and if yes, explain why. [[59]](#59)
- What does the `preventDefault` method of the `Event` interface do? [[62]](#62)

### 5. JavaScript APIs

**_Multi-answer questions_**

- List three JavaScript web APIs, and differentiate them. [[30]](#30)
- List three DOM events. [[31]](#31)

**_Single-answer questions_**

- What is the Document Object Model (DOM) API? [[32]](#32)
- Does the CSS language has an object model (like DOM)? [[33]](#33)
- Differentiate the Fetch API and the XMLHttpRequest (XHR) API. [[34]](#34) [[35]](#35)
- What is the Web Storage API? [[36]](#36)
- What is the WebGL API? [[37]](#37)
- What is the Web Workers API? [[38]](#38)

### 6. JavaScript frameworks and libraries

**_Multi-answer questions_**

- List three JavaScript libraries, and differentiate their use cases. [[39]](#39)
- List three JavaScript frameworks, and differentiate their use cases. [[40]](#40)

### 7. JavaScript engines and runtime environments

**_Multi-answer questions_**

- List three JavaScript engines, and differentiate them. [[15]](#15)
- List three JavaScript runtime environments, and differentiate them. [[41]](#41)

**_Single-answer questions_**

- What is a JavaScript engine? [[42]](#42)

### 8. Various JavaScript concepts

**_Multi-answer questions_**

- Name one tool that allows JavaScript compilation (understood as in [Wikipedia's article on compiler](https://en.wikipedia.org/wiki/Compiler)). [[18]](#18)

**_Single-answer questions_**

- List all the elements of the newest version of the MEAN stack. [[43]](#43)
- List all the ways of including JavaScript in HTML. [[44]](#44)

### 9. Various programming tools and online services

**_Multi-answer questions_**

- List three IDEs, and differentiate them. [[45]](#45)
- List three IDEs that have some sort of support for JavaScript. [[46]](#46)
- List three web servers. [[47]](#47)
- List three package managers. [[48]](#48)
- List three JavaScript package managers. [[48]](#48)
- List three version control systems (VCS), and differentiate them. [[49]](#49)
- List three JavaScript module bundlers. [[7]](#7)
- List three test automation utilities, and differentiate them. [[50]](#50)
- List three build-automation utilities. [[51]](#51)
- Name one JavaScript build-automation utility. [[7]](#7) [[51]](#51)
- List three headless browsers, and differentiate them. [[52]](#52)

**_Single-answer questions_**

- Explain what are source-to-source compilers, and name one JavaScript transpiler. [[6]](#6) [[7]](#6)
- What is a runtime environment? [[41]](#41)

## Sources

The sources are not listed in any particular order.

<span id="mine">[mine]</span> – that means that I have not found any sources that would be relevant.

<span id="1">[1]</span> https://en.wikipedia.org/wiki/WebAssembly

<span id="2">[2]</span> https://en.wikipedia.org/wiki/Callback_(computer_programming)

<span id="3">[3]</span> https://en.wikipedia.org/wiki/Closure_(computer_programming)

<span id="4">[4]</span> https://en.wikipedia.org/wiki/Character_encoding

<span id="5">[5]</span> https://en.wikipedia.org/wiki/List_of_programming_languages_by_type

<span id="6">[6]</span> https://en.wikipedia.org/wiki/Source-to-source_compiler

<span id="7">[7]</span> https://stackoverflow.com/questions/33561272/task-runners-gulp-grunt-etc-and-bundlers-webpack-browserify-why-use-toge/33574602#33574602

<span id="8">[8]</span> http://shop.oreilly.com/product/9780596517748.do

<span id="9">[9]</span> https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d

<span id="10">[10]</span> https://www.modernjs.com/asynchronous.html

<span id="11">[11]</span> https://www.modernjs.com/syntax.html

<span id="12">[12]</span> http://2ality.com/2016/02/ecmascript-2017.html

<span id="13">[13]</span> https://davidwalsh.name/es7-es8-features

<span id="14">[14]</span> https://developers.google.com/web/fundamentals/primers/service-workers/

<span id="15">[15]</span> https://developer.telerik.com/featured/a-guide-to-JavaScript-engines-for-idiots/

<span id="16">[16]</span> http://www.ecma-international.org/publications/standards/Ecma-262.htm

<span id="17">[17]</span> https://en.wikipedia.org/wiki/ECMAScript

<span id="18">[18]</span> https://en.wikipedia.org/wiki/Compiler

<span id="19">[19]</span> https://en.wikipedia.org/wiki/Timeline_of_programming_languages

<span id="20">[20]</span> https://www.tutorialspoint.com/javascript/javascript_interview_questions.htm

<span id="21">[21]</span> https://en.wikipedia.org/wiki/Interpreted_language

<span id="22">[22]</span> https://en.wikipedia.org/wiki/Compiled_language

<span id="23">[23]</span> https://en.wikipedia.org/wiki/Category:Stylesheet_languages

<span id="24">[24]</span> https://en.wikipedia.org/wiki/Anonymous_function

<span id="25">[25]</span> https://en.wikipedia.org/wiki/Markup_language

<span id="26">[26]</span> https://en.wikipedia.org/wiki/Progressive_web_applications

<span id="27">[27]</span> https://en.wikipedia.org/wiki/Programming_languages_used_in_most_popular_websites

<span id="28">[28]</span> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

<span id="29">[29]</span> https://en.wikipedia.org/wiki/JavaScript

<span id="30">[30]</span> https://developer.mozilla.org/en-US/docs/Web/API

<span id="31">[31]</span> https://developer.mozilla.org/en-US/docs/Web/Events

<span id="32">[32]</span> https://developer.mozilla.org/en-US/docs/Glossary/DOM

<span id="33">[33]</span> https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

<span id="34">[34]</span> https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)

<span id="35">[35]</span> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

<span id="36">[36]</span> https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

<span id="37">[37]</span> https://developer.mozilla.org/en-US/docs/Glossary/WebGL

<span id="38">[38]</span> https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

<span id="39">[39]</span> https://en.wikipedia.org/wiki/List_of_JavaScript_libraries

<span id="40">[40]</span> https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks

<span id="41">[41]</span> https://en.wikipedia.org/wiki/Runtime_system

<span id="42">[42]</span> https://en.wikipedia.org/wiki/JavaScript_engine

<span id="43">[43]</span> https://en.wikipedia.org/wiki/MEAN_(software_bundle)

<span id="44">[44]</span> https://www.w3schools.com/js/js_whereto.asp

<span id="45">[45]</span> https://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments

<span id="46">[46]</span> https://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments#JavaScript

<span id="47">[47]</span> https://en.wikipedia.org/wiki/Comparison_of_web_server_software

<span id="48">[48]</span> https://en.wikipedia.org/wiki/List_of_software_package_management_systems

<span id="49">[49]</span> https://en.wikipedia.org/wiki/List_of_version-control_software

<span id="50">[50]</span> https://medium.com/@briananderson2209/best-automation-testing-tools-for-2018-top-10-reviews-8a4a19f664d2

<span id="51">[51]</span> https://en.wikipedia.org/wiki/List_of_build_automation_software

<span id="52">[52]</span> https://en.wikipedia.org/wiki/Headless_browser#List_of_headless_browsers

<span id="53">[53]</span> https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms

<span id="54">[54]</span> https://en.wikipedia.org/wiki/List_of_data_structures

<span id="55">[55]</span> https://www.tutorialspoint.com/design_pattern/design_pattern_overview.htm

<span id="56">[56]</span> https://en.wikipedia.org/wiki/List_of_algorithms

<span id="57">[57]</span> https://en.wikipedia.org/wiki/Software_testing

<span id="58">[58]</span> https://en.wikipedia.org/wiki/Modular_programming#Language_support

<span id="59">[59]</span> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary

<span id="60">[60]</span> https://tools.ietf.org/html/draft-hoehrmann-javascript-scheme-03

<span id="61">[61]</span> https://wiki.whatwg.org/wiki/URL_schemes#javascript:_URLs

<span id="62">[62]</span> https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

<span id="63">[63]</span> https://en.wikipedia.org/wiki/Ajax_(programming)

<span id="64">[64]</span> https://en.wikipedia.org/wiki/Data-driven_programming

<span id="65">[65]</span> https://en.wikipedia.org/wiki/XML

<span id="66">[66]</span> https://en.wikipedia.org/wiki/Minimal_working_example

<span id="67">[67]</span> https://developer.mozilla.org/en-US/docs/Web/API

<span id="68">[68]</span> https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

<span id="69">[69]</span> https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
