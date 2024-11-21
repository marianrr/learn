const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }

    if (req.method === "GET" && req.url === "/") {
      const body = "Dog Club";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(body);
    }

    if (req.method === "GET" && req.url === "/dogs") {
      const body = "Dogs index";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(body);
    }

    // if (req.method === "GET") {
    //   const urlParts = req.url.split("/");
    //   if (urlParts.length === 3 && urlParts[1] === "dogs") {
    //     const dogId = urlParts[2];
    //     const body = `Dog details for dogId: ${dogId}`;
    //     res.statusCode = 200;
    //     res.setHeader("Content-Type", "text/plain");
    //     return res.end(body);
    //   }
    // }

    if (req.method === "GET" && req.url.startsWith("/dogs/new")) {
      const body = "Dog create form page";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(body);
    }

    // if (req.method === "POST" && req.url === "/dogs") {
    //   const newDogId = getNewDogId();
    //   res.statusCode = 302;
    //   res.setHeader("Location", `/dogs/${newDogId}`);
    //   return res.end();
    // }

    // if (req.method === "POST" && req.url.startsWith("/dogs/")) {
    //   const urlParts = req.url.split("/");
    //   const dogId = urlParts[2];
    //   res.statusCode = 302;
    //   res.setHeader("Location", `/dogs/${dogId}`);
    //   return res.end();
    // }

    // if (req.method === "GET" && req.url.startsWith("/dogs/")) {
    //   const urlParts = req.url.split("/");
    //   const dogId = urlParts[2];
    //   if (urlParts.length === 4 && urlParts[3] === "edit") {
    //     const body = `Dog edit form page for dogId: ${dogId}`;
    //     res.statusCode = 200;
    //     res.setHeader("Content-Type", "text/plain");
    //     return res.end(body);
    //   }
    // }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));