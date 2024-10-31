const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db/connection")

const Like = db.define("Like", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Like;