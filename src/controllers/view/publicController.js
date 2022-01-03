const { Blog, User, Comment } = require("../../models");
const logError = require("../../utils/logError");

const renderHomepage = async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
    });

    const blogs = blogData.map((blog) => {
      return blog.get({ plain: true });
    });

    res.render("homepage", { blogs });
  } catch (error) {
    logError("GET blogs", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    logError("Render signup", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    logError("Render login", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const renderBlog = async (req, res) => {
  const blogData = await Blog.findByPk(req.params.id, {
    // include user data (need username) and comments
    include: [
      { model: User },
      {
        model: Comment,
        include: User,
      },
    ],
  });
  if (!blogData) {
    return res
      .status(404)
      .json({ message: `No blog with id ${req.params.id}.` });
  }

  const blog = blogData.get({ plain: true });

  res.render("blog", blog);
};

module.exports = { renderHomepage, renderSignup, renderLogin, renderBlog };
