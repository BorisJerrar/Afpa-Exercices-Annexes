function prixTtc(prixHorsTaxes,nombreArticle,tva){
    let ttc = nombreArticle * prixHorsTaxes * (1 + tva);
    console.log("Votre Prix TTC est de " + ttc + " €");
}
prixTtc(15,1,0.20);
prixTtc(30,1,0.20);
prixTtc(25,1,0.20);
prixTtc(14,1,0.20);
prixTtc(12,1,0.20);
prixTtc(45,1,0.20);
