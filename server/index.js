const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb = require('./db.js')
const empolyeeRoutes = require('./controllers/employee.controller')

const app = express()

//middleware
app.use(bodyParser.json())
app.use('/api/employees', empolyeeRoutes)

//connecting to mongoDb
connectDb()
    .then(()=>{
        console.log('db connected succeeded.');
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log(err))