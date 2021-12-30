// import models
// const Blog = require("./Blog");
// const Comment = require("./Comment");
const User = require("./User");

// ASSOCIATIONS
// blog belongs to User
// Blog.belongsTo(User, {
//   foreignKey: "user_id",
// });
// // user has many blogs
// User.hasMany(Blog, {
//   foreignKey: "user_id",
// });

// // comment belongs to blog
// Comment.belongsTo(Blog, {
//   foreignKey: "blog_id",
// });
// // blog has many comments
// Blog.hasMany(Comment, {
//   foreignKey: "blog_id",
// });

// // comment belongs to user
// Comment.belongsTo(User, {
//   foreignKey: "user_id",
// });
// // user has many comments
// User.hasMany(Comment, {
//   foreignKey: "user_id",
// });

module.exports = { User };
