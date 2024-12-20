const accountId = 144553
let accountEmail = "bhaskar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;


// accountId = 2 // not allowed
accountEmail = "hc@hc.com"


accountPassword = "2345678"
console.log(accountId);
console.log(accountPassword);


/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
console.log(accountEmail);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])



