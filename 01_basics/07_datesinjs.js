let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 1 , 23)
let myCreatedDate = new Date("2023-01-15")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);  //  output  : miliseconds
//console.log(myCreatedDate.getTime()); //  output  : miliseconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
     weekday: "long"
})