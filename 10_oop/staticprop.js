class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

// hum chahte h jaise hi user bne uss user ko ek unique id mil jaye

static createId(){  
      // kai bar aesi situation hoti h 
    //jb hum iss method ka access har uss object ko nhi dena chahte jo iss class se intensiate hua hai
    // mtlb ki uss method property ko access krne se rok deta h
    return `123`
}
}
const nitesh = new User("Nitesh")
console.log(nitesh.createId());

