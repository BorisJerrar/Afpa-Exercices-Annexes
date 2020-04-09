let showingResult = document.querySelectorAll("table tr td")
let value;
const choiceBrain = () => {
    value = prompt("Quelle Table de multiplication ?")
    if (Math.trunc(value) == value) {
        for (let i = 1; i <= 10; i++) {
            showingResult[i - 1].innerHTML = parseInt(value) * i
        }
    } else {
        return choiceBrain()
    }
}
choiceBrain()