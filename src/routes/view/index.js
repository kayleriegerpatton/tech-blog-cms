const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const auth = require("../../middlewares/auth");

const router = Router();

router.use(auth, privateRoutes);
router.use(publicRoutes);

module.exports = router;
