let inputUser = document.querySelector("input")
let showAnswer = document.getElementById("verifitext")
const verification = () => {
    if (inputUser.value !== "Je certifie avoir lu les conditions de vente" || inputUser.value !== "je certifie avoir lu les conditions de vente") {
        showAnswer.style.color = "#dd5252"
        showAnswer.innerHTML = "Incorect : " + inputUser.value
    }
    if (inputUser.value === "Je certifie avoir lu les conditions de vente" || inputUser.value === "je certifie avoir lu les conditions de vente") {
        showAnswer.style.color = "#6edd52"
        showAnswer.innerHTML = "Corect : " + inputUser.value
    }
}

inputUser.addEventListener("change", verification)