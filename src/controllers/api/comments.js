// import models
const { Comment } = require("../../models");
const logError = require("../../utils/logError");

// /api/comments
const addComment = async (req, res) => {
  try {
    const { comment, blog_id, user_id } = req.body;

    // check request body contents
    if (comment && blog_id && user_id) {
      await Comment.create({ comment, blog_id, user_id });

      return res.json({
        success: true,
        data: `Added new comment.`,
      });
    }

    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error: "Please provide the appropriate data entries.",
    });

    // server error
  } catch (error) {
    logError("POST comment", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updateComment = async (req, res) => {};
const deleteComment = async (req, res) => {};

module.exports = { addComment, updateComment, deleteComment };
