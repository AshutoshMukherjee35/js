//call method: method borrowing / function borrowing
const student = {
    firstName: "Default Firstname",
    lastName: "Default Lastname",   
}

const printFullName = function( age , homeTown ) {
    console.log(this.firstName + " " + this.lastName + " age is " + age + " Hometown is " + homeTown);
}

printFullName.call(student)

const newStudent = {
    firstName: "Ashutosh",
    lastName: "Mukherjee"
}
printFullName.call(newStudent);
printFullName.call(newStudent , 23 , "Raipur");

//apply method: Same as call method but the function parameters are passed as array
printFullName.apply(newStudent ,[ 23 , "Raipur" ]);

//bind: same as call method but in bind the bind method takes our object and binds it with our method on which bind is called and then returns a result which is the copy of that method
const bindedPrintFullName = printFullName.bind(newStudent , 23 , "Raipur");
console.log(bindedPrintFullName , 23 , "Raipur");
bindedPrintFullName();
