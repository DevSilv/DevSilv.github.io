function searchAndDisplay(noResultsText) {
    const input = $(".search-form__input");
    const resultsListElement = $(".search-form__results-list");

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    $.get("/feed.xml", function(data) {
        console.log(data);
        console.log(data.toSource());
        resultsListElement.empty();

        // const data = this.response;
        const xml = new DOMParser().parseFromString(data, "text/xml");
        const resultsList = [];
        const articlesList = xml.getElementsByTagName("item");
        const query = new RegExp(input.val(), 'gi');

        for (let article of articlesList) {
            const titleElement = article.getElementsByTagName("title")[0];
            const title = titleElement.textContent;
            const linkElement = article.getElementsByTagName("link")[0];
            const link = linkElement.textContent;
            if (title.match(query)) {
                resultsList.push({
                    title,
                    link
                });
            }
        }

        if (resultsList.length != 0) {
            for (let result of resultsList) {
                const resultLinkElement = document.createElement("a");
                resultLinkElement.setAttribute("href", result.link);
                resultLinkElement.append(result.title);
                resultLinkElement.classList.add("search-form__results-list__item__link");
                const resultListItemElement = document.createElement("li");
                resultListItemElement.append(resultLinkElement);
                resultListItemElement.classList.add("search-form__results-list__item");
                resultsListElement.append(resultListItemElement);
            }
        } else {
            const errorText = document.createTextNode(noResultsText);
            const resultListItemElement = document.createElement("li");
            resultListItemElement.append(errorText);
            resultListItemElement.classList.add("search-form__results-list__item", "search-form__results-list__item--error");
            resultsListElement.append(resultListItemElement);
        }

        resultsListElement.show();
    }, "xml");
    // }
    // };
    // xhr.open("GET", "/feed.xml", true);
    // xhr.send();
}