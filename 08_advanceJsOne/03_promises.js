const promiseOne = new Promise(function (resolve, reject) {
    //Do async task
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000)
});

promiseOne.then(function () {         //.then connect to resolve function
    console.log("promise consumed");
})


new Promise(function (resolve, reject) {
    //Do async task
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log('Async task2 is completed');
        resolve();
    }, 1000)
}).then(function () {         //.then connect to resolve function
    console.log("promise of 2nd  consumed");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Faisal Khan", password: "123" })
        } else {
            reject('Error:Something went wrong')
        }
    }, 1000)
})

const username = promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);     //if error=true then it give "Error:Something went wrong"
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('Error:JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//************************************************************************* *//

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/faisalkhan-dev")
//         const data = await response.json(); //await because convertion of response to json also takes time
//         console.log(data)
//     } catch (e) {
//         console.log(error)
//     }
// }

//getAllUsers()


fetch("https://api.github.com/users/faisalkhan-dev")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//These both codes give same output
//************************************************************************* *//


//console.log(username)       //give UnhandledPromiseRejection