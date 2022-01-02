// import User model
const { User } = require("../../models");

const userData = [
  {
    email: "jenLawrence@email.com",
    password: "GIRLonfIre",
  },
  {
    email: "boywhoLIVED@hotmail.com",
    password: "0731wizz",
  },
  {
    email: "peculiarPort@gmail.com",
    password: "peregrine10",
  },
  {
    email: "BloomingEM@yahoo.com",
    password: "@irQu33n",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
