const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "relational_sql_lab",
  port: 5432,
});

module.exports = pool;
