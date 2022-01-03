const { Router } = require("express");

// import controller fns
const { login, signup, logout, addBlog } = require("../../controllers/auth");

// further routes
// const blogRoutes = require("./blog-routes");

const router = Router();

//  '/auth' endpoints
router.post("/login", login);
router.post("/signup", signup);
// router.use("/blog", blogRoutes);
// router.post("/create-blog", addBlog);
router.post("/logout", logout);

module.exports = router;
