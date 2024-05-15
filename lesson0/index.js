const http = require("http");
const fs = require("fs");
const port = process.env.port;

const server = http.createServer((req, res) => {
  const requesthandle = (fielLocation, statusCode) => {
    fs.readFile(fielLocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    requesthandle("./View/home.html", 202);
  } else if (req.url === "/About") {
    requesthandle("./View/About.html", 202);
  } else {
    requesthandle("./View/Error.html", 420);
  }
});

server.listen(port, () => {
  //   console.log(` localhost:  ${hostname}:${port}`);
});
