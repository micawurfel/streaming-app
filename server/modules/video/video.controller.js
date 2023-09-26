const videoService = require('./video.service')

class VideoController {
  async getAllVideos (req, res) {
    try {
      const videos = await videoService.getAllVideos()
      res.status(200).json({ videos })
    } catch (error) {
      res.status(500).send('Server Error')
    }
  }

  async getByVideoById (req, res) {
    // Implement logic to return one video
    // const id = req.params.id https://www.geeksforgeeks.org/express-js-req-params-property/
    res.status(200).json({ video: {} })
  }

  async create (req, res) {
    try {
      const {title, description, author, url} = req.body
      const result = await videoService.create({title, description, author, url})
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }
}

module.exports = new VideoController()
