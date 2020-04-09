let myDate = new Date;
let hours = myDate.getHours();
let minutes = myDate.getMinutes();
let seconds = myDate.getSeconds();
let degresSecond = seconds * 6
let degresMinutes = minutes * 6
let degresHours = hours * 30
let needleBig = document.querySelector(".grandeAguille")
let needleSmall = document.querySelector(".heureAguille")
let needleSecond = document.querySelector(".secondeAguille")
const runningHour = () => {
    setTimeout(() => {
        if (seconds >= 60) {
            seconds = 0
            degresSecond = 0
            minutes += 1
            degresMinutes += 6
        }
        if (minutes >= 60) {
            minutes = 0
            degresMinutes = 0
            hours += 1
            degresHours += 30;
        }
        if (hours >= 12) {
            hours = 0
            degresHours = 0
        }
        seconds += 1
        degresSecond += 6
        console.log(seconds);
        console.log(minutes);
        needleBig.style.transform = "rotate(" + degresMinutes + "deg" + ")"
        needleSecond.style.transform = "rotate(" + degresSecond + "deg" + ")"
        needleSmall.style.transform = "rotate(" + degresHours + "deg" + ")"
        return runningHour()
    }, 1000)

}
runningHour()