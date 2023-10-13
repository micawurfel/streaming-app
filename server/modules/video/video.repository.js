const Video = require('../database/models/video')

class VideoRepository {
  async getAllVideos () {
    return await Video.find()
  }

  async getVideoById (id) {
    return await Video.findById(id)
  }

  async createVideo (input) {
    return await Video.create(input)
  }

  async updateVideo (id, input) {
    return await Video.findByIdAndUpdate(id, input, { new: true })
  }

  async deleteVideo (id) {
    return await Video.findByIdAndDelete(id)
  }
}

module.exports = VideoRepository
