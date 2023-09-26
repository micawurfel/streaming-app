const { connectDB } = require('../database/config')
const Video = require('../database/models/video')

class VideoRepository {
  constructor () {}

  async create (input) {
    return await Video.create(
      input
    )
  }
  async getAllVideos () {
    const db = await this.getDbClient()
  }
}

module.exports = VideoRepository
