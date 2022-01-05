// INTERNAL IMPORTS
const { Blog } = require("../../models");
const logError = require("../../utils/logError");

const getAllBlogs = async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => {
      return blog.get({ plain: true });
    });
    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

// /api/blogs/
const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // check request body contents
    if (title && content) {
      await Blog.create({ title, content, user_id: req.session.user.id });

      return res.json({
        success: true,
        data: `Added new blog.`,
      });
    }

    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error: "Please provide the appropriate data entries.",
    });

    // server error
  } catch (error) {
    logError("POST blog", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

// /api/blogs/:id
const updateBlog = async (req, res) => {};

const deleteBlog = async (req, res) => {
  try {
    // delete blog by its `id` value
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      data: `Blog with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE blog", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = { addBlog, updateBlog, deleteBlog, getAllBlogs };
