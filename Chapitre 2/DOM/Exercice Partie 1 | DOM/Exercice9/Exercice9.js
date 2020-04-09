let date = new Date;
let day = date.getDay();
let finalShow = ""
let button = document.querySelector("input")
let para = document.querySelector("p")
if (day === 0) {
    finalShow = "Dimanche"
} else if (day === 1) {
    finalShow = "Lundi"
} else if (day === 2) {
    finalShow = "Mardi"
} else if (day === 3) {
    finalShow = "Mercredi"
} else if (day === 4) {
    finalShow = "Jeudi"
} else if (day === 5) {
    finalShow = "Vendredi"
} else if (day === 6) {
    finalShow = "Samedi"
}
const showDate = () => {
    para.innerHTML = "Nous Sommes " + finalShow
}

button.addEventListener("click", showDate)