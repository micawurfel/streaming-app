const express = require('express')
const router = express.Router()
const VideoController = require('../modules/video/video.controller')

router.get('/all', [], VideoController.getAllVideos)
router.get('/:id', [], VideoController.getVideoById)
router.post('/', [], VideoController.createVideo)
router.put('/:id', [], VideoController.updateVideo)
router.delete('/:id', [], VideoController.deleteVideo)

module.exports = router
