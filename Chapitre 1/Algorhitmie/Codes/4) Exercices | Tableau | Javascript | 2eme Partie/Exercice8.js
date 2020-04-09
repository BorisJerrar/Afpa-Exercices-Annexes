function positif(array) {
    let positiveValue = 0;
    let negativeValue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveValue++;
        } else {
            negativeValue++;
        }
    }
    console.log("Il y a " + positiveValue + " nombre positif dans votre tableau.");
    console.log("Il y a " + negativeValue + " nombre negatif dans votre tableau.");
}
positif([-400, 2, -8, -10]);