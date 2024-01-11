const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// map bhi call back function haic
// const newNums = myNumbers.map((num) => {return num+10})
// console.log(newNums);

// chaining me hum 2-3 method ek sath use kr sskte hai...like map filter
const newNums = myNumbers
                .map((num) => num*10)
                .map((num) => num+1)  // iss map me wo values aayegi jo uper ke methods se update hui h 
                .filter((num) => num>25)   
                // o/p: [
                //     31, 41, 51,  61,
                //     71, 81, 91, 101
                //   ]
                console.log(newNums);