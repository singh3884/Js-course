// // const user ={
//     username : "Avinash",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails:function(){
//         // console.log(`Username : ${this.username}`);
//         // console.log(this)
//     }
    
// }
// console.log(user.username)
// console.log(user.getUserDetails())

function user(username,loginCount,isLoggedin)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    // return this
    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
}
const userone = new user("Avinash",12,true);
const userTwo = new user("Raj",2,false);
console.log(userone.constructor);
// console.log(userTwo);

// Notes
// 1) firstly one object is created  is Known as instance
//2) constructer function call hota hai new key word ka karan 
//3)argument are injected in this key word 
//4) output mill jata hai

//


// this key Word in not present in arrow function 