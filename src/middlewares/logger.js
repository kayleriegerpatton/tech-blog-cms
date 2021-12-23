const moment = require("moment");

const logger = (req, res, next) => {
  const { url, method } = req;
  const dateTime = moment().format("MM/DD/YY, h:mm:ssa");
  console.log(`${method} request made at "${url}" endpoint. ${dateTime}`);
  next();
};

module.exports = logger;
