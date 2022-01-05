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
const helpers = require("./helpers");

// declare port
const PORT = process.env.PORT || 3000;
const app = express();

// session config
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    // 24 hours
    // maxAge: 86400000,

    // 9 minutes
    maxAge: 540000,

    // 3 minutes
    // maxAge: 180000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    // use same connected db 'sequelize'
    db: sequelize,
  }),
};

app.use(expressSession(sessionOptions));

// create handlebars instance
const handlebarsOptions = { helpers };
const handlebars = expressHandlebars.create(handlebarsOptions);

// MIDDLEWARES
// use handlebars as template engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

// initialize db connection and server
const init = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("[INFO] Database connected.".success);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`.message);
    });
  } catch (error) {
    console.log(`[ERROR] Database connection failed: ${error.message}`.fail);
  }
};

init();
