// import User model
const { User } = require("../../src/models");

const userData = [
  {
    username: "jenLawrence",
    password: "GIRLonfIre",
  },
  {
    username: "boywhoLIVED",
    password: "0731wizz",
  },
  {
    username: "peculiarPort",
    password: "peregrine10",
  },
  {
    username: "BloomingEM",
    password: "@irQu33n",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
