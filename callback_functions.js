// function greetUser(name) {
//     alert(name);
// }

// function getNameAndGreet(greet) {
//     // Greet function acting as callback function in this function
//     greet('user1');
// }

// getNameAndGreet(greetUser);

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, operation) {
    var result = operation(num1, num2);
    console.log(result);
}

calculate(10, 20, multiply);