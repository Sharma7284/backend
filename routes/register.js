const express = require("express");
const router = express.Router();

const db = require("../database/dbConnection");

// Create a new user
router.post("/", (req, res) => {
  const {
    registration_email,
    registration_username,
    registration_password,
    registration_created_at,
    registration_email_status,
  } = req.body;

  if (
    !registration_email ||
    !registration_username ||
    !registration_password ||
    !registration_created_at ||
    !registration_email_status
  ) {
    res.send({ error: "Username, Password And Email is required fields..." });
  }

  if (registration_username.length > 20) {
    res.send({ error: "Username should not be greater then 20 character..." });
  }

  if (registration_password.length < 8) {
    res.send({ error: "Password has minimum 8 character..." });
  }

  const dbQuery = "SELECT * FROM user_registration"

  db.query(dbQuery, (error, result) => {

    if(error){
        res.status(404).send({message : 'Query has been failed...'})
        return
    }

    if(result){
        res.status(200).send({message : 'Successfully add new records...'})
        return
    }
  })

  res.status(200).json(`Registration API Created... : ${req.body}`);
});


module.exports = router;
