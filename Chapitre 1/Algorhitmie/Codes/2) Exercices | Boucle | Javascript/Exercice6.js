function add(premierChiffre,secondChiffre) {

    var result = (premierChiffre) * (secondChiffre);
    if (result > 0) {
        console.log(`le produit est positif.`);
    } else if (result < 0) {
        console.log(`le produit est negatif.`);
    } else if (result == 0) {
        console.log(`le produit est null.`);
    }
}
    add(2,8)