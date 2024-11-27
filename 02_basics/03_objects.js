//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
const JsUser ={
    name: "jagriti",
    "full name": "Jagriti rai",
    [mySym]: "mykey1",
    age: 18,
    location: "Gorakhpur",
    email: "jr234@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);   


// JsUser.email = "JRai3456@gmail.com";
// // Object.freeze(JsUser);
// JsUser.email = "JRai12345@gmail.com";
// console.log(JsUser);       


JsUser.greeting = function(){
    console.log("hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}
console.log(JsUser.greeting);       //[Function (anonymous)]
console.log(JsUser.greeting());      //hello JS User
console.log(JsUser.greetingTwo());    //hello Js User,jagriti