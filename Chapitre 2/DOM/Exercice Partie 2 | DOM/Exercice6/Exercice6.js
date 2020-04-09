let inputUser = document.querySelectorAll('input:not([type="button"])');
let table = document.querySelector('table');
let trCreation = document.createElement("tr")
let tdCreation = document.createElement("td")
let trArray;
let tdArray;
let btn = document.getElementById('btn');
const shwoingBrain = () => {
    table.innerHTML = ""
    for (let i = 0; i < inputUser.length; i++) {
        table.appendChild(trCreation.cloneNode(true))
        trArray = document.querySelectorAll('tr');
        trArray[i].appendChild(tdCreation.cloneNode(true))
    }
    tdArray = document.querySelectorAll('td');
    for (let i = 0; i < inputUser.length; i++) {
        tdArray[i].innerHTML = inputUser[i].value
    }
}
btn.addEventListener('click', shwoingBrain);