// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("HELLO WORLD");
// }
// x();
/*Prints:
HELLO WORLD
1(after 3 seconds)
 */
/**************************************************/
/*What if we want to print numbers from 1-5 at the time interval of 1-5  */

// function x() {
//     for(var i = 1; i<=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// x();

/*The above function will print 6 everytime. This is coz the var is always pointing to the memory of the i, 
and not the value of i, which is
not updating at regular intervals instead is the same.
To fix this we can either use a block scope declaration like let instead of var */

// function x() {
//     for(let i = 1; i<=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// x();
/*the above function provides the required output.
Else we can go with creating closure also if we are not allowed to use let*/

// function x() {
//     for(var i = 1; i<=5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//     }
// }
// x();

function setTimeOutUsingClosure() {
    for( var i = 1; i<=5; i++ ) {
        function closure(x) {
            setTimeout(() => {
                console.log(x)
            }, x * 1000 )
        }
        closure(i);
    }
}
setTimeOutUsingClosure();