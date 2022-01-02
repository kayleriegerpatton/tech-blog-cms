// import Comment model
const { Comment } = require("../../models");

const commentData = [
  {
    content:
      "I hated Javascript when I first learned it! But now it's not so bad.",
    blog_id: "1",
    user_id: 3,
  },
  {
    content:
      "I had no idea that's what CSS stood for, thanks! I really enjoy playing with CSS styling.",
    blog_id: "2",
    user_id: 3,
  },
  {
    content:
      "APIs can be fun to setup and Postman make testing routes SOO much simpler. If you're not using Postman, give it a try!",
    blog_id: "5",
    user_id: 3,
  },
  {
    content:
      "I've always used Insomnia, but will give Postman a try for my next API project. Thanks!",
    blog_id: "5",
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
