// if(true){
//     //compound statement
//     //known as a complete block
// }


// {
//     //anything within this braces is known as a block we use block to 
//     /*group multiple statements together and execute at a place
//      where js expects a single statement*/
//     var a = 10
//     let b = 20
//     const c = 30
// }

/*Shadowing in JS 
*/
var a = 100;
{
    var a = 10;/*This variable a shadows the global scope variable a*/
    let b = 20;
    const c = 30;
    console.log(a);/*this will print the value based on the local scope of the variable */
    console.log(b);
    console.log(c);
}
    console.log(a);/*this will also print 10 as it refers to the shadow that is created in the above scope */
    console.log(b);
    console.log(c);

/*Shadowing does not work on block scoped declarartions i.e let and const */

//Illegal shadowing
// let a = 10;
// {
//     let a = 100;
// }
// console.log(a);