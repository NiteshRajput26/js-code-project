var c = 300    
let a = 100    // global Scope
if(true){      // Block Scope
    let a = 10
    const b =20
    c =30     // scope ke bahar bhi var ki value accessable h
    console.log("INNER:" , a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Nitesh"
// +++++++++++ NESTED FUNCTION JB HOTE H TO TO CHILD FUNCTION PARENT KE VARIABLE KO ACCESS KR PATE H
    function two(){
        const website =" youtube"
        console.log(username);   /// ander ka function bahar ke variables ko access kr paye to usse closer khte h
        // o/p: Nitesh     
    }
   // console.log(website);  // outside of scope access nhi kr skte isliye error aayegi
    two()     // har function ko jb bhi call krte h to uske liye alag call stack bnta h
}
one()    // one ko call krenge to two call hoga hi hoga



//IF ELSE KE ANDER NESTED FUNCTION
if(true){
    const username = "Nitesh"
    if(username === "Nitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);   //ERROR DE RHA KYUNKI ISKA SCOPR BSS IF KE ANDER HI H
    //   console.log(website);
  //  ReferenceError: website is not defined
}
//console.log(usernmae);    // USERNAME KA ACCESS BAHAR NHI H




// +++++++++++++++++++  INTRESTING  +++++++++++++++++++
console.log(addone(5));   // yaha error nhi aayegi isko uper bhi likh skte h
function addone(num){
  return num+1   //o/p: nhi dega kyunki shirf return kiya h
}
//addone(5)

 addtwo(5)  // yaha error dega    ReferenceError: Cannot access 'addtwo' before initialization     .........declaration ke phle access nhi kr skte
const addtwo = function(num){     //addtwo ko kabhi kabhi expression bhi bolte h.........js ke variavble powerful hote h inke ander kuch bhi hold kr skte h jaise json
    return num+2
}
//addtwo(5)