const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

// app.get("/", (req, res) => {
//   //   const id = req.query.id;
//   //     const name = req.query.name;
//   // const { id, name } = req.query;
//   // res.send(`student id ${id} and student Name ${name}`);
// });

// post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/registationform.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  const gender = req.body.gender;
  res.send(`hi ${fullName} your age is ${age} , you are a ${gender}`);
});

// start server

app.listen(port, () => {
  console.log(`server is ready http://localhost:${port}`);
});
