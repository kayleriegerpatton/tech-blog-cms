const { Blog, User } = require("../../models");

const getAllBlogs = async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
    });

    const blogs = blogData.map((blog) => {
      // use moment to reformat createdAt??
      // const createdAtFormatted = moment(blog.createdAt).format("MMMM D, YYYY");

      // blog.creationDate = createdAtFormatted;
      // console.log(blog);

      return blog.get({ plain: true });
    });
    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllBlogs };
