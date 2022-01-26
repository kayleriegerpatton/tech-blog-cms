// INTERNAL IMPORTS
const { User } = require("../../models");
const logError = require("../../utils/logError");
const getPayloadWithValidFieldsOnly = require("../../utils/payloadValidator");

// /auth endpoints

const login = async (req, res) => {
  try {
    // get payload
    const payload = getPayloadWithValidFieldsOnly(
      ["password", "email"],
      req.body
    );

    // if not all payload fields are present, throw error
    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide the valid fields." });
    }

    // check if user exists in db
    const user = await User.findOne({ where: { email: payload.email } });
    // if user doesn't exist, throw error
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "User does not exist." });
    }

    // check password (user.checkPassword), throw error
    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, error: "User not authorized." });
    }

    // set user session info
    const userInSession = {
      id: user.get("id"),
      email: user.get("email"),
      username: user.get("username"),
    };
    // req.session.save logged in and user session info
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userInSession;

      return res.json({ success: true, message: "Logged in successfully." });
    });
  } catch (error) {
    logError("User login", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to login user." });
  }
};

const signup = async (req, res) => {
  try {
    // get payload
    const payload = getPayloadWithValidFieldsOnly(
      ["username", "password", "email"],
      req.body
    );

    // if not all payload fields are present, throw error
    if (Object.keys(payload).length !== 3) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide the valid fields." });
    }

    // check if user already exists in db
    const user = await User.findOne({
      where: { email: payload.email },
    });

    if (user) {
      console.log("user exists in db, controller");
      return res
        .status(400)
        .json({ success: false, error: "User already exists." });
    }

    // create new user record w/ payload
    await User.create(payload);

    return res.json({ success: true, message: "Created new user." });
  } catch (error) {
    logError("POST user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user." });
  }
};

const logout = (req, res) => {
  // if user is logged in, destroy session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.json({ success: true, message: "Logged out." });
    });
  } else {
    return res.status(404).json({
      success: false,
      error: "User already logged out.",
    });
  }
};

module.exports = { login, signup, logout };
