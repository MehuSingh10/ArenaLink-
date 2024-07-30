const Competition = require("../models/competition");

const getAllCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find({});
    res.status(200).json({ status: "success", data: competitions });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const createCompetition = async (req, res) => {
  try {
    const competition = await Competition.create(req.body);
    res.status(201).json({ status: "success", data: competition });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const updateCompetition = async (req, res) => {
  try {
    const competitionId = req.params.id;
    const updatedCompetition = await Competition.findByIdAndUpdate(
      competitionId,
      req.body,
      { new: true }
    );
    if (!updatedCompetition) {
      return res
        .status(404)
        .json({ status: "error", message: "Competition not found" });
    }
    res.status(200).json({ status: "success", data: updatedCompetition });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const deleteCompetition = async (req, res) => {
  try {
    const competitionId = req.params.id;
    const deletedCompetition = await Competition.findByIdAndDelete(
      competitionId
    );
    if (!deletedCompetition) {
      return res
        .status(404)
        .json({ status: "error", message: "Competition not found" });
    }
    res
      .status(200)
      .json({ status: "success", message: "Competition deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllCompetitions,
  createCompetition,
  updateCompetition,
  deleteCompetition,
};
