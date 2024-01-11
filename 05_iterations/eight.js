// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array

 const myNums = [1,2,3,4]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// using arrow function
const myTotal = myNums.reduce((acc, currval) => acc+currval ,0)
//console.log(myTotal);  // o/p:10
// reduce example shopping cart bill


const shoppingCart =[
    {
      courseName: "js",
      price: 299  
    },
    {
      courseName: "java",
      price: 599  
    },
    {
      courseName: "aes",
      price: 4999  
    },
    {
      courseName: "azure",
      price: 7999  
    },
    {
      courseName: "mobile dev",
      price: 3999  
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
if(priceToPay > 39999)
console.log(`Congratulation You won 999 rs shopping free Boucher`);
console.log(priceToPay);