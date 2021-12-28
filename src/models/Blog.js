const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");

class Blog extends Model {}

const attributes = {
  id: {
    //   confirm UUID data type
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.VARCHAR(70),
    allowNull: false,
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
  modelName: "blog",
};

Blog.init(attributes, options);

module.exports = Blog;
