//generate a random color

const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color ='#'
    for(let i =0;i<6;i++)
    {
      color +=hex[Math.floor(Math.random()*16)]
    }
    return color
};
// console.log(randomColor() );
let intervalId;
 const startChangingColour = function(){
   if(!intervalId)
   {
    intervalId = setInterval(changeBgcolor,1000)
   }
    function changeBgcolor(){

        document.body.style.backgroundColor =randomColor();
    }
 }

 const stopChangingColor = function(){
      clearInterval(intervalId);
      intervalId = null;
 }
document.querySelector('#start').addEventListener('click',startChangingColour);


document.querySelector('#stop').addEventListener('click',stopChangingColor)