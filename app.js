// Calculator -- Initialize variables

const add = (array) => {
    return array.length
    ? array.reduce((acc, nextItem) => acc + nextItem)
    : 0;
}

const subtract = (array) => {
    return array.length
    ? array.reduce((acc, nextItem) => acc - nextItem)
    : 0;
}

const multiply = (array) => {
    return array.length
    ? array.reduce((acc, nextItem) => acc * nextItem)
    : 0;
}

const divide = (array) => {
    return array.length
    ? array.reduce((acc, nextItem) => acc / nextItem)
    : 0;
}

function operate(in1, in2, operator) {
    switch(operator) {
        case "+":
            return add(in1, in2);
        case "-":
            return subtract(in1, in2);
        case "*":
            return multiply(in1, in2);
        case "/":
            return divide(in1, in2);
        default:
            return "Invalid operator";
    }
}