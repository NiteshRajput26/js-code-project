//const coding= ["js", "python","ruby","java","cpp"]

// const values =coding.forEach((item)=>{
//   //  console.log(item);
//     return item
// })
// console.log(values);    // iss case me forEach koi bhi value return nhi krta hai


const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums= myNums.filter((num) => { return num > 4} )  // scope {} use kr rhe hai to hme return keyword use krna padega
//const newNums= myNums.filter((num) => num>4)    // filter ko bhi hum forEach ke jaise hi treat krte h ye lekin filter hme values return krta hai kisi bhi cindition ke base pe
//console.log(newNums);
// o/p: [ 5, 6, 7, 8, 9, 10 ]

// using for each

// const newNums =[]
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books =[
    { title: 'Book One', genre: "Friction", publish: 1981, edition: 2002},
    { title: 'Book Two', genre: "Non-Friction", publish: 1989,  edition: 2004},
    { title: 'Book Three', genre: "Sci-fi", publish: 1991,  edition: 2008},
    { title: 'Book Four', genre: "Friction", publish: 1991, edition: 2007},
    { title: 'Book 5', genre: "history", publish: 1994,edition: 2010},
    { title: 'Book 6', genre: "Friction", publish: 1999, edition: 2014},
    { title: 'Book 7', genre: "Ethics", publish: 2000, edition: 2096},
    { title: 'Book 8', genre: "Friction", publish: 1981,edition: 1997},
    { title: 'Book 9', genre: "Drama", publish: 1980,edition: 2002},
];

let userBooks = books.filter((bk) => bk.genre==='history')
 userBooks = books.filter((bk) => { 
    return bk.publish >=1990 && bk.genre ==="history"
})
console.log(userBooks);

