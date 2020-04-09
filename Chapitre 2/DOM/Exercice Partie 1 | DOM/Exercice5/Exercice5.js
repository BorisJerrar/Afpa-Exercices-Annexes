let result = document.querySelector(".result");
let input = document.querySelector("input");
let logResult = document.querySelector("p");
let reset = document.querySelector(".reset");
let finalCalculator = 0
const calculator = () => {
    let finalResult = input.value.split("+")
    for (let i = 0; i < finalResult.length; i++) {
        finalCalculator += parseInt(finalResult[i])
    }
    logResult.innerHTML = finalCalculator
}
result.addEventListener("click", calculator)

reset.addEventListener("click", () => {
    finalCalculator = 0
    input.value = ""
    logResult.innerHTML = ""
})