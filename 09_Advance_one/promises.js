
// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// jyadatar operations me hum promise consume krte hai
// 2. promise create bhi kr skte hai
// jb js me promises nhi the tb hum q or blurbird library use krte the uske trough hum core js me sari functionality use kr skte h jo abhi then() fetch() ke through krte hai

const promiseOne = new Promise(function(resolve,reject){
// Do an async task
// DB calls , cryptography, network
// settimeout se function given time ke bad execute hota hai

setTimeout(function(){
    console.log('Async task is complete');
    resolve() // .then or resolve ko connect krne ke liye
},1000)
})

// .then ka sidha connection h resolve ke sath
// .then me ek callback milta h means ek function milta hai...or value return hoti h isme
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
    console.log("Async task 2");  
    resolve()  
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve({username:"nitesh", email:"nitesh@.com"}) //resolve me parameter bhi pass kr skte hai...jyadatar pass kiya hua data object dikhai dega array bhi pass kr skte hai
    }, 1000);
})

promiseThree.then(function(user){   //function(user)  data object h to usko kuch bhi name de skte hai ex. user      
console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "nitesh",password:"12345"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 2000);
})

// const username = promiseFour.then((user)=>{ // hum variable le kr nhi kr skte iske liye hum chaining use krenge means or .then use krenge
    const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myname)=>{
    console.log(myname);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("the promise is either resolve or rejected"))
//console.log(username);   // variable nhi le skte 




const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javascript",password:"12345"})
        }else{
            reject('ERROR: Js File opening permission denied')
        }
    }, 2000);

})
// promise ko .then or .cathch() se hmesha handle krna jaruri nhi h isko hum async se bhi handle kr skte hai
//async await se directly error ko handle nhi kr skte ................
// agar reject aata hai to try or catch use krna padega shirf asyncs await se nhi hoga
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);    // error aayega isme
    try{
        const response = await promiseFive
        console.log(response); 
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
// Creates a new Promise.

// @param executor
// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.







// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E:", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error));

