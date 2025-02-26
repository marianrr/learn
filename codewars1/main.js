

let sum = 0
function deepCount(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) !== true) sum++
        else {
            sum++
            return deepCount(arr[i])
        }
    }



    let kiki = sum
    sum = 0
    return kiki
}

// console.log("Numarul elementelor este: ", deepCount([1, 2, 3]))
// console.log("Numarul elementelor este: ", deepCount(["x", "y", ["z"]]))
// console.log("Numarul elementelor este: ", deepCount([1, 2, [3, 4, [5]]]))
console.log("Numarul elementelor este: ", deepCount([[[[[[[[[]]]]]]]]]))