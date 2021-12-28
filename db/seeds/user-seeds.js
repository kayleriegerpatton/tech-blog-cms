// import User model
const { User } = require("../../src/models");

const userData = [
  {
    username: "kayleriegerpatton",
    password: "Password123",
  },
  {
    username: "andrewpatton",
    password: "Password456",
  },
  {
    username: "amypatton",
    password: "cysllc",
  },
  {
    username: "johnpatton",
    password: "karamelomeno",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
