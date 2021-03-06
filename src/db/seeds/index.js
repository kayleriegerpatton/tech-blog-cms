// import seed data
const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../../config/connection");

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
  console.log("\n Database synced \n".success);

  await seedUsers();
  console.log("\n Users seeded \n".success);

  await seedBlogs();
  console.log("\n Blogs seeded \n".success);

  await seedComments();
  console.log("\n Comments seeded \n".success);

  process.exit(0);
};

seedAll();
