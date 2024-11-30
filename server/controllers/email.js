const User = require('../models/User');

// Save or Update Email Settings
const updateEmailSettings = async (req, res) => {
  try {
    const { smtpEmail, smtpPassword, smtpHost, smtpPort } = req.body;

    // Validate input
    if (!smtpEmail || !smtpPassword) {
      return res.status(400).json({ message: "SMTP email and password are required." });
    }

    // Update the email settings in the user model
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.emailSettings = {
      smtpEmail,
      smtpPassword, // Store encrypted in production
      smtpHost: smtpHost || "smtp.gmail.com",
      smtpPort: smtpPort || 587,
    };

    await user.save();
    res.status(200).json({ message: "Email settings updated successfully.", emailSettings: user.emailSettings });
  } catch (error) {
    console.error("Error updating email settings:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Fetch Email Settings
const getEmailSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching email settings:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { updateEmailSettings, getEmailSettings };
