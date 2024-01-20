const accountId= 12345
let accountEmail="anshtrivedi@google.com"
var accountPassword="password"
accountCity="Vadodara"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
/*  
Prefer not to use var because of issue in block scope and functional scope
Use let to declare variable
*/

/* If a variable is just declared and not assigned a value and we try to print
its value or access it we get undefined. */