// function x() {
//     var a = 28;
//     function y() {
//         console.log(a);
//     }
//     return y;
//     // y();
// }

// var z = x(); 
// console.log(z);
// z(); //prints 28
// Function which is bind together with the lexical scope of the function forms a closure
/*************************************************************** */
// function x() {
//     var a = 28;
//     function y() {
//         console.log(a);/*the js engine points to the referrence of a and not to the value of a so when the value 
//         of a changes because var is global scope. The new value that is updated will be printed*/
//     }
//     a = 100;
//     return y;
//     // y();
// }

// var z = x(); 
// console.log(z); 
// z();// logs 100. Because of the reason mentioned above
/****************************************************************** */
// function z() {
//     var b = 100;
//     function x() {
//         var a = 28;
//         function y() {
//             console.log(a,b);
//         }
//         // return y;
//         y();
//     }
//     x();
// }
// z();

// function outermost() {
//     let a = 10;
//     function inner() {
//         let b = 12;
//         function innermost() {
//             console.log(a , b);
//         }
//         return innermost;
//     }
//     return inner;
// }

// let result = outermost()();
// result();

function outest() {
    const a = 11;
    function out() {
        const b = 12;
        function inner() {
            const c = 13;
            function inn() {
                const d = 14;
                function innermost() {
                    const e = 15;
                    function core() {
                        console.log(a , b , c , d , e)
                    }
                    return core;
                }
                return innermost;
            }
            return inn;
        }
        return inner;
    }
    return out;
}

let result = outest()()()()();
result();