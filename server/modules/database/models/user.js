const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    min: 6
  }
})

const User = model('User', UserSchema)

module.exports = User
