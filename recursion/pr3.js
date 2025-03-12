const isFound = (arr, target) => {
    if (arr.length < 1) return false
    return (arr[0] === target) ? "true" : isFound(arr.slice(1), target)
}

console.log(isFound([3, 2, 11, 1], 11))
console.log(isFound([3, 2, 11, 1], 77))
console.log(isFound([3, 2, 11, 1], 2))
console.log(isFound([3, 2, 11, 1], 1))