const { Blog, User, Comment } = require("../../models");
const logError = require("../../utils/logError");

const renderHomepage = async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [["createdAt", "DESC"]],
      include: [{ model: User }],
    });

    // map through blogs to get plain data
    const blogs = blogData.map((blog) => {
      return blog.get({ plain: true });
    });

    const { loggedIn } = req.session;

    res.render("homepage", { blogs, loggedIn });
  } catch (error) {
    logError("Render homepage", error.message);
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
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      // include user data (need username) and comments
      include: [
        { model: User },
        {
          model: Comment,
          include: User,
        },
      ],
      order: [[Comment, "createdAt", "DESC"]],
    });
    if (!blogData) {
      return res
        .status(404)
        .json({ message: `No blog with id ${req.params.id}.` });
    }

    // get plain blog data
    const blog = blogData.get({ plain: true });

    if (req.session.user) {
      const { id } = req.session.user;
      const { loggedIn } = req.session;

      return res.render("blog", { blog, id, loggedIn });
    }

    return res.render("blog", { blog });
  } catch (error) {
    logError("Render blog", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = { renderHomepage, renderSignup, renderLogin, renderBlog };
