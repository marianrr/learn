// binary search

const biSe = (arr, target) => {

    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1

}

console.log(biSe([3, 4, 77, 88, 99], 77))
console.log(biSe([3, 4, 77, 88, 99], 88))
console.log(biSe([3, 4, 77, 88, 99], 4))