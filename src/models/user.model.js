const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
        value:{
            isEmail: true
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Users;