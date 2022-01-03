const { Router } = require("express");

const { updateBlog, deleteBlog } = require("../../controllers/auth/blogs");
const { getAllBlogs } = require("../../controllers/api/blogs");

const router = Router();

// /api/blogs endpoints

router.get("/", getAllBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
