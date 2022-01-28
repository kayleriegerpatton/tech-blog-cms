const { Router } = require("express");
const {
  addBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
} = require("../../controllers/api/blogs");

const router = Router();

// /api/blogs endpoints
router.get("/", getAllBlogs);
router.post("/", addBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
