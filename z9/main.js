// factorial function version

// const fact = num => {
//     let fact = 1
//     for (let i = 2; i <= num; i++) fact *= i
//     return fact
// }

// console.log(fact(3))
// console.log(fact(4))
// console.log(fact(5))



// factorial recursion version

const fact = num => {
    if (num === 0) return 1
    return num * fact(num - 1)
}

console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
console.log(fact(6))