const videoService = require("./video.service");

class VideoController {
  async getAllVideos(req, res) {
    try {
      const videos = await videoService.getAllVideos();
      res.status(200).json({ videos });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }

  async getByVideoById(req, res) {
    // Implement logic to return one video
    // const id = req.params.id https://www.geeksforgeeks.org/express-js-req-params-property/
    res.status(200).json({ video: {} });
  }

  async addVideo(req, res) {}
}

module.exports = new VideoController();
