const mongoose = require('mongoose')
const { Schema, model } = mongoose

const VideoSchema = new Schema({
  title: String,
  description: String,
  author: String,
  url: String
})

const Video = model('Video', VideoSchema)

module.exports = Video
