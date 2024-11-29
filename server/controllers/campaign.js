const Campaign = require("../models/Campaign");

// Create a new campaign
const createCampaign = async (req, res) => {
    try {
        const { name, recipients, cc, bcc, subject, content, scheduleDateTime } = req.body;

        console.log(req.user);

        // Validate inputs
        if (!name || !recipients || !subject || !content || !scheduleDateTime) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const newCampaign = new Campaign({
            name,
            recipients,
            cc,
            bcc,
            subject,
            content,
            scheduleDateTime,
            user: req.user._id, // Associate the campaign with the logged-in user
        });

        await newCampaign.save();
        res.status(201).json({ message: "Campaign created successfully.", campaign: newCampaign });
    } catch (error) {
        console.error("Error creating campaign:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const getAllCampaigns = async (req, res) => {
    try {
        // Fetch campaigns for the logged-in user
        const campaigns = await Campaign.find({ user: req.user._id });

        // Send the campaigns as the response
        return res.status(200).json(campaigns);
    } catch (error) {
        console.error("Error fetching campaigns:", error);

        // Check if headers are already sent before attempting to send a response
        if (!res.headersSent) {
            return res.status(500).json({ message: "Internal server error." });
        }

        // Log a warning if response attempt was made after headers were sent
        console.warn("Attempted to send response after headers sent.");
    }
};


// AI Content Generation
const generateAIContent = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "AI prompt is required." });
        }

        // Call to AI API (e.g., OpenAI)
        const generatedContent = `This is a placeholder content generated using AI for prompt: "${prompt}"`;
        res.status(200).json({ content: generatedContent });
    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { createCampaign, getAllCampaigns, generateAIContent };
