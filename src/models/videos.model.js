const { DataTypes } = require("sequelize");
const db = require("../utils/database");



const Videos = db.define("videos", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     isUrl: true
        // }
    },
});

module.exports = Videos;