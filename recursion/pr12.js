const isSorted = arr => {

    if (arr.length < 2) return true
    return (arr[0] > arr[1]) ? false : isSorted(arr.slice(1))

}

console.log(isSorted([1, 2, 3, 4]))
console.log(isSorted([2, 5, 9]))
console.log(isSorted([22, 33, 11, 6]))