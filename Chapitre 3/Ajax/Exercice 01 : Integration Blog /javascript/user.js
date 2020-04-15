let main = document.querySelector('main')
let idUrl = parseInt(new URLSearchParams(window.location.search).get("id"))
let nameInner = document.querySelector('.nameInner')
let articleInner = document.querySelector('article')
let articleTitleInner;
let articleBodyInner;
let divCreaBody = document.createElement('div')
divCreaBody.className = "bodyArticle p-3"
let divCreaTitle = document.createElement('div')
divCreaTitle.className = "titleArticle p-3"

fetch('http://localhost:3000/users/'+idUrl)
  .then(response => response.json())
  .then(json => {
    nameInner.innerHTML = json.name
  })
  fetch('http://localhost:3000/posts?userId='+idUrl)
  .then(response => response.json())
  .then(json => { 
    for(let i = 0; i<json.length; i++){
        articleInner.appendChild(divCreaTitle.cloneNode(true));
        articleTitleInner = document.querySelectorAll('.titleArticle')
        articleInner.appendChild(divCreaBody.cloneNode(true));
        articleBodyInner = document.querySelectorAll('.bodyArticle')
        articleTitleInner[i].innerHTML = json[i].title
        articleBodyInner [i].innerHTML = json[i].body
    }
  })