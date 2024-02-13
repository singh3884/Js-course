const user={
    username :"Avinash",
    price:999,
    welcomeMessage:function(){
console.log(`${this.username},Welcome to website`);
console.log(this);
    }
}
// user.welcomeMessage();//Avinash,Welcome to website
// user.username ="Raj";
// user.welcomeMessage();//Raj,Welcome to website
// console.log(this);//{}

// function chai(){
//     let username="Avinash"
//     console.log(this.username);
// }
// chai();
// const chai=function (){
//         let username="Avinash"
//         console.log(this.username);
//     }
//     chai();//undefined
const chai= ()=>{
        let username="Avinash"
        console.log(this);
    }
    // chai();
    //Difference between arrow and normal function
    // 1)
    // const addTwo =(num1,num2)=>{
    //     return num1+num2;
    // }
    // 2)
    // const addTwo =(num1,num2)=> num1+num2
    // 3)
    // const addTwo =(num1,num2)=> (num1+num2)
    const addTwo =(num1,num2)=> ({username:"Avinash"})

    

    console.log(addTwo(3,4));//7

    