function sommeAlgo(n, debut) {
    let resultat = 0;
    for (let i = debut; i <= n; i++) {
        resultat += Math.pow(i, 3);
    }
    console.log(resultat);
}
sommeAlgo(2,0);