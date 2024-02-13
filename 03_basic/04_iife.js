//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();
//GLobel scope ka pollution ko hatane kalia ham iifi ka use karte hai
//arrow func

((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})("Avinash")

