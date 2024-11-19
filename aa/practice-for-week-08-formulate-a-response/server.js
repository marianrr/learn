const http = require("http")
const PORT = 5000
const server = http.createServer((request, response) => {
const body = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>
`
response.statusCode = 200
    response.setHeader("Content-Type", "text/html")
response.end(body)

}
)

server.listen(PORT, () => {
    console.log("Listening on port: ", PORT, ".", "http://localhost:5000")
})