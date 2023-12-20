const name = "nitesh"
const repoCount = 50 ;

 //console.log(name + repoCount + "Value");   //old methods

console.log(`Hello my name is ${name } and my repo count is 
${repoCount}`);


//string declaration another way
const gameName = new String('nitesh-rajput')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));   //word at 2nd position

// strings Methods for interview....

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);


//space remove kren ke liye trim use krte hai ...documentation bhi dekhna hai

const newStringOne = "  Nitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace method

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))  // replace se hum kisi nhi word ko replace kr skte hai


// split method in string

console.log(gameName.split('-'));