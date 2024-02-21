// let myName = "Avinash    "
// let mychannel = "chai    "
// console.log(myName.trueLength);


let myHero = ["thor","spiderman"];

let heroPower = {
    thor :"Hammer",

    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}
// heroPower.avinash();
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hellow`)
}
myHero.hitesh();//we insert own prototype 
myHero.heyHitesh();//we insert own prototype 
// heroPower.heyHitesh();


//inheritance

const User ={
    name: "chai",
    email :"avinashRaj@gmail.com"
}

const Teacher={
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS assignment ',
    fullTime : true,
    __proto__ : TeachingSupport
}
// console.log(TASupport.isAvailable);

Teacher.__proto__ = User


//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherusername ="AvinashRajSingh"
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}
anotherusername.trueLength();
