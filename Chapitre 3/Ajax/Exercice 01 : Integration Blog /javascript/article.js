let divRow = document.createElement('div')
divRow.className = "row p-3 mainrow"
let row;
let divArticleTitle = document.createElement('div')
divArticleTitle.className = "col-12 col-md-6 offset-md-1  h3 articleName"
let articleTitle;
let articleBody;
let divContent = document.createElement('div')
divContent.className = "col-md-9 col-12 offset-md-1 article pb-3"
let main = document.querySelector("main")
let comment = document.createElement("i")
comment.className = "col-12 offset-md-7 col-md-4 p-3 text-center"
comment.innerHTML = "Show Comments"
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            main.appendChild(divRow.cloneNode(true))
            row = document.querySelectorAll('.mainrow')
            row[i].appendChild(divArticleTitle.cloneNode(true))
            row[i].appendChild(divContent.cloneNode(true))
            row[i].appendChild(comment.cloneNode(true))
            articleTitle = document.querySelectorAll(".articleName")
            articleBody = document.querySelectorAll(".article")
            articleTitle[i].innerHTML = json[i].title
            articleBody[i].innerHTML = json[i].body
        }
    })
