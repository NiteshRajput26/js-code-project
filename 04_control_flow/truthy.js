const userEmail = "n@gmail.com"  // string values ko truthy man liya jata h
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined , NaN

// truthy values
// truth, [], "string" , "0", 'false' , {} , function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }


// check object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}


// ******** NULLISH COALESCING OPERATOR (??): null undefined
// database se call krte h ya firebase ka use krte h to directly responce nhi milt ahai 2 values milti hai ho skta h null aaye ya undefined aa jaye to uss special case ke liye use krte h
let val1;
//val1 = 5 ?? 10  o/p 5
//val1 = null ?? 10  //o/p 10
// val1 = undefined ?? 15 // o/p 15
// val1 = null ?? 10 ?? 15  o/p 10
console.log(val1);  // undefined


// TERNIARY OPERATOR
// condition ? true : false
const greenTeaPrice = 100
greenTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");