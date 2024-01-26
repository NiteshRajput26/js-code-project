// hum ek application bna rhe h or hme username set krna h
function SetUsername(username){
    // complex DB calls
    this.username = username
}

// ek function h jo user create krta hai

function createUser(username, email, password){
    SetUsername.call(this,username)     // .call nhi lgayenge to SetUsername call to hoga lekin uska shirf refrence jayega call likhne ke bad technically call hoga
    // actually me refrence hold krne ke liye .call ka use krte h
    // call krne ke bad usko refrence bhi dena padega   (this,username) this uska refrence hai
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);