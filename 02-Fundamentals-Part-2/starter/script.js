'use strict';

// function declaration

function calcAge1(birthyear, currentyear) {
    return currentyear - birthyear;
}

console.log(calcAge1(2002, 2024));

// function expression

let calcAge2 = function (birthyear, currentyear) {
    return currentyear - birthyear;
}   

console.log(calcAge2(2002, 2024));


//arrow function
