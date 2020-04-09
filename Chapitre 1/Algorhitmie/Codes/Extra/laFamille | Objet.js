let famillyRoot = {
    membre: [
        {
            mere:[{
                nom: "Odile"}, 
            {naissance: "Briey"}, 
            {residance:"Lille"}, 
            {age : 58}]
        },
        {
            pere: [{
                nom: "Hamid"
            },
            { naissance: "Nador" },
            { residance: "Roubaix" },
            { naissance: "Presumé 54" }]
        },
        {
            frere: [{ nom: "Victor" },
            { naissance: "Lille" },
            { residance: "Lille" },
            { age: 30 }]
        }
    ],
    nomDeFamille: "Jerrar-Oulidi",
    origine: ["France", "Maroc"],
    divorcee: true,
    recomposee: false,
    nombreEnfant: 2,
}
console.log(JSON.stringify(famillyRoot));
