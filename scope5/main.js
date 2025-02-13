// function hoisting


// 10
// console.log(scope1())
// function scope1() {
//     return 10
// }

// ReferenceError: var1 is not defined
// console.log(var1)
//  var1 = function scope1() {
//     return 10
// }

// undefined
// console.log(var1)
//  var var1 = function scope1() {
//     return 10
// }

// ReferenceError: Cannot access 'var1' before initialization
// console.log(var1)
//  let var1 = function scope1() {
//     return 10
// }

// ReferenceError: Cannot access 'var1' before initialization
// console.log(var1)
//  const var1 = function scope1() {
//     return 10
// }