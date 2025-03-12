const sum = num => {
    if (num < 0) {
        return null
    }

    return num + sum(num - 1)
}


console.log(sum(1))
console.log(sum(2))
console.log(sum(3))
console.log(sum(4))
console.log(sum(5))