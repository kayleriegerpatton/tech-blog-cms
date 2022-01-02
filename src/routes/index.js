const { Router } = require("express");

const authRoutes = require("./auth");
const viewRoutes = require("./view");

const router = Router();

router.use("/auth", authRoutes);
router.use("/", viewRoutes);

module.exports = router;
