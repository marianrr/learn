const http = require("http")
const fs = require("fs")
const PORT = 5000
const kool = (lo) => {
    if (lo === "/") {
        path = "index.html"
        content = "text/html"
    }

    if (lo === "/poza.png") {
        path = "poza.png"
        content = "image/png"
    }

    // if (lo === "/") {
    //     path = ""
    //     content = ""
    // }
}
const server = http.createServer((req, res) => {
   kool(req.url)
    let miau = fs.readFileSync(path)
    console.log("Serverul este http://localhost:5000 .")
    res.status = 200
    res.setHeader("Content-Type", content)
    res.end(miau)



})

server.listen(PORT, () => console.log("Listening on port: ", PORT, " ."))