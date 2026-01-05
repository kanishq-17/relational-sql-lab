const express = require("express");
const sqlRoutes = require("./routes/sql.routes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "RelationalSQL Lab API running",
  });
});

app.use("/api/sql", sqlRoutes);

module.exports = app;
