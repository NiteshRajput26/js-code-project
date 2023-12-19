// data types are divided into two parts :
// 1. primitive ; ye call by value hote hai...
//means original data nhi diya jata hai refrence se copy kr ke diya jata hai  or jo bhi changes hote hai copy me hote hai

 // 7 types: String , Number , Boolean , null , undefined , Symbol , BigInt
//example :
const score = 100;  //Number
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefined

const id = Symbol('123')    // symbol react library me use krte hai
const anotherId = Symbol('123')
console.log(id == anotherId);


//const bigNumber = 123445566987n  //last me n lga dete hai


 //2. Refrence (Non primitive)
 // Array , Objects , Function

 const heros = ["shaktiman", "naagraj"]
 let myObj = {
    name: "Nitesh",    //curlibraces ke under ki values object hoti hai
    age:22,
 }

 const myFunction = function(){
    console.log("Hello World");
 }

 console.log(typeof bigNumber);

 // ecma website se type of ka documentation dekhna hai