// external imports
require("dotenv").config();
const express = require("express");

// internal imports
const sequelize = require("./config/connection");
// const routes = require('./routes')
const logger = require("./middlewares/logger");

// setup express port
const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
// app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
