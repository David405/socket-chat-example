const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String
},
  { timestamps: true }
)

const user = mongoose.model('user', userSchema)

module.exports = user