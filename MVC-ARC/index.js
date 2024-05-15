const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`home`);
});

// server
app.listen(port, () => {
  console.log(`server in running http://localhost${port}`);
});
 