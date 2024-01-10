// for of
// for (const iterator of object) {     // iterator of object => kis object pe lagana chahte ho 
// }
// iterator name is just i like for loop
// object : kis object pe loop lagana chahte h

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
 //   console.log(num);
    
}// for of loop hum kisi pe bhi lga skte h shirf value hona jaruri nhi h ...ex strings

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet);
}


// MAP map array jaise hi hota h isme hum value set krte h  isme uniqe value hoti h
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India") // duplicate value nhi lega
//console.log(map);
// for (const key of map) {
//     console.log(key);
    
// }  
 // o/p [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'FR', 'France' ]

  
for (const [key, value] of map) {   // array destructured
    console.log(key, ':-', value);
}

// o/p: IN :- India
// USA :- United State of America
// FR :- France


// forof loop on objects 
const myObject ={
    game1: 'NFS',
    game2: 'spiderman'
}
for (const [key,value] of myObjectbject) {
   // console.log(key, ':-', value);
}
// o/p :  myObjectbject is not defined   iss method se object iteratable nhi hote h uske liye dusri method hoti h
