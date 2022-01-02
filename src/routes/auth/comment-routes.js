const { Router } = require("express");

const {
  addComment,
  updateComment,
  deleteComment,
} = require("../../controllers/auth/comments");

const router = Router();

// /auth/blog/:id/comment endpoints
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
