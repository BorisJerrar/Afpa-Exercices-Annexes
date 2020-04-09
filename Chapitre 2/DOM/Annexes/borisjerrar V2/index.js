const stikyLeft = document.querySelector('.stikyleft');
const pOfSkills = document.querySelectorAll('.underskills');
const changingHeader = document.querySelector('.fstkwebdev');
const deasepiring = document.querySelector('.absoluteshowingpic h2');
const fillingCircle = document.querySelectorAll('.filled');
const header = document.querySelector('header');
const titleInsertion = document.querySelector('.skills h3');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 780) {
        header.style.top = "-80px"
    } else {
        header.style.top = "0"
    }
    if (window.pageYOffset > 500) {
        stikyLeft.style.left = "-500px"
        console.log(stikyLeft.style.left)
    } else {
        stikyLeft.style.left = "0"
    }
    if (window.pageYOffset > 337 && changingHeader.style.opacity !== "100%") {
        changingHeader.style.opacity = "100%"
        deasepiring.style.opacity = "0"
    } else {
        changingHeader.style.opacity = "0"
        deasepiring.style.opacity = "100%"
    }
    let numberIteration = 0
    if (window.pageYOffset > 580 && window.pageYOffset < 1080 && fillingCircle[numberIteration].style.backgroundColor !== "#406DB0") {
        addingCircle();

        function addingCircle() {
            setTimeout(function() {
                fillingCircle[numberIteration].style.backgroundColor = "#406DB0"
                numberIteration++;
                if (numberIteration < fillingCircle.length) {
                    addingCircle();
                }
            }, 90)
        }
    } else if (window.pageYOffset > 1080 && fillingCircle[numberIteration].style.backgroundColor !== "#454545" || window.pageYOffset < 393 && fillingCircle[numberIteration].style.backgroundColor !== "#454545") {
        deletingCircle();

        function deletingCircle() {
            setTimeout(function() {
                fillingCircle[numberIteration].style.backgroundColor = "#454545"
                numberIteration++;
                if (numberIteration < fillingCircle.length) {
                    deletingCircle();
                }
            }, 90)
        }
    }
    if (window.pageYOffset > 580 && window.pageYOffset < 1080) {
        for (let i = 0; i < pOfSkills.length; i++) {
            pOfSkills[i].style.bottom = "-125px"
            pOfSkills[i].style.padding = "20px 20px 20px 20px"
        }
    } else {
        for (let i = 0; i < pOfSkills.length; i++) {
            pOfSkills[i].style.bottom = "-105px"
            pOfSkills[i].style.padding = "40px 20px 20px 20px"
        }
    }
    if (window.pageYOffset > 182 && window.pageYOffset < 850) {
        titleInsertion.style.marginRight = "60px"
    } else {
        titleInsertion.style.marginRight = "-500px"
    }
})