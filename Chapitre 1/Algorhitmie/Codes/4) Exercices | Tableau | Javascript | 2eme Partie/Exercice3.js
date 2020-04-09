function vectorisation() {
    let firstVector = [2, 1, 4, 3]
    let secondVector = [1, 3, 5, 10]
    let resultVector = []
    let vectorSum = 0
    for (i = 0; i < firstVector.length; i++) {
        resultVector[i] = firstVector[i] * secondVector[i]
        vectorSum += resultVector[i]
    }
    console.log(vectorSum)
}
vectorisation()