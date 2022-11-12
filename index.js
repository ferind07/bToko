const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/index");

app.use("/", routes);

app.get("/coba", (req, res) => {
  res.send("Hello World!");
});

var server = app.listen(8000, () => {
  console.log(`Example app listening on port ${server.address().port}`);
});
