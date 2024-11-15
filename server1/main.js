const http = require("http")
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write(`
        <ntml><body>
        <h1>one</h1>
        <p>dj guga la felipa</p>
        </body></html>
        `)
    console.log("it is now...")
    res.end()
})
function so () {
   console.log("Listen on port 5000. http://localhost:5000")
}
const PORT = 5000

server.listen(PORT, so)