const { Blog, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
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

  console.log(blogsData);

  // if user has blogs, render them in dashboard
  if (blogsData.length >= 1) {
    // get plain blogsData
    const blogs = blogsData.get({ plain: true });
    console.log(blogs);

    // pass blog by id data to handlebars
    res.render("dashboard", blogs);
  } else {
    res.render("dashboard");
    // return res
    //   .status(404)
    //   .json({ message: `No blogs for user ${req.session.user.id}.` });
  }
};

module.exports = renderDashboard;
