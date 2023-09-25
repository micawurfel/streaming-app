const express = require('express')
const router = express.Router()
const Video = require('../modules/database/models/video')
// const VideoController = require('../modules/video/video.controller')

// router.get('/videos', [], VideoController.getAllVideos)
// router.get('/videos/:videoId', [], VideoController.getByVideoById)

// get ALL videos
router.get('/video', async (req, res) => {
  const videos = await Video.find()
  res.json(videos)
})

// get ONE video
router.get('/video/:id', async (req, res) => {
  const { id } = req.params
  const oneVideo = await Video.findById(id)
  res.json(oneVideo)
})

// create video
router.post('/video/post', async (req, res) => {
})

module.exports = router
