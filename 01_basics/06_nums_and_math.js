const score = 100   // automatics js decide kr lega
console.log(score);
// exclusively bhi type de skte hai.....new object ke through
const balance = new Number(200)

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min );



//******************************MATHS *****************/
console.log(Math);   //bydefault ye ek object hai jisme bahut sari properties hai
console.log(Math.abs(-4));   //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.9));    //4


console.log(Math.random());    //random 0 to 1 ke bich me value deta hai
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);