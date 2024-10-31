const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db/connection")

const Profile = db.define("Profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
})

module.exports = Profile;