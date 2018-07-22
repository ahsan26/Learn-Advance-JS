var a = (data) => {
    return data;
}

console.log(
    a(10)
)

var add = (num1, num2) => num1 + num2;

var log = val => {
    console.log(val);
}

log(
    add(102, 8)
);

var dummy = _ => {
    var n1 = 12;
    var n2 = 8;
    console.log('dummy');
    return n1 + n2;
}

log(
    dummy()
);