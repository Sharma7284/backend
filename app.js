const express = require("express");
const bodyParser = require("body-parser");

const registerRoute = require('./routes/register')

const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRoute)

app.listen(port, () => {
  console.log(`Server started at port : ${port}`);
});
