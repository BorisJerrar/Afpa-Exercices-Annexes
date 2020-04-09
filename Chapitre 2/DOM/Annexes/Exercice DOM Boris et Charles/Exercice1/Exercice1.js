const button = document.querySelector('button')
let input = document.querySelector("input")
let showing = document.querySelector("p")
let finalInput;

button.addEventListener("click", () => {
    finalInput = parseInt(input.value)
    timer(finalInput)
})

function timer(number) {
    if (number < 0) {
        return 0
    } else {
        setTimeout(() => {
            showing.innerHTML = number;
            timer(number - 1)
        }, 1000)
    }
}