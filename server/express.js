const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello ladies I'm here");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
