let button = document.querySelector("button")
let randomize = Math.trunc(Math.random() * (99999 - 1) + 1)
let count = 0;
let showing = document.querySelector("p")
let inputEnter = document.querySelector("input")

const comparaison = (ffffffff) => {
    count += 1
    console.log(randomize);
    if (inputEnter.value < randomize) {
        showing.innerHTML = "Le nombre cherché est plus grand"
    }
    if (inputEnter.value > randomize) {
        showing.innerHTML = "Le nombre cherché est plus petit"
    }
    if (inputEnter.value == randomize) {
        showing.innerHTML = "Vous avez gagné! " + randomize + " etait le chiffre a trouver. Vous l'avez trouvé en " + count + " essais"
    }
}

button.addEventListener("click", comparaison)