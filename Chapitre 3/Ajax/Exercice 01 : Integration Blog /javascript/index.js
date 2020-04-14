let articleTitle = document.querySelectorAll('.articletitle')
let articleContent = document.querySelectorAll('.articleprev')
let usersName = document.querySelectorAll('.pseudo')
let userAcroche = document.querySelectorAll('.accroche')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
      for(let i = 0; i < 4; i++){
        articleTitle[i].innerHTML = json[i].title
        articleContent[i].innerHTML = json[i].body
}})
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log(json)
      for(let i = 0; i < 4; i++){
        usersName[i].innerHTML = json[i].name
        userAcroche[i].innerHTML = json[i].company.catchPhrase
}})
