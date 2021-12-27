const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");

class Comment extends Model {}

const attributes = {};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

Comment.init(attributes, options);

module.exports = Comment;
