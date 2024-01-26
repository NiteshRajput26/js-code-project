// let myName = "Nitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

// hmne object bnaya hai { ,.,.,.,.}
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
// method define kiya hai
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);  // function ko nhi pta hum kis spider ki bat kr rhe h to current context ko btane ke liye this ka use kiya h 
    }
}


// 1. kya .nitesh krne pe kuch aayega ?... lekin hum apni taraf se inject kr skte h
// 2. ****** agr kabhi bhi koi object declare ho to base object me hi declare kr do   
// ans => kyunki sabhi (function , array , string ) object se kr kr jati h or object ka koi prototype nhi hota hai

Object.prototype.Nitesh = function(){
    console.log(`Nitesh is present in all objects`);
}

Array.prototype.heyNitesh = function(){
    console.log(`Nitesh says hello`);
}

// heroPower.Nitesh()
// myHeros.Nitesh()
// myHeros.heyNitesh()
// heroPower.heyNitesh()

// ************************************ inheritance  ****************************************
// kaise hum kisi or kisi key properties ko access kr skte h yhi protyple inheritance h
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // jo hmara prototype h usko refrence deta h
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//Sets the prototype of a specified object o to object proto or null. Returns the object o.

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Nitesh".trueLength()
"iceTea".trueLength()