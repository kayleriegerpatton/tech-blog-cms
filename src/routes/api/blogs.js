const { Router } = require("express");
const auth = require("../../middlewares/auth");
const {
  addBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/api/blogs");

const router = Router();

// /api/blogs endpoints

router.post("/", auth, addBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);
// router.get("/", getAllBlogs);
// router.get("/:id, getBlog");

module.exports = router;
