function fibo(n) {
    if (n === 0) {
        return n =  0
    } else if (n === 1) {
        return n = 1
    }
    else {
        return fibo(n - 1) + fibo(n - 2)
    }
}
console.log(fibo(7))