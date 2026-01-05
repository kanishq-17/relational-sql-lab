const express = require("express");
const router = express.Router();

const {
  getSqlTopics,
  getSqlTopicByName,
} = require("../controllers/sql.controller");

router.get("/topics", getSqlTopics);
router.get("/topic/:name", getSqlTopicByName);

module.exports = router;
