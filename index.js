const express = require("express");
const app = express();
const port = 8000;
const {
  getAllData,
  getSpecificData,
  getDataByNameLocation,
} = require("./functions/controllers");
app.get("/", getAllData);

app.get("/positions", getDataByNameLocation);

app.get("/category/:categoryName", getSpecificData);
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
