function scalaire() {
    let firstArray = [[2, 4, 6, 8],[8, 6, 4, 2]];
    let stock = 0;
    for (let i = 0; i < firstArray[0].length; i++) {
        stock += (firstArray[0][i]*firstArray[1][i])
    }
    console.log("Votre produit scalaire est egale à: "+ stock)
}
scalaire()