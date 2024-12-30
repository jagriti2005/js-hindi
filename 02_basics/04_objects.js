// const TinderUser = new Object();
const TinderUser = {};

TinderUser.id = "123@abc";
TinderUser.name = "jagriti";
TinderUser.isLoggedIn = false;
// console.log(TinderUser);

const regularUser ={
    email:"jagu12@gmail.com",
    fullname:{
        userfullname:{
            firstname:"jagriti",
            lastname:"rai"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
