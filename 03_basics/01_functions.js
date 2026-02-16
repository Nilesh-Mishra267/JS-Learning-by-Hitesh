function sayMyName (){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1+number2);

// }
// addTwoNumbers(4,7)
// addTwoNumbers(3 , "a")
// addTwoNumbers(5,null)

// const result = addTwoNumbers(4,4)
// console.log("result:", result);


// function addTwoNumbers(number1, number2){
// console.log(number1+number2);

// }
// addTwoNumbers(4,7)
// addTwoNumbers(3 , "a")
// addTwoNumbers(5,null)

function addTwoNumbers(number1,number2){
    
    
    // let result =  number1+number2
    // console.log(result);
    // return number1+number2
}


const result = addTwoNumbers(4,4)
// console.log("result:", result);


// function loginUserMessage(username){
// return `${username} just logged in`
// }
// console.log(loginUserMessage("Nilesh"));


function loginUserMessage(username ="Mishra"){
    // if(!username)
    if(username==undefined){
        console.log("Please enter username");
        return
    }
return `${username} just logged in`
}
// console.log(loginUserMessage("Nilesh"));
console.log(loginUserMessage("tiwari"));

