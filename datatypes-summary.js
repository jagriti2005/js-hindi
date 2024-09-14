// Primitive
// 7 Types: String,Number,Boolean,null,undefined,Symbol,BigInt

// JavaScript is a dynamically typed language

// const score = 100
// const scoreValue = 100.03
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const userId = Symbol('123')
// console.log(id == userId);  //false
// console.log(id === userId);  //false


// Reference(Non-Primitive)
//Array,Objects,Functions

// const heros = ['shaktiman','bheem','doreamon'];
// let myObj = {
//     name:"Jagriti",
//     age:19,
// }

// const myFunction = function(){
//     console.log("Hello,World!");
// }

// console.log(typeof heros);


//+++++++++++++++++++++++++++++++++++++++++++++++++

//Memory
//Stack(Primitive), Heap(Non-Primitive)

let myName = "Jagriti Rai"
let anotherName = myName
anotherName = "CupCake"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email = "jagriti@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

