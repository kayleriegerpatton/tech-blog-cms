const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

const attributes = {
  id: {
    //   confirm UUID data type
    // type: DataTypes.UUID,
    // defaultValue: DataTypes.UUIDV4,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    // add validation?
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // add hook for hashing password beforeCreate
  },
};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
};

User.init(attributes, options);

module.exports = User;
