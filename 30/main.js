// Define a function logBetween(lowNum, highNum) that will print every number
//  from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

// const logBetween = (lowNum, highNum) => {


//     if (lowNum === highNum) {
//         console.log(highNum)
//         return
//     }
//     console.log(lowNum)
//     return logBetween(++lowNum, highNum)

// }

// logBetween(5, 22)

// Write a function printFives(max) that prints out the multiples of 5 that are less than the max.
// Try to solve this in two ways, one using an if statement, and one without.

// const printFives = max => {

//     if (max === 2) return
//     if (max % 5 === 0) console.log(max)

//     return printFives(--max)
// }

// printFives(11)
// printFives(10)


// Write a function logBetweenStepper(min, max, step)
//  that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals.


// const logBetweenStepper = (min, max, step) => {

//     if(min > max) return
//     console.log(min)
//     return logBetweenStepper(min + step, max, step)



// }

// logBetweenStepper(3, 20, 2)



// Define a function fizzBuzz(max) that takes a number and prints every
//  number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.


// const fizzBuzz = (max) => {

//     if (max === 0) return
//     if (max % 3 === 0 && max % 5 === 0) return fizzBuzz(--max)
//     if (max % 3 === 0 || max % 5 === 0) console.log(max)
//     return fizzBuzz(--max)

// }

// fizzBuzz(23)


// Write a function doubler(numbers) that takes an array of numbers and returns
//  a new array where every element of the original array is multiplied by 2.


// const doubler = numbers => {

//     if (numbers.length === 0) return numbers

//     return [2 * numbers.at(0)].concat(doubler(numbers.slice(1, numbers.length)))

// }

// console.log(doubler([2, 10, 23, 44]))


// 

