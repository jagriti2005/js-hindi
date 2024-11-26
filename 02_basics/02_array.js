const marvel_heros = ["thor","IronMan","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);         //['superman','batman','flash']
// console.log(marvel_heros[3][1]);       //batman


// const all_heros = marvel_heros.concat(dc_heros);       
// console.log(all_heros);            //['thor','IronMan','spiderman','superman','batman','flash']


// console.log([...marvel_heros,...dc_heros]);     //same as concat


const another_array = [1,2,3,[4,5],6,[7,8,[9,2]]];
// const any_another_array = another_array.flat(Infinity);
// console.log(another_array.flat());    //[1,2,3,4,5,6,7,8,[9,2]]
// console.log(another_array.flat(Infinity));   //[1,2,3,4,5,6,7,8,9,2]

// console.log(Array.isArray("Hitesh"));     //false  
// console.log(Array.from("Hitesh"));       //['H','i','t','e','s','h']
// console.log(Array.from({name: "Jagriti"}));     //interesting case: []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));     //[100,200,300]
