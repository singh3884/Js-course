// fetch('https://somthjing.com').then().catch().finally();

const promicesone = new Promise(function (resolve, reject) {
    // Do an async task
    //Db calls, cryptography,network
    setTimeout(function () {
        console.log('Asyne Task is compeleted');
        resolve();
    }, 1000)
})
promicesone.then(function () {
    console.log('Promice Completed');
});


new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Asyne Task 2 is compeleted")
        resolve();
    }, 1000)
}).then(function () {
    console.log('Asyne Task 2 resolved')
})

const promicesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Avinash", email: "chai@example.com" })
    }, 1000)
})
promicesThree.then(function (user) {
    console.log(user);
})


const promicesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {

            resolve({ username: "Avinash", Paeeword: "chai@" })
        } else {
            reject('ERROR : Something wend wrong')
        }
    }, 1000)
})

promicesFour
    .then((user) => {
        console.log(user);
        //  return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(()=>console.log("this promice is exicuted or rejected"))



    const promiceFive = new Promise(function(resolve,reject){
        setTimeout(function () {
            let error = true;
            if (!error) {
    
                resolve({ username: "Avinash 5", Paeeword: "12345" })
            } else {
                reject('ERROR : js wend wrong')
            }
        }, 1000)
    })
   async function consumePromiseFive(){
    try {
        const response = await promiceFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }

   }
   consumePromiseFive();



//    async function getAllUsers(){
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//             const data = await response.json()
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
//     }

    getAllUsers()

    fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))