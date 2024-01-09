// control flow  : The control flow is the order in which the computer executes statements in a script.  ek sath complete code run nhi ho  ..ex. login logout

// 1. if

// const isUserloggedIn = true
// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("greter than 50");
// }
// < , > , <= , >= , == , != , === , !==

// 2. if scope************

// const score = 200;
// if(score >100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // refrence error dega scope ke bahar access nhi kr skte 

//3. without { }  ......mot recomended
const balance1 = 10000
if(balance1 > 1500)  console.log("sufficient"), console.log("dekh lenge");;


// 4. else if **********************
// const balance = 1000
// if(balance <500){
//     console.log("less than 500");
// }else if(balance <750){
//     console.log("less than 750");
// }
// else if(balance <900){
//     console.log("less than 900");
// }
// else{
//     console.log("more than 900");
// }



// 5. real life concept(use)

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedIn && debitCard &&  2==2){ // && sari condtion true honi chahiye
    console.log("Allow to buy Course");
}

if(loggedInFromGoogle || loggedInFromEmail){ // || ek condtion true h to execute ho jayega
    console.log("Allow to buy Course");
}



