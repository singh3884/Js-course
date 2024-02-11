

function sayMyName(){
    console.log("A")
    console.log("V")
    console.log("I")
    console.log("N")
    console.log("A")
    console.log("S")
    console.log("h")
}
// sayMyName();            //A
                        //V
                        //I
                        //N
                        //A
                        //S
                        //H
// function addTwoNumber(nums1,nums2){
//     console.log(nums1+nums2);
// }
// addTwoNumber()//NaN
// addTwoNumber(3,4)//7
// addTwoNumber(3,"4")//34
// addTwoNumber(3,"a")//3a
// addTwoNumber(3,null)//3
// const result = addTwoNumber(3,5);
// console.log("Result:",result);//Result: undefined


function addTwoNumber(nums1,nums2){
        // let result =nums1+nums2;
        // return result;
        return nums1+nums2;
    }
    const result = addTwoNumber(3,5);
// console.log("Result:",result);//Result: 8

function loginUserMessag(username="sam"){
    if(username === undefined)
    {
        console.log("Please enter username")
        return;
    }
    return `${username} just logged in`
}
//  console.log(loginUserMessag("Avinash"));//Avinash just logged in
//  console.log(loginUserMessag("hitesh"));//hitesh just logged in



function calculateCartPrice(...num1)//(...)=>this is a rest /spred operater
{
    return num1;
}
// console.log(calculateCartPrice(200,400,5000))//[ 200, 400, 5000 ]


const user={
    userName:"Avinash",
    // prices: 234 // iska undefined iya ga
    price: 234
}
function handleobject(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`);
}
//    handleobject(user);//Username is Avinash and price is 234

handleobject({
  
        userName:"Raunak",
      
        price: 234
    
})//Username is Raunak and price is 234


const myNewArray =[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))//200
console.log(returnSecondValue([100,200,300,400]))//200

