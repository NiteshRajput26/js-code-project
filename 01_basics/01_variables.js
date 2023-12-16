const accountId = 14444
let accountEmail = "nitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
 // variable ke aage type ke bina bhi memory assign kr skte h .. lekin aisa nhi krna chahiye

let accountState; 
//js me variable declare kr ke chodh dete h to bydefault undefined o/p deta h..

// accountId = 2 // not allowed...const variable  value change nhi kerega 

 accountEmail = "nr12@.com"
 accountPassword = "54321"
accountCity = "Indore" 

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.log(accountId);
console.table([accountId,accountEmail, accountPassword,accountCity, accountState])