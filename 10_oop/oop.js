const user = {                   // object literals
    username: "Nitesh",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);   //this keyword current context btata h
        // console.log(this);
    }

}
// console.log(this);  //o/p: {}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

         this.greeting =function(){
       //     console.log(`Welcome ${this.username}`);
         }
    return this   // explicitely define
}

const userOne = new User("nitesh",12,true)
const UserTwo = new User("ChaiAurCode",11,false)
//console.log(userOne);
console.log(userOne.constructor);
//console.log(UserTwo);

// *********************NOTES******************
// new
// 1. sbse phle ek empty object create hota hai {} jisko instance bola jata h
// 2. constructor function call hota hai new keyword ke karn...ye sare arguments wagera uske under pack krta h or de deta hai
// 3. sare arguments this keyword me inject ho jate hai
// 4. function me hume mil jate hai