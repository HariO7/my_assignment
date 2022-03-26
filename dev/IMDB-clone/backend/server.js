const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.listen(3000,()=>{
    console.log('listening in port 3000')
})