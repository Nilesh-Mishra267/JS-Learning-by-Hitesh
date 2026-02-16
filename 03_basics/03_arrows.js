const user = {
    username :"Nilesh",
    price: 999,

     welocmeMessage: function(){
        console.log(`${this.username} , welocme to website`);
        console.log(this);
        
        
     }
}
// user.welocmeMessage()
// user.username = "sam"
// user.welocmeMessage()

// console.log(this);


// function chai (){
//     let username = "Nilesh"
//     console.log(this);
// }
// chai()


// const chai = function(){
//     let username = "Nilesh"
//     console.log();
    
// }
// chai()


const chai = () =>{
    let username = "Nilesh"
    // console.log(this.username);
    
}
chai()

// expliset return
// const addTwo =(num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))


//impliset retrun
// const addTwo =(num1,num2) => num1+num2
// console.log(3,4);

// const addTwo =(num1,num2) =>( num1+num2)
// console.log(3,4);

// // 
// const myArray = [2,4,5,6,7,7]
// myArray.forEach(()=>)