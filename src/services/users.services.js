const Courses = require("../models/courses.model");
const Users = require("../models/user.model");
const UsersCourses = require("../models/usersCourses.model");


class UsersServices {

    static async getById (id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: {
                    exclude: ["password","createdAt","updatedAt"]
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async getWithCourses(id) {
        try {
            // const result = await Users.findOne({
            //     where: {id},
            //     attributes: {
            //         exclude: ["password","createdAt","updatedAt"]
            //     },
            //     include: {
            //         model: UsersCourses,
            //         as: "purchased_course",
            //         include: {
            //             model: Courses,
            //             as: "course"
            //         }
            //     }
            // });
            const result = await Users.findOne({
                where: {id},
                attributes: {
                    exclude: ["password","createdAt","updatedAt"],
                },
                include: {
                    model: UsersCourses,
                    attributes: ["id"],
                    as: "courses",
                    include: {
                        model: Courses,
                        as: "course",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };


    static async create(body) {
        try {
            const result = await Users.create(body);
            return result;

        } catch (error) {
            throw error;
        }
    };

    static async addCourseToUser(user_id, course_id){
        const uc = {user_id, course_id};
        try {
            // console.log(uc);
            const result = await UsersCourses.create(uc);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, user) {
        try {
            
            const result = await Users.update(user, {where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    };


};


module.exports = UsersServices;