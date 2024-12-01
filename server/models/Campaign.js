const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    recipients: { type: [String], required: true },
    cc: { type: [String], default: [] },
    bcc: { type: [String], default: [] },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    scheduleDateTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Scheduled", "Sent", "In Progress", "Failed"],
      default: "Scheduled",
    }, // New status field
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Campaign", campaignSchema);
  
