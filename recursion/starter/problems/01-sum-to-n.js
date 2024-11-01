/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

//solutie cu for()

// const sumToN = num => {
//   let sum = 0;
//   if(num < 0) return null
//   for(let i=0; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

function sumToN(num) {
  if(num < 0) return null
  while(num > 0) {
  if(num === 1) return 1
  else {
    return num + sumToN(num-1)
  }
}
}










// console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null





/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
