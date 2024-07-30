const mongoose = require("mongoose");

const clubsSchema = new mongoose.Schema({
  clubName: {
    type: String,
    //required: true,
  },
  logo: {
    type: String,
  },
  location: {
    type: String,
    //required: true,
  },
  locationURL: {
    type: String,
  },
  sports: {
    type: [String],
    //required: true,
  },
  establishedYear: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Clubs", clubsSchema);
