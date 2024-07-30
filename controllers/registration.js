const Registration = require("../models/registration");

exports.createRegistration = async (req, res) => {
  try {
    const { userType, name, contactNo, email } = req.body;

    // Create a new registration instance
    const newRegistration = new Registration({
      userType,
      name,
      contactNo,
      email,
    });

    // Save the registration to the database
    await newRegistration.save();

    res.status(201).json({ success: true, data: newRegistration });
  } catch (error) {
    console.log("Error in Registraion", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
