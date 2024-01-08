// Immediately Invoked Function Expressions (IIFE)

// 1. function ko immediately invoked krta hai
// 2. global scope ke pollution se problem hoti h kai bar to use pollution variable ko htane ke iffe ka use krte hai 

(function connection(){   // NAMED IIFE 
    console.log(`DB CONNECTED`);   // o?p : DB CONNECTED 
})();    // IIFE ko pta nhi hota h ki context ko rokna kaha hai isliye ; ka use krte hai
//2 IIFE SATH ME LIKHNE KE LIYE SEMICOLON USE KRE H 

// using arrow function
( ()=>{
    console.log(`DB CONNECTED TWO`);
} )();
// o?p: DB CONNECTED TWO

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} )('nitesh');  // O?P: DB CONNECTED TWO nitesh

