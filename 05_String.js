const name ="Avinash";
const repoCount=3;
// console.log(name + repoCount +"Value");
console.log(`Hellow my name is ${name} and my repo count is ${ repoCount}`);

const gameName = new String('Raunak-raj-kumar');
// console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName._proto_);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(0,3);
console.log(anotherString);

const newStringone = "   Raj   ";
console.log(newStringone);
console.log(newStringone.trim()); //trim remove Extra space in string

const url = "https://avinash.com/avinash%20raj"
console.log(url.replace('%20','**'));
console.log(url.includes('avinash'))
console.log(gameName.split('-'));