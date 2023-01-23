const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Courses = db.define("courses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = Courses;