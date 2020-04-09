function maxArray(...array) {
    let maximum = -Infinity
    let minimum = Infinity
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i]
        }
        if (array[i] < minimum) {
            minimum = array[i]
        }
    }
    console.log("Le plus petit nombre dans votre tableau est " + minimum + ".")
    console.log("Le plus grand nombre dans votre tableau est " + maximum + ".")
}
maxArray(-33, 6, 9, -12)

/* Math.max et Math.min pour une version plus courte, -Infinty pour entier Negatif*/