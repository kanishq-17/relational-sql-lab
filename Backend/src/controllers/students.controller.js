const pool = require("../config/db");

const getAllStudents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");

    res.json({
      message: "Students fetched successfully",
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getAllStudents;
