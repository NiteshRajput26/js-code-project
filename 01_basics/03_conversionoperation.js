let score = "33abs"

//console.log(typeof score);  //o/p: string
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" => 33
//"33abc" => NAN  not a number
//true => 1 , false => 0
// null => 0, undefined => NAN


let isLoggedIn = "nitesh"
let booleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//1 => true , 0 =>false
// "" => false
// "Nitesh" => true   

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************OPERATIONS******************
let value = 3
let negvalue = -value
console.log(negvalue);


//************some mathematical operations ******/

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Nitesh"
let str3 = str1+str2
console.log(str3);


// http://tc39.ec/ecma262.... website for more documentation

console.log("1"+2);
console.log(1+"2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4) * 5 % 3);

//console.log(true+);   wrong syntax
console.log(+true);

// prefix and postfix for js mdn ....http:devloper.mozila...
let gameCounter = 100;
gameCounter++;
// ++gameCounter
console.log(gameCounter);