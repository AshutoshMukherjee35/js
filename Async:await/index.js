/**
 * what is async?
 * what is await?
 * How async await works behind the scenes?
 * Examples of using async/await?
 * Error Handelling
 * Interviews
 * Async await vs Promise.then/.catch
 */


//async is keyword used before a function to make it async

//async function always returns a promise. If we return a value then it's wrapped inside a promise and then it's returned
/*async function getData(){
    return "Namaste"
    // return Promise
}

const dataPromise = getData()
console.log(dataPromise)
dataPromise.then(result => console.log(result))*/
/***************************************** */
/*const promise = new Promise((resolve,reject) => {
    resolve("Promise Resolved Value!")
})

async function getPromise(){
    return promise
}

const getPromisepromis = getPromise()
getPromisepromis.then(res=> console.log(res))*/ // Promise Resolved Value
/*************************************** */

//async await combo is used to handle promises

/*const promise = new Promise((resolve,reject) => {
    resolve("Promise Resolved Value!")
})
//await is a keyword that can only be used inside your async function. we write await keyword in front of a promise.
async function handlePromise() {
    //we use await in front of the promise that has to be resolved.
   const val = await promise;
   console.log(val)
}
handlePromise()

console.log(promise)*/

// function getData() {
//     promise.then((res) => console.log(res))
// }
// getData()


/**********diff b/w normally handelling promise vs async await****************** */


/*const promise = new Promise((resolve,reject) => {
   setTimeout(()=>{
    resolve("Promise Resolved Value!")
}, 10000
    )
})
//as the promise takes some time to resolve the line number 64 get's executed first and after that the fulfilment of promise is printed hence creating a confusion as js is a single threaded language. That's why normal handelling of promises is not done.
function getData() {
    //JS engine will not wait for promise to be resolved
    promise.then((res) => console.log(res))
    console.log("Namste JS")
}
getData()


// over here 1st Namaste JS is printed then after 10 secs Promise Resolved Value is printed. This used to cause confusion in the execution context 
*/

// const promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!")
//  }, 10000
//      )
//  })

// async function handlePromise() {
//     //Hello world get's printed first and after it moves to another line
//     console.log("Hello world")
// //JS engine was waiting for promise to resolve only after that it'll move ahead in execution. so after 10 secs Namaste JS and Promise Resolved Value is printed together
//    const val = await promise;
//    console.log("Namste JS")
//    console.log(val)

//    const val2 = await promise;
//    console.log("Namste JS 2")
//    console.log(val2)

//    // in this case where there are 2 promises 
// }
// handlePromise()

/************************** */

/*const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
     resolve("Promise Resolved Value!")
 }, 10000
     )
 })

 const promise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
     resolve("Promise Resolved Value!")
 }, 5000
     )
 })

 async function handlePromise() {
   
    console.log("Hello world")

   const val2 = await promise2;
   console.log("Namste JS 2")
   console.log(val2)

   const val = await promise;
   console.log("Namste JS")
   console.log(val)

  
}
handlePromise()*/

//The behaviour is similar, first hello world is printed after 5 sec Namaste js and promise resolved is printed and after 10 sec namste js 2 and promise resolved will be printed.
//But if the timer is changed and `promise` has 10 sec timer and `promise2` 5 sec then after 10 sec only everything will be executed due to ambiguos nature of settimeout and also coz js goes from top to bottom in execution of code.

/**For this code the following would be the execution context
 * 
 * first the function handlePromise() is called into the call stack and the function starts executing line by line.
 * Hello World get's printed in the console first then the context moves to another line
 * 
 * it encounters a promise over here. At this point the handlePromise() gets suspended and is moved out of the call stack
 * once the timer expires(i.e the promise get's resolved) then the handlePromise() comes back in the call stack for execution
 * 
 * And now when promise2 is resolved after 5 secs it'll move to promise. Here the fn encounters another Promise and waits for it to get resolved
 * once the promise timer expires(Promise get's resolved) then again handlePromise() is called into the call stack for execution
 * 
 * After this the entire program finishes.
 */

/***************************************** */


const API_URL = "https://api.github.com/users/AshutoshMukherjee35";

async function handlePromise() {
    try{
        const data = await fetch(API_URL); // fetch() is a promise that returns a response
        console.log(data) // data will get Response object 
        const jsonValue = await data.json(); // data.json() is a promise that returns a response
        console.log(jsonValue)
        console.log(jsonValue.node_id)
    }
    catch(err){
        console.log(err)
    }
    
}
handlePromise()

/**
 * 
 * How fetch() works:
 * 
 * fetch() => returns a Response(response object) => This Response object has a body which is a readable stream => to convert this readable stream
 *  into a json object we use json() method => json() method returns a promise that resolves to the json value.
 */