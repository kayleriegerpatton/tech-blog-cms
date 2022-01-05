const { Router } = require("express");

const {
  renderDashboard,
  renderCreateBlog,
} = require("../../controllers/view/privateController");

const router = Router();

// private / endpoints
router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
// renderEditBlog?
// renderEditComment?

module.exports = router;
