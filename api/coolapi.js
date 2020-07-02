const express = require("express");
const router = express.Router();
const coolioObj = require("../models/CoolModel");

router.post("/signup", (request, response) => {
  const coolPerson = new coolioObj({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  coolPerson
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
