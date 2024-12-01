const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emailSettings: {
    smtpEmail: { type: String, default: "" },
    smtpPassword: { type: String, default: "" }, 
    smtpHost: { type: String, default: "smtp.gmail.com" },
    smtpPort: { type: Number, default: 587 },
  },
});

module.exports = mongoose.model('User', UserSchema);
