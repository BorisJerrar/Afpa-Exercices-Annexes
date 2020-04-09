let table = document.querySelector('table');
let trCreation = document.createElement("tr")
let tdCreation = document.createElement("td")
let trArray;
let tdArray;
const final = localStorage.getItem('finalArray')
const shwoingTable = () => {
    for (let i = 0; i < final.split(",").length; i++) {
        table.appendChild(trCreation.cloneNode(true))
        trArray = document.querySelectorAll('tr');
        trArray[i].appendChild(tdCreation.cloneNode(true))
        tdArray = document.querySelectorAll('td');
        tdArray[i].innerHTML = final.split(",")[i]
    }
}
window.addEventListener("load", shwoingTable)