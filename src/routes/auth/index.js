const { Router } = require("express");

// import controller fns
const { login, signup, logout } = require("../../controllers/auth");

const router = Router();

//  '/auth' endpoints
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;
