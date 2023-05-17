const express = require("express");
const app = express();
const port = 8000;

const data = require("./data.json");
app.get("/", (req, res) => {
  res.status(201).json({ success: true, data: data });
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
