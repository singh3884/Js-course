// There are two type of data type 
// 1) primitives  (ya call by value hai)
//7 types:{string,Null ,Boolean ,null,undefined,Symbol,BigInt}
const score =100;
const scoreValue = 100.3
const  isLoggedIn = false;
const outsideTemp = null;
// let userEmail;
// const Id = symbol('123')
// const anotherId = symbol('123')
// console.log(Id === anotherId);
const bigNumber =12234456677889n;
// console.log(bigNumber);



// 2) Non primitivs

//Array,Objects,Functions
const heros =["Rama","Shiva","Maa Durga","Hanuman ji"];
let myObj ={
    name :"Avinash",
    age:20,
}
const myFunction = function(){
    console.log("Jai Shree Ram");
}

// console.log(typeof isLoggedIn);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                     // MEMORY
    //   There are two type of memory
    // 1) stack(It  store Premitive data type)
    // 2) Heap(It  store  Non-Premitive data type)

    let myYoutubename ="A-RAj";
    let myShortName =myYoutubename;
    myShortName ="Raunak"; 
    console.log(myShortName);
    let userone= {
        email :"avinashraj@gmail.com",
        upiId:"6202171069@okaxis"
    }
    let usertwo =userone;
    usertwo.email="raj@gmail.com"
    console.log(userone.email);
console.log(usertwo.email);
