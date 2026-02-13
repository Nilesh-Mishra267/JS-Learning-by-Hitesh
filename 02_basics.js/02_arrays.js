const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["spiderman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread operator
const allNewHeros = [...marvel_heros , ...dc_heros]
// console.log(allNewHeros);

// const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_Another_Array = another_Array.flat(Infinity)
// console.log(real_Another_Array);


console.log(Array.isArray("Nilesh"));
console.log((Array.from("Nilesh")));
console.log(Array.from({name : "Nilesh"}));  // interested

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






