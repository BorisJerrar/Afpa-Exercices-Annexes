const value = document.querySelectorAll('span')
const show = []
let hide = []
for (let i = 0; i < value.length; i++) {
    if (value[i].innerHTML.includes("*") === false) {
        hide.push("*******")
        show.push(value[i].innerHTML)
        value[i].innerHTML = hide[i]
    }
    value[i].addEventListener("click", () => {
        value[i].innerHTML = show[i]
    })
}