const mongoose = require('mongoose')
const { Schema, model } = mongoose

const VideoSchema = new Schema({

})

const Video = model('Video', VideoSchema)

module.exports = Video
