const express = require('express')
const router = express.Router()
const VideoController = require('../modules/video/video.controller')

router.get('/videos', [], VideoController.getAllVideos)
router.get('/video/:id', [], VideoController.getVideoById)
router.post('/video', [], VideoController.createVideo)
router.put('/video/:id', [], VideoController.updateVideo)
router.delete('/video/:id', [], VideoController.deleteVideo)

module.exports = router
