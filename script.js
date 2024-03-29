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
            return add(+num1, +num2);
        case '-':
            return subtract(+num1, +num2);
        case 'x':
            return multiply(+num1, +num2);
        case '/':
            return divide(+num1, +num2);
    }
}

let num1 = '';
let num2 = '';
let oper = null;
let btnType = null;
let btnVal = null;

const display = document.querySelector('.display');
function putOnDisplay(event) {
    btnType = event.target.className;
    btnVal = event.target.textContent;

    if (btnType == 'clear') {
        oper = null;
        num1 = '';
        num2 = '';
        display.textContent = '';
        return;
    }

    if (oper === null && btnType == 'number') {
        num1 += btnVal;
        display.textContent += btnVal;
    } else if (oper === null && btnType == 'operator') {
        oper = btnVal;
        display.textContent += btnVal;
    } else if (oper !== null && btnType == 'number') {
        num2 += btnVal;
        display.textContent += btnVal;
    } else if (['operator', 'equal'].includes(btnType)) {
        num1 = operate(num1, oper, num2);
        display.textContent = num1;
        num2 = '';
        oper = null;
    }

}

document.querySelectorAll('.row > button')
.forEach(btn => btn.addEventListener('click', putOnDisplay));


