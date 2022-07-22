const express = require("express");
const app = express();
let globalObj = [
  {
    id: 1,
    name: "Akshat",
    email: "abc@gmail.com",
  },
];

console.log(globalObj);

const cors = require("cors");
app.use(cors());

app.get("/employee", (req, res) => {
  res.send("<h1>where my data<h1>");
});

app.post("/employee", (req, res) => {
  console(res);
});
const port = 5000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
// /Users/appperfect/Desktop/ProJect-1/server/express.js
