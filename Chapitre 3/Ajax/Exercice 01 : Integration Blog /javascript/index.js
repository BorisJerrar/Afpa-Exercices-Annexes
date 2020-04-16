const articleTitle = document.querySelectorAll('.articletitle');
const articleContent = document.querySelectorAll('.articleprev');
const usersName = document.querySelectorAll('.pseudo');
const userAcroche = document.querySelectorAll('.accroche');
const tableUser = document.querySelector('table');
const showUsers = document.querySelector('.userall');

const mainArticleIntegration = () => {
  fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < 4; i++) {
        articleTitle[i].innerHTML = json[i].title;
        articleContent[i].innerHTML = json[i].body;
      }
    })
}

const writterIntegration = () => {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < 4; i++) {
        usersName[i].innerHTML = json[i].name;
        userAcroche[i].innerHTML = json[i].company.catchPhrase;
        usersName[i].addEventListener('click', function () {
          window.open('user.html?id=' + (i + 1));
        })
      }
      for (let i = 0; i < json.length; i++) {
        let trCreation = document.createElement('tr');
        tableUser.appendChild(trCreation);
        var trChecker = document.querySelectorAll('tr');
        for (let j = 0; j < 3; j++) {
          let tdCreation = document.createElement('td');
          trChecker[i].appendChild(tdCreation);
        }
        trChecker[i].children[0].innerHTML = json[i].name;
        trChecker[i].children[1].innerHTML = json[i].website;
        trChecker[i].children[2].innerHTML = json[i].address.city;
      }
      for (let k = 0; k < trChecker.length; k++) {
        trChecker[k].addEventListener('click', function () {
          window.open('user.html?id=' + (k + 1));
        })
      }
    })
}

let commentaryGenerator = () => {
  let commentButtonCheck = document.querySelectorAll('i');
  for (let i = 0; i < commentButtonCheck.length; i++) {
      fetch('http://localhost:3000/comments?postId=' + (i + 1))
          .then(response => response.json())
          .then(json => {
              let rowMainSelector = document.querySelectorAll('.articleContaine');
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
mainArticleIntegration()
writterIntegration()
commentaryGenerator()

showUsers.addEventListener('click', () => {
  if (tableUser.style.display === "block") {
    tableUser.style.display = "none";
  } else {
    tableUser.style.display = "block";
  }
})