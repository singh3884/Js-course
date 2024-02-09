let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// // console.log(myDate.toISOStrin())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate =  new Date(2024,1,9)
let myCreatedDate =  new Date("02-09-2024")

// console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getmonth()+1);
newDate.toLocaleString('default',{
    weekday:"long",
    month:"2-digit"

})
console.log(newDate)




