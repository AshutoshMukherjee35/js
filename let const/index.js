console.log(a)
let a;
a=10;
console.log(a)
//let is hoisted but is not stored in the GLOBAL(window) object instead it's stored in a "script" object with a value of
//undefined or <value unavailable> currently in chrome v8 engine. The above syntax where we declared a in line 2 
/* and initialized at line 3 is a valid syntax but this syntax does not work with const keyword
In const keyword the variable should be initialized at the time of declaration*/

console.log(b)  // throws ReferenceError: Cannot access 'b' before initialization
const b = 100;
console.log(b) // logs 100

// const b;
// b = 100;
// console.log(b) //SyntaxError: Missing initializer in const declaration