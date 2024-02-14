const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apply"
}
// forin loop is use for Object / array
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programing =["js","rb","py","java","cpp"]

for (const key in programing) {
    // console.log(programing[key]);
}


const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United Sate America")
map.set('fr',"France")
map.set('IN',"INDIA")
for (const key in map) {
  console.log(key);
}