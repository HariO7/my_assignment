const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Name: String,
    Release: Date,
    Plot: String,
    Poster: String
})

module.exports = mongoose.model('Movie',movieSchema);
