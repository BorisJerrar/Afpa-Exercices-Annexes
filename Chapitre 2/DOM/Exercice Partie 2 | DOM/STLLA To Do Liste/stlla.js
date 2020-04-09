const animatedLogo = document.querySelector(".annimatedTitle");
const settingsPage = document.querySelector(".settings");
const firstInput = document.querySelector(".firstinput");
const mainBoard = document.querySelector(".mainboard");
const redButton = document.querySelector(".redbtncolor");
const blueButton = document.querySelector(".bluebtncolor");
const orangeButton = document.querySelector(".orangebtncolor");
const greyButton = document.querySelector(".greybtncolor");
const settingsValidationButton = document.querySelectorAll(".settingsvalidation");
const cancelButton = document.querySelectorAll(".canceledbutton");
const validateButton = document.querySelectorAll(".validnewtask");
const taskTitle = document.querySelectorAll("h4");
const taskDone = document.querySelector("div i");
const addTaskForm = document.querySelectorAll(".addingtask form input:not(.hours)");
const addTaskSelect = document.querySelectorAll(".addingtask select");
const addTaskTextArea = document.querySelectorAll(" .addingtask form textarea");
const fontSettings = document.querySelectorAll("#font");
const soundSettings = document.querySelectorAll("#sound");
const logoSquare = document.querySelector(".sdefinitiveflex");
const liseretAdding = document.querySelector(".addingtask");
const colorbtn = [blueButton, orangeButton, redButton, greyButton];
const arrayBackgroundColorChanger = [settingsValidationButton, cancelButton, validateButton];
const arrayColorChanger = [taskTitle, taskDone, soundSettings, fontSettings, addTaskTextArea, addTaskSelect, addTaskForm];
const borderColorChanger = [taskDone, logoSquare]
const letItGoFirst = () => {
    setTimeout(() => {
        animatedLogo.style.visibility = "hidden";
        animatedLogo.style.top = "-120vh";
        settingsPage.style.visibility = "visible";
        settingsPage.style.top = "0vh";
    }, 2000);
}
for (let i = 0; i < colorbtn.length; i++) {
    colorbtn[i].addEventListener("click", colorchanger = () => {
        switch (colorbtn[i]) {
            case blueButton:
                liseretAdding.style.borderLeft = "solid rgb(119, 127, 227) 10px"
                taskDone.style.border = "solid rgb(119, 127, 227) 1px"
                logoSquare.style.border = "solid rgb(119, 127, 227) 2px"
                for (let i = 0; i < arrayBackgroundColorChanger.length; i++) {
                    for (let j = 0; j < arrayBackgroundColorChanger[i].length; j++) {
                        arrayBackgroundColorChanger[i][j].style.backgroundColor = "rgb(119, 127, 227)";
                    }
                }
                for (let i = 0; i < arrayColorChanger.length; i++) {
                    for (let j = 0; j < arrayColorChanger[i].length; j++) {
                        arrayColorChanger[i][j].style.color = "rgb(119, 127, 227)";
                    }
                }
                break;
            case orangeButton:
                liseretAdding.style.borderLeft = "solid rgb(227, 144, 119) 10px"
                for (let i = 0; i < arrayBackgroundColorChanger.length; i++) {
                    for (let j = 0; j < arrayBackgroundColorChanger[i].length; j++) {
                        arrayBackgroundColorChanger[i][j].style.backgroundColor = "rgb(227, 144, 119)";
                    }
                }
                for (let i = 0; i < arrayColorChanger.length; i++) {
                    for (let j = 0; j < arrayColorChanger[i].length; j++) {
                        arrayColorChanger[i][j].style.color = "rgb(227, 144, 119)";
                    }
                }
                break;
            case redButton:
                liseretAdding.style.borderLeft = "solid rgb(227, 119, 119) 10px"
                for (let i = 0; i < arrayBackgroundColorChanger.length; i++) {
                    for (let j = 0; j < arrayBackgroundColorChanger[i].length; j++) {
                        arrayBackgroundColorChanger[i][j].style.backgroundColor = "rgb(227, 119, 119)";
                    }
                }
                for (let i = 0; i < arrayColorChanger.length; i++) {
                    for (let j = 0; j < arrayColorChanger[i].length; j++) {
                        arrayColorChanger[i][j].style.color = "rgb(227, 119, 119)";
                    }
                }
                break;
            case greyButton:
                liseretAdding.style.borderLeft = "solid rgb(121, 121, 121) 10px"
                for (let i = 0; i < arrayBackgroundColorChanger.length; i++) {
                    for (let j = 0; j < arrayBackgroundColorChanger[i].length; j++) {
                        arrayBackgroundColorChanger[i][j].style.backgroundColor = "rgb(121, 121, 121)";

                    }
                }
                for (let i = 0; i < arrayColorChanger.length; i++) {
                    for (let j = 0; j < arrayColorChanger[i].length; j++) {
                        arrayColorChanger[i][j].style.color = "rgb(121, 121, 121)";
                    }
                }
                break;
        }
    })
}
letItGoFirst()