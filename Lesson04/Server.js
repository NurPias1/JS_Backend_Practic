const { log } = require("console");
const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/plain" });
  res.write('helloe');
  res.end();
});

myServer.listen(port, hostname, () => {
    console.log(`new server link  http://${hostname}:${port} `);
});
