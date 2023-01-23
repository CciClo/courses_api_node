const Categories = require("../models/categories.models");
const Courses = require("../models/courses.model");
const CoursesCategories = require("../models/coursesCategories.model");
const Videos = require("../models/videos.model");

class CoursesServices {

    static async getAll(){
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async withCoursesAndVideos(){
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Categories,
                        as: "categories",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    },
                    {
                        model: Videos,
                        as:"videos",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async create(course) {
        try {
            const result = await Courses.create(course);
            return result
        } catch (error) {
            throw error;
        }
    };

    static async update(id, course){
        const updateCourse = {};

        course.description && (updateCourse.description = course.description)

        try {
            const result = await Courses.update(updateCourse, {where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    };

};


module.exports = CoursesServices;