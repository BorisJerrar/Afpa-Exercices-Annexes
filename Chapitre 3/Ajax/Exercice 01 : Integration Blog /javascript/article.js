let divRow = document.createElement('div')
divRow.className = "row p-3 mainrow"
let row;
let divArticleTitle = document.createElement('div')
divArticleTitle.className = "offset-4 col-6 h3 articleName"
let articleTitle;
let articleBody;
let divContent = document.createElement('div')
divContent.className = "offset-4  col-9 article"
let main = document.querySelector("main")
let link = document.createElement("a")
link.className = "offset-1"
link.setAttribute("href", "###")
link.innerHTML = "Lire la suite"
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            main.appendChild(divRow.cloneNode(true))
            row = document.querySelectorAll('.mainrow')
            row[i].appendChild(divArticleTitle.cloneNode(true))
            row[i].appendChild(link.cloneNode(true))
            row[i].appendChild(divContent.cloneNode(true))
            articleTitle = document.querySelectorAll(".articleName")
            articleBody = document.querySelectorAll(".article")
            articleTitle[i].innerHTML = json[i].title
            articleBody[i].innerHTML = json[i].body
        }
    })
