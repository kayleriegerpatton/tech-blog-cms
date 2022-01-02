const { Router } = require("express");

const { updateBlog, deleteBlog } = require("../../controllers/auth/blogs");
const commentRoutes = require("./comment-routes");

const router = Router();

// /auth/blog endpoints

router.use("/:id/comment", commentRoutes);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
