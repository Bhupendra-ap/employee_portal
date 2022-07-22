const mysql = require("mysql");

const db = mysql.createPool({
  host: "Localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "employee_details",
});

module.exports = db;
