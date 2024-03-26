function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, oper, num2) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const display = document.querySelector('.display');
function putOnDisplay(event) {
    display.textContent += event.target.textContent;
}

document.querySelectorAll('.row > button')
.forEach(btn => btn.addEventListener('click', putOnDisplay));

let num1;
let num2;
let oper;
let displayValue;
