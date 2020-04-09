/**
 * This is a function that adding 1 to your numbers
 */
function incArray(...myArray) {
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] += 1
    }
    console.log(myArray)
}
incArray(1, 2, 3, 4)