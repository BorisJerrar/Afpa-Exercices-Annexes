// DOM Initializ
const helpChange = document.getElementById("helppage");
const wonChange = document.getElementById("won");
const lostChange = document.getElementById("lost");
const logResult = document.getElementById("resultarea");
const cowPic = document.createElement('img');
cowPic.src = "images/cowfinish.svg";
cowPic.alt = "Cow"
const tarusPic = document.createElement('img');
tarusPic.src = "images/tarusfinish.svg";
const cowArray = [cowPic, cowPic, cowPic, cowPic];
const tarusArray = [tarusPic, tarusPic, tarusPic, tarusPic];
const numberShow = logResult.querySelectorAll("p");
const cowShow = logResult.querySelectorAll("div.cow");
const tarusShow = logResult.querySelectorAll("div.tarus");
const flexMyResult = logResult.querySelectorAll("div.flexmyreslt");
const flexMyPic = logResult.querySelectorAll("div.flexmypic");
const noneResult = document.createElement("h6");
noneResult.classList.add("wrongresult")
noneResult.innerHTML = "X";
let inputEnter = document.getElementById("typpedan")
let inputDificulty = document.getElementById("difficultyInput")

// CSS Transition //
function help() {
    helpChange.classList.add('helpshow');
    helpChange.classList.remove('helpnone');
}

function helpquit() {
    helpChange.classList.add('helpnone');
    helpChange.classList.remove('helpshow');
}
let randomizeArray = [];

function random() {
    while (randomizeArray.length < 4) {
        let i = Math.floor(Math.random() * 10);
        if (randomizeArray.indexOf(String(i)) === -1) {
            randomizeArray.push(String(i));
        };
    };
    document.querySelectorAll("h3.resultwin")[0].innerHTML = randomizeArray[0];
    document.querySelectorAll("h3.resultwin")[1].innerHTML = randomizeArray[1];
    document.querySelectorAll("h3.resultwin")[2].innerHTML = randomizeArray[2];
    document.querySelectorAll("h3.resultwin")[3].innerHTML = randomizeArray[3];
    document.querySelectorAll("h3.resultloose")[0].innerHTML = randomizeArray[0];
    document.querySelectorAll("h3.resultloose")[1].innerHTML = randomizeArray[1];
    document.querySelectorAll("h3.resultloose")[2].innerHTML = randomizeArray[2];
    document.querySelectorAll("h3.resultloose")[3].innerHTML = randomizeArray[3];
};
// .................................................//

// Enter Inupt
inputEnter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button").click();
    }
});


let brainFinal = 10;

