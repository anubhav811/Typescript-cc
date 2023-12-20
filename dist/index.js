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
// array
const arr1 = [212, 43, 2, 41124];
// or 
const arr2 = [1312, 31, 3, 1, 1, 3];
const arr3 = ["asd", 2, "asd", 344, 232];
// 


// for each loop
let sports = ["Cricket", "Golf", "Football"];
sports.push("Baseball");
for (let sport of sports) {
    console.log(sport);
}
