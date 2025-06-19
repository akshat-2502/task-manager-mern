const express = require("express");
const app = express();
app.use(express.json());

const auth = require("./routes/auth");
require("./connection/connection");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1", auth);

app.listen(1000, () => {
  console.log("Server Started");
});
