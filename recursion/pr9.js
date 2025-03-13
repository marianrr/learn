const fact = num => {
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    if (num >= 2) {
        return fact(num - 1) + fact(num - 2)
    }
}

console.log(fact(0))
console.log(fact(1))
console.log(fact(2))
console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
console.log(fact(6))