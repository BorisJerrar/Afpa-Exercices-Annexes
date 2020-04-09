let brut = document.querySelector(".brut");
let prime = document.querySelector(".prime");
let allocation = document.querySelector(".allocation");
let validation = document.querySelector("input[type='button']");
let paragraph = document.querySelector("p");
let femme = document.querySelector(".femme");
let charges = document.querySelector(".charges");
let impot = 0.18;
let assurance = 0.07;
let regimeCanada = 0.05;

const calculator = () => {
    if (parseInt(charges.value) == 4) {
        impot -= 0.02
    } else if (parseInt(charges.value) == 3) {
        impot -= 0.01
    }
    if (femme.checked) {
        impot -= 0.02
    }
    let result = brut.value - ((brut.value * impot) + (brut.value * assurance) + (brut.value * regimeCanada))
    if (allocation.checked) {
        result += 150
    }
    if (prime.checked) {
        result += 150
    }
    paragraph.innerHTML = "Votre salaire est de " + result + " Dollars Canadien"
}
validation.addEventListener('click', calculator)