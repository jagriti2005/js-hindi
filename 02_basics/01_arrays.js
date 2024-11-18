// array

const myArr = [0,1,2,3,4,5,6]
const myHeros = ['Shaktiman','Bheem'];

// const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0]);

//Array methods
// myArr.push(8);
// myArr.push(9);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);         //insert in starting
// myArr.shift();               // delete from starting

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(myArr);
// console.log(typeof newArr);         //string

console.log("A",myArr);

// const myn1 = myArr.slice(1,3);      //[1,2]
// console.log(myn1);

console.log("B",myArr);


const myn2 = myArr.splice(1,3);     //[1,2,3]
console.log("C",myArr);       //after splice delete the number [0,4,5,6]
console.log(myn2);