const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ["turfOwner", "academyOwner", "competitionOrganizer"], // Define allowed values
  },
  name: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
