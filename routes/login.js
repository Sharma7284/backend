const express = require("express");
const router = express.Router();

const { loginGet, loginPost } = require("../controllers/loginController");

const db = require("../database/dbConnection");

router.get("/", (req, res) => {
  res.send({ success: "LOGIN API..." });
});

router.post("/", loginPost);

module.exports = router;
