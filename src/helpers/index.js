const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("MMMM D, YYYY h:mm a");
};

const isUserComment = (user, commenter) => user === commenter;

module.exports = { formatDate, isUserComment };
