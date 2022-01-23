// import User model
const { User } = require("../../models");

const userData = [
  {
    email: "jenLawrence@email.com",
    username: "jenLawrence",
    password: "GIRL0nf*re",
  },
  {
    email: "boywhoLIVED@hotmail.com",
    username: "boywhoLIVED",
    password: "0731w!zZ",
  },
  {
    email: "peculiarPort@gmail.com",
    username: "peculiarPort",
    password: "Peregrine!0",
  },
  {
    email: "BloomingEM@yahoo.com",
    username: "BloomingEm",
    password: "@irQu33n",
  },
];

const seedUsers = async () => {
  const promises = userData.map((user) => User.create(user));
  await Promise.all(promises);
};

module.exports = seedUsers;
