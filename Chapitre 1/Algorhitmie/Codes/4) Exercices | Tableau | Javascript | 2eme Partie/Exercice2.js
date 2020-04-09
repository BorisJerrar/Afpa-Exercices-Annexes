function hello() {
    let helloArray = ["H", "E", "L", "L", "O"]
    let last = helloArray.pop()
    helloArray.unshift(last)
    console.log(helloArray)
}
hello()