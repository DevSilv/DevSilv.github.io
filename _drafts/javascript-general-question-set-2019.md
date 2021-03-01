In this article, I want to present a set of questions that express some software development and JavaScript aspects and ideas that I consider important.

Although I have been gathering the information for a long time, I decided that it must be dated on the year of publishing – because the software development and JavaScript worlds are constantly changing.

## Three disclaimers before we start

**This article is neither intended to contain any tips or advices, nor to be a guide on how to teach or learn.** In case of any doubts, prior to this article one should refer to standards, manuals and official guidelines of particular concepts, programming languages, websites, services, utilities or systems mentioned in this article.

**This article is not intended to be comprehensive on any subject**, especially neither on programming, programming languages, web developement, ECMAScript nor JavaScript. I might have forget about some important things or aspects of things, or just missed them when reading various documentations. Additionally, there might be cases that I did not forget about a thing being important **objectively**, but not decided to describe it because I have not found it important **subjectively**.

Lastly, **please be aware that I am not an expert in programming, programming languages, web developement, ECMAScript and JavaScript.** I might have made mistakes,  errors and typos describing the subject (although I tried not to make any).

## Introduction

### 1. What is the purpose of this article?

The purpose of this article is to present a general overview of a JavaScript world in a form of questions. In particular, as stated above, this article is not intended to be comprehensive – instead, it is intended to **outline** some general and some specific concepts from the JavaScript world.

### 2. Have you got some tips for using this set of questions?

One may use this set of questions according to their needs – there is no intended use for it. But, as far as I can tell, they might be useful for academic purposes. Also, when someone will decide to use any of these questions, they could modify it if they feel that it would be appropriate.

### 3. Why have you distinguished the "multi-answers questions" and "single-answer questions" groups?

The "multi-answers questions" question group means that for a question within this group one may give several different answers, and **they should be treated equally**.

The "single-answer questions" question group means that for a question within this group one may give several answers, and **they may be treated as generalizations (or specializations) of each other**.

### 4. Since you start some questions with "Differentiate..." or "What is...", it is hard to determine whether the answers to these questions are appropriate.

It is true that it may be hard to determine it. The presumption of all the questions is that the one who asks is the one who determine the correctness of the answers. If there are any doubts, it is up to the inquirer to decide.

### 5. For every question, you have listed some "sources" (as you named them). How do they exactly relate to the question?

For every question, I have listed some URLs of websites or other sources available online (e.g. information about books). It does not mean that I have read all the content of them – in fact, I have not read most of them at all (mainly not Wikipedia articles).

Instead, listing them for a question means that they either (a) provide this question themselves, (b) gave me inspiration to coin it, (c) contain part of the answer or the whole answer for it, or (d) holds just a standard/specification defining some concepts that this question involves.

I have named them collectively "sources", because it is for me the most appropriate name for them in the context of my article. In either case, it will always be a benefit for a reader to read them alongside my article.

## The questions

---

_**Tips for new questions**_
- _A question should ask about things that are at the same common, important and non-trivial in JavaScript programming ._
- _A question should be answerable, i.e. it should presume that an average JavaScript developer is able of two things: (1) of knowing what the question asks about (or at least of finding it in some source); (2) of answering the question (or at least of finding the answer in some source)._
- _For a question, there should be at least **one** publicly available source (an online article, a traditional book etc.) that explains the thing that the question asks about, and at least **one** publicly available source (may be the same) that explains the answer (or at least **two** possible answers, if the question presumes that there could be more than one). For example, a Wikipedia article should be in most cases sufficient for being both sources at the same time._
- _A question should be non-trivial – in the meaning: not too simple for an average JavaScript developer. For example, "What is the var keyword responsible for?" is not a good question – for this list, of course – because it seems to be too simple. Better would be "Differentiate the var and let keywords", or even "Describe/present one use case where the let keyword would be better choice than the var keyword."_
- _A question may ask about things important both theoretically and practically._
- _A question may ask about both generic and specific things._
- _Although in the following list there are sections not directly speaking about JavaScript (e.g. "Main programming concepts"), the questions that are meant for them should ask for concepts and things being generalization of concepts and things used by JavaScript. A "generalization" of a concept or a thing means that JavaScript utilizes this concept or uses this thing either directly or with a set of restrictions (and most probably with changed name). Example: the concept of asynchrony in programming is utilized by JavaScript for example in the case of async functions or the XmlHttpsRequest object (and none of them is named "asynchrony")._

