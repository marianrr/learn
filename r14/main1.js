// linear search

const liSe = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(liSe([8, 4, 2, 66, 44, 209], 2))
console.log(liSe([8, 4, 2, 66, 44, 209], 8))
console.log(liSe([8, 4, 2, 66, 44, 209], 4))