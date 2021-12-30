const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

const attributes = {
  id: {
    //   confirm UUID data type
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blog_id: {
    //   confirm UUID data type
    type: DataTypes.UUIDV4,
    references: {
      model: "blog",
      key: "id",
    },
  },
  user_id: {
    //   confirm UUID data type
    type: DataTypes.UUIDV4,
    references: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

Comment.init(attributes, options);

module.exports = Comment;
