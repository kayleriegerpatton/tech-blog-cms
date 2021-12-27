const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");

class Blog extends Model {}

const attributes = {};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "blog",
};

Blog.init(attributes, options);

module.exports = Blog;
