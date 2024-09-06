// console.log(2>1);
// console.log(3==3);
// console.log(4>10);
// console.log(3<=9)
// console.log(2!=3);

// console.log('2'>1);    //true
// console.log('02'>1);   //true

// console.log(null > 0);    //false
// console.log(null == 0);   //false
// console.log(null >= 0);   //true

//the reason is that an equality check == and comparison >,<,<=,>= work differently
//Comaprison convert null to a number,treating it as 0
//that's why null >= 0 is ture

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
//false in every case

//=== is strictly compare(it also comapre its data types)

console.log('2'== 2);  //true
console.log('2' === 2);   //false

