const http = require("http")
const PORT = 5000
const server = http.createServer((req, res) => {
    console.log("dj mili")
res.status = 200
res.setHeader("Content-Type", "text/html")
res.write(`
    <html>
    <body>
<h1>this is h1</h1>
<p>this is paragraph.</p>

    </body>
    </html>

    `)
res.end()

})

const so = () => console.log('Listening on port 5000. http://localhost:5000')

server.listen(PORT, so)