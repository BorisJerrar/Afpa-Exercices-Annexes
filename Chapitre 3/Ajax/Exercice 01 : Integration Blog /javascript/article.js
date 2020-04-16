const main = document.querySelector("main");
const generatingLoremArticle = () => {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let divRow = document.createElement('div');
                divRow.className = "row p-3 text-light col-12 col-md-6 mainrow flex-column align-items-center justify-content-around m-md-3 articleRow";
                main.appendChild(divRow);
                let rowMainSelector = document.querySelectorAll('.mainrow');
                const divArticleTitle = document.createElement('div');
                divArticleTitle.className = "text-center col-12 col-md-10 h3 articleName";
                rowMainSelector[i].appendChild(divArticleTitle);
                const divArticleContent = document.createElement('div');
                divArticleContent.className = "text-center text-light col-md-10 col-12 article pb-4";
                rowMainSelector[i].appendChild(divArticleContent);
                const imagesInner = document.createElement('img');
                imagesInner.className = "img-fluid col-12 col-md-10 pb-4";
                imagesInner.src = "https://picsum.photos/300/200/?random=" + [i];
                rowMainSelector[i].appendChild(imagesInner);
                const commentClicker = document.createElement("i");
                commentClicker.className = "col-12 col-md-4 p-3 text-center";
                commentClicker.innerHTML = "Show Comments";
                rowMainSelector[i].appendChild(commentClicker);
                let articleTitleChecker = document.querySelectorAll(".articleName");
                let articleBodyChecker = document.querySelectorAll(".article");
                articleTitleChecker[i].innerHTML = json[i].title;
                articleBodyChecker[i].innerHTML = json[i].body;
            }
            commentaryGenerator();
        })
}

let commentaryGenerator = () => {
    let commentButtonCheck = document.querySelectorAll('i');
    for (let i = 0; i < commentButtonCheck.length; i++) {
        fetch('http://localhost:3000/comments?postId=' + (i + 1))
            .then(response => response.json())
            .then(json => {
                let rowMainSelector = document.querySelectorAll('.mainrow');
                const mainArticleRow = document.createElement('div');
                mainArticleRow.className = 'mainRow p-3 m-3 commentsContent';
                rowMainSelector[i].appendChild(mainArticleRow)
                for (let commentNumber of json) {
                    const divCommentShow = document.createElement('div');
                    divCommentShow.className = 'd-flex flex-column'
                    divCommentShow.innerHTML = "<p class='p-3 m-3 mailadresse'>" + commentNumber.email + "</p>" + "<p class='p-3 m-3 text-dark'>" + commentNumber.body + "</p>"
                    mainArticleRow.appendChild(divCommentShow);
                }
            })
        commentButtonCheck[i].addEventListener('click', function () {
            let rowMainSelector = document.querySelectorAll('.mainRow');
            if (rowMainSelector[i].style.display === "block") {
                this.innerHTML = "Show Comments"
                rowMainSelector[i].style.display = 'none';
            } else {
                this.innerHTML = 'Hidde Comments'
                rowMainSelector[i].style.display = "block";
            }
        })
    }
}
generatingLoremArticle()
