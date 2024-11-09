const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Give the string: ", str => {
    console.log("The string is: ", str.split(" ").join(" * ").toUpperCase())
    rl.close()
}
)