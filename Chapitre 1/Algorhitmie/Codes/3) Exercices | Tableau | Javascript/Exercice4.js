/**
 * This function is calculating the sum of an array
 */
function arrayCalc(...tableau) {
    let result = 0
    for (let i = 0; i < tableau.length; i++) {
        result += tableau[i]
    }
    console.log(result)
}
arrayCalc(2, 7, 8, 10)