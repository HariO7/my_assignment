const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const producerSchema = new Schema({
    Name: String,
    Gender: String,
    DOB: String,
    Bio: String
})

module.exports = mongoose.model('Producer',producerSchema);