const { Router } = require("express");

const {
  addComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comments");

const router = Router();

// /api/comments endpoints
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
