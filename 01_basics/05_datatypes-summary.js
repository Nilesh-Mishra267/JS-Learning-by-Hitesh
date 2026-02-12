// Primitive

// 7 types : String , Number , Boolean Null , undefined , Symbol , BigInt

const score = 100
const scorevalue = 100.2

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber =515121512511


// Reference (Non Primitive)

// Array ,  Object , Functions

//Array
const heros = ["saktiman" , "superman" , "ironman"];

//object
let myObj = {
    name: "Nilesh",
    age:22,
}

//function
const myFunction= function (){
   console.log("Nilesh");
   
}

console.log(typeof myObj);



//********************************************************* */
// Stack (Primitive) , Heap (Non-Primitive)


let myYoutubeName =  "nilesh@googledotcom";

let anotherName = myYoutubeName;

  anotherName = "chaiAurcode";

  console.log(myYoutubeName);
  console.log(anotherName);

  let userOne = {
    email: "nilesh@google.com",
    upi: "useone@ybl"
  }

  let userTwo = userOne
    userTwo.email = "mishra@google.com"

  console.log(userOne);
  console.log(userTwo);
  
  
  