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
            if (divide(+num1, +num2) === Infinity) {
                return 'Just don\'t'
            }
            return divide(+num1, +num2);
    }
}

let num1 = '';
let num2 = '';
let oper = null;
let btnType = null;
let btnVal = null;
// First time flag
let flag = true;

const display = document.querySelector('.display');
function putOnDisplay(event) {
    btnType = event.target.className;
    btnVal = event.target.textContent;

    // Handle clear button, premature equal and long inputs or results
    if (btnType == 'clear' || display.textContent.length > 20) {
        oper = null;
        num1 = '';
        num2 = '';
        display.textContent = '';
        flag = true;
        return;
    } else if (btnType === 'equal' && num2 === '') {
        return;
    }
    if (oper === null && !(flag) && btnType === 'number') {  // Handle number input after getting answer
        num1 = btnVal;
        display.textContent = num1;
        flag = true;
    } else if (oper === null && flag && btnType === 'number') {   // Handle fist time
        num1 += btnVal;
        display.textContent += btnVal;
    } else if (oper === null && btnType === 'operator' && num1 !== '') {
        oper = btnVal;
        display.textContent += oper;
    } else if (btnType === 'number' && oper !== null) {
        num2 += btnVal;
        display.textContent += btnVal;
    } else if (btnType === 'equal') {
        num1 = operate(num1, oper, num2).toString();
        display.textContent = num1;
        flag = false;
        oper = null;
        num2 = '';
    } else if (num2 !== '' && btnType === 'operator') {
        num1 = operate(num1, oper, num2).toString();
        oper = btnVal;
        display.textContent = num1+oper;
        num2 = '';
    }
}

document.querySelectorAll('.row > button')
.forEach(btn => btn.addEventListener('click', putOnDisplay));