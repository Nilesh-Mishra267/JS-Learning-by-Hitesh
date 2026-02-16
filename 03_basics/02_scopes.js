//  var c = 200;
 
// // global scope
// if(true){
//     // block scope
// let a = 10;
// const b = 20;
// var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // console.log("INNER:" , a);
    
}
// console.log(a);

//**************************** */
function one(){
    const user = "Nilesh "

    function two(){
        const website = "youtube"
        console.log(user);
        
       }
    //    console.log(website);
       console.log(two());
            
}
// one()

//************************** */

if(true){
    const username = "Nilesh";
    if(username==="Nilesh"){
        const website = " youtube";
        // console.log(username+website);
        
    }
    // console.log(website); 
}
// console.log(username);

// *************************intersting*****************



console.log(addone(5));
// function access before intialization
function addone (num){
    return num+1;
}
// but variable not access before intialization
addtwo (5)
const addtwo = function(num){
    return num+2;
}
