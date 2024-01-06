var numberOne = +prompt("Enter the first number: ");
var numberTwo = +prompt("Enter the two number: ");
var userOperator = prompt("Enter the Operator:\n 1. + \n 2. - \n 3. * \n 4. / \n 5. **");


if (userOperator === "1") {
    sum(numberOne, numberTwo)
} else if (userOperator === "2") {
    Minus(numberOne, numberTwo)
} else if (userOperator === "3") {
multiple(numberOne, numberTwo)
} else if (userOperator === "4") { 
devide(numberOne, numberTwo)
} else if (userOperator === "5") {
    power(numberOne, numberTwo)
} else {
    alert("The Mount is Impossible")
}


function sum(numberOne, numberTwo) {
alert( numberOne + numberTwo);
}
function Minus(numberOne, numberTwo) {
alert( numberOne - numberTwo);
}
function multiple(numberOne, numberTwo) {
alert( numberOne * numberTwo);
}

function devide(numberOne, numberTwo) {
alert( numberOne / numberTwo);
}
function power(numberOne, numberTwo) {
alert( numberOne ** numberTwo);
}