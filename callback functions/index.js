//what is a callbackfunction in js
/*when u pass a function as a parameter to another fn. such fn is called callback function */

// setTimeout(function () {
//     console.log('timer')
// }, 5000);

function x(y) {
    console.log('x')
    y()
}
x(function y() {
    console.log('y')
})

//javascript is a synchronus and single-threaded language

//Event in JS, closure example with event, garbage collection and removeEventListeners

function attachEventListener() {
        let count = 0
        document.getElementById("click-me").addEventListener("click", function xyz() {
            console.log("Button CLicked", ++count)
        })
}
attachEventListener();