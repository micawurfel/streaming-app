const videoService = require('./video.service')

class VideoController {
  async getAllVideos (req, res) {
    try {
      const videos = await videoService.getAllVideos()
      res.status(200).json(videos)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async getVideoById (req, res) {
    try {
      const { id } = req.params
      const oneVideo = await videoService.getVideoById(id)
      res.status(200).json(oneVideo)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async createVideo (req, res) {
    try {
      const { title, description, author, url } = req.body
      const result = await videoService.createVideo({ title, description, author, url })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async updateVideo (req, res) {
    try {
      const { id } = req.params
      const { title, description, author, url } = req.body
      const newVideo = await videoService.updateVideo(id, { title, description, author, url })
      res.status(200).json(newVideo)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async deleteVideo (req, res) {
    try {
      const { id } = req.params
      const video = await videoService.deleteVideo(id)
      res.status(200).json(video)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new VideoController()
