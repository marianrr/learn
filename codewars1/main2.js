function perimeter(n) {

    const arr = [1, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    console.log(arr)
    return 4*arr.reduce((sum, num) => sum + num, 0)
}

console.log(perimeter(5))
console.log(perimeter(5))
console.log(perimeter(7))
console.log(perimeter(20))
console.log(perimeter(30))