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
// router.post("/", auth, addBlog);
// router.put("/:id", auth, updateBlog);
// router.delete("/:id", auth, deleteBlog);
router.get("/", getAllBlogs);
// router.get("/:id, getBlog");

router.post("/", addBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
