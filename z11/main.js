const fib = num => {
    if (num < 2) return num
    return fib(num - 1) + fib(num - 2)
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))

const fac = num => {
    if (num === 1) return 1
    return num * fac(num - 1)
}

console.log(fac(1))
console.log(fac(2))
console.log(fac(3))
console.log(fac(6))