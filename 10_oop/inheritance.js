class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// iss user ko different tarike se use krenge jb koi project bnayenge
class Teacher extends User{
    constructor(username, email, password){

        super(username)   
         // super keyword bolta h ki jis jis class ko tum extend(user class) kr rhe the...
        // uss class me jata hu or uske constructor me jata hu or sath me this keyword ko le kr jaunga
        // or waha username ki value set kr dunga jisse hum iss class (teacher) me bhi access kr payenge
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);    //o/p: A new course was added by js
    }
}

const jsteacher = new Teacher("js", "js@Teacher.com", "123")
jsteacher.addCourse()

const tsTeacher = new User("tsTeacher")
// tsTeacher.addCourse()    // error op: tsTeacher.addCourse is not a function
tsTeacher.logMe()    // o/p: USERNAME is tsTeacher


//console.log(jsteacher === tsTeacher);   // flase
console.log(jsteacher instanceof Teacher);   // true
console.log(jsteacher instanceof User);   // true