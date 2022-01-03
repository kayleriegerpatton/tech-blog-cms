const { Router } = require("express");

// import controller fns

// further routes
const blogRoutes = require("./blog");

const router = Router();

//  '/api' endpoints

router.use("/blogs", blogRoutes);

module.exports = router;
