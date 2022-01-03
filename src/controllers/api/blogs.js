// INTERNAL IMPORTS
const { Blog, User, Comment } = require("../../models");
// import colors?
// import logError fn?

// const getAllBlogs = async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [{ model: User }],
//     });

//     const blogs = blogData.map((blog) => {
//       return blog.get({ plain: true });
//     });
//     res.json(blogs);
//   } catch (error) {
//     console.log(error);
//   }
// };

// /api/blogs/
const addBlog = async (req, res) => {};

// /api/blogs/:id
const updateBlog = async (req, res) => {};
const deleteBlog = async (req, res) => {};

module.exports = { addBlog, updateBlog, deleteBlog };
