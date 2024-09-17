const radius = [3, 2, 5, 4]

// const calculateArea = function(radius) {
//     const output = []
//     for(let i=0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }
// console.log(calculateArea(radius))

// const calculateCircumference = function(radius) {
//     const output = []
//     for(let i=0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }
// console.log(calculateCircumference(radius))

// const calculateDiameter = function(radius) {
//     const output = []
//     for(let i=0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output
// }
// console.log(calculateDiameter(radius))

/** */

// const area = function(radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function(radius) {
//     return 2 * radius;
// }
// //calculate is a higher order function now as we can reuse it several times
// const calculate = function(radius, logic) {
//     const output = []
//     for(let i=0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

/** */
const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}
const diameter = function(radius) {
    return 2 * radius;
}
//calculate is a higher order function now as we can reuse it several times
Array.prototype.calculate = function(logic) {
    const output = []
    for(let i=0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}

// console.log(calculate(radius, area))
console.log(radius.calculate(area))
console.log(radius.map(area))




