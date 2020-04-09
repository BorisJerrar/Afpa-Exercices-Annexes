function maxArray(...array) {
    let maximum = -Infinity
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i]
        }
    }
    console.log("Le plus grand nombre dans votre tableau est " + maximum + ".")
}
maxArray(-3, -6, -9, -12)
/* Math.max pour version plus courte, -Infinty pour entier Negatif*/