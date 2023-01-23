const Categories = require("./categories.models");
const Courses = require("./courses.model");
const CoursesCategories = require("./coursesCategories.model");
const Users = require("./user.model");
const UsersCourses = require("./usersCourses.model");
const Videos = require("./videos.model");


const initModels = () => {

    // Users.hasMany(Courses, {as:"courses", foreignKey:"user_id"});
    // Courses.belongsTo(Users, {as:"author", foreignKey:"user_id"});

    Users.hasMany(UsersCourses, {as:"courses", foreignKey: "user_id"});
    UsersCourses.belongsTo(Users, {as:"instructor", foreignKey:"user_id"});
    Courses.hasMany(UsersCourses, {as:"author", foreignKey:"course_id"});
    UsersCourses.belongsTo(Courses, {as:"course", foreignKey:"course_id"});


    Courses.hasMany(Categories, { as:"categories", foreignKey:"course_id"});
    Categories.belongsTo(Courses, {as:"course", foreignKey: "course_id"})

    Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id"})
    Videos.belongsTo(Courses, {as: "course", foreignKey: "course_id"});

};

module.exports = initModels;