// immediately Invoked Function Expressions (IIFE)

(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
    
}) ();
// one time two function execute then pass ;
// perameter passed function 
((name) =>{
    console.log(`DB CONNECTED TWO ${name}` );
    
})("Nilesh")