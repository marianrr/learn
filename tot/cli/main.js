const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Insert the array: ", arr => {
let so = arr.split(",")
console.log(so)
    console.log("The array is: ", so.map(num => num*2), " .")
rl.close()
})
