const express = require("express");
const bodyParser = require("body-parser");

const registerRoute = require('./routes/register')
const userRoute = require('./routes/users')
const loginRoute = require('./routes/login')

const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRoute)
app.use('/users', userRoute)
app.use('/login', loginRoute)

app.listen(port, () => {
  console.log(`Server started at port : ${port}`);
});
