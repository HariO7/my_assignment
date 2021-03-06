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
const actorRouter = require('./routes/actor.route')
const movieRouter = require('./routes/movie.route')
const producerRouter = require('./routes/producer.route')

app.use('/Actor',actorRouter)
app.use('/Producer',producerRouter)
app.use('/Movie',movieRouter)


app.listen(port,()=> console.log(`listening on port: ${port}`))