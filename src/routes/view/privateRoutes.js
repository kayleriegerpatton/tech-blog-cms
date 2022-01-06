const { Router } = require("express");

const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
} = require("../../controllers/view/privateController");

const router = Router();

// private / endpoints
router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
router.get("edit-blog", renderEditBlog);
// renderEditComment?

module.exports = router;
