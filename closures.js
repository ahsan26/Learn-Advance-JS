// Basic Example Of Closure

let pass = 10;

function abc(num) {
    return pass + num; // Pass is closure for this function 
}
// console.dir(abc);
// console.log(abc(22));

// Another Example Of Closure

function addTo(num1) {
    return function (num2) {
        return num1 + num2; // In this function num1 is closure for it!  
    }
}

var addToFive = addTo(5);
console.dir(addToFive); // We Use console.dir to see the complete details
console.log(addToFive(15));