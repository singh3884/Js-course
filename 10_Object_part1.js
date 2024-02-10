//singleton (When we declare object in this way (object.create ) then singleton)

//object literals
const mySym = Symbol("key1")

const JsUser={
    name :"Avinash",
    "full name":"Avinash raj",
    age:18,
    // mySym:"Symbol",//it is not a symbol
    [mySym]:"This is a symbol",
    location:"Bihar",
    email:"avinasraj@gmial.com",
    isloggedIn:false,
    lastloginDay:["Monday","Saturday"]
}
// console.log(JsUser.name);//Avinash
// console.log(JsUser["name"]);//Avinash

// console.log(JsUser["full name"])//be can't acces by using dot
//By using dot we cant acces full name;

// console.log(typeof JsUser.mySym)//string
// console.log( JsUser[mySym])//This is a symbol
JsUser.email="raj@gmail.com";
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="j@gmail.com";
// console.log(JsUser.email);
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


