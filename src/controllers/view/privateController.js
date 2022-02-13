const { Blog, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { id } = req.session.user;

    // get all blogs by user's id
    const blogsData = await Blog.findAll(
      { where: { user_id: id }, order: [["createdAt", "DESC"]] },
      {
        // include comments
        include: [
          {
            model: Comment,
            include: User,
          },
        ],
      }
    );

    const blogs = blogsData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", { blogs });
  } catch (error) {
    logError("Render dashboard", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderCreateBlog = (req, res) => {
  try {
    res.render("create-blog");
  } catch (error) {
    logError("Render create blog page", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderEditBlog = async (req, res) => {
  // get blog by id
  const blogData = await Blog.findOne({ where: { id: req.params.id } });

  // get plain blog data
  const blog = blogData.get({ plain: true });

  res.render("edit-blog", { blog });
};

const renderEditComment = async (req, res) => {
  // get comment by id
  const commentData = await Comment.findOne({ where: { id: req.params.id } });

  //  get plain comment data
  const comment = commentData.get({ plain: true });

  // pass comment data
  res.render("edit-comment", { comment });
};

module.exports = {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
};
