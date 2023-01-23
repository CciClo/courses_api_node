const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const CoursesCategories = db.define("courses_categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


module.exports = CoursesCategories;