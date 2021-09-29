function addition (a, b) {
    return (a + b);
}

function subtract (a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide (a, b) {
    return (a / b);
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            return addition (arg1, arg2);
        case "subtract":
            return subtract (arg1, arg2);
        case "multiply":
            return multiply(arg1, arg2);
        case "divide":
            return divide (arg1, arg2);
        default:
            return ("Неизвестная операция");
    }
}

alert(mathOperation(1, 2, "subtract"));