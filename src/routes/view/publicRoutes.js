const { Router } = require("express");

const {
  renderHomepage,
  renderSignup,
  renderLogin,
  renderBlog,
} = require("../../controllers/view/publicController");

const router = Router();

// public / endpoints
router.get("/", renderHomepage);
router.get("/signup", renderSignup);
router.get("/login", renderLogin);
router.get("/blogs/:id", renderBlog);

module.exports = router;
