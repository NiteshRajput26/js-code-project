//singleton

//const tinderUser = new Object{}
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


//objects ke ander objects kaise bnate hai export. full name 
const regularUser = {

    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"nitesh",
            lastname:"rajput"
        }
    }
}
//console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);


console.log(regularUser.fullname?.userfullname.firstname);

// ? mark api se responce lete hai tb use krte hai..taki if else na lgana pde  


//************** OBJECTS KO COMBINE KAISE KRTE HAI ??*/
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

//const obj3 = {obj1, obj2}     // isse obj ke ander obj1 or obj2 aayega same array problem....


// {} empty object use and why object.assign  ??  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//const obj3 = Object.assign({}, obj1 , obj2 )

const obj3 = {...obj1, ...obj2}  //spread method most time use krte hai
//console.log(obj3);

//  database se data lete hai tb.......arrays of object aata hai
const users =[
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));    //keys why??
// keys output datatype is array 
//output : [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
    // values se value bhi nikal skte hai
   // output : [ '123abc', 'samy', false ]
    
   
   console.log(Object.entries(tinderUser));
// array ke ander array milta hai
//output : [ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggedIn', false ] ]


// objects me jb loop trough krte hai to kai bar values exist nhi krti to crash hone ke chances hote hai .....to hum usse puch skte hai by using this..
console.log(tinderUser.hasOwnProperty('isLogged'));
// output: false


//for more about objects and its property console krna hai



//lec . 18
//object and Api



//values ko distructure kaise krte hai ...
const course= {
    coursename:"js",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor,course.price);

// jb values bar bar lena ho to tb ...
const{courseInstructor: instructor} = course    //rename(destructuring) kr skte hai= {courseInstructor: instructor}
//console.log(courseInstructor);
console.log(instructor);


// *********  API = REQUEST FULLFILL ...JASON FORMAT ME 
// object format
// {
//     "name": "hitesh",
//     "coursename": "js",
//     "price": "free"     //keys (price wagera) bhi string hoti hai or values bhi string hoti hai json strucutre me
// }

[
    {},
    {},
    {}    // array form of api
]