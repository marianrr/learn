<<<<<<< HEAD
// let m = 3, n = 5;
// let k = 1
// let a = []
// for (let i = 0; i < m; i++) {
//     a[i] = []
//     for (let j = 0; j < n; j++) {
//         a[i][j] = k++
//     }
// }

// console.log(a)
// console.log(a.length)
// console.log(a[0].length)


// let m = 3, n = 5;
// let k = 1
// let a = []
// for (let i = 0; i < m; i++) {
//     a[i] = []
//     for (let j = 0; j < n; j++) {
//         a[i][j] = k++
//     }
// }

// console.log(a)
// console.log(a.length)
// console.log(a[0].length)
// let text1 = []
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         text1.unshift(a[i][j])
//     }
// }

// console.log(text1)
=======
function perimeter(n) {

    const arr = [1, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    console.log(arr)
    return 4*arr.reduce((sum, num) => sum + num, 0)
}

console.log(perimeter(5))
console.log(perimeter(5))
console.log(perimeter(7))
console.log(perimeter(20))
console.log(perimeter(30))
>>>>>>> d6a3d0cf8f3f4621a31fe376238213d70592a831
