const { Router } = require("express");
const { createCourse, getAllCourses, getAllCoursesWithCategoriesAndVideos, updateCourses } = require("../controllers/courses.controllers");
const authMiddleware = require("../middlwares/auth.middleware");


const router = Router();

router.get('/courses', /*authMiddleware,*/ getAllCourses);
router.get('/courses/cv', getAllCoursesWithCategoriesAndVideos);
router.post('/courses', authMiddleware,createCourse);
router.put('/courses/:id', authMiddleware, updateCourses);

module.exports = router;