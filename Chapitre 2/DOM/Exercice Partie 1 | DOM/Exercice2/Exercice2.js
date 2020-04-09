let leftMove = document.querySelector(".left");
let rightMove = document.querySelector(".right");
let upMove = document.querySelector(".top");
let downMove = document.querySelector(".down");
let image = document.querySelector(".square");
let movingValueX = 0;
let movingValueY = 0;
const movingLeftSquare = () => {
    movingValueX -= 50
    image.style.left = movingValueX + "px";
}
leftMove.addEventListener("click", movingLeftSquare)
const movingRightSquare = () => {
    movingValueX += 50
    image.style.left = movingValueX + "px";
}
rightMove.addEventListener("click", movingRightSquare)
const movingUpSquare = () => {
    movingValueY += 50
    image.style.bottom = movingValueY + "px";
}
upMove.addEventListener("click", movingUpSquare)
const movingDownSquare = () => {
    movingValueY -= 50
    image.style.bottom = movingValueY + "px";
}
downMove.addEventListener("click", movingDownSquare)
window.addEventListener("keyup", e => {
    if (e.isComposing || e.keyCode === 37) {
        leftMove.click()
    }
    if (e.isComposing || e.keyCode === 39) {
        rightMove.click()
    }
    if (e.isComposing || e.keyCode === 38) {
        upMove.click()
    }
    if (e.isComposing || e.keyCode === 40) {
        downMove.click()
    }
})