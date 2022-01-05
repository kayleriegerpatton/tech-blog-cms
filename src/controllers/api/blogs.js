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
    const { title, content, user_id } = req.body;

    // check request body contents
    if (title && content && user_id) {
      await Blog.create({ title, content, user_id });

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
const deleteBlog = async (req, res) => {};

module.exports = { addBlog, updateBlog, deleteBlog, getAllBlogs };
