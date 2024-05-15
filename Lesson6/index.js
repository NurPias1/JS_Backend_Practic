const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  const handleRequrest = (fileLocation, statusCode) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRequrest("./Views/index.html", 200);
  } else if (req.url === "/about") {
    handleRequrest("./Views/about.html", 200);
  } else if (req.url === "/contact") {
    handleRequrest("./Views/contact.html", 200);
  } else if (req.url === "/abountsecound") {
    handleRequrest("./Views/abountsecound.html", 200);
  } else {
    handleRequrest("./Views/errorPage.html", 404);
  }
});

myServer.listen(port, hostname, () => {
  console.log(`my serve  http://${hostname}:${port}`);
});
