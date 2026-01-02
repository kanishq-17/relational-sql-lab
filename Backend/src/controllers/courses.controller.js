const getAllCourses = (req, res) => {
  res.json({
    message: "Fetched All Courses",
    data: [
      {
        id: 1,
        title: "PostgreSQL Basic",
        level: "Beginner",
      },
      {
        id: 2,
        title: "Redux Toolkit",
        level: "Advanced",
      },
    ],
  });
};


module.exports = getAllCourses