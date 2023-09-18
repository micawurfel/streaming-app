const VideoRepository = require("./video.repository");

class VideoService {
  videoRepository = new VideoRepository();

  async getAllVideos() {
    return await this.videoRepository.getAllVideos();
  }
}

module.exports = new VideoService();
