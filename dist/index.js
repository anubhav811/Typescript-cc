"use strict";
// Type definitions
let a = 4;
let naam = "anubhav";
console.log(naam);
// union type
let surname;
surname = "Chachra";
console.log(surname);
surname = 4;
console.log(surname);
// functions
const func = (m, n) => {
    return n * m;
};
console.log(func(3, 2));
const func2 = (m, n) => {
    return String(n * m);
};
console.log(func2(3, 2));
const func3 = (n, m) => {
    return n * m;
};