---

1. **Main programming concepts**
    ##### Multi-answers questions
    - List three programming languages (or standards), and differentiate them. [5]
    - List three programming paradigms, and differentiate them. [53]
    - List three data structures, and differentiate their use cases. [54]
    - List three software design patterns, and differentiate them. [55]
    - List three algorithms, and differentiate their use cases. [56]
    - List three programming languages (or standards) invented before 1990. [19]
    - List three programming languages (or standards) invented (or first implemented) from 2010 on. [19]
    - List three reasons why one should test software – or three why they should not. [57]
    - List three programming languages (or standards) that supports modular programming. [58]
    - List three character encodings. [4,20]
    - Name one feature that every programming language (or standard), which you heard of, has, and argue this choice – or explain why you think that there is no such feature. [mine]

    ##### Single-answer questions
    - Differentiate parallel, concurrent and asynchronous programming.
    - Explain what are regular expressions, and list three areas where regular expressions are possibly the best choice – or explain why they are not.
    - What are anonymous functions? [20,24]
    - What are generators?
    - What are subroutines (routines)?
    - What is recursion?
    - What are arrays?
    - What are first-class citizens (first-class objects)?
    - What are closures? [3,20]
    - What is polymorphism?
    - What is asynchrony?
    - Explain what is type boxing (wrapping), and list three programming languages (or standards) that supports it.
    - What is scope?
    - Differentiate the following six terms: character encoding, character, character set, coded character, code point, code unit. [4,20]
    - Differentiate interpretation and compilation of a programming language. [18,20,21,22]
    - What are callbacks? [2,20]
    - What is data-driven programming? [64]
    - What is a minimal working example? [66]

2. **Object-oriented programming (OOP) concepts**
    ##### Multi-answers questions
    - List three programming languages (or standards) that support object-oriented programming.

    ##### Single-answer questions
    - Differentiate prototype-based languages and class-based languages.
    - What is encapsulation?

3. **Web development concepts**
    ##### Multi-answers questions
    - List three programming languages (or standards) that may be used in web developement, and differentiate them. [27]
    - List three markup languages (or standards), and differentiate them. [25]
    - List three style sheet languages (or standards). [23]
    - List three web APIs and differentiate them. [30]
    - List three reasons why XML became popular in web development. [65]
    - Differentiate client-side and server-side rendering (of a web page). [9]
    - Differentiate the XMLHttpRequest API and the Fetch API. [34,35,67]
    - Give one example of two origins, between which the same-origin policy disallow interaction, and explain why. [69]
    
    ##### Single-answer questions
    - What are progressive web applications? [26]
    - What is WebAssembly (Wasm)? [1]
    - What are service workers? [14]
    - What is AJAX? [63]
    - What is CORS (Cross-Origin Resource Sharing)? [68]

