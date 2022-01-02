const bcrypt = require("bcrypt");

const hashPassword = async (data) => {
  //   hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // declare new data.password value as hashed password
  data.password = hashedPassword;

  return data;
};

module.exports = hashPassword;
