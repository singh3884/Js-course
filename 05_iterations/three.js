// for of 
//["","","",]
//[{},{},{}]  object in side the array
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greatings ="Hello World!"
for (const great  of greatings) {
    //  console.log(`Each char in ${great}`)
}
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United Sate America")
map.set('fr',"France")
map.set('IN',"INDIA")
// console.log(map);


for (const [key,value] of map) {
     console.log(key,":-",value);
}


const myObject = {
    game1:'NFS',
    game2:'spiderman'
}

// for (const [key,value] of myObject) {
//      console.log(key,":-",value);
// }//not working forof loop in object