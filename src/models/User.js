// external imports
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// internal imports
const sequelize = require("../config/connection");
const hashPassword = require("../hooks/hashPassword");

class User extends Model {
  // method to check password at login
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);

    return isValid;
  }
}

const attributes = {
  id: {
    // type: DataTypes.UUID,
    // defaultValue: DataTypes.UUIDV4,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 64],
      // 8-64 characters; letters, numbers, special characters
      is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
    },
  },
};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

User.init(attributes, options);

module.exports = User;
