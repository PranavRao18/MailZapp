const express = require("express");
const {
  createCampaign,
  getAllCampaigns,
  generateAIContent,
} = require("../controllers/campaign");
const protect = require("../middleware/auth");

const router = express.Router();

// Route to create a new campaign (protected)
router.post("/", protect, createCampaign);

// Route to fetch all campaigns for the logged-in user (protected)
router.get("/", protect, getAllCampaigns);

// Route for AI-generated email content
router.post("/ai/generate", protect, generateAIContent);

module.exports = router;
