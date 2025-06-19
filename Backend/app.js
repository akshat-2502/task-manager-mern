const express = require("express");
const app = express();
require("./connection/connection");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(1000, () => {
  console.log("Server Started");
});
