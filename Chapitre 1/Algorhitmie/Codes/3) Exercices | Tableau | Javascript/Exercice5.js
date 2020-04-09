/**
 * This is the sum of 2 arrays
 * No values needed
 */
function doubleArray() {
    let firstArray = [1, 4, 5, 2, 7, 6, 9]
    let secondArray = [2, 4, 6, 3, 4, 8, 0]
    let finalArray = []
    for (i = 0; i < secondArray.length; i++) {
        finalArray.push(firstArray[i] + secondArray[i])
    }
    console.log(finalArray)
}
doubleArray()