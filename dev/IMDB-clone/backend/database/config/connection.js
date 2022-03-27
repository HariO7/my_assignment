const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async() => {
    try {
        let db = process.env.db_url
        await mongoose.connect(db)
        console.log('connected to database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;