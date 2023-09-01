const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 8081

app.listen(port, () => {
    console.log(`Server started at port : ${port}`)
})