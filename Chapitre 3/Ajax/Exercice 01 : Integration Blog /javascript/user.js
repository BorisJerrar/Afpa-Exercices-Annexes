const main = document.querySelector('main');
const idUrl = parseInt(new URLSearchParams(window.location.search).get("id"));
const nameInner = document.querySelector('.nameInner');
const articleInner = document.querySelector('article');

const userNamerInnerHtml = () => {
  fetch('http://localhost:3000/users/' + idUrl)
    .then(response => response.json())
    .then(json => {
      nameInner.innerHTML = json.name;
    })
}

const userArticles = () => {
  fetch('http://localhost:3000/posts?userId=' + idUrl)
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        const divCreaTitle = document.createElement('div');
        divCreaTitle.className = "titleArticle p-3";
        articleInner.appendChild(divCreaTitle);
        let articleTitleInner = document.querySelectorAll('.titleArticle');
        const divCreaBody = document.createElement('div');
        divCreaBody.className = "bodyArticle p-3";
        articleInner.appendChild(divCreaBody);
        let articleBodyInner = document.querySelectorAll('.bodyArticle');
        articleTitleInner[i].innerHTML = json[i].title;
        articleBodyInner[i].innerHTML = json[i].body;
      }
    })
}

userNamerInnerHtml()
userArticles()