function corelation(array, expectedValue) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == expectedValue) {
            result++
        }
    }
    console.log("Il y a " + result + " fois la valeur: " + expectedValue + " dans votre tableau.")
}
corelation(["Javascript", 5, "Javascript", 2, "Javascript"], 2)