const { Router } = require("express");
const auth = require("../../middlewares/auth");
const {
  addBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
} = require("../../controllers/api/blogs");

const router = Router();

// /api/blogs endpoints
router.get("/", getAllBlogs);
// router.get("/:id, getBlog");
router.post("/", addBlog);
router.put("/edit/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
