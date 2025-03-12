// quick sort

const qS = arr => {
    if (arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...qS(left), pivot, ...qS(right)]

}

console.log(qS([5, 3, 55, 33, 22, 8, 66]))
console.log(qS([3, 2, 1, 5, 4, 3]))
console.log(qS([8, 4, 6, 2, 4, 88, 2]))