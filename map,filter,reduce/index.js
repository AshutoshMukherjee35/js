const arr = [5, 1, 2, 4, 6,]

//map function

// function double(integer) {
//     return integer * 2
// }

// const output = arr.map(double)
// console.log(output)



// const output = arr.map(integer => {
//     return integer * 2
// })
// console.log(output)

/********** */

//filter function

// function isOdd(integer) {
//     return integer % 2;
// }
// const output = arr.filter(isOdd)
// console.log(output)

/************* */

//reduce function: used to iterate through all the items 
//of an array and return a single value output.


//without reduce function
// function sum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum
// }
// console.log(sum(arr))

//using reduce function
// const output = arr.reduce(function (accumulator, current) {
//     accumulator = accumulator + current;
//     return accumulator;
// }, 0)
// console.log(output)

//finding max element in an array using reduce

// const output = arr.reduce(function(acc,curr) {
//     if(curr > acc) {
//         acc = curr
//     }
//     return curr;
// }, 0)
// console.log(output)

/**************Advanced logics of map,filter & reduce */

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "ashutosh", lastName: "mukherjee", age: 24 },
    { firstName: "donald", lastName: "trump", age:54 },
    { firstName: "elon", lastName: "musk", age: 24 }
];

// const output = users.map(data => data.firstName + " " + data.lastName)
// console.log(output)

//{26: 1, 24: 2, 54: 1}

// const output = users.reduce(function(accumulator, current) {

//     if(accumulator[current.age]) {
//         accumulator[current.age] = ++accumulator[current.age]
//     }
//     else {
//         accumulator[current.age] = 1
//     }
// return accumulator
// }, {})
// console.log(output)

//firstname of people whose age is less then 30

// function ageLessThanThirty(users) {
//  if(users.age < 30) {
//     return users.firstName;
//  }
// }
// const output = users.filter(ageLessThanThirty)
// // const newOutput = output.map(data => data.firstName)
// // console.log(newOutput)

// function ageLessThan30FirstNames(output) {
//     return output.firstName
// }
// const newOutput = output.map(ageLessThan30FirstNames)
// console.log(newOutput)

// const output = users.filter((x) => x.age < 30).map(x => x.firstName)
// console.log(output)

const output = users.reduce(function(acc,curr) {
    if(curr.age < 30) {
       acc.push(curr.firstName)
    }
    return acc
}, [])
console.log(output)