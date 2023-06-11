const data = require("../data.json");

const getAllData = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(201).json({ success: true, length: data.length, data: data });
};

const getDataByName = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { categoryName } = req.params;
  const filteredData = data.filter((item) => {
    // uppercase both variables to allow case-insensitive includes search
    const upperCategoryName = categoryName.toUpperCase();
    return item.position.toUpperCase().includes(upperCategoryName);
  });
  res
    .status(201)
    .json({ success: true, length: filteredData.length, data: filteredData });
};
const getDataByLocation = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { location } = req.params;
  const filteredData = data.filter((item) => {
    return item.location.toUpperCase() === location.toUpperCase();
  });
  res
    .status(201)
    .json({ success: true, length: filteredData.length, data: filteredData });
};

const getDataByContract = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { contract } = req.params;
  const filteredData = data.filter((item) => {
    return item.contract.toUpperCase() === contract.toUpperCase();
  });
  res
    .status(201)
    .json({ success: true, length: filteredData.length, data: filteredData });
};

const getDataByQueryStrings = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { position, location, contract } = req.query;

  if (!position && !location && !contract) {
    return res
      .status(201)
      .json({ success: true, length: data.length, data: data });
  }

  if (position && !location && contract) {
    const upperPosition = position.toUpperCase();
    const upperContract = contract.toUpperCase();
    const filteredData = data.filter((item) => {
      return (
        item.position.toUpperCase().includes(upperPosition) &&
        item.contract.toUpperCase() === upperContract
      );
    });
    return res
      .status(201)
      .json({ success: true, length: filteredData.length, data: filteredData });
  }
  if (position && location && !contract) {
    const upperPosition = position.toUpperCase();
    const upperLocation = location.toUpperCase();
    const filteredData = data.filter((item) => {
      return (
        item.position.toUpperCase().includes(upperPosition) &&
        item.location.toUpperCase() === upperLocation
      );
    });
    return res
      .status(201)
      .json({ success: true, length: filteredData.length, data: filteredData });
  }
  // filter for location and contract
  if (!position && location && contract) {
    const upperLocation = location.toUpperCase();
    const filteredData = data.filter((item) => {
      return (
        item.contract.toUpperCase() === contract.toUpperCase() &&
        item.location.toUpperCase() === upperLocation
      );
    });
    return res
      .status(201)
      .json({ success: true, length: filteredData.length, data: filteredData });
  }
  // if all params are provided
  if (position && location && contract) {
    const filteredData = data.filter((item) => {
      const upperPosition = position.toUpperCase();
      const upperLocation = location.toUpperCase();
      const upperContract = contract.toUpperCase();
      return (
        item.position.toUpperCase().includes(upperPosition) &&
        item.location.toUpperCase() === upperLocation &&
        item.contract.toUpperCase() === upperContract
      );
    });
    res
      .status(201)
      .json({ success: true, length: filteredData.length, data: filteredData });
  }
};

module.exports = {
  getAllData,
  getDataByName,
  getDataByLocation,
  getDataByContract,
  getDataByQueryStrings,
};
