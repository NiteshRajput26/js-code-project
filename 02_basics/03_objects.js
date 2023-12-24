//singleton 

//object.create() 
// isme singleton bnta hai isko....isko hi bolte hai constructor method ke trough

//****SYMBAL CREATE */
const mySym = Symbol("key1")


// object literals 
const JsUser = {
    name: "Nitesh",
    "full name":"Nitesh Rajput",
    [mySym]:"myKey1",    //symbol ko refer krne ke liye [] ka use krte hai without bracket woh string bn jata hai
    age:21,
    location:"Indore",
    email:"nitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","friday"]
}    // {} ye object create ho gya hai...isme keys and values ka concept hota hai


// object ko access kaise kiya jata hai
console.log(JsUser.email);   //tarika no. 1   jyadatar isse use krte hai
console.log(JsUser["email"]);
console.log(JsUser["full name"]);  // tarika no. 2 jb koi or option na ho jaise full name me
console.log(JsUser[mySym]);


//**OBJECT VALUES KAISE CHANGE KAIASE KRTE HAI */

JsUser.email = "nsrajput@gmail.com"
//Object.freeze(JsUser)      // freeze se hum usko lock kr skte h jisse koi change nhi kr skta
JsUser.email = "nitesh@microsoft.com"
console.log(JsUser);


// js me functions ko hum variable ke jaise treat kr skte hai isme koi descrimination nnhi hota hai...
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    //REFRENCE KRNE KE LIYE STRING SE BACKTICK ME CONVERT KRTE HAI...ISKO JS INTERPOLATION KHTE HAI
}     //SAME OBJECT KO REFRENCE KRNE KE LIYE THIS KA USE KRTE HAI

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());