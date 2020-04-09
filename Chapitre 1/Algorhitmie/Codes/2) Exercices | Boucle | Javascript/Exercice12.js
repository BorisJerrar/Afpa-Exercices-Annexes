function multyAdd(firstNumber, secondNumber) {
    let result = 0;
    for (let i = 0; i < secondNumber; i++) {
        result += firstNumber;
    }
    console.log(result);
}
multyAdd(5, 5);
