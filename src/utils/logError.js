const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

const logError = (
  type = "Server Error",
  message = "Sorry, something went wrong!"
) => {
  console.log(`[ERROR!]: ${type} | ${message}`.fail);
};

module.exports = logError;
