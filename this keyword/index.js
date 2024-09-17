"use strict";
//this in global space

console.log(this) //global object. in case of browsers the global object is window. in nodejs it's global

// this inside a function 

function x() {
    /**The value depends on strict and non strict mode. Value would be window in non strict mode and undefined in strict mode */
   console.log(this);
}


//this in strict mode - (this substitution)
/**If the value of this keyword is undefined or null this keyword will be replaced with globalObject only in strict mode */

//this value depends on how this is called (window)

x() //in strict mode this will give undefined
window.x(); //in strict mode this will give the global object i.e window


//this inside a objects method
//if u make a function a part of object then it's called a method

const obj = {
    a: 10,
    x: function() {
        console.log(this);
       
    }
}
obj.x(); //prints the object obj

const obj1 = {
    a: 10,
    x: function() {     
        console.log(this.a);
    }
}
obj1.x();//prints 10

//call apply bind methods (sharing methods)

const student = {
    name: "Ashutosh",
    printName: function() {
        console.log(this.name);
    }
};
student.printName(); 

const student2 = {
    name: "Deepika",
}
//we cannot do student2.printName as it will throw a type error. so to use the printname method in student2 we use call method
student.printName.call(student2); //Deepika. Value of this is = student2

//this inside arrow function
/**Arrow function does not have their own this binding it retains the value of it's enclosing lexical context.*/
const obj4 = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
obj4.x(); // prints global object that is window which is it's enclosing lexical context.


//this inside nested arrow function

const obj5 = {
    a: 10,
    x: function() {
        const y = () => {
            console.log(this);
        }
        y();
    } 
}
obj5.x();

//this inside dom elements
//the value is referrenced to the HTML element