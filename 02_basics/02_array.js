const marvel_heros = ["thor" , "Ironman" ,"spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);   // o/p:  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);   //o/p: flash

// const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);     // o/p: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 //*********** */ spread method kanch ke gilas ke jaise spread ho jayega
// ************** concate se jyada spread ko prefer krte hai

//  const all_new_heros = [...marvel_heros, ...dc_heros]
//  console.log(all_new_heros);    //o/p: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// flat ka use multiple sub array ko single array me concatinate krne ke liye krte hai
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Nitesh"));
console.log(Array.from("Nitesh"));
console.log(Array.from({name: "Nitesh"}));

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));