let articleTitle = document.querySelectorAll('.articletitle')
let articleContent = document.querySelectorAll('.articleprev')
let usersName = document.querySelectorAll('.pseudo')
let userAcroche = document.querySelectorAll('.accroche')
let tableUser = document.querySelector('table')
let trChecker;
let showUsers = document.querySelector('.userall')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < 4; i++) {
      articleTitle[i].innerHTML = json[i].title
      articleContent[i].innerHTML = json[i].body
    }
  })
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    for (let i = 0; i < 4; i++) {
      usersName[i].innerHTML = json[i].name
      userAcroche[i].innerHTML = json[i].company.catchPhrase
    }
  })

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    for (let i = 0; i < json.length; i++) {
      let trCreation = document.createElement('tr')
      tableUser.appendChild(trCreation)
      trChecker = document.querySelectorAll('tr')
      for (let j = 0; j < 3; j++) {
        let tdCreation = document.createElement('td')
        trChecker[i].appendChild(tdCreation)
      }
      trChecker[i].children[0].innerHTML = json[i].name
      trChecker[i].children[1].innerHTML = json[i].website
      trChecker[i].children[2].innerHTML = json[i].address.city
    }
  })

showUsers.addEventListener('click', () => {
  if (tableUser.style.display === "block") {
    tableUser.style.display = "none"
  } else {
    tableUser.style.display = "block"
  }
})