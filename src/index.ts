// Type definitions

let a : number = 4
let naam : string = "anubhav";

console.log(naam)

// union type
let surname : string | number
surname = "Chachra"
console.log(surname);
surname = 4;
console.log(surname)


// functions
const func = (m:number,n:number) : number =>{
    return n*m;
}
console.log(func(3,2));

const func2 = (m:number,n:number) : string =>{
    return String(n*m);
}
console.log(func2(3,2));

// type aliases 
type ProdFunc = (n:number,m:number) =>number; 
const func3 : ProdFunc = (n,m) =>{
    return n*m;
}


// array
const arr1 : number[] = [212,43,2,41124];
// or 
const arr2 : Array<number> = [1312,31,3,1,1,3]; 

const arr3 : Array<string|number> = ["asd",2,"asd",344,232];
// 

// for each loop

let sports : string[] = ["Cricket","Golf","Football"]
sports.push("Baseball");
for(let sport of sports){
    console.log(sport);
}


// classes
class Customer{
    firstName : string;
    lastName : string

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Krina","Chachra");
console.log(myCustomer)

type Obj  = {
    height : number;
    weight : number;
    gender ?: boolean;  // ? makes the property optional or basically nullable
};

// OR

interface NewObj {
    height : number;
    weight : number;
    gender ?: boolean;  // ? makes the property optional or basically nullable
}

interface NewNewObj extends NewObj{
    age : number
    func : (n:number,m:number) => void
};

const gg : NewNewObj =  {
    height : 12,
    weight : 232,
    age : 2,
    func:(n,m) => console.log(n+m)
};

gg.func(21,12)

const obj: Obj = {
    height : 12,
    weight : 34,
    gender : true
}

const obj2: Obj = {
    height : 133,
    weight : 231,
    gender : false
}


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



