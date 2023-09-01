const express = require('express')
const router = express.Router()

const db = require('../database/dbConnection')

router.post('/', (req, res) => {

    res.status(200).send(`Registration API Created...`)

})

module.exports = router
