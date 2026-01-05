const readJSON = require("../utils/readJSON");

const getSqlTopics = (req, res) => {
  const sqlTopicData = readJSON("data/sql/topics.json");
  res.json(sqlTopicData);
};

const getSqlTopicByName = (req, res) => {
  const { name } = req.params;

  try {
    const topicName = readJSON(`data/sql/${name}.json`);
    res.json(topicName);
  } catch (err) {
    res.status(404).json({
      message: "SQL topic not found",
    });
  }
};

module.exports = {
  getSqlTopics,
  getSqlTopicByName,
};
