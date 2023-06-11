const express = require("express");
const app = express();
const port = 8000;
const {
  getAllData,
  getDataByName,
  getDataByLocation,
  getDataByContract,
  getDataByQueryStrings,
} = require("./functions/controllers");

app.get("/", getAllData);

app.get("/positions", getDataByQueryStrings);

app.get("/category/:categoryName", getDataByName);
app.get("/locations/:location", getDataByLocation);
app.get("/contracts/:contract", getDataByContract);
app.get("*", (req, res) => {
  res.status(404).send("ROUTE NOT FOUND!");
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
