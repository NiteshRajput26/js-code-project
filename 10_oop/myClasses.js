// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    // jiase hi hum new keyword use krenge constructor call ho jayega

    encryptPassword(){
        return `${this.password}abc`   // ek variable le kr password return kiya h
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());  

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// properties inject ki h
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());