const express = require("express"),
  bodyParser = require("body-parser"),
  mysql = require("mysql");

const db = require("./database");

const app = express();

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const changeToObject = (result) => {
  const obj = {};

  for (let index = 0; index < result.length; index++) {
    obj[result[index].email] = result[index];
  }

  return obj;
};

app.get("/employee", (req, res) => {
  const selectquery = "SELECT * FROM user";
  db.query(selectquery, (error, result) => {
    const obj = changeToObject(result);

    res.send(obj);
  });
});

app.post("/employees", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const password = req.body.pass;

  const sqlInsert =
    "INSERT INTO user(email,username,password,state,city,pincode) VALUES(?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [email, username, password, state, city, pincode],
    (error, result) => {
      console.log(error);
    }
  );

  res.status(200).send("hello");
});

app.put("/employee", (req, res) => {
  const reqData = req.body;

  let obj = {};

  const Modifyemail = reqData.variableEmail;
  const UpdatedVariableValue = reqData.variableValue;
  const variablename = reqData.variablename;

  const updateQuery = `UPDATE user SET ${variablename} = ? WHERE email=?`;

  db.query(
    updateQuery,
    [UpdatedVariableValue, Modifyemail],
    (error, result) => {
      console.log(error);
    }
  );

  res.status(200).send("Helllo");
});

app.delete("/employee", (req, res) => {
  let deleteEmail = req.body.empemail;

  const deleteQuery = "DELETE FROM user WHERE email = ?";
  db.query(deleteQuery, [deleteEmail], (error, result) => {
    console.log("Deleted error = ", error);
    console.log("Deleted result = ", result);
  });

  res.status(200).send("Deleted from db");
});
const port = 5001;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
// /Users/appperfect/Desktop/ProJect-1/server/express.js
