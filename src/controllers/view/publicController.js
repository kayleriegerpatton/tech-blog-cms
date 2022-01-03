const { Blog, User, Comment } = require("../../models");

const renderHomepage = async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });

  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);

  res.render("homepage", { blogs });
};

const renderSignup = (req, res) => {
  res.render("signup");
};

const renderLogin = (req, res) => {
  res.render("login");
};

const renderBlog = async (req, res) => {
  const blogData = await Blog.findByPk(req.params.id, {
    // include user data (need username) and comments
    include: [
      { model: User },
      {
        model: Comment,
      },
    ],
  });
  if (!blogData) {
    return res
      .status(404)
      .json({ message: `No blog with id ${req.params.id}.` });
  }
  const blog = blogData.get({ plain: true });
  console.log(blog);

  res.render("blog", blog);
};

module.exports = { renderHomepage, renderSignup, renderLogin, renderBlog };
