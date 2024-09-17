/*const p1 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("P1 is resolved"), 3000);

    setTimeout(() => reject("P1 is Rejected"), 3000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P2 is resolved"), 1000);

    // setTimeout(() => reject("P2 is Rejected"), 1000);
})

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P3 is resolved"), 2000);

    // setTimeout(() => reject("P3 is Rejected"), 2000);
})

Promise.all([p1 , p2 , p3])
            .then((result) => console.log(result))//(3) ['P1 is resolved', 'P2 is resolved', 'P3 is resolved']
            .catch((error) => console.error(error)); //index.js:21 P1 is Rejected*/

/**Promise.all waits for all the promises to settle as success/resolved if any 1 is rejected it immediately throws an error */

// *************************************************************


/*const p1 = new Promise((resolve , reject) => {
                setTimeout(() => resolve("P1 is resolved"), 3000);
            
                // setTimeout(() => reject("P1 is Rejected"), 3000);
})
            
const p2 = new Promise((resolve , reject) => {
                setTimeout(() => resolve("P2 is resolved"), 1000);
            
                // setTimeout(() => reject("P2 is Rejected"), 1000);
})
            
const p3 = new Promise((resolve , reject) => {
                // setTimeout(() => resolve("P3 is resolved"), 2000);
            
                setTimeout(() => reject("P3 is Rejected"), 2000);
})

Promise.allSettled([p1,p2,p3])
                    .then(result => console.log(result))// returns an array of objects. priinted after 3 secs
                    
// (3) [{…}, {…}, {…}]
// 0
// : 
// {status: 'fulfilled', value: 'P1 is resolved'}
// 1
// : 
// {status: 'fulfilled', value: 'P2 is resolved'}
// 2
// : 
// {status: 'fulfilled', value: 'P3 is resolved'}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
                    .catch(err => console.log(err))// returns an array of objects. priinted after 3 secs

// (3) [{…}, {…}, {…}]
// 0
// : 
// {status: 'fulfilled', value: 'P1 is resolved'}
// 1
// : 
// {status: 'fulfilled', value: 'P2 is resolved'}
// 2
// : 
// {status: 'rejected', reason: 'P3 is Rejected'}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)*/

/**Promise.allSettled waits for all the promises to settle either as success or failure based on that it returns an array of object 
 * mentioning the status of the particular promise
 */

//********************************************** */

/*const p1 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P1 is resolved"), 3000);

    // setTimeout(() => reject("P1 is Rejected"), 3000);
})

const p2 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("P2 is resolved"), 1000);

    setTimeout(() => reject("P2 is Rejected"), 1000);
})

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P3 is resolved"), 2000);

    // setTimeout(() => reject("P3 is Rejected"), 2000);
})

Promise.race([p1,p2,p3])
            .then(result => console.log(result))//P2 is resolved after 1 sec
            .catch(err => console.error(err));*///index.js:105 P2 is Rejected
/**In the race case if P1 which is executed after 3 sec is rejected still the promise will settle to resolve only 
 * but if p2 is rejected then it'll throw an error as it get's executed first.
 */


//********************************************************* */

const p1 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("P1 is resolved"), 3000);

    setTimeout(() => reject("P1 is Rejected"), 3000);
})

const p2 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("P2 is resolved"), 1000);

    setTimeout(() => reject("P2 is Rejected"), 1000);
})

const p3 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("P3 is resolved"), 2000);

    setTimeout(() => reject("P3 is Rejected"), 2000);
})

Promise.any([p1,p2,p3])
            .then(res => console.log(res))
             //P2 is resolved
            .catch(err => console.log(err.errors))

//             ['P1 is Rejected', 'P2 is Rejected', 'P3 is Rejected']
// 0
// : 
// "P1 is Rejected"
// 1
// : 
// "P2 is Rejected"
// 2
// : 
// "P3 is Rejected"
// length
// : 
// 3

//Promise.any waits for any 1 promise to settle as success/resolved. If all promise's fail then it returns 
//an array of rejected promises.