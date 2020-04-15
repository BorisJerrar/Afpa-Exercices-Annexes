let divRow = document.createElement('div')
divRow.className = "row p-3 text-light col-12 col-md-6 mainrow flex-column align-items-center justify-content-around m-md-3 articleRow"
let images = document.createElement('img')
images.className = "img-fluid col-12 col-md-10 pb-4"
let divArticleTitle = document.createElement('div')
divArticleTitle.className = "text-center col-12 col-md-10 h3 articleName"
let divContent = document.createElement('div')
divContent.className = "text-center text-light col-md-10 col-12 article pb-4"
let main = document.querySelector("main")
let comment = document.createElement("i")
comment.className = "col-12 col-md-4 p-3 m-md-10 text-center commentaryShow"
comment.innerHTML = "Show Comments"
let commentContent = document.createElement('p')
let row;
let articleTitle;
let articleBody;
let commentCheck;

fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            main.appendChild(divRow.cloneNode(true))
            row = document.querySelectorAll('.mainrow')
            row[i].appendChild(divArticleTitle.cloneNode(true))
            row[i].appendChild(divContent.cloneNode(true))
            images.src = "https://picsum.photos/300/200/?random=" + [i]
            row[i].appendChild(images.cloneNode(true))
            row[i].appendChild(comment.cloneNode(true))
            articleTitle = document.querySelectorAll(".articleName")
            articleBody = document.querySelectorAll(".article")
            articleTitle[i].innerHTML = json[i].title
            articleBody[i].innerHTML = json[i].body
            commentCheck = document.querySelectorAll('commentaryShow')
        }
    })
