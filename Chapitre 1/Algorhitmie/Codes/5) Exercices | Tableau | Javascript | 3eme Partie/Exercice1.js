
function arrayDecroissant(array) {
    array.sort((a, b) => b - a);
console.log("Votre tableau a ete trié: " + array)
let max = array[1]
let min = array[array.length - 2]

console.log("Le second plus petit chiffre est: " + min)
console.log("Le second plus grand chiffre est: " + max)
}
arrayDecroissant(1, 15, 90, 40, 21)
