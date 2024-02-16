const clock = document.getElementById('clock')

let data = new Date()
console.log(data.toLocaleDateString())

setInterval(function(){
    let data = new Date()
// console.log(data.toLocaleDateString())
clock.innerHTML = data.toLocaleTimeString();
},1000)