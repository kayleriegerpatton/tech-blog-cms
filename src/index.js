// EXTERNAL IMPORTS
require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");

// INTERNAL IMPORTS
const sequelize = require("./config/connection");
const routes = require("./routes");
const logger = require("./middlewares/logger");

// declare port
const PORT = process.env.PORT || 3000;

// create handlebars instance
const handlebars = expressHandlebars.create({});

// declare express server app
const app = express();

// MIDDLEWARES
// use handlebars as tmeplate engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

const init = async () => {
  await sequelize.sync({ force: false });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`.message);
  });
};

init();
