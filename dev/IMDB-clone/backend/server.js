const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./database/config/connection')


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
require('dotenv').config()
connectDB()


const port = process.env.port || 3001



app.listen(3000,()=> console.log(`listening on port: ${port}`))