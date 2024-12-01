const Campaign = require("../models/Campaign");
const axios = require('axios');

async function triggerKestraFlow(inputData) {
    const kestraUrl = 'http://localhost:8080';

    try {
        const response = await axios.post(`${kestraUrl}/api/v1/executions/io.kestra.example/python-example`, inputData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Kestra flow triggered successfully:', response.data);
    } catch (error) {
        console.error('Error triggering Kestra flow:', error);
        throw error;
    }
}

// Create a new campaign
const createCampaign = async (req, res) => {
    try {
        const { name, recipients, subject, content, scheduleDateTime } = req.body;

        // Validate inputs
        if (!name || !recipients || !subject || !content || !scheduleDateTime) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const user = req.user;

        const newCampaign = new Campaign({
            name,
            recipients,
            // cc,
            // bcc,
            subject,
            content,
            scheduleDateTime,
            user: req.user._id,
        });
        await newCampaign.save();

        // Calculate delay in seconds from scheduleDateTime
        const scheduleDate = new Date(scheduleDateTime);
        const currentDate = new Date();
        const delayInSeconds = Math.floor((scheduleDate - currentDate) / 1000);

        // Prepare Kestra flow input data using user's credentials
        const kestraInputData = {
            smtp_email: user.emailSettings.smtpEmail,
            smtp_password: user.emailSettings.smtpPassword, // Assuming password is securely stored
            recipient: recipients.join(", "),
            subject,
            body: content,
            delay: delayInSeconds,
            campaign_id: newCampaign._id.toString()
        };

        // Trigger Kestra flow using your chosen method (e.g., Kestra API call)
        await triggerKestraFlow(kestraInputData);

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
