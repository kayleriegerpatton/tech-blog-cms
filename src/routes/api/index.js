const { Router } = require("express");

const blogRoutes = require("./blogs");
const commentRoutes = require("./comments");

const router = Router();

//  '/api' endpoints
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
