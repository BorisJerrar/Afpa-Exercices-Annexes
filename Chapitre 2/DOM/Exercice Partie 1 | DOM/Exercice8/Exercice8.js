let button = document.querySelector("input")
let div = document.querySelectorAll("div")
let tab = [-2, 1, 4]
let result = []
const additionne = (x) => {
    for (let i = 0; i < tab.length; i++) {
        x = tab[i]
        result[i] = x + 2
    }
}
const affiche = () => {
    additionne()
    for (let i = 0; i < tab.length; i++) {
        div[i].innerHTML = result[i]
    }
}
button.addEventListener("click", affiche)