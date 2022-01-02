// import Blog model
const { Blog } = require("../../models");

const blogData = [
  {
    title: "Jumping JavaScript!",
    content: "Javascript Javascript Javascript...",
    user_id: 1,
  },
  {
    title: "C-S-What?",
    content: "CSS stands for Cascading Style Sheets...",
    user_id: 1,
  },
  {
    title: "HTML schmaytch-TML",
    content:
      "HTML is the standard markup language for web browsers. It provides the structure, or outline, for the content...",

    user_id: 2,
  },
  {
    title: "All Aboard Express.js!",
    content:
      "Express.js is an open source software and, many would say, the de factor server framework for Node.js... ",
    user_id: 4,
  },
  {
    title: "Application Programming Interfaces (API) and Postman",
    content:
      "The Postman API platform is designed for building and collaborating with API development...",
    user_id: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
