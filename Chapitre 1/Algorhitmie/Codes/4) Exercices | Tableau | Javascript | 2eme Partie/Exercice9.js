function fibonacci(iterationNumber) {
    let fiboArray = [0, 1];
    for (let i = 0; i < iterationNumber; i++) {
        fiboArray.push(fiboArray[i + 1] + fiboArray[i]);
    }

}
fibonacci(100);