const divApparition = document.querySelector(".hidden");
const callNew = document.querySelector(".CallNew");
const addingTask = document.querySelector(".addNew");
const annulation = document.querySelector(".annulation");
const inputTaskTitle = document.querySelector(".inputTaskTitle");
const main = document.querySelector('main');
const titleClean = document.createElement('P')
const divTask = document.createElement('DIV');
divTask.className = 'taskcontainer';
const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
const doneTask = document.querySelector(".didit");


const anulation = () => {
    callNew.style.backgroundColor = '#777fe3';
    divApparition.style.visibility = 'hidden';
}
const showAdding = () => {
    inputTaskTitle.value = ''
    callNew.style.backgroundColor = '#797979';
    divApparition.style.visibility = 'visible';
}
const refreshCheckbox = () => {
    checkboxTracker = document.querySelectorAll('[type="checkbox"]');
}
const addingNew = () => {
    if (inputTaskTitle.value == '') {
        return anulation()
    } else {
        anulation();
        main.appendChild(divTask.cloneNode(true));
        main.lastChild.appendChild(checkbox.cloneNode(true));
        main.lastChild.appendChild(titleClean.cloneNode(true));
        main.lastChild.lastChild.innerHTML = (inputTaskTitle.value);
        refreshCheckbox();
        initDeletingProcess()
    }
}

function initDeletingProcess() {
    let checkboxTracker = document.querySelectorAll('[type="checkbox"]');
    for (let i = 0; i < checkboxTracker.length; i++) {
        checkboxTracker[i].addEventListener('click', finalDeletingStep)
    }
}
function finalDeletingStep() {
    if (this.checked) {
        const doneTask = document.querySelector(".didit");
        doneTask.innerHTML += " " + this.parentNode.lastChild.innerHTML;
        this.parentNode.remove()
    }
}
addingTask.addEventListener('click', addingNew);
callNew.addEventListener('click', showAdding);
annulation.addEventListener('click', anulation);