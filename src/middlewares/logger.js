const moment = require("moment");
const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

const logger = (req, res, next) => {
  const { url, method } = req;
  const dateTime = moment().format("MM/DD/YY, h:mm:ssa");

  console.log(
    `${method} request made at "${url}" endpoint. ${dateTime}`.message
  );
  next();
};

module.exports = logger;
