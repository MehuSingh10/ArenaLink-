const Club = require("../models/clubs");

const getAllClubs = async (req, res) => {
  const response = await Club.find({});

  res.status(200).json({ status: "success", data: response });
};

const createClub = async (req, res, next) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).json({
      status: "success",
      data: club,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
module.exports = { getAllClubs, createClub };
