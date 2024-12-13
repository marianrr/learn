const readline = require("readline")
const fs = require("fs")
const file = "notes.txt"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const readFile = (file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
}

const appendFile = (file, note) => {
    fs.appendFile(file, `\n${note}`, "utf8", err => {
        if (err) {
            console.log(err)
            return
        }
    })

}

const miau = () => {
    rl.question("Insert note ", note => {
        appendFile(file, note)
        rl.question("Insert another note? yes/no ", answer => {
            if (answer === "yes") miau()
            if (answer === "no") {
                console.log("Goodbye!")
                readFile(file)
                rl.close()
            }
        })
    })


}

miau()