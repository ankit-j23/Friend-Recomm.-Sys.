const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type: String,
        require: true,
        unique : true
    }
  });

  const User = mongoose.model('user' , userSchema);
  module.exports = User;