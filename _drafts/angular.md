This document describes Angular, a 2016 open-source web framework.

# Table of contents

1. [Meta information](#meta-information)
2. [Software taxonomy](#software-taxonomy)
3. [Basic software description](#basic-software-description)
4. [Detailed software description](#detailed-software-description)
5. [References](#references)
6. [See also](#see-also)
7. [Annotations](#annotations)

# Meta information

## Document type

Providing description of a software

## Date of starting editing this document

24 Mar 2019

## Notes for editors

1. The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" only in this section are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

2. **Note about the document main description:** The description that is provided at the top of this document (before Table of contents) MUST NOT use any references as provided in the sections "References", "See also"s and "Annotations" in this document.

3. **Note for the section "Similar in this classification":** If there cannot be found at least one similar term, the section MUST either: (1) be omitted; (2) contain a question mark; (3) contain the symbol `N/A` (="not available"), meaning that the given classification does not permit to use this section. If there may be listed more than three terms, it SHOULD listed the main 3. If there cannot be distinguished the main 3 terms, there MAY be listed more than 3 terms.

4. **Note for the term "type":** The term "type" (in opposition to "category", "kind" etc.) MUST be used in every place when there is defined no classification name type, and it MUST be use only in the phrase "(a/the) type of".

5. **Note for links:** It is assumed that every link in this document has a relation to a term. Thus, links SHOULD be written in one of the following places: (1) if a link has a strong relation to a term – near this term (e.g. in the `()[]` Markdown tag, or in the `<a>` HTMl element); (2) if a link is a reference to a term – in the "References" section of this document; (3) if a link has a weak relation to a term – in the "See also" section of this document. If none of those cases occurs, a link MAY be written elsewhere.

6. **Note for links near the terms:** The links that are provided near the terms (e.g. inside the Markdown tag `[description](URL)`) MUST lead to sources in the English language; if a link cannot, it MUST be omitted. They SHOULD lead to Wikipedia; if a link cannot, it SHOULD lead to another Wiki website; if a link cannot, it SHOULD lead to a "home" website of a particular page (e.g. to the publisher's page in case of an application etc.); if a link cannot, it MUST be omitted.

7. **Note for dates:** All the dates in this document MUST be written in the form `Day Mon Year`, where: `Day` is the day's number in the month, provided with leading zeros if less than 10; `Mon` is the month's name in English, shortened to three starting letters; `Year` is the four-number format of the year. Example: `05 Feb 2019`.

8. **Note for the section "References":** The section "References" in this document MUST contain a list of sources. Each source MUST be preceded by the symbol `[number]`, where `number` is the consecutive number of the element on this list. Each element within this list MUST be referenced somewhere in the document.

9. **Note for the section "See also":** The section "See also" in this document MUST contain a list of sources. Each source MUST be preceded by the symbol `[Snumber]`, where `number` is the consecutive number of the element on this list. Elements within this list MAY be referenced somewhere in the document.

10. **Note for the section "Annotations":** The section "Annotations" in this document MUST contain a list of annotations. Each annotation MUST be preceded by the symbol `number` written in superscript, where `number` for each element is the consecutive number of it in the order that the elements are referenced in the document. Each element within this list MUST be referenced somewhere in the document.

11. **Note for double quotes:** A term IS REQUIRED TO be written within double quotes in one the following cases: (1) its usual way of writing involves usage of them; (2) the term has multiple formal meanings depending on context, but since there is no context, it has to be used in an informal meaning; (3) the term has no formal meanings, and therefore it has to be used in an informal meaning.

# Basic software description

## List of current software names

- Angular [1] [5].

## List of past software names

- Angular 2 [1].

## List of software developers

- [Google LLC](https://en.wikipedia.org/wiki/Google) (Angular Team).
- Community of individuals and corporations.

## Initial release date

14 Sep 2016 [1].

## Frequency of publishing releases

Twice a year (pledge) [1].

## Time of support [S3]

18 months, in which: 6 months of active support (regularly-scheduled updates and patches), and 12 months of [long-term support](https://en.wikipedia.org/wiki/Long-term_support) (only critical fixes and security patches) [1].

## Backward-compatibility

Each version (expectation) [1].

## List of terms not to be confused with

- [Angular JS](https://en.wikipedia.org/wiki/AngularJS) [myself].

# Software taxonomy

## Classification #1

<u>Name:</u> "main" [formal languages](https://en.wikipedia.org/wiki/Formal_language).

<u>Value:</u> [TypeScript](https://en.wikipedia.org/wiki/TypeScript) [1] [2].

## Classification #2

<u>Name:</u> software development model [S1].

<u>Value:</u> [open-source](https://en.wikipedia.org/wiki/Open-source_model) [1] [S4] [S5].

<u>List of similar in this classification:</u> [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel), [LibreOffice](https://en.wikipedia.org/wiki/LibreOffice), [Firefox](https://en.wikipedia.org/wiki/Firefox), and many more.

## Classification #3

<u>Name:</u> "type" [S2].

<u>Value:</u> [software framework](https://en.wikipedia.org/wiki/Software_framework) [1].

<u>List of similar in this classification:</u>

- [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework) [myself].
- [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework) [myself].
- [Laravel](https://en.wikipedia.org/wiki/Laravel) [myself].
- Many more [myself].

### Sub-classification #3.1

<u>Name:</u> "type" of software framework.

<u>Value:</u> [web framework](https://en.wikipedia.org/wiki/Web_framework) [1].

<u>List of similar in this classification:</u> 
- [ASP.NET](https://en.wikipedia.org/wiki/ASP.NET) [3].
- [Laravel](https://en.wikipedia.org/wiki/Laravel) [3].
- [Django](https://en.wikipedia.org/wiki/Django_(web_framework)) [3].
- Many more [3].

## Classification #4

<u>Name:</u> [platform](https://en.wikipedia.org/wiki/Computing_platform) "type".

<u>Value:</u> [web platform](https://en.wikipedia.org/wiki/Web_platform) [1].

<u>List of similar in this classification:</u> ?

## Classification #5

<u>Name:</u> originating "type"<sup>1</sup>.

<u>Value:</u> rewrite [1].

<u>List of similar in this classification:</u> ?

## Classification #6

<u>Name:</u> [licence "type"](https://en.wikipedia.org/wiki/Software_license).

<u>Value:</u> [MIT License](https://en.wikipedia.org/wiki/MIT_License) [1].

<u>List of similar in this classification:</u>
- [Node.js](https://en.wikipedia.org/wiki/Node.js) [4].
- [jQuery](https://en.wikipedia.org/wiki/JQuery) [4].
- [PuTTY](https://en.wikipedia.org/wiki/PuTTY) [4].
- Many more [4].

# Detailed software description

## Software distribution

<u>List of "places" of distribution:</u>

- Internet [5] [myself].

<u>Is split into multiple "parts":</u> yes [5] [myself].

<u>List of base sources of "parts":</u>

- [npm](https://en.wikipedia.org/wiki/Npm_(software)) [S8].
- Yarn [S9].

## Software usage

### Pre-usage requirements

<u>Is use of additional software required before using:</u> yes [7].

<u>List of "types" of additional software use:</u>

- Installing/copying [7].

<u>List of additional software:</u>

- [Node.js](https://en.wikipedia.org/wiki/Node.js) [7].
- Angular CLI, or [npm](https://en.wikipedia.org/wiki/Npm_(software)), or Yarn.

### Usage requirements

<u>Is use of additional software required while using:</u> ?

<u>List of "types" of additional software use:</u> ?

<u>List of additional software:</u> ?

<u>Is installing/copying required:</u> yes [7].

<u>List of ways of installing/copying:</u>

- By invoking Angular CLI commands [7] [8] [S10].
- By invoking [npm](https://en.wikipedia.org/wiki/Npm_(software)) commands [6] [8].
- By invoking Yarn commands [8].

# References

- [1] https://en.wikipedia.org/wiki/Angular_(web_framework)
- [2] https://github.com/angular/angular
- [3] https://en.wikipedia.org/wiki/Comparison_of_web_frameworks
- [4] https://en.wikipedia.org/wiki/Category:Software_using_the_MIT_license
- [5] https://angular.io/
- [6] https://stackoverflow.com/questions/41782253/how-do-i-install-angular-2-using-npm
- [7] https://angular.io/guide/quickstart
- [8] https://update.angular.io/

# See also

- [S1] https://en.wikipedia.org/wiki/Open_source
- [S2] https://en.wikipedia.org/wiki/Software_categories
- [S3] https://en.wikipedia.org/wiki/End-of-life_(product)
- [S4] https://en.wikipedia.org/wiki/Open-source_software
- [S5] https://en.wikipedia.org/wiki/Free_and_open-source_software
- [S6] https://twitter.com/angular
- [S7] https://github.com/angular/angular
- [S8] https://www.npmjs.com/
- [S9] https://yarnpkg.com/en/
- [S10] https://cli.angular.io/

# Annotations

- <sup>1</sup> Possible values of an originating "type": new, based, rewrite.