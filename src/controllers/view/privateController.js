const res = require("express/lib/response");
const { Blog, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    // get all blogs by user's id
    const blogsData = await Blog.findAll(
      { where: { user_id: req.session.user.id } },
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

    console.log(blogs);

    res.render("dashboard", { blogs });
  } catch (error) {
    logError("GET user's blogs", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderCreateBlog = (req, res) => {
  res.render("create-blog");
};

const renderEditBlog = (req, res) => {
  res.render("");
};

module.exports = { renderDashboard, renderCreateBlog, renderEditBlog };
