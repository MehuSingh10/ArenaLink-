const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  competitionName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sports: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  competitionType: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  organizers: [
    {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  ],
  posterImage: {
    type: String,
    required: true,
  },
});

const competition = mongoose.model("competition", competitionSchema);

module.exports = competition;
