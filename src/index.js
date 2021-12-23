// external imports
require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// internal imports
