function Impot(genre, age) {
    if (age > 20 && genre.includes("homme") || age > 18 && age < 35 && genre.includes("femme")) {
        console.log(`Nous vous recontacterons pour evaluer la somme que vous devrez verser.`);
    } else {
        console.log(`Vous etes insolvable.`);

    }
}
Impot("Je suis un homme", 26)