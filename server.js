const express = require("express");
const app = express();
const coolapi = require("./api/coolapi");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DB_ACCESS, { useUnifiedTopology: true }, () => {
  console.log("DB connected");
});

app.use(express.json());

app.use("/api/coolapi", coolapi);

app.listen(3000, () => {
  console.log("server is running");
});
