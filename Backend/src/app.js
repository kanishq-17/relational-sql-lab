const express = require("express");
const logger = require("./middleware/logger.middleware");

const app = express();

app.use(express.json());

app.use(logger);

// Routes
const studentsRoutes = require("./routes/students.routes");
const coursesRoutes = require("./routes/courses.routes");

app.use("/api/students", studentsRoutes);
app.use("/api/courses", coursesRoutes);


module.exports = app