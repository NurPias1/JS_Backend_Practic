const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// circle
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const result = Math.PI * radius;
  res.send(`your triangle result is ${result}`);
});
// triangle
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
// app.post("/triangle", (req, res) => {
//   const base = req.body.base;
//   const height = req.body.height;
//   const area = 0.5 * height * base;
//   res.send(`your triangle result is ${area}`);
// });
app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of Triangle is : ${area}</h2>`);
});



app.listen(port, () => {
  console.log(`ok ok ok ok ok ok ok ok  `);
});
