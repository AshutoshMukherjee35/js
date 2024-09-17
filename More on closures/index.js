// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     var a = 20;
//     return inner;
// }

// // outer()()
// var result = outer();
// result(); //20 prints on console
/**************************** */
// function outer(b) {
//     var a = 10;
//     function inner() {
//         console.log(a, b);
//     }
//     var a = 20;
//     return inner;
// }

// // outer()()
// var result = outer("Hello world");
// result(); // 20 Hello World prints on console.
/********************************** */
// function outest() {
//     var c = 30;
//     function outer(b) {
//         var a = 10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         var a = 20;
//         inner();
//     }
//    outer("Hello");
// }
// outest();
/********************************** */

// function outest() {
//     var c = 30;
//     function outer(b) {
//         var a = 10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         var a = 20;
//         return inner;
//     }
//    return outer;
// }

// outest()('HELLO WORLD')()

// var outerFunction = outest();
// var innerFunction = outerFunction('Hello')
// innerFunction();

/********Data privacy using closures************* In the below example as the variable count is inside the function
 * we cannot access it beyond the scope of the function hence providing data hiding.
*/
// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count)
//     }
// }
// //console.log(count)// throws error
// var counter1 = counter()
// counter1();
// counter1();
// counter1();

// var counter2 = counter()
// counter2();counter2();counter2();counter2();counter2();counter2();counter2();counter2();

/******************************To make the above code scalable we can use constructor functions 
 * as shown below***************************************** */

// function Counter() {
//     var count = 0;
//     this.incrementCounter = function() {
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter = function() {
//         count--;
//         console.log(count)
//     }
// }
// var increment = new Counter()
// increment.incrementCounter();
// increment.incrementCounter();
// increment.incrementCounter();

// increment.decrementCounter();
// increment.decrementCounter();

class Counter {
    constructor() {
        this.count = 0
    }
    incrementCount() {
        this.count++;
        console.log(this.count)
    }
    decrementCounter() {
        this.count--;
        console.log(this.count)
    }
}

var counting = new Counter()
counting.incrementCount();
counting.incrementCount();
counting.decrementCounter();





