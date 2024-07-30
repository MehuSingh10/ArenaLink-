const express = require("express");
const router = express.Router();
const registration = require("../controllers/registration");

// Route for creating a new registration
router.post("/register", registration.createRegistration);

module.exports = router;
