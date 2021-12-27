const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");

class User extends Model {}

const attributes = {
  id: {
    type: DataTypes.UUIDV4,
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
