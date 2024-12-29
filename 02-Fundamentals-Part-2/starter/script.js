'use strict';

// function declaration

function calcAge1(birthyear, currentyear) {
    return currentyear - birthyear;
}

// console.log(calcAge1(2002, 2024));

// function expression

let calcAge2 = function (birthyear, currentyear) {
    return currentyear - birthyear;
}   

// console.log(calcAge2(2002, 2024));


//arrow function
let age = birthyear => 2025 - birthyear;
const age1 = age(2002);
console.log(age1);


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,oranges) {
    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges)
    return ` no of apple pieces  ${applepieces}, no of orange pieces ${orangepieces}`
}

// console.log(fruitProcessor(2,3))


// regular function expression

const yearsUnitlRetirement = function (birthyear, firstname) {
    const age = 2025 - birthyear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`
}



