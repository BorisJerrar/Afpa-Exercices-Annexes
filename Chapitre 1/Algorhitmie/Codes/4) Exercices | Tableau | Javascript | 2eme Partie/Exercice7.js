function evenOdd(array) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log("Il y a " + even + " chiffre paire dans votre tableau.");
    console.log("Il y a " + odd + " chiffre impaire dans votre tableau.");
}
evenOdd([3, 4, 9, 11])