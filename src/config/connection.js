require("dotenv").config();

const Sequelize = require("sequelize");
const { sequelize, sequelize } = require("../models/Blog");

// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;

// const options = {
//   host: DB_HOST,
//   dialect: "mysql",
//   port: 3306,
//   logging: false,
// };

// const sequelize = process.env.JAWSDB_UR    ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, options);

const sequelize = process.env.JAWSDB_URL
  ? new sequelize(process.env.JAWSDB_URL)
  : new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: DB_HOST,
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
