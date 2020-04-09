const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")
const chronoShow = document.querySelector("p")
let second = 1;
let minute = 0;
let hour = 0;
let testing = false
chronoShow.innerHTML = hour + "   :  " + minute + "   :   " + "0" + "     :     " + "000"
const milli = (milliSec = 0) => {
    setTimeout(() => {
        if (testing === true) {
            return chronoShow.innerHTML = hour + "   :  " + minute + "   :   " + second + "     :     " + milliSec
        } else if (milliSec > 99) {
            second += 1
            return milli(0)
        } else if (second > 59) {
            minute += 1
            second = 0
            return milli(0)
        } else if (minute > 59) {
            hour += 1
            minute = 0
            return milli(0)
        } else {
            chronoShow.innerHTML = hour + "   :  " + minute + "   :   " + second + "     :     " + milliSec
            return milli(milliSec + 1)
        }
    }, 10)
}
const timer = () => {
    testing = false
    milli(0)
}
const stop = () => {
    startButton.addEventListener("click", timer,{once:true})
    testing = true
}
const reset = () => {
    chronoShow.innerHTML = hour + "   :  " + "0" + "   :   " + "0" + "     :     " + "000"
    minute = 0
    second = 1
    hour = 0
}
stopButton.addEventListener("click", stop)
startButton.addEventListener("click", timer, {once:true})
resetButton.addEventListener("click", reset)