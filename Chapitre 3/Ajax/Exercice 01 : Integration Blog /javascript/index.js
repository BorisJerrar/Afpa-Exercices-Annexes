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
      console.log(json)
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
        let trChecker = document.querySelectorAll('tr');
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

mainArticleIntegration()
writterIntegration()

showUsers.addEventListener('click', () => {
  if (tableUser.style.display === "block") {
    tableUser.style.display = "none";
  } else {
    tableUser.style.display = "block";
  }
})