// Example 1

// function greetUser(name) {
//     alert('Welcome, ' + name);
// }

// function getNameAndGreet(greet) {
//     // greetUser is acts as the callback function here....
//     var userName = prompt("What's your good Name?");
//     greet(userName);
// }

// getNameAndGreet(greetUser);

// Example 2

function add(n1, n2) {
    return n1 + n2;
}

function substract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

alert(calculate(10, 2, add));