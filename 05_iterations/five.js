// for each loop
// array.forEach(element => {
    
// });

const coding = ["js", "ruby","c++", "python"]
// kuch loop array me direct hi properties me inject kr diye jate h
// ye ek higher order function h

//coding.forEach(function (languages){
//    console.log(languages);     // o/p: js ruby c++ python
// }) 
  // foreach =>callback function do
// array me h to function automatics hi sari values le kr aayega iska kuch bhi name de skte hai ex. language


// arrow function ke sath
// coding.forEach((item) =>{  // function ka name nhi dena hota isme 
//     console.log(item);
// })  

// alag function bna kr

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)   // execute nhi krna printme()   bss usko refrence dena hai printme


// FOE EACH SHIRF ITEM LEKR NHI AATA HAI YE HME INDEX OR ARRAY KI LIST BHI DE SKTA HAI 

coding.forEach((item, index, arr) =>{
  //  console.log(item, index, arr);
})

//o/p:
// js 0 [ 'js', 'ruby', 'c++', 'python' ]
// ruby 1 [ 'js', 'ruby', 'c++', 'python' ]
// c++ 2 [ 'js', 'ruby', 'c++', 'python' ]
// python 3 [ 'js', 'ruby', 'c++', 'python' ]



// jb array me bahut object hote h tb for each jyada use krte hai ....[{}, {}, {}]
const myCoding =[
    {
        lnagName: "javascript",
        langFileName: "js"
    },
    {
        lnagName: "c++",
        langFileName: "cpp"
    },
    {
        lnagName: "javat",
        langFileName: "java"
    },
    {
        lnagName: "python",
        langFileName: "py"
    },

]

// bahut common operation h database se values array ke form me aati h or har ek value ek object hi hota h

myCoding.forEach((item) =>{
    console.log(item.langFileName);
})