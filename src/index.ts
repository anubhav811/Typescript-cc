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


///