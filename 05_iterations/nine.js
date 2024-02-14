const myNum=[1,2,3]
// const myTotal =myNum.reduce(function(acc,currval){
//    console.log(`acc:$(acc) and currval : ${}`)
//     return acc+currval
// },0)
const myTotal =myNum.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js cource",
        price : 2999
    },
    {
        itemName : "python cource",
        price : 999
    },
    {
        itemName : "mobile dev cource",
        price : 5999
    },
    {
        itemName : "data sciece cource",
        price : 12999
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);