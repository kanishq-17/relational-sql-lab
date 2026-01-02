const express = require("express");
const router = express.Router();

const getAllCourses = require("../controllers/courses.controller");
router.get("/", getAllCourses);

module.exports = router;
