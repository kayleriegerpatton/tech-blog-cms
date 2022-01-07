const { Router } = require("express");

const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
} = require("../../controllers/view/privateController");

const router = Router();

// private / endpoints
router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
router.get("/edit-blog/:id", renderEditBlog);
router.get("edit-comment/:id", renderEditComment);

module.exports = router;
