const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const actorSchema = new Schema({
    Name: String,
    Gender: String,
    DOB: Date,
    Bio: String
})

module.exports = mongoose.model('Actor',actorSchema);