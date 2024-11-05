const readline = require("readline")

// create an interface where we can talk to the user

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// ask the user question

rl.question("where? ", answer => {
    // print the response
    console.log("you responded: " + answer)

    // close the interface
    rl.close()

})

console.log("DONE!");