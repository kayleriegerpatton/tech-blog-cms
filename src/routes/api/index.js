const { Router } = require("express");

// THESE ARE FAILING TO REQUIRE
const blogRoutes = require("./blogs");
const commentRoutes = require("./comments");

const router = Router();

//  '/api' endpoints
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
