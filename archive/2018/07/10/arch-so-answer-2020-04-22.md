Now, as I've gathered enough information, I think that I'm able to answer my own question.

---

**Important:** **Do not rely on my answer.** My debugging and coding processes, as you will see below, were not straight and simple. In many cases I had to **guess** what will be the behavior of CSS (= the browser). This is because there are many places in the CSS documentations and specifications that I don't yet understand. **If you are facing a similar problem, if possible, refer directly to the documentations and specifications of the CSS and other web technologies instead of my answer to avoid confusion.**

---

I'd like to thank the user @mb21 for:
- trying to understand my question (sometimes even I don't quite get what I was about in the past);
- coming up with a tip that indeed helped me (in the comments to my question)\*.

**Note:** As it has passed some time from the date I posted the question, the styles and layout of my blog has changed (as I mentioned in the comments to the question). Luckily, because I'm using a VCS (Git), I was able to get the old version of my website's sources. What follows, this answer includes two parts, each part describing a solution for a different state fo the website. If you want to verify whether my solution really works, I include below links to the commits that I was basing when coming up with the solutions.

1. The link to the commit that I was using as representing the state of the website when there were the Bootstrap styles is: [https://github.com/silvuss/silvuss.github.io/commit/c86a4123b09833758e70c222a7b45212feb0250b](https://github.com/silvuss/silvuss.github.io/commit/c86a4123b09833758e70c222a7b45212feb0250b)
2. The link to the commit that I was using as representing the current state of the website (plain CSS styles) is: [https://github.com/silvuss/silvuss.github.io/commit/1a9e11b4410abe9479b86e63d446895f440371d8](https://github.com/silvuss/silvuss.github.io/commit/1a9e11b4410abe9479b86e63d446895f440371d8)

---

\* _For how tips has helped me, refer to the section "[The solution for the current, non-Bootstrap styles](#The-solution-for-the-current-non-Bootstrap-styles)" of this answer._

# The problem once again

For me, the problem described in the question is clear; but, let me rephrase it in a couple of points.

1. I write all of the articles for my blog in Markdown.
2. In some articles, I have text within Markdown's code blocks — that is, between ` ``` ` and ` ``` `.
3. In order to build the site (so to display it to the user in the browser), Jekyll is rendering all of the articles as HTML pages (and then putting this pages inside HTML templates, but that's not important for my question).
4. By default, Markdown's code blocks are rendered by Jekyll as four HTML elements, one placed inside the other: the `<code>` HTML element placed inside the `<pre>` HTML element, placed inside the `<div>` HTML element, placed again inside the `<div>` HTML element. It looks like this: `<div><div><pre><code>Here some content</code></pre></div></div>` (I'm omitting here the attributes). For brevity, later in this answer I'm referring to this piece of code as "Jekyll's code block".
5. Having all of the site rendered, it's ready to display it in the browser.
6. Now comes the important part:
    1. For a page containing at least one Jekyll's code block having its width **smaller than or equal to** the current viewport\* of the browser, then **there is no problem**. I'm writing "size of the rendered block", which is a very unclear statement speaking in CSS terms; but, I hope that one can get it intuitively, knowing how CSS works. Also, I mean that the viewport may have its width both as big as in a "desktop view", and as small as in a "mobile view".
    2. For a page containing at least one Jekyll's code block having its width **bigger than** the current viewport of the browser, then **there is a problem**. In such case, all of the HTML elements on the page (not only the Jekyll's code blocks) that have its width bigger than the viewport **"overflows" horizontally** (by default, the browser displays a scrollbar).
7. What I wanted to achieve is:
    1. to let the content of the Jekyll's code blocks to overflow as they do (just don't change this behaviour);
    2. to make all the content of all the other elements (i.e., all the content not within that blocks) not to overflow.

I've written in the question, and even in the question title, about "wrapping". I meant "wrapping" as in the context of the CSS `white-space` property, or `overflow-wrap` property. However, it turned out that the problem had little to do with such "wrapping". Now I consider this as a mistake.

---

\* _I'm aware that there are two, hm, "kinds" of viewport: the layout viewport and the visual viewport. You can read about them [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts). In this answer I write just "viewport" because I'm not quite acquainted to those two "kinds" of viewport; so, I'm not sure in what cases should I use one or the other. I hope that the generic term "viewport" is clear in the context of the problem that my question and my answer address. If not, please write a comment, and maybe propose what other term I should use instead._

# The solution for the former, Bootstrap styles

**_Note:_** _I've been trying to find the exact version which has led me to post the question. But, as I've been committing several times on the day I posted it, I cannot be sure for 100% that the version I have found is the same._

## The root cause of the problem

Well, I'm still not sure what is the root cause of the problem — or maybe even: whether there is a single one. I mean, there seem that there may be multiple root causes. But, most probably, it is the fact that the content of the Jekyll's code blocks make the container's size "stretching", effectively making it "overflowing the viewport". What follows, the fact that all of the content of the container (both within that blocks and outside) was going beyond the viewport was just a consequence of that.

How did I check it? In an article I put a single piece of Markdown's preformatted text, rendered then as Jekyll's code block, making sure that it's rendered with the width that makes it "overflowing" the viewport. Then, I applied `display: none` to the `<code>` element. After that, there seemed to be no "oveflowing" anymore within the page.

## The solution

### The situation

It turned out that what I wanted to achieve could be solved by restricting how far all the content beside the Jekyll's code blocks may "stretch". This behaviour could possibly be achieved in a couple of ways in CSS (and certainly even in more ways in JavaScript). The solution that I've come up with is by using the CSS properties `width` and `max-width` (on different elements).

I need to mention that I still don't know how exactly CSS is determining the width of an element (in general, not only within my website). If the element was the only element on the page, most probably it would be quite simple to assess it. But, like in my case, there are a couple of nested elements on the path from the `<html>` element to the Jekyll's code block, then it's hard.

Below is a part of the structure of an HTML page containing an article. I'm showing the path from the `<html>` element to the Jekyll's code block, and I'm omitting attributes for clarity. Some of the elements were put by me, and some rendered by Jekyll.

<!-- language: lang-html -->

    <html>
        <body>
            <div>
                <main>
                    <article>
                        Here some article's content outside the HTML generated by Jekyll
                        <div>
                            <div>
                                <pre>
                                    <code>
                                        Here some content within the HTML generated by Jekyll
                                    </code>
                                </pre>
                            </div>
                        </div>
                        Here some article's content outside the HTML generated by Jekyll
                    </article>
                </main>
            </div>
        </body>
    </html>

### The first part of the solution

When I have been designing the website, I've made the `<article>` HTML element using the Bootstrap class `col-sm-10` to restrict the width of this element. (Now I can remember that this class makes the element's width 10/12 of the width of some element… but I can't remember whether this "some element" is this element's the direct container, or some other element with some specific Bootstrap class. If you want to be sure, see the [documentation of Bootstrap 4.1.x grid system](https://getbootstrap.com/docs/4.1/layout/grid/) (the version that I've been using was 4.1.3).)

The situation was, this restriction worked well in the case the content of the `<article>` element includes any element **but** a Jekyll's code block.

So, I tried to verify which of the elements of a Jekyll's code block are causing this. I realised that there was a chance that it was **a combination** of several elements. But, checking all possible combinations in this case seemed to be too much work. I just assumed that it's caused by one element; moreover, I assumed that it's rather "more inner" one than "more outer".

So, I added a `<code>` element with a long random content as the child of the `<article>` element. There turned out to be no "overflow". Next, I replaced it with a `<pre>` element with the same content. Now there was the "overflow". So I stopped checking and assumed that it was the `<pre>` element causing the "overflow". I then read the [documentation of this element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre). It seemed to confirm this assumption, although I haven't noticed any explanation telling explicitly that this element may cause any "overflow".

The question now was: since the content was being restricted according to the `col-sm-10` class in case it didn't include the Jekyll's code blocks, why it wasn't restricted in case it included it? It seemed that the `<article>` element somehow "considered" the size (=the existance) of the `<pre>` element more important than the size imposed by the `col-sm-10` class.\*

I looked up in the browser's developer tools what CSS properties are defined by the Bootstrap `col-sm-10` class. It turned out to be two properties: `flex`, having its value set to `0 0 83.333333%`, and `max-width`, having its value set to `83.333333%`. These declarations mean the following things:

- The declaration `flex: 0 0 83.333333%` means that:
    - The value of the `flex-grow` property is set to `0`. I didn't quite get from [its documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) how it is supposed to work. Nonetheless, there are no other elements in the container of the `<article>` element, so I assumed the value of this property doesn't matter. Changing it in the developer tools seemed not to change anything, what was confirming this assumption.
    - The value of the `flex-shrink` property is set to `0`. I didn't quite get from [its documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) how it is supposed to work. Nonetheless, there are no other elements in the container of the `<article>` element, so I assumed the value of this property doesn't matter. Changing it in the developer tools seemed not to change anything, what was confirming this assumption.
    - The value of the `flex-basis` property is set to `83.333333%`. According to the [documentation of this property on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis), it "sets the initial main size of a flex item". If given a percentage as its value, it is calculated as a percentage "of the parent flex container's main size property". The [W3C documentation](https://www.w3.org/TR/css-flexbox-1/#box-model) says (by an image) that the "main size" of a "row flex container" is just its width. When translating this statement into Bootstrap grid system, I didn't quite get from the [Bootstrap documentation](https://getbootstrap.com/docs/4.1/layout/grid/) what element I shall consider as a "parent flex container". But, the developer tools reported that the first parent of the `<article>` element had the `display` property set to `flex`, and I thought that it would be enough to assume that it is this element. Putting it all together, the `flex-basis` property was telling to restrict the width of the `<article>` element to 83.333333% of the parent container — in this case, the `<main>` HTML element (as you can see in the listing above).
- The declaration `max-width: 83.333333%` means that the `<article>` element's width cannot be greater than 83.333333% of the containing block's width — which, I guess, is, according to the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), the `<main>` element. Note that in the mentioned MDN documentation there is used the term "content box". I couldn't find what it is, but I've found that there is a term "content-box"\*\* (note the dash instead of the space). I cannot say that these terms are equivalent (strictly speaking; that's why I'm writing that "I guess"). This declaration also seemed to make the `<pre>` element (of a Jekyll's code block) overflow horizontally its parent box (and have a scrollbar); though, I also can't be sure of this because I've verified this assumption only enabling and disabling the `max-width` property in the developer tools.

Now, I evaluated that there were two ways of going further. The first one involved determining why the `<main>` element was "overflowing" — this was indeed the case, as I've checked — and preventing it from doing this. The second one involved making the `<article>` element's width not relying on its parent width. I chose the second way as it seemed simpler.

Now, the simplest thing to do seemed to be just override the `max-width: 83.333333%` declaration with a custom declaration that would not be associated with the parent container of the `<article>` element. I chose `max-width: 83.333333vw` (note the change of the unit). I applied it directly on the `<article>` element. Now, the `<article>` element was no more "overflowing" the viewport.

---

\* _I'm aware that this might be the default behaviour of CSS. But I don't know of any source confirming that. I'd be glad if someone could find a source confirming or contradicting this behaviour._

\*\* _For what this second term is, see for example [this section](https://en.wikipedia.org/wiki/CSS_box_model#Specifics) of the article on Wikipedia about the CSS box model (look up the word "content-box") or [this article](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) in the MDN documentation about the `box-sizing` CSS property._

### The second part of the solution

What was left to do, it was to make the Jekyll's code blocks "not respecting" the limitations imposed on the width of its parent element (the `<article>` element). After a bit of experimenting, it turned out that it was the `<pre>` element that had its width exceeding the width of the `<article>` element.

So, I started experimenting. The first property that came to my mind was the `width` property. The developer tools reported no styles involving this property. Therefore, I assumed that its actual value is its initial value — that is, the `auto` value. After experimenting a bit with different values in the developer tools, I found both the `min-content` and `max-content` values making the `<pre>` element  fits its parent element. I looked up in the [documentation of these values](https://www.w3.org/TR/css-sizing-3/#sizing-values), but I didn't quite get the difference until I read this [Stack Overflow answer](https://stackoverflow.com/a/51285309). Since both values seemed to work equally, I chose the `max-content` value as more intuitive in my case.

# The solution for the current, non-Bootstrap styles

Since my question is about the state of my website from the time there were the Bootstrap styles, the solution for the current styles seems to be less important as a part of this answer. Therefore, I won't describe all the things involved when coming up with the solution for the current styles, but only the result.

The solution involves two steps:

1. setting the value of the `max-width` property of the container of the Jekyll's code blocks to:
    - `calc(100vw - 10px - 20px)` in case of bigger viewports (`10px` and `20px` represent paddings' sizes),
    - `max-width: inherit` in case of smaller viewports;
2. setting the value of the `width` property of the `<pre>` element to `max-content`.

The first step was when the @mb21 user's tip helped me.

**_Note:_** _If you're about to examine my code on GitHub, note that the changes described in this section are not yet pushed to GitHub. I'll do it later, and then update this answer._