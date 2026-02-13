// singleton
// Object.create =>through constructor

// objects literals

const mySym = Symbol("Key1")

const jsUser ={
    name: "Nilesh",
    "full name": "Nilesh Mishra",
    [mySym]: "myKet1",
    age: 18,
    email: "Nilesh@google.com",
    location: "bhopal",
    isLoggedIn: false,
    lastLogIn: ["Monday" , "Tuesday"]
}

// // console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Nilesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Nilesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





