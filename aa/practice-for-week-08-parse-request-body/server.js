const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;
const http = require("http")
server = http.createServer((req, res) => {
console.log(req.method, req.url)
res.setHeader("Content-Type", "text/html")
res.statusCode = 200







res.end()
})

server.listen(5000, () => {
    console.log("Successfully started the server on port 5000")
})

module.exports = { server };