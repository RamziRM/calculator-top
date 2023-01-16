// initialize all btns - Seperate accordingly -- add ids / classes to specify/group
const numberBtns = document.querySelectorAll('[data-num]');
const opBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.getElementById('equalsBtn');
const dotBtn = document.getElementById('dotBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');

const currentOpDisplay = document.getElementById('currentOpDisplay')

let currentOp = null
let firstOp = ''
let secondOp = ''
// review following var
let shouldResetScreen = false

// btns add evenListners for click
numberBtns.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
opBtns.forEach((button) => button.addEventListener('click', () => setOp(button.textContent)));

equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNumber)
dotBtn.addEventListener('click', appendPoint)


// appendNumber f() : Combine
function appendNumber(number) {
    if (currentOpDisplay.textContent == null || shouldResetScreen)
      resetScreen()
      currentOpDisplay.textContent += number
}

function resetScreen() {
    currentOpDisplay.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentOpDisplay.textContent = '0'
    firstOp = ''
    secondOp = ''
    currentOp = null
}

function deleteNumber() {
    currentOpDisplay.textContent = currentOpDisplay.textContent
      .toString()
      .slice(0, -1)
}

// setOp f() : assigning operator
function setOp(operator) {
    if (currentOp !== null) evaluate()
    firstOp = currentOpDisplay.textContent;
    currentOp = operator;
    shouldResetScreen = true;
}

// evaluate f()
function evaluate() {
    if (currentOp === null || shouldResetScreen) return
    secondOp = currentOpDisplay.textContent
    currentOpDisplay.textContent = roundResult(
    operate(currentOp, firstOp, secondOp))
    currentOp = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOpDisplay.textContent === '')
    currentOpDisplay.textContent = '0'

    if (currentOpDisplay.textContent.includes('.')) return
    currentOpDisplay.textContent += '.'
}

// Calculations
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

function operate(a, b, operator) {
    a = Number(a)
    b = Number(b)
        switch(operator) {
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "*":
                return multiply(a, b);
            case "/":
                if (b === 0) return null
                else return divide(a, b);
            default:
                return "Invalid operator";
        }
    }