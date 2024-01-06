function sayMyName(){     //function keyword
console.log("N");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}
//sayMyName     //function refrence
sayMyName()     // finction execution

// function addTwoNumbers(number1,number2){    //js me numbers ka type dene ki jarurat nnhi h.................number1 or number 2 ko parameter bolte h
//           console.log(number1 + number2);
// }


// addTwoNumbers(3, "4")     // jb function call krte h to usme jo value pass hoti h usko arguments bolte h

// const result = addTwoNumbers(3, 5)    // value ko hum ki variable me store bhi kr skte h
// console.log("Result: ", result);    // result ka output undefiend aayega  kynki hmne value return nhi ki h bss console log kiya hai


function addTwoNumbers(number1,number2){    //js me numbers ka type dene ki jarurat nnhi h.................number1 or number 2 ko parameter bolte h
    console.log(number1 + number2);
    let result = number1 + number2
    // return number1 + number2
    return result     // result ke bad kuch bhi console krenge to aager execute nhi hoga....jb humne return kr diya uske bad function koi kam nhi krega
   console.log("hitesh");


}

addTwoNumbers(3, "4")     // jb function call krte h to usme jo value pass hoti h usko arguments bolte h

const result = addTwoNumbers(3, 5)    // value ko hum ki variable me store bhi kr skte h
console.log("Result: ", result);


// user ke login hone bad usko ek msg dikhana hai
function loginUserMessage(username  = "sam"){    // ="sam" by default value pass ki hai
    // if(username === undefined){
        if(!username){     // dono if same hi h
    console.log("please enter a username");
    return
}
return `${username} just logged in`
}

//console.log(loginUserMessage("Nitesh"));
//console.log(loginUserMessage("Nitesh"))

function calculateCartPrice(val1, val2, ...num1){ // ... rest operator jb multiple values ko merge krna h .........o/p me array milta hai
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));
// o/p: [ 500, 2000 ]  val1 200 val2 me 400 chale jayega


const user = {
    username: "Nitesh",
    price: 199        // object bhi pass kr skte h functionme direct 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)    //function call 
// o/p: Username is Nitesh and price is 199

// direct object bhi bna kr kr skte h
handleObject({
    username: "Nitesh Rajput",
    price: 399
})

// o/p: Username is Nitesh Rajput and price is 399

// arrays bhi aise hi pass kr skte h 
const myNewarray = [200,400,100,600]
function returnSecondValue(getArray){   // function defined kiya h jo array ki value ko accept krta hainor uski second valur o rertuen krta hai
    return getArray[1]       // function ek parametern leta hai get arry kuch bhi name de skte hai 
}

//console.log(returnSecondValue(myNewarray));   //o/p: 400

//direct array bhi pass kr skte 
console.log(returnSecondValue([200,400,500,1000]));
