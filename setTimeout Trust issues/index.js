// console.log("Start")

// setTimeout(function callback() {
//     console.log("Callback")
// }, 5000);

// console.log("End")

/*The above code will log start at first then will take the callback
function present in the settimeout and register it in the web API's
and also starts a timer of 5000 miliseconds. and then prints end
and once the timer expires it executes the callback function and prints
callback in the console*/

/*But what if after the last lint there are around 10million lines
of code present which takes around 10 seconds to run, what will happen
in such case? So the callback function moves to the callback queue
once the timer expires but as the call stack is not empty as it holds
the global execution context which is formed at the beginning
of a js program. So the callback function stays in the 
callback queue and once the 10milion lines are executed then the
callback function is executed. see example below. */

console.log("Start")

setTimeout(function callback() {
    console.log("Callback")
}, 5000);

console.log("End")

let startDate = new Date().getTime();
let endDate = startDate;
while( endDate < startDate + 10000) {
    endDate = new Date().getTime()
}

console.log("while expires")

// for( let i = 0; i < 10000000000000000000000000000000000000000000000000000; i++) {
//     i = i * 2.95034
// }

// console.log("for expires")
