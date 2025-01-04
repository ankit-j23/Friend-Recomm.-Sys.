const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/friend";

const connectToMongo = async () =>{
    mongoose.connect(mongoURI , await console.log('Connected To Mongo Successfully'));
}

module.exports = connectToMongo