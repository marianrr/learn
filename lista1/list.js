
const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const file = "notes.txt"
const fread = (file) => {
    fs.readFile(file, "utf8", (err, notes) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log("Notes are: ", notes)
    })
}

const fappend = (file, note) => {
    fs.appendFile(file, `\n${note}`, "utf8", err => {
        if (err) {
            console.log(err.message)
            return
        }
    })
}

const lol = () => {
rl.question("Insert a note: ", note => {
    console.log("The note is: ", note)
    fappend(file, note)

    rl.question("Insert another note? yes/no: ", answer => {
        if (answer === 'yes') lol()
        
        if (answer === 'no') {
            console.log("Goodbye!")
            fread(file)
            rl.close()
        }
    })
})
}

lol()