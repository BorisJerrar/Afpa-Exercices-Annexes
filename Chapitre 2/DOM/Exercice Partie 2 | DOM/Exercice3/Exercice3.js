let inputUser = document.querySelector("input");
let resultDollar = document.getElementById("result")
const convertion = () => {
    resultDollar.value = parseFloat(inputUser.value) * 1.24
}
inputUser.addEventListener("input", convertion)