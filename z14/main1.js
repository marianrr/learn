// linear search

const liSe = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1

}

console.log(liSe([1, 22, 10, 8, 7, 4, 88], 8))
console.log(liSe([1, 22, 10, 8, 7, 4, 88], 99))