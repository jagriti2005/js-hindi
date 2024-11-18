// Dates

// let myDate = new Date();
// console.log(myDate);        // 2024-11-17T18:03:39.485Z
// console.log(myDate.toString());    //Sun Nov 17 2024 18:03:39
// console.log(myDate.toLocaleTimeString());     //6:03:39 PM
// console.log(myDate.toDateString());         //Sun Nov 17 2024
// console.log(myDate.toLocaleDateString());       // 11/17/2024
// console.log(myDate.toTimeString());           // 18:03:39
// console.log(myDate.getHours());               // 18
// console.log(typeof myDate);      //object

// let myCreatedDate = new Date(2005,5,15);
// console.log(myCreatedDate.toString());     // wed Jun 15 2005
// let myCreatedDate = new Date(2005,5,15);
let myCreatedDate = new Date("02-15-2024");       // Thu Feb 15 2024
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());
