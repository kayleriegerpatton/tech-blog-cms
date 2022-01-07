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

// /api/blogs/edit/:id
const updateBlog = async (req, res) => {
  try {
    // update a blog's title and content by its `id` value
    const { title, content } = req.body;
    const { id } = req.params;
    // check for blog in db
    const blogId = await Blog.findByPk(id);
    if (blogId) {
      await Blog.update(
        { title, content },
        {
          where: {
            id,
          },
        }
      );
      return res.json({
        success: true,
        data: `Updated blog ${title}.`,
      });
    }
    return res.status(404).json({
      success: false,
      error: `Blog with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT blog", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

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
