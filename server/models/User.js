const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Should be hashed
  emailSettings: {
    smtpEmail: { type: String, default: "" }, // Separate SMTP email if needed
    smtpPassword: { type: String, default: "" }, // Should be encrypted in production
    smtpHost: { type: String, default: "smtp.gmail.com" },
    smtpPort: { type: Number, default: 587 }, // TLS default for Gmail
  },
});

module.exports = mongoose.model('User', UserSchema);
