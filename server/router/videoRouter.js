const express = require("express");
const router = express.Router();
const VideoController = require("../modules/video/video.controller");

router.get("/videos", [], VideoController.getAllVideos);
router.get("videos/:videoId", [], VideoController.getByVideoById);

module.exports = router;
