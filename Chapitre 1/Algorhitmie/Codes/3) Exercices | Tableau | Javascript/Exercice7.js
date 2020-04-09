/*
 * This function find the hightest number in your array 
 */
function tabMax(...myArray) {
    let maximal = 0
    let indexMax = []
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > maximal) {
            maximal = myArray[i]
        }
    }
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == maximal) {
            indexMax.push(i)
        }
    }
    console.log("Le chiffre maximal est de " + maximal + ". Nous le trouvons a la place " + indexMax + " du tableau.")
}
tabMax(2, 8, 8, 9, 40)

/* Ou Math.max mais j'avais envie de reflechir */