// onblur
function hideResults(event) {
    if (event.relatedTarget === null ||
        !event.relatedTarget.classList.contains("search-form__results-list__item__link")) {
        document.getElementById("search-form__results-list").style.display = "none";
    }
}

// onfocus
function showResults() {
    const resultsElement = document.getElementById("search-form__results-list");
    if (resultsElement.innerHTML != "") {
        resultsElement.style.display = "block";
    }
}

// onkeyup
function search(noResultsText) {
    const resultsElement = document.getElementById("search-form__results-list");
    if (document.getElementById("search-form__input").value != "") {
        displaySearchResults(noResultsText);
    } else {
        resultsElement.style.display = "none";
    }
}
