const MyHero =['hanumanji','ramji','shriKrishna'];
// console.log(MyHero);//[ 'hanumanji', 'ramji', 'shriKrishna' ]
// console.log(MyHero[0]);//hanumanji
const myArray = new Array(1,2,3,4,5)
// console.log(myArray);//[ 1, 2, 3, 4, 5 ]

 
 // Notes:- Array size is changable 




//Array method 
// myArray.push(6);
// console.log(myArray);//[ 1, 2, 3, 4, 5, 6 ]
// myArray.push(7);
// console.log(myArray);//[1, 2, 3,4,5, 6, 7]
// myArray.pop();
// console.log(myArray);//[1, 2, 3,4,5, 6]
// myArray.unshift(0)
// console.log(myArray)//[ 0, 1, 2, 3, 4, 5 ]
// myArray.shift()
// console.log(myArray)//[ 1, 2, 3, 4, 5 ]

// console.log( (myArray.includes(8)));//false
// console.log( myArray.indexOf(8));//-1
// console.log( myArray.indexOf(5));//4

const newArray = myArray.join();
// console.log(myArray)//[ 1, 2, 3, 4, 5 ]

// console.log(newArray)//1,2,3,4,5
// console.log(typeof newArray)//string

//slice , splice

// slice
// console.log(myArray);//[ 1, 2, 3, 4, 5 ]
const Array2=myArray.slice(1,3);
// console.log(Array2);//[ 2, 3 ]
// console.log(myArray);//[ 1, 2, 3, 4, 5 ]
//splice
const Array3=myArray.splice(1,3);
console.log(Array3);//[ 2, 3, 4 ]
console.log(myArray)//[ 1, 5 ]

//Q) What is Difference between slice and splice
 //ans) 1)splice change the main array;
    //  2) slice can't change the main array
