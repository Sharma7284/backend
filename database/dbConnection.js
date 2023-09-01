const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'express'
})

conn.connect((error) => {
    if(error){
        console.log(`Connection with database failed...`)    
    }

    console.log(`Conntection with database successfully...`)

})

module.exports = conn