const sumArr = arr => {
    if (arr.length < 1) {

        return 0
    }
    return arr[0] + sumArr(arr.slice(1))
}

console.log(sumArr([0]))
console.log(sumArr([1]))
console.log(sumArr([1, 2, 3]))
console.log(sumArr([1, 2, 3, 4]))
console.log(sumArr([6, 4]))