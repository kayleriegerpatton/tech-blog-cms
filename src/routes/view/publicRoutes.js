const { Router } = require("express");

const {
  renderHomepage,
  renderSignup,
  renderLogin,
  renderBlog,
} = require("../../controllers/view/publicController");

const router = Router();

// public / endpoints
router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.get("/blogs/:id", renderBlog);
router.get("/*", renderHomepage);

module.exports = router;
