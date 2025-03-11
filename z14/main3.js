// quick sort

const qS = arr => {

    if (arr.length <= 1) {
        return arr; // Dacă lista are 0 sau 1 element, este deja sortată
    }
    const left = []
    const right = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...qS(left), pivot, ...qS(right)]
}

console.log(qS([3, 5, 8, 1, 3, 2, 4, 99, 44]))