const VideoRepository = require('./video.repository')

class VideoService {
  videoRepository = new VideoRepository()

  async create(input){
    return await this.videoRepository.create(input)
  }

  async getAllVideos () {
    return await this.videoRepository.getAllVideos()
  }
}

module.exports = new VideoService()
