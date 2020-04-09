function Moyenne(noteOral, noteEcrit) {
    let result = (noteOral + noteEcrit * 2) / 3;
    if (result < 10) {
        console.log("Votre moyenne est de " + result + ", Vous ne validez pas.")
    } else {
        console.log("Votre moyenne est de " + result + ", Vous validez!")
    }
}
Moyenne(14,13)