const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//   console.log(item);
// })

//arrow function
// coding.forEach((item)=>{
// console.log(item);;
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
})



const muCoding =[
    {
        languagename:"javascript",
        languagefilename:"ja"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"java",
        languagefilename:"jav"
    },
]
muCoding.forEach((item)=>{
    console.log(item.languagename);
})