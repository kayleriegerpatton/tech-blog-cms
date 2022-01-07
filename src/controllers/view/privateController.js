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

    res.render("dashboard", { blogs });
  } catch (error) {
    logError("GET user's blogs", error.message);
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

  console.log(blog);

  res.render("edit-blog", { blog });
};

module.exports = { renderDashboard, renderCreateBlog, renderEditBlog };
