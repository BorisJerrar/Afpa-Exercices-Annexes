/** 
 * 
 * Inverted Array
 */
function invert(...array) {
    let newArray = [];
    const arrayConst = array.length
    for (i = 0; i < arrayConst; i++) {
        newArray.push(array.pop(array[i]))

    }
    console.log(newArray)
}
invert(1, 2, 3, 4)