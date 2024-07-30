const express = require("express");
const router = express.Router();

const { getAllClubs, createClub } = require("../controllers/clubs");

router.route("/").get(getAllClubs).post(createClub);

module.exports = router;
