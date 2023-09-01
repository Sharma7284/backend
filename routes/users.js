const express = require('express')
const router = express.Router()

const db = require('../database/dbConnection')

router.get('/', (req, res) => {

    const dbQuery = "SELECT * FROM user_registration"

    db.query(dbQuery, (error, result) => {
        if(error){
            res.send({error : 'Results not found.'})
        }

        res.send({result})
    })

})

module.exports = router