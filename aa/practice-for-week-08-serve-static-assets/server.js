const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  function so(file, header) {

    const body = fs.readFileSync(file)
    res.statusCode = 200
    res.setHeader("Content-Type", header)
    res.end(body)
  }

  if (req.method === "GET" && req.url === "/") so("index.html", "text/html")
  else if (req.method === "GET" && req.url === "/static/css/application.css") so("assets/css/application.css", "text/css")
  else if (req.method === "GET" && req.url === "/static/images/dog.jpg") so("assets/images/dog.jpg", "image/jpeg")
  else {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("This is the shit...")
  }
})

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));