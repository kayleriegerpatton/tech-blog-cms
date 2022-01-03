const { Router } = require("express");
const auth = require("../../middlewares/auth");
const {
  addComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comments");

const router = Router();

// /api/comments endpoints
router.post("/", auth, addComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);

module.exports = router;
