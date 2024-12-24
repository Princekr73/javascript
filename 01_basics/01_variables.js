const accountId = 144553
let accountEmail = "prince@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //  not allowed

accountEmail = "ppp@h.com"
accountPassword = "12121212"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);