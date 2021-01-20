const express = require("express");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 4000, function () {
  console.log("Server Running");
});
