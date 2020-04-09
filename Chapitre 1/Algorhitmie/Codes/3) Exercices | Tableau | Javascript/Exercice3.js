/**
 * This is an array axtractor of negative et positive value
 *
 */
function tabNegatif(...myArray) {
    let positif = 0;
    let negatif = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            positif++
        } else {
            negatif++
        }
    }
    console.log("Vous avez entré " + negatif + " chiffre negatif" + " Et chiffre " + positif + " positif.")
}
tabNegatif(2, -4, -3, -1)