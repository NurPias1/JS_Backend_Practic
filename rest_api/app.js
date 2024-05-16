const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/user.routes");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRouter);
// app.post("/users", creatUser);
//home routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

// wrong route
app.use((req, res, next) => {
  res.status(404).json({ massage: `route not found` });
});

// server not found
app.use((err, req, res, next) => {
  res.status(500).json({ massage: `Broken server` });
});
module.exports = app;
