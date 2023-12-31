function processInputs() {
    var authors = document.getElementById('authors').value;
    var title = document.getElementById('title').value;
    var journal = document.getElementById('journal').value;
    var year = document.getElementById('year').value;
    var id = document.getElementById('id').value;
    var abstractContents = document.getElementById('abstractContents').value;

    var result = `<li>${authors}. <span class = "italic">${title}</span>. ${journal}, ${year}. <a href="javascript:void(0);" onclick="toggleAbstract('${id}')">Abstract</a>.\n\t<div id="${id}" class="abstract">\n\t\t${abstractContents}\n\t</div>\n</li>`;
    document.getElementById('output').textContent = result;
}

function searchGoogle() {
    var title = document.getElementById('title').value;
    var authors = document.getElementById('authors').value;

    // Construct the search query
    var query = `${title} ${authors}`.trim().replace(/\s+/g, '+');

    // Redirect to Google search
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
}
