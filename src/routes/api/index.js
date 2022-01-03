const { Router } = require("express");

// import controller fns

// further routes
const blogRoutes = require("./blogs");
const commentRoutes = require("./comments");

const router = Router();

//  '/api' endpoints
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
