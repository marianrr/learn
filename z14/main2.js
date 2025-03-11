// binary search

const biSe = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    return -1
}

console.log(biSe([1, 5, 3, 88, 33, 66], 3))
console.log(biSe([1, 5, 3, 88, 33, 66], 9898))