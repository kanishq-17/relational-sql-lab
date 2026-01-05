const fs = require("fs");
const path = require("path");

const readJSON = (relativePath) => {
  const filePath = path.join(__dirname, "..", relativePath);
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

module.exports = readJSON;
