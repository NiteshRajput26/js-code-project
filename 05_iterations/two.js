  // while and do while loop 
//   while (condition) {
    
//   } // condition ka onitialization or increament bhi likhna hi padega koi sa bhi loop ho

  let index = 0
  while (index <=10) {
   // console.log(`value of index is ${index}`);
    index= index+2
  }
  let myArray = ["flash", "batman", "superman"]
  let arr =0
  while (arr<myArray.length) {
 //   console.log(`value of index is ${myArray[arr]}`);
   arr++;
  }


  // do while
//   do {
    
//   } while (condition);   // condition bad me check hogi phle ek bar loop chalega

let score =60
//let score =3
do {
    console.log(`score is ${score}`);
    score = score+5;
} while (score<51);