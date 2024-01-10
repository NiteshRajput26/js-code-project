// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
   //     console.log("5 is best number");
    }
  //  console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
     //  console.log(`Inner loop value ${j} and inner loop ${i}`);
    //    console.log(i + '*' + j + '=' + i*j);   // table printing
    }
    
}


let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
 //   console.log(element);
}


// Break and Continue

for (let i = 1; i < 21; i++) {
    if(i==5){
        console.log(`5 is detected`);
        break;  // condition ke bad loop se bahar aa jayenge....
    }
    console.log(`value of i is ${i}`);
    
}
for (let i = 1; i < 21; i++) {
    if(i==5){
        console.log(`5 is detected`);
    continue;    // condition ko ek bar ke liye skip kr denge
    }
    console.log(`value of i is ${i}`);
    
}