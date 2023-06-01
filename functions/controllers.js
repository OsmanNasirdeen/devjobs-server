const data = require("../data.json");

const getAllData = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(201).json({ success: true, length: data.length, data: data });
};

const getSpecificData = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { categoryName } = req.params;
  const filteredData = data.filter((item) => {
    // uppercase of categoryName to allow case-insensitive includes search
    const upperCategoryName = categoryName.toUpperCase();
    return item.position.toUpperCase().includes(upperCategoryName);
  });
  res
    .status(201)
    .json({ success: true, length: filteredData.length, data: filteredData });
};

const getDataByNameLocation = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { position, location } = req.query;
  if (!position || !location) {
    return res
      .status(201)
      .json({ success: true, length: data.length, data: data });
  }
  const filteredData = data.filter((item) => {
    // uppercase both to allow case-insensitive includes search
    const upperPosition = position.toUpperCase();
    const upperLocation = location.toUpperCase();
    return (
      item.position.toUpperCase().includes(upperPosition) &&
      item.location.toUpperCase() === upperLocation
    );
  });

  res
    .status(201)
    .json({ success: true, length: filteredData.length, data: filteredData });
};

module.exports = { getAllData, getSpecificData, getDataByNameLocation };
