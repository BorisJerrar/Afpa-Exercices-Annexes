let inputSalary = document.getElementById('salary');
let inputZip = document.getElementById('zipCode');
let btn = document.getElementById('btn');
let resultShwoing = document.getElementById('result');
const calculImpot = () => {
    let regionArray = [...inputZip.value];
    if (regionArray[0] === "5" && regionArray[1] === "9") {
        resultShwoing.innerHTML = "Vous habitez dans les Hauts de France, vous ne payez donc pas d'impot";
    } else {
        let divisonSalary = inputSalary.value / 2;
        resultShwoing.innerHTML = "Vous nous devez : " + divisonSalary + "€";
    }
}
btn.addEventListener('click', calculImpot);