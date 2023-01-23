const CoursesServices = require("../services/courses.services");


const getAllCourses = async (req,res) =>{
    try {
        const result = await CoursesServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    };

};

const getAllCoursesWithCategoriesAndVideos = async (req,res) => {
    try {
        const result = await CoursesServices.withCoursesAndVideos();
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    };
};

const createCourse = async (req, res) => {
    const course = req.body;

    try {
        
        const result = await CoursesServices.create(course);
        res.status(201).json(result);

    } catch (error) {
        res.status(401).json(error);
    };
};

const updateCourses = async (req,res) => {
    const {id} = req.params;
    const course = req.body;
    try {

        const result = await CoursesServices.update(id, course);
        res.json(result);
    } catch (error) {
        res.status(400).json({message:error.message});
    };
};

module.exports = {
    getAllCourses,
    getAllCoursesWithCategoriesAndVideos,
    createCourse,
    updateCourses
};