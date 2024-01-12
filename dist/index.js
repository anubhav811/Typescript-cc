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
// classes
class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myCustomer = new Customer("Krina", "Chachra");
console.log(myCustomer);
;
const gg = {
    height: 12,
    weight: 232,
    age: 2,
    func: (n, m) => console.log(n + m)
};
gg.func(21, 12);
const obj = {
    height: 12,
    weight: 34,
    gender: true
};
const obj2 = {
    height: 133,
    weight: 231,
    gender: false
};
/**
 * Functions
 */
// type alias
// type twoNumInput = (n:number,m:number,l?:number) =>number;  
// // using the type alias
// const fun :twoNumInput=(a,b,c)=>{
//     if(typeof(c)==="undefined")
//         return a*b;
//     return a*b*c;
// }
// // calling
// fun(2,3)
