const { Router } = require("express");

const renderDashboard = require("../../controllers/view/privateController");

const router = Router();

// private / endpoints
router.get("/dashboard", renderDashboard);
