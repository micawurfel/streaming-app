const VideoRepository = require('./video.repository')

class VideoService {
  videoRepository = new VideoRepository()

  async getAllVideos () {
    return await this.videoRepository.getAllVideos()
  }

  async getVideoById (id) {
    return await this.videoRepository.getVideoById(id)
  }

  async createVideo (input) {
    return await this.videoRepository.createVideo(input)
  }

  async updateVideo (id, input) {
    return await this.videoRepository.updateVideo(id, input)
  }

  async deleteVideo (id) {
    return await this.videoRepository.deleteVideo(id)
  }
}

module.exports = new VideoService()