4. **The core of the language (ECMAScript)**
    ##### Multi-answers questions
    - List three programming paradigms that the newest ECMAScript version supports. [11,12,13,17]
    - List three design patterns that the newest ECMAScript version supports. [11,12,13,17]
    - Choose three ECMAScript versions, and for each of them name one new feature that it introduced in that version. [11,12,13,17]
    - List three ways that one can check the type of a variable in the newest ECMAScript version. [11,12,13,16]
    - List ten reserved words in ECMAScript. [16]
    - Describe one use case of the `void` operator. [59]
    - Describe one use case of the `javascript:` URL scheme. [60,61]

    ##### Single-answer questions
    - Differentiate ECMAScript and JavaScript. [16,17,20]
    - What organization is maintaining ECMAScript, when was it created and what year was its newest version published? [16,17]
    - What is strict mode? [11]
    - Name all the data types that the newest ECMAScript version has. [16,17]
    - List all the ways that a variable may be declared in the newest ECMAScript version, and differentiate them. [11,16]
    - What is variable hoisting? [11]
    - Why in ECMAScript there are both the (loose) equality operator (==) and the strict equality operator (===)? [11,16]
    - What types of inheritance does ECMAScript support? [28,29]
    - What is the async/await construct (pattern)? [10]
    - What is the promise construct? [16]
    - List all loop types in the newest ECMAScript version, and differentiate them by three things. [16]
    - How-many-based indexing does ECMAScript use? [16]
    - Explain what the `with` statement does and why its usage might be considered confusing. [16]
    - Explain what the `eval` function does and why its usage might be considered insecure. [16]
    - What does the `this` keyword do? [16]
    - List all of the value properties of the global object in the newest ECMAScript version. [16]
    - Differentiate the `null`, the `NaN` and the `undefined` values. What are their types? [16]
    - What is automatic semicolon insertion? [16]
    - List all the unary operators in ECMAScript. [59]
    - Explain whether the `void` operator might be considered confusing – and if yes, explain why. [59]
    - What does the `preventDefault` method of the `Event` interface do? [62]

5. **JavaScript APIs**
    ##### Multi-answers questions
    - List three JavaScript web APIs, and differentiate them. [30]
    - List three DOM events. [31]

    ##### Single-answer questions
    - What is the Document Object Model (DOM) API? [32]
    - Does the CSS language has an object model (like DOM)? [33]
    - Differentiate the Fetch API and the XMLHttpRequest (XHR) API. [34,35]
    - What is the Web Storage API? [36]
    - What is the WebGL API? [37]
    - What is the Web Workers API? [38]

6. **JavaScript frameworks and libraries**
    ##### Multi-answers questions
    - List three JavaScript libraries, and differentiate their use cases. [39]
    - List three JavaScript frameworks, and differentiate their use cases. [40]

7. **JavaScript engines and runtime environments**    
    ##### Multi-answers questions
    - List three JavaScript engines, and differentiate them. [15]
    - List three JavaScript runtime environments, and differentiate them. [41]

    ##### Single-answer questions
    - What is a JavaScript engine? [42]

