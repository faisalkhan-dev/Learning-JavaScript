const accountId=2987
let Username="FaisalKhan"
var emailId="Khan@gmail.com"
city="Noida"
let accountState;                   //undefined

// accountId=90                     can't change
// console.log(accountId);

// Username="ArbazKhan"
// console.log(Username)               can  change

// emailId="Khan@yahoo.com"
// console.log(emailId)                       //can change

city="Delhi"
console.log(city)                       //can change


console.table([accountId,Username,emailId,city])


// Scoping rules

// The main difference is scoping rules. Variables declared by var keyword are scoped to the 
// immediate function body (hence the function scope) while let variables are scoped to the
//  immediate enclosing block denoted by { }
//  (hence the block scope).
