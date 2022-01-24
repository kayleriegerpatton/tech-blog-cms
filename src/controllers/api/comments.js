// import models
const { Comment } = require("../../models");
const logError = require("../../utils/logError");

// /api/comments
const addComment = async (req, res) => {
  try {
    const { comment, blog_id } = req.body;

    // check request body contents
    if (comment && blog_id) {
      await Comment.create({ comment, blog_id, user_id: req.session.user.id });

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

const updateComment = async (req, res) => {
  try {
    // update a comment's content by its `id` value
    const { comment } = req.body;
    const { id } = req.params;

    // check for comment in db
    const commentId = await Comment.findByPk(id);

    // if comment exists, update
    if (commentId) {
      await Comment.update(
        { comment },
        {
          where: {
            id,
          },
        }
      );

      return res.json({
        success: true,
        data: `Updated comment ${id}.`,
      });
    }
    return res.status(404).json({
      success: false,
      error: `Comment with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update comment." });
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      data: `Comment with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = { addComment, updateComment, deleteComment };