8. **Various JavaScript concepts**
    ##### Multi-answers questions
    - Name one tool that allows JavaScript compilation (understood as in [Wikipedia's article on compiler](https://en.wikipedia.org/wiki/Compiler)). [18]

    ##### Single-answer questions
    - List all the elements of the newest version of the MEAN stack. [43]
    - List all the ways of including JavaScript in HTML. [44]

9. **Various programming tools and online services**
    ##### Multi-answers questions
    - List three IDEs, and differentiate them. [45]
    - List three IDEs that have some sort of support for JavaScript. [46]
    - List three web servers. [47]
    - List three package managers. [48]
    - List three JavaScript package managers. [48]
    - List three version control systems (VCS), and differentiate them. [49]
    - List three JavaScript module (package) bundlers. [7]
    - List three test automation utilities, and differentiate them. [50]
    - List three build-automation utilities. [51]
    - List three JavaScript build-automation utilities. [7,51]
    - List three headless browsers, and differentiate them. [52]

    ##### Single-answer questions
    - Explain what are source-to-source compilers (transpilers), and name one JavaScript transpiler. [6,7]
    - What is a runtime environment? [41]

## Sources

The sources are not listed in any particular order.

- [mine] – that means that I have not found any sources that would be relevant.
- [1] https://en.wikipedia.org/wiki/WebAssembly
- [2] https://en.wikipedia.org/wiki/Callback_(computer_programming)
- [3] https://en.wikipedia.org/wiki/Closure_(computer_programming)
- [4] https://en.wikipedia.org/wiki/Character_encoding
- [5] https://en.wikipedia.org/wiki/List_of_programming_languages_by_type
- [6] https://en.wikipedia.org/wiki/Source-to-source_compiler
- [7] https://stackoverflow.com/questions/33561272/task-runners-gulp-grunt-etc-and-bundlers-webpack-browserify-why-use-toge/33574602#33574602
- [8] http://shop.oreilly.com/product/9780596517748.do
- [9] https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d
- [10] https://www.modernjs.com/asynchronous.html
- [11] https://www.modernjs.com/syntax.html
- [12] http://2ality.com/2016/02/ecmascript-2017.html
- [13] https://davidwalsh.name/es7-es8-features
- [14] https://developers.google.com/web/fundamentals/primers/service-workers/
- [15] https://developer.telerik.com/featured/a-guide-to-JavaScript-engines-for-idiots/
- [16] http://www.ecma-international.org/publications/standards/Ecma-262.htm
- [17] https://en.wikipedia.org/wiki/ECMAScript
- [18] https://en.wikipedia.org/wiki/Compiler
- [19] https://en.wikipedia.org/wiki/Timeline_of_programming_languages
- [20] https://www.tutorialspoint.com/javascript/javascript_interview_questions.htm
- [21] https://en.wikipedia.org/wiki/Interpreted_language
- [22] https://en.wikipedia.org/wiki/Compiled_language
- [23] https://en.wikipedia.org/wiki/Category:Stylesheet_languages
- [24] https://en.wikipedia.org/wiki/Anonymous_function
- [25] https://en.wikipedia.org/wiki/Markup_language
- [26] https://en.wikipedia.org/wiki/Progressive_web_applications
- [27] https://en.wikipedia.org/wiki/Programming_languages_used_in_most_popular_websites
- [28] https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
- [29] https://en.wikipedia.org/wiki/JavaScript
- [30] https://developer.mozilla.org/en-US/docs/Web/API
- [31] https://developer.mozilla.org/en-US/docs/Web/Events
- [32] https://developer.mozilla.org/en-US/docs/Glossary/DOM
- [33] https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
- [34] https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)
- [35] https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- [36] https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
- [37] https://developer.mozilla.org/en-US/docs/Glossary/WebGL
- [38] https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
- [39] https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
- [40] https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks
- [41] https://en.wikipedia.org/wiki/Runtime_system
- [42] https://en.wikipedia.org/wiki/JavaScript_engine
- [43] https://en.wikipedia.org/wiki/MEAN_(software_bundle)
- [44] https://www.w3schools.com/js/js_whereto.asp
- [45] https://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments
- [46] https://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments#JavaScript
- [47] https://en.wikipedia.org/wiki/Comparison_of_web_server_software
- [48] https://en.wikipedia.org/wiki/List_of_software_package_management_systems
- [49] https://en.wikipedia.org/wiki/List_of_version-control_software
- [50] https://medium.com/@briananderson2209/best-automation-testing-tools-for-2018-top-10-reviews-8a4a19f664d2
- [51] https://en.wikipedia.org/wiki/List_of_build_automation_software
- [52] https://en.wikipedia.org/wiki/Headless_browser#List_of_headless_browsers
- [53] https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms
- [54] https://en.wikipedia.org/wiki/List_of_data_structures
- [55] https://www.tutorialspoint.com/design_pattern/design_pattern_overview.htm
- [56] https://en.wikipedia.org/wiki/List_of_algorithms
- [57] https://en.wikipedia.org/wiki/Software_testing
- [58] https://en.wikipedia.org/wiki/Modular_programming#Language_support
- [59] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary
- [60] https://tools.ietf.org/html/draft-hoehrmann-javascript-scheme-03
- [61] https://wiki.whatwg.org/wiki/URL_schemes#javascript:_URLs
- [62] https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- [63] https://en.wikipedia.org/wiki/Ajax_(programming)
- [64] https://en.wikipedia.org/wiki/Data-driven_programming
- [65] https://en.wikipedia.org/wiki/XML
- [66] https://en.wikipedia.org/wiki/Minimal_working_example
- [67] https://developer.mozilla.org/en-US/docs/Web/API
- [68] https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- [69] https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
