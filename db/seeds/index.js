// import seed data
const seedUsers = require("./user-seeds");
// const seedBlogs = require("./blog-seeds");
// const seedComments = require("./comment-seeds");

const sequelize = require("../../src/config/connection");

const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

// sync database and seed all data
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n Database synced \n");

  //   await seedBlogs();
  //   console.log("\n Blogs seeded \n");

  //   await seedComments();
  //   console.log("\n Comments seeded \n");

  await seedUsers();
  console.log("\n Users seeded \n");

  process.exit(0);
};

seedAll();
