const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Insert new note: \n", note => {
    console.log("The note is: ", note, ".")


    fs.appendFile("aa.js", "\n" + note, "utf8", err => {
        if (err) {
            console.log(err)
            return
        }

        fs.readFile("aa.js", "utf8", (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            console.log("The notes are: \n", data)
        })
        rl.close()
    })

})


