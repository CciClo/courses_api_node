const VideosServices = require("../services/videos.services");

const createVideo = async (req, res) => {
    const video = req.body;
    const {courseId} = req.params;
    
    try {
        video.course_id = courseId;
        const result = await VideosServices.create(video);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deleteVideo = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await VideosServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error});
    }
};

module.exports = {
    createVideo,
    deleteVideo
}