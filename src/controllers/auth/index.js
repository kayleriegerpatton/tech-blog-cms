// import models
const { Blog, User } = require("../../models");
// import colors
// import logError fn
const logError = require("../../utils/logError");

// /auth
const login = async (req, res) => {};
const signup = async (req, res) => {
  try {
    const newUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ message: "User logged in.", user: newUserData });
    });
  } catch (error) {
    logError("", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};
const logout = (req, res) => {};
const addBlog = async (req, res) => {};

module.exports = { login, signup, logout, addBlog };
