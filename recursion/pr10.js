const fact = num => {
    if (num === 1) {
        return 1
    }
    return num * fact(num - 1)
}

console.log(fact(1))
console.log(fact(2))
console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
console.log(fact(6))
console.log(fact(7))