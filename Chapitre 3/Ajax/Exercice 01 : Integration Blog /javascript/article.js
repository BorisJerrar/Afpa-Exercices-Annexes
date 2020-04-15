const main = document.querySelector("main");
const commentContent = document.createElement('p');

const generatingArticle = () => {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let divRow = document.createElement('div');
                divRow.className = "row p-3 text-light col-12 col-md-6 mainrow flex-column align-items-center justify-content-around m-md-3 articleRow";
                main.appendChild(divRow);
                let row = document.querySelectorAll('.mainrow');
                const divArticleTitle = document.createElement('div');
                divArticleTitle.className = "text-center col-12 col-md-10 h3 articleName";
                row[i].appendChild(divArticleTitle);
                const divContent = document.createElement('div');
                divContent.className = "text-center text-light col-md-10 col-12 article pb-4";
                row[i].appendChild(divContent);
                const images = document.createElement('img');
                images.className = "img-fluid col-12 col-md-10 pb-4";
                images.src = "https://picsum.photos/300/200/?random=" + [i];
                row[i].appendChild(images);
                const comment = document.createElement("i");
                comment.className = "col-12 col-md-4 p-3 m-md-10 text-center comment";
                comment.innerHTML = "Show Comments";
                row[i].appendChild(comment);
                let articleTitle = document.querySelectorAll(".articleName");
                let articleBody = document.querySelectorAll(".article");
                articleTitle[i].innerHTML = json[i].title;
                articleBody[i].innerHTML = json[i].body;
            }
            commentary();
        })
}

let commentary = () => {
    let commentCheck = document.querySelectorAll('i');
    for (let i = 0; i < commentCheck.length; i++) {
        commentCheck[i].addEventListener('click', () => {
            fetch('http://localhost:3000/comments?postId=' + (i + 1))
                .then(response => response.json())
                .then(json => {
                    for (let commentNumber of json) {

                    }
                })
        })
    }
}
generatingArticle()