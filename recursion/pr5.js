const rev = arr => {
    if (arr.length === 0) {
        return []
    }
    return [arr[arr.length - 1]].concat(rev(arr.slice(0, arr.length - 1)))
}

console.log(rev([3, 5, 7]))
console.log(rev([1, 2, 3, 5, 7]))
console.log(rev([10, 55, 88]))