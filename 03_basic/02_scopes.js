
// var c=200
let a=200;
if(true)
{
    let a=10;
    const b=30;
    var c=20;
    // console.log("Inner:",a);
}
// console.log(a)
// console.log(b)
// console.log(c)//20(we can't use var )

 function one(){
    const username ="Avinash"
    function two(){
        const website ="youTube"
        console.log(username);
    }
    // console.log(website);
     two();
 }
//  one();



if(true){
    const username ="Avinash"
    if(username == "Avinash"){
        const website =" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)


//*************************intersting***************** */


console.log(addone(5));
function addone(num){
     return num+1;
}
// addTwo(5);
const addTwo=function(num){
     return num+2;
}

// console.log(addone(5));

