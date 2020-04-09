const button = document.querySelector('div')
let showing = document.querySelector("p")
const image = document.querySelector('img')
let likeNumber = 1
let innitalLike = 36
showing.innerHTML = innitalLike + " J'aimes"
button.addEventListener("click", () => {

    if (likeNumber == 0) {
        showing.innerHTML = (innitalLike + likeNumber++) + " J'aimes"
        button.style.backgroundColor = "#b6b6b6"
        image.style.animation = "none"
    } else {
        showing.innerHTML = (innitalLike + likeNumber--) + " J'aimes"
        button.style.backgroundColor = "#ff6c6c"
        image.style.animation = "boomboom ease-in-out 0.2s"
    }
})