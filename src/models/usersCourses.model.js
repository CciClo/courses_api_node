const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const UsersCourses = db.define("users_courses", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_complete:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});

module.exports = UsersCourses;