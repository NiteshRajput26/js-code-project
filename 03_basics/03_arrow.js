const user ={
    username: "Nitesh",
    price: 999,

    welcomeMessage: function(){
        // this keyword current context ko reffer krta hai....scope me jitne bhi variable hai unko access krne ke liye this lga denge
        console.log(`${this.username} , Welcome to website`);
      // console.log(this);
       // ** O/P:
     //    {
    //     username: 'Nitesh',
    //     price: 999,
    //     welcomeMessage: [Function: welcomeMessage]
    //   }
    //   sam , Welcome to website
    //   {
    //     username: 'sam',
    //     price: 999,
    //     welcomeMessage: [Function: welcomeMessage]
    //   }      // o/p ye aayega this ke console se
    }
}

// user.welcomeMessage()
// user.username = "sam"     // context (values variable ki) change ho gyi
// user.welcomeMessage()

// ** O/P: Nitesh , Welcome to website
//  sam , Welcome to website



console.log(this);   // node environment me this empty object ko reffer krta hai
//  console pr this ka o/p window dikhai dega.....************kyonki browser ke under jo global object hai window object h

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){     
//   // ********** let username = "jinni"
//   //  console.log((this.username));
//     // function ke under this use nhi krte h kisi variable ke liye o/p undefined aata h***************

//     console.log(this); /// this bahut kuch o/p deta h normal me
// }

// chai()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const chai = function(){
//     let username = "nitesh"
//     console.log(this.username);
// }    ******function ko aise bhi likh skte hai


const chai = () =>{
    let usernmae = " nitesh"
    console.log(this);
}

chai()

//O/P:  {}

// ++++++++++ MORE ABOUT ARROW FUNCTION
//BASICS 
const addTwo = (num1 , num2) =>{
    return num1 + num2       // { curli bracket use krte h to return use krna pdta h } 
}

console.log(addTwo(3,4));   //o/p: 7

//+++++++++++ IMPLICIT RETURN......{} PARENTHISIS USE NHI KRNE PDTE H   ....react me jyada use hota hai

// const addnum = (num1, num2) => (num1 + num2)

const addnum = (num1, num2) => ({username: "Nitesh"})    // object return krne ke liye { } use krna hi pdega

console.log(addnum(5,5));

