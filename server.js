const express = require("express");
const app = express();
const coolapi = require("./api/coolapi");

app.use("/api/coolapi", coolapi);

app.listen(3000, () => {
  console.log("server is running");
});
