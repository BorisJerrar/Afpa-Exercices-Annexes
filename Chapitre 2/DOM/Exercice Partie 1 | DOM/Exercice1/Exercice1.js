let width = document.querySelector(".width input");
let height = document.querySelector(".height input");
let axeX = document.querySelector(".axeX input");
let axeY = document.querySelector(".axeY input");
let color = document.querySelector("[type=color]");
let porportion = document.querySelector("[type=checkbox]");
let image = document.querySelector("img");

const modify = () => {
    if (porportion.checked == true) {
        image.style.width = width.value + "px"
        image.style.height = width.value + "px"
        image.style.backgroundColor = color.value;
        image.style.bottom = axeY.value + "px"
        image.style.left = axeX.value + "px"
    } else {
        image.style.bottom = axeY.value + "px"
        image.style.left = axeX.value + "px"
        image.style.height = height.value + "px"
        image.style.width = width.value + "px"
        image.style.backgroundColor = color.value;
    }
}
document.addEventListener('input', modify)