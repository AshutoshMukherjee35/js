// a();
// b();// will throw an error due to hoisting

// function statement aka function declaration
function a() {
    console.log("a called")
}
// a();

//function expression
var b = function () {
    console.log("b called")
}
// b();
// a();
// b();


//anonymous function: function without a name. These are used in a place where the functions are used as values
// function () {

// }

//named function expression
var b = function xyz() {
    console.log(xyz)
    // xyz();
}
// b();
// xyz(); // throws an error: xyz is not defined can only be used within the function statement
/****************** */
//difference b/w parameters and arguments

var c = function(param1, param2) {
    console.log(param1 , param2);
}
c(1 , 2) //these values passed are called arguments

//first class functions: as functions are passed arguments then such functions are called first class functions
// var d = function(param1){
//     console.log(param1);
// }
// function xyz() {

// }
// d(xyz);

var e = function(param1) {
    return function xyz1() {

    }
}
console.log(e())
/*functions are first class citizens also means that first class functions */
//using let and const instead of var will behave the same way the way these keywords work i.e being in the temporal dead zone till the line is encountered.



