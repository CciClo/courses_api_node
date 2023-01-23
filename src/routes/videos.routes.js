const { Router } = require("express");
const { createVideo, deleteVideo } = require("../controllers/videos.controllers");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();

router.post('/videos/:courseId', authMiddleware, createVideo);
router.delete('/videos/:id', authMiddleware, deleteVideo);


module.exports = router;