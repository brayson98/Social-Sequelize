const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db/connection")

const Post = db.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Post;