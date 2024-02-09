const closeFir=["Avinash","Ayush","Raushan","Rohan","Govind"];
const politicalFir=["Madhav singh","Pratush","Ashutosh Kumar","Trishul Singh"];
//   closeFir.push(politicalFir);
//   console.log(closeFir);//['Avinash','Ayush','Rohan','Govind',[ 'Madhav singh', 'Pratush', 'Ashutosh Kumar', 'Trishul Singh' ] ]
// console.log(closeFir[5][2]);
//  const allfirend=closeFir.concat(politicalFir);
// console.log(allfirend)//['Avinash','Ayush','Raushan','Rohan','Govind','Madhav singh','Pratush','Ashutosh Kumar','Trishul Singh']

 //spread

 const totalFirnd=[...closeFir,...politicalFir];
//  console.log(totalFirnd);//['Avinash','Ayush','Raushan','Rohan','Govind','Madhav singh','Pratush','Ashutosh Kumar','Trishul Singh']

 const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
 const real_another_array=another_array.flat(3)
//  console.log(real_another_array);//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"}))//[](it gives empty array )
let score1=100
let score2=200
let score3=302
console.log(Array.of(score1,score2,score3));//[ 100, 200, 302 ]