function brain() {
    brainFinal--
    let typedArray = [...document.getElementById("typpedan").value];
    console.log(typedArray);
    tries.innerHTML = "<p>" + "<span class='gold'>" + brainFinal + "</span>" + " tries reamaning..." + "</p>";
    // Gramar Correction
    if (brainFinal == 1) {
        tries.innerHTML = "<p>" + "<span class='gold'>" + brainFinal + "</span>" + " try reamaning..." + "</p>";
        //LoosingPart
    } else if (brainFinal < 0) {
        tries.innerHTML = "<p>" + "<span class='gold'>" + "0" + "</span>" + " try reamaning..." + "</p>";
        lostChange.classList.add('loseshow');
        lostChange.classList.remove('losenone');
    }
    // Winning Part
    if (JSON.stringify(randomizeArray) == JSON.stringify(typedArray)) {
        wonChange.classList.add('winshow');
        wonChange.classList.remove('winnone');
    } else if (brainFinal === 0 && JSON.stringify(randomizeArray) == JSON.stringify(typedArray)) {
        wonChange.classList.add('winshow');
        wonChange.classList.remove('winnone');
    } else if (brainFinal === 0 && JSON.stringify(randomizeArray) !== JSON.stringify(typedArray)) {
        tries.innerHTML = "<p>" + "<span class='gold'>" + "0" + "</span>" + " try reamaning..." + "</p>";
        lostChange.classList.add('loseshow');
        lostChange.classList.remove('losenone');
    }
    //Logic Part

    // Begining & Init
    let tarus = 0;
    let cow = 0;
    let typedArrayTested = [];
    // Cheking If There Are Duplicates Values
    for (let i = 0; i < typedArray.length; i++) {
        if (typedArrayTested.indexOf(typedArray[i]) === -1) {
            typedArrayTested[i] = typedArray[i];
        }
    };
    // Finding Tarus
    for (let i = 0; i < randomizeArray.length; i++) {
        if (randomizeArray[i] === typedArray[i]) {
            tarus++;
        }
        // Finding Cow
        else if (randomizeArray.includes(typedArrayTested[i]) && typedArray[i] !== randomizeArray[i]) {
            cow++;
        };
    };
    // Html Injection
    flexMyResult[brainFinal].classList.remove("invisible")
    flexMyResult[brainFinal].classList.add("visible")
    if (typedArray.length === 0 || typedArray.length != 4) {
        alert("You Have to Type something like: 0731. \n Click on help if you having some difficulties to play");
        tries.innerHTML = "<p>" + "<span class='gold'>" + (brainFinal + 1) + "</span>" + " tries reamaning..." + "</p>";
        return brainFinal += 1;
    } else {
        numberShow[brainFinal].innerHTML = typedArray.join("");
    }
    if (cow === 0 && tarus === 0) {
        cowShow[brainFinal].appendChild(noneResult.cloneNode(true))
    };
    for (let i = 0; i < cow; i++) {

        cowShow[brainFinal].appendChild(cowArray[i].cloneNode())
    }
    for (let i = 0; i < tarus; i++) {

        tarusShow[brainFinal].appendChild(tarusArray[i].cloneNode())
    }
    return
}
const dificultyChoosingBrain = () => {
    for (let i = 3; i <= 10; i++) {
        if (inputDificulty.value == i) {
            brainFinal = i;
            randomizeArray = []
            tries.innerHTML = "<p>" + "<span class='gold'>" + i + "</span>" + " tries reamaning..." + "</p>";
            return brain
        }
    }
}
inputDificulty.addEventListener("input", dificultyChoosingBrain)

function retry() {
    for (let i = 0; i < 10; i++) {
        tarusShow[i].innerHTML = null;
        cowShow[i].innerHTML = null;
        numberShow[i].innerHTML = null
        flexMyResult[i].classList.remove("visible");
        flexMyResult[i].classList.add("invisible")
    }

    lostChange.classList.add('losenone');
    lostChange.classList.remove('loseshow');
    wonChange.classList.add('winnone');
    wonChange.classList.remove('winshow')
    brainFinal = 10;
    randomizeArray = []
    tries.innerHTML = "<p>" + "<span class='gold'>" + "10" + "</span>" + " tries reamaning..." + "</p>";
    return random();
}

function retryfive() {
    for (let i = 0; i < 10; i++) {
        tarusShow[i].innerHTML = null;
        cowShow[i].innerHTML = null;
        numberShow[i].innerHTML = null
        flexMyResult[i].classList.remove("visible");
        flexMyResult[i].classList.add("invisible");
    }

    wonChange.classList.add('winnone');
    wonChange.classList.remove('winshow');
    brainFinal = 5;
    randomizeArray = []
    tries.innerHTML = "<p>" + "<span class='gold'>" + "5" + "</span>" + " tries reamaning..." + "</p>";
    return random();
}

function retrygod() {
    for (let i = 0; i < 10; i++) {
        tarusShow[i].innerHTML = null;
        cowShow[i].innerHTML = null;
        numberShow[i].innerHTML = null
        flexMyResult[i].classList.remove("visible");
        flexMyResult[i].classList.add("invisible")
    }

    wonChange.classList.add('winnone');
    wonChange.classList.remove('winshow');
    brainFinal = 1;
    randomizeArray = []
    tries.innerHTML = "<p>" + "<span class='gold'>" + "1" + "</span>" + " tries reamaning..." + "</p>";
    return random();
}

function updateScroll() {
    let element = document.querySelector("div.scrollworking");
    element.scrollTop = element.scrollHeight - element.clientHeight;
}