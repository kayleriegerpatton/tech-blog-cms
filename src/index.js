// EXTERNAL IMPORTS
require("dotenv").config();
const express = require("express");
const expressSession = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(
  expressSession.Store
);
const expressHandlebars = require("express-handlebars");
const path = require("path");

// INTERNAL IMPORTS
const sequelize = require("./config/connection");
const routes = require("./routes");
const logger = require("./middlewares/logger");

// declare port
const PORT = process.env.PORT || 3000;
const app = express();

// session config
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    // 24 hours
    maxAge: 86400000,
  },
  resave: false,
  // false or true?
  saveUninitialized: true,
  store: new SequelizeStore({
    // use same connected db 'sequelize'
    db: sequelize,
  }),
};

app.use(expressSession(session));

// create handlebars instance
const handlebars = expressHandlebars.create({});

// MIDDLEWARES
// use handlebars as tmeplate engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
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
