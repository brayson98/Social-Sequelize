const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db/connection")

const Comment = db.define("Comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});

module.exports = Comment;