const accountId = 112233;
let accountemail = "nilesh123@gmail.com";
var accountPassword ="12345";
accountCity = "bhopal";
let accountState;

// accountId = 2; // not allowed
accountemail = "mishra123@gmail.com";
accountPassword = "147852";
accountCity = "Indore";

console.log(accountId);

/* prefer not to use var
because of issue in block scope and functional scope 
*/


console.table([accountId,accountemail,accountPassword,accountCity,accountState]);
