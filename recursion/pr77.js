const rec = (x, y) => {
    if (y === 0) {
        return 1
    }
    if (y < 0) {
        return (1 / x) * rec(x, (-y + 1))
    } else {
        return x * rec(x, (y - 1))
    }
}

console.log(rec(2, 0))
console.log(rec(2, 1))
console.log(rec(2, 2))
console.log(rec(2, 3))
console.log(rec(2, 4))
console.log(rec(2, 5))