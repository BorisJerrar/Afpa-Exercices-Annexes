let inputUser = document.querySelectorAll('input:not([type="button"])');
let button = document.getElementById('btn');
let finalArray = []
const shwoingBrain = () => {
    for (let i = 0; i < inputUser.length; i++) {
        finalArray[i] = inputUser[i].value;
    }
    localStorage.setItem('finalArray', finalArray)
    window.open('Recap.html')
}


button.addEventListener('click', shwoingBrain);