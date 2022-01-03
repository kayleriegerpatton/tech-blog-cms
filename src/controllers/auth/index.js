// INTERNAL IMPORTS
const { User } = require("../../models");
const logError = require("../../utils/logError");

// import colors?

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
    logError("POST user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const logout = (req, res) => {};

module.exports = { login, signup, logout };
