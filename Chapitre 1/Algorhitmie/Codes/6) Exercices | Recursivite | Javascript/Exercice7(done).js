function arrayFinder(x, n) {
    if (n === 1) {
        return x
    } else {
        console.log(arrayFinder(x,n-1))
        return x * arrayFinder(x, n - 1)
    }
}
console.log(arrayFinder(3, 4))