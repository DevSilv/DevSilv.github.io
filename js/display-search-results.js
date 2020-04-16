function displaySearchResults(noResultsText) {
    const input = $("#search-form__input");
    const resultsElement = $("#search-form__results-list");

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            resultsElement.empty();
            const data = this.response;
            const xml = new DOMParser().parseFromString(data, "text/xml");
            const results = [];
            const articles = xml.getElementsByTagName("item");
            const query = new RegExp(input.val(), 'gi');
            for (let article of articles) {
                const titleElement = article.getElementsByTagName("title")[0];
                const title = titleElement.textContent;
                const linkElement = article.getElementsByTagName("link")[0];
                const link = linkElement.textContent;
                if (title.match(query)) {
                    results.push({
                        title,
                        link
                    });
                }
            }
            if (results.length != 0) {
                for (let r of results) {
                    const rLink = document.createElement("a");
                    rLink.setAttribute("href", r.link);
                    rLink.append(r.title);
                    rLink.classList.add(
                        "search-form__results-list__item__link"
                    );
                    $(rLink).css("display", "block");
                    const rElement = document.createElement("li");
                    rElement.append(rLink);
                    resultsElement.append(rElement);
                }
            } else {
                const errorElement = document.createTextNode(noResultsText);
                const rElement = document.createElement("li");
                rElement.append(errorElement);
                resultsElement.append(rElement);
            }
            resultsElement.show();
        }

    };
    xhttp.open("GET", "/rss.xml", true);
    xhttp.send();

}