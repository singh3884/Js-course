// const tinderUser= new Object()
// console.log(tinderUser);//singelton Object;
   const tinderUser ={}
   tinderUser.id="12344"
   tinderUser.name ="Avinash";
   tinderUser.isLoggedIn =false;
//    console.log(tinderUser);
const regularUser ={
    email:"avinashraj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Avinash",
            lastname:"Raj"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const target = { a: 1, b: 2 };
const source = { d: 4, c: 5 };
const obj={e:7,f:6}
// const returnedTarget = Object.assign(target, source);
// console.log(target);//{ a: 1, b: 2, d: 4, c: 5 }
// console.log(returnedTarget === target);
// // Expected output: true
// const returnedTarget = Object.assign({},target, source,obj);
// console.log(target);//{ a: 1, b: 2}
// console.log(returnedTarget)//{ a: 1, b: 2, d: 4, c: 5, e: 7, f: 6 }


// console.log(returnedTarget === target);//false

const obj3={...target, ...source,...obj}
console.log(obj3);
    
const users = [
    {
        id:1,
        email:"avinashraj@gmail.com"
    },
    {
        id:2,
        email:"avinashraj2@gmail.com"
    },
    {
        id:3,
        email:"avinashraj3@gmail.com"
    },
]
users[1].email;
console.log(tinderUser);//{ id: '12344', name: 'Avinash', isLoggedIn: false } 
console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
//NOTE:- above line gives output in array so we apply loop in output in array
//It is very very important
console.log(Object.values(tinderUser))//[ '12344', 'Avinash', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '12344' ], [ 'name', 'Avinash' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true;
console.log(tinderUser.hasOwnProperty('isLogged'))//false;
