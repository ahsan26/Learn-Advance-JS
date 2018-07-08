var fruits = ['apples', 'bananas', 'mangoes'];

// Old Way
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// New Way

fruits.forEach(function (item, i) {
    console.log(item, i);
    // Execute your code here
});