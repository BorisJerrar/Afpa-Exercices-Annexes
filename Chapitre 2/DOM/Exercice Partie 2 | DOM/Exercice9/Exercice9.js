let analyseLettreDone = document.querySelector('.lettre');
let analyseWordDone = document.querySelector('.word');
let tooMuch = document.querySelector('.toomuch');
let TextInput = document.querySelector('textarea');
let arrayTester = [];
let wordSpaceCounter;
let wordLineCounter;
let wordSpaceArray = []
let wordLineArray = []
TextInput.addEventListener('input', () => {
    arrayTester = [...TextInput.value]
    console.log(arrayTester)
    if (arrayTester.length <= 1) {
        analyseLettreDone.innerHTML = arrayTester.length + " caractère compté"
    } else {
        analyseLettreDone.innerHTML = arrayTester.length + " caractères comptés"
    }

    wordSpaceCounter = arrayTester.join("")
    wordLineCounter = arrayTester.join("")
    wordSpaceArray = wordSpaceCounter.split(' ')
    wordLineArray = wordLineCounter.split(" \n ")
    if ((wordSpaceArray.length + wordLineArray.length - 1) <= 1 && arrayTester.length == 0) {
        analyseWordDone.innerHTML = 0 + " mot compté"
    } else if ((wordSpaceArray.length + wordLineArray.length - 1) <= 1) {
        analyseWordDone.innerHTML = (wordSpaceArray.length + wordLineArray.length - 1) + " mot compté"
    } else {
        analyseWordDone.innerHTML = (wordSpaceArray.length + wordLineArray.length - 1) + "  mots comptés"
    }
    if ((wordSpaceArray.length + wordLineArray.length - 1) > 10 || arrayTester.length > 100) {
        tooMuch.innerHTML = "Dépassement"
    } else {
        tooMuch.innerHTML = ""
    }
})